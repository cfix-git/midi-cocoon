/** Preset-genre tour: fetch, instantiate, cohort, and download each pack. */

import { createHash } from "node:crypto";
import { mkdirSync } from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { die, request, writeAndCheck, writeJson } from "../client";
import {
  cohortRequestFromQuery,
  type InstantiateQuery,
} from "../shared/cohort";

const OUT_DIR = fileURLToPath(new URL("../../sandbox_out", import.meta.url));
const GENRES_DIR = path.join(OUT_DIR, "preset-genres");

const PRESET_GENRE_IDS = [
  "techno",
  "trance",
  "house",
  "downtempo",
  "light_air",
  "dark_mood",
  "bedtime_drones",
  "open_zones",
  "trap",
  "boom_bap",
  "rap",
  "drill",
];

function sortValue(value: unknown): unknown {
  if (Array.isArray(value)) {
    return value.map(sortValue);
  }
  if (value !== null && typeof value === "object") {
    const source = value as Record<string, unknown>;
    const sorted: Record<string, unknown> = {};
    for (const key of Object.keys(source).sort()) {
      sorted[key] = sortValue(source[key]);
    }
    return sorted;
  }
  return value;
}

function contentHash(obj: unknown): string {
  const canonical = JSON.stringify(sortValue(obj));
  return createHash("sha256").update(canonical).digest("hex").slice(0, 16);
}

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

export async function fetchAndInstantiateGenres(): Promise<void> {
  mkdirSync(GENRES_DIR, { recursive: true });
  for (const presetGenreId of PRESET_GENRE_IDS) {
    const templateResponse = await request("GET", `/api/genre/${presetGenreId}`);
    const template: unknown = JSON.parse(templateResponse.raw.toString("utf8"));
    if (!isNonEmptyObject(template)) {
      die(`genre ${presetGenreId}: empty template`);
    }
    writeJson(
      path.join(GENRES_DIR, `${presetGenreId}.json`),
      template,
      `genre template ${presetGenreId}`,
    );

    const instantiateResponse = await request("POST", "/api/sample-pack/instantiate", {
      body: template,
    });
    const query: unknown = JSON.parse(instantiateResponse.raw.toString("utf8"));
    if (!isNonEmptyObject(query)) {
      die(`instantiate ${presetGenreId}: empty query`);
    }
    const digest = contentHash(query);
    writeJson(
      path.join(GENRES_DIR, `${presetGenreId}.instantiated.${digest}.json`),
      query,
      `genre instantiated ${presetGenreId}`,
    );

    const cohortBody = cohortRequestFromQuery(query as InstantiateQuery);
    const cohortTracks = cohortBody.tracks;
    if (!nonEmptyArray(cohortTracks)) {
      die(`genre ${presetGenreId}: instantiated query has no timelines`);
    }
    const cohortResponse = await request("POST", "/api/sample-pack/cohort", {
      body: cohortBody,
    });
    const cohort: unknown = JSON.parse(cohortResponse.raw.toString("utf8"));
    if (!isNonEmptyObject(cohort) || !nonEmptyArray(cohort.results)) {
      die(`genre ${presetGenreId}: empty cohort results`);
    }
    const tracks = cohort.results;
    console.log(`ok genre cohort ${presetGenreId} (${tracks.length} track(s))`);

    const packResponse = await request("POST", "/download/sample_pack/fetch", {
      body: { pack: { score: cohortBody.score, tracks } },
    });
    writeAndCheck(
      path.join(GENRES_DIR, `${presetGenreId}.sample-pack.${digest}.zip`),
      packResponse.raw,
      Buffer.from("PK"),
      `genre pack zip ${presetGenreId} (${packResponse.contentType})`,
    );
  }
}

if (import.meta.url === pathToFileURL(process.argv[1] ?? "").href) {
  mkdirSync(OUT_DIR, { recursive: true });
  await fetchAndInstantiateGenres();
}
