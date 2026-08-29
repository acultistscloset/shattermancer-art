# Phase 0 Owner/Design Review Checklist

Use this after Claude returns the repository audit.

## Completeness

-   [ ] Every known full screen appears.
-   [ ] Every known modal/overlay appears.
-   [ ] Run-ending/victory/defeat states are accounted for.
-   [ ] Settings/help/tutorial surfaces are accounted for.
-   [ ] Character/spells/talents support screens are accounted for.
-   [ ] Battle-specific sub-surfaces and Grimoire states are accounted
    for.
-   [ ] Shop/sanctum/reward states are accounted for.
-   [ ] Map variants/navigation states are accounted for.
-   [ ] Continue/new-run/reset paths are accounted for.
-   [ ] Debug-only UI is clearly separated from production UI.

## Evidence

-   [ ] Inferred behavior is not presented as verified.
-   [ ] Unknown runtime behavior is listed in `PHASE0_UNKNOWNS.md`.
-   [ ] Duplicate/legacy candidates are recorded but not deleted.
-   [ ] Asset references are tied to consuming screens/components.

## Design-discipline check

-   [ ] No redesign decisions were introduced.
-   [ ] No art was commissioned.
-   [ ] No v2 implementation was started.
-   [ ] Existing appearance is not being treated as future authority.

## Gate readiness

Phase 0 cannot be approved while blocking unknowns remain.
