"""POST /download/fetch for the visual compose MIDILite results."""

from __future__ import annotations

from pathlib import Path

from ..client import request, write_and_check
from .visual_compose import visual_compose

OUT_DIR = Path(__file__).resolve().parents[1] / "sandbox_out"


def download_fetch(results: list) -> None:
    """Convert MIDILite results with POST /download/fetch."""
    _status, body, ctype = request(
        "POST",
        "/download/fetch",
        body={"items": results},
    )
    if len(results) == 1:
        write_and_check(
            OUT_DIR / "visual_compose.mid",
            body,
            b"MThd",
            f"download midi ({ctype})",
        )
        return
    write_and_check(
        OUT_DIR / "visual_compose.zip",
        body,
        b"PK",
        f"download zip ({ctype})",
    )


if __name__ == "__main__":
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    download_fetch(visual_compose())
