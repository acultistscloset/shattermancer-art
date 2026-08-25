# Implementation Guide

The approved portrait composition reserves roughly the upper 45–50% for the battle viewport. Keep the enemy HUD in the upper-left, currency and settings in the extreme upper-right, incoming-action banners immediately above the lower-right player HUD, and the center of the viewport unobstructed for character artwork.

## Health bars

Place the empty track first. Clip the matching full-fill asset horizontally according to `currentHealth / maximumHealth`. The fill should shrink from right to left while the left edge remains fixed. Apply the corresponding technical mask if the implementation needs rounded or irregular painted ends.

## Ward row

Place the six icons in this order: Fire, Ice, Plant, Electricity, Frost, Shadow. Render the variable ward number adjacent to or beneath each icon.

## Grimoire

Item 031 is the complete book background with the title built in. Place item 032 across the lower interior of both pages, then place item 033 over its left edge. Item 034 is the optional focused-input overlay. Clip game-written incantations with item 037.

## Element and mana rows

Use one copy of item 039 for each of the six elemental buttons. Stack the selected, pressed, or disabled state above the base and place the elemental icon last. Place one mana track beneath each element and horizontally clip its matching full-fill asset from zero to the variable maximum.

## Potions and casting

The CAST backplate and CAST label are separate. Place three empty potion sockets on each side of the button. Potion artwork added later should appear above the socket but beneath selection or pressed overlays.

## Spells

Use item 066 as the four-slot harness and place exactly four copies of item 067. Future spell art, cost, name, and elemental data sit above the blank slot. State overlays sit above the future spell art unless a specific effect must remain visible.
