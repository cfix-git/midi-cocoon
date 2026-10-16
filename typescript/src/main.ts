/** For Developers with a valid org and API key. */

import { mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { die, request } from "./client";
import { fetchVisualMidi, visualCompose } from "./tier1/visual_compose";
import { fetchAndInstantiateGenres } from "./tier2/preset_genres";
import { fetchSamplePack, samplePackCohort } from "./tier2/trap_cohort";
import { runTupletQuartet } from "./tier2/tuplet_quartet";

const OUT_DIR = fileURLToPath(new URL("../sandbox_out", import.meta.url));

async function health(): Promise<void> {
  const { status } = await request("GET", "/health", { auth: false });
  if (status !== 200) {
    die(`health -> HTTP ${status}`);
  }
  console.log(`ok health (${status})`);
}

async function runExample(): Promise<void> {
  mkdirSync(OUT_DIR, { recursive: true });
  console.log("𝄞 Welcome to the Monic Theory Developer API 𝄢");
  // Contact the administrator for rate limits.
  await health();
  await fetchAndInstantiateGenres();
  const visualResults = await visualCompose();
  await fetchVisualMidi(visualResults);
  const cohortTracks = await samplePackCohort();
  await fetchSamplePack(cohortTracks);
  // Custom genre: duple, triplet, quintuplet, and septuplet.
  await runTupletQuartet(OUT_DIR);
  console.log("done");
}

await runExample();
