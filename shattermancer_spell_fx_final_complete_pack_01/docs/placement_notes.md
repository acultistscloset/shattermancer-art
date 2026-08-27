# Placement Notes

## Shared cell rules

- Read each atlas left to right, top to bottom.
- Every frame occupies its full uniform cell; do not trim frames individually.
- Pivot at the exact center of each cell.
- All sheets play at 24 fps.
- Draw at the `display_size` recorded in the manifest.
- Charge and Travel loop. Every other sheet plays once and ends on an empty frame.
- Sprites contain no wright, staff, creature, text, numbers, or UI.

## Charge

Place the chosen elemental Charge effect at the head of the wright's already-rendered staff. The staff is not part of any sprite sheet. Each 12-frame sequence loops continuously while the incantation gathers.

## Travel orientation

`fx_travel_bolt.png` is authored on the **+X axis**: the bright leading knot is on the **right**, and its baked trail extends to the **left**. It travels left-to-right in source orientation.

For the approved diagonal up-right flight, rotate the complete rendered effect **−30 degrees**. Do not mirror it. Preserve the centered pivot while moving the effect between the staff head and contact point.

## Impact and outcomes

- **Fracture:** use the full elemental `fx_impact_<element>.png` sheet. It begins at contact; do not append approach frames.
- **Resonate only:** use `fx_resonate.png`, tinted to the applicable element. It is a loose five-mote scatter with no central bite. Never substitute a smaller Fracture.
- **All Resist:** use `fx_fizzle.png`. It intentionally drains, sags, and falls without a satisfying flash or shockwave.
- **Shatter:** use `fx_shatter.png` for a perfect incantation.
- **Shockwave:** `fx_shockwave.png` is a neutral open ring and may be tinted per element.
- **Hitflash:** `fx_hitflash.png` is a neutral radial contact flare and may be tinted per element. It is not a creature silhouette and can overlay any creature portrait.
