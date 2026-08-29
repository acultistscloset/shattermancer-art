# Phase 0 Inventory Schema

Every screen or UI surface must receive one record.

## Required identifiers

-   `screen_id`
-   `screen_name`
-   `screen_type`
    -   full_screen
    -   overlay
    -   modal
    -   panel
    -   transient_state
    -   transition
    -   unknown
-   `implementation_files`
-   `entry_points`
-   `exit_routes`

## Screen purpose

-   player-facing purpose
-   when it appears
-   whether it is required, optional, debug-only, or legacy
-   whether it is reachable in current production

## Regions

For every major visible region:

-   `region_id`
-   role
-   implementation evidence
-   visibility condition
-   scrollable: yes/no
-   persistent across states: yes/no
-   dynamic children: yes/no

## Controls

For every interactive control:

-   `control_id`
-   label / visual identity
-   input type
-   tap/click behavior
-   enabled conditions
-   disabled conditions
-   selected/pressed/locked states
-   navigation or game action triggered
-   implementation evidence

## Dynamic content

For every runtime value or runtime-generated label:

-   `field_id`
-   type:
    -   text
    -   integer
    -   decimal
    -   icon
    -   image
    -   list
    -   status
    -   progress
    -   timer
    -   other
-   source/state variable if identifiable
-   expected range if identifiable
-   empty state
-   max-length / overflow risk if identifiable
-   implementation evidence

## Visual states

List all known variants, including:

-   default
-   selected
-   pressed
-   disabled
-   locked
-   empty
-   loading
-   error
-   success
-   damaged
-   full
-   depleted
-   hidden
-   modal-open
-   tutorial
-   first-run
-   returning-run
-   other conditionals

Only include states supported by evidence. Mark inferred states
explicitly.

## Navigation

Record:

-   inbound routes
-   outbound routes
-   back behavior
-   modal close behavior
-   conditional navigation
-   resume/continue behavior
-   destructive confirmation behavior

## Scrolling / sizing

Record:

-   scroll axis
-   scroll container
-   fixed-height assumptions
-   viewport dependencies
-   safe-area handling
-   known responsive behavior
-   clipping/overflow mechanisms
-   implementation evidence

## Existing art dependencies

For every referenced asset:

-   asset path
-   asset filename
-   role
-   screen/region using it
-   static/dynamic
-   shared/unique
-   state-specific variant
-   implementation reference
-   confidence level

## Animation / transitions

Record any UI-relevant:

-   entrance
-   exit
-   press
-   reveal
-   combat transition
-   screen transition
-   animated icon/effect
-   timed state
-   animation file or CSS/JS reference

## Game-state dependencies

Record underlying state/data dependencies such as:

-   run state
-   player HP
-   shield
-   mana
-   currency
-   discipline/class
-   spell inventory
-   relic inventory
-   potion inventory
-   map state
-   boss state
-   tutorial state
-   save/continue state
-   settings
-   other state variables

## Evidence classification

Every non-obvious claim should be marked:

-   `VERIFIED_CODE`
-   `VERIFIED_ASSET_OR_CONFIG`
-   `VERIFIED_ROUTE`
-   `INFERRED`
-   `UNKNOWN_RUNTIME_CHECK_REQUIRED`

## Audit notes

Each screen record must include:

-   `legacy_or_unused_candidates`
-   `possible_duplicate_implementations`
-   `implementation_ambiguities`
-   `runtime_checks_needed`
-   `missing_evidence`
