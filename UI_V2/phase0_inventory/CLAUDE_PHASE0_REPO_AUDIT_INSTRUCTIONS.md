# Claude Instruction --- Phase 0 Production Repository Audit

You are auditing the production `Shattermancer` repository for
**Shattermancer UI v2 Phase 0: Complete Game Inventory**.

This is a forensic inventory task.

## Do not redesign or modify the game

Do **not**: - redesign UI; - refactor code; - change CSS; - change
geometry; - create v2 screens; - rename assets; - delete legacy files; -
"clean up" implementation; - make aesthetic recommendations; - infer
intended future design.

Your job is to document what currently exists.

## Authority

Use the production `Shattermancer` repository as evidence for current
implementation and behavior.

Do not use `Shattermancer-art` as proof of production behavior unless a
production file explicitly references a copied runtime asset.

## Required first pass

Before writing the inventory, inspect the repository broadly enough to
identify:

1.  application entry points;
2.  screen/router/navigation code;
3.  major UI containers;
4.  CSS/style sources;
5.  assets directories;
6.  game-state/data modules;
7.  save/load and continue logic;
8.  modal/overlay systems;
9.  debug/development-only screens or controls;
10. alternate or duplicate implementations that may still exist.

Do not assume the first obvious file is the only implementation.

## Evidence standard

For every meaningful claim classify evidence as:

-   `VERIFIED_CODE`
-   `VERIFIED_ASSET_OR_CONFIG`
-   `VERIFIED_ROUTE`
-   `INFERRED`
-   `UNKNOWN_RUNTIME_CHECK_REQUIRED`

Do not present inference as fact.

If a state appears possible from code but reachability is unclear, say
so.

If code and assets disagree, record the conflict.

## Required outputs

Create all of these under:

`Shattermancer-art/UI_V2/phase0_inventory/`

### 1. `PHASE0_REPO_AUDIT_REPORT.md`

Include: - repository structure relevant to UI; - main entry points; -
routing/navigation model; - styling model; - asset-loading model; -
state-management model; - save/load model relevant to UI; -
duplicate/legacy implementation findings; - anything that may cause the
inventory to be incomplete.

### 2. `PHASE0_SCREEN_INVENTORY.json`

Use `PHASE0_SCREEN_INVENTORY_TEMPLATE.json` as the schema.

Populate one record for every discovered: - full screen; - modal; -
overlay; - persistent panel; - transient UI state; - transition surface
that has meaningful art/UI requirements.

Do not collapse distinct states if they require meaningfully different
UI/art.

### 3. `PHASE0_SCREEN_INVENTORY.md`

Human-readable companion to the JSON.

Organize by screen.

For each screen include: - ID/name/type; - reachability/status; -
implementation files; - purpose; - regions; - controls; - dynamic
values; - states; - navigation; - scrolling/sizing; - assets; -
animations; - game-state dependencies; - unknowns.

### 4. `PHASE0_NAVIGATION_MAP.md`

Document every known navigation path.

Use a readable flow format, for example:

`Main Menu -> Discipline Selection -> Map -> Battle`

Also capture: - conditional paths; - back paths; - continue/resume
paths; - modal overlays; - run-ending/reset paths; - settings paths; -
debug-only paths.

### 5. `PHASE0_ASSET_DEPENDENCIES.md`

Inventory all current production UI art dependencies.

For each: - path; - filename; - consuming screen/component; - role; -
whether shared; - state variant; - whether actively referenced; -
evidence.

Separate: - definitely active; - possibly active; - unreferenced/legacy
candidates.

Do not delete anything.

### 6. `PHASE0_UNKNOWNS.md`

Central unresolved list.

Every item must have: - ID: `P0-U###` - question/unknown; - why
repository inspection cannot settle it; - affected screen/system; -
recommended runtime check; - blocking or non-blocking.

## Completeness checks

Before declaring the audit complete, explicitly search for likely screen
concepts and systems, including at minimum:

-   main menu / continue / new run
-   discipline/class selection
-   map
-   battle
-   shop/sanctum
-   character
-   spells
-   talents
-   settings
-   grimoire/insight
-   rewards
-   victory
-   defeat/death/run end
-   confirmation dialogs
-   tutorial/help/legend overlays
-   pause/back behavior
-   loading/transitions
-   debug/dev UI
-   save/resume states

Do not assume all of these exist. Record "not found" when appropriate.

## Duplicate implementation check

Search specifically for: - old and new battle implementations; - old CSS
layers; - alternate screen containers; - unused-but-referenced assets; -
duplicate IDs/classes; - dormant code paths; - old routing branches.

The purpose is inventory, not cleanup.

## Final summary

End `PHASE0_REPO_AUDIT_REPORT.md` with:

-   total full screens found;
-   total overlays/modals found;
-   total transient/conditional UI states found;
-   total active UI asset dependencies found;
-   total possible legacy/duplicate implementations;
-   total runtime checks required;
-   blocking unknown count.

Then state exactly one of:

`PHASE 0 REPO AUDIT: READY FOR OWNER/DESIGN REVIEW`

or

`PHASE 0 REPO AUDIT: NOT READY — REPOSITORY AUDIT INCOMPLETE`

Do not claim Phase 0 itself is approved. Only the project owner can
approve the phase.
