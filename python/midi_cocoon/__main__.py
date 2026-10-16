"""For Developers with a valid org and API key."""

from __future__ import annotations

from pathlib import Path

from .client import die, request
from .tier1.visual_compose import fetch_visual_midi, visual_compose
from .tier2.preset_genres import fetch_and_instantiate_genres
from .tier2.trap_cohort import fetch_sample_pack, sample_pack_cohort
from .tier2.tuplet_quartet import run_tuplet_quartet

HERE = Path(__file__).resolve().parent
OUT_DIR = HERE / "sandbox_out"


def health() -> None:
    """GET /health with no bearer key."""
    status, _raw, _ctype = request("GET", "/health", auth=False)
    if status != 200:
        die(f"health -> HTTP {status}")
    print(f"ok health ({status})")


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
    # Custom genre: duple, triplet, quintuplet, and septuplet.
    run_tuplet_quartet(OUT_DIR)
    print("done")


if __name__ == "__main__":
    run_example()
