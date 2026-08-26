# SHATTERMANCER — ART PACK SPECIFICATION
### Give this document to any AI or artist producing assets for the game.

Shattermancer is a dark-fantasy deduction card game for iPhone. Assets are
delivered as a folder of PNGs plus documentation, then integrated by a separate
engineer (Claude) who maps them onto the game's code. **You never need to see or
reference the code — this document is the contract.**

---

## 0. WIREFRAME FIRST — WHENEVER LAYOUT IS INVOLVED

**If a request produces or changes anything's position, size, or arrangement on
screen, deliver a WIREFRAME first and stop for review.** Do not draw a single
finished asset until the layout is approved.

That covers: a full screen redesign, a new screen, a new panel, a new control, a
piece that must sit somewhere it did not before, or a replacement whose shape
differs from what it replaces. **It does not cover** a straight reskin — new art
at the identical size and position as the piece it replaces — which needs no
wireframe.

**If unsure whether a request involves layout, produce the wireframe.** It costs
minutes. Getting it wrong the other way costs an art pass.

### What a wireframe is

A layout drawing, not art.

- **One image at the target screen size**, matching the real device.
- **Grey boxes and plain labels.** No texture, no colour, no rendering, no mood,
  no lighting. If it looks like a picture, it is not a wireframe.
- **Every piece as a labelled rectangle**, at its true proportion and its true
  place — `ENEMY FRAME`, `CAST`, `SPELL CARD 1`.
- **Bands or regions marked** down one side with their heights.
- **Safe areas marked** at top and bottom.
- **Slots drawn inside each frame** — where a name goes, where a bar goes, where
  a number sits. These are the coordinates the manifest will need later, so
  drawing them now is the same work done earlier.

Alongside the image, a short note listing anything you propose changing from the
brief, with numbers.

### Then stop

Wait for approval before drawing anything. A wireframe takes minutes to redraw;
an art pass takes days. Every disagreement about arrangement is cheaper at this
stage than at any stage after it.

---

## 1. TERMINOLOGY — use these words exactly

| Use this | Never these |
|---|---|
| **Shatter** (a perfect incantation) | perfect guess, solve |
| **Aurels** (currency) | gold, aether, coins |
| **the wright** (player character) | wizard, hero, player sprite |
| **The Path** (map screen) | map, overworld |
| **Sanctum** (shop) · **Camp** (rest node) | store, campfire |
| **Grimoire** (the spell book in battle) | journal, log |
| **discipline** (a playable class) | class, character |
| **vial** (a potion) | potion is acceptable; vial preferred |
| **relic** | artifact, trinket |
| **incantation** (the sequence being built) | guess, combo |

The seven disciplines: **Pyromancer, Cryomancer, Warlock, Apothecary,
Hexweaver, Alchemist, Diviner.**

## 2. THE SIX ELEMENTS — this has caused real bugs

The game's elements, by exact id:

> **fire · water · nature · lightning · ice · shadow**

- **ice is the snowflake.** There is no "frost".
- **water is water** (wave, droplet, current — visibly wet). There is no
  second cold element.
- Never name anything **plant** (use *nature*), **electricity** (use
  *lightning*), **frost** (use *ice*), or **crystal**.

Any set keyed by element (icons, meters, auras) must contain **exactly these
six**, named with these ids, e.g. `ward_icon_water.png`.

## 3. FILE REQUIREMENTS

- **PNG, RGBA, straight (non-premultiplied) alpha.**
- **Trim to the subject.** No transparent padding around the painted area — a
  strip painted 86px tall in a 216px canvas ships at the wrong shape. The
  canvas edge should touch the art.
  - *Exception:* state overlays (§5) share one canvas per control.
- **Anti-aliased edges.** Hard-cut single-bit alpha looks jagged. A healthy
  file has many partially-transparent edge pixels.
- **No baked checkerboards, no white or black mattes**, no halo of the old
  background color.
- Deliver **large**: 1000–2100px on the long edge is ideal. Downscaling is
  handled at integration.
- **Baked lettering is allowed but must be declared** in the manifest
  (`"baked_text": "GRIMOIRE"`), because the game must then suppress its own
  label or it prints twice.

## 4. NAMING AND STRUCTURE

- Filenames: **lowercase, digits, underscores** — `013_ward_icon_water.png`.
  Numbered prefixes welcome. No spaces, capitals, or special characters.
- Group into folders by screen region (`02_enemy/`, `05_grimoire/`, …).
- Include `docs/assets_manifest.json`, one entry per file:
  `filename, relative_path, width, height, sha256, repeat_count`,
  plus `baked_text` where applicable and a one-line `role` description.
  *(The previous pack's manifest format was excellent — reuse it.)*

## 5. INTERACTIVE CONTROLS AND STATES

For each control, separate files on a **shared canvas size** so they align
when layered:

- `*_default` — the resting state (full art)
- `*_pressed`, `*_selected_overlay`, `*_disabled_overlay`, `*_locked_overlay`
  — overlays contain **only what changes**, transparent elsewhere.

Masks (health-fill masks, clip masks) share the canvas of the art they mask,
white = keep, transparent = discard.

## 6. TARGET SCREEN

- Reference device: **iPhone 16 Pro Max, 440 × 956 points, portrait, @3x.**
- Battle screen bands, top to bottom (current build): scene ≈ 24%, grimoire
  ≈ 30%, casting (element buttons + CAST) ≈ 21%, spell rack ≈ 14%. The top
  59px and bottom 34px are system safe areas — keep critical art out of them.
- **A full-screen implementation preview PNG is required** (any size at
  2.17:1, e.g. 880 × 1912). Pieces may be roughly placed; say so if they are.
  The preview communicates *intent* — it is not measured against.

## 7. WHAT NOT TO PRODUCE

- **No implementation guides that reference code** — no HTML ids, CSS
  classes, JS functions, or file paths inside the game. You can't see the
  codebase, so any code you name will be wrong and has caused rework.
  Describe placement in plain language and screen percentages instead.
- **No code files.** No renaming schemes tied to "the engine". No invented
  asset categories — the engineer assigns those.
- **Don't re-deliver unchanged files** in an update; send only what changed,
  in an `updates/` folder, with a line saying what each file replaces.

## 8. ONE-PARAGRAPH SUMMARY (for quick prompts)

> If layout is involved at all, WIREFRAME FIRST — grey boxes, real proportions,
> slots marked — then stop for approval before drawing anything.
> PNG/RGBA, straight alpha, trimmed to subject, anti-aliased edges, no mattes.
> Elements are exactly fire/water/nature/lightning/ice/shadow — ice is the
> snowflake, water is wet, no frost/plant/electricity. Lowercase_underscore
> names, folders by region, manifest with sha256 and any baked text declared.
> States as overlays on a shared canvas. Target iPhone 16 Pro Max 440×956
> portrait. Include a 2.17:1 preview. Describe placement in percentages —
> never reference the game's code.
