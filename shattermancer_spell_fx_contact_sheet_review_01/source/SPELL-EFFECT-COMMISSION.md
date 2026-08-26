# SHATTERMANCER — SPELL EFFECT SEQUENCES
### 17 animated sprite sheets for casting. Companion to ART PACK SPECIFICATION.

Read the main specification first. **§0 of that document applies: this changes
what appears on screen, so deliver the CONTACT SHEET described in §3 below and
stop for review before drawing a single finished frame.**

---

## 1. WHAT THIS IS FOR

The player builds an incantation from runes and casts it at a creature. Today
that is a few coloured clouds gathering at the wright's staff and sliding across
the screen. It should be **the best moment in the game** — the payoff for the
deduction that preceded it.

The cast has three stages, and you are drawing all three:

| stage | where | how long |
|---|---|---|
| **CHARGE** | at the head of the wright's staff | ~940ms, looping |
| **TRAVEL** | crossing to the creature | ~400ms, looping |
| **IMPACT** | on the creature | ~500ms, plays once |

**The impact is what the player watches.** It gets the most art and the most
variety; travel is shared and tinted.

---

## 2. THE OUTCOME BRANCH — the most important idea in this document

The game already knows how the incantation landed before the bolt arrives. The
impact must **show the player their result before they read a single marker.**

| result | what it means | what it must look like |
|---|---|---|
| **Fracture** — one or more | at least one rune was right, in the right place | the full elemental burst. Loud, bright, satisfying |
| **Resonate only** | right runes, all in wrong places | a looser, weaker scatter. It connected, but did not bite |
| **ALL RESIST** | nothing was right | **A FIZZLE.** See below |
| **Shatter** | the whole sequence, perfect | rare and unmistakable |

### The fizzle deserves your best work

It is the only outcome the player does **not** want to see, so it has to feel
like a small punishment — not a quiet version of a success.

**Draw it as a failure of the magic itself.** The bolt loses cohesion, guts,
sputters, and drops. Colour drains toward grey. It should read as *wet, ugly and
brief*. No flash, no shockwave, nothing satisfying. If a player sees the fizzle
and thinks "that looked cool", it is wrong.

---

## 3. DELIVER THE CONTACT SHEET FIRST

Before any finished art:

- **One image per stage** — three images total — showing your intended frame
  breakdown as rough thumbnails on a grid, labelled with frame numbers.
- Rough is correct. Silhouettes and blocked colour, no rendering.
- Include the **fizzle** and the **Shatter** in the impact sheet: those two set
  the emotional range and are the ones most likely to need discussion.
- A short note on any frame count you want to change from §5.

**Then stop.** Seventeen sequences is a great deal of work to redo because a
frame breakdown was wrong.

---

## 4. FORMAT — sprite sheets, not separate files

Each sequence is **one PNG containing every frame in a grid**, read left to
right, top to bottom. The game plays it by stepping a background position, which
is why the grid must be exact.

- **Uniform cells.** Every frame occupies exactly the same box.
- **Fill the sheet.** No blank trailing cells — the grid must be full.
- **The subject is centred in its cell** and does not drift between frames
  unless the drift is the animation.
- **RGBA, straight alpha, no matte.** The main spec's rules apply.
- **Do not trim frames individually.** The cell is the unit; trimming per frame
  destroys the alignment the whole technique depends on. *(This inverts the main
  spec's trimming rule, exactly as it did for the numerals.)*

State the grid in the manifest, per file:

```json
"fx_impact_fire.png": {
  "frames": 12, "cols": 4, "rows": 3,
  "cell": [320, 320], "fps": 24, "loop": false
}
```

---

## 5. THE FILES

### 5.1 Charge — 6 files, one per element

`fx_charge_<element>.png` — **12 frames, 4×3, cell 256×256**

Drawn at 150×150 on screen, at the head of the wright's staff. **Loops** for
about 940ms while the incantation gathers, so **frame 12 must flow back into
frame 1 with no seam.**

This is the element *forming*: coalescing, gathering, building pressure. It
should look like something being made, not something already made.

### 5.2 Travel — 1 shared file

`fx_travel_bolt.png` — **8 frames, 4×2, cell 256×256**

Drawn at 120×120, crossing about 250px diagonally in 400ms. **Loops.**

**Draw this ELEMENT-NEUTRAL** — white and pale gold, a compact travelling knot of
force with motion trailing behind it. The game tints it to the dominant element
of the incantation, so anything strongly coloured will tint badly. Keep the
values bright; a dark bolt cannot be tinted lighter.

### 5.3 Impact — 6 files, one per element

`fx_impact_<element>.png` — **14 frames, 7×2, cell 320×320** (sheet 2240×640)

Drawn at 190×190, centred on the creature, plays **once** over ~500ms.

This is the full-strength result — what a Fracture looks like. It should be the
loudest thing in the game: the element arriving with force and consequence.
Begin at the moment of contact; do not draw the approach, the travel sequence
has already done that.

### 5.4 The universal four

| file | frames | grid | cell | notes |
|---|---|---|---|---|
| `fx_fizzle.png` | 12 | 4×3 | 256×256 | see §2. Element-neutral, draining to grey |
| `fx_shatter.png` | 14 | 7×2 | 320×320 | the perfect incantation. Rare, unmistakable, ideally suggesting something breaking |
| `fx_shockwave.png` | 10 | 5×2 | 384×384 | an expanding ring, white-hot to transparent. Element-neutral, tinted by the game |
| `fx_hitflash.png` | 6 | 3×2 | 320×320 | a brief white silhouette flash over the creature. Element-neutral |

**Total: 17 sheets.** Six charge, one travel, six impact, four universal.

Every grid above divides exactly — 12 into 4×3, 8 into 4×2, 14 into 7×2, 10 into
5×2, 6 into 3×2 — so no sheet has a trailing empty cell. Whole set is roughly
18 megapixels, about 1-2 MB as WebP: smaller than three battle backdrops.

---

## 6. THE SIX ELEMENTS — non-negotiable

> **fire · water · nature · lightning · ice · shadow**

- **ice is the snowflake.** There is no "frost".
- **water is water** — wave, current, droplet. Visibly wet.
- Never `plant`, `electricity`, `frost` or `crystal` in a filename.

Every element-keyed set contains exactly these six, named with these ids:
`fx_impact_water.png`, `fx_charge_ice.png`.

Each element's charge and impact must be recognisable as **the same magic at two
moments** — a player who sees the charge should not be surprised by the impact.

---

## 7. TIMING AND MOTION

- **24fps.** Frame counts above are built around it; a 12-frame loop is 500ms,
  played twice during the charge.
- **The first and last frames of a LOOPING sequence must join seamlessly.** The
  charge and the travel bolt both loop; the impact, fizzle, shatter, shockwave
  and hitflash play once and may end on empty.
- **Sequences that play once should end at zero opacity or empty**, so the game
  never has to fade them out and lose your final frames.
- Motion should have **weight**: ease into the action, hold the strongest frame
  a beat longer than the rest, then dissipate.

---

## 8. WHAT THE GAME DOES, SO YOU NEED NOT

- **Tints** the travel bolt, the shockwave and the hit flash per element
- **Shakes the screen** on a Fracture, scaled to damage
- **Desaturates briefly** on a fizzle
- **Chooses** which impact plays, from the incantation's result
- **Positions** everything — draw each sequence centred in its cell and nothing
  else

Do not draw numbers, text, UI, the creature, or the wright. The creature is
whatever the run has put there and the sequences must work over any of them.

---

## 9. DELIVERY

- `fx/` with the 17 sheets flat inside it.
- `docs/assets_manifest.json` — filename, width, height, sha256, and the grid
  block from §4 for every file.
- `docs/placement_notes.md` — anything about where a sequence expects to sit.
- **Order: contact sheets first and stop. Then the six CHARGE sheets and stop
  again.** The charge set will show whether the loop seam, the cell alignment
  and the element read are all landing before eleven more sheets are drawn.
- End with the `COMPLIANCE CHECK` from the main spec, confirming explicitly:
  the grid is stated per file, frames are not individually trimmed, looping
  sequences seam cleanly, and the element set is the six above.

---

## 10. TERMINOLOGY

**Fracture** — right rune, right place. **Resonate** — right rune, wrong place.
**Resist** — not in the sequence. **Echo** — the sequence holds more of that rune
than you cast. **Shatter** — a perfect incantation. **Incantation** — the
sequence being cast. **The wright** — the player's figure.
