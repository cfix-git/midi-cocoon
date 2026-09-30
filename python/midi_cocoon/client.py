"""Demo HTTP client for the Monic Theory API."""

from __future__ import annotations

import json
import ssl
import sys
import urllib.error
import urllib.request
from pathlib import Path

ORG = "YOUR_ORG_HERE"
BASE = f"https://dev.monictheory.com/{ORG}"
BEARER = "api_token_here"
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
        err_body = e.read()
        snippet = err_body[:500].decode("utf-8", errors="replace")
        die(f"{method} {path} -> HTTP {e.code}\n{snippet}")
    except urllib.error.URLError as e:
        die(f"{method} {path} failed: {e}")


def write_and_check(path: Path, data: bytes, magic: bytes, label: str) -> None:
    """Write bytes and require a non-empty file with the given header."""
    path.write_bytes(data)
    size = path.stat().st_size
    if size == 0:
        die(f"{label}: empty file {path}")
    if not data.startswith(magic):
        die(f"{label}: bad magic at {path} (got {data[:8]!r})")
    print(f"ok {label}: {path} ({size} bytes)")


def write_json(path: Path, obj: object, label: str) -> None:
    """Write JSON and require a non-empty file."""
    text = json.dumps(obj, indent=2) + "\n"
    path.write_text(text, encoding="utf-8")
    if path.stat().st_size == 0:
        die(f"{label}: empty file {path}")
    print(f"ok {label}: {path}")
