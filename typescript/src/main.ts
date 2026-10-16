/** For Developers with a valid org and API key. */

import { mkdirSync } from "node:fs";
import { createInterface } from "node:readline/promises";
import { fileURLToPath } from "node:url";
import { die, request } from "./client";
import { downloadFetch } from "./tier1/download_fetch";
import { simpleCompose } from "./tier1/simple_compose";
import { simpleComposeDownload } from "./tier1/simple_compose_download";
import { visualCompose } from "./tier1/visual_compose";
import { fetchAndInstantiateGenres } from "./tier2/preset_genres";
import { fetchSamplePack, samplePackCohort } from "./tier2/trap_cohort";
import { runTupletQuartet } from "./tier2/tuplet_quartet";

const OUT_DIR = fileURLToPath(new URL("../sandbox_out", import.meta.url));
const input = createInterface({ input: process.stdin, output: process.stdout });

async function health(): Promise<void> {
  const { status } = await request("GET", "/health", { auth: false });
  if (status !== 200) {
    die(`Health check failed with HTTP ${status}.`);
  }
  console.log("health response");
}

async function trapCohort(): Promise<void> {
  await fetchSamplePack(await samplePackCohort());
}

async function downloadExample(): Promise<void> {
  await downloadFetch(await visualCompose());
}

async function simpleExample(): Promise<void> {
  await simpleCompose();
}

async function simpleMidi(): Promise<void> {
  await simpleComposeDownload(await simpleCompose());
}

async function tupletQuartet(): Promise<void> {
  await runTupletQuartet(OUT_DIR);
}

async function visualExample(): Promise<void> {
  await visualCompose();
}

type Entry = readonly [string, () => Promise<void>];
type Row = string | Entry;

async function runAll(): Promise<void> {
  await health();
  for (const row of menu) {
    if (!Array.isArray(row) || row[0] === "Run All") {
      continue;
    }
    await row[1]();
  }
  console.log("done");
}

const menu: Row[] = [
  ["Run All", runAll],
  "Tier 1",
  ["Visual Compose MIDILite", visualExample],
  ["Visual Compose MIDI", downloadExample],
  ["Simple Compose MIDILite", simpleExample],
  ["Simple Compose MIDI", simpleMidi],
  "Tier 2",
  ["Custom Genre MIDI", trapCohort],
  ["N-let Quartet MIDI Download", tupletQuartet],
  ["All Genres MIDI", fetchAndInstantiateGenres],
];

function choices(rows: Row[]): Entry[] {
  return rows.filter((row): row is Entry => Array.isArray(row));
}

async function choose(title: string, rows: Row[]): Promise<number> {
  const entries = choices(rows);
  while (true) {
    console.log(title);
    let number = 1;
    for (const row of rows) {
      if (typeof row === "string") {
        console.log(row);
        continue;
      }
      console.log(`${number}. ${row[0]}`);
      number += 1;
    }
    const raw = (await input.question("> ")).trim();
    const choice = Number(raw);
    if (Number.isInteger(choice) && choice >= 1 && choice <= entries.length) {
      return choice;
    }
  }
}

async function runExample(): Promise<void> {
  mkdirSync(OUT_DIR, { recursive: true });
  console.log("𝄞 Welcome to the Monic Theory Developer API 𝄢");
  // Contact the administrator for rate limits.
  const choice = await choose("How would you like to make more music?", menu);
  const [, step] = choices(menu)[choice - 1];
  await step();
}

let closing = false;
let finished = false;

process.on("SIGINT", () => {
  closing = true;
  process.exit(130);
});
process.on("SIGTERM", () => {
  closing = true;
  process.exit(143);
});
input.on("close", () => {
  if (finished || closing) {
    return;
  }
  closing = true;
  process.exit(130);
});
process.on("exit", () => {
  if (closing) {
    console.log("Bye bye!");
  }
});

await runExample();
finished = true;
input.close();
