# Placement Notes

All sizes and positions follow the corrected template without adjustment. Coordinates below are at the 440 × 795 drawn scale; production PNGs are delivered at 2×.

| Asset | x | y | drawn size | delivery size |
|---|---:|---:|---:|---:|
| sceneArt_act1/2/3.png | 0 | 4 | 440 × 355 | 880 × 710 |
| enemyPanel.png | 2 | 13 | 215 × 69 | 430 × 138 |
| playerPanel.png | 240 | 287 | 194 × 71 | 388 × 142 |
| intent.png | 256 | 235 | 178 × 25 | 356 × 50 |
| abilityTag.png | 256 | 262 | 178 × 24 | 356 × 48 |

- `intent.png` is complete when used alone. Its sword mark is fixed art; the attack value is runtime content.
- `abilityTag.png` is conditional and independent. Its icon and ability content are runtime content. After the first Gate 2 preview exposed that the corrected template coordinate overlapped the player rail, its placement was corrected to `x 256, y 262`. It ends at y 286, immediately before the player rail begins at y 287.
- Both ribbons deliberately use one quiet painted field, one thin iron boundary, and one medallion. Dense ornament, layered points, repeated fittings, and high-contrast surface detail were removed so runtime information telegraphs first.
- Both status rails are one painted frame each. The name/discipline, health, shield, ward, and relic content is supplied by the game.
- The health grooves are painted empty. No fill is baked into either rail. Health fills are outside this Gate 2 delivery because they are not among the seven requested filenames.
- The same neutral brown, blackened-iron, oxblood, and oxidized-brass furniture is used unchanged over all three acts. It does not inherit Act II or Act III blue lighting.
- The approved frame designs and simplified ribbon designs are unchanged. The three backdrops were repainted with broader value masses, fewer hard edges, calmer combat zones, and story detail concentrated in the distance and margins.
- The enemy and player frame paintings are unchanged in design. Their cutout edges received a deterministic alpha decontamination pass that removes pale neutral matte pixels and clears RGB wherever alpha is zero.
- `previews/battle_full.png` shows the common, attack-only state over Act I. Act II and III equivalents demonstrate the same furniture. `ability_conditional_fit.png` shows the corrected conditional placement.
