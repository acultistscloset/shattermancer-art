# SHATTERMANCER — SPELL ICON & NUMERAL COMMISSION
### 78 spell icons + 16 numerals. Companion to ART PACK SPECIFICATION — every rule in that document still applies.

Read the main specification first. File format, straight alpha, trimming,
anti-aliased edges, lowercase_underscore naming, the manifest, and the six
element ids (**fire, water, nature, lightning, ice, shadow**) are unchanged.

---

## WHAT THESE ARE

Spell icons appear on **spell cards** in the player's rack at the bottom of the
battle screen — four slots, each about **98 × 98 px** on the phone, with the
spell's name and cost printed beneath the icon. In the battle rack, the painted
spell artwork should be presented at approximately **60–68 px**, occupying most
of the card's visual area while preserving room for the live name and cost.

The same icons also appear smaller elsewhere, so every design must remain
recognizable at **40 px**. The battle-rack presentation is larger; 40 px remains
the minimum legibility test rather than the preferred battle-rack display size.

They also appear, smaller, in the Sanctum shop and the spellbook.

## THE HARD CONSTRAINT

- **One idea per icon.** A player glances at four cards mid-fight and must tell
  them apart in under a second. Detail that only resolves at full size is worse
  than useless — it becomes noise when the artwork is reduced.
- **Strong silhouette.** If the icon is unreadable as a solid black shape, it is
  unreadable on a spell card.
- **One dominant colour per icon**, taken from its element (below), plus at most
  one accent. Icons that share an element should share a palette so a player
  learns "blue-white means Ice" without being told.
- **No text, no numerals, no thin outlines, no fine filigree.**
- Consistent light source: **upper-left.**

## ELEMENT PALETTES

| element | colour | feel |
|---|---|---|
| fire | orange-red into yellow | heat, embers, motion |
| water | deep blue into cyan | flow, depth, clarity |
| nature | green into gold | growth, thorn, leaf |
| lightning | gold-yellow into white | speed, fracture, arc |
| ice | pale blue into white | crystal, stillness, edge |
| shadow | violet into near-black | void, rot, ill omen |
| gold | brass and amber | wealth, transmutation |

## FILE REQUIREMENTS

- **PNG, RGBA, straight alpha, trimmed to the subject, 512 × 512.**
- Square. The painted subject's longest dimension should fill approximately
  **88–92% of the 512 × 512 canvas**, with only a narrow transparent safety
  margin. Prefer a broad visual mass that occupies most of the usable icon area,
  but do not distort an intentionally vertical or diagonal silhouette merely to
  fill both dimensions.
- Exact filenames as given in the tables below — they are the game's own ids and
  a rename means the icon does not load.

## DELIVERY

- One folder, `spell_icons/`, all 78 files flat inside it.
- `docs/assets_manifest.json` — filename, width, height, sha256, and a one-line
  `role` per file.
- **Deliver in batches of 10, by discipline, and stop after the first batch for
  review.** Seventy-eight icons in one pass is seventy-eight chances to repeat a
  mistake. The Pyromancer set first.
- End every delivery with the `COMPLIANCE CHECK` section from the main spec.

## HOW TO READ THE TABLES

**"what it does"** is the game's own rule text — the mechanical truth. Draw the
*fantasy* of it, not a diagram of the rule. "Deal 6 damage for every Fracture in
your last incantation" should look like a storm of arcane force, not six marks.

**"paid in"** names the element a spell is bought with, for palette purposes.
**No cost NUMBER is given, and none should be drawn.** Costs change during a run
— relics discount them, upgrades raise them, a discipline can pay in either of
its two elements — so the number is printed by the game at runtime from the
numeral set commissioned in the next section. An icon with a number baked into
it would be wrong the moment the player found their first relic.

Where a spell's element differs from its discipline's, the **element wins** for
palette. Spellstorm belongs to the Pyromancer but is a Lightning spell: it is
gold and white, not orange.

---

### Pyromancer (Fire)

| file name | spell | paid in | what it does |
|---|---|---|---|
| `icon_spell_fireball.png` | **Fireball** | fire | Deal 12 direct damage. |
| `icon_spell_combustion.png` | **Combustion** | fire | Your next incantation deals +10 damage, however it lands. |
| `icon_spell_spellstorm.png` | **Spellstorm** | lightning | Deal 6 damage for every Fracture in your last incantation. |
| `icon_spell_wall_of_flame.png` | **Wall of Flame** | fire | For 3 turns, the creature burns itself for 6 whenever a blow of its actually lands on you. |
| `icon_spell_meteor.png` | **Meteor** | fire | Falls for 2 turns, then lands for 20, plus 4 for every Fracture you scored while it fell. |
| `icon_spell_ashfall.png` | **Ashfall** | fire | 3 damage at the end of every enemy turn, for the rest of the fight. Each cast stacks another 3. |
| `icon_spell_cinderveil.png` | **Cinderveil** | fire | Gain Block equal to the ash already settled on the creature. It burns both ways. |
| `icon_spell_pyre.png` | **Pyre** | fire | Consume every stack of ash at once, for three times what it would have burned for. |
| `icon_spell_scorch_mark.png` | **Scorch Mark** | lightning | Burn one position. You learn only whether the rune there runs hot (Fire, Lightning) or cold. |
| `icon_spell_fan_the_flames.png` | **Fan the Flames** | fire | Your next incantation deals 2 more for every Fire rune you place in it. |

### Cryomancer (Ice)

| file name | spell | paid in | what it does |
|---|---|---|---|
| `icon_spell_overcharge.png` | **Overcharge** | ice | The enemy skips its next action. |
| `icon_spell_frost_armor.png` | **Frost Armor** | ice | Gain 10 Block. It soaks the blow and deals back whatever breaks through — and rather than melting away, half of it carries into the next turn. |
| `icon_spell_freeze.png` | **Freeze** | ice | Your next incantation grants the enemy no Resistance. |
| `icon_spell_symmetry_ward.png` | **Symmetry Ward** | water | Gain 6 Block for each different element in your prepared incantation. |
| `icon_spell_glacial_prison.png` | **Glacial Prison** | ice | Freeze one position for 4 turns — nothing can rotate, swap or re-form it. Whatever you set against that slot both bites the creature and shields you: hardest for a Fracture, least for a Resist. |
| `icon_spell_cone_of_cold.png` | **Cone of Cold** | ice | The creature's next action is held back a turn. The cold does not bite at once — it sinks in, and strikes when the creature finally moves. |
| `icon_spell_whiteout.png` | **Whiteout** | ice | For 3 turns the creature cannot raise a ward at all, however wrongly you guess. |
| `icon_spell_thaw.png` | **Thaw** | water | Melt your armour into power: every 2 Block becomes 1 mana of a chosen element. |
| `icon_spell_hailstorm.png` | **Hailstorm** | ice | Deal 4 damage for every hold you already have on the creature — frozen slots, freezes, whiteouts and held blows alike. |
| `icon_spell_permafrost.png` | **Permafrost** | ice | For 3 turns the creature's wards cannot rise above a single level, however wrongly you guess. |

### Warlock (Necromancy)

| file name | spell | paid in | what it does |
|---|---|---|---|
| `icon_spell_dark_bargain.png` | **Dark Bargain** | shadow | Pay 19 health, once per encounter. The dark lays bare one slot of the sequence — and it chooses which. |
| `icon_spell_wither.png` | **Wither** | shadow | Pay 8 HP. Every ward on the creature becomes 3 damage, and is stripped away. |
| `icon_spell_raise_thrall.png` | **Raise Thrall** | shadow | Pay 7 HP. For 3 turns a thrall repeats your last incantation each turn at half force. It does not notice if the sequence moves. |
| `icon_spell_carrion_debt.png` | **Carrion Debt** | shadow | Pay 10 health for 24 damage — the heaviest blow in the game, and the deepest hole to stand in. |
| `icon_spell_exsanguinate.png` | **Exsanguinate** | shadow | Deal damage equal to four fifths of the health you have spent on your own spells this fight. |
| `icon_spell_rotting_touch.png` | **Rotting Touch** | shadow | Deal 6, and for 3 turns every ward the creature holds decays by one. The rot is the point, not the blow. |
| `icon_spell_life_tap.png` | **Life Tap** | shadow | Draw 6 Shadow out of your own blood for 6 health, once each turn. The ledger remembers, and the creature's fall repays it. |
| `icon_spell_grave_bolt.png` | **Grave Bolt** | shadow | Deal 14. No blood, no bargain — simply what the Shadow is for. |
| `icon_spell_gravecall.png` | **Gravecall** | shadow | The dead answer in proportion to what you have given: learn one rune for every 10 health your magic has taken this fight, to a maximum of three. |
| `icon_spell_hemorrhage.png` | **Hemorrhage** | shadow | The wound will not close. For the rest of this encounter, every point of health your own magic takes also deals 2 damage. |

### Apothecary

| file name | spell | paid in | what it does |
|---|---|---|---|
| `icon_spell_decoction.png` | **Decoction** | nature | Brew a random vial on the spot. |
| `icon_spell_catalysis.png` | **Catalysis** | water | The next vial you drink this turn takes effect twice. |
| `icon_spell_panacea.png` | **Panacea** | nature | Brew two random vials and heal 6. |
| `icon_spell_alkahest.png` | **Alkahest** | water | Name an element. Its ward dissolves entirely, and the creature can never ward that element again this fight. |
| `icon_spell_grand_elixir.png` | **Grand Elixir** | nature | Combine the first two vials in your satchel into one draught: both effects, at double strength. |
| `icon_spell_poultice.png` | **Poultice** | nature | Heal 4 for every vial in your satchel. A full satchel is worth more than a fought-for potion. |
| `icon_spell_sublimate.png` | **Sublimate** | nature | Boil a vial away to nothing and take 6 mana of a chosen element from the vapour. |
| `icon_spell_shatterflask.png` | **Shatterflask** | water | Hurl a vial instead of drinking it. It breaks for damage according to what was in it — a searing draught bites far harder than a flask of mana. |
| `icon_spell_taste_test.png` | **Taste Test** | water | Name a position. Learn whether that rune appears anywhere else in the sequence — the only way in the game to test for a repeated note. |
| `icon_spell_reagent_reading.png` | **Reagent Reading** | nature | Set a reagent against one position. The reading is exact — but it will not be ready until next turn. |

### Hexweaver

| file name | spell | paid in | what it does |
|---|---|---|---|
| `icon_spell_doom_mark.png` | **Doom Mark** | shadow | Lay 4 Curse, and every Resist this turn lays 3 more. |
| `icon_spell_hex.png` | **Hex** | shadow | Apply 9 Curse at once. Deliberate malice outweighs the accidental kind — Curse gnaws at the end of each of the creature's turns. |
| `icon_spell_blight.png` | **Blight** | nature | Double the Curse already on the creature. |
| `icon_spell_rupture.png` | **Rupture** | shadow | Consume every Curse on the creature for 2 damage each. No bonus — but no waiting. |
| `icon_spell_evil_eye.png` | **Evil Eye** | shadow | Mark one position. Resist there and it lays 9 Curse; Fracture there and the whole stockpile ruptures early. |
| `icon_spell_effigy.png` | **Effigy** | nature | For 3 turns, the creature takes half of every blow that lands on you. |
| `icon_spell_ill_omen.png` | **Ill Omen** | shadow | Your next Resist curdles threefold — deliberate misfortune, rather than the accidental kind. |
| `icon_spell_withering_gaze.png` | **Withering Gaze** | shadow | The Curse stops gnawing and simply waits. The next time the creature acts, it takes the whole of it at once. |
| `icon_spell_scryed_ruin.png` | **Scryed Ruin** | shadow | Look for the flaw rather than the answer: learn whether the rune you have placed there would Resist. |
| `icon_spell_tithe_of_woe.png` | **Tithe of Woe** | shadow | Sell 5 Curse back for 4 Shadow. Misery is a currency like any other — but every stack you spend here is one Rupture will not have. |

### Alchemist

| file name | spell | paid in | what it does |
|---|---|---|---|
| `icon_spell_distil.png` | **Distil** | water | Render 4 mana into 30 Aurels. Must be paid in mana — Aurels cannot buy Aurels. |
| `icon_spell_gold_shard.png` | **Gold Shard** | gold | Hurl your own wealth. Deals 22 damage and spends the Aurels for good. |
| `icon_spell_midas_touch.png` | **Midas Touch** | gold | Deal 1 damage for every 5 Aurels you still hold. A full purse is a weapon in itself. |
| `icon_spell_philosophers_stone.png` | **Philosopher's Stone** | gold | For the rest of this fight, every Fracture yields double  |
| `icon_spell_debasement.png` | **Debasement** | water | Strip every ward from the creature and take 12 Aurels for each level. Its defences become your funds. |
| `icon_spell_transmute.png` | **Transmute** | water | Convert 4 mana of your fullest pool into 3 of a chosen element. Some is always lost in the change. |
| `icon_spell_assay.png` | **Assay** | gold | Buy the answer outright. Learn the exact rune in one position, paid entirely in  |
| `icon_spell_leaden_weight.png` | **Leaden Weight** | gold | Buy yourself a moment. The creature's next blow lands for half, and it raises no ward this turn. |
| `icon_spell_quintessence.png` | **Quintessence** | water | Distil your fortune into health: 3 HP for every 100  |
| `icon_spell_vitriol_ward.png` | **Vitriol Ward** | water | A ward bought by weight: Block equal to a tenth of your  |

### Diviner

| file name | spell | paid in | what it does |
|---|---|---|---|
| `icon_spell_scrying_pool.png` | **Scrying Pool** | water | Name a position. Learn whether the rune you have placed there would Fracture. |
| `icon_spell_flow.png` | **Flow** | water | Reload your last incantation with two positions swapped. |
| `icon_spell_spark.png` | **Spark** | lightning | Name an element. Learn whether it appears anywhere in the sequence. |
| `icon_spell_revelation_cascade.png` | **Revelation Cascade** | lightning | Reveal two runes of the sequence at once. |
| `icon_spell_foresight.png` | **Foresight** | lightning | See the exact rune in one position. |
| `icon_spell_prophecy.png` | **Prophecy** | lightning | Declare how many Fractures your next incantation will score. Be right and it strikes for 10 plus 6 each; be wrong and nothing happens. |
| `icon_spell_sands_of_time.png` | **Sands of Time** | water | Undo every ward your last incantation raised, as though you had never said it. |
| `icon_spell_convergence.png` | **Convergence** | water | Everything you have learned this fight turns on the creature: 4 damage for every rune you have revealed. |
| `icon_spell_certainty.png` | **Certainty** | water | Stake the rune you have placed in one position. If it is right, it strikes for 15. If not, nothing. |
| `icon_spell_fate_sealed.png` | **Fate Sealed** | lightning | For 4 turns the sequence cannot re-form, rotate or change length. What you know stays true. |

### Shared pool (any discipline may find these)

| file name | spell | paid in | what it does |
|---|---|---|---|
| `icon_spell_base_metal.png` | **Base Metal** | gold | Spend 30 Aurels to brew a random vial on the spot. |
| `icon_spell_bloom.png` | **Bloom** | nature | Your next incantation generates double mana from Resonates. |
| `icon_spell_charnel_pact.png` | **Charnel Pact** | shadow | Pay 12 health for 10 Shadow, once per encounter. No mana changes hands — only blood. |
| `icon_spell_corrosive.png` | **Corrosive Flask** | ice | Deal 8 damage and strip one level from every ward. The stripping is the point; the damage is a courtesy. |
| `icon_spell_corruption.png` | **Corruption** | shadow | Name an element. The enemy's Resistance to it drops to zero. |
| `icon_spell_malediction.png` | **Malediction** | shadow | For one turn, your Fractures lay Curse as well as your Resists. Nothing you say is wasted. |
| `icon_spell_regrowth.png` | **Regrowth** | nature | Heal 8 HP. |
| `icon_spell_second_death.png` | **Second Death** | shadow | Pay 10 health for 11 damage. Should it finish the creature, every drop you have spent comes back. |

---

## NOTES ON PARTICULAR GROUPS

**Ash spells** (Ashfall, Cinderveil, Pyre) are a chain — ash accumulates, then
burns. They should read as a family: the same ash motif at three intensities.

**Approved Ashfall correction:** the current Ashfall art is a broad,
wind-driven diagonal fall of soot and cooling ash with restrained ember traces.
It must not use the superseded rounded canopy, hanging tendrils, hairy texture,
or any silhouette that reads as a squid, jellyfish, mushroom cloud, or creature.
The replacement `icon_spell_ashfall.png` supersedes the original Pyromancer
batch version; its current hash and replacement relationship are recorded in
the Ashfall update manifest.

**Ward and armour spells** (Frost Armor, Symmetry Ward, Vitriol Ward, Cinderveil)
all grant Block. A shared shielding motif, elementally coloured, helps the player
find defence in a hurry.

**Information spells** (Scrying Pool, Foresight, Prophecy, Assay, Reagent
Reading, Third Eye, Scorch Mark, Revelation Cascade) reveal parts of the hidden
sequence. These are the Diviner's identity and the game's core loop — they
deserve the most distinct silhouettes of all, because a player casting them is
thinking, not fighting.

**Blood spells** (Life Tap, Exsanguinate, Charnel Pact, Second Death, Dark
Bargain) cost the caster health. A visual tell that a spell hurts you to cast —
a shared red note, a wound, a price — would do real work.

**Gold spells** (Midas Touch, Gold Shard, Philosopher's Stone, Base Metal,
Debasement, Leaden Weight) trade in Aurels, the game's currency. Brass and amber
throughout.

## TERMINOLOGY (per the main spec)

**Fracture** — right rune, right place. **Resonate** — right rune, wrong place.
**Resist** — not in the sequence. **Echo** — the sequence holds more of that rune
than you cast. **Shatter** — a perfect incantation. **Aurels** — the currency.
**Incantation** — the sequence being built. **Insight** — the markers returned.

---

# PART TWO — THE NUMERAL SET

Spell costs are printed **live** by the game, not drawn into the icons. They
change constantly: relics discount them, upgrades raise them, a discipline can
pay in either of its two elements, and gold-priced spells run as high as **55**.
So the game needs a small set of drawn numerals it can compose at runtime.

## WHAT TO DELIVER

**Sixteen files**, in a folder `numerals/`:

| files | what |
|---|---|
| `num_0.png` … `num_9.png` | the ten digits |
| `num_aurel.png` | the Aurels mark — currently the placeholder ✦ |
| `num_health.png` | the health mark, for spells paid in blood |
| `num_substitute.png` | the substitute-mana mark — currently ◇ |
| `num_slash.png` | a divider, for "current / maximum" |
| `num_plus.png` · `num_minus.png` | for modifiers |

## THE CRITICAL REQUIREMENT — READ THIS TWICE

**Deliver every numeral as a SOLID WHITE SHAPE on transparency.**

No colour, no gradient, no gold, no bevel, no inner shadow. Pure white
(#FFFFFF) at full opacity where the glyph is, fully transparent everywhere else,
with anti-aliased edges.

This is not a simplification — it is what makes them work. The game prints a
cost in one of **four states**, and it colours the numerals itself:

| state | colour | when |
|---|---|---|
| normal | warm parchment | you can pay |
| discounted | green | a relic has cut the price |
| unaffordable | red | you cannot pay |
| substitute | dimmed | paying with the wrong element |

A pre-coloured gold numeral cannot become red. Delivered as white silhouettes,
the game uses them as masks and tints them per state — one set of files covering
all four. **If they arrive gold and beveled, the entire set is unusable.**

The *shape* is where the character lives: give them a carved, slightly worn,
old-world numeral form with weight and a strong silhouette. Think engraved stone
rather than a typeface.

## METRICS — these matter more than the drawing

- **512 × 512 px canvas, PNG, RGBA.**
- **Tabular width: every digit must occupy the SAME width**, including `1`.
  A cost changing from 4 to 10 must not make the card's text jump.
- **Common baseline and cap height across all ten digits.** Set them on a shared
  guide and do not trim each file to its own ink — trim the SET to one box.
  *(This is the one place the main spec's "trim to subject" rule does not
  apply. Trim the set uniformly, not each glyph.)*
- Digits should fill about **70% of the canvas height**, centred, with the same
  air above and below on every file.
- The marks (`aurel`, `health`, `substitute`, `slash`, `plus`, `minus`) share
  that cap height so they sit level beside a digit.

## SIZE IN PLAY

Costs are printed at roughly **10 px tall** on a spell card. Two to three
characters sit side by side, e.g. `4🔥` or `55✦`. At that size a numeral is
about ten pixels of ink: **legibility beats ornament, every time.** If a `6` and
an `8` are hard to tell apart at 10px, the set has failed regardless of how it
looks at full size.

## DELIVERY

`numerals/` flat, plus the manifest entries in the same `docs/assets_manifest.json`.
Deliver the numerals **first**, before any spell icons — they are sixteen files,
they unblock the whole cost display, and they will show immediately whether the
white-silhouette requirement was understood.
