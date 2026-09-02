# Shattermancer UI v2 --- Decision Log

Entries preserve history. Superseded decisions remain recorded.

## UIV2-D001

**Status:** LOCKED-IN-PRINCIPLE pending Gate 000 approval\
**Decision:** Comprehensive UI v2 redesign rather than converting the
whole existing visual system through incremental restyling.

## UIV2-D002

**Status:** LOCKED-IN-PRINCIPLE pending Gate 000 approval\
**Decision:** Modern medium-density dark-fantasy pixel art.

## UIV2-D003

**Status:** PROVISIONALLY LOCKED pending design-system validation\
**Decision:** Pixel artwork targets approximately 360 logical pixels of
horizontal density. Responsive viewport/layout geometry is established
separately.

## UIV2-D004

**Status:** LOCKED-IN-PRINCIPLE pending Gate 000 approval\
**Decision:** Pixel art is authored natively with intentional pixel
clusters/hard edges, not made by pixelating painterly art.

## UIV2-D005

**Status:** LOCKED-IN-PRINCIPLE pending Gate 000 approval\
**Decision:** Complete specification, art-free wireframes, geometry,
stress testing and asset requirements precede production UI art.

## UIV2-D006

**Status:** LOCKED-IN-PRINCIPLE pending Gate 000 approval\
**Decision:** Each substantial v2 screen is built separately beside v1
and replaces it only after validation.

## UIV2-D007

**Status:** LOCKED-IN-PRINCIPLE pending Gate 000 approval\
**Decision:** Existing game logic/state/data may be reused. Legacy
visual DOM/CSS/layout is functional evidence only, not v2 visual
authority.

## UIV2-D008

**Status:** LOCKED-IN-PRINCIPLE pending Gate 000 approval\
**Decision:** Migration occurs screen-by-screen rather than through one
simultaneous game-wide visual cutover.

## UIV2-D009

**Status:** APPROVED --- owner-approved future v2 requirement, discovered during
Phase 0 Group 3 review\
**Decision:** Meaningful persistent enemy effects (Burn, Frozen, Bleed, Weak,
Vulnerable and similar) receive **visible status/debuff icons beneath the enemy
stat box**, with a **count** where the effect persists for turns or stacks, and
a **press-and-hold tooltip** explaining the effect.\
**Scope note:** exact icon art, spacing, aggregation, ordering and terminology
are deferred to the appropriate later UI phase. Current production communicates
most of these effects through toast/text/FX only; this decision describes the
intended v2 treatment, **not** current behaviour.

## UIV2-D010

**Status:** APPROVED --- owner correction, Phase 0 Group 3\
**Decision:** Battle must support **enemies changing the required Incantation
length during an encounter**. Sequence length must not be specified or built as
fixed for the duration of a fight.\
**Scope note:** current enemies generally use 3--5 runes, but that range is
observed data, not a constraint.

## UIV2-D011

**Status:** APPROVED --- Phase 0 Group 3\
**Decision:** The **four-spell carry maximum is governing, including in
Sandbox**. Sandbox must not override it.\
**Scope note:** the current Sandbox override is recorded as an implementation
discrepancy, not an accepted behaviour.

## UIV2-D012

**Status:** APPROVED --- Phase 0 Group 3, reaffirming the Group 2 capacity lock\
**Decision:** **Six vials is the governing Apothecary maximum**; standard
capacity is three. No combination of modifiers may exceed six.\
**Scope note:** current production can reach seven, and a seventh vial is
additionally **inaccessible in Battle** because only six sockets render. Both are
implementation discrepancies. Owner direction: Bottomless Satchel should not be
offered during an Apothecary run.

## UIV2-D013

**Status:** APPROVED --- Phase 0 Group 3\
**Decision:** **Boss encounters are permitted to modify fundamental Battle
rules** --- turn flow, information rules, Incantation behaviour or length, wards,
intent and other core systems. Boss requirements must be **specified
individually** rather than reduced to one universal boss pattern.\
**Scope note:** The Chorus's Rotate/Veil/Swap/Ward cycle is one example, shown
through the existing intent region. It must not be generalised.

## UIV2-D014

**Status:** APPROVED --- Phase 0 Group 3\
**Decision:** **Tutorial Battle is permitted controlled departures from normal
Battle rules** so systems are taught in the intended order. Tutorial must not be
forced to conform to normal Battle assumptions merely for UI-system uniformity.\
**Scope note:** the exact tutorial sequence is reserved for a separate later
owner review.

## UIV2-D015

**Status:** APPROVED --- owner correction, Phase 0 Group 3\
**Decision:** **Audio and haptics are planned release systems, not current
completed functionality.** Code-level audio trigger points and
`navigator.vibrate` references are **hooks and partial implementation evidence
only**. Neither may be documented or specified as an active finished system.\
**Scope note:** later work maps sounds and haptic feedback to the existing
trigger moments.

## Candidate idea intentionally not locked

**Idea:** Major interfaces should feel like things the wizard physically
possesses, studies, manipulates or conjures rather than generic floating
HUD furniture.\
**State:** EXPLORATORY\
**Destination:** Phase 1 --- Visual Identity.
