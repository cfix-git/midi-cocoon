"""Preset-genre tour: fetch, instantiate, cohort, and download each pack."""

from __future__ import annotations

import hashlib
import json
from pathlib import Path

from ..client import die, request, write_and_check, write_json
from ..shared.cohort import cohort_request_from_query

OUT_DIR = Path(__file__).resolve().parents[1] / "sandbox_out"
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


if __name__ == "__main__":
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    fetch_and_instantiate_genres()
