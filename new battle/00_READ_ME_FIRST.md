# Shattermancer battle art — final corrected complete pack 02

This is the single implementation source of truth. It contains all 60 final production assets, with every approved correction already merged. There is no `updates/` folder and no superseded duplicate to resolve.

## Folder map

- `01_stage/` — three battle backdrops, player/enemy frames, intent banners, and separate banner icons.
- `02_grimoire/` — final neutral-dark Grimoire, matched parchment strip, and darker traditional wax seal.
- `03_casting/` — element controls, mana tracks/fills, six potion-socket pieces, dark CAST family, and the final smaller centered CAST label.
- `04_spells/` — reusable empty spell-card frame and four state overlays only.
- `05_chrome/` — purse and settings control pieces.
- `06_wards/` — the six canonical shared element paintings plus the ward-number plate.
- `07_feedback/` — five final Insight markers, legend button and pressed overlay, and current-incantation slot.
- `08_foundation/` — continuous lower-interface backdrop.
- `previews/` — implementation previews with no substitute spell illustrations.
- `docs/` — authoritative manifest, placement guidance, corrections record, and validation report.

## Critical implementation rules

1. Use exactly one shared element mark inside each casting button.
2. Reuse the six files in `06_wards/` for wards, casting selection, current incantation, and Grimoire history.
3. No spell illustrations are included. Apply the project's separately approved spell art at runtime; do not create or extract spell art from these previews.
4. Treat the filenames in this ZIP as final. Do not layer an older correction pack over this one.

## Player and enemy status art

The blank status rails are accompanied by three shared production assets in `01_stage/`: `health_bar_frame.png`, `health_bar_fill.png`, and `shield_badge.png`. These are the artwork used by both enemy and player panels. Health values and shield numbers remain runtime text.
