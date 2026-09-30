/** Example request bodies for the Monic Theory API. */

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

export function templatedLoopScoreExample(): Record<string, unknown> {
  return {
  "score": {
    "base_of_rhythm": 2,
    "bpm": 144,
    "harmonic_pouch": {
      "seeds": {
        "max_complexity": {
          "datetime": {
            "day": 19,
            "hour": 2,
            "minute": 30,
            "month": 11,
            "year": 4043
          },
          "kind": "manual",
          "phi": 4
        },
        "min_complexity": {
          "datetime": {
            "day": 16,
            "hour": 10,
            "minute": 7,
            "month": 2,
            "year": 126
          },
          "kind": "manual",
          "phi": 4
        },
        "rotation": {
          "datetime": {
            "day": 3,
            "hour": 12,
            "minute": 37,
            "month": 3,
            "year": 4353
          },
          "kind": "manual",
          "phi": 4
        },
        "tonality": {
          "datetime": {
            "day": 15,
            "hour": 23,
            "minute": 33,
            "month": 2,
            "year": 470
          },
          "kind": "manual",
          "phi": 4
        }
      }
    },
    "harmonic_spread": 2,
    "in_major": true,
    "key_signature": 0,
    "label": "Trap",
    "max_richness": 3,
    "modality": "Ionian",
    "scale": 4,
    "schema": 1,
    "time_signature": 4
  },
  "tracks": [
    [
      {
        "clip": {
          "articulation": 1,
          "harf": {
            "harmonic_spread": 1,
            "key_signature": 0,
            "max_richness": 3,
            "n_voices": 1,
            "voice_type": 0
          },
          "label": "Sub Bass",
          "marf": {
            "depth": 0,
            "dynamic": [
              3
            ],
            "melodic_offset": 2,
            "modality": "Ionian",
            "register": 1,
            "rotation_offset": 0,
            "same_q": true,
            "span": 6,
            "sway": 1
          },
          "melodic_pouch": {
            "seeds": {
              "complexity": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              },
              "depth": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              },
              "melodic": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              },
              "sway": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              },
              "tonality": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              }
            }
          },
          "pc": 38,
          "pouch": {
            "complexity": {
              "DateUFO": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              }
            },
            "harmonic": {
              "datetime": null,
              "kind": "off",
              "phi": 0
            },
            "melodic": {
              "datetime": null,
              "kind": "off",
              "phi": 0
            },
            "tonality": {
              "DateHFO": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              }
            }
          },
          "rarf": {
            "base_of_rhythm": 2,
            "computed_rhythm": {
              "coefficient": [
                1,
                4
              ],
              "mode": {
                "kind": "SimpleHarmonic",
                "tree_id": 11
              },
              "time_scale": 3
            },
            "n_bars": 2
          },
          "rhythm_pouch": {
            "seeds": {
              "mute": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              },
              "offset": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              },
              "phase": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              },
              "recur": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              }
            }
          },
          "stem_kind": "Instrumental",
          "track_scale": 1
        },
        "cycle_start": 0,
        "tacet": false
      },
      {
        "clip": {
          "articulation": 1,
          "harf": {
            "harmonic_spread": 1,
            "key_signature": 0,
            "max_richness": 3,
            "n_voices": 1,
            "voice_type": 0
          },
          "label": "Sub Bass",
          "marf": {
            "depth": 0,
            "dynamic": [
              3
            ],
            "melodic_offset": 2,
            "modality": "Ionian",
            "register": 1,
            "rotation_offset": 0,
            "same_q": true,
            "span": 6,
            "sway": 1
          },
          "melodic_pouch": {
            "seeds": {
              "complexity": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              },
              "depth": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              },
              "melodic": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              },
              "sway": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              },
              "tonality": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              }
            }
          },
          "pc": 38,
          "pouch": {
            "complexity": {
              "DateUFO": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              }
            },
            "harmonic": {
              "datetime": null,
              "kind": "off",
              "phi": 0
            },
            "melodic": {
              "datetime": null,
              "kind": "off",
              "phi": 0
            },
            "tonality": {
              "DateHFO": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              }
            }
          },
          "rarf": {
            "base_of_rhythm": 2,
            "computed_rhythm": {
              "coefficient": [
                1,
                4
              ],
              "mode": {
                "kind": "SimpleHarmonic",
                "tree_id": 11
              },
              "time_scale": 3
            },
            "n_bars": 2
          },
          "rhythm_pouch": {
            "seeds": {
              "mute": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              },
              "offset": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              },
              "phase": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              },
              "recur": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              }
            }
          },
          "stem_kind": "Instrumental",
          "track_scale": 1
        },
        "cycle_start": 8,
        "tacet": false
      },
      {
        "clip": {
          "articulation": 1,
          "harf": {
            "harmonic_spread": 1,
            "key_signature": 0,
            "max_richness": 3,
            "n_voices": 1,
            "voice_type": 0
          },
          "label": "Sub Bass",
          "marf": {
            "depth": 0,
            "dynamic": [
              3
            ],
            "melodic_offset": 2,
            "modality": "Ionian",
            "register": 1,
            "rotation_offset": 0,
            "same_q": true,
            "span": 6,
            "sway": 1
          },
          "melodic_pouch": {
            "seeds": {
              "complexity": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              },
              "depth": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              },
              "melodic": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              },
              "sway": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              },
              "tonality": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              }
            }
          },
          "pc": 38,
          "pouch": {
            "complexity": {
              "DateUFO": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              }
            },
            "harmonic": {
              "datetime": null,
              "kind": "off",
              "phi": 0
            },
            "melodic": {
              "datetime": null,
              "kind": "off",
              "phi": 0
            },
            "tonality": {
              "DateHFO": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              }
            }
          },
          "rarf": {
            "base_of_rhythm": 2,
            "computed_rhythm": {
              "coefficient": [
                1,
                4
              ],
              "mode": {
                "kind": "SimpleHarmonic",
                "tree_id": 11
              },
              "time_scale": 3
            },
            "n_bars": 2
          },
          "rhythm_pouch": {
            "seeds": {
              "mute": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              },
              "offset": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              },
              "phase": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              },
              "recur": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              }
            }
          },
          "stem_kind": "Instrumental",
          "track_scale": 1
        },
        "cycle_start": 16,
        "tacet": false
      },
      {
        "clip": {
          "articulation": 1,
          "harf": {
            "harmonic_spread": 1,
            "key_signature": 0,
            "max_richness": 3,
            "n_voices": 1,
            "voice_type": 0
          },
          "label": "Sub Bass",
          "marf": {
            "depth": 0,
            "dynamic": [
              3
            ],
            "melodic_offset": 2,
            "modality": "Ionian",
            "register": 1,
            "rotation_offset": 0,
            "same_q": true,
            "span": 6,
            "sway": 1
          },
          "melodic_pouch": {
            "seeds": {
              "complexity": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              },
              "depth": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              },
              "melodic": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              },
              "sway": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              },
              "tonality": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              }
            }
          },
          "pc": 38,
          "pouch": {
            "complexity": {
              "DateUFO": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              }
            },
            "harmonic": {
              "datetime": null,
              "kind": "off",
              "phi": 0
            },
            "melodic": {
              "datetime": null,
              "kind": "off",
              "phi": 0
            },
            "tonality": {
              "DateHFO": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              }
            }
          },
          "rarf": {
            "base_of_rhythm": 2,
            "computed_rhythm": {
              "coefficient": [
                1,
                4
              ],
              "mode": {
                "kind": "SimpleHarmonic",
                "tree_id": 11
              },
              "time_scale": 3
            },
            "n_bars": 2
          },
          "rhythm_pouch": {
            "seeds": {
              "mute": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              },
              "offset": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              },
              "phase": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              },
              "recur": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              }
            }
          },
          "stem_kind": "Instrumental",
          "track_scale": 1
        },
        "cycle_start": 24,
        "tacet": false
      },
      {
        "clip": {
          "articulation": 1,
          "harf": {
            "harmonic_spread": 1,
            "key_signature": 0,
            "max_richness": 3,
            "n_voices": 1,
            "voice_type": 0
          },
          "label": "Sub Bass",
          "marf": {
            "depth": 0,
            "dynamic": [
              3
            ],
            "melodic_offset": 2,
            "modality": "Ionian",
            "register": 1,
            "rotation_offset": 0,
            "same_q": true,
            "span": 6,
            "sway": 1
          },
          "melodic_pouch": {
            "seeds": {
              "complexity": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              },
              "depth": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              },
              "melodic": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              },
              "sway": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              },
              "tonality": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              }
            }
          },
          "pc": 38,
          "pouch": {
            "complexity": {
              "DateUFO": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              }
            },
            "harmonic": {
              "datetime": null,
              "kind": "off",
              "phi": 0
            },
            "melodic": {
              "datetime": null,
              "kind": "off",
              "phi": 0
            },
            "tonality": {
              "DateHFO": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              }
            }
          },
          "rarf": {
            "base_of_rhythm": 2,
            "computed_rhythm": {
              "coefficient": [
                1,
                4
              ],
              "mode": {
                "kind": "SimpleHarmonic",
                "tree_id": 11
              },
              "time_scale": 3
            },
            "n_bars": 2
          },
          "rhythm_pouch": {
            "seeds": {
              "mute": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              },
              "offset": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              },
              "phase": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              },
              "recur": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              }
            }
          },
          "stem_kind": "Instrumental",
          "track_scale": 1
        },
        "cycle_start": 32,
        "tacet": false
      },
      {
        "clip": {
          "articulation": 1,
          "harf": {
            "harmonic_spread": 1,
            "key_signature": 0,
            "max_richness": 3,
            "n_voices": 1,
            "voice_type": 0
          },
          "label": "Sub Bass",
          "marf": {
            "depth": 0,
            "dynamic": [
              3
            ],
            "melodic_offset": 2,
            "modality": "Ionian",
            "register": 1,
            "rotation_offset": 0,
            "same_q": true,
            "span": 6,
            "sway": 1
          },
          "melodic_pouch": {
            "seeds": {
              "complexity": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              },
              "depth": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              },
              "melodic": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              },
              "sway": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              },
              "tonality": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              }
            }
          },
          "pc": 38,
          "pouch": {
            "complexity": {
              "DateUFO": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              }
            },
            "harmonic": {
              "datetime": null,
              "kind": "off",
              "phi": 0
            },
            "melodic": {
              "datetime": null,
              "kind": "off",
              "phi": 0
            },
            "tonality": {
              "DateHFO": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              }
            }
          },
          "rarf": {
            "base_of_rhythm": 2,
            "computed_rhythm": {
              "coefficient": [
                1,
                4
              ],
              "mode": {
                "kind": "SimpleHarmonic",
                "tree_id": 11
              },
              "time_scale": 3
            },
            "n_bars": 2
          },
          "rhythm_pouch": {
            "seeds": {
              "mute": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              },
              "offset": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              },
              "phase": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              },
              "recur": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              }
            }
          },
          "stem_kind": "Instrumental",
          "track_scale": 1
        },
        "cycle_start": 40,
        "tacet": false
      },
      {
        "clip": {
          "articulation": 1,
          "harf": {
            "harmonic_spread": 1,
            "key_signature": 0,
            "max_richness": 3,
            "n_voices": 1,
            "voice_type": 0
          },
          "label": "Sub Bass",
          "marf": {
            "depth": 0,
            "dynamic": [
              3
            ],
            "melodic_offset": 2,
            "modality": "Ionian",
            "register": 1,
            "rotation_offset": 0,
            "same_q": true,
            "span": 6,
            "sway": 1
          },
          "melodic_pouch": {
            "seeds": {
              "complexity": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              },
              "depth": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              },
              "melodic": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              },
              "sway": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              },
              "tonality": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              }
            }
          },
          "pc": 38,
          "pouch": {
            "complexity": {
              "DateUFO": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              }
            },
            "harmonic": {
              "datetime": null,
              "kind": "off",
              "phi": 0
            },
            "melodic": {
              "datetime": null,
              "kind": "off",
              "phi": 0
            },
            "tonality": {
              "DateHFO": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              }
            }
          },
          "rarf": {
            "base_of_rhythm": 2,
            "computed_rhythm": {
              "coefficient": [
                1,
                4
              ],
              "mode": {
                "kind": "SimpleHarmonic",
                "tree_id": 11
              },
              "time_scale": 3
            },
            "n_bars": 2
          },
          "rhythm_pouch": {
            "seeds": {
              "mute": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              },
              "offset": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              },
              "phase": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              },
              "recur": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              }
            }
          },
          "stem_kind": "Instrumental",
          "track_scale": 1
        },
        "cycle_start": 48,
        "tacet": false
      },
      {
        "clip": {
          "articulation": 1,
          "harf": {
            "harmonic_spread": 1,
            "key_signature": 0,
            "max_richness": 3,
            "n_voices": 1,
            "voice_type": 0
          },
          "label": "Sub Bass",
          "marf": {
            "depth": 0,
            "dynamic": [
              3
            ],
            "melodic_offset": 2,
            "modality": "Ionian",
            "register": 1,
            "rotation_offset": 0,
            "same_q": true,
            "span": 6,
            "sway": 1
          },
          "melodic_pouch": {
            "seeds": {
              "complexity": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              },
              "depth": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              },
              "melodic": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              },
              "sway": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              },
              "tonality": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              }
            }
          },
          "pc": 38,
          "pouch": {
            "complexity": {
              "DateUFO": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              }
            },
            "harmonic": {
              "datetime": null,
              "kind": "off",
              "phi": 0
            },
            "melodic": {
              "datetime": null,
              "kind": "off",
              "phi": 0
            },
            "tonality": {
              "DateHFO": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              }
            }
          },
          "rarf": {
            "base_of_rhythm": 2,
            "computed_rhythm": {
              "coefficient": [
                1,
                4
              ],
              "mode": {
                "kind": "SimpleHarmonic",
                "tree_id": 11
              },
              "time_scale": 3
            },
            "n_bars": 2
          },
          "rhythm_pouch": {
            "seeds": {
              "mute": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              },
              "offset": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              },
              "phase": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              },
              "recur": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              }
            }
          },
          "stem_kind": "Instrumental",
          "track_scale": 1
        },
        "cycle_start": 56,
        "tacet": false
      }
    ],
    [
      {
        "clip": {
          "articulation": 2,
          "harf": {
            "harmonic_spread": 0,
            "key_signature": 0,
            "max_richness": 1,
            "n_voices": 1,
            "voice_type": 0
          },
          "label": "808 kick",
          "marf": {
            "depth": 0,
            "dynamic": [
              3
            ],
            "melodic_offset": 2,
            "modality": "Ionian",
            "register": 2,
            "rotation_offset": 0,
            "same_q": true,
            "span": 5,
            "sway": 1
          },
          "melodic_pouch": {
            "seeds": {
              "complexity": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              },
              "depth": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              },
              "melodic": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              },
              "sway": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              },
              "tonality": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              }
            }
          },
          "pc": 116,
          "pouch": {
            "complexity": {
              "DateUFO": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              }
            },
            "harmonic": {
              "datetime": null,
              "kind": "off",
              "phi": 0
            },
            "melodic": {
              "datetime": null,
              "kind": "off",
              "phi": 0
            },
            "tonality": {
              "DateHFO": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              }
            }
          },
          "rarf": {
            "base_of_rhythm": 2,
            "computed_rhythm": {
              "coefficient": [
                1,
                1
              ],
              "mode": {
                "events": 8,
                "hits": 3,
                "kind": "PositionedEuc",
                "offset": 0,
                "phase": 0
              },
              "time_scale": 1
            },
            "n_bars": 2
          },
          "rhythm_pouch": {
            "seeds": {
              "mute": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              },
              "offset": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              },
              "phase": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              },
              "recur": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              }
            }
          },
          "stem_kind": "Beat",
          "track_scale": 1
        },
        "cycle_start": 0,
        "tacet": false
      },
      {
        "clip": {
          "articulation": 2,
          "harf": {
            "harmonic_spread": 0,
            "key_signature": 0,
            "max_richness": 1,
            "n_voices": 1,
            "voice_type": 0
          },
          "label": "808 kick",
          "marf": {
            "depth": 0,
            "dynamic": [
              3
            ],
            "melodic_offset": 2,
            "modality": "Ionian",
            "register": 2,
            "rotation_offset": 0,
            "same_q": true,
            "span": 5,
            "sway": 1
          },
          "melodic_pouch": {
            "seeds": {
              "complexity": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              },
              "depth": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              },
              "melodic": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              },
              "sway": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              },
              "tonality": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              }
            }
          },
          "pc": 116,
          "pouch": {
            "complexity": {
              "DateUFO": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              }
            },
            "harmonic": {
              "datetime": null,
              "kind": "off",
              "phi": 0
            },
            "melodic": {
              "datetime": null,
              "kind": "off",
              "phi": 0
            },
            "tonality": {
              "DateHFO": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              }
            }
          },
          "rarf": {
            "base_of_rhythm": 2,
            "computed_rhythm": {
              "coefficient": [
                1,
                1
              ],
              "mode": {
                "events": 8,
                "hits": 3,
                "kind": "PositionedEuc",
                "offset": 0,
                "phase": 0
              },
              "time_scale": 1
            },
            "n_bars": 2
          },
          "rhythm_pouch": {
            "seeds": {
              "mute": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              },
              "offset": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              },
              "phase": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              },
              "recur": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              }
            }
          },
          "stem_kind": "Beat",
          "track_scale": 1
        },
        "cycle_start": 8,
        "tacet": false
      },
      {
        "clip": {
          "articulation": 2,
          "harf": {
            "harmonic_spread": 0,
            "key_signature": 0,
            "max_richness": 1,
            "n_voices": 1,
            "voice_type": 0
          },
          "label": "808 kick",
          "marf": {
            "depth": 0,
            "dynamic": [
              3
            ],
            "melodic_offset": 2,
            "modality": "Ionian",
            "register": 2,
            "rotation_offset": 0,
            "same_q": true,
            "span": 5,
            "sway": 1
          },
          "melodic_pouch": {
            "seeds": {
              "complexity": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              },
              "depth": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              },
              "melodic": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              },
              "sway": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              },
              "tonality": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              }
            }
          },
          "pc": 116,
          "pouch": {
            "complexity": {
              "DateUFO": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              }
            },
            "harmonic": {
              "datetime": null,
              "kind": "off",
              "phi": 0
            },
            "melodic": {
              "datetime": null,
              "kind": "off",
              "phi": 0
            },
            "tonality": {
              "DateHFO": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              }
            }
          },
          "rarf": {
            "base_of_rhythm": 2,
            "computed_rhythm": {
              "coefficient": [
                1,
                1
              ],
              "mode": {
                "events": 8,
                "hits": 3,
                "kind": "PositionedEuc",
                "offset": 0,
                "phase": 0
              },
              "time_scale": 1
            },
            "n_bars": 2
          },
          "rhythm_pouch": {
            "seeds": {
              "mute": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              },
              "offset": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              },
              "phase": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              },
              "recur": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              }
            }
          },
          "stem_kind": "Beat",
          "track_scale": 1
        },
        "cycle_start": 16,
        "tacet": false
      },
      {
        "clip": {
          "articulation": 2,
          "harf": {
            "harmonic_spread": 0,
            "key_signature": 0,
            "max_richness": 1,
            "n_voices": 1,
            "voice_type": 0
          },
          "label": "808 kick",
          "marf": {
            "depth": 0,
            "dynamic": [
              1,
              4
            ],
            "melodic_offset": 2,
            "modality": "Ionian",
            "register": 2,
            "rotation_offset": 0,
            "same_q": true,
            "span": 5,
            "sway": 1
          },
          "melodic_pouch": {
            "seeds": {
              "complexity": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              },
              "depth": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              },
              "melodic": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              },
              "sway": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              },
              "tonality": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              }
            }
          },
          "pc": 116,
          "pouch": {
            "complexity": {
              "DateUFO": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              }
            },
            "harmonic": {
              "datetime": null,
              "kind": "off",
              "phi": 0
            },
            "melodic": {
              "datetime": null,
              "kind": "off",
              "phi": 0
            },
            "tonality": {
              "DateHFO": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              }
            }
          },
          "rarf": {
            "base_of_rhythm": 2,
            "computed_rhythm": {
              "coefficient": [
                8,
                1
              ],
              "mode": {
                "events": 8,
                "hits": 3,
                "kind": "PositionedEuc",
                "offset": 0,
                "phase": 0
              },
              "time_scale": 1
            },
            "n_bars": 2
          },
          "rhythm_pouch": {
            "seeds": {
              "mute": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              },
              "offset": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              },
              "phase": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              },
              "recur": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              }
            }
          },
          "stem_kind": "Beat",
          "track_scale": 1
        },
        "cycle_start": 24,
        "tacet": false
      },
      {
        "clip": {
          "articulation": 2,
          "harf": {
            "harmonic_spread": 0,
            "key_signature": 0,
            "max_richness": 1,
            "n_voices": 1,
            "voice_type": 0
          },
          "label": "808 kick",
          "marf": {
            "depth": 0,
            "dynamic": [
              3
            ],
            "melodic_offset": 2,
            "modality": "Ionian",
            "register": 2,
            "rotation_offset": 0,
            "same_q": true,
            "span": 5,
            "sway": 1
          },
          "melodic_pouch": {
            "seeds": {
              "complexity": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              },
              "depth": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              },
              "melodic": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              },
              "sway": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              },
              "tonality": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              }
            }
          },
          "pc": 116,
          "pouch": {
            "complexity": {
              "DateUFO": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              }
            },
            "harmonic": {
              "datetime": null,
              "kind": "off",
              "phi": 0
            },
            "melodic": {
              "datetime": null,
              "kind": "off",
              "phi": 0
            },
            "tonality": {
              "DateHFO": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              }
            }
          },
          "rarf": {
            "base_of_rhythm": 2,
            "computed_rhythm": {
              "coefficient": [
                1,
                1
              ],
              "mode": {
                "events": 8,
                "hits": 3,
                "kind": "PositionedEuc",
                "offset": 0,
                "phase": 0
              },
              "time_scale": 1
            },
            "n_bars": 2
          },
          "rhythm_pouch": {
            "seeds": {
              "mute": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              },
              "offset": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              },
              "phase": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              },
              "recur": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              }
            }
          },
          "stem_kind": "Beat",
          "track_scale": 1
        },
        "cycle_start": 32,
        "tacet": false
      },
      {
        "clip": {
          "articulation": 2,
          "harf": {
            "harmonic_spread": 0,
            "key_signature": 0,
            "max_richness": 1,
            "n_voices": 1,
            "voice_type": 0
          },
          "label": "808 kick",
          "marf": {
            "depth": 0,
            "dynamic": [
              3
            ],
            "melodic_offset": 2,
            "modality": "Ionian",
            "register": 2,
            "rotation_offset": 0,
            "same_q": true,
            "span": 5,
            "sway": 1
          },
          "melodic_pouch": {
            "seeds": {
              "complexity": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              },
              "depth": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              },
              "melodic": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              },
              "sway": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              },
              "tonality": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              }
            }
          },
          "pc": 116,
          "pouch": {
            "complexity": {
              "DateUFO": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              }
            },
            "harmonic": {
              "datetime": null,
              "kind": "off",
              "phi": 0
            },
            "melodic": {
              "datetime": null,
              "kind": "off",
              "phi": 0
            },
            "tonality": {
              "DateHFO": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              }
            }
          },
          "rarf": {
            "base_of_rhythm": 2,
            "computed_rhythm": {
              "coefficient": [
                1,
                1
              ],
              "mode": {
                "events": 8,
                "hits": 3,
                "kind": "PositionedEuc",
                "offset": 0,
                "phase": 0
              },
              "time_scale": 1
            },
            "n_bars": 2
          },
          "rhythm_pouch": {
            "seeds": {
              "mute": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              },
              "offset": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              },
              "phase": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              },
              "recur": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              }
            }
          },
          "stem_kind": "Beat",
          "track_scale": 1
        },
        "cycle_start": 40,
        "tacet": false
      },
      {
        "clip": {
          "articulation": 2,
          "harf": {
            "harmonic_spread": 0,
            "key_signature": 0,
            "max_richness": 1,
            "n_voices": 1,
            "voice_type": 0
          },
          "label": "808 kick",
          "marf": {
            "depth": 0,
            "dynamic": [
              3
            ],
            "melodic_offset": 2,
            "modality": "Ionian",
            "register": 2,
            "rotation_offset": 0,
            "same_q": true,
            "span": 5,
            "sway": 1
          },
          "melodic_pouch": {
            "seeds": {
              "complexity": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              },
              "depth": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              },
              "melodic": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              },
              "sway": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              },
              "tonality": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              }
            }
          },
          "pc": 116,
          "pouch": {
            "complexity": {
              "DateUFO": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              }
            },
            "harmonic": {
              "datetime": null,
              "kind": "off",
              "phi": 0
            },
            "melodic": {
              "datetime": null,
              "kind": "off",
              "phi": 0
            },
            "tonality": {
              "DateHFO": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              }
            }
          },
          "rarf": {
            "base_of_rhythm": 2,
            "computed_rhythm": {
              "coefficient": [
                1,
                1
              ],
              "mode": {
                "events": 8,
                "hits": 3,
                "kind": "PositionedEuc",
                "offset": 0,
                "phase": 0
              },
              "time_scale": 1
            },
            "n_bars": 2
          },
          "rhythm_pouch": {
            "seeds": {
              "mute": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              },
              "offset": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              },
              "phase": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              },
              "recur": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              }
            }
          },
          "stem_kind": "Beat",
          "track_scale": 1
        },
        "cycle_start": 48,
        "tacet": false
      },
      {
        "clip": {
          "articulation": 2,
          "harf": {
            "harmonic_spread": 0,
            "key_signature": 0,
            "max_richness": 1,
            "n_voices": 1,
            "voice_type": 0
          },
          "label": "808 kick",
          "marf": {
            "depth": 0,
            "dynamic": [
              1,
              4
            ],
            "melodic_offset": 2,
            "modality": "Ionian",
            "register": 2,
            "rotation_offset": 0,
            "same_q": true,
            "span": 5,
            "sway": 1
          },
          "melodic_pouch": {
            "seeds": {
              "complexity": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              },
              "depth": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              },
              "melodic": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              },
              "sway": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              },
              "tonality": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              }
            }
          },
          "pc": 116,
          "pouch": {
            "complexity": {
              "DateUFO": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              }
            },
            "harmonic": {
              "datetime": null,
              "kind": "off",
              "phi": 0
            },
            "melodic": {
              "datetime": null,
              "kind": "off",
              "phi": 0
            },
            "tonality": {
              "DateHFO": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              }
            }
          },
          "rarf": {
            "base_of_rhythm": 2,
            "computed_rhythm": {
              "coefficient": [
                8,
                1
              ],
              "mode": {
                "events": 8,
                "hits": 3,
                "kind": "PositionedEuc",
                "offset": 0,
                "phase": 0
              },
              "time_scale": 1
            },
            "n_bars": 2
          },
          "rhythm_pouch": {
            "seeds": {
              "mute": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              },
              "offset": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              },
              "phase": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              },
              "recur": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              }
            }
          },
          "stem_kind": "Beat",
          "track_scale": 1
        },
        "cycle_start": 56,
        "tacet": false
      }
    ],
    [
      {
        "clip": {
          "articulation": 0,
          "harf": {
            "harmonic_spread": 0,
            "key_signature": 0,
            "max_richness": 0,
            "n_voices": 1,
            "voice_type": 0
          },
          "label": "Trap Clap",
          "marf": {
            "depth": 0,
            "dynamic": [
              3
            ],
            "melodic_offset": 2,
            "modality": "Ionian",
            "register": 4,
            "rotation_offset": 0,
            "same_q": true,
            "span": 3,
            "sway": 1
          },
          "melodic_pouch": {
            "seeds": {
              "complexity": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              },
              "depth": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              },
              "melodic": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              },
              "sway": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              },
              "tonality": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              }
            }
          },
          "pc": 39,
          "pouch": {
            "complexity": {
              "DateUFO": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              }
            },
            "harmonic": {
              "datetime": null,
              "kind": "off",
              "phi": 0
            },
            "melodic": {
              "datetime": null,
              "kind": "off",
              "phi": 0
            },
            "tonality": {
              "DateHFO": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              }
            }
          },
          "rarf": {
            "base_of_rhythm": 2,
            "computed_rhythm": {
              "coefficient": [
                1,
                1
              ],
              "mode": {
                "events": 8,
                "hits": 1,
                "kind": "PositionedEuc",
                "offset": 4,
                "phase": 0
              },
              "time_scale": 1
            },
            "n_bars": 2
          },
          "rhythm_pouch": {
            "seeds": {
              "mute": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              },
              "offset": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              },
              "phase": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              },
              "recur": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              }
            }
          },
          "stem_kind": "Beat",
          "track_scale": 1
        },
        "cycle_start": 0,
        "tacet": false
      },
      {
        "clip": {
          "articulation": 0,
          "harf": {
            "harmonic_spread": 0,
            "key_signature": 0,
            "max_richness": 0,
            "n_voices": 1,
            "voice_type": 0
          },
          "label": "Trap Clap",
          "marf": {
            "depth": 0,
            "dynamic": [
              3
            ],
            "melodic_offset": 2,
            "modality": "Ionian",
            "register": 4,
            "rotation_offset": 0,
            "same_q": true,
            "span": 3,
            "sway": 1
          },
          "melodic_pouch": {
            "seeds": {
              "complexity": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              },
              "depth": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              },
              "melodic": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              },
              "sway": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              },
              "tonality": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              }
            }
          },
          "pc": 39,
          "pouch": {
            "complexity": {
              "DateUFO": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              }
            },
            "harmonic": {
              "datetime": null,
              "kind": "off",
              "phi": 0
            },
            "melodic": {
              "datetime": null,
              "kind": "off",
              "phi": 0
            },
            "tonality": {
              "DateHFO": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              }
            }
          },
          "rarf": {
            "base_of_rhythm": 2,
            "computed_rhythm": {
              "coefficient": [
                1,
                1
              ],
              "mode": {
                "events": 8,
                "hits": 1,
                "kind": "PositionedEuc",
                "offset": 4,
                "phase": 0
              },
              "time_scale": 1
            },
            "n_bars": 2
          },
          "rhythm_pouch": {
            "seeds": {
              "mute": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              },
              "offset": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              },
              "phase": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              },
              "recur": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              }
            }
          },
          "stem_kind": "Beat",
          "track_scale": 1
        },
        "cycle_start": 8,
        "tacet": false
      },
      {
        "clip": {
          "articulation": 0,
          "harf": {
            "harmonic_spread": 0,
            "key_signature": 0,
            "max_richness": 0,
            "n_voices": 1,
            "voice_type": 0
          },
          "label": "Trap Clap",
          "marf": {
            "depth": 0,
            "dynamic": [
              3
            ],
            "melodic_offset": 2,
            "modality": "Ionian",
            "register": 4,
            "rotation_offset": 0,
            "same_q": true,
            "span": 3,
            "sway": 1
          },
          "melodic_pouch": {
            "seeds": {
              "complexity": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              },
              "depth": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              },
              "melodic": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              },
              "sway": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              },
              "tonality": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              }
            }
          },
          "pc": 39,
          "pouch": {
            "complexity": {
              "DateUFO": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              }
            },
            "harmonic": {
              "datetime": null,
              "kind": "off",
              "phi": 0
            },
            "melodic": {
              "datetime": null,
              "kind": "off",
              "phi": 0
            },
            "tonality": {
              "DateHFO": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              }
            }
          },
          "rarf": {
            "base_of_rhythm": 2,
            "computed_rhythm": {
              "coefficient": [
                1,
                1
              ],
              "mode": {
                "events": 8,
                "hits": 1,
                "kind": "PositionedEuc",
                "offset": 4,
                "phase": 0
              },
              "time_scale": 1
            },
            "n_bars": 2
          },
          "rhythm_pouch": {
            "seeds": {
              "mute": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              },
              "offset": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              },
              "phase": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              },
              "recur": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              }
            }
          },
          "stem_kind": "Beat",
          "track_scale": 1
        },
        "cycle_start": 16,
        "tacet": false
      },
      {
        "clip": {
          "articulation": 0,
          "harf": {
            "harmonic_spread": 0,
            "key_signature": 0,
            "max_richness": 0,
            "n_voices": 1,
            "voice_type": 0
          },
          "label": "Trap Clap",
          "marf": {
            "depth": 0,
            "dynamic": [
              3
            ],
            "melodic_offset": 2,
            "modality": "Ionian",
            "register": 4,
            "rotation_offset": 0,
            "same_q": true,
            "span": 3,
            "sway": 1
          },
          "melodic_pouch": {
            "seeds": {
              "complexity": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              },
              "depth": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              },
              "melodic": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              },
              "sway": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              },
              "tonality": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              }
            }
          },
          "pc": 39,
          "pouch": {
            "complexity": {
              "DateUFO": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              }
            },
            "harmonic": {
              "datetime": null,
              "kind": "off",
              "phi": 0
            },
            "melodic": {
              "datetime": null,
              "kind": "off",
              "phi": 0
            },
            "tonality": {
              "DateHFO": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              }
            }
          },
          "rarf": {
            "base_of_rhythm": 2,
            "computed_rhythm": {
              "coefficient": [
                1,
                1
              ],
              "mode": {
                "events": 8,
                "hits": 1,
                "kind": "PositionedEuc",
                "offset": 4,
                "phase": 0
              },
              "time_scale": 1
            },
            "n_bars": 2
          },
          "rhythm_pouch": {
            "seeds": {
              "mute": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              },
              "offset": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              },
              "phase": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              },
              "recur": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              }
            }
          },
          "stem_kind": "Beat",
          "track_scale": 1
        },
        "cycle_start": 24,
        "tacet": false
      },
      {
        "clip": {
          "articulation": 0,
          "harf": {
            "harmonic_spread": 0,
            "key_signature": 0,
            "max_richness": 0,
            "n_voices": 1,
            "voice_type": 0
          },
          "label": "Trap Clap",
          "marf": {
            "depth": 0,
            "dynamic": [
              3
            ],
            "melodic_offset": 2,
            "modality": "Ionian",
            "register": 4,
            "rotation_offset": 0,
            "same_q": true,
            "span": 3,
            "sway": 1
          },
          "melodic_pouch": {
            "seeds": {
              "complexity": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              },
              "depth": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              },
              "melodic": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              },
              "sway": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              },
              "tonality": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              }
            }
          },
          "pc": 39,
          "pouch": {
            "complexity": {
              "DateUFO": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              }
            },
            "harmonic": {
              "datetime": null,
              "kind": "off",
              "phi": 0
            },
            "melodic": {
              "datetime": null,
              "kind": "off",
              "phi": 0
            },
            "tonality": {
              "DateHFO": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              }
            }
          },
          "rarf": {
            "base_of_rhythm": 2,
            "computed_rhythm": {
              "coefficient": [
                1,
                1
              ],
              "mode": {
                "events": 8,
                "hits": 1,
                "kind": "PositionedEuc",
                "offset": 4,
                "phase": 0
              },
              "time_scale": 1
            },
            "n_bars": 2
          },
          "rhythm_pouch": {
            "seeds": {
              "mute": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              },
              "offset": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              },
              "phase": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              },
              "recur": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              }
            }
          },
          "stem_kind": "Beat",
          "track_scale": 1
        },
        "cycle_start": 32,
        "tacet": false
      },
      {
        "clip": {
          "articulation": 0,
          "harf": {
            "harmonic_spread": 0,
            "key_signature": 0,
            "max_richness": 0,
            "n_voices": 1,
            "voice_type": 0
          },
          "label": "Trap Clap",
          "marf": {
            "depth": 0,
            "dynamic": [
              3
            ],
            "melodic_offset": 2,
            "modality": "Ionian",
            "register": 4,
            "rotation_offset": 0,
            "same_q": true,
            "span": 3,
            "sway": 1
          },
          "melodic_pouch": {
            "seeds": {
              "complexity": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              },
              "depth": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              },
              "melodic": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              },
              "sway": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              },
              "tonality": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              }
            }
          },
          "pc": 39,
          "pouch": {
            "complexity": {
              "DateUFO": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              }
            },
            "harmonic": {
              "datetime": null,
              "kind": "off",
              "phi": 0
            },
            "melodic": {
              "datetime": null,
              "kind": "off",
              "phi": 0
            },
            "tonality": {
              "DateHFO": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              }
            }
          },
          "rarf": {
            "base_of_rhythm": 2,
            "computed_rhythm": {
              "coefficient": [
                1,
                1
              ],
              "mode": {
                "events": 8,
                "hits": 1,
                "kind": "PositionedEuc",
                "offset": 4,
                "phase": 0
              },
              "time_scale": 1
            },
            "n_bars": 2
          },
          "rhythm_pouch": {
            "seeds": {
              "mute": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              },
              "offset": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              },
              "phase": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              },
              "recur": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              }
            }
          },
          "stem_kind": "Beat",
          "track_scale": 1
        },
        "cycle_start": 40,
        "tacet": false
      },
      {
        "clip": {
          "articulation": 0,
          "harf": {
            "harmonic_spread": 0,
            "key_signature": 0,
            "max_richness": 0,
            "n_voices": 1,
            "voice_type": 0
          },
          "label": "Trap Clap",
          "marf": {
            "depth": 0,
            "dynamic": [
              3
            ],
            "melodic_offset": 2,
            "modality": "Ionian",
            "register": 4,
            "rotation_offset": 0,
            "same_q": true,
            "span": 3,
            "sway": 1
          },
          "melodic_pouch": {
            "seeds": {
              "complexity": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              },
              "depth": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              },
              "melodic": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              },
              "sway": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              },
              "tonality": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              }
            }
          },
          "pc": 39,
          "pouch": {
            "complexity": {
              "DateUFO": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              }
            },
            "harmonic": {
              "datetime": null,
              "kind": "off",
              "phi": 0
            },
            "melodic": {
              "datetime": null,
              "kind": "off",
              "phi": 0
            },
            "tonality": {
              "DateHFO": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              }
            }
          },
          "rarf": {
            "base_of_rhythm": 2,
            "computed_rhythm": {
              "coefficient": [
                1,
                1
              ],
              "mode": {
                "events": 8,
                "hits": 1,
                "kind": "PositionedEuc",
                "offset": 4,
                "phase": 0
              },
              "time_scale": 1
            },
            "n_bars": 2
          },
          "rhythm_pouch": {
            "seeds": {
              "mute": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              },
              "offset": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              },
              "phase": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              },
              "recur": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              }
            }
          },
          "stem_kind": "Beat",
          "track_scale": 1
        },
        "cycle_start": 48,
        "tacet": false
      },
      {
        "clip": {
          "articulation": 0,
          "harf": {
            "harmonic_spread": 0,
            "key_signature": 0,
            "max_richness": 0,
            "n_voices": 1,
            "voice_type": 0
          },
          "label": "Trap Clap",
          "marf": {
            "depth": 0,
            "dynamic": [
              3
            ],
            "melodic_offset": 2,
            "modality": "Ionian",
            "register": 4,
            "rotation_offset": 0,
            "same_q": true,
            "span": 3,
            "sway": 1
          },
          "melodic_pouch": {
            "seeds": {
              "complexity": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              },
              "depth": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              },
              "melodic": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              },
              "sway": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              },
              "tonality": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              }
            }
          },
          "pc": 39,
          "pouch": {
            "complexity": {
              "DateUFO": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              }
            },
            "harmonic": {
              "datetime": null,
              "kind": "off",
              "phi": 0
            },
            "melodic": {
              "datetime": null,
              "kind": "off",
              "phi": 0
            },
            "tonality": {
              "DateHFO": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              }
            }
          },
          "rarf": {
            "base_of_rhythm": 2,
            "computed_rhythm": {
              "coefficient": [
                1,
                1
              ],
              "mode": {
                "events": 8,
                "hits": 1,
                "kind": "PositionedEuc",
                "offset": 4,
                "phase": 0
              },
              "time_scale": 1
            },
            "n_bars": 2
          },
          "rhythm_pouch": {
            "seeds": {
              "mute": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              },
              "offset": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              },
              "phase": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              },
              "recur": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              }
            }
          },
          "stem_kind": "Beat",
          "track_scale": 1
        },
        "cycle_start": 56,
        "tacet": false
      }
    ],
    [
      {
        "clip": {
          "articulation": 0,
          "harf": {
            "harmonic_spread": 0,
            "key_signature": 0,
            "max_richness": 0,
            "n_voices": 1,
            "voice_type": 0
          },
          "label": "Hat Rolls & Sutter",
          "marf": {
            "depth": 0,
            "dynamic": [
              3
            ],
            "melodic_offset": 2,
            "modality": "Ionian",
            "register": 7,
            "rotation_offset": 0,
            "same_q": true,
            "span": 0,
            "sway": 1
          },
          "melodic_pouch": {
            "seeds": {
              "complexity": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              },
              "depth": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              },
              "melodic": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              },
              "sway": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              },
              "tonality": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              }
            }
          },
          "pc": 112,
          "pouch": {
            "complexity": {
              "DateUFO": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              }
            },
            "harmonic": {
              "datetime": null,
              "kind": "off",
              "phi": 0
            },
            "melodic": {
              "datetime": null,
              "kind": "off",
              "phi": 0
            },
            "tonality": {
              "DateHFO": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              }
            }
          },
          "rarf": {
            "base_of_rhythm": 2,
            "computed_rhythm": {
              "coefficient": [
                1,
                1
              ],
              "mode": {
                "events": 16,
                "hits": 16,
                "kind": "PositionedEuc",
                "offset": 0,
                "phase": 0
              },
              "time_scale": 1
            },
            "n_bars": 2
          },
          "rhythm_pouch": {
            "seeds": {
              "mute": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              },
              "offset": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              },
              "phase": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              },
              "recur": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              }
            }
          },
          "stem_kind": "Beat",
          "track_scale": 1
        },
        "cycle_start": 0,
        "tacet": false
      },
      {
        "clip": {
          "articulation": 0,
          "harf": {
            "harmonic_spread": 0,
            "key_signature": 0,
            "max_richness": 0,
            "n_voices": 1,
            "voice_type": 0
          },
          "label": "Hat Rolls & Sutter",
          "marf": {
            "depth": 0,
            "dynamic": [
              3
            ],
            "melodic_offset": 2,
            "modality": "Ionian",
            "register": 7,
            "rotation_offset": 0,
            "same_q": true,
            "span": 0,
            "sway": 1
          },
          "melodic_pouch": {
            "seeds": {
              "complexity": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              },
              "depth": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              },
              "melodic": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              },
              "sway": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              },
              "tonality": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              }
            }
          },
          "pc": 112,
          "pouch": {
            "complexity": {
              "DateUFO": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              }
            },
            "harmonic": {
              "datetime": null,
              "kind": "off",
              "phi": 0
            },
            "melodic": {
              "datetime": null,
              "kind": "off",
              "phi": 0
            },
            "tonality": {
              "DateHFO": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              }
            }
          },
          "rarf": {
            "base_of_rhythm": 2,
            "computed_rhythm": {
              "coefficient": [
                1,
                1
              ],
              "mode": {
                "events": 16,
                "hits": 16,
                "kind": "PositionedEuc",
                "offset": 0,
                "phase": 0
              },
              "time_scale": 1
            },
            "n_bars": 2
          },
          "rhythm_pouch": {
            "seeds": {
              "mute": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              },
              "offset": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              },
              "phase": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              },
              "recur": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              }
            }
          },
          "stem_kind": "Beat",
          "track_scale": 1
        },
        "cycle_start": 8,
        "tacet": false
      },
      {
        "clip": {
          "articulation": 0,
          "harf": {
            "harmonic_spread": 0,
            "key_signature": 0,
            "max_richness": 0,
            "n_voices": 1,
            "voice_type": 0
          },
          "label": "Hat Rolls & Sutter",
          "marf": {
            "depth": 0,
            "dynamic": [
              3
            ],
            "melodic_offset": 2,
            "modality": "Ionian",
            "register": 7,
            "rotation_offset": 0,
            "same_q": true,
            "span": 0,
            "sway": 1
          },
          "melodic_pouch": {
            "seeds": {
              "complexity": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              },
              "depth": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              },
              "melodic": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              },
              "sway": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              },
              "tonality": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              }
            }
          },
          "pc": 112,
          "pouch": {
            "complexity": {
              "DateUFO": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              }
            },
            "harmonic": {
              "datetime": null,
              "kind": "off",
              "phi": 0
            },
            "melodic": {
              "datetime": null,
              "kind": "off",
              "phi": 0
            },
            "tonality": {
              "DateHFO": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              }
            }
          },
          "rarf": {
            "base_of_rhythm": 2,
            "computed_rhythm": {
              "coefficient": [
                1,
                1
              ],
              "mode": {
                "events": 16,
                "hits": 16,
                "kind": "PositionedEuc",
                "offset": 0,
                "phase": 0
              },
              "time_scale": 1
            },
            "n_bars": 2
          },
          "rhythm_pouch": {
            "seeds": {
              "mute": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              },
              "offset": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              },
              "phase": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              },
              "recur": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              }
            }
          },
          "stem_kind": "Beat",
          "track_scale": 1
        },
        "cycle_start": 16,
        "tacet": false
      },
      {
        "clip": {
          "articulation": 0,
          "harf": {
            "harmonic_spread": 0,
            "key_signature": 0,
            "max_richness": 0,
            "n_voices": 1,
            "voice_type": 0
          },
          "label": "Hat Rolls & Sutter",
          "marf": {
            "depth": 0,
            "dynamic": [
              1,
              4
            ],
            "melodic_offset": 2,
            "modality": "Ionian",
            "register": 7,
            "rotation_offset": 0,
            "same_q": true,
            "span": 0,
            "sway": 1
          },
          "melodic_pouch": {
            "seeds": {
              "complexity": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              },
              "depth": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              },
              "melodic": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              },
              "sway": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              },
              "tonality": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              }
            }
          },
          "pc": 112,
          "pouch": {
            "complexity": {
              "DateUFO": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              }
            },
            "harmonic": {
              "datetime": null,
              "kind": "off",
              "phi": 0
            },
            "melodic": {
              "datetime": null,
              "kind": "off",
              "phi": 0
            },
            "tonality": {
              "DateHFO": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              }
            }
          },
          "rarf": {
            "base_of_rhythm": 2,
            "computed_rhythm": {
              "coefficient": [
                1,
                1
              ],
              "mode": {
                "density": 1,
                "even_odd": true,
                "kind": "SimpleEuc"
              },
              "time_scale": 1
            },
            "n_bars": 2
          },
          "rhythm_pouch": {
            "seeds": {
              "mute": {
                "datetime": {
                  "day": 17,
                  "hour": 10,
                  "minute": 44,
                  "month": 3,
                  "year": 3233
                },
                "kind": "manual",
                "phi": 4
              },
              "offset": {
                "datetime": {
                  "day": 2,
                  "hour": 13,
                  "minute": 56,
                  "month": 1,
                  "year": 727
                },
                "kind": "manual",
                "phi": 4
              },
              "phase": {
                "datetime": {
                  "day": 16,
                  "hour": 22,
                  "minute": 51,
                  "month": 10,
                  "year": 1242
                },
                "kind": "manual",
                "phi": 4
              },
              "recur": {
                "datetime": {
                  "day": 19,
                  "hour": 16,
                  "minute": 45,
                  "month": 4,
                  "year": 596
                },
                "kind": "manual",
                "phi": 4
              }
            }
          },
          "stem_kind": "Beat",
          "track_scale": 1
        },
        "cycle_start": 24,
        "tacet": false
      },
      {
        "clip": {
          "articulation": 0,
          "harf": {
            "harmonic_spread": 0,
            "key_signature": 0,
            "max_richness": 0,
            "n_voices": 1,
            "voice_type": 0
          },
          "label": "Hat Rolls & Sutter",
          "marf": {
            "depth": 0,
            "dynamic": [
              3
            ],
            "melodic_offset": 2,
            "modality": "Ionian",
            "register": 7,
            "rotation_offset": 0,
            "same_q": true,
            "span": 0,
            "sway": 1
          },
          "melodic_pouch": {
            "seeds": {
              "complexity": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              },
              "depth": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              },
              "melodic": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              },
              "sway": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              },
              "tonality": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              }
            }
          },
          "pc": 112,
          "pouch": {
            "complexity": {
              "DateUFO": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              }
            },
            "harmonic": {
              "datetime": null,
              "kind": "off",
              "phi": 0
            },
            "melodic": {
              "datetime": null,
              "kind": "off",
              "phi": 0
            },
            "tonality": {
              "DateHFO": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              }
            }
          },
          "rarf": {
            "base_of_rhythm": 2,
            "computed_rhythm": {
              "coefficient": [
                1,
                1
              ],
              "mode": {
                "events": 16,
                "hits": 16,
                "kind": "PositionedEuc",
                "offset": 0,
                "phase": 0
              },
              "time_scale": 1
            },
            "n_bars": 2
          },
          "rhythm_pouch": {
            "seeds": {
              "mute": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              },
              "offset": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              },
              "phase": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              },
              "recur": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              }
            }
          },
          "stem_kind": "Beat",
          "track_scale": 1
        },
        "cycle_start": 32,
        "tacet": false
      },
      {
        "clip": {
          "articulation": 0,
          "harf": {
            "harmonic_spread": 0,
            "key_signature": 0,
            "max_richness": 0,
            "n_voices": 1,
            "voice_type": 0
          },
          "label": "Hat Rolls & Sutter",
          "marf": {
            "depth": 0,
            "dynamic": [
              3
            ],
            "melodic_offset": 2,
            "modality": "Ionian",
            "register": 7,
            "rotation_offset": 0,
            "same_q": true,
            "span": 0,
            "sway": 1
          },
          "melodic_pouch": {
            "seeds": {
              "complexity": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              },
              "depth": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              },
              "melodic": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              },
              "sway": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              },
              "tonality": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              }
            }
          },
          "pc": 112,
          "pouch": {
            "complexity": {
              "DateUFO": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              }
            },
            "harmonic": {
              "datetime": null,
              "kind": "off",
              "phi": 0
            },
            "melodic": {
              "datetime": null,
              "kind": "off",
              "phi": 0
            },
            "tonality": {
              "DateHFO": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              }
            }
          },
          "rarf": {
            "base_of_rhythm": 2,
            "computed_rhythm": {
              "coefficient": [
                1,
                1
              ],
              "mode": {
                "events": 16,
                "hits": 16,
                "kind": "PositionedEuc",
                "offset": 0,
                "phase": 0
              },
              "time_scale": 1
            },
            "n_bars": 2
          },
          "rhythm_pouch": {
            "seeds": {
              "mute": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              },
              "offset": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              },
              "phase": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              },
              "recur": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              }
            }
          },
          "stem_kind": "Beat",
          "track_scale": 1
        },
        "cycle_start": 40,
        "tacet": false
      },
      {
        "clip": {
          "articulation": 0,
          "harf": {
            "harmonic_spread": 0,
            "key_signature": 0,
            "max_richness": 0,
            "n_voices": 1,
            "voice_type": 0
          },
          "label": "Hat Rolls & Sutter",
          "marf": {
            "depth": 0,
            "dynamic": [
              3
            ],
            "melodic_offset": 2,
            "modality": "Ionian",
            "register": 7,
            "rotation_offset": 0,
            "same_q": true,
            "span": 0,
            "sway": 1
          },
          "melodic_pouch": {
            "seeds": {
              "complexity": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              },
              "depth": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              },
              "melodic": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              },
              "sway": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              },
              "tonality": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              }
            }
          },
          "pc": 112,
          "pouch": {
            "complexity": {
              "DateUFO": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              }
            },
            "harmonic": {
              "datetime": null,
              "kind": "off",
              "phi": 0
            },
            "melodic": {
              "datetime": null,
              "kind": "off",
              "phi": 0
            },
            "tonality": {
              "DateHFO": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              }
            }
          },
          "rarf": {
            "base_of_rhythm": 2,
            "computed_rhythm": {
              "coefficient": [
                1,
                1
              ],
              "mode": {
                "events": 16,
                "hits": 16,
                "kind": "PositionedEuc",
                "offset": 0,
                "phase": 0
              },
              "time_scale": 1
            },
            "n_bars": 2
          },
          "rhythm_pouch": {
            "seeds": {
              "mute": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              },
              "offset": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              },
              "phase": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              },
              "recur": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              }
            }
          },
          "stem_kind": "Beat",
          "track_scale": 1
        },
        "cycle_start": 48,
        "tacet": false
      },
      {
        "clip": {
          "articulation": 0,
          "harf": {
            "harmonic_spread": 0,
            "key_signature": 0,
            "max_richness": 0,
            "n_voices": 1,
            "voice_type": 0
          },
          "label": "Hat Rolls & Sutter",
          "marf": {
            "depth": 0,
            "dynamic": [
              1,
              4
            ],
            "melodic_offset": 2,
            "modality": "Ionian",
            "register": 7,
            "rotation_offset": 0,
            "same_q": true,
            "span": 0,
            "sway": 1
          },
          "melodic_pouch": {
            "seeds": {
              "complexity": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              },
              "depth": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              },
              "melodic": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              },
              "sway": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              },
              "tonality": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              }
            }
          },
          "pc": 112,
          "pouch": {
            "complexity": {
              "DateUFO": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              }
            },
            "harmonic": {
              "datetime": null,
              "kind": "off",
              "phi": 0
            },
            "melodic": {
              "datetime": null,
              "kind": "off",
              "phi": 0
            },
            "tonality": {
              "DateHFO": {
                "datetime": null,
                "kind": "off",
                "phi": 0
              }
            }
          },
          "rarf": {
            "base_of_rhythm": 2,
            "computed_rhythm": {
              "coefficient": [
                1,
                1
              ],
              "mode": {
                "density": 1,
                "even_odd": true,
                "kind": "SimpleEuc"
              },
              "time_scale": 1
            },
            "n_bars": 2
          },
          "rhythm_pouch": {
            "seeds": {
              "mute": {
                "datetime": {
                  "day": 17,
                  "hour": 10,
                  "minute": 44,
                  "month": 3,
                  "year": 3233
                },
                "kind": "manual",
                "phi": 4
              },
              "offset": {
                "datetime": {
                  "day": 2,
                  "hour": 13,
                  "minute": 56,
                  "month": 1,
                  "year": 727
                },
                "kind": "manual",
                "phi": 4
              },
              "phase": {
                "datetime": {
                  "day": 16,
                  "hour": 22,
                  "minute": 51,
                  "month": 10,
                  "year": 1242
                },
                "kind": "manual",
                "phi": 4
              },
              "recur": {
                "datetime": {
                  "day": 19,
                  "hour": 16,
                  "minute": 45,
                  "month": 4,
                  "year": 596
                },
                "kind": "manual",
                "phi": 4
              }
            }
          },
          "stem_kind": "Beat",
          "track_scale": 1
        },
        "cycle_start": 56,
        "tacet": false
      }
    ]
  ]
};
}
