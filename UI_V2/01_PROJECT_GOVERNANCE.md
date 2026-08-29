# Shattermancer UI v2 --- Project Governance

**Gate:** 000\
**Status:** REVIEW CANDIDATE

## 1. Authority hierarchy

When sources conflict:

1.  locked UI v2 decisions and approved phase documents
2.  approved screen specifications
3.  approved wireframes
4.  approved machine-readable geometry contracts
5.  approved asset manifest
6.  approved production art
7.  validated v2 implementation
8.  current production game as functional/behavioral evidence
9.  historical references
10. conversation history and assistant memory

A later authority supersedes an earlier one only through change control.

## 2. Repository roles

**`Shattermancer-art`** is design/reference authority. `UI_V2/` stores
governance, specifications, geometry, manifests, validation and approved
art-production references.

**`Shattermancer`** is production/game authority: current playable game,
logic, state, data and production assets. Production never loads runtime
files from `Shattermancer-art`.

## 3. Roles

**Project owner:** final approval authority for gates, locked design
decisions, art acceptance, cutovers and changes to locked decisions.

**ChatGPT design partner:** structures phases, audits completeness,
develops proposals/specifications, identifies missing states/assets,
reviews visuals, maintains decision discipline, and prepares
implementation/art instructions. It must distinguish EXPLORATORY,
PROPOSED and LOCKED.

**Claude implementation partner:** implements approved authority and
audits the production repo. It may identify conflicts and measure
runtime behavior, but must not silently redesign approved requirements.

## 4. Decision states

-   **EXPLORATORY:** idea/mockup; no authority.
-   **PROPOSED:** defined candidate awaiting approval.
-   **LOCKED:** explicitly approved and authoritative.
-   **SUPERSEDED:** formerly locked, replaced by a later approved
    decision; history retained.
-   **REJECTED:** explicitly declined.

Nothing becomes locked because it appeared in a mockup, was recommended,
was convenient for code, survived several chats, or already exists in
old art.

## 5. Phase gates

Every phase has entry criteria, required work, prohibited work,
deliverables and completion criteria. No phase advances without explicit
owner approval.

## 6. Change control

To change locked authority: 1. identify the affected decision/spec; 2.
explain why it is insufficient; 3. identify downstream impact; 4.
propose replacement; 5. obtain owner approval; 6. mark old decision
SUPERSEDED; 7. create a new decision ID; 8. update affected authority;
9. rerun affected validation.

Never rewrite history to make it appear cleaner.

## 7. v1/v2 isolation

For substantial redesigns: - v1 remains functional reference/fallback; -
v1 visual DOM/CSS/layout is frozen except necessary maintenance; - v2
receives clean visual structure and one authoritative geometry system; -
state/data/game logic may be deliberately reused; - v2 does not
accumulate correction layers over v1; - obsolete v1 visuals are removed
only after validated cutover.

**Hard rule: A redesign may not add a new geometry override layer to an
existing screen. More than one authoritative geometry source is a hard
failure.**

## 8. Geometry before art

Required order: 1. requirement 2. information hierarchy 3. art-free
wireframe 4. geometry contract 5. stress test 6. asset manifest 7.
production art 8. implementation 9. visual validation

Art may expose a geometry problem, but geometry is formally revised
rather than locally patched.

## 9. Art authority

A generated image is not automatically production art. Production art
requires a manifest role, dimensions, states, runtime-content
boundaries, transparency/scaling rules, explicit approval and
provenance/version.

## 10. Functional reuse

Preserve proven logic where appropriate: combat, saves, progression, map
generation, shop behavior, spell data and navigation. Visual
implementation is not preserved merely because it is entangled with
logic.

## 11. Validation

Validator PASS is evidence, not aesthetic approval. Use both objective
checks and visual review. Mathematical centering does not override
obvious optical misalignment.

## 12. Scope discipline

Later-phase ideas go to `03_IDEA_PARKING_LOT.md`. Discussion is allowed;
premature locking/implementation is not.

## 13. Naming

-   Decisions: `UIV2-D###`
-   Screens: `screen.<name>`
-   Components: `<screen>.<region>.<component>`
-   Assets: `<screen-or-global>.<system>.<asset>`
-   Major checkpoints: `ui-v2-<gate-or-phase>-<description>`

## 14. Approval

No magic phrase is required. Clear owner intent such as "approved",
"lock this", or "move to the next phase" is sufficient. If ambiguous, do
not advance.

## 15. Completion

UI v2 is complete only when required screens are cut over, required
states validated, no production dependency remains on superseded v1
visuals, legacy-removal audit passes, documentation matches production,
and the owner approves the final gate.
