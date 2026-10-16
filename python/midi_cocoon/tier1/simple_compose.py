"""Simple compose request and POST /api/simple_compose."""

from __future__ import annotations

import json
from datetime import datetime, timezone
from pathlib import Path

from ..client import die, request, write_json

OUT_DIR = Path(__file__).resolve().parents[1] / "sandbox_out"


def _days_in_month(year: int, month: int) -> int:
    if month == 2:
        leap = year % 400 == 0 or (year % 4 == 0 and year % 100 != 0)
        return 29 if leap else 28
    if month in (4, 6, 9, 11):
        return 30
    return 31


def _shift_months(dt: dict, months: int) -> dict:
    total = dt["year"] * 12 + (dt["month"] - 1) + months
    year = total // 12
    month = total % 12 + 1
    return {
        "year": year,
        "month": month,
        "day": min(dt["day"], _days_in_month(year, month)),
        "hour": dt["hour"],
        "minute": dt["minute"],
    }


def _manual(dt: dict) -> dict:
    return {"kind": "manual", "phi": 4, "datetime": dt}


def seed_pouch() -> dict:
    """Match SeedPouch::default from the current UTC minute."""
    now = datetime.now(timezone.utc)
    base = {
        "year": now.year,
        "month": now.month,
        "day": now.day,
        "hour": now.hour,
        "minute": now.minute,
    }
    return {
        "harmonic": _manual(_shift_months(base, 2000 * 12 + 3)),
        "melodic": _manual(_shift_months(base, 1000 * 12 - 3)),
        "rhythm": {"kind": "off", "phi": 0, "datetime": None},
        "tonality": {"DateHFO": _manual(_shift_months(base, -1000 * 12))},
        "complexity": {"DateHFO": _manual(base)},
    }


class SimpleCompositionRequest:
    """Simple compose request."""

    @staticmethod
    def example() -> dict:
        """Return the simple compose body."""
        return {
            "pagination": {
                "limit": 6,
                "offset": 0,
                "pagenum": 1,
            },
            "query": {
                "time_signature": 4,
                "scale": 3,
                "bpm": 112,
                "density": 2,
                "even_odd": True,
                "harmonic_spread": 3,
                "harmonic_offset": 0,
                "max_richness": 3,
                "register": 4,
                "n_voices": 3,
                "voice_type": 0,
                "key_signature": 3,
                "in_major": True,
                "seed_pouch": seed_pouch(),
            },
        }


def simple_compose() -> list:
    """POST the simple compose example and return its results."""
    _status, raw, _ctype = request(
        "POST", "/api/simple_compose", body=SimpleCompositionRequest.example()
    )
    compose = json.loads(raw.decode("utf-8"))
    results = compose.get("results")
    if not isinstance(results, list) or not results:
        die("Simple compose returned no results.")
    print(f"ok simple_compose ({len(results)} result(s))")
    write_json(OUT_DIR / "simple_compose.out.json", compose)
    return results


if __name__ == "__main__":
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    simple_compose()
