/** Demo HTTP client for the Monic Theory API. */

import { existsSync, readFileSync, statSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

const ENV_PATH = fileURLToPath(new URL("../.env", import.meta.url));
const ORG_FALLBACK = "YOUR_ORG_HERE";
const BEARER_FALLBACK = "api_token_here";

function flag(name: string): string | undefined {
  const prefix = `--${name}`;
  for (let index = 0; index < process.argv.length; index += 1) {
    const arg = process.argv[index];
    if (arg === prefix) {
      const next = process.argv[index + 1];
      if (next !== undefined && !next.startsWith("--")) {
        return next;
      }
      return "";
    }
    if (arg.startsWith(`${prefix}=`)) {
      return arg.slice(prefix.length + 1);
    }
  }
  return undefined;
}

function dotenv(path: string): Record<string, string> {
  if (!existsSync(path)) {
    return {};
  }
  const found: Record<string, string> = {};
  for (const raw of readFileSync(path, "utf8").split(/\r?\n/)) {
    const line = raw.trim();
    if (line === "" || line.startsWith("#") || !line.includes("=")) {
      continue;
    }
    const eq = line.indexOf("=");
    const key = line.slice(0, eq).trim();
    let value = line.slice(eq + 1).trim();
    if (value.length >= 2 && (value[0] === '"' || value[0] === "'") && value[0] === value.at(-1)) {
      value = value.slice(1, -1);
    }
    if (key === "ORG" || key === "BEARER") {
      found[key] = value;
    }
  }
  return found;
}

function pick(flagName: string, env: Record<string, string>, key: string, fallback: string): string {
  const flagged = flag(flagName);
  if (flagged) {
    return flagged;
  }
  const fromFile = env[key] ?? "";
  if (fromFile) {
    return fromFile;
  }
  return fallback;
}

const env = dotenv(ENV_PATH);
export const ORG = pick("org", env, "ORG", ORG_FALLBACK);
export const BEARER = pick("bearer", env, "BEARER", BEARER_FALLBACK);
export const BASE = `https://dev.monictheory.com/${ORG}`;

export function die(msg: string, code = 1): never {
  console.error(msg);
  process.exit(code);
}

export async function request(
  method: string,
  path: string,
  options?: { body?: Record<string, unknown>; auth?: boolean },
): Promise<{ status: number; raw: Buffer; contentType: string }> {
  const auth = options?.auth ?? true;
  const body = options?.body;
  const headers: Record<string, string> = {};
  if (body !== undefined) {
    headers["Content-Type"] = "application/json";
  }
  if (auth) {
    headers.Authorization = `Bearer ${BEARER}`;
  }
  let response: Response;
  try {
    response = await fetch(`${BASE}${path}`, {
      method,
      headers,
      body: body === undefined ? undefined : JSON.stringify(body),
    });
  } catch {
    die(`Could not reach ${path}.`);
  }
  const raw = Buffer.from(await response.arrayBuffer());
  if (response.status === 429) {
    die(
      `${method} ${path} was rate limited. The limit refills each minute. Wait a minute and run the example again.`,
    );
  }
  if (!response.ok) {
    die(`${method} ${path} failed with HTTP ${response.status}.`);
  }
  const contentType = response.headers.get("Content-Type") ?? "";
  return { status: response.status, raw, contentType };
}

export function writeAndCheck(
  path: string,
  data: Buffer,
  header: Buffer,
  label: string,
): void {
  writeFileSync(path, data);
  const size = statSync(path).size;
  if (size === 0) {
    die(`Could not save ${path}. The response was empty.`);
  }
  if (!data.subarray(0, header.length).equals(header)) {
    if (header.equals(Buffer.from("MThd"))) {
      die(`Could not save ${path}. The response was not a MIDI file.`);
    }
    die(`Could not save ${path}. The response was not a zip file.`);
  }
  console.log(`ok ${label}: ${path} (${size} bytes)`);
}

export function writeJson(path: string, obj: unknown): void {
  const text = JSON.stringify(obj, null, 2) + "\n";
  writeFileSync(path, text, "utf8");
  if (statSync(path).size === 0) {
    die(`Could not save ${path}. The response was empty.`);
  }
  console.log(`Response written to: ${path}`);
}
