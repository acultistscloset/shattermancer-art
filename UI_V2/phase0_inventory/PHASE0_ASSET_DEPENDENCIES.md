# Phase 0 — Asset Dependencies

Source: production `assets.json` and the `assets/` tree in the snapshot.
Nothing has been deleted, renamed or moved.

## Totals

| | count |
|---|---|
| distinct paths referenced by `assets.json` | 297 |
| files present in `assets/` | 358 |
| **referenced but missing from disk** | **0** |
| on disk but unreferenced | 61 |

## DEFINITELY ACTIVE — referenced and present

Evidence: `VERIFIED_ASSET_OR_CONFIG` — a manifest key resolves to a file that exists.

| directory | referenced | consuming area |
|---|---|---|
| `assets/backdrops/` | 19 | act and node backdrops |
| `assets/battle/` | 51 | battle screen — panels, book, lower surface, controls |
| `assets/elements/` | 6 | the six element marks, battle and grimoire |
| `assets/fx/` | 18 | battle spell effects |
| `assets/menu/` | 67 | title, disciplines, talents, settings and other menu screens |
| `assets/nodes/` | 6 | map node markers |
| `assets/numerals/` | 16 | drawn numerals |
| `assets/portraits/` | 1 | discipline portraits |
| `assets/seals/` | 7 | run seals |
| `assets/spells/` | 78 | spell illustrations, all screens showing a spell |
| `assets/ui/` | 28 | shared chrome |

## UNREFERENCED — legacy or dormant candidates

**Not deleted, and not concluded to be dead.** Static inspection cannot prove a
file is never requested; see P0-U002 and P0-U005.

| directory | files | note |
|---|---|---|
| `assets/Battle2/` | 17 | **capital B.** Every name duplicated in `assets/battle/`. Zero manifest references, zero literal occurrences in `index.html`. P0-U002 |
| `assets/battle/` | 26 | superseded legacy from earlier packs, retained until cutover |
| `assets/ui/` | 9 | |
| `assets/icons/` | 6 | no manifest bucket references this directory at all |
| `assets/fx/` | 3 | 18 of 21 are referenced via `fxsheet` `src` entries |

## Shared versus screen-specific

`assets/ui/`, `assets/elements/`, `assets/numerals/`, `assets/spells/` and
`assets/fx/` are referenced from more than one area and are treated as shared.
`assets/battle/`, `assets/menu/`, `assets/nodes/` and `assets/backdrops/` are
screen-specific.

## State variants

The manifest expresses control states as separate keys pointing at distinct
files — for example default, pressed, disabled and locked variants of the same
control. Where a single file serves several state keys, that is recorded as a
shared binding rather than a duplicate asset.

## Unreferenced file list

- `assets/Battle2/abilityTag.webp`
- `assets/Battle2/book.webp`
- `assets/Battle2/cast.webp`
- `assets/Battle2/clearRow.webp`
- `assets/Battle2/draftArea.webp`
- `assets/Battle2/enemyPanel.webp`
- `assets/Battle2/intent.webp`
- `assets/Battle2/lowerUI.webp`
- `assets/Battle2/playerPanel.webp`
- `assets/Battle2/potionSlot.webp`
- `assets/Battle2/rune.webp`
- `assets/Battle2/sceneArt_act1.webp`
- `assets/Battle2/sceneArt_act2.webp`
- `assets/Battle2/sceneArt_act3.webp`
- `assets/Battle2/slot.webp`
- `assets/Battle2/spell.webp`
- `assets/Battle2/waxSeal.webp`
- `assets/battle/ability-banner.webp`
- `assets/battle/cast-btn-down.webp`
- `assets/battle/cast-btn-off.webp`
- `assets/battle/cast-btn.webp`
- `assets/battle/damage-banner.webp`
- `assets/battle/element-btn-down.webp`
- `assets/battle/element-btn-off.webp`
- `assets/battle/element-btn-sel.webp`
- `assets/battle/element-btn.webp`
- `assets/battle/enemy-frame.webp`
- `assets/battle/grimoire-book.webp`
- `assets/battle/incantation-slot.webp`
- `assets/battle/lower-ui-backdrop.webp`
- `assets/battle/parchment-strip.webp`
- `assets/battle/player-frame.webp`
- `assets/battle/potion-socket-down.webp`
- `assets/battle/potion-socket-empty.webp`
- `assets/battle/potion-socket.webp`
- `assets/battle/spell-slot.webp`
- `assets/battle/ward-icon-fire.webp`
- `assets/battle/ward-icon-ice.webp`
- `assets/battle/ward-icon-lightning.webp`
- `assets/battle/ward-icon-nature.webp`
- `assets/battle/ward-icon-shadow.webp`
- `assets/battle/ward-icon-water.webp`
- `assets/battle/wax-seal.webp`
- `assets/fx/fx_charge_placeholder.webp`
- `assets/fx/fx_impact_placeholder.webp`
- `assets/fx/fx_travel_placeholder.webp`
- `assets/icons/element-fire.webp`
- `assets/icons/element-ice.webp`
- `assets/icons/element-lightning.webp`
- `assets/icons/element-nature.webp`
- `assets/icons/element-shadow.webp`
- `assets/icons/element-water.webp`
- `assets/ui/attack-ribbon.webp`
- `assets/ui/cast-backplate.webp`
- `assets/ui/disc-logo.webp`
- `assets/ui/menu-button-back.webp`
- `assets/ui/menu-button-primary.webp`
- `assets/ui/menu-grimoire-panel.webp`
- `assets/ui/menu-lock-badge.webp`
- `assets/ui/menu-logo.webp`
- `assets/ui/menu-wizard.webp`
