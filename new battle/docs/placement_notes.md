# Final placement notes

Reference screen: 440 × 956 points. The active region begins below the 62-point top safe area and ends above the 34-point bottom safe area.

| Region | Vertical range | Notes |
|---|---:|---|
| Battle | y 62–492 | 430 points; stage art and status rails. |
| Lower interface | y 492–922 | 430 points; full-size Grimoire, controls, CAST row, and spell cards. |
| Bottom safe area | y 922–956 | Keep free of required content. |

The Grimoire draws at 424 × 241 points from x=8 to x=432 and y=472 to y=713, overlapping the battle/lower boundary by 20 points. Do not shrink the book. The final 848 × 482 production asset is the 2× source.

| Asset/context | Final drawing rule |
|---|---|
| Grimoire title | `GRIM` and `OIRE` follow the top page curve and approach the gutter with a minimal visible gap; no letter is hidden by the binding. |
| `INCANTATION` heading | Centered on the exposed left writing sheet, whose measured center is x=233 in the 848-pixel asset. |
| `INSIGHT` heading | Centered on the exposed right writing sheet, whose measured center is x=615 in the 848-pixel asset. |
| Insight legend | 40 × 40 pixels centered at x=733, y=105 in the 848 × 482 Grimoire asset. |
| Parchment strip | Draw across the lower page spread in the existing strip slot; the wax seal overlaps its left end. |
| Shared elements | Preserve aspect ratio; one element per casting button. Use the same six files at every documented size. |
| CAST label | Center the 252 × 52 label in the 376 × 88 plate without stretching it. |
| Spell cards | Four 98-point drawn cards; insert the separately approved spell illustration, name, and cost at runtime. |

State overlays align exactly to their corresponding base canvas. Do not trim or independently reposition an overlay whose purpose is state alignment.

## Player and enemy health/shield composition

| Piece | Use |
|---|---|
| `health_bar_frame.png` | Scale proportionally into the panel's declared health slot. It is the visible empty trough and border. |
| `health_bar_fill.png` | Place within the frame's declared fill inset and reveal from left to right using `current health ÷ maximum health`. Do not horizontally squash the texture to represent partial health. |
| `shield_badge.png` | Draw once inside each panel's shield slot. Center the separately rendered shield value in the declared safe field. |

Recommended 2× preview sizes: enemy health frame 289 × 19 pixels; player health frame 239 × 19 pixels; shield badge 48 × 48 pixels in either panel. Runtime values are not baked into any of these assets.
