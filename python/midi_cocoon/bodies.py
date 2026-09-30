"""Example request bodies for the Monic Theory API."""

from __future__ import annotations


class VisualCompositionRequest:
    """Visual compose request."""

    @staticmethod
    def example() -> dict:
        """Return the visual compose body."""
        return {
            "pagination": {
                "limit": 6,
                "offset": 0,
                "pagenum": 1,
            },
            "query": {
                "breath_band": "B3",
                "datetime": {
                    "day": 15,
                    "hour": 12,
                    "minute": 0,
                    "month": 9,
                    "year": 2026,
                },
                "description": "",
                "in_major": True,
                "key_signature": 0,
                "max_richness": 2,
                "n_breaths": 3,
                "schema": 3,
                "tempo_band": "Andante",
            },
        }



class TemplatedLoopScoreRequest:
    """Sample-pack cohort request."""

    @staticmethod
    def example() -> dict:
        """Return the sample-pack cohort body."""
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
                                "year": 4043,
                            },
                            "kind": "manual",
                            "phi": 4,
                        },
                        "min_complexity": {
                            "datetime": {
                                "day": 16,
                                "hour": 10,
                                "minute": 7,
                                "month": 2,
                                "year": 126,
                            },
                            "kind": "manual",
                            "phi": 4,
                        },
                        "rotation": {
                            "datetime": {
                                "day": 3,
                                "hour": 12,
                                "minute": 37,
                                "month": 3,
                                "year": 4353,
                            },
                            "kind": "manual",
                            "phi": 4,
                        },
                        "tonality": {
                            "datetime": {
                                "day": 15,
                                "hour": 23,
                                "minute": 33,
                                "month": 2,
                                "year": 470,
                            },
                            "kind": "manual",
                            "phi": 4,
                        },
                    },
                },
                "harmonic_spread": 2,
                "in_major": True,
                "key_signature": 0,
                "label": "Trap",
                "max_richness": 3,
                "modality": "Ionian",
                "scale": 4,
                "schema": 1,
                "time_signature": 4,
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
                                "voice_type": 0,
                            },
                            "label": "Sub Bass",
                            "marf": {
                                "depth": 0,
                                "dynamic": [
                                    3,
                                ],
                                "melodic_offset": 2,
                                "modality": "Ionian",
                                "register": 1,
                                "rotation_offset": 0,
                                "same_q": True,
                                "span": 6,
                                "sway": 1,
                            },
                            "melodic_pouch": {
                                "seeds": {
                                    "complexity": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                    "depth": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                    "melodic": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                    "sway": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                    "tonality": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                },
                            },
                            "pc": 38,
                            "pouch": {
                                "complexity": {
                                    "DateUFO": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                },
                                "harmonic": {
                                    "datetime": None,
                                    "kind": "off",
                                    "phi": 0,
                                },
                                "melodic": {
                                    "datetime": None,
                                    "kind": "off",
                                    "phi": 0,
                                },
                                "tonality": {
                                    "DateHFO": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                },
                            },
                            "rarf": {
                                "base_of_rhythm": 2,
                                "computed_rhythm": {
                                    "coefficient": [
                                        1,
                                        4,
                                    ],
                                    "mode": {
                                        "kind": "SimpleHarmonic",
                                        "tree_id": 11,
                                    },
                                    "time_scale": 3,
                                },
                                "n_bars": 2,
                            },
                            "rhythm_pouch": {
                                "seeds": {
                                    "mute": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                    "offset": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                    "phase": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                    "recur": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                },
                            },
                            "stem_kind": "Instrumental",
                            "track_scale": 1,
                        },
                        "cycle_start": 0,
                        "tacet": False,
                    },
                    {
                        "clip": {
                            "articulation": 1,
                            "harf": {
                                "harmonic_spread": 1,
                                "key_signature": 0,
                                "max_richness": 3,
                                "n_voices": 1,
                                "voice_type": 0,
                            },
                            "label": "Sub Bass",
                            "marf": {
                                "depth": 0,
                                "dynamic": [
                                    3,
                                ],
                                "melodic_offset": 2,
                                "modality": "Ionian",
                                "register": 1,
                                "rotation_offset": 0,
                                "same_q": True,
                                "span": 6,
                                "sway": 1,
                            },
                            "melodic_pouch": {
                                "seeds": {
                                    "complexity": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                    "depth": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                    "melodic": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                    "sway": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                    "tonality": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                },
                            },
                            "pc": 38,
                            "pouch": {
                                "complexity": {
                                    "DateUFO": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                },
                                "harmonic": {
                                    "datetime": None,
                                    "kind": "off",
                                    "phi": 0,
                                },
                                "melodic": {
                                    "datetime": None,
                                    "kind": "off",
                                    "phi": 0,
                                },
                                "tonality": {
                                    "DateHFO": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                },
                            },
                            "rarf": {
                                "base_of_rhythm": 2,
                                "computed_rhythm": {
                                    "coefficient": [
                                        1,
                                        4,
                                    ],
                                    "mode": {
                                        "kind": "SimpleHarmonic",
                                        "tree_id": 11,
                                    },
                                    "time_scale": 3,
                                },
                                "n_bars": 2,
                            },
                            "rhythm_pouch": {
                                "seeds": {
                                    "mute": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                    "offset": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                    "phase": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                    "recur": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                },
                            },
                            "stem_kind": "Instrumental",
                            "track_scale": 1,
                        },
                        "cycle_start": 8,
                        "tacet": False,
                    },
                    {
                        "clip": {
                            "articulation": 1,
                            "harf": {
                                "harmonic_spread": 1,
                                "key_signature": 0,
                                "max_richness": 3,
                                "n_voices": 1,
                                "voice_type": 0,
                            },
                            "label": "Sub Bass",
                            "marf": {
                                "depth": 0,
                                "dynamic": [
                                    3,
                                ],
                                "melodic_offset": 2,
                                "modality": "Ionian",
                                "register": 1,
                                "rotation_offset": 0,
                                "same_q": True,
                                "span": 6,
                                "sway": 1,
                            },
                            "melodic_pouch": {
                                "seeds": {
                                    "complexity": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                    "depth": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                    "melodic": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                    "sway": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                    "tonality": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                },
                            },
                            "pc": 38,
                            "pouch": {
                                "complexity": {
                                    "DateUFO": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                },
                                "harmonic": {
                                    "datetime": None,
                                    "kind": "off",
                                    "phi": 0,
                                },
                                "melodic": {
                                    "datetime": None,
                                    "kind": "off",
                                    "phi": 0,
                                },
                                "tonality": {
                                    "DateHFO": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                },
                            },
                            "rarf": {
                                "base_of_rhythm": 2,
                                "computed_rhythm": {
                                    "coefficient": [
                                        1,
                                        4,
                                    ],
                                    "mode": {
                                        "kind": "SimpleHarmonic",
                                        "tree_id": 11,
                                    },
                                    "time_scale": 3,
                                },
                                "n_bars": 2,
                            },
                            "rhythm_pouch": {
                                "seeds": {
                                    "mute": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                    "offset": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                    "phase": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                    "recur": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                },
                            },
                            "stem_kind": "Instrumental",
                            "track_scale": 1,
                        },
                        "cycle_start": 16,
                        "tacet": False,
                    },
                    {
                        "clip": {
                            "articulation": 1,
                            "harf": {
                                "harmonic_spread": 1,
                                "key_signature": 0,
                                "max_richness": 3,
                                "n_voices": 1,
                                "voice_type": 0,
                            },
                            "label": "Sub Bass",
                            "marf": {
                                "depth": 0,
                                "dynamic": [
                                    3,
                                ],
                                "melodic_offset": 2,
                                "modality": "Ionian",
                                "register": 1,
                                "rotation_offset": 0,
                                "same_q": True,
                                "span": 6,
                                "sway": 1,
                            },
                            "melodic_pouch": {
                                "seeds": {
                                    "complexity": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                    "depth": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                    "melodic": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                    "sway": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                    "tonality": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                },
                            },
                            "pc": 38,
                            "pouch": {
                                "complexity": {
                                    "DateUFO": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                },
                                "harmonic": {
                                    "datetime": None,
                                    "kind": "off",
                                    "phi": 0,
                                },
                                "melodic": {
                                    "datetime": None,
                                    "kind": "off",
                                    "phi": 0,
                                },
                                "tonality": {
                                    "DateHFO": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                },
                            },
                            "rarf": {
                                "base_of_rhythm": 2,
                                "computed_rhythm": {
                                    "coefficient": [
                                        1,
                                        4,
                                    ],
                                    "mode": {
                                        "kind": "SimpleHarmonic",
                                        "tree_id": 11,
                                    },
                                    "time_scale": 3,
                                },
                                "n_bars": 2,
                            },
                            "rhythm_pouch": {
                                "seeds": {
                                    "mute": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                    "offset": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                    "phase": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                    "recur": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                },
                            },
                            "stem_kind": "Instrumental",
                            "track_scale": 1,
                        },
                        "cycle_start": 24,
                        "tacet": False,
                    },
                    {
                        "clip": {
                            "articulation": 1,
                            "harf": {
                                "harmonic_spread": 1,
                                "key_signature": 0,
                                "max_richness": 3,
                                "n_voices": 1,
                                "voice_type": 0,
                            },
                            "label": "Sub Bass",
                            "marf": {
                                "depth": 0,
                                "dynamic": [
                                    3,
                                ],
                                "melodic_offset": 2,
                                "modality": "Ionian",
                                "register": 1,
                                "rotation_offset": 0,
                                "same_q": True,
                                "span": 6,
                                "sway": 1,
                            },
                            "melodic_pouch": {
                                "seeds": {
                                    "complexity": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                    "depth": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                    "melodic": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                    "sway": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                    "tonality": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                },
                            },
                            "pc": 38,
                            "pouch": {
                                "complexity": {
                                    "DateUFO": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                },
                                "harmonic": {
                                    "datetime": None,
                                    "kind": "off",
                                    "phi": 0,
                                },
                                "melodic": {
                                    "datetime": None,
                                    "kind": "off",
                                    "phi": 0,
                                },
                                "tonality": {
                                    "DateHFO": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                },
                            },
                            "rarf": {
                                "base_of_rhythm": 2,
                                "computed_rhythm": {
                                    "coefficient": [
                                        1,
                                        4,
                                    ],
                                    "mode": {
                                        "kind": "SimpleHarmonic",
                                        "tree_id": 11,
                                    },
                                    "time_scale": 3,
                                },
                                "n_bars": 2,
                            },
                            "rhythm_pouch": {
                                "seeds": {
                                    "mute": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                    "offset": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                    "phase": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                    "recur": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                },
                            },
                            "stem_kind": "Instrumental",
                            "track_scale": 1,
                        },
                        "cycle_start": 32,
                        "tacet": False,
                    },
                    {
                        "clip": {
                            "articulation": 1,
                            "harf": {
                                "harmonic_spread": 1,
                                "key_signature": 0,
                                "max_richness": 3,
                                "n_voices": 1,
                                "voice_type": 0,
                            },
                            "label": "Sub Bass",
                            "marf": {
                                "depth": 0,
                                "dynamic": [
                                    3,
                                ],
                                "melodic_offset": 2,
                                "modality": "Ionian",
                                "register": 1,
                                "rotation_offset": 0,
                                "same_q": True,
                                "span": 6,
                                "sway": 1,
                            },
                            "melodic_pouch": {
                                "seeds": {
                                    "complexity": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                    "depth": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                    "melodic": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                    "sway": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                    "tonality": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                },
                            },
                            "pc": 38,
                            "pouch": {
                                "complexity": {
                                    "DateUFO": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                },
                                "harmonic": {
                                    "datetime": None,
                                    "kind": "off",
                                    "phi": 0,
                                },
                                "melodic": {
                                    "datetime": None,
                                    "kind": "off",
                                    "phi": 0,
                                },
                                "tonality": {
                                    "DateHFO": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                },
                            },
                            "rarf": {
                                "base_of_rhythm": 2,
                                "computed_rhythm": {
                                    "coefficient": [
                                        1,
                                        4,
                                    ],
                                    "mode": {
                                        "kind": "SimpleHarmonic",
                                        "tree_id": 11,
                                    },
                                    "time_scale": 3,
                                },
                                "n_bars": 2,
                            },
                            "rhythm_pouch": {
                                "seeds": {
                                    "mute": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                    "offset": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                    "phase": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                    "recur": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                },
                            },
                            "stem_kind": "Instrumental",
                            "track_scale": 1,
                        },
                        "cycle_start": 40,
                        "tacet": False,
                    },
                    {
                        "clip": {
                            "articulation": 1,
                            "harf": {
                                "harmonic_spread": 1,
                                "key_signature": 0,
                                "max_richness": 3,
                                "n_voices": 1,
                                "voice_type": 0,
                            },
                            "label": "Sub Bass",
                            "marf": {
                                "depth": 0,
                                "dynamic": [
                                    3,
                                ],
                                "melodic_offset": 2,
                                "modality": "Ionian",
                                "register": 1,
                                "rotation_offset": 0,
                                "same_q": True,
                                "span": 6,
                                "sway": 1,
                            },
                            "melodic_pouch": {
                                "seeds": {
                                    "complexity": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                    "depth": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                    "melodic": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                    "sway": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                    "tonality": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                },
                            },
                            "pc": 38,
                            "pouch": {
                                "complexity": {
                                    "DateUFO": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                },
                                "harmonic": {
                                    "datetime": None,
                                    "kind": "off",
                                    "phi": 0,
                                },
                                "melodic": {
                                    "datetime": None,
                                    "kind": "off",
                                    "phi": 0,
                                },
                                "tonality": {
                                    "DateHFO": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                },
                            },
                            "rarf": {
                                "base_of_rhythm": 2,
                                "computed_rhythm": {
                                    "coefficient": [
                                        1,
                                        4,
                                    ],
                                    "mode": {
                                        "kind": "SimpleHarmonic",
                                        "tree_id": 11,
                                    },
                                    "time_scale": 3,
                                },
                                "n_bars": 2,
                            },
                            "rhythm_pouch": {
                                "seeds": {
                                    "mute": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                    "offset": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                    "phase": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                    "recur": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                },
                            },
                            "stem_kind": "Instrumental",
                            "track_scale": 1,
                        },
                        "cycle_start": 48,
                        "tacet": False,
                    },
                    {
                        "clip": {
                            "articulation": 1,
                            "harf": {
                                "harmonic_spread": 1,
                                "key_signature": 0,
                                "max_richness": 3,
                                "n_voices": 1,
                                "voice_type": 0,
                            },
                            "label": "Sub Bass",
                            "marf": {
                                "depth": 0,
                                "dynamic": [
                                    3,
                                ],
                                "melodic_offset": 2,
                                "modality": "Ionian",
                                "register": 1,
                                "rotation_offset": 0,
                                "same_q": True,
                                "span": 6,
                                "sway": 1,
                            },
                            "melodic_pouch": {
                                "seeds": {
                                    "complexity": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                    "depth": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                    "melodic": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                    "sway": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                    "tonality": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                },
                            },
                            "pc": 38,
                            "pouch": {
                                "complexity": {
                                    "DateUFO": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                },
                                "harmonic": {
                                    "datetime": None,
                                    "kind": "off",
                                    "phi": 0,
                                },
                                "melodic": {
                                    "datetime": None,
                                    "kind": "off",
                                    "phi": 0,
                                },
                                "tonality": {
                                    "DateHFO": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                },
                            },
                            "rarf": {
                                "base_of_rhythm": 2,
                                "computed_rhythm": {
                                    "coefficient": [
                                        1,
                                        4,
                                    ],
                                    "mode": {
                                        "kind": "SimpleHarmonic",
                                        "tree_id": 11,
                                    },
                                    "time_scale": 3,
                                },
                                "n_bars": 2,
                            },
                            "rhythm_pouch": {
                                "seeds": {
                                    "mute": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                    "offset": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                    "phase": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                    "recur": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                },
                            },
                            "stem_kind": "Instrumental",
                            "track_scale": 1,
                        },
                        "cycle_start": 56,
                        "tacet": False,
                    },
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
                                "voice_type": 0,
                            },
                            "label": "808 kick",
                            "marf": {
                                "depth": 0,
                                "dynamic": [
                                    3,
                                ],
                                "melodic_offset": 2,
                                "modality": "Ionian",
                                "register": 2,
                                "rotation_offset": 0,
                                "same_q": True,
                                "span": 5,
                                "sway": 1,
                            },
                            "melodic_pouch": {
                                "seeds": {
                                    "complexity": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                    "depth": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                    "melodic": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                    "sway": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                    "tonality": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                },
                            },
                            "pc": 116,
                            "pouch": {
                                "complexity": {
                                    "DateUFO": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                },
                                "harmonic": {
                                    "datetime": None,
                                    "kind": "off",
                                    "phi": 0,
                                },
                                "melodic": {
                                    "datetime": None,
                                    "kind": "off",
                                    "phi": 0,
                                },
                                "tonality": {
                                    "DateHFO": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                },
                            },
                            "rarf": {
                                "base_of_rhythm": 2,
                                "computed_rhythm": {
                                    "coefficient": [
                                        1,
                                        1,
                                    ],
                                    "mode": {
                                        "events": 8,
                                        "hits": 3,
                                        "kind": "PositionedEuc",
                                        "offset": 0,
                                        "phase": 0,
                                    },
                                    "time_scale": 1,
                                },
                                "n_bars": 2,
                            },
                            "rhythm_pouch": {
                                "seeds": {
                                    "mute": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                    "offset": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                    "phase": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                    "recur": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                },
                            },
                            "stem_kind": "Beat",
                            "track_scale": 1,
                        },
                        "cycle_start": 0,
                        "tacet": False,
                    },
                    {
                        "clip": {
                            "articulation": 2,
                            "harf": {
                                "harmonic_spread": 0,
                                "key_signature": 0,
                                "max_richness": 1,
                                "n_voices": 1,
                                "voice_type": 0,
                            },
                            "label": "808 kick",
                            "marf": {
                                "depth": 0,
                                "dynamic": [
                                    3,
                                ],
                                "melodic_offset": 2,
                                "modality": "Ionian",
                                "register": 2,
                                "rotation_offset": 0,
                                "same_q": True,
                                "span": 5,
                                "sway": 1,
                            },
                            "melodic_pouch": {
                                "seeds": {
                                    "complexity": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                    "depth": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                    "melodic": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                    "sway": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                    "tonality": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                },
                            },
                            "pc": 116,
                            "pouch": {
                                "complexity": {
                                    "DateUFO": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                },
                                "harmonic": {
                                    "datetime": None,
                                    "kind": "off",
                                    "phi": 0,
                                },
                                "melodic": {
                                    "datetime": None,
                                    "kind": "off",
                                    "phi": 0,
                                },
                                "tonality": {
                                    "DateHFO": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                },
                            },
                            "rarf": {
                                "base_of_rhythm": 2,
                                "computed_rhythm": {
                                    "coefficient": [
                                        1,
                                        1,
                                    ],
                                    "mode": {
                                        "events": 8,
                                        "hits": 3,
                                        "kind": "PositionedEuc",
                                        "offset": 0,
                                        "phase": 0,
                                    },
                                    "time_scale": 1,
                                },
                                "n_bars": 2,
                            },
                            "rhythm_pouch": {
                                "seeds": {
                                    "mute": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                    "offset": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                    "phase": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                    "recur": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                },
                            },
                            "stem_kind": "Beat",
                            "track_scale": 1,
                        },
                        "cycle_start": 8,
                        "tacet": False,
                    },
                    {
                        "clip": {
                            "articulation": 2,
                            "harf": {
                                "harmonic_spread": 0,
                                "key_signature": 0,
                                "max_richness": 1,
                                "n_voices": 1,
                                "voice_type": 0,
                            },
                            "label": "808 kick",
                            "marf": {
                                "depth": 0,
                                "dynamic": [
                                    3,
                                ],
                                "melodic_offset": 2,
                                "modality": "Ionian",
                                "register": 2,
                                "rotation_offset": 0,
                                "same_q": True,
                                "span": 5,
                                "sway": 1,
                            },
                            "melodic_pouch": {
                                "seeds": {
                                    "complexity": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                    "depth": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                    "melodic": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                    "sway": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                    "tonality": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                },
                            },
                            "pc": 116,
                            "pouch": {
                                "complexity": {
                                    "DateUFO": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                },
                                "harmonic": {
                                    "datetime": None,
                                    "kind": "off",
                                    "phi": 0,
                                },
                                "melodic": {
                                    "datetime": None,
                                    "kind": "off",
                                    "phi": 0,
                                },
                                "tonality": {
                                    "DateHFO": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                },
                            },
                            "rarf": {
                                "base_of_rhythm": 2,
                                "computed_rhythm": {
                                    "coefficient": [
                                        1,
                                        1,
                                    ],
                                    "mode": {
                                        "events": 8,
                                        "hits": 3,
                                        "kind": "PositionedEuc",
                                        "offset": 0,
                                        "phase": 0,
                                    },
                                    "time_scale": 1,
                                },
                                "n_bars": 2,
                            },
                            "rhythm_pouch": {
                                "seeds": {
                                    "mute": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                    "offset": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                    "phase": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                    "recur": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                },
                            },
                            "stem_kind": "Beat",
                            "track_scale": 1,
                        },
                        "cycle_start": 16,
                        "tacet": False,
                    },
                    {
                        "clip": {
                            "articulation": 2,
                            "harf": {
                                "harmonic_spread": 0,
                                "key_signature": 0,
                                "max_richness": 1,
                                "n_voices": 1,
                                "voice_type": 0,
                            },
                            "label": "808 kick",
                            "marf": {
                                "depth": 0,
                                "dynamic": [
                                    1,
                                    4,
                                ],
                                "melodic_offset": 2,
                                "modality": "Ionian",
                                "register": 2,
                                "rotation_offset": 0,
                                "same_q": True,
                                "span": 5,
                                "sway": 1,
                            },
                            "melodic_pouch": {
                                "seeds": {
                                    "complexity": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                    "depth": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                    "melodic": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                    "sway": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                    "tonality": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                },
                            },
                            "pc": 116,
                            "pouch": {
                                "complexity": {
                                    "DateUFO": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                },
                                "harmonic": {
                                    "datetime": None,
                                    "kind": "off",
                                    "phi": 0,
                                },
                                "melodic": {
                                    "datetime": None,
                                    "kind": "off",
                                    "phi": 0,
                                },
                                "tonality": {
                                    "DateHFO": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                },
                            },
                            "rarf": {
                                "base_of_rhythm": 2,
                                "computed_rhythm": {
                                    "coefficient": [
                                        8,
                                        1,
                                    ],
                                    "mode": {
                                        "events": 8,
                                        "hits": 3,
                                        "kind": "PositionedEuc",
                                        "offset": 0,
                                        "phase": 0,
                                    },
                                    "time_scale": 1,
                                },
                                "n_bars": 2,
                            },
                            "rhythm_pouch": {
                                "seeds": {
                                    "mute": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                    "offset": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                    "phase": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                    "recur": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                },
                            },
                            "stem_kind": "Beat",
                            "track_scale": 1,
                        },
                        "cycle_start": 24,
                        "tacet": False,
                    },
                    {
                        "clip": {
                            "articulation": 2,
                            "harf": {
                                "harmonic_spread": 0,
                                "key_signature": 0,
                                "max_richness": 1,
                                "n_voices": 1,
                                "voice_type": 0,
                            },
                            "label": "808 kick",
                            "marf": {
                                "depth": 0,
                                "dynamic": [
                                    3,
                                ],
                                "melodic_offset": 2,
                                "modality": "Ionian",
                                "register": 2,
                                "rotation_offset": 0,
                                "same_q": True,
                                "span": 5,
                                "sway": 1,
                            },
                            "melodic_pouch": {
                                "seeds": {
                                    "complexity": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                    "depth": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                    "melodic": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                    "sway": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                    "tonality": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                },
                            },
                            "pc": 116,
                            "pouch": {
                                "complexity": {
                                    "DateUFO": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                },
                                "harmonic": {
                                    "datetime": None,
                                    "kind": "off",
                                    "phi": 0,
                                },
                                "melodic": {
                                    "datetime": None,
                                    "kind": "off",
                                    "phi": 0,
                                },
                                "tonality": {
                                    "DateHFO": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                },
                            },
                            "rarf": {
                                "base_of_rhythm": 2,
                                "computed_rhythm": {
                                    "coefficient": [
                                        1,
                                        1,
                                    ],
                                    "mode": {
                                        "events": 8,
                                        "hits": 3,
                                        "kind": "PositionedEuc",
                                        "offset": 0,
                                        "phase": 0,
                                    },
                                    "time_scale": 1,
                                },
                                "n_bars": 2,
                            },
                            "rhythm_pouch": {
                                "seeds": {
                                    "mute": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                    "offset": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                    "phase": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                    "recur": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                },
                            },
                            "stem_kind": "Beat",
                            "track_scale": 1,
                        },
                        "cycle_start": 32,
                        "tacet": False,
                    },
                    {
                        "clip": {
                            "articulation": 2,
                            "harf": {
                                "harmonic_spread": 0,
                                "key_signature": 0,
                                "max_richness": 1,
                                "n_voices": 1,
                                "voice_type": 0,
                            },
                            "label": "808 kick",
                            "marf": {
                                "depth": 0,
                                "dynamic": [
                                    3,
                                ],
                                "melodic_offset": 2,
                                "modality": "Ionian",
                                "register": 2,
                                "rotation_offset": 0,
                                "same_q": True,
                                "span": 5,
                                "sway": 1,
                            },
                            "melodic_pouch": {
                                "seeds": {
                                    "complexity": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                    "depth": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                    "melodic": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                    "sway": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                    "tonality": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                },
                            },
                            "pc": 116,
                            "pouch": {
                                "complexity": {
                                    "DateUFO": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                },
                                "harmonic": {
                                    "datetime": None,
                                    "kind": "off",
                                    "phi": 0,
                                },
                                "melodic": {
                                    "datetime": None,
                                    "kind": "off",
                                    "phi": 0,
                                },
                                "tonality": {
                                    "DateHFO": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                },
                            },
                            "rarf": {
                                "base_of_rhythm": 2,
                                "computed_rhythm": {
                                    "coefficient": [
                                        1,
                                        1,
                                    ],
                                    "mode": {
                                        "events": 8,
                                        "hits": 3,
                                        "kind": "PositionedEuc",
                                        "offset": 0,
                                        "phase": 0,
                                    },
                                    "time_scale": 1,
                                },
                                "n_bars": 2,
                            },
                            "rhythm_pouch": {
                                "seeds": {
                                    "mute": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                    "offset": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                    "phase": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                    "recur": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                },
                            },
                            "stem_kind": "Beat",
                            "track_scale": 1,
                        },
                        "cycle_start": 40,
                        "tacet": False,
                    },
                    {
                        "clip": {
                            "articulation": 2,
                            "harf": {
                                "harmonic_spread": 0,
                                "key_signature": 0,
                                "max_richness": 1,
                                "n_voices": 1,
                                "voice_type": 0,
                            },
                            "label": "808 kick",
                            "marf": {
                                "depth": 0,
                                "dynamic": [
                                    3,
                                ],
                                "melodic_offset": 2,
                                "modality": "Ionian",
                                "register": 2,
                                "rotation_offset": 0,
                                "same_q": True,
                                "span": 5,
                                "sway": 1,
                            },
                            "melodic_pouch": {
                                "seeds": {
                                    "complexity": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                    "depth": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                    "melodic": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                    "sway": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                    "tonality": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                },
                            },
                            "pc": 116,
                            "pouch": {
                                "complexity": {
                                    "DateUFO": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                },
                                "harmonic": {
                                    "datetime": None,
                                    "kind": "off",
                                    "phi": 0,
                                },
                                "melodic": {
                                    "datetime": None,
                                    "kind": "off",
                                    "phi": 0,
                                },
                                "tonality": {
                                    "DateHFO": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                },
                            },
                            "rarf": {
                                "base_of_rhythm": 2,
                                "computed_rhythm": {
                                    "coefficient": [
                                        1,
                                        1,
                                    ],
                                    "mode": {
                                        "events": 8,
                                        "hits": 3,
                                        "kind": "PositionedEuc",
                                        "offset": 0,
                                        "phase": 0,
                                    },
                                    "time_scale": 1,
                                },
                                "n_bars": 2,
                            },
                            "rhythm_pouch": {
                                "seeds": {
                                    "mute": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                    "offset": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                    "phase": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                    "recur": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                },
                            },
                            "stem_kind": "Beat",
                            "track_scale": 1,
                        },
                        "cycle_start": 48,
                        "tacet": False,
                    },
                    {
                        "clip": {
                            "articulation": 2,
                            "harf": {
                                "harmonic_spread": 0,
                                "key_signature": 0,
                                "max_richness": 1,
                                "n_voices": 1,
                                "voice_type": 0,
                            },
                            "label": "808 kick",
                            "marf": {
                                "depth": 0,
                                "dynamic": [
                                    1,
                                    4,
                                ],
                                "melodic_offset": 2,
                                "modality": "Ionian",
                                "register": 2,
                                "rotation_offset": 0,
                                "same_q": True,
                                "span": 5,
                                "sway": 1,
                            },
                            "melodic_pouch": {
                                "seeds": {
                                    "complexity": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                    "depth": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                    "melodic": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                    "sway": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                    "tonality": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                },
                            },
                            "pc": 116,
                            "pouch": {
                                "complexity": {
                                    "DateUFO": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                },
                                "harmonic": {
                                    "datetime": None,
                                    "kind": "off",
                                    "phi": 0,
                                },
                                "melodic": {
                                    "datetime": None,
                                    "kind": "off",
                                    "phi": 0,
                                },
                                "tonality": {
                                    "DateHFO": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                },
                            },
                            "rarf": {
                                "base_of_rhythm": 2,
                                "computed_rhythm": {
                                    "coefficient": [
                                        8,
                                        1,
                                    ],
                                    "mode": {
                                        "events": 8,
                                        "hits": 3,
                                        "kind": "PositionedEuc",
                                        "offset": 0,
                                        "phase": 0,
                                    },
                                    "time_scale": 1,
                                },
                                "n_bars": 2,
                            },
                            "rhythm_pouch": {
                                "seeds": {
                                    "mute": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                    "offset": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                    "phase": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                    "recur": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                },
                            },
                            "stem_kind": "Beat",
                            "track_scale": 1,
                        },
                        "cycle_start": 56,
                        "tacet": False,
                    },
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
                                "voice_type": 0,
                            },
                            "label": "Trap Clap",
                            "marf": {
                                "depth": 0,
                                "dynamic": [
                                    3,
                                ],
                                "melodic_offset": 2,
                                "modality": "Ionian",
                                "register": 4,
                                "rotation_offset": 0,
                                "same_q": True,
                                "span": 3,
                                "sway": 1,
                            },
                            "melodic_pouch": {
                                "seeds": {
                                    "complexity": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                    "depth": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                    "melodic": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                    "sway": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                    "tonality": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                },
                            },
                            "pc": 39,
                            "pouch": {
                                "complexity": {
                                    "DateUFO": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                },
                                "harmonic": {
                                    "datetime": None,
                                    "kind": "off",
                                    "phi": 0,
                                },
                                "melodic": {
                                    "datetime": None,
                                    "kind": "off",
                                    "phi": 0,
                                },
                                "tonality": {
                                    "DateHFO": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                },
                            },
                            "rarf": {
                                "base_of_rhythm": 2,
                                "computed_rhythm": {
                                    "coefficient": [
                                        1,
                                        1,
                                    ],
                                    "mode": {
                                        "events": 8,
                                        "hits": 1,
                                        "kind": "PositionedEuc",
                                        "offset": 4,
                                        "phase": 0,
                                    },
                                    "time_scale": 1,
                                },
                                "n_bars": 2,
                            },
                            "rhythm_pouch": {
                                "seeds": {
                                    "mute": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                    "offset": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                    "phase": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                    "recur": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                },
                            },
                            "stem_kind": "Beat",
                            "track_scale": 1,
                        },
                        "cycle_start": 0,
                        "tacet": False,
                    },
                    {
                        "clip": {
                            "articulation": 0,
                            "harf": {
                                "harmonic_spread": 0,
                                "key_signature": 0,
                                "max_richness": 0,
                                "n_voices": 1,
                                "voice_type": 0,
                            },
                            "label": "Trap Clap",
                            "marf": {
                                "depth": 0,
                                "dynamic": [
                                    3,
                                ],
                                "melodic_offset": 2,
                                "modality": "Ionian",
                                "register": 4,
                                "rotation_offset": 0,
                                "same_q": True,
                                "span": 3,
                                "sway": 1,
                            },
                            "melodic_pouch": {
                                "seeds": {
                                    "complexity": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                    "depth": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                    "melodic": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                    "sway": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                    "tonality": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                },
                            },
                            "pc": 39,
                            "pouch": {
                                "complexity": {
                                    "DateUFO": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                },
                                "harmonic": {
                                    "datetime": None,
                                    "kind": "off",
                                    "phi": 0,
                                },
                                "melodic": {
                                    "datetime": None,
                                    "kind": "off",
                                    "phi": 0,
                                },
                                "tonality": {
                                    "DateHFO": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                },
                            },
                            "rarf": {
                                "base_of_rhythm": 2,
                                "computed_rhythm": {
                                    "coefficient": [
                                        1,
                                        1,
                                    ],
                                    "mode": {
                                        "events": 8,
                                        "hits": 1,
                                        "kind": "PositionedEuc",
                                        "offset": 4,
                                        "phase": 0,
                                    },
                                    "time_scale": 1,
                                },
                                "n_bars": 2,
                            },
                            "rhythm_pouch": {
                                "seeds": {
                                    "mute": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                    "offset": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                    "phase": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                    "recur": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                },
                            },
                            "stem_kind": "Beat",
                            "track_scale": 1,
                        },
                        "cycle_start": 8,
                        "tacet": False,
                    },
                    {
                        "clip": {
                            "articulation": 0,
                            "harf": {
                                "harmonic_spread": 0,
                                "key_signature": 0,
                                "max_richness": 0,
                                "n_voices": 1,
                                "voice_type": 0,
                            },
                            "label": "Trap Clap",
                            "marf": {
                                "depth": 0,
                                "dynamic": [
                                    3,
                                ],
                                "melodic_offset": 2,
                                "modality": "Ionian",
                                "register": 4,
                                "rotation_offset": 0,
                                "same_q": True,
                                "span": 3,
                                "sway": 1,
                            },
                            "melodic_pouch": {
                                "seeds": {
                                    "complexity": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                    "depth": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                    "melodic": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                    "sway": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                    "tonality": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                },
                            },
                            "pc": 39,
                            "pouch": {
                                "complexity": {
                                    "DateUFO": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                },
                                "harmonic": {
                                    "datetime": None,
                                    "kind": "off",
                                    "phi": 0,
                                },
                                "melodic": {
                                    "datetime": None,
                                    "kind": "off",
                                    "phi": 0,
                                },
                                "tonality": {
                                    "DateHFO": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                },
                            },
                            "rarf": {
                                "base_of_rhythm": 2,
                                "computed_rhythm": {
                                    "coefficient": [
                                        1,
                                        1,
                                    ],
                                    "mode": {
                                        "events": 8,
                                        "hits": 1,
                                        "kind": "PositionedEuc",
                                        "offset": 4,
                                        "phase": 0,
                                    },
                                    "time_scale": 1,
                                },
                                "n_bars": 2,
                            },
                            "rhythm_pouch": {
                                "seeds": {
                                    "mute": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                    "offset": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                    "phase": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                    "recur": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                },
                            },
                            "stem_kind": "Beat",
                            "track_scale": 1,
                        },
                        "cycle_start": 16,
                        "tacet": False,
                    },
                    {
                        "clip": {
                            "articulation": 0,
                            "harf": {
                                "harmonic_spread": 0,
                                "key_signature": 0,
                                "max_richness": 0,
                                "n_voices": 1,
                                "voice_type": 0,
                            },
                            "label": "Trap Clap",
                            "marf": {
                                "depth": 0,
                                "dynamic": [
                                    3,
                                ],
                                "melodic_offset": 2,
                                "modality": "Ionian",
                                "register": 4,
                                "rotation_offset": 0,
                                "same_q": True,
                                "span": 3,
                                "sway": 1,
                            },
                            "melodic_pouch": {
                                "seeds": {
                                    "complexity": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                    "depth": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                    "melodic": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                    "sway": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                    "tonality": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                },
                            },
                            "pc": 39,
                            "pouch": {
                                "complexity": {
                                    "DateUFO": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                },
                                "harmonic": {
                                    "datetime": None,
                                    "kind": "off",
                                    "phi": 0,
                                },
                                "melodic": {
                                    "datetime": None,
                                    "kind": "off",
                                    "phi": 0,
                                },
                                "tonality": {
                                    "DateHFO": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                },
                            },
                            "rarf": {
                                "base_of_rhythm": 2,
                                "computed_rhythm": {
                                    "coefficient": [
                                        1,
                                        1,
                                    ],
                                    "mode": {
                                        "events": 8,
                                        "hits": 1,
                                        "kind": "PositionedEuc",
                                        "offset": 4,
                                        "phase": 0,
                                    },
                                    "time_scale": 1,
                                },
                                "n_bars": 2,
                            },
                            "rhythm_pouch": {
                                "seeds": {
                                    "mute": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                    "offset": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                    "phase": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                    "recur": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                },
                            },
                            "stem_kind": "Beat",
                            "track_scale": 1,
                        },
                        "cycle_start": 24,
                        "tacet": False,
                    },
                    {
                        "clip": {
                            "articulation": 0,
                            "harf": {
                                "harmonic_spread": 0,
                                "key_signature": 0,
                                "max_richness": 0,
                                "n_voices": 1,
                                "voice_type": 0,
                            },
                            "label": "Trap Clap",
                            "marf": {
                                "depth": 0,
                                "dynamic": [
                                    3,
                                ],
                                "melodic_offset": 2,
                                "modality": "Ionian",
                                "register": 4,
                                "rotation_offset": 0,
                                "same_q": True,
                                "span": 3,
                                "sway": 1,
                            },
                            "melodic_pouch": {
                                "seeds": {
                                    "complexity": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                    "depth": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                    "melodic": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                    "sway": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                    "tonality": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                },
                            },
                            "pc": 39,
                            "pouch": {
                                "complexity": {
                                    "DateUFO": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                },
                                "harmonic": {
                                    "datetime": None,
                                    "kind": "off",
                                    "phi": 0,
                                },
                                "melodic": {
                                    "datetime": None,
                                    "kind": "off",
                                    "phi": 0,
                                },
                                "tonality": {
                                    "DateHFO": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                },
                            },
                            "rarf": {
                                "base_of_rhythm": 2,
                                "computed_rhythm": {
                                    "coefficient": [
                                        1,
                                        1,
                                    ],
                                    "mode": {
                                        "events": 8,
                                        "hits": 1,
                                        "kind": "PositionedEuc",
                                        "offset": 4,
                                        "phase": 0,
                                    },
                                    "time_scale": 1,
                                },
                                "n_bars": 2,
                            },
                            "rhythm_pouch": {
                                "seeds": {
                                    "mute": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                    "offset": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                    "phase": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                    "recur": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                },
                            },
                            "stem_kind": "Beat",
                            "track_scale": 1,
                        },
                        "cycle_start": 32,
                        "tacet": False,
                    },
                    {
                        "clip": {
                            "articulation": 0,
                            "harf": {
                                "harmonic_spread": 0,
                                "key_signature": 0,
                                "max_richness": 0,
                                "n_voices": 1,
                                "voice_type": 0,
                            },
                            "label": "Trap Clap",
                            "marf": {
                                "depth": 0,
                                "dynamic": [
                                    3,
                                ],
                                "melodic_offset": 2,
                                "modality": "Ionian",
                                "register": 4,
                                "rotation_offset": 0,
                                "same_q": True,
                                "span": 3,
                                "sway": 1,
                            },
                            "melodic_pouch": {
                                "seeds": {
                                    "complexity": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                    "depth": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                    "melodic": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                    "sway": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                    "tonality": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                },
                            },
                            "pc": 39,
                            "pouch": {
                                "complexity": {
                                    "DateUFO": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                },
                                "harmonic": {
                                    "datetime": None,
                                    "kind": "off",
                                    "phi": 0,
                                },
                                "melodic": {
                                    "datetime": None,
                                    "kind": "off",
                                    "phi": 0,
                                },
                                "tonality": {
                                    "DateHFO": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                },
                            },
                            "rarf": {
                                "base_of_rhythm": 2,
                                "computed_rhythm": {
                                    "coefficient": [
                                        1,
                                        1,
                                    ],
                                    "mode": {
                                        "events": 8,
                                        "hits": 1,
                                        "kind": "PositionedEuc",
                                        "offset": 4,
                                        "phase": 0,
                                    },
                                    "time_scale": 1,
                                },
                                "n_bars": 2,
                            },
                            "rhythm_pouch": {
                                "seeds": {
                                    "mute": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                    "offset": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                    "phase": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                    "recur": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                },
                            },
                            "stem_kind": "Beat",
                            "track_scale": 1,
                        },
                        "cycle_start": 40,
                        "tacet": False,
                    },
                    {
                        "clip": {
                            "articulation": 0,
                            "harf": {
                                "harmonic_spread": 0,
                                "key_signature": 0,
                                "max_richness": 0,
                                "n_voices": 1,
                                "voice_type": 0,
                            },
                            "label": "Trap Clap",
                            "marf": {
                                "depth": 0,
                                "dynamic": [
                                    3,
                                ],
                                "melodic_offset": 2,
                                "modality": "Ionian",
                                "register": 4,
                                "rotation_offset": 0,
                                "same_q": True,
                                "span": 3,
                                "sway": 1,
                            },
                            "melodic_pouch": {
                                "seeds": {
                                    "complexity": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                    "depth": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                    "melodic": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                    "sway": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                    "tonality": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                },
                            },
                            "pc": 39,
                            "pouch": {
                                "complexity": {
                                    "DateUFO": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                },
                                "harmonic": {
                                    "datetime": None,
                                    "kind": "off",
                                    "phi": 0,
                                },
                                "melodic": {
                                    "datetime": None,
                                    "kind": "off",
                                    "phi": 0,
                                },
                                "tonality": {
                                    "DateHFO": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                },
                            },
                            "rarf": {
                                "base_of_rhythm": 2,
                                "computed_rhythm": {
                                    "coefficient": [
                                        1,
                                        1,
                                    ],
                                    "mode": {
                                        "events": 8,
                                        "hits": 1,
                                        "kind": "PositionedEuc",
                                        "offset": 4,
                                        "phase": 0,
                                    },
                                    "time_scale": 1,
                                },
                                "n_bars": 2,
                            },
                            "rhythm_pouch": {
                                "seeds": {
                                    "mute": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                    "offset": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                    "phase": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                    "recur": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                },
                            },
                            "stem_kind": "Beat",
                            "track_scale": 1,
                        },
                        "cycle_start": 48,
                        "tacet": False,
                    },
                    {
                        "clip": {
                            "articulation": 0,
                            "harf": {
                                "harmonic_spread": 0,
                                "key_signature": 0,
                                "max_richness": 0,
                                "n_voices": 1,
                                "voice_type": 0,
                            },
                            "label": "Trap Clap",
                            "marf": {
                                "depth": 0,
                                "dynamic": [
                                    3,
                                ],
                                "melodic_offset": 2,
                                "modality": "Ionian",
                                "register": 4,
                                "rotation_offset": 0,
                                "same_q": True,
                                "span": 3,
                                "sway": 1,
                            },
                            "melodic_pouch": {
                                "seeds": {
                                    "complexity": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                    "depth": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                    "melodic": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                    "sway": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                    "tonality": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                },
                            },
                            "pc": 39,
                            "pouch": {
                                "complexity": {
                                    "DateUFO": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                },
                                "harmonic": {
                                    "datetime": None,
                                    "kind": "off",
                                    "phi": 0,
                                },
                                "melodic": {
                                    "datetime": None,
                                    "kind": "off",
                                    "phi": 0,
                                },
                                "tonality": {
                                    "DateHFO": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                },
                            },
                            "rarf": {
                                "base_of_rhythm": 2,
                                "computed_rhythm": {
                                    "coefficient": [
                                        1,
                                        1,
                                    ],
                                    "mode": {
                                        "events": 8,
                                        "hits": 1,
                                        "kind": "PositionedEuc",
                                        "offset": 4,
                                        "phase": 0,
                                    },
                                    "time_scale": 1,
                                },
                                "n_bars": 2,
                            },
                            "rhythm_pouch": {
                                "seeds": {
                                    "mute": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                    "offset": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                    "phase": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                    "recur": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                },
                            },
                            "stem_kind": "Beat",
                            "track_scale": 1,
                        },
                        "cycle_start": 56,
                        "tacet": False,
                    },
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
                                "voice_type": 0,
                            },
                            "label": "Hat Rolls & Sutter",
                            "marf": {
                                "depth": 0,
                                "dynamic": [
                                    3,
                                ],
                                "melodic_offset": 2,
                                "modality": "Ionian",
                                "register": 7,
                                "rotation_offset": 0,
                                "same_q": True,
                                "span": 0,
                                "sway": 1,
                            },
                            "melodic_pouch": {
                                "seeds": {
                                    "complexity": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                    "depth": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                    "melodic": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                    "sway": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                    "tonality": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                },
                            },
                            "pc": 112,
                            "pouch": {
                                "complexity": {
                                    "DateUFO": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                },
                                "harmonic": {
                                    "datetime": None,
                                    "kind": "off",
                                    "phi": 0,
                                },
                                "melodic": {
                                    "datetime": None,
                                    "kind": "off",
                                    "phi": 0,
                                },
                                "tonality": {
                                    "DateHFO": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                },
                            },
                            "rarf": {
                                "base_of_rhythm": 2,
                                "computed_rhythm": {
                                    "coefficient": [
                                        1,
                                        1,
                                    ],
                                    "mode": {
                                        "events": 16,
                                        "hits": 16,
                                        "kind": "PositionedEuc",
                                        "offset": 0,
                                        "phase": 0,
                                    },
                                    "time_scale": 1,
                                },
                                "n_bars": 2,
                            },
                            "rhythm_pouch": {
                                "seeds": {
                                    "mute": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                    "offset": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                    "phase": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                    "recur": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                },
                            },
                            "stem_kind": "Beat",
                            "track_scale": 1,
                        },
                        "cycle_start": 0,
                        "tacet": False,
                    },
                    {
                        "clip": {
                            "articulation": 0,
                            "harf": {
                                "harmonic_spread": 0,
                                "key_signature": 0,
                                "max_richness": 0,
                                "n_voices": 1,
                                "voice_type": 0,
                            },
                            "label": "Hat Rolls & Sutter",
                            "marf": {
                                "depth": 0,
                                "dynamic": [
                                    3,
                                ],
                                "melodic_offset": 2,
                                "modality": "Ionian",
                                "register": 7,
                                "rotation_offset": 0,
                                "same_q": True,
                                "span": 0,
                                "sway": 1,
                            },
                            "melodic_pouch": {
                                "seeds": {
                                    "complexity": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                    "depth": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                    "melodic": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                    "sway": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                    "tonality": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                },
                            },
                            "pc": 112,
                            "pouch": {
                                "complexity": {
                                    "DateUFO": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                },
                                "harmonic": {
                                    "datetime": None,
                                    "kind": "off",
                                    "phi": 0,
                                },
                                "melodic": {
                                    "datetime": None,
                                    "kind": "off",
                                    "phi": 0,
                                },
                                "tonality": {
                                    "DateHFO": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                },
                            },
                            "rarf": {
                                "base_of_rhythm": 2,
                                "computed_rhythm": {
                                    "coefficient": [
                                        1,
                                        1,
                                    ],
                                    "mode": {
                                        "events": 16,
                                        "hits": 16,
                                        "kind": "PositionedEuc",
                                        "offset": 0,
                                        "phase": 0,
                                    },
                                    "time_scale": 1,
                                },
                                "n_bars": 2,
                            },
                            "rhythm_pouch": {
                                "seeds": {
                                    "mute": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                    "offset": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                    "phase": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                    "recur": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                },
                            },
                            "stem_kind": "Beat",
                            "track_scale": 1,
                        },
                        "cycle_start": 8,
                        "tacet": False,
                    },
                    {
                        "clip": {
                            "articulation": 0,
                            "harf": {
                                "harmonic_spread": 0,
                                "key_signature": 0,
                                "max_richness": 0,
                                "n_voices": 1,
                                "voice_type": 0,
                            },
                            "label": "Hat Rolls & Sutter",
                            "marf": {
                                "depth": 0,
                                "dynamic": [
                                    3,
                                ],
                                "melodic_offset": 2,
                                "modality": "Ionian",
                                "register": 7,
                                "rotation_offset": 0,
                                "same_q": True,
                                "span": 0,
                                "sway": 1,
                            },
                            "melodic_pouch": {
                                "seeds": {
                                    "complexity": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                    "depth": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                    "melodic": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                    "sway": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                    "tonality": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                },
                            },
                            "pc": 112,
                            "pouch": {
                                "complexity": {
                                    "DateUFO": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                },
                                "harmonic": {
                                    "datetime": None,
                                    "kind": "off",
                                    "phi": 0,
                                },
                                "melodic": {
                                    "datetime": None,
                                    "kind": "off",
                                    "phi": 0,
                                },
                                "tonality": {
                                    "DateHFO": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                },
                            },
                            "rarf": {
                                "base_of_rhythm": 2,
                                "computed_rhythm": {
                                    "coefficient": [
                                        1,
                                        1,
                                    ],
                                    "mode": {
                                        "events": 16,
                                        "hits": 16,
                                        "kind": "PositionedEuc",
                                        "offset": 0,
                                        "phase": 0,
                                    },
                                    "time_scale": 1,
                                },
                                "n_bars": 2,
                            },
                            "rhythm_pouch": {
                                "seeds": {
                                    "mute": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                    "offset": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                    "phase": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                    "recur": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                },
                            },
                            "stem_kind": "Beat",
                            "track_scale": 1,
                        },
                        "cycle_start": 16,
                        "tacet": False,
                    },
                    {
                        "clip": {
                            "articulation": 0,
                            "harf": {
                                "harmonic_spread": 0,
                                "key_signature": 0,
                                "max_richness": 0,
                                "n_voices": 1,
                                "voice_type": 0,
                            },
                            "label": "Hat Rolls & Sutter",
                            "marf": {
                                "depth": 0,
                                "dynamic": [
                                    1,
                                    4,
                                ],
                                "melodic_offset": 2,
                                "modality": "Ionian",
                                "register": 7,
                                "rotation_offset": 0,
                                "same_q": True,
                                "span": 0,
                                "sway": 1,
                            },
                            "melodic_pouch": {
                                "seeds": {
                                    "complexity": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                    "depth": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                    "melodic": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                    "sway": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                    "tonality": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                },
                            },
                            "pc": 112,
                            "pouch": {
                                "complexity": {
                                    "DateUFO": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                },
                                "harmonic": {
                                    "datetime": None,
                                    "kind": "off",
                                    "phi": 0,
                                },
                                "melodic": {
                                    "datetime": None,
                                    "kind": "off",
                                    "phi": 0,
                                },
                                "tonality": {
                                    "DateHFO": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                },
                            },
                            "rarf": {
                                "base_of_rhythm": 2,
                                "computed_rhythm": {
                                    "coefficient": [
                                        1,
                                        1,
                                    ],
                                    "mode": {
                                        "density": 1,
                                        "even_odd": True,
                                        "kind": "SimpleEuc",
                                    },
                                    "time_scale": 1,
                                },
                                "n_bars": 2,
                            },
                            "rhythm_pouch": {
                                "seeds": {
                                    "mute": {
                                        "datetime": {
                                            "day": 17,
                                            "hour": 10,
                                            "minute": 44,
                                            "month": 3,
                                            "year": 3233,
                                        },
                                        "kind": "manual",
                                        "phi": 4,
                                    },
                                    "offset": {
                                        "datetime": {
                                            "day": 2,
                                            "hour": 13,
                                            "minute": 56,
                                            "month": 1,
                                            "year": 727,
                                        },
                                        "kind": "manual",
                                        "phi": 4,
                                    },
                                    "phase": {
                                        "datetime": {
                                            "day": 16,
                                            "hour": 22,
                                            "minute": 51,
                                            "month": 10,
                                            "year": 1242,
                                        },
                                        "kind": "manual",
                                        "phi": 4,
                                    },
                                    "recur": {
                                        "datetime": {
                                            "day": 19,
                                            "hour": 16,
                                            "minute": 45,
                                            "month": 4,
                                            "year": 596,
                                        },
                                        "kind": "manual",
                                        "phi": 4,
                                    },
                                },
                            },
                            "stem_kind": "Beat",
                            "track_scale": 1,
                        },
                        "cycle_start": 24,
                        "tacet": False,
                    },
                    {
                        "clip": {
                            "articulation": 0,
                            "harf": {
                                "harmonic_spread": 0,
                                "key_signature": 0,
                                "max_richness": 0,
                                "n_voices": 1,
                                "voice_type": 0,
                            },
                            "label": "Hat Rolls & Sutter",
                            "marf": {
                                "depth": 0,
                                "dynamic": [
                                    3,
                                ],
                                "melodic_offset": 2,
                                "modality": "Ionian",
                                "register": 7,
                                "rotation_offset": 0,
                                "same_q": True,
                                "span": 0,
                                "sway": 1,
                            },
                            "melodic_pouch": {
                                "seeds": {
                                    "complexity": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                    "depth": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                    "melodic": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                    "sway": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                    "tonality": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                },
                            },
                            "pc": 112,
                            "pouch": {
                                "complexity": {
                                    "DateUFO": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                },
                                "harmonic": {
                                    "datetime": None,
                                    "kind": "off",
                                    "phi": 0,
                                },
                                "melodic": {
                                    "datetime": None,
                                    "kind": "off",
                                    "phi": 0,
                                },
                                "tonality": {
                                    "DateHFO": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                },
                            },
                            "rarf": {
                                "base_of_rhythm": 2,
                                "computed_rhythm": {
                                    "coefficient": [
                                        1,
                                        1,
                                    ],
                                    "mode": {
                                        "events": 16,
                                        "hits": 16,
                                        "kind": "PositionedEuc",
                                        "offset": 0,
                                        "phase": 0,
                                    },
                                    "time_scale": 1,
                                },
                                "n_bars": 2,
                            },
                            "rhythm_pouch": {
                                "seeds": {
                                    "mute": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                    "offset": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                    "phase": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                    "recur": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                },
                            },
                            "stem_kind": "Beat",
                            "track_scale": 1,
                        },
                        "cycle_start": 32,
                        "tacet": False,
                    },
                    {
                        "clip": {
                            "articulation": 0,
                            "harf": {
                                "harmonic_spread": 0,
                                "key_signature": 0,
                                "max_richness": 0,
                                "n_voices": 1,
                                "voice_type": 0,
                            },
                            "label": "Hat Rolls & Sutter",
                            "marf": {
                                "depth": 0,
                                "dynamic": [
                                    3,
                                ],
                                "melodic_offset": 2,
                                "modality": "Ionian",
                                "register": 7,
                                "rotation_offset": 0,
                                "same_q": True,
                                "span": 0,
                                "sway": 1,
                            },
                            "melodic_pouch": {
                                "seeds": {
                                    "complexity": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                    "depth": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                    "melodic": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                    "sway": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                    "tonality": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                },
                            },
                            "pc": 112,
                            "pouch": {
                                "complexity": {
                                    "DateUFO": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                },
                                "harmonic": {
                                    "datetime": None,
                                    "kind": "off",
                                    "phi": 0,
                                },
                                "melodic": {
                                    "datetime": None,
                                    "kind": "off",
                                    "phi": 0,
                                },
                                "tonality": {
                                    "DateHFO": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                },
                            },
                            "rarf": {
                                "base_of_rhythm": 2,
                                "computed_rhythm": {
                                    "coefficient": [
                                        1,
                                        1,
                                    ],
                                    "mode": {
                                        "events": 16,
                                        "hits": 16,
                                        "kind": "PositionedEuc",
                                        "offset": 0,
                                        "phase": 0,
                                    },
                                    "time_scale": 1,
                                },
                                "n_bars": 2,
                            },
                            "rhythm_pouch": {
                                "seeds": {
                                    "mute": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                    "offset": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                    "phase": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                    "recur": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                },
                            },
                            "stem_kind": "Beat",
                            "track_scale": 1,
                        },
                        "cycle_start": 40,
                        "tacet": False,
                    },
                    {
                        "clip": {
                            "articulation": 0,
                            "harf": {
                                "harmonic_spread": 0,
                                "key_signature": 0,
                                "max_richness": 0,
                                "n_voices": 1,
                                "voice_type": 0,
                            },
                            "label": "Hat Rolls & Sutter",
                            "marf": {
                                "depth": 0,
                                "dynamic": [
                                    3,
                                ],
                                "melodic_offset": 2,
                                "modality": "Ionian",
                                "register": 7,
                                "rotation_offset": 0,
                                "same_q": True,
                                "span": 0,
                                "sway": 1,
                            },
                            "melodic_pouch": {
                                "seeds": {
                                    "complexity": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                    "depth": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                    "melodic": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                    "sway": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                    "tonality": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                },
                            },
                            "pc": 112,
                            "pouch": {
                                "complexity": {
                                    "DateUFO": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                },
                                "harmonic": {
                                    "datetime": None,
                                    "kind": "off",
                                    "phi": 0,
                                },
                                "melodic": {
                                    "datetime": None,
                                    "kind": "off",
                                    "phi": 0,
                                },
                                "tonality": {
                                    "DateHFO": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                },
                            },
                            "rarf": {
                                "base_of_rhythm": 2,
                                "computed_rhythm": {
                                    "coefficient": [
                                        1,
                                        1,
                                    ],
                                    "mode": {
                                        "events": 16,
                                        "hits": 16,
                                        "kind": "PositionedEuc",
                                        "offset": 0,
                                        "phase": 0,
                                    },
                                    "time_scale": 1,
                                },
                                "n_bars": 2,
                            },
                            "rhythm_pouch": {
                                "seeds": {
                                    "mute": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                    "offset": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                    "phase": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                    "recur": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                },
                            },
                            "stem_kind": "Beat",
                            "track_scale": 1,
                        },
                        "cycle_start": 48,
                        "tacet": False,
                    },
                    {
                        "clip": {
                            "articulation": 0,
                            "harf": {
                                "harmonic_spread": 0,
                                "key_signature": 0,
                                "max_richness": 0,
                                "n_voices": 1,
                                "voice_type": 0,
                            },
                            "label": "Hat Rolls & Sutter",
                            "marf": {
                                "depth": 0,
                                "dynamic": [
                                    1,
                                    4,
                                ],
                                "melodic_offset": 2,
                                "modality": "Ionian",
                                "register": 7,
                                "rotation_offset": 0,
                                "same_q": True,
                                "span": 0,
                                "sway": 1,
                            },
                            "melodic_pouch": {
                                "seeds": {
                                    "complexity": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                    "depth": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                    "melodic": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                    "sway": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                    "tonality": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                },
                            },
                            "pc": 112,
                            "pouch": {
                                "complexity": {
                                    "DateUFO": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                },
                                "harmonic": {
                                    "datetime": None,
                                    "kind": "off",
                                    "phi": 0,
                                },
                                "melodic": {
                                    "datetime": None,
                                    "kind": "off",
                                    "phi": 0,
                                },
                                "tonality": {
                                    "DateHFO": {
                                        "datetime": None,
                                        "kind": "off",
                                        "phi": 0,
                                    },
                                },
                            },
                            "rarf": {
                                "base_of_rhythm": 2,
                                "computed_rhythm": {
                                    "coefficient": [
                                        1,
                                        1,
                                    ],
                                    "mode": {
                                        "density": 1,
                                        "even_odd": True,
                                        "kind": "SimpleEuc",
                                    },
                                    "time_scale": 1,
                                },
                                "n_bars": 2,
                            },
                            "rhythm_pouch": {
                                "seeds": {
                                    "mute": {
                                        "datetime": {
                                            "day": 17,
                                            "hour": 10,
                                            "minute": 44,
                                            "month": 3,
                                            "year": 3233,
                                        },
                                        "kind": "manual",
                                        "phi": 4,
                                    },
                                    "offset": {
                                        "datetime": {
                                            "day": 2,
                                            "hour": 13,
                                            "minute": 56,
                                            "month": 1,
                                            "year": 727,
                                        },
                                        "kind": "manual",
                                        "phi": 4,
                                    },
                                    "phase": {
                                        "datetime": {
                                            "day": 16,
                                            "hour": 22,
                                            "minute": 51,
                                            "month": 10,
                                            "year": 1242,
                                        },
                                        "kind": "manual",
                                        "phi": 4,
                                    },
                                    "recur": {
                                        "datetime": {
                                            "day": 19,
                                            "hour": 16,
                                            "minute": 45,
                                            "month": 4,
                                            "year": 596,
                                        },
                                        "kind": "manual",
                                        "phi": 4,
                                    },
                                },
                            },
                            "stem_kind": "Beat",
                            "track_scale": 1,
                        },
                        "cycle_start": 56,
                        "tacet": False,
                    },
                ],
            ],
        }



def clip_cycles(clip: dict, time_signature: int) -> int:
    """Beat-cycles for placement (monictypes::conductor::clip_cycles)."""
    n_bars = int(clip.get("rarf", {}).get("n_bars", 0))
    return n_bars * int(time_signature)


def cohort_request_from_query(query: dict) -> dict:
    """TemplatedLoopScoreQuery timelines → TemplatedLoopScoreRequest."""
    score = query["score"]
    time_signature = int(score.get("time_signature", 4))
    timelines = query.get("timelines") or []
    tracks: list[list[dict]] = []
    for timeline in timelines:
        cycle_start = 0
        placements: list[dict] = []
        for spec in timeline:
            clip = spec["arf"]
            placements.append(
                {
                    "clip": clip,
                    "cycle_start": cycle_start,
                    "tacet": bool(spec.get("tacet", False)),
                }
            )
            cycle_start += clip_cycles(clip, time_signature)
        tracks.append(placements)
    return {"score": score, "tracks": tracks}
