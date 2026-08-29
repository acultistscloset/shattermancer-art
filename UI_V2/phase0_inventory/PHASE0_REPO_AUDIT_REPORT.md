# Phase 0 — Production Repository Audit Report

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
and `wireframe.html` (74 KB). Whether the deployment exposes them is **P0-U003**.

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

**No save or resume system was found.** No `SAVE_KEY`, `loadRun`, `saveRun`,
`continueRun` or `hasSave` symbols exist. `localStorage` is used 12 times for
exactly two keys, both tutorial flags: `rw_lesson_done` and `rw_tut`. There is
no evidence of a Continue entry point. Recorded as **P0-U007** rather than
concluded, since absence in code is weaker evidence than presence.

## Duplicate and legacy implementation findings

1. **`assets/Battle2/` — 17 files, capital B, entirely unreferenced.** Every
   filename is duplicated inside `assets/battle/`. Zero manifest references and
   zero literal occurrences in `index.html`. **P0-U002.**
2. **Three alternate root HTML entry points.** **P0-U003.**
3. **`eruda.js`** — a 500 KB on-device developer console, referenced 8 times.
   **P0-U004.**
4. **Sandbox** — a development screen with 12 call sites, more than Battle.
5. **`showSpellbook`** — defined, never called. **P0-U001.**
6. **`docs/backup/`** — pre-rewrite copies of `index.html` and `assets.json`,
   retained deliberately and not referenced at runtime.
7. **61 unreferenced asset files.** **P0-U005.**

## Anything that may cause the inventory to be incomplete

- **Static analysis cannot prove unreachability.** Every "never called" or
  "unreferenced" finding is a candidate, not a conclusion.
- **Screen versus overlay classification is partly inferred** from whether a
  builder calls `showScreen`. **P0-U008.**
- **The snapshot is a point-in-time copy.** It matches a known accepted state
  but not the auditor's current workspace, which is deliberately ahead of it.
- **Regions and controls are inventoried in depth only for the battle screen**,
  which is the only one with a fully declared region structure in the
  stylesheet. Menu-family screens build markup at call time; their internal
  regions are not equally verifiable statically.

## Final summary

| | count |
|---|---|
| total full screens found | **17** |
| total overlays / modals found | **5** |
| total transient / conditional UI states found | **5** |
| persistent panels | **2** |
| total UI records | **29** |
| total active UI asset dependencies found | **297** |
| total possible legacy / duplicate implementations | **7** |
| total runtime checks required | **9** |
| **blocking unknown count** | **4** |

PHASE 0 REPO AUDIT: READY FOR OWNER/DESIGN REVIEW
