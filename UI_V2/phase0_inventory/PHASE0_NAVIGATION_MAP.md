# Phase 0 — Navigation Map

Derived from call sites in the production `index.html`. Call-site counts are
evidence of an edge existing, not of it being reachable in play.

## Primary flow

```
Title  ->  Discipline Selection  ->  Loadout  ->  The Path (map)
                                                      |
                    +---------------------------------+
                    |            |            |            |
                 Battle       Sanctum        Camp       Treasure
                    |            |            |            |
                 Reward /   (back to map) (back to map)  afterNode()
                 Node Reward                              -> back to map
                    |
                 The Path  ->  ...  ->  Run Summary  ->  Title
```

## Edges observed, by call-site count

| target | call sites | note |
|---|---|---|
| `showTitle` | 13 | returned to from many surfaces |
| `showMap` | 13 | the hub |
| `showSchools` | 9 | discipline selection |
| `showTalents` | 8 | |
| `showSettings` | 7 | reachable from several screens |
| `showSandbox` | 12 | **dev surface, heavily wired** |
| `showBattle` | 3 | |
| `showLoadout` | 3 | |
| `showSummary` | 3 | run end |
| `showTrials` | 3 | |
| `showAchievements` | 2 | |
| `openShop`, `showRest`, `showReward`, `showNodeReward`, `showCharacter`, `showGlossary`, `showTreasure` | 1 each | |
| ~~`showSpellbook`~~ | 0 | **CLOSED P0-U001** — dormant, superseded by `showLoadout`. Not a navigable target. |

## Path node types — exactly six (owner-confirmed, Group 2)

**Creature · Elite · Sanctum · Camp · Treasure · Boss**

Other node concepts appearing in historical discussion were discontinued or
superseded and are **not** missing features.

Destination selection is **two-stage** — select destination/seal, then Confirm.
**Far See** is a temporary look-ahead, not a full-map view. A full-map
presentation was **intentionally superseded** by the over-the-shoulder Path.

## The Map tool row

`drawPath` builds four controls over the painted path-tools banner. This is the
only route to the loadout screen:

```
Map -> [Character]  showCharacter("map")
    -> [Spells]     showLoadout("map")     four-spell selection, max 4
    -> [Talents]    showTalents(...)
    -> [Settings]   showSettings(...)
```

Each replaces the screen; each returns to the Map.

## Modal and transient overlays

These layer over whatever screen is present rather than replacing it:

```
any screen  ->  #picker      (openPicker, openManaPicker, openChoice)  -- the only true overlays
any screen  ->  #tipCard     (showTip)
any screen  ->  #toast
any screen  ->  #banner
battle      ->  #fx          (18 declared sprite sheets)
```

## Conditional and gated paths

- **Tutorial / lesson** — gated by `localStorage.rw_lesson_done` and `rw_tut`.
  First-run only; the mechanism is verified, the exact path is not.
- **Sandbox** — an in-game development screen, 12 call sites. Not player-facing
  by owner intent.
- **Developer console** — trigger identified: a click on the "Open" button in the
  **Inspector row of Settings**, ungated by any conditional. **Runtime: the row
  is visible and player-reachable; activation does not launch the console in the
  live deployment.** (P0-U004, closed)
- **Dev unlock** — a Settings row, **visible and functional**. Owner intent:
  testing only, to be removed before release. (P0-U004, closed)

## Back and resume paths

- Back paths to `showTitle` and `showMap` are the dominant return edges.
- **Trials Back is currently incorrect.** Settings opens Trials with
  `"settings"`, but the handler is `back === "title" ? showTitle() : showMap()`,
  so `"settings"` falls through: during a run it misroutes to The Path, and with
  no valid run it reaches `showMap()` with no run state. Recorded as a current
  bug in `PHASE0_OWNER_REVIEW.md`.
- **CORRECTED 2026-08-29.** The original text here claimed no save or resume
  path existed. That was wrong. `RUNSAVE.store()` writes the active run on entry
  to **`showMap()`** — so **The Path is the active-run checkpoint** — and
  Continue is wired to `RUNSAVE.resume()`, which restores the run and returns to
  The Path. `RUNSAVE.clear()` runs at `showTitle`, `startAnew` and
  `showSummary`. Node progress is **not** checkpointed mid-encounter.
  **P0-U007 is CLOSED as a resolved static-audit miss.**

## Run-ending paths

`showSummary` is called from three sites. **Distinct victory and defeat
surfaces were not found** — see P0-U009.

## Development / diagnostic entry points — outside the player navigation graph

**Reachable by direct URL in the current deployment** (P0-U003, closed), but not
reachable from any in-game navigation edge and not player-facing:

```
<live-url>/battle-layout.html     diagnostic tool
<live-url>/layout-studio.html     diagnostic tool
<live-url>/wireframe.html         diagnostic tool
```

Owner context: created to troubleshoot Battle art and layout. `/eruda.js` and
`/localStorage.json` also load by direct URL.

## Not found

No evidence was found for: a pause screen, a loading/transition screen, a
dedicated confirmation-dialog screen distinct from `openChoice`, or a
continue-run entry on the title. Recorded as "not found", not as "absent".

## Classification correction, 2026-08-29

`showLoadout` and `showTreasure` were previously recorded as overlays. Both
**replace** the screen — `showLoadout` via `showScreen`, `showTreasure` via
`showScreenWithStatus`. The original classifier inspected only the first ~900
characters of each function and tested the literal `showScreen` alone, so it
missed a call that sat past that window and missed the `WithStatus` wrapper
entirely. All 23 UI builders were re-tested on their whole bodies.

**Result: 17 full screens, 3 modals, 0 overlays.** The only surfaces that layer
rather than replace are the three `#picker` modals and the tip card.
