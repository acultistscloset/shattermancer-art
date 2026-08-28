# Claude AI Review Notes

This is the single complete Gate 2 source-of-truth review pack. Replace any earlier Gate 2 stage files with the seven PNGs in `01_stage/`.

## Production files

- `sceneArt_act1.png`, `sceneArt_act2.png`, `sceneArt_act3.png`: simplified full-bleed RGBA backdrops at 880 × 710.
- `enemyPanel.png`: empty creature rail at 430 × 138.
- `playerPanel.png`: empty wright rail at 388 × 142.
- `intent.png`: simplified standalone Attack ribbon at 356 × 50.
- `abilityTag.png`: simplified conditional Ability ribbon at 356 × 48.

## Placement correction

Use `abilityTag.png` at drawn position `x 256, y 262`, not the overlapping `x 255, y 290` coordinate in the supplied corrected template. At y 262 the 24-point-tall ribbon ends at y 286, immediately before `playerPanel` begins at y 287. Attack remains at `x 256, y 235`.

## Runtime content

The rails are empty frames. Creature/discipline names, health values and fills, shield values, ward marks, relic marks, attack value, ability icon, and ability content are supplied at runtime. Do not draw or duplicate them.

## Alpha

The four cutouts use genuine straight RGBA alpha. Pale neutral matte pixels were removed and RGB is zero wherever alpha is zero. The three backdrops are intentionally full-bleed RGBA paintings.

## Review aids

- `previews/three_act_furniture_check.png` compares identical furniture over all three acts.
- `previews/transparent_cutout_check.png` composites every cutout over dark and light fields.
- `previews/ability_conditional_fit.png` demonstrates the corrected non-overlapping Ability placement.
