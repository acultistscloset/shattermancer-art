# Phase 0 — Screen Inventory (human-readable)

Companion to `PHASE0_SCREEN_INVENTORY.json`. Source: production snapshot,
`index.html` sha256 `2c908e9d…`, 882,355 bytes.

Descriptions are at inventory level. **No production source is reproduced.**

## Classification counts

| type | count |
|---|---|
| full screen | 17 |
| modal | 3 |
| overlay | 2 |
| transient | 5 |
| persistent panel | 2 |
| **total records** | **29** |

## Full screens

Each is built by a named function and rendered through the shared `showScreen`
mechanism. Evidence `VERIFIED_CODE` unless stated.

| id | name | builder | reachability |
|---|---|---|---|
| SCR-TITLE | Title / Main Menu | `showTitle` | entry point; 13 return edges |
| SCR-SCHOOLS | Discipline Selection | `showSchools` | from title |
| SCR-MAP | The Path | `showMap` | the hub; 13 edges |
| SCR-BATTLE | Battle | `showBattle`, `body.inBattle` | from a map node |
| SCR-SHOP | Sanctum | `openShop` | from a map node |
| SCR-REST | Camp | `showRest` | from a map node |
| SCR-REWARD | Reward | `showReward` | post-battle |
| SCR-NODEREWARD | Node Reward | `showNodeReward` | post-node |
| SCR-SUMMARY | Run Summary | `showSummary` | run end; victory/defeat split unverified (P0-U009) |
| SCR-CHARACTER | Character | `showCharacter` | |
| SCR-TALENTS | Talents | `showTalents` | 8 edges |
| SCR-SETTINGS | Settings | `showSettings` | 7 edges |
| SCR-GLOSSARY | Glossary | `showGlossary` | from settings |
| SCR-ACHIEVEMENTS | Achievements | `showAchievements` | |
| SCR-TRIALS | Trials | `showTrials` | |
| SCR-SANDBOX | Sandbox | `showSandbox` | **dev surface, 12 edges** |
| **SCR-SPELLBOOK** | **Spellbook** | `showSpellbook` | **`UNKNOWN_RUNTIME_CHECK_REQUIRED` — defined, zero call sites (P0-U001)** |

## Modals and overlays

| id | name | implementation |
|---|---|---|
| OVL-PICKER | Generic picker | `openPicker`, `#picker` |
| OVL-MANAPICKER | Mana picker | `openManaPicker` |
| OVL-CHOICE | Choice / confirmation | `openChoice` |
| SCR-LOADOUT | Loadout | `showLoadout` |
| SCR-TREASURE | Treasure | `showTreasure` |

## Transient surfaces

| id | name | implementation |
|---|---|---|
| OVL-TIP | Tip card | `showTip`, `#tipLayer` / `#tipCard` |
| OVL-TOAST | Toast | `#toast` |
| OVL-BANNER | Banner | `#banner` |
| OVL-FX | Effects layer | `#fx`, 18 declared sprite sheets |
| SCR-LESSON | Tutorial / lesson | gated by `localStorage.rw_lesson_done`, `rw_tut` |

## Persistent panels

| id | name | implementation |
|---|---|---|
| PNL-TOPBAR | Top bar | `#topBar`, `#purseBar`, `#track` |
| PNL-GRIMOIRE | Grimoire | `#book`, `#bookPage`, `#grimoire`, `#draftArea`, `#slots` |

## The battle screen in detail

The only screen with a fully declared region structure in the stylesheet.

**Regions:** stage (`#scene`, `#sceneArt`), enemy rail (`#enemyPanel` with
health, wards, shield badge), player rail (`#playerPanel` with health, relics,
shield badge), threat banners (`#threat` wrapping `#intent` and `#abilityTag`),
figures (`#playerFig`, `#enemySprite`), grimoire (`#book`), lower surface
(`#castArea` containing `#runeArc`/`#runes`, `#castRow` with `#potionsL`,
`#cast`, `#potionsR`, and `#kit`/`#spellTray`).

**Controls:** six element controls, CAST, six potion sockets, four spell cards,
six incantation sockets, a clear control, a legend control, a settings control.

**Dynamic values:** creature name, both health totals, both shield values, ward
counts, mana per element, spell names and costs, Aurel total, intent text,
incantation contents, history entries.

**Scrolling:** the grimoire history scrolls; every other region is fixed.

## Completeness check against the required concept list

| concept | found |
|---|---|
| main menu | yes |
| **continue / new run** | **new run yes; continue NOT FOUND (P0-U007)** |
| discipline selection | yes |
| map | yes |
| battle | yes |
| shop / sanctum | yes |
| character | yes |
| spells | **`showSpellbook` defined, never called** |
| talents | yes |
| settings | yes |
| grimoire / insight | yes |
| rewards | yes |
| victory | **not found as a distinct surface** |
| defeat / run end | `showSummary`; split unverified |
| confirmation dialogs | `openChoice` |
| tutorial / help / legend | yes |
| **pause / back behavior** | back edges yes; **no pause screen found** |
| **loading / transitions** | **not found** |
| debug / dev UI | **yes — Sandbox and `eruda.js`** |
| save / resume states | **not found (P0-U007)** |
