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
                 Reward /   (back to map) (back to map) (back to map)
                 Node Reward
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
| **`showSpellbook`** | **0** | **defined, never called — P0-U001** |

## Modal and transient overlays

These layer over whatever screen is present rather than replacing it:

```
any screen  ->  #picker      (openPicker, openManaPicker, openChoice)
any screen  ->  #tipCard     (showTip)
any screen  ->  #toast
any screen  ->  #banner
battle      ->  #fx          (18 declared sprite sheets)
```

## Conditional and gated paths

- **Tutorial / lesson** — gated by `localStorage.rw_lesson_done` and `rw_tut`.
  First-run only; the mechanism is verified, the exact path is not.
- **Sandbox** — a development surface with 12 call sites. **Whether it is
  reachable in production is P0-U004/P0-U003.**
- **Developer console** — `eruda.js` toggles via a runtime condition. Trigger
  unverified.

## Back and resume paths

- Back paths to `showTitle` and `showMap` are the dominant return edges.
- **No save/continue/resume path was found.** No `SAVE_KEY`, `loadRun`,
  `saveRun`, `continueRun` or `hasSave` symbols exist; the only persisted keys
  are the two tutorial flags. Recorded as P0-U007 rather than concluded.

## Run-ending paths

`showSummary` is called from three sites. **Distinct victory and defeat
surfaces were not found** — see P0-U009.

## Not found

No evidence was found for: a pause screen, a loading/transition screen, a
dedicated confirmation-dialog screen distinct from `openChoice`, or a
continue-run entry on the title. Recorded as "not found", not as "absent".
