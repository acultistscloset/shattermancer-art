# Phase 0 — Unresolved Items

Every item states why repository inspection cannot settle it and what runtime
check would.

## Blocking

### P0-U001 — `showSpellbook` is defined but never called
Repository inspection finds the function and zero call sites. Static analysis
cannot prove a surface is unreachable: it may be invoked dynamically, bound by
string, or triggered from a path not expressed as a direct call.
**Affects:** SCR-SPELLBOOK.
**Runtime check:** exercise every menu and in-run path and record whether a
spellbook surface ever appears. If it does, capture how it was reached.
**Blocking:** yes — a v2 inventory cannot state whether this screen exists.

### P0-U002 — `assets/Battle2/` is present but unreferenced
17 files, all duplicated by name in `assets/battle/`, and `assets.json` refers
to none of them. `index.html` contains zero literal occurrences of `Battle2`.
Note the capital B, which differs from the `battle2` namespace abandoned during
the vNext migration. Repository inspection cannot prove no path constructs the
name at runtime.
**Affects:** asset dependency inventory.
**Runtime check:** load the game with the directory temporarily renamed and
watch the network panel for 404s. **Do not delete it as part of this check.**
**Blocking:** yes — it determines whether 17 files are live or legacy.

### P0-U003 — Three alternate HTML entry points exist at the repository root
`battle-layout.html`, `layout-studio.html` and `wireframe.html` are served
alongside `index.html`. Repository inspection cannot establish whether the
deployment exposes them, nor whether any is reachable in production.
**Affects:** entry points, duplicate implementations.
**Runtime check:** request each path against the live deployment and record the
status code.
**Blocking:** yes — they may be publicly reachable UI surfaces.

### P0-U004 — `eruda.js`, an on-device developer console, ships in the repository
499,928 bytes, referenced 8 times by `index.html`, toggled by a runtime
condition. Repository inspection cannot establish who can trigger it in
production.
**Affects:** debug/dev UI.
**Runtime check:** determine the trigger and whether it fires in a normal
session.
**Blocking:** yes — a reachable inspector is a UI surface the inventory must
account for.

## Non-blocking

### P0-U005 — 61 asset files on disk are unreferenced by `assets.json`
Battle2 17, battle 26, ui 9, icons 6, fx 3. Some are plausibly state variants or
superseded art, but repository inspection cannot separate "legacy" from "loaded
by a path I did not find".
**Runtime check:** capture all network requests across a full run and diff
against the file list.

### P0-U006 — `localStorage.json` at the repository root
A 3,583-byte file whose relationship to the two runtime keys (`rw_lesson_done`,
`rw_tut`) is not established by inspection. It may be a captured state dump.
**Runtime check:** confirm whether anything loads it.

### P0-U007 — Save/resume model appears absent
No `SAVE_KEY`, `loadRun`, `saveRun`, `continueRun` or `hasSave` symbols; the two
localStorage keys are tutorial flags. A "Continue" concept could not be found.
**Runtime check:** start a run, reload the page, and record what happens.

### P0-U008 — Screen/overlay classification is partly inferred
Surfaces were classed by whether their builder calls `showScreen` or manipulates
an overlay node. Several could be either in practice.
**Runtime check:** visit each and record whether it replaces the screen or
layers over it.

### P0-U009 — Victory and defeat surfaces not separately identified
`showSummary` exists and is called from three sites; distinct victory and defeat
screens were not found as separate builders.
**Runtime check:** win and lose a run, and record whether the surfaces differ.
