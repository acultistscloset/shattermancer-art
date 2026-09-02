# Phase 0 — Owner Review

Owner review of the Phase 0 inventory, recorded group by group. This file
records **owner findings**, which are authoritative for intent, alongside
production evidence, which is authoritative for current behaviour. Where the two
disagree, the disagreement is preserved rather than resolved.

---

## Group 1 — Entry & Onboarding — **APPROVED**

Reviewed 2026-08-29.

### Main Menu

The Main Menu supports **New Game**, **Continue Run** and **Abandon Run**.

**Continue Run** returns the player to their current or most recent position on
The Path.

*Production corroboration:* `VERIFIED_CODE`. The primary menu slot replaces
itself — New Game with no run present, Continue with one — and an "Abandon this
journey?" confirmation leads to a control that abandons the run and starts anew.

### First-ever player onboarding

```
New Game -> Tutorial -> Discipline Selection
         -> initial Talent selection (when applicable) -> The Path
```

**The initial Tutorial defaults the player to Pyromancer.**

### Subsequent new runs

```
New Game -> Discipline Selection
         -> initial Talent selection (first time using that discipline only)
         -> The Path
```

### Abandon Run

Abandons the active run and returns the player into the new-run flow, **beginning
at Discipline Selection**.

### First use of a discipline

On the first use of a particular discipline, the player is pushed into **Talents**
to select the initial three talents before the run begins.

**Current production allows the player to back out of this initial
Talent-selection state.** The owner has identified this as behaviour that should
change in v2. **This document does not describe production as already enforcing
the requirement.** The desired future behaviour is recorded in
`03_IDEA_PARKING_LOT.md` as *Mandatory first-discipline Talent onboarding* — a
future requirement, not a locked v2 decision.

### Screens confirmed separate

- **Character** — a character/stat screen, accessible from The Path.
- **Spells (loadout)** — a **separate full screen**, accessible from The Path,
  **not part of pre-run onboarding**. It manages carried spells, normally capped
  at four.

*Production corroboration:* `VERIFIED_CODE`. Both are reached from the Map tool
row; `showCharacter` never references the carried-spell state and never calls
the loadout screen.

---

## P0-U007 — owner evidence, and an unresolved discrepancy

**Owner finding:** the game **does** have active-run persistence from the
player's perspective. It is not believed to use an explicit save-file/load-file
mechanism. The owner reports the run is persisted through **browser data**, and
can therefore be **lost if browser or site data is cleared**.

**Production evidence, unchanged:** the audit found no save/resume symbols —
no `SAVE_KEY`, `loadRun`, `saveRun`, `continueRun` or `hasSave` — and the only
`localStorage` keys written are two tutorial flags. No `indexedDB`,
`sessionStorage`, `document.cookie`, Cache API or `navigator.storage` usage was
found. **A Continue control demonstrably exists in the menu code.**

**No specific browser-storage API is claimed here**, because production code does
not prove one.

**Status: P0-U007 remains OPEN as a production-evidence discrepancy requiring
reconciliation.** It is *not* closed, and it is *not* concluded that save/resume
is absent — the owner observes working persistence and the menu code contains a
Continue path, so the mechanism exists and the audit has not yet located it.

**Recommended reconciliation:** with a run in progress, inspect the browser's
storage panel and record which store holds run state, then trace the production
symbol that writes it.

---

## Groups not yet reviewed

Group 2 onward are pending. This file will be extended as each group is
reviewed. **Phase 0 is not approved by this document** — only the project owner
approves the phase, group by group.

---

## Group 2 — The Path and Between-Battle Flow — **APPROVED — Owner approval received**

Reviewed 2026-08-29.

### The Path

- The Path is the **between-node hub and active-run checkpoint**.
- `RUNSAVE.store()` writes the active run on entry to `showMap()`.
- Continue restores the active run and returns to The Path.
- Presentation is the **RPG-like over-the-shoulder view**.
- A previously designed **full-map presentation was intentionally SUPERSEDED**
  by the over-the-shoulder design. It is **not** a missing feature and must not
  be carried forward as one.
- Destination selection is **two-stage**: select destination/seal, then Confirm.
- **Far See** is an implemented temporary look-ahead, **not** a full-map
  replacement.

### Node types — exactly six

1. Creature · 2. Elite · 3. Sanctum · 4. Camp · 5. Treasure · 6. Boss

Other node concepts discussed historically were **discontinued/superseded** and
are not to be restored merely because they appear in earlier discussion.

### Camp

Choices: **Rest · Study · Brew**. `restBrews` is a **relic-triggered bonus** on
Camp completion, **not** a fourth choice.

### Sanctum

- **3 relic offerings**; **only 1 relic may be purchased per visit**.
- **Reroll does not reset** the one-relic allowance.
- Reroll **refreshes both** relic and vial inventory.
- **4 base vial offerings**, one **guaranteed** from a healing-capable/mending
  pool.
- **Multiple vials** may be purchased while carrying capacity permits.
- Relics and vials use **rarity-weighted generation**.
- **Relic selling is intended and may remain.** It is **not** classified as
  legacy and **not** listed as a discrepancy.
- Owner caution: individual relic/item names and effects found in older audits
  **may be stale** and require current-code verification before becoming design
  authority.

### Capacity locks

| | value |
|---|---|
| normal vial maximum | **3** |
| Apothecary vial maximum | **6** |
| relic maximum | **8** |

The current implementation can allow Apothecary to reach **7**, which conflicts
with the approved maximum. **Owner direction: Bottomless Satchel should not be
offered during an Apothecary run.** Regardless of how individual modifiers are
implemented, **6 remains governing** and future combinations must not exceed it.

### Post-battle

- Ordinary victory → normal node-reward handling.
- Elite victory → the elite/relic-reward branch.
- **Bosses award Veilglass / Talent-tree currency; they do not grant spells.**
- Defeat → Run Summary.
- Acts I and II transition into the next act; **Act III completion ends the run**.
- **No separate persistent player-facing Victory screen** exists between battle
  completion feedback and the subsequent reward/progression route.

### Boss / act healing — verification item retained

The owner recalls and expects a **full heal** associated with boss defeat and/or
the beginning of a new act. **This is not converted into an implementation fact
here.** The exact current rule requires a narrow trace: whether the heal is
unconditional or conditional, and whether it occurs in `bossDefeated`,
`beginAct`, another transition, or several places. Recorded as **P0-U010**.

**This item does not revoke Group 2 approval.**

### Spells / Loadout

- Live Path destination is **Spells/Loadout via `showLoadout`**, not
  `showSpellbook`.
- **Carried** and **Set Aside** sections.
- Normal carry maximum **4**; minimum carried **1**.
- **Spell acquisition occurs through Talent-tree spell nodes.**
- Bosses award Talent-tree currency rather than spells.
- Loadout copy stating spells are learned by felling a boss is **STALE UI COPY**.
- `showSpellbook` is **owner-confirmed legacy** and must not be counted as a
  current player-facing v2 surface.
- **Sandbox's ability to override spell capacity conflicts with owner
  direction. The carry maximum is 4 even in Sandbox.**

### Talents

- First-use route confirmed through **`mapOrTalents()`**.
- First use of a discipline **pushes the player into Talents**.
- **Current implementation does not enforce completion of the initial three
  selections and allows Back.**
- The parked future requirement stands: first-use onboarding should become
  mandatory until three are selected and explicitly confirmed.
- Spells are granted through Talent-tree spell nodes.
- **Respec exists.**

### Settings

**Legitimate player-facing:** Trials · Record · Glossary

**Development/testing controls:** Dev: Unlock Everything · Layout Probe ·
Inspector

**Trials is a legitimate player feature with a current Back-routing bug.**
Settings opens Trials with `"settings"`; Trials Back does not handle that value.
During a run it misroutes to The Path; with no valid run it can enter the
reload-requiring state the owner reported.

Development/testing controls remain **classified separately** from intended
player features and are **candidates for pre-release cleanup, not v2 feature
requirements**.

### Persistence — reconciled

- `rw_save_v1` = **persistent profile**
- `rw_run_v1` = **active run**
- `RUNSAVE.store()` is called from `showMap()`
- **The Path is the active-run checkpoint**
- Continue uses the active-run save and restores to The Path
- `RUNSAVE.clear()` is used at run termination/abandonment
- **Node progress is not checkpointed mid-encounter**

**P0-U007 — CLOSED: RESOLVED STATIC-AUDIT MISS.** The original audit incorrectly
reported that no persistence model was found. Reinspection of the same
production file verified the system. The original finding and its correction are
both preserved in `PHASE0_UNKNOWNS.md`.

### Known implementation/design discrepancies carried forward

1. Apothecary vial capacity can currently reach **7**, exceeding the approved 6.
2. **Bottomless Satchel should not be offered during Apothecary runs**; 6 remains
   governing.
3. **Sandbox can currently override the four-spell capacity**; it must not.
4. Loadout contains **stale boss-spell-learning text**.
5. **Trials Back routing is incorrect.**
6. First-use Talents allow premature exit; mandatory three-Talent onboarding
   remains a **future requirement**.
7. **Three development/testing controls remain exposed in Settings.**
8. Exact **boss/new-act full-heal** implementation remains to be verified
   (P0-U010).

**Relic selling is NOT a discrepancy.** The owner confirms it is intended and may
remain.

---

## Group 3 — Battle / Combat Surface — **APPROVED — Owner approval received**

Reviewed 2026-08-29.

### Battle architecture

- Creature, Elite, Boss and Tutorial encounters **reuse the same core Battle
  renderer**.
- Encounter-specific data and hooks alter behaviour **without** separate
  ordinary/elite/boss Battle screens.
- Tutorial uses the same underlying surface but **can intentionally override
  ordinary Battle rules**.

### Persistent Battle regions

enemy art/name · enemy HP · enemy block · elemental wards · intent · standing
ability/special text · player discipline/name · player HP · player block · relic
strip · player figure · Aurels/top HUD · Grimoire · Incantation draft · six
rune/element controls · per-element mana · CAST · vial sockets · four spell-card
sockets.

Toasts, banners, floating values, FX, tip cards and pickers are **layered or
transient states, not additional Battle full screens**.

### Turn model

```
beginTurn → free non-turn-ending actions → CAST → resolution
          → enemy response unless suppressed → beginTurn
```

Before CAST the player may manipulate or clear the Incantation, use spells, and
use vials. **None of these normally ends the turn. CAST is the ordinary
turn-ending action.** Invalid or repeated casts are **rejected without advancing
the turn**.

### Incantation length

Current enemies generally use 3–5 runes. **Owner correction: sequence length
must NOT be documented as necessarily fixed for the encounter.** Some enemy
mechanics can intentionally change the required length mid-fight, so **Battle
and v2 must support runtime sequence-length changes.**

### Canonical result language

**Base per-slot player-facing markers:**

| marker | meaning |
|---|---|
| **Fracture** | right rune, right place |
| **Resonate** | right rune, wrong place |
| **Resist** | rune absent from the sequence |

**Special feedback:**

- **Echo** — a **modifier applied to an existing result**, currently a
  doubled-ring treatment.
- **Veiled** — **withheld/substituted** feedback in applicable enemy behaviour.

**Whole-Incantation outcome:** **Shatter** — every base slot is Fracture.

**Internal `exploit` corresponds to player-facing Fracture and must not be
treated as player terminology.**

### Shatter

Distinct success feedback. **Deals calculated damage; it is not automatically
lethal.** Elites, bosses and sufficiently durable enemies may survive one.

### Grimoire

Left page = **Incantation history**; right page = **Insight**. Page-aware empty
messages: *"Your grimoire is blank."* / *"Cast to learn its weakness."* Native
scrolling; historical navigation arrows are absent. **Insight notes persist for
the encounter and can repeat.** Known/revealed/absent information may influence
visible draft and Insight states before a cast.

### Spells in Battle

- **Four physical positions**; fewer carried spells leave **inert/empty**
  positions.
- **Spell use does not normally end the turn**; multiple may be used before CAST
  when mechanics and resources permit.
- Availability may depend on mana, resting/cooldown, lock/seal state and
  spell-specific readiness.
- **Some payment conditions require a blocking choice/picker.**
- The Battle card face currently shows **icon, name and cost**.
- **Mastery and Potency affect mechanics but are not presented on the Battle
  card.**
- The **four-spell carry maximum remains governing. Sandbox must not override
  it**; the current override is an implementation discrepancy.

### Vials in Battle

- **Six physical sockets, 3 left + 3 right.**
- Vial use **does not normally end the turn**; up to **three uses per turn**.
- Some resolve immediately; some require a target/choice picker.
- **Rejected or unusable vials are not consumed.** Successful use consumes the
  vial unless a retention mechanic applies.
- Approved capacities: **standard 3, Apothecary 6.**
- The possible **seventh vial is an implementation discrepancy and is
  additionally inaccessible from Battle, because only six sockets render.**

### Enemy turns / defense

Action categories include **attack, guard and roar**, with additional mechanics
and hooks able to alter normal resolution. **Player and enemy block, and enemy
wards, have dedicated current Battle presentation.**

### Status/debuff presentation — **OWNER-APPROVED FUTURE V2 REQUIREMENT**

Current production communicates many effects **primarily through toast, text and
FX rather than persistent status UI**. The owner has approved a better v2
treatment:

- meaningful persistent enemy effects — **Burn, Frozen, Bleed, Weak, Vulnerable
  and similar** — should receive **visible status/debuff icons**;
- these icons should appear **beneath the enemy stat box**;
- effects persisting for turns or stacks should display an **appropriate
  number/count**;
- **press-and-hold should expose a tooltip** explaining the effect;
- **exact icon art, spacing, aggregation, ordering and terminology are for a
  later UI phase.**

**This is an approved future requirement, not a description of current
production.** No icon system is invented during Phase 0. Recorded as
**UIV2-D009**.

### Boss behaviour

- Bosses reuse the underlying Battle surface but **should not be assumed to obey
  the ordinary combat model rigidly**.
- **Boss mechanics are intentionally allowed to manipulate the rules, structure
  and flow of Battle itself** — turn flow, information rules, Incantation
  behaviour or length, wards, intent, or other fundamental systems.
- The Chorus's **Rotate/Veil/Swap/Ward** cycle is **one boss-specific example**,
  communicated through the existing intent region.
- **Do not generalise that four-phase structure to all bosses.**
- Future Battle specification must inspect boss requirements **individually**
  so rule-breaking mechanics are not lost.

### Tutorial Battle

Uses the core Battle surface with a specifically controlled teaching sequence.
**Tutorial mechanics may intentionally violate or suppress ordinary Battle
rules** so systems are met in the desired order — current examples include
gating controls and suppressing ordinary enemy turns. The owner will review the
exact tutorial sequence separately. **Tutorial must not be forced to conform to
normal Battle assumptions merely for UI uniformity.**

### Transient/modal systems

| surface | classification |
|---|---|
| toast | transient / non-blocking |
| banner | transient / non-blocking |
| floating damage/heal/block text | transient / non-blocking |
| FX layer | transient / non-blocking |
| tip card | dismissible overlay / tip state |
| picker | **blocking modal** |

**No new full-screen records are created for these.**

### Audio — **owner correction**

Production contains **coded audio hooks and call sites**, but **actual game audio
assets and implementation are not yet in the game**. Audio is intentionally
planned as one of the later development steps.

- Battle has **planned, code-level audio trigger points**.
- **Current game audio must NOT be described as implemented or active merely
  because calls exist.**
- Later audio work will map sounds to those moments.

### Haptics — **owner correction**

Vibration/haptic feedback **is intended for release but is not currently active
or implemented** as finished gameplay feedback. `navigator.vibrate` references
are **hooks / partial implementation evidence, not proof of an active polished
haptic system**.

### Development/legacy separation

Live Battle uses the current **`assets/battle/`** namespace. Abandoned
**Battle2** assets are **not** current player-facing dependencies. **Gate 4
chrome remains parked/unshipped.** `battle-layout` / `layout-studio` /
`wireframe` remain development/diagnostic surfaces.

### Known Battle-related discrepancies / carried requirements

1. **Apothecary can currently exceed the approved vial max of 6.**
2. **A seventh carried vial cannot be accessed** in the six-socket Battle UI.
3. **Sandbox can currently override the four-spell carry maximum**; it must not.
4. **Internal `exploit` must never surface as player terminology**; the
   player-facing term is **Fracture**.
5. **Current persistent status visibility is insufficient** for approved v2
   direction — see UIV2-D009.
6. **Battle must support enemies changing Incantation length** during an
   encounter — see UIV2-D010.
7. **Boss encounters may intentionally alter fundamental Battle rules** and must
   be reviewed individually — see UIV2-D013.
8. **Tutorial may intentionally break normal combat rules** and needs its own
   later detailed review — see UIV2-D014.
9. **Audio trigger hooks exist; actual audio implementation remains future
   work** — see UIV2-D015.
10. **Haptics/vibration are intended for release but are not an active finished
    system** — see UIV2-D015.
