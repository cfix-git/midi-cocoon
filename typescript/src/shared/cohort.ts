/** Shared cohort placement helpers. */

type JsonObject = Record<string, unknown>;

type ArfClip = {
  rarf?: { n_bars?: number };
};

type TimelineSpec = {
  arf: ArfClip;
  tacet?: boolean;
};

export type InstantiateQuery = {
  score: JsonObject & { time_signature?: number };
  timelines?: TimelineSpec[][];
};

export function clipCycles(clip: ArfClip, timeSignature: number): number {
  const nBars = clip.rarf?.n_bars ?? 0;
  return Math.trunc(nBars) * Math.trunc(timeSignature);
}

export function cohortRequestFromQuery(
  query: InstantiateQuery,
): Record<string, unknown> {
  const score = query.score;
  if (score === undefined) {
    throw new Error("missing score");
  }
  const timeSignature = Math.trunc(score.time_signature ?? 4);
  const timelines = query.timelines ?? [];
  const tracks: { clip: ArfClip; cycle_start: number; tacet: boolean }[][] = [];
  for (const timeline of timelines) {
    let cycleStart = 0;
    const placements: { clip: ArfClip; cycle_start: number; tacet: boolean }[] = [];
    for (const spec of timeline) {
      placements.push({
        clip: spec.arf,
        cycle_start: cycleStart,
        tacet: Boolean(spec.tacet),
      });
      cycleStart += clipCycles(spec.arf, timeSignature);
    }
    tracks.push(placements);
  }
  return { score, tracks };
}
