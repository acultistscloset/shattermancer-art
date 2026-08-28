# Validation Report

## Production assets

- `rune.png`: 124 × 128 RGBA; intended draw 62 × 64; repeat count 6.
- `potionSlot.png`: 70 × 64 RGBA; intended draw 35 × 32; repeat count 6.
- `spell.png`: 180 × 194 RGBA; intended draw 90 × 97; repeat count 4.

## Visual and alpha checks

- All three runtime-art recesses are fully opaque at their centers.
- Mean recess values remain in a coordinated dark-charcoal range; they are not bright-grey button faces.
- Rune and spell received only a controlled interior material/value adjustment.
- The FINAL rune wedge cleanup is retained pixel-for-pixel.
- Potion received an opaque painted recess inside its existing frame.
- Fully opaque frame pixels outside the recess treatments remain unchanged.
- Exterior true transparency remains present on all three assets.
- No rectangular matte was introduced.
- No new exterior alpha halo or light matte was introduced.
- Transparent exterior pixels carry `(0,0,0,0)` hidden color.
- No runtime element mark/name/mana content, potion icon, or spell illustration/name/cost is baked in.

## Preview checks

- `lowerUI_fit_preview.png` contains six revised runes, six revised potion slots, and four revised spell frames over the unchanged `lowerUI.png`.
- `battle_full.png` is 880 × 1590 and uses the same three revised control families.
- All manifest paths exist and all SHA-256 hashes match their bundled PNGs.
- Mechanical verification output is recorded in `selfcheck_output.txt`.
