"""Demo HTTP client for the Monic Theory API."""

from __future__ import annotations

import json
import ssl
import sys
import urllib.error
import urllib.request
from pathlib import Path

_ENV_PATH = Path(__file__).resolve().parents[1] / ".env"
_ORG_FALLBACK = "YOUR_ORG_HERE"
_BEARER_FALLBACK = "api_token_here"


def _flag(name: str) -> str | None:
    """Return one --name value. An absent flag is None. A blank flag is empty."""
    prefix = f"--{name}"
    for index, arg in enumerate(sys.argv):
        if arg == prefix:
            if index + 1 < len(sys.argv) and not sys.argv[index + 1].startswith("--"):
                return sys.argv[index + 1]
            return ""
        if arg.startswith(prefix + "="):
            return arg[len(prefix) + 1 :]
    return None


def _dotenv(path: Path) -> dict[str, str]:
    """Read ORG and BEARER from this client's .env. A missing file is empty."""
    if not path.is_file():
        return {}
    found: dict[str, str] = {}
    for raw in path.read_text(encoding="utf-8").splitlines():
        line = raw.strip()
        if not line or line.startswith("#") or "=" not in line:
            continue
        key, value = line.split("=", 1)
        key = key.strip()
        value = value.strip()
        if len(value) >= 2 and value[0] == value[-1] and value[0] in "\"'":
            value = value[1:-1]
        if key in {"ORG", "BEARER"}:
            found[key] = value
    return found


def _pick(flag_name: str, env: dict[str, str], key: str, fallback: str) -> str:
    """CLI flag, then this client's .env, then the hardcoded fallback."""
    flagged = _flag(flag_name)
    if flagged:
        return flagged
    from_file = env.get(key, "")
    if from_file:
        return from_file
    return fallback


_ENV = _dotenv(_ENV_PATH)
ORG = _pick("org", _ENV, "ORG", _ORG_FALLBACK)
BEARER = _pick("bearer", _ENV, "BEARER", _BEARER_FALLBACK)
BASE = f"https://dev.monictheory.com/{ORG}"
SSL_CTX = ssl._create_unverified_context()


def die(msg: str, code: int = 1) -> None:
    """Print a message and exit the process."""
    print(msg, file=sys.stderr)
    raise SystemExit(code)


def request(
    method: str,
    path: str,
    *,
    body: dict | None = None,
    auth: bool = True,
) -> tuple[int, bytes, str]:
    """Send one JSON request and return status, body, and content type."""
    url = f"{BASE}{path}"
    data = None if body is None else json.dumps(body).encode("utf-8")
    headers: dict[str, str] = {}
    if body is not None:
        headers["Content-Type"] = "application/json"
    if auth:
        headers["Authorization"] = f"Bearer {BEARER}"
    req = urllib.request.Request(url, data=data, headers=headers, method=method)
    try:
        with urllib.request.urlopen(req, context=SSL_CTX) as resp:
            raw = resp.read()
            ctype = resp.headers.get("Content-Type", "")
            return resp.status, raw, ctype
    except urllib.error.HTTPError as e:
        if e.code == 429:
            die(
                f"{method} {path} was rate limited. "
                "The limit refills each minute. Wait a minute and run the example again."
            )
        die(f"{method} {path} failed with HTTP {e.code}.")
    except urllib.error.URLError:
        die(f"Could not reach {path}.")


def write_and_check(path: Path, data: bytes, header: bytes, label: str) -> None:
    """Write bytes and require a non-empty file with the given header."""
    path.write_bytes(data)
    size = path.stat().st_size
    if size == 0:
        die(f"Could not save {path}. The response was empty.")
    if not data.startswith(header):
        if header == b"MThd":
            die(f"Could not save {path}. The response was not a MIDI file.")
        die(f"Could not save {path}. The response was not a zip file.")
    print(f"ok {label}: {path} ({size} bytes)")


def write_json(path: Path, obj: object) -> None:
    """Write JSON and require a non-empty file."""
    text = json.dumps(obj, indent=2) + "\n"
    path.write_text(text, encoding="utf-8")
    if path.stat().st_size == 0:
        die(f"Could not save {path}. The response was empty.")
    print(f"Response written to: {path}")
