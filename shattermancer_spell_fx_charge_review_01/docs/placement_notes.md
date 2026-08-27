# Placement Notes

## Sheet decoding

- Read frames left-to-right, then top-to-bottom.
- Each cell is exactly 256 × 256 pixels.
- Playback is 24 fps and loops from frame 12 to frame 1.
- Drawn review size is 150 × 150 pixels.
- Pivot/attachment point for every frame is the exact cell center: **(128, 128)**.
- Keep the source sheet orientation unchanged. Charge has no travel-facing rotation.

## Layering

1. Render the wright and the wright's real staff.
2. Resolve the staff-head world position.
3. Center the current 256 × 256 charge cell on that position.
4. Apply the game's normal sprite scaling to reach the 150 × 150 display size.

The brown staff is intentionally absent from every production frame. Never add or reconstruct it from the effect artwork.
