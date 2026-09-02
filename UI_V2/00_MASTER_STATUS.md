# Shattermancer UI v2 --- Master Status

**Current Phase:** PHASE 0 --- COMPLETE GAME INVENTORY\
**Status:** IN PROGRESS\
**Last Approved Gate:** Gate 000 --- Project Governance\
**Last Approved Checkpoint:** `ui-v2-000-project-governance`\
**Next Approval Checkpoint:** `ui-v2-phase0-approved`

## Current objective

Produce a complete evidence-based inventory of the existing production
game before any v2 redesign decisions begin.

## Phase 0 rule

This phase is **audit only**.

Do not: - redesign screens; - choose final UI metaphors; - define final
visual styling; - commission production art; - implement v2 screens; -
change final geometry.

## Phase 0 owner-review tracker

| group | scope | status |
|---|---|---|
| Group 1 | Entry & Onboarding | **APPROVED** |
| Group 2 | The Path and Between-Battle Flow | **APPROVED** |
| Group 3 | Battle / Combat Surface | **APPROVED** |
| Group 4+ | remaining groups | not yet reviewed |

**Phase 0 overall: IN PROGRESS.** Approval of individual review groups does not
approve the phase.

**Next work:** the next owner-review group. **Not Phase 1.**

### Unknowns

- **Closed previously:** P0-U001 to U004 in the blocking-unknown resolution
  pass; **P0-U008** in the later classification-integrity pass.
- **Closed by the Group 2 update: P0-U007** — a resolved static-audit miss. The
  persistence system was verified on reinspection: `rw_save_v1` profile,
  `rw_run_v1` active run, `RUNSAVE.store()` from `showMap()`, The Path as the
  active-run checkpoint.
- **Opened by the Group 2 update: P0-U010** — a narrow verification of the exact
  boss/act-transition full-heal behaviour.
- **Open, non-blocking: 4** — P0-U005, P0-U006, P0-U009, P0-U010.
  *(Before Group 2 the open set was U005, U006, U007, U009 — also four.)*
- **Blocking unknowns: 0.**

### Decisions

`02_DECISION_LOG.md` now holds **UIV2-D001 to D015**. **D009--D015 were added by
the Group 3 review**: enemy status/debuff icons, dynamic Incantation length, the
four-spell maximum in Sandbox, the six-vial Apothecary maximum, boss rule
latitude, Tutorial rule latitude, and audio/haptics as planned rather than
completed systems.

## Current required work

1.  Run the production-repo audit using the Phase 0 schema.
2.  Review Claude's evidence-backed inventory.
3.  Resolve unknowns/omissions.
4.  Build the definitive screen/navigation/state inventory.
5.  Complete the Phase 0 gate review.
6.  Obtain explicit owner approval before Phase 1 begins.

## Required Phase 0 deliverables

-   `PHASE0_SCREEN_INVENTORY.md`
-   `PHASE0_SCREEN_INVENTORY.json`
-   `PHASE0_NAVIGATION_MAP.md`
-   `PHASE0_ASSET_DEPENDENCIES.md`
-   `PHASE0_UNKNOWNS.md`
-   `PHASE0_REPO_AUDIT_REPORT.md`
-   `PHASE0_GATE_REVIEW.md`
-   `PHASE0_OWNER_REVIEW.md` *(added --- records each owner-review group)*

## Authority

The production `Shattermancer` repository is evidence for current
behavior and implementation.

Phase 0 documents describe what currently exists. They do not become v2
design authority for appearance merely because something exists in v1.
