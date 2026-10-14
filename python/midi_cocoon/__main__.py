"""For Developers with a valid org and API key."""

from __future__ import annotations

import hashlib
import json
from pathlib import Path

from .bodies import (
    TemplatedLoopScoreRequest,
    VisualCompositionRequest,
    cohort_request_from_query,
)
from .client import die, request, write_and_check, write_json
from .tuplet_quartet import run_tuplet_quartet

HERE = Path(__file__).resolve().parent
OUT_DIR = HERE / "sandbox_out"
GENRES_DIR = OUT_DIR / "preset-genres"

# SamplePackId::ALL preset_genre_id — monictypes/src/sample_pack_catalog/id.rs
PRESET_GENRE_IDS = [
    "techno",
    "trance",
    "house",
    "downtempo",
    "light_air",
    "dark_mood",
    "bedtime_drones",
    "open_zones",
    "trap",
    "boom_bap",
    "rap",
    "drill",
]


def content_hash(obj: object) -> str:
    """Filename-safe digest of JSON content (order-stable)."""
    canonical = json.dumps(obj, sort_keys=True, separators=(",", ":")).encode("utf-8")
    return hashlib.sha256(canonical).hexdigest()[:16]


def health() -> None:
    """GET /health with no bearer key."""
    status, _raw, _ctype = request("GET", "/health", auth=False)
    if status != 200:
        die(f"health -> HTTP {status}")
    print(f"ok health ({status})")


def fetch_and_instantiate_genres() -> None:
    """Fetch each preset genre, instantiate it, run cohort, and download the pack."""
    GENRES_DIR.mkdir(parents=True, exist_ok=True)
    for preset_genre_id in PRESET_GENRE_IDS:
        _status, raw, _ctype = request("GET", f"/api/genre/{preset_genre_id}")
        template = json.loads(raw.decode("utf-8"))
        if not isinstance(template, dict) or not template:
            die(f"genre {preset_genre_id}: empty template")
        write_json(
            GENRES_DIR / f"{preset_genre_id}.json",
            template,
            f"genre template {preset_genre_id}",
        )

        _status, raw, _ctype = request(
            "POST", "/api/sample-pack/instantiate", body=template
        )
        query = json.loads(raw.decode("utf-8"))
        if not isinstance(query, dict) or not query:
            die(f"instantiate {preset_genre_id}: empty query")
        digest = content_hash(query)
        write_json(
            GENRES_DIR / f"{preset_genre_id}.instantiated.{digest}.json",
            query,
            f"genre instantiated {preset_genre_id}",
        )

        cohort_body = cohort_request_from_query(query)
        if not cohort_body["tracks"]:
            die(f"genre {preset_genre_id}: instantiated query has no timelines")
        _status, raw, _ctype = request(
            "POST", "/api/sample-pack/cohort", body=cohort_body
        )
        cohort = json.loads(raw.decode("utf-8"))
        tracks = cohort.get("results")
        if not isinstance(tracks, list) or not tracks:
            die(f"genre {preset_genre_id}: empty cohort results")
        print(f"ok genre cohort {preset_genre_id} ({len(tracks)} track(s))")

        pack = {"score": cohort_body["score"], "tracks": tracks}
        _status, zip_bytes, ctype = request(
            "POST",
            "/download/sample_pack/fetch",
            body={"pack": pack},
        )
        write_and_check(
            GENRES_DIR / f"{preset_genre_id}.sample-pack.{digest}.zip",
            zip_bytes,
            b"PK",
            f"genre pack zip {preset_genre_id} ({ctype})",
        )


def visual_compose() -> list:
    """POST the visual compose example and return its results."""
    _status, raw, _ctype = request(
        "POST", "/api/visual_compose", body=VisualCompositionRequest.example()
    )
    compose = json.loads(raw.decode("utf-8"))
    results = compose.get("results")
    if not isinstance(results, list) or not results:
        die("visual_compose: empty results")
    print(f"ok visual_compose ({len(results)} result(s))")
    return results


def fetch_visual_midi(results: list) -> None:
    """Download the visual compose results as MIDI."""
    _status, mid_bytes, ctype = request(
        "POST",
        "/download/fetch",
        body={"items": results},
    )
    write_and_check(
        OUT_DIR / "visual_compose.mid",
        mid_bytes,
        b"MThd",
        f"fetch mid ({ctype})",
    )


def sample_pack_cohort() -> list:
    """POST the sample-pack cohort example and return its tracks."""
    _status, raw, _ctype = request(
        "POST",
        "/api/sample-pack/cohort",
        body=TemplatedLoopScoreRequest.example(),
    )
    cohort = json.loads(raw.decode("utf-8"))
    tracks = cohort.get("results")
    if not isinstance(tracks, list) or not tracks:
        die("sample-pack/cohort: empty results")
    print(f"ok sample-pack/cohort ({len(tracks)} track(s))")
    return tracks


def fetch_sample_pack(tracks: list) -> None:
    """Download the sample-pack cohort as a zip."""
    pack = {
        "score": TemplatedLoopScoreRequest.example()["score"],
        "tracks": tracks,
    }
    _status, zip_bytes, ctype = request(
        "POST",
        "/download/sample_pack/fetch",
        body={"pack": pack},
    )
    write_and_check(
        OUT_DIR / "sample_pack.zip",
        zip_bytes,
        b"PK",
        f"fetch zip ({ctype})",
    )


def run_example() -> None:
    """Run the demo steps, ending with the tuplet quartet custom genre."""
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    print("𝄞 Welcome to the Monic Theory Developer API 𝄢")
    # Contact the administrator for rate limits.
    health()
    fetch_and_instantiate_genres()
    visual_results = visual_compose()
    fetch_visual_midi(visual_results)
    cohort_tracks = sample_pack_cohort()
    fetch_sample_pack(cohort_tracks)
    # Custom genre: duple, triplet, quintuplet, and septuplet. See tuplet_quartet.py.
    run_tuplet_quartet(OUT_DIR)
    print("done")


if __name__ == "__main__":
    run_example()
