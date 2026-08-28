# Placement Notes

All coordinates are at the 440 × 795 drawn scale. Production PNGs are delivered at 2×.

| Asset | x | y | drawn size | delivery size | repeat |
|---|---:|---:|---:|---:|---:|
| `book.png` | 0 | 359 | 440 × 226 | 880 × 452 | 1 |
| `draftArea.png` | 34 | 513 | 368 × 48 | 736 × 96 | 1 |
| `slot.png` | 105, 145, 185, 225, 265, 305 | 518 | 37 × 37 | 74 × 74 | 6 |
| `waxSeal.png` | 49 | 512 | 54 × 48 | 108 × 96 | 1 |
| `clearRow.png` | 376 | 517 | 37 × 37 | 74 × 74 | 1 |
| `lowerUI.png` | 0 | 584 | 440 × 207 | 880 × 414 | 1 |
| `rune.png` | 27, 92, 157, 222, 286, 351 | 586 | 62 × 64 | 124 × 128 | 6 |
| `cast.png` | 132 | 647 | 173 × 39 | 346 × 78 | 1 |
| `potionSlot.png` | 23, 58, 93, 311, 346, 382 | 652 | 35 × 32 | 70 × 64 | 6 |
| `spell.png` | 11, 118, 226, 333 | 689 | 90 × 97 | 180 × 194 | 4 |

## Composition rules

- The parchment strip crosses the open paper at x 7.7%, y 68.3%, w 83.5%, h 21.1% of `book.png`.
- The six rune sockets begin 19.3% into the parchment strip. The wax seal overhangs the strip at its left cut edge.
- `clearRow.png` is a separate clear-incantation control, not a seventh rune socket.
- `lowerUI.png` is one unified surface. Do not add a second harness or separate panel behind the rune row, CAST, vials, or spell cards.
- `rune.png` receives the existing runtime element mark, element name, and mana value/fill. Its painted groove is empty.
- `spell.png` receives an existing commissioned spell illustration plus runtime name and cost. Do not create replacement spell illustrations.
- No Guard or Hex banner variant belongs to Gate 3. No color filter should be applied to Gate 2 ribbons.
