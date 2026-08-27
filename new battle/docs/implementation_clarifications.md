# Implementation clarifications

## Spell art

This pack intentionally contains zero spell illustrations. `04_spells/` supplies only the empty reusable card frame and its pressed, selected, disabled, and locked overlays. Use the project's existing approved spell-art assets. Do not generate, redraw, recolor, derive, substitute, or extract spell illustrations from any review preview. Do not treat the shared element marks as spell art.

## Shared element art

`06_wards/ward_icon_<element>.png` is the one canonical element-art family. The exact elements are `fire`, `water`, `nature`, `lightning`, `ice`, and `shadow`.

Reuse each file unchanged in four contexts:

- Enemy wards: 14-point drawing.
- Casting selection: 30–34-point drawing, exactly one mark per 46-point button.
- Current incantation: 42–46-point drawing.
- Grimoire history: 18–22-point drawing.

Maintain aspect ratio and use proportional contain-scaling. The earlier double-image appearance above CAST was a preview compositing error, never an instruction or production asset.

## Insight legend and markers

Draw `feedback_legend_button_default.png` at 40 × 40 pixels, centered at x=733, y=105 within the 848 × 482 `grimoire_book.png`. This is inside the exposed right parchment sheet, halfway between the end of `INSIGHT` and the page edge.

Use each supplied Echo marker as a complete asset. Do not split its core and ring, add another echo, or redraw the rings. Fracture Echo is a filled green core plus a separated green outer ring. Resonate Echo is two bold antique-gold rings with a transparent gap.

## CAST

Center `03_casting/cast_label.png` inside `cast_button.png`. The 252 × 52 label is intentionally smaller than the 376 × 88 plate and must retain visible clearance on every side.

## Health and shield art

The health bars and shield badges are no longer preview-only constructions. Use the three supplied production assets in `01_stage/` for both panels. The bar frame stays fully visible; the fill is clipped by width underneath it. Add the current/max health string and shield value as runtime text. Do not redraw these shapes with CSS, canvas primitives, or placeholder geometry.
