# Phase 0 — Unresolved Items

Updated 2026-08-29 with owner-supplied runtime results.

**Blocking unknowns: 0.**

**Open non-blocking items: 4** — P0-U005, P0-U006, P0-U009, P0-U010.

**Change history.** P0-U001 to U004 closed during the blocking-unknown
resolution pass. **P0-U008 closed earlier, in the classification-integrity
pass** that followed the confirmed `showLoadout` misclassification. The Group 2
owner-review update then **closed P0-U007** and **opened P0-U010**, leaving the
open count unchanged at four:

| | before Group 2 | after Group 2 |
|---|---|---|
| open | U005, U006, **U007**, U009 | U005, U006, U009, **U010** |
| count | 4 | 4 |

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

### P0-U007 — Save/resume model — **CLOSED 2026-08-29: RESOLVED STATIC-AUDIT MISS**

**The original finding was wrong, and it is preserved here rather than deleted.**

> *Original text:* "No `SAVE_KEY`, `loadRun`, `saveRun`, `continueRun` or
> `hasSave` symbols; the two localStorage keys are tutorial flags. A 'Continue'
> concept could not be found."

**Reinspection of the same production file** — 882,355 bytes, sha256
`2c908e9d…` — verified a complete persistence system that was present all along:

| symbol | role |
|---|---|
| `rw_save_v1` | **persistent profile** — unlocked disciplines, spells, masteries, banked shards, talent trees, run counts |
| `rw_run_v1` | **active run** |
| `RUNSAVE.store()` | called from **`showMap()`**, refusing to write in sandbox or tutorial |
| `RUNSAVE.peek()` | validates the parsed run: requires a `wizard` and a non-empty `map` |
| `RUNSAVE.resume()` | restores `RUN`, reapplies relic max-HP, calls `showMap()` |
| `RUNSAVE.clear()` | called from `showTitle`, `startAnew`, `showSummary` |

**The Path is the active-run checkpoint** — the only write happens on entry to
`showMap()`, and resume returns there. **Node progress is not checkpointed
mid-encounter.** Continue is wired to `RUNSAVE.resume()`.

**Why the original audit missed it.** The search used five **invented identifier
names** — `SAVE_KEY`, `loadRun`, `saveRun`, `continueRun`, `hasSave` — none of
which appear in the source. The real system stores its keys as **string literals
inside object definitions** (`KEY:"rw_run_v1"`) with methods named
`store`/`peek`/`resume`/`clear`. The symbols were present in the text that had
already been extracted; the failure was searching for guessed names instead of
enumerating the actual `localStorage` calls. **Not a missing-source problem.**

### P0-U008 — Screen versus overlay classification — **CLOSED 2026-08-29**
**Closed by static re-inspection, not by runtime test.**

The original classifier was faulty in two ways: it inspected only the first ~900
characters of each builder, and it tested for the literal `showScreen` alone. It
therefore missed a call sitting past that window (`showLoadout`) and missed the
`showScreenWithStatus` wrapper entirely (`showTreasure`, `showRest`,
`showReward`, `showNodeReward`).

**All 23 UI builders were re-tested on their whole bodies**, checking for
`showScreen` OR `showScreenWithStatus` OR a `#picker`/`.show` overlay node.
Three builders that call neither delegate to a renderer — `showMap` to
`drawPath`, `openShop` to `renderShop`, `showBattle` to the `inBattle` body
class — and all three replace the screen.

**Result: 17 full screens, 3 modals, 0 overlays.** Two records were wrong and
are corrected: `SCR-LOADOUT` and `SCR-TREASURE`, both overlay -> full_screen.
The only surfaces that layer rather than replace are the three `#picker` modals
and the tip card.

**No runtime check is required.** Every classification now rests on
`VERIFIED_CODE`.

### P0-U009 — Victory and defeat surfaces not separately identified
`showSummary` exists with three call sites; no distinct victory screen found.
**Runtime check:** win and lose a run, record whether the surfaces differ.

### P0-U010 — Boss / act-transition full heal — OPEN, non-blocking
Opened by the Group 2 owner review. The owner recalls and expects a **full heal**
associated with boss defeat and/or the beginning of a new act. **No
implementation claim is made here.**

**Scope, narrowly:** verify the exact current full-heal behaviour following boss
defeat and act transition —
- whether the heal is **unconditional or conditional**;
- whether it occurs in `bossDefeated`, `beginAct`, another transition, or in
  **more than one place**.

**Method:** a targeted implementation trace of the production snapshot. **Do not
guess the result.**

This item does **not** revoke Group 2 owner approval.
