/** Trap cohort body, POST /api/sample-pack/cohort, and the sample-pack download. */

import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { die, request, writeAndCheck } from "../client";

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

export async function samplePackCohort(): Promise<unknown[]> {
  const response = await request("POST", "/api/sample-pack/cohort", {
    body: templatedLoopScoreExample(),
  });
  const cohort: unknown = JSON.parse(response.raw.toString("utf8"));
  if (!isNonEmptyObject(cohort) || !nonEmptyArray(cohort.results)) {
    die("The sample-pack cohort returned no tracks.");
  }
  console.log(`ok sample-pack/cohort (${cohort.results.length} track(s))`);
  return cohort.results;
}

export async function fetchSamplePack(tracks: unknown[]): Promise<void> {
  const score = templatedLoopScoreExample().score;
  const response = await request("POST", "/download/sample_pack/fetch", {
    body: { pack: { score, tracks } },
  });
  writeAndCheck(
    path.join(OUT_DIR, "sample_pack.zip"),
    response.raw,
    Buffer.from("PK"),
    `fetch zip (${response.contentType})`,
  );
}

if (import.meta.url === pathToFileURL(process.argv[1] ?? "").href) {
  const { mkdirSync } = await import("node:fs");
  mkdirSync(OUT_DIR, { recursive: true });
  await fetchSamplePack(await samplePackCohort());
}
