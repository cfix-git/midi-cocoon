"""Visual compose request, POST /api/visual_compose, and POST /download/fetch."""

from __future__ import annotations

import json
from pathlib import Path

from ..client import die, request, write_and_check

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


OUT_DIR = Path(__file__).resolve().parents[1] / "sandbox_out"


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


if __name__ == "__main__":
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    fetch_visual_midi(visual_compose())
