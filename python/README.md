# Python demo

Demo client for the Monic Theory sandbox API. Requires Python 3.11 or newer. No third-party packages.

## Configure

The org and bearer are chosen in this order: `--org` and `--bearer`, then `ORG` and `BEARER` in `.env` beside this README, then the placeholders in `midi_cocoon/client.py`. A missing `.env` is normal. A blank value is skipped. This client does not read the TypeScript `.env`.

```bash
python -m midi_cocoon --org YOUR_ORG --bearer YOUR_TOKEN
```

```
ORG=YOUR_ORG
BEARER=YOUR_TOKEN
```

The base URL is `https://dev.monictheory.com/<ORG>`. Product calls send `Authorization: Bearer <BEARER>`. The `GET /health` call does not send authorization.

## Layout

`client.py` and `__main__.py` sit beside `objects`, `shared`, `tier1`, and `tier2`. `objects/dynamic.py` and `objects/__init__.py` are written by the monictypes `export-clients` binary. The demo does not call `dynamic`.

## Run

From this directory:

```bash
python -m midi_cocoon
```

The entry shows one menu. Run All is first and has no tier. Tier 1 and Tier 2 are headers and are not choices. The choices are Visual Compose MIDILite, Visual Compose MIDI, Simple Compose MIDILite, Simple Compose MIDI, Custom Genre MIDI, N-let Quartet MIDI Download, and All Genres MIDI. Run All calls health, then each of those choices in that order.

The run stops on the first non-2xx response. A 429 says the limit refills each minute.

Run one example:

```bash
python -m midi_cocoon.tier1.visual_compose
python -m midi_cocoon.tier1.download_fetch
python -m midi_cocoon.tier1.simple_compose
python -m midi_cocoon.tier1.simple_compose_download
python -m midi_cocoon.tier2.preset_genres
python -m midi_cocoon.tier2.trap_cohort
python -m midi_cocoon.tier2.tuplet_quartet
```

## Output

Files are written under `midi_cocoon/sandbox_out`, which is ignored by git.

1. `GET /health`
2. `POST /api/visual_compose` and save the MIDILite JSON, then `POST /download/fetch`.
3. `POST /api/simple_compose` and save the MIDILite JSON, then `POST /download/fetch`.
4. `POST /api/sample-pack/cohort` with the bundled example, then download that sample-pack zip file.
5. Build the tuplet quartet custom genre locally (duple, triplet, quintuplet, and septuplet tracks), instantiate it, run the cohort, and download the sample-pack zip file.
6. For each preset genre, the client will fetch the template, instantiate it, run the cohort, and download the sample-pack zip file.

Preset genre files land in `sandbox_out/preset-genres/`. The visual compose MIDILite file is `sandbox_out/visual_compose.out.json`. The simple compose MIDILite file is `sandbox_out/simple_compose.out.json`. The example sample pack is `sandbox_out/sample_pack.zip`. The tuplet quartet files land in `sandbox_out/custom-genres/`.

`python -m midi_cocoon.tier1.download_fetch` calls visual compose, then `POST /download/fetch`. One result is saved as `sandbox_out/visual_compose.mid`. More than one result is saved as `sandbox_out/visual_compose.zip`. `python -m midi_cocoon.tier1.simple_compose_download` does the same for simple compose, as `sandbox_out/simple_compose.mid` or `sandbox_out/simple_compose.zip`.
