# Changelog

Python and TypeScript versions move together. An entry names one package only when that package changes alone.

## [1.0.3] - 2026-10-15

### Changed

- The interactive menu asks "How would you like to make more music?" and lists Run All with each example on one level.
- A catchable exit from the interactive entry prints `Bye bye!`.

## [1.0.2] - 2026-10-15

### Changed

- Visual compose saves the MIDILite JSON. `POST /download/fetch` is a separate example. One result is a MIDI file. More than one result is a zip.

## [1.0.1] - 2026-10-15

### Fixed

- Each client takes `--org` and `--bearer`, then `ORG` and `BEARER` from its own `.env`, then the placeholders in that client.

## [1.0.0] - 2026-10-15

### Added

- Python and TypeScript demos for the Monic Theory sandbox API.
- `GET /health`, the preset-genre tour, visual compose, the Trap sample-pack cohort, and the tuplet quartet custom genre.
- Generated `dynamic` object modules in `python/midi_cocoon/objects` and `typescript/src/objects`.
