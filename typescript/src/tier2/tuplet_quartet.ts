/**
 * Custom genre example: four tracks of complete Positioned Euc tuplets.
 *
 * Duple E(2,2) and quintuplet E(5,5) are one bar. Triplet E(3,3) and septuplet E(7,7) are two bars.
 * Hits equal events, so every note in a track has the same duration and the rhythm fills its clip.
 * Phase and offset are 0. The coefficient is 1/1. Device lists are empty, so the rhythm seeds stay
 * off and each tuplet plays as written.
 *
 * runExample in main.ts calls runTupletQuartet. Set ORG and BEARER in client.ts, then npm start.
 * Files land in sandbox_out/custom-genres/.
 * Be wary of rate limits when running batch production examples! 
 */

import { mkdirSync } from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { cohortRequestFromQuery, type InstantiateQuery } from "../shared/cohort";
import { die, request, writeAndCheck, writeJson } from "../client";

type JsonObject = Record<string, unknown>;

/** One track. events is both the tuple space and the note count. scale 0 is one bar; scale 1 is two bars. */
type TupletSpec = {
  /** Clip label. */
  label: string;
  /** Register 1–7. Registers not listed here are left empty on the template. */
  register: number;
  /** Tuple space. Hits are set equal to this, so the tuplet is complete. */
  events: number;
  /** Clip scale and rhythm time scale together. 0 = 1 bar, 1 = 2 bars. */
  scale: number;
};

/** Registers 1, 3, 5, and 7. The rhythm time scale matches the clip scale on every track. */
const TUPLETS: TupletSpec[] = [
  { label: "Duple", register: 1, events: 2, scale: 0 },
  { label: "Triplet", register: 3, events: 3, scale: 1 },
  { label: "Quintuplet", register: 5, events: 5, scale: 0 },
  { label: "Septuplet", register: 7, events: 7, scale: 1 },
];

const REGISTER_COUNT = 7;

/**
 * One trope. Rhythm kind is Positioned Euc: E(events, events), phase 0, offset 0, coefficient 1/1.
 * The computed rhythm repeats those values so the drawn clip matches the basis.
 * Empty device lists leave the rhythm unchanged.
 */
function tupletTrope(spec: TupletSpec): JsonObject {
  const { label, register, events, scale } = spec;
  const hits = events;
  return {
    label,
    setting: {
      track_scale: scale,
      articulation: 1,
      stem_kind: "Instrumental",
      pc: 38,
    },
    rhythm: {
      PositionedEuc: {
        seq: { hits, events, phase: 0, offset: 0 },
        time_scale: scale,
        coefficient: [1, 1],
      },
    },
    arfs: {
      harmonic: {
        harmonic_spread: 1,
        key_signature: 0,
        max_richness: 3,
        n_voices: 1,
        voice_type: 0,
      },
      melodic: {
        depth: 0,
        dynamic: [3],
        melodic_offset: 2,
        modality: "Ionian",
        register,
        rotation_offset: 0,
        same_q: true,
        span: 7 - register,
        sway: 1,
      },
      rhythmic: {
        base_of_rhythm: 2,
        computed_rhythm: {
          coefficient: [1, 1],
          mode: { kind: "PositionedEuc", events, hits, offset: 0, phase: 0 },
          time_scale: scale,
        },
        n_bars: 2 ** scale,
      },
    },
    devices: { harmonic: [], dynamic: [], melodic: [], rhythmic: [] },
  };
}

/**
 * Sample-pack template sent to POST /api/sample-pack/instantiate.
 * Registers 2, 4, and 6 are null. Each filled register is a Loop of one trope.
 * The score profile matches the bundled example: 144 bpm, common time, C major, Ionian.
 */
export function tupletQuartetTemplate(): JsonObject {
  const registers: (JsonObject | null)[] = [];
  for (let register = 1; register <= REGISTER_COUNT; register += 1) {
    const spec = TUPLETS.find((t) => t.register === register);
    registers.push(
      spec === undefined
        ? null
        : {
            register,
            form_patterns: ["Loop"],
            tropes: [tupletTrope(spec)],
          },
    );
  }
  return {
    description:
      "Four complete Positioned Euc tuplets: duple, triplet, quintuplet, and septuplet.",
    score_profile: {
      label: "Tuplet Quartet",
      bpm: 144,
      time_scale: 4,
      time_signature: 4,
      key_signature: 0,
      in_major: true,
      modality: "Ionian",
      max_richness: 3,
    },
    registers,
  };
}

function isNonEmptyObject(value: unknown): value is JsonObject {
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

/**
 * Write the template, instantiate it, render the cohort, and download the sample-pack zip.
 * Writes tuplet-quartet.json, tuplet-quartet.instantiated.json, and tuplet-quartet.sample-pack.zip
 * under outDir/custom-genres/.
 */
export async function runTupletQuartet(outDir: string): Promise<void> {
  const genresDir = path.join(outDir, "custom-genres");
  mkdirSync(genresDir, { recursive: true });

  // Built locally. This example does not fetch a preset from GET /api/genre.
  const template = tupletQuartetTemplate();
  writeJson(
    path.join(genresDir, "tuplet-quartet.json"),
    template,
    "custom genre template tuplet-quartet",
  );

  // Draw the clips. Rhythm seeds come back off, so the tuplets stay as authored.
  const instantiateResponse = await request("POST", "/api/sample-pack/instantiate", {
    body: template,
  });
  const query: unknown = JSON.parse(instantiateResponse.raw.toString("utf8"));
  if (!isNonEmptyObject(query)) {
    die("instantiate tuplet-quartet: empty query");
  }
  writeJson(
    path.join(genresDir, "tuplet-quartet.instantiated.json"),
    query,
    "custom genre instantiated tuplet-quartet",
  );

  const cohortBody = cohortRequestFromQuery(query as InstantiateQuery);
  if (!nonEmptyArray(cohortBody.tracks)) {
    die("tuplet-quartet: instantiated query has no timelines");
  }
  // Render one result per track.
  const cohortResponse = await request("POST", "/api/sample-pack/cohort", {
    body: cohortBody,
  });
  const cohort: unknown = JSON.parse(cohortResponse.raw.toString("utf8"));
  if (!isNonEmptyObject(cohort) || !nonEmptyArray(cohort.results)) {
    die("tuplet-quartet: empty cohort results");
  }
  const tracks = cohort.results;
  console.log(`ok custom genre cohort tuplet-quartet (${tracks.length} track(s))`);

  // Download the rendered pack.
  const packResponse = await request("POST", "/download/sample_pack/fetch", {
    body: { pack: { score: cohortBody.score, tracks } },
  });
  writeAndCheck(
    path.join(genresDir, "tuplet-quartet.sample-pack.zip"),
    packResponse.raw,
    Buffer.from("PK"),
    `custom genre pack zip tuplet-quartet (${packResponse.contentType})`,
  );
}

if (import.meta.url === pathToFileURL(process.argv[1] ?? "").href) {
  const outDir = fileURLToPath(new URL("../../sandbox_out", import.meta.url));
  await runTupletQuartet(outDir);
}
