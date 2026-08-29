# Phase 0 — Screen Inventory (human-readable)

Companion to `PHASE0_SCREEN_INVENTORY.json`. Source: production snapshot,
`index.html` sha256 `2c908e9d…`, 882,355 bytes.

Descriptions are at inventory level. **No production source is reproduced.**

## Classification counts

Revised 2026-08-29 after the blocking unknowns closed.

### Player-facing

| type | count |
|---|---|
| full screen | **15** |
| modal | 3 |
| overlay | 2 |
| transient | 5 |
| persistent panel | 2 |
| **player-facing subtotal** | **27** |

### Development / diagnostic — not player-facing

| type | count |
|---|---|
| development screen (in-game) | 1 — Sandbox |
| development diagnostic surface (standalone) | 3 — the root HTML tools |
| development debug control (Settings rows) | 2 — Inspector, Dev unlock |
| **development subtotal** | **6** |

### Not a surface

| type | count |
|---|---|
| dormant code path | 1 — `showSpellbook` |

**Total records: 34.**

Two changes from the first count: `showSpellbook` was reclassified out of the
full-screen total once P0-U001 closed, and six development surfaces were added
that the repository-only pass had not recorded as inventory items.

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

**Reclassified out of this table:**

- **SCR-SANDBOX** — in-game **development screen**, 12 call sites. Not
  player-facing by owner intent.
- **SCR-SPELLBOOK** — **dormant code path**, closed under P0-U001. Deliberately
  superseded by `showLoadout`. Not a v2 surface.

## Development and diagnostic surfaces

Not player-facing. Recorded because they exist and are reachable, **not** as
game screens.

| id | surface | reachability |
|---|---|---|
| DEV-BATTLELAYOUT | `battle-layout.html`, 11 KB | **loads by direct URL** in the current deployment |
| DEV-LAYOUTSTUDIO | `layout-studio.html`, 2.5 MB | **loads by direct URL** |
| DEV-WIREFRAME | `wireframe.html`, 74 KB | **loads by direct URL** |
| SCR-SANDBOX | in-game Sandbox screen | 12 call sites |
| DBG-INSPECTOR | Inspector row in Settings | **visible and player-reachable; activation nonfunctional in the live deployment** |
| DBG-DEVUNLOCK | Dev unlock row in Settings | **visible and functional**; owner intent is testing only, to be removed before release |

Owner context: the three HTML tools were created to troubleshoot Battle art and
layout. Direct URL reachability does not make them player-facing screens.

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
| spells | Loadout serves this; `showSpellbook` closed as dormant (P0-U001) |
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
| debug / dev UI | **yes — Sandbox, 3 root HTML tools, Inspector and Dev unlock rows** |
| save / resume states | **not found (P0-U007)** |
