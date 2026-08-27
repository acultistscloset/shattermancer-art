# Placement Notes

## Authoritative orientation

- Source axis: **+X**
- Source motion: **left-to-right**
- Leading knot: **right side**
- Baked trail: **left side**
- Runtime rotation: **−30° around cell center**
- Runtime destination: **diagonally up-right**
- Mirroring: **never**

## Playback and anchor

- Read frames left-to-right, then top-to-bottom.
- Play at 24 fps and loop frame 8 back to frame 1.
- Draw the complete 256 × 256 cell at 120 × 120 pixels.
- The knot/pivot remains fixed at **(128, 128)** in every source cell.
- Move that pivot across the approximately 250-pixel flight path; do not move the baked trail independently.
- Apply element tint to the complete sprite. The production art is intentionally white, ivory, pale antique gold, and light gray so it can tint both lighter and darker elements.
