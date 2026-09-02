# Phase 0 — Production Repository Audit Report

**Updated 2026-08-29** with owner-supplied runtime results. All four blocking
unknowns are now closed.

**Source of evidence:** the production snapshot `Shattermancer.zip`, supplied to
unblock this audit. 404 files. `index.html` sha256 `2c908e9d…`, 882,355 bytes.

Neither the auditor's workspace nor `Shattermancer-art` was used as evidence of
production behaviour. **No production source code is reproduced here.**

## Repository structure relevant to UI

```
/                       index.html, assets.json, README.md
                        battle-layout.html, layout-studio.html, wireframe.html
                        eruda.js, localStorage.json
/assets/                Battle2 17, backdrops 19, battle 77, elements 6, fx 21,
                        icons 6, menu 67, nodes 6, numerals 16, portraits 1,
                        seals 7, spells 78, ui 37
/docs/                  CHATGPT-ART-SPEC.md, ENGINEERING-NOTES.md
/docs/backup/           assets.BEFORE-REWRITE.json, index.BEFORE-REWRITE.html
```

## Main entry points

`index.html` is the application. **Three further HTML files sit at the
repository root** — `battle-layout.html` (11 KB), `layout-studio.html` (2.5 MB)
and `wireframe.html` (74 KB).

**P0-U003, closed by runtime test: all three load by direct URL in the current
deployment, as do `/eruda.js` and `/localStorage.json`.** Owner context: the
three HTML pages were created deliberately as diagnostic tools for
troubleshooting Battle art and layout. They are classified as
**development/diagnostic surfaces** and are **not** counted as player-facing
screens. Direct URL reachability alone does not reclassify a diagnostic tool as
a game screen.

## Routing / navigation model

Single-page, no framework and no URL router. Screens are built by named
functions and injected through a shared `showScreen` mechanism; the battle
screen additionally toggles a `body.inBattle` class that gates a large body of
battle-specific CSS. `hasUIArt` and `lessonOn` are the other two body-level
state classes. Navigation edges are direct function calls — see
`PHASE0_NAVIGATION_MAP.md`.

## Styling model

**One inline `<style>` block.** No external stylesheet; the only `<link>`
elements are Google Fonts preconnects and one font stylesheet. **59 `@keyframes`
are defined.** Screen-specific rules are scoped by body class rather than by
separate files, so all screens share one cascade — relevant to any v2 work,
because a change is global by default.

## Asset-loading model

`assets.json` is a keyed manifest in buckets (`ui`, `scene`, `icon`, `fx`,
`fxsheet`, `seal`, `portrait`). At runtime the `ui` bucket is published as CSS
custom properties; other buckets are read by lookup. `fxsheet` entries are
objects carrying their own `src` plus cell, frame and fps data.

**All 297 referenced paths exist on disk. Zero broken references.**

## State-management model

A single mutable run object plus a battle state object, both module-level. No
store, no framework. Render functions read that state directly.

## Save / load model relevant to UI

**CORRECTED 2026-08-29. The original result was wrong and is preserved below as
an audit trail.**

> *Original finding:* "No save or resume system was found. No `SAVE_KEY`,
> `loadRun`, `saveRun`, `continueRun` or `hasSave` symbols exist… There is no
> evidence of a Continue entry point."

**Reinspection of the same file verified a complete persistence system:**

| symbol | role |
|---|---|
| `rw_save_v1` | **persistent profile** — unlocked disciplines, spells, masteries, banked shards, talent trees, run counts |
| `rw_run_v1` | **active run** |
| `SAVE` | the profile object |
| `RUNSAVE` | the active-run object, with `store` / `peek` / `resume` / `clear` |

- **`RUNSAVE.store()` is called from `showMap()`**, and nowhere else. It refuses
  to write during sandbox or tutorial.
- **The Path is therefore the active-run checkpoint**: the run is written every
  time the player reaches it and at no other moment. **Node progress is not
  checkpointed mid-encounter.**
- **Continue is wired to `RUNSAVE.resume()`**, which validates the stored run,
  restores it, and returns to The Path.
- `RUNSAVE.clear()` is called from `showTitle`, `startAnew` and `showSummary`.

**Why the earlier result was wrong.** The search used five **invented identifier
names**, none of which appear in the source. The real system stores its keys as
**string literals inside object definitions** (`KEY:"rw_run_v1"`). The symbols
were present in text the audit had already extracted — **this was a
search-vocabulary failure, not a missing-source problem.** Enumerating the actual
`localStorage` calls would have found both keys immediately.

**P0-U007 is CLOSED as a resolved static-audit miss.**

## Battle / combat surface — Group 3 findings

**Current-production evidence.** Owner-approved future requirements are recorded
separately in `PHASE0_OWNER_REVIEW.md` and `02_DECISION_LOG.md`, not here.

**Result model.** `evaluateGuess()` returns **three** per-slot tokens —
`exploit`, `resonate`, `resist` — surfaced to the player as **Fracture,
Resonate, Resist**. **Echo is a modifier**, applied as an added class on an
existing pip. **Veiled substitutes** a marker in place. **Shatter** is the
whole-incantation outcome when every slot is Fracture. **`exploit` never appears
player-facing**; the legend contains exactly Fracture, Resonate, Resist, Echo
and Veiled.

**Incantation length.** Currently 3--5 runes by creature. **The implementation
must not be treated as fixing length for an encounter** --- enemy mechanics can
change it mid-fight (UIV2-D010).

**Turn model.** Spells and vials **do not ordinarily consume the turn**; up to
three vials per turn, and spells are explicitly "free of the turn" in source.
**CAST is the ordinary turn-ending action.** Invalid or repeated casts are
rejected without advancing.

**Vial sockets.** `renderPotions` draws a fixed `for (s = 0; s < 6; s++)` --- 3
left, 3 right, with sockets beyond capacity marked `beyond`. **A seventh carried
vial is therefore unreachable in Battle**, compounding the capacity discrepancy.

**Boss behaviour.** Bosses reuse the same surface but may alter fundamental
rules. The Chorus's four-phase cycle is **one boss's mechanic**, shown in the
existing intent region --- **not a general boss pattern** (UIV2-D013).

**Transient layers.** toast, banner, floating values, FX --- non-blocking; tip
card --- dismissible overlay; picker --- **blocking modal**. None is a full screen.

**HOOKS ARE NOT FEATURES.** Twenty-two distinct `playSfx` keys and five
`playMusic` calls exist, and `navigator.vibrate` appears twice. **Owner
correction: game audio assets are not yet implemented, and haptics are not an
active finished system.** Both are **code-level trigger points only** and must
not be described as working features (UIV2-D015).

## Duplicate and legacy implementation findings

1. **`assets/Battle2/` — 17 files, capital B, entirely unreferenced.**
   **P0-U002, CLOSED:** all asset paths come from `artPath()`, a pure manifest
   lookup that cannot synthesise a path, and no manifest value names the
   directory. Unreachable legacy content. **Recorded and retained, not deleted.**
2. **Three alternate root HTML entry points. P0-U003, CLOSED:** publicly
   reachable, classified as development/diagnostic surfaces by owner intent.
3. **`eruda.js`** — a 500 KB on-device developer console. **P0-U004, CLOSED:**
   the trigger is an ungated "Open" button in the Settings **Inspector** row.
   Runtime: the row is visible and player-reachable, but activation does not
   launch the console in the live deployment.
4. **Dev unlock** — a Settings row, **visible and functional**, which unlocks
   disciplines and grants resources. The source labels it "REMOVE BEFORE
   RELEASE". Owner intent: testing only, removed before release.

   **Owner review note (Group 2):** relic selling at the Sanctum, via the
   `fences_contact` relic, is **intended and may remain**. It is **not** legacy,
   **not** slated for removal, and **not** a discrepancy.
5. **Sandbox** — an in-game development screen with 12 call sites.
6. **`showSpellbook`** — **P0-U001, CLOSED:** zero call sites and no dynamic
   dispatch of any kind exists in the file; `data-go="spells"` routes to
   `showLoadout`. Dormant code path, deliberately superseded.
7. **`docs/backup/`** — pre-rewrite copies of `index.html` and `assets.json`,
   retained deliberately and not referenced at runtime.
8. **61 unreferenced asset files**, of which 17 are the Battle2 set closed
   above. The remaining 44 are candidates, not conclusions. **P0-U005.**

## Anything that may cause the inventory to be incomplete

- **Static analysis cannot prove unreachability.** Every "never called" or
  "unreferenced" finding is a candidate, not a conclusion.
- **Screen versus overlay classification — CORRECTED and CLOSED (P0-U008).**
  The original classifier inspected only the first ~900 characters of each
  builder and tested the literal `showScreen` alone, so it missed a call past
  that window and missed the `showScreenWithStatus` wrapper. All 23 UI builders
  were re-tested on their whole bodies. **Two records were wrong:**
  `SCR-LOADOUT` and `SCR-TREASURE`, both overlay -> full_screen. Final counts:
  17 full screens, 3 modals, 0 overlays.
- **The snapshot is a point-in-time copy.** It matches a known accepted state
  but not the auditor's current workspace, which is deliberately ahead of it.
- **Regions and controls are inventoried in depth only for the battle screen**,
  which is the only one with a fully declared region structure in the
  stylesheet. Menu-family screens build markup at call time; their internal
  regions are not equally verifiable statically.

## Final summary

| | count |
|---|---|
| **player-facing full screens** | **17** |
| modals | **3** |
| overlays | **0** |
| transient / conditional UI states | **6** |
| persistent panels | **2** |
| **player-facing subtotal** | **27** |
| development screens (in-game) | **1** |
| development diagnostic surfaces (standalone, publicly reachable) | **3** |
| development debug controls (Settings rows) | **2** |
| **development subtotal** | **6** |
| dormant code paths (not surfaces) | **1** |
| **total records** | **35** |
| total active UI asset dependencies found | **297** |
| total possible legacy / duplicate implementations | **8** |
| open non-blocking unknowns | **4** — P0-U005, U006, U009, U010 |
| **blocking unknown count** | **0** |

**Totals changed again 2026-08-29** after the classification-integrity check:
full screens 15 -> 17, overlays 2 -> 0, as `SCR-LOADOUT` and `SCR-TREASURE` were
reclassified. `SCR-LOADOUT` is the four-spell selection screen reached from the
Map tool row.

**Totals changed from the repository-only pass:** `showSpellbook` left the
full-screen count once P0-U001 closed, and six development surfaces were added
that a repository-only inspection had not recorded as inventory items. The
diagnostic HTML pages were never counted as player screens and are not counted
as such now.

**Owner review:** Group 1 APPROVED, Group 2 APPROVED, Group 3 APPROVED. Phase 0 overall remains
IN PROGRESS pending the remaining review groups.

PHASE 0 REPO AUDIT: READY FOR OWNER/DESIGN REVIEW

This is not a claim that Phase 0 is approved. Only the project owner can approve
the phase.
