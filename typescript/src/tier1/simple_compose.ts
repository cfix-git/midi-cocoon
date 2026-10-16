/** Simple compose request and POST /api/simple_compose. */

import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { die, request, writeJson } from "../client";

type Minute = {
  year: number;
  month: number;
  day: number;
  hour: number;
  minute: number;
};

function daysInMonth(year: number, month: number): number {
  if (month === 2) {
    const leap = year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);
    return leap ? 29 : 28;
  }
  if (month === 4 || month === 6 || month === 9 || month === 11) {
    return 30;
  }
  return 31;
}

function shiftMonths(dt: Minute, months: number): Minute {
  const total = dt.year * 12 + (dt.month - 1) + months;
  const year = Math.floor(total / 12);
  const month = (total % 12) + 1;
  return {
    year,
    month,
    day: Math.min(dt.day, daysInMonth(year, month)),
    hour: dt.hour,
    minute: dt.minute,
  };
}

function manual(dt: Minute): Record<string, unknown> {
  return { kind: "manual", phi: 4, datetime: dt };
}

/** Match SeedPouch::default from the current UTC minute. */
export function seedPouch(): Record<string, unknown> {
  const now = new Date();
  const base: Minute = {
    year: now.getUTCFullYear(),
    month: now.getUTCMonth() + 1,
    day: now.getUTCDate(),
    hour: now.getUTCHours(),
    minute: now.getUTCMinutes(),
  };
  return {
    harmonic: manual(shiftMonths(base, 2000 * 12 + 3)),
    melodic: manual(shiftMonths(base, 1000 * 12 - 3)),
    rhythm: { kind: "off", phi: 0, datetime: null },
    tonality: { DateHFO: manual(shiftMonths(base, -1000 * 12)) },
    complexity: { DateHFO: manual(base) },
  };
}

export function simpleCompositionExample(): Record<string, unknown> {
  return {
    pagination: {
      limit: 6,
      offset: 0,
      pagenum: 1,
    },
    query: {
      time_signature: 4,
      scale: 3,
      bpm: 112,
      density: 2,
      even_odd: true,
      harmonic_spread: 3,
      tension: 0,
      max_richness: 3,
      is_extended: false,
      register: 4,
      span: 0,
      n_voices: 3,
      voice_type: 0,
      key_signature: 3,
      in_major: true,
      seed_pouch: seedPouch(),
    },
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

export async function simpleCompose(): Promise<unknown[]> {
  const response = await request("POST", "/api/simple_compose", {
    body: simpleCompositionExample(),
  });
  const compose: unknown = JSON.parse(response.raw.toString("utf8"));
  if (!isNonEmptyObject(compose) || !nonEmptyArray(compose.results)) {
    die("Simple compose returned no results.");
  }
  console.log(`ok simple_compose (${compose.results.length} result(s))`);
  writeJson(path.join(OUT_DIR, "simple_compose.out.json"), compose);
  return compose.results;
}

if (import.meta.url === pathToFileURL(process.argv[1] ?? "").href) {
  const { mkdirSync } = await import("node:fs");
  mkdirSync(OUT_DIR, { recursive: true });
  await simpleCompose();
}
