# Wireframe and Placement Notes

## Fixed measured layout

- Playable viewport: 440×795 points.
- Review preview: 880×1590 pixels.
- Stage: y 4–359.
- Grimoire: y 359–585.
- Casting surface: y 584–791.
- Spell rack: y 689–786.
- No box was moved or resized.

## Conditional positions inferred from the supplied measured groups

The template records certain conditional pieces at origin because they were absent from the measured game state. Their review positions follow the fixed surrounding groups:

- Whole `book.png`: x 0, y 359.
- Whole `lowerUI.png`: x 0, y 584.
- `abilityTag.png`: x 256, y 263, immediately below `intent.png`.
- `clearRow.png`: x 365, y 518, at the draft strip's right end.
- Six `potionSlot.png` repetitions: x 23, 58, 93, 311, 346, and 382 at y 652.
- Three act backdrops: x 0, y 4.

## Runtime content deliberately excluded from new art

- Creature and wright portraits.
- The existing six element marks.
- All 78 existing spell illustrations.
- Creature, discipline, and spell names.
- Every health, mana, shield, ward, cost, and Aurel value.

The repeated `spell.png` asset is therefore a card surface with runtime illustration/name/cost recesses. The repeated `rune.png` asset is a generic control surface with runtime element content and an empty mana track.

## Items the running game must protect

The fixed template places visible controls inside the declared safe bands. It also uses visible art smaller than 44 points for CAST height (39), Clear (37×37), Legend (32×29), and Settings (26×26). The artwork cannot change those fixed boxes. Their effective touch regions should extend to at least 44×44 points without scaling the supplied art.

## Naming authority

For production gates, use the exact filenames supplied in the commission table and matching canvas archive. The table/canvas names take precedence over illustrative examples elsewhere in the prose.
