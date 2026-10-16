"""Shared cohort placement helpers."""

from __future__ import annotations

def clip_cycles(clip: dict, time_signature: int) -> int:
    """Beat-cycles for placement (monictypes::conductor::clip_cycles)."""
    n_bars = int(clip.get("rarf", {}).get("n_bars", 0))
    return n_bars * int(time_signature)


def cohort_request_from_query(query: dict) -> dict:
    """TemplatedLoopScoreQuery timelines → TemplatedLoopScoreRequest."""
    score = query["score"]
    time_signature = int(score.get("time_signature", 4))
    timelines = query.get("timelines") or []
    tracks: list[list[dict]] = []
    for timeline in timelines:
        cycle_start = 0
        placements: list[dict] = []
        for spec in timeline:
            clip = spec["arf"]
            placements.append(
                {
                    "clip": clip,
                    "cycle_start": cycle_start,
                    "tacet": bool(spec.get("tacet", False)),
                }
            )
            cycle_start += clip_cycles(clip, time_signature)
        tracks.append(placements)
    return {"score": score, "tracks": tracks}
