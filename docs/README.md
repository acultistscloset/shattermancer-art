# Shattermancer Battle UI Asset Pack

This package contains the 71 approved battle-interface components as individual PNG files, plus a composited implementation preview and technical documentation.

## Transparency

- Every numbered production PNG is RGBA.
- Pixels outside each painted asset use genuine transparency.
- No checkerboard, white, gray, or black matte is included in the production files.
- The alpha-validation CSV records mode, dimensions, alpha extrema, and corner-alpha checks for every numbered file.

## Live game content

Do not bake enemy names, discipline names, currency values, health values, ward levels, mana values, shield values, incoming-action text, relics, potion art, or spell art into these images. Render those values above the supplied backplates.

## Reusable components

- `018_ward_number_field.png`: place six times.
- `026_empty_relic_socket.png`: place eight times.
- `039_element_button_default.png`: place six times, then layer the appropriate state overlay and icon.
- `050_mana_meter_track_empty.png`: place six times; horizontally clip its corresponding full fill.
- `063_empty_potion_socket_default.png`: place three times on each side of CAST, six total.
- `067_blank_spell_slot.png`: place exactly four times.

## Layer order

1. Section harness or stat frame
2. Empty field, track, or socket backplate
3. Variable fill or future gameplay icon
4. State overlay
5. Live game text and numbers

The grimoire title is intentionally baked into item 031. The CAST label remains separate as item 062.

## Excluded by design

Battle backgrounds, player artwork, enemy artwork, relic icons, potion icons, and spell icons are not part of this package.

## Preview

`implementation_preview.png` was assembled only from the numbered delivered assets. It is a placement reference, not another source-art image.
