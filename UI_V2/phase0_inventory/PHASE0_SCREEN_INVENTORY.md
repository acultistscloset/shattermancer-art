# Phase 0 — Screen Inventory (human-readable)

Companion to `PHASE0_SCREEN_INVENTORY.json`. Source: production snapshot,
`index.html` sha256 `2c908e9d…`, 882,355 bytes.

Descriptions are at inventory level. **No production source is reproduced.**

## Classification counts

Revised 2026-08-29 after the blocking unknowns closed.

### Player-facing

| type | count |
|---|---|
| full screen | **17** |
| modal | 3 |
| overlay | **0** |
| transient | **6** |
| persistent panel | 2 |
| **player-facing subtotal** | **28** |

**Corrected 2026-08-29.** Records are now classified on the **whole function
body**, testing for `showScreen` **or** `showScreenWithStatus` **or** a
`#picker`/`.show` overlay node. The original pass inspected only the first ~900
characters and tested the literal `showScreen` alone. All 23 UI builders were
re-tested; two were wrong and are corrected below. **No overlay-class records
remain** — the four picker/tip surfaces are modals, and every other
player-facing surface replaces the screen.

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

**Total records: 35.**

**Count change, Group 3 (2026-08-29):** transient 5 → 6, total 34 → 35, from one
added record — **OVL-FLOATTEXT**. `floatText` spawns short-lived numeric values
anchored to a target element and is **not** the `#fx` sprite layer already
recorded as OVL-FX. Battle FX, the tip card and the picker were each checked
against the existing inventory and **were already recorded**; none was
duplicated. **No full-screen, modal or overlay count changed.**

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
| **SCR-LOADOUT** | **Spells (loadout) — four-spell selection** | `showLoadout` | **CORRECTED: from the Map tool row (`data-go="spells"`). Max 4 carried. Back returns to Map.** |
| **SCR-TREASURE** | **Treasure** | `showTreasure` | **CORRECTED: from a treasure map node. Returns to Map via `afterNode()`.** |
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

All three manipulate the `#picker` node and layer over the current screen.

| id | name | implementation |
|---|---|---|
| OVL-PICKER | Generic picker | `openPicker`, `#picker` |
| OVL-MANAPICKER | Mana picker | `openManaPicker` |
| OVL-CHOICE | Choice / confirmation | `openChoice` |

`SCR-LOADOUT` and `SCR-TREASURE` were previously listed here in error and are
now full screens.

## Spells (loadout) — detail

`showLoadout(back)` is the **four-spell selection interface**. `MAX_EQUIPPED = 4`
and the screen states *"Carrying N of 4"*. Two sections, **Carried** and **Set
aside — N known**; each spell is a card with glyph, name, cost, description,
mastery and potency. Equip and unequip act per card; unequip refuses below one
carried spell. Reached from the **Map** tool row (Character · Spells · Talents ·
Settings, built by `drawPath`). Back is labelled "Back to the path" and returns
to the Map; a `back="settings"` route exists in code with no observed caller.

**`showCharacter` is entirely separate** — it never references `RUN.spells`, has
no equip controls, and never calls `showLoadout`.

## Transient surfaces

| id | name | implementation |
|---|---|---|
| OVL-TIP | Tip card | `showTip`, `#tipLayer` / `#tipCard` |
| OVL-TOAST | Toast | `#toast` |
| OVL-BANNER | Banner | `#banner` |
| OVL-FX | Effects layer | `#fx`, 18 declared sprite sheets |
| **OVL-FLOATTEXT** | **Floating damage / heal / block values** | `floatText(el, text, class)` — Battle only, non-blocking |
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
| spells | **yes — SCR-LOADOUT, the four-spell selection screen, from the Map**; `showSpellbook` closed as dormant (P0-U001) |
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
