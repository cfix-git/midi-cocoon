"""Custom genre example: four tracks of complete Positioned Euc tuplets.

Duple E(2,2) and quintuplet E(5,5) are one bar. Triplet E(3,3) and septuplet E(7,7) are two bars.
Hits equal events, so every note in a track has the same duration and the rhythm fills its clip.
Phase and offset are 0. The coefficient is 1/1. Device lists are empty, so the rhythm seeds stay
off and each tuplet plays as written.

run_example in __main__.py calls run_tuplet_quartet. Set ORG and BEARER in client.py, then
python -m midi_cocoon. Files land in midi_cocoon/sandbox_out/custom-genres/.
Be wary of rate limits when running batch production examples! 
"""

from __future__ import annotations

import json
from pathlib import Path

from .bodies import cohort_request_from_query
from .client import die, request, write_and_check, write_json

# One track. events is both the tuple space and the note count. scale 0 is one bar; scale 1 is two bars.
# label: clip label.
# register: 1-7. Registers not listed here are left empty on the template.
# events: tuple space. Hits are set equal to this, so the tuplet is complete.
# scale: clip scale and rhythm time scale together. 0 = 1 bar, 1 = 2 bars.

# Registers 1, 3, 5, and 7. The rhythm time scale matches the clip scale on every track.
TUPLETS = [
    {"label": "Duple", "register": 1, "events": 2, "scale": 0},
    {"label": "Triplet", "register": 3, "events": 3, "scale": 1},
    {"label": "Quintuplet", "register": 5, "events": 5, "scale": 0},
    {"label": "Septuplet", "register": 7, "events": 7, "scale": 1},
]

REGISTER_COUNT = 7


def _tuplet_trope(spec: dict) -> dict:
    """One trope. Rhythm kind is Positioned Euc: E(events, events), phase 0, offset 0, coefficient 1/1.

    The computed rhythm repeats those values so the drawn clip matches the basis.
    Empty device lists leave the rhythm unchanged.
    """
    label = spec["label"]
    register = spec["register"]
    events = spec["events"]
    scale = spec["scale"]
    hits = events
    return {
        "label": label,
        "setting": {
            "track_scale": scale,
            "articulation": 1,
            "stem_kind": "Instrumental",
            "pc": 38,
        },
        "rhythm": {
            "PositionedEuc": {
                "seq": {"hits": hits, "events": events, "phase": 0, "offset": 0},
                "time_scale": scale,
                "coefficient": [1, 1],
            },
        },
        "arfs": {
            "harmonic": {
                "harmonic_spread": 1,
                "key_signature": 0,
                "max_richness": 3,
                "n_voices": 1,
                "voice_type": 0,
            },
            "melodic": {
                "depth": 0,
                "dynamic": [3],
                "melodic_offset": 2,
                "modality": "Ionian",
                "register": register,
                "rotation_offset": 0,
                "same_q": True,
                "span": 7 - register,
                "sway": 1,
            },
            "rhythmic": {
                "base_of_rhythm": 2,
                "computed_rhythm": {
                    "coefficient": [1, 1],
                    "mode": {
                        "kind": "PositionedEuc",
                        "events": events,
                        "hits": hits,
                        "offset": 0,
                        "phase": 0,
                    },
                    "time_scale": scale,
                },
                "n_bars": 2**scale,
            },
        },
        "devices": {"harmonic": [], "dynamic": [], "melodic": [], "rhythmic": []},
    }


def tuplet_quartet_template() -> dict:
    """Sample-pack template sent to POST /api/sample-pack/instantiate.

    Registers 2, 4, and 6 are null. Each filled register is a Loop of one trope.
    The score profile matches the bundled example: 144 bpm, common time, C major, Ionian.
    """
    by_register = {spec["register"]: spec for spec in TUPLETS}
    registers: list[dict | None] = []
    for register in range(1, REGISTER_COUNT + 1):
        spec = by_register.get(register)
        if spec is None:
            registers.append(None)
        else:
            registers.append(
                {
                    "register": register,
                    "form_patterns": ["Loop"],
                    "tropes": [_tuplet_trope(spec)],
                }
            )
    return {
        "description": (
            "Four complete Positioned Euc tuplets: duple, triplet, quintuplet, and septuplet."
        ),
        "score_profile": {
            "label": "Tuplet Quartet",
            "bpm": 144,
            "time_scale": 4,
            "time_signature": 4,
            "key_signature": 0,
            "in_major": True,
            "modality": "Ionian",
            "max_richness": 3,
        },
        "registers": registers,
    }


def run_tuplet_quartet(out_dir: Path) -> None:
    """Write the template, instantiate it, render the cohort, and download the sample-pack zip.

    Writes tuplet-quartet.json, tuplet-quartet.instantiated.json, and tuplet-quartet.sample-pack.zip
    under out_dir/custom-genres/.
    """
    genres_dir = out_dir / "custom-genres"
    genres_dir.mkdir(parents=True, exist_ok=True)

    # Built locally. This example does not fetch a preset from GET /api/genre.
    template = tuplet_quartet_template()
    write_json(
        genres_dir / "tuplet-quartet.json",
        template,
        "custom genre template tuplet-quartet",
    )

    # Draw the clips. Rhythm seeds come back off, so the tuplets stay as authored.
    _status, raw, _ctype = request(
        "POST", "/api/sample-pack/instantiate", body=template
    )
    query = json.loads(raw.decode("utf-8"))
    if not isinstance(query, dict) or not query:
        die("instantiate tuplet-quartet: empty query")
    write_json(
        genres_dir / "tuplet-quartet.instantiated.json",
        query,
        "custom genre instantiated tuplet-quartet",
    )

    cohort_body = cohort_request_from_query(query)
    if not cohort_body["tracks"]:
        die("tuplet-quartet: instantiated query has no timelines")
    # Render one result per track.
    _status, raw, _ctype = request("POST", "/api/sample-pack/cohort", body=cohort_body)
    cohort = json.loads(raw.decode("utf-8"))
    tracks = cohort.get("results")
    if not isinstance(tracks, list) or not tracks:
        die("tuplet-quartet: empty cohort results")
    print(f"ok custom genre cohort tuplet-quartet ({len(tracks)} track(s))")

    # Download the rendered pack.
    _status, zip_bytes, ctype = request(
        "POST",
        "/download/sample_pack/fetch",
        body={"pack": {"score": cohort_body["score"], "tracks": tracks}},
    )
    write_and_check(
        genres_dir / "tuplet-quartet.sample-pack.zip",
        zip_bytes,
        b"PK",
        f"custom genre pack zip tuplet-quartet ({ctype})",
    )
