"""For Developers with a valid org and API key."""

from __future__ import annotations

from collections.abc import Callable
from pathlib import Path

from .client import die, request
from .tier1.download_fetch import download_fetch
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


def tuplet_quartet() -> None:
    """Build the tuplet quartet custom genre and download its sample pack."""
    run_tuplet_quartet(OUT_DIR)


RUN_ALL: list[Callable[[], None]] = [
    fetch_and_instantiate_genres,
    visual_compose,
    trap_cohort,
    tuplet_quartet,
]

EXAMPLES: list[tuple[str, Callable[[], None]]] = [
    ("Visual Compose MIDILite", visual_compose),
    ("Visual Compose MIDI", download_example),
    ("All Genres MIDI", fetch_and_instantiate_genres),
    ("Custom Genre MIDI", trap_cohort),
    ("N-let Quartet MIDI Download", tuplet_quartet),
]


def choose(title: str, labels: list[str]) -> int:
    """Read a menu number. A blank or unknown answer prints the menu again."""
    while True:
        print(title)
        for index, label in enumerate(labels, start=1):
            print(f"{index}. {label}")
        try:
            raw = input("> ").strip()
        except EOFError:
            raise SystemExit(1) from None
        if raw.isdigit() and 1 <= int(raw) <= len(labels):
            return int(raw)


def run_example() -> None:
    """Prompt for the full run or one example."""
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    print("𝄞 Welcome to the Monic Theory Developer API 𝄢")
    # Contact the administrator for rate limits.
    choice = choose(
        "How would you like to make more music?",
        ["Run All", *[label for label, _fn in EXAMPLES]],
    )
    if choice == 1:
        health()
        for step in RUN_ALL:
            step()
        print("done")
        return
    _label, step = EXAMPLES[choice - 2]
    step()


if __name__ == "__main__":
    try:
        run_example()
    except KeyboardInterrupt:
        print("Bye bye!")
        raise SystemExit(130) from None
    except SystemExit:
        print("Bye bye!")
        raise
    else:
        print("Bye bye!")
