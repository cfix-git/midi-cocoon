/** Visual compose request, POST /api/visual_compose, and POST /download/fetch. */

import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { die, request, writeAndCheck } from "../client";

export function visualCompositionExample(): Record<string, unknown> {
  return {
  "pagination": {
    "limit": 6,
    "offset": 0,
    "pagenum": 1
  },
  "query": {
    "breath_band": "B3",
    "datetime": {
      "day": 15,
      "hour": 12,
      "minute": 0,
      "month": 9,
      "year": 2026
    },
    "description": "",
    "in_major": true,
    "key_signature": 0,
    "max_richness": 2,
    "n_breaths": 3,
    "schema": 3,
    "tempo_band": "Andante"
  }
};
}

const OUT_DIR = fileURLToPath(new URL("../../sandbox_out", import.meta.url));

function isNonEmptyObject(value: unknown): value is Record<string, unknown> {
  return (
    typeof value === "object" &&
    value !== null &&
    !Array.isArray(value) &&
    Object.keys(value).length > 0
  );
}

function nonEmptyArray(value: unknown): value is unknown[] {
  return Array.isArray(value) && value.length > 0;
}

export async function visualCompose(): Promise<unknown[]> {
  const response = await request("POST", "/api/visual_compose", {
    body: visualCompositionExample(),
  });
  const compose: unknown = JSON.parse(response.raw.toString("utf8"));
  if (!isNonEmptyObject(compose) || !nonEmptyArray(compose.results)) {
    die("visual_compose: empty results");
  }
  console.log(`ok visual_compose (${compose.results.length} result(s))`);
  return compose.results;
}

export async function fetchVisualMidi(results: unknown[]): Promise<void> {
  const response = await request("POST", "/download/fetch", {
    body: { items: results },
  });
  writeAndCheck(
    path.join(OUT_DIR, "visual_compose.mid"),
    response.raw,
    Buffer.from("MThd"),
    `fetch mid (${response.contentType})`,
  );
}

if (import.meta.url === pathToFileURL(process.argv[1] ?? "").href) {
  const { mkdirSync } = await import("node:fs");
  mkdirSync(OUT_DIR, { recursive: true });
  await fetchVisualMidi(await visualCompose());
}
