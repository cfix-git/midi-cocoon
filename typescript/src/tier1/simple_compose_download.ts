/** POST /download/fetch for the simple compose MIDILite results. */

import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { request, writeAndCheck } from "../client";
import { simpleCompose } from "./simple_compose";

const OUT_DIR = fileURLToPath(new URL("../../sandbox_out", import.meta.url));

export async function simpleComposeDownload(results: unknown[]): Promise<void> {
  const response = await request("POST", "/download/fetch", {
    body: { items: results },
  });
  if (results.length === 1) {
    writeAndCheck(
      path.join(OUT_DIR, "simple_compose.mid"),
      response.raw,
      Buffer.from("MThd"),
      `download midi (${response.contentType})`,
    );
    return;
  }
  writeAndCheck(
    path.join(OUT_DIR, "simple_compose.zip"),
    response.raw,
    Buffer.from("PK"),
    `download zip (${response.contentType})`,
  );
}

if (import.meta.url === pathToFileURL(process.argv[1] ?? "").href) {
  const { mkdirSync } = await import("node:fs");
  mkdirSync(OUT_DIR, { recursive: true });
  await simpleComposeDownload(await simpleCompose());
}
