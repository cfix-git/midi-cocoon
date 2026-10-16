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
  ["Visual compose", visualExample],
  ["Download fetch", downloadExample],
  ["Preset genres", fetchAndInstantiateGenres],
  ["Trap cohort", trapCohort],
  ["Tuplet quartet", tupletQuartet],
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
  const choice = await choose("Choose a run", [
    "Run all",
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

await runExample();
input.close();
