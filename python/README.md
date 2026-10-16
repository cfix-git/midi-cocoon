# Python demo

Demo client for the Monic Theory sandbox API. Requires Python 3.11 or newer. No third-party packages.

## Configure

In `midi_cocoon/client.py`, set `ORG` and `BEARER`.

The base URL is `https://dev.monictheory.com/<ORG>`. Product calls send `Authorization: Bearer <BEARER>`. The `GET /health` call does not send authorization.

## Layout

`client.py` and `__main__.py` sit beside `objects`, `shared`, `tier1`, and `tier2`. `objects/dynamic.py` and `objects/__init__.py` are written by the monictypes `export-clients` binary. The demo does not call `dynamic`.

## Run

From this directory:

```bash
python -m midi_cocoon
```

The run stops on the first non-2xx response, including 429. It will print the status plus a short snippet of the response body.

Run one example:

```bash
python -m midi_cocoon.tier1.visual_compose
python -m midi_cocoon.tier2.preset_genres
python -m midi_cocoon.tier2.trap_cohort
python -m midi_cocoon.tier2.tuplet_quartet
```

## Output

Files are written under `midi_cocoon/sandbox_out`, which is ignored by git.

1. `GET /health`
2. For each preset genre, the client will fetch the template, instantiate it, run the cohort, and download the sample-pack zip file.
3. `POST /api/visual_compose`, then download the MIDI file.
4. `POST /api/sample-pack/cohort` with the bundled example, then download that sample-pack zip file.
5. Build the tuplet quartet custom genre locally (duple, triplet, quintuplet, and septuplet tracks), instantiate it, run the cohort, and download the sample-pack zip file.

Preset genre files land in `sandbox_out/preset-genres/`. The visual compose MIDI file is `sandbox_out/visual_compose.mid`. The example sample pack is `sandbox_out/sample_pack.zip`. The tuplet quartet files land in `sandbox_out/custom-genres/`.
