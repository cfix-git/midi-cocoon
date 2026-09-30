/** Demo HTTP client for the Monic Theory API. */

import { writeFileSync, statSync } from "node:fs";
import { inspect } from "node:util";

export const ORG = "YOUR_ORG_HERE";
export const BASE = `https://dev.monictheory.com/${ORG}`;
export const BEARER = "api_token_here";

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
  } catch (error) {
    die(`${method} ${path} failed: ${error}`);
  }
  const raw = Buffer.from(await response.arrayBuffer());
  if (!response.ok) {
    const snippet = raw.subarray(0, 500).toString("utf8");
    die(`${method} ${path} -> HTTP ${response.status}\n${snippet}`);
  }
  const contentType = response.headers.get("Content-Type") ?? "";
  return { status: response.status, raw, contentType };
}

export function writeAndCheck(
  path: string,
  data: Buffer,
  magic: Buffer,
  label: string,
): void {
  writeFileSync(path, data);
  const size = statSync(path).size;
  if (size === 0) {
    die(`${label}: empty file ${path}`);
  }
  if (!data.subarray(0, magic.length).equals(magic)) {
    const first8 = inspect(data.subarray(0, 8));
    die(`${label}: bad magic at ${path} (got ${first8})`);
  }
  console.log(`ok ${label}: ${path} (${size} bytes)`);
}

export function writeJson(path: string, obj: unknown, label: string): void {
  const text = JSON.stringify(obj, null, 2) + "\n";
  writeFileSync(path, text, "utf8");
  if (statSync(path).size === 0) {
    die(`${label}: empty file ${path}`);
  }
  console.log(`ok ${label}: ${path}`);
}
