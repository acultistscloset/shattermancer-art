# Validation Report

- Scope: exactly seven Gate 2 production files; no Gate 3 assets.
- Dimensions: every production PNG matches the corrected template delivery size.
- Colour mode: every production PNG is RGBA.
- Transparency: every file is RGBA. Cutouts use straight, graduated alpha with RGB cleared outside the art and no baked checkerboard, white field, white matte, or halo. Edge-to-edge backdrops are full-bleed paintings rather than cutouts and retain a one-pixel anti-aliased perimeter while filling their canvases.
- Trim: every production subject touches its declared canvas bounds.
- Runtime content: no digits, names, health values, shield values, ward marks, relic marks, or variable ability icons are baked in.
- Health: both health grooves are empty; no fill is painted into either status rail.
- Baked lettering: none.
- Elements: no element-keyed assets are included in this gate.
- Preview: the comparison preview uses the same rails and Attack ribbon over all three act backdrops.
- Mechanical check: see `selfcheck_output.txt`, produced with the supplied checker and corrected `template_battle.json`.
