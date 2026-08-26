# Compliance Check

1. Element ids are exactly `fire`, `water`, `nature`, `lightning`, `ice`, and `shadow`. Ice is represented by a six-armed snowflake; water is reserved for visibly wet water imagery.
2. Static PNG assets are trimmed to their painted subjects. State overlays share one canvas per control or aligned figure.
3. PNG assets are RGBA with straight alpha, anti-aliased edges, transparent RGB cleared to black, and no baked matte or checkerboard.
4. Documentation describes placement in plain language and screen percentages. It contains no references to game source code.
5. Every fixed painted letter string is declared in the manifest under `baked_text`.
6. The delivery contains the required update folder, region folders, machine-readable manifest, replacement list, and two 2.17:1 previews.

Deviations: none. The unchanged full-screen study background is intentionally omitted from this update.
