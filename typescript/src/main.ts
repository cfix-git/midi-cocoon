/** For Developers with a valid org and API key. */

import { mkdirSync } from "node:fs";
import { createInterface } from "node:readline/promises";
import { fileURLToPath } from "node:url";
import { die, request } from "./client";
import { downloadFetch } from "./tier1/download_fetch";
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

async function tupletQuartet(): Promise<void> {
  await runTupletQuartet(OUT_DIR);
}

async function visualExample(): Promise<void> {
  await visualCompose();
}

const runAll: Array<() => Promise<void>> = [
  fetchAndInstantiateGenres,
  visualExample,
  trapCohort,
  tupletQuartet,
];

const examples: Array<[string, () => Promise<void>]> = [
  ["Visual Compose MIDILite", visualExample],
  ["Visual Compose MIDI", downloadExample],
  ["All Genres MIDI", fetchAndInstantiateGenres],
  ["Custom Genre MIDI", trapCohort],
  ["N-let Quartet MIDI Download", tupletQuartet],
];

async function choose(title: string, labels: string[]): Promise<number> {
  while (true) {
    console.log(title);
    for (let index = 0; index < labels.length; index += 1) {
      console.log(`${index + 1}. ${labels[index]}`);
    }
    const raw = (await input.question("> ")).trim();
    const choice = Number(raw);
    if (Number.isInteger(choice) && choice >= 1 && choice <= labels.length) {
      return choice;
    }
  }
}

async function runExample(): Promise<void> {
  mkdirSync(OUT_DIR, { recursive: true });
  console.log("𝄞 Welcome to the Monic Theory Developer API 𝄢");
  // Contact the administrator for rate limits.
  const choice = await choose("How would you like to make more music?", [
    "Run All",
    ...examples.map(([label]) => label),
  ]);
  if (choice === 1) {
    await health();
    for (const step of runAll) {
      await step();
    }
    console.log("done");
    return;
  }
  const [, step] = examples[choice - 2];
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
