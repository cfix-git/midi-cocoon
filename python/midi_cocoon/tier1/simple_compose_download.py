"""POST /download/fetch for the simple compose MIDILite results."""

from __future__ import annotations

from pathlib import Path

from ..client import request, write_and_check
from .simple_compose import simple_compose

OUT_DIR = Path(__file__).resolve().parents[1] / "sandbox_out"


def simple_compose_download(results: list) -> None:
    """Convert simple compose MIDILite results with POST /download/fetch."""
    _status, body, ctype = request(
        "POST",
        "/download/fetch",
        body={"items": results},
    )
    if len(results) == 1:
        write_and_check(
            OUT_DIR / "simple_compose.mid",
            body,
            b"MThd",
            f"download midi ({ctype})",
        )
        return
    write_and_check(
        OUT_DIR / "simple_compose.zip",
        body,
        b"PK",
        f"download zip ({ctype})",
    )


if __name__ == "__main__":
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    simple_compose_download(simple_compose())
