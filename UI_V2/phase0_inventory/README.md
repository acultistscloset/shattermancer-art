# Phase 0 --- Complete Game Inventory

This folder contains the working instruments for auditing the current
production game.

## Workflow

1.  Give `CLAUDE_PHASE0_REPO_AUDIT_INSTRUCTIONS.md` to Claude while
    Claude has access to the production `Shattermancer` repository.
2.  Claude must populate the requested outputs using repository
    evidence.
3.  Claude must distinguish:
    -   VERIFIED FROM CODE
    -   VERIFIED FROM ASSET/CONFIG
    -   INFERRED
    -   UNKNOWN / REQUIRES RUNTIME CHECK
4.  Bring Claude's completed output back for review.
5.  We compare it against known game behavior and resolve
    missing/ambiguous items.
6.  Only after the inventory is complete do we prepare the Phase 0 Gate
    Review.

## Important

Claude is not being asked to redesign, refactor, fix, or improve
anything in this phase.

The task is forensic inventory.
