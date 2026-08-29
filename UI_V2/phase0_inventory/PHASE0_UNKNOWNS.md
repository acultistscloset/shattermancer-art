# Phase 0 — Unresolved Items

Updated 2026-08-29 with owner-supplied runtime results.

**Blocking unknowns: 0.**

---

## CLOSED

### P0-U001 — `showSpellbook` reachability — CLOSED
**By deeper static inspection.** Zero call sites; the identifier appears twice,
as its own definition and one comment. No dynamic dispatch exists anywhere in
the file — no `window[…]` lookup, no `eval`, no `new Function`, no
string-indexed `["show…"]`, no inline `onclick`. The sole dispatch mechanism is
`data-go`, and its `"spells"` value routes to `showLoadout`. The source
documents the decision explicitly.
**Disposition:** dormant code path, deliberately superseded. **Not a v2 surface.**

### P0-U002 — `assets/Battle2/` runtime usage — CLOSED
**By deeper static inspection.** Every asset path is produced by
`artPath(bucket, key)`, a pure manifest lookup that returns a stored value or
null and cannot synthesise a path. There are zero string concatenations from
`"assets/"`, zero template literals building asset paths, and zero literal
occurrences of `Battle2` or `battle2` in the production file. Since a request
can only originate from a manifest value, and no manifest value names that
directory, its 17 files cannot be requested.
**Disposition:** unreachable legacy content, **recorded and retained. Not
deleted during Phase 0.**

### P0-U003 — Alternate root HTML entry points — CLOSED
**By runtime test.** All five paths load in the current deployment:
`/battle-layout.html`, `/layout-studio.html`, `/wireframe.html`, `/eruda.js`,
`/localStorage.json`.

**Owner context:** the three HTML pages were created deliberately as
diagnostic/development tools for troubleshooting Battle art and layout.

**Disposition:** classified as **development/diagnostic surfaces**, recorded as
**publicly reachable by direct URL in the current deployment**. They are **not**
player-facing game screens and are **not** counted as such. Direct URL
reachability alone does not make a diagnostic tool a game screen.

### P0-U004 — `eruda.js` reachability — CLOSED
**Trigger identified statically, then confirmed by runtime test.** The trigger
is a click on `#setEruda`, a button labelled "Open" in an "Inspector" row built
unconditionally into the Settings screen; it injects `eruda.js` and calls
`eruda.init()`. No conditional gates it.

**Runtime result:** the Inspector row **is** visible in Settings and is
player-reachable. Tapping Open **does not** launch the console overlay in the
live deployment. A Dev unlock control **is** visible and functional.

**Owner context:** Dev unlock exists intentionally for testing — it unlocks
disciplines and grants test resources — and is intended to be removed before
release. The source itself labels the block "REMOVE BEFORE RELEASE".

**Disposition:** both recorded as **development/debug UI, not intended final
player-facing features**. Inspector UI is player-reachable; Inspector activation
is currently nonfunctional in the live deployment on runtime observation.
**Neither removed nor redesigned in Phase 0.**

---

## Open — non-blocking

### P0-U005 — 61 unreferenced asset files
Battle2 17 (closed as legacy under P0-U002), battle 26, ui 9, icons 6, fx 3.
The remaining 44 are candidates, not conclusions.
**Runtime check:** capture all network requests across a full run and diff
against the file list.

### P0-U006 — `localStorage.json` at the repository root
Confirmed publicly reachable under P0-U003, but its relationship to the two
runtime keys is still unestablished.
**Runtime check:** confirm whether anything loads it.

### P0-U007 — Save/resume model appears absent
No `SAVE_KEY`, `loadRun`, `saveRun`, `continueRun` or `hasSave` symbols; the two
persisted keys are tutorial flags. No Continue entry point was found.
**Runtime check:** start a run, reload the page, record what happens.

### P0-U008 — Screen versus overlay classification is partly inferred
Classed by whether a builder calls `showScreen` or manipulates an overlay node.
**Runtime check:** visit each and record whether it replaces or layers.

### P0-U009 — Victory and defeat surfaces not separately identified
`showSummary` exists with three call sites; no distinct victory screen found.
**Runtime check:** win and lose a run, record whether the surfaces differ.
