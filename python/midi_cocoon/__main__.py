"""For Developers with a valid org and API key."""

from __future__ import annotations

from collections.abc import Callable
from pathlib import Path

from .client import die, request
from .tier1.download_fetch import download_fetch
from .tier1.simple_compose import simple_compose
from .tier1.simple_compose_download import simple_compose_download
from .tier1.visual_compose import visual_compose
from .tier2.preset_genres import fetch_and_instantiate_genres
from .tier2.trap_cohort import fetch_sample_pack, sample_pack_cohort
from .tier2.tuplet_quartet import run_tuplet_quartet

HERE = Path(__file__).resolve().parent
OUT_DIR = HERE / "sandbox_out"


def health() -> None:
    """GET /health with no bearer key."""
    status, _raw, _ctype = request("GET", "/health", auth=False)
    if status != 200:
        die(f"Health check failed with HTTP {status}.")
    print("health response")


def trap_cohort() -> None:
    """POST the Trap cohort and download its sample pack."""
    fetch_sample_pack(sample_pack_cohort())


def download_example() -> None:
    """Fetch visual compose MIDILite, then POST /download/fetch."""
    download_fetch(visual_compose())


def simple_midi() -> None:
    """Fetch simple compose MIDILite, then POST /download/fetch."""
    simple_compose_download(simple_compose())


def tuplet_quartet() -> None:
    """Build the tuplet quartet custom genre and download its sample pack."""
    run_tuplet_quartet(OUT_DIR)


def run_all() -> None:
    """Call health, then every example."""
    health()
    for row in MENU:
        if not isinstance(row, tuple) or row[0] == "Run All":
            continue
        row[1]()
    print("done")


MENU: list[str | tuple[str, Callable[[], None]]] = [
    ("Run All", run_all),
    "Tier 1",
    ("Visual Compose MIDILite", visual_compose),
    ("Visual Compose MIDI", download_example),
    ("Simple Compose MIDILite", simple_compose),
    ("Simple Compose MIDI", simple_midi),
    "Tier 2",
    ("Custom Genre MIDI", trap_cohort),
    ("N-let Quartet MIDI Download", tuplet_quartet),
    ("All Genres MIDI", fetch_and_instantiate_genres),
]


def choose(title: str, rows: list[str | tuple[str, Callable[[], None]]]) -> int:
    """Read a menu number. Headers are not choices. A blank or unknown answer prints the menu again."""
    choices = [row for row in rows if isinstance(row, tuple)]
    while True:
        print(title)
        number = 1
        for row in rows:
            if isinstance(row, str):
                print(row)
                continue
            print(f"{number}. {row[0]}")
            number += 1
        raw = input("> ").strip()
        if raw.isdigit() and 1 <= int(raw) <= len(choices):
            return int(raw)


def run_example() -> None:
    """Prompt for the full run or one example."""
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    print("𝄞 Welcome to the Monic Theory Developer API 𝄢")
    # Contact the administrator for rate limits.
    choice = choose("How would you like to make more music?", MENU)
    _label, step = [row for row in MENU if isinstance(row, tuple)][choice - 1]
    step()


if __name__ == "__main__":
    try:
        run_example()
    except (KeyboardInterrupt, EOFError):
        print("Bye bye!")
        raise SystemExit(130) from None
