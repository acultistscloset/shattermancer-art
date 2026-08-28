# Validation Report

- Scope: exactly six Gate 4 production PNGs.
- Dimensions: all six files match the corrected battle template exactly.
- Format: every production file is RGBA with true exterior transparency and graduated anti-aliased alpha.
- Transparency: no rectangular matte, white background, generated checkerboard, or hidden RGB remains outside visible art.
- Health fills: contain only the stretchable crimson fill body; no frame, groove, digit, text, or icon.
- Shield badges: contain no number; their centers remain clear for runtime text.
- Top control: contains no number; only the fixed Aurel emblem and settings cog are painted.
- Legend: contains only the declared fixed `?` mark.
- Runtime content: no health value, shield value, Aurel total, name, element mark, spell art, or other variable content is baked in.
- Terminology: no element-keyed set is present in this gate.
- Preview: `battle_full.png` is 880 × 1590 and places all six assets at the corrected template coordinates over the approved Gate 3 screen.
- Manifest: every production asset exists and every SHA-256 hash matches the bundled file.
- Mechanical verification: see `selfcheck_output.txt`.
