# Shattermancer UI v2 --- Master Status

**Document role:** Primary project ledger and restart point\
**Gate:** 000 --- Project Governance\
**Status:** GATE 000 REVIEW --- NOT YET LOCKED\
**Design source of truth:** `Shattermancer-art/UI_V2/`\
**Production source of truth:** `Shattermancer/`

## Current checkpoint

Candidate: `ui-v2-000-project-governance`

## Current phase

**PRE-PHASE --- PROJECT GOVERNANCE**

## Next required action

Review and explicitly approve or revise Gate 000. After approval:
**PHASE 0 --- COMPLETE GAME INVENTORY**.

## Do not begin yet

-   production UI art
-   v2 screen implementation
-   individual-screen visual redesign
-   final geometry
-   final asset commissioning
-   legacy UI removal

## Initial decisions

  ----------------------------------------------------------------------------------------
  ID                      Decision                                 Status
  ----------------------- ---------------------------------------- -----------------------
  UIV2-D001               Comprehensive UI v2 redesign, not        LOCKED-IN-PRINCIPLE
                          game-wide incremental restyling          

  UIV2-D002               Medium-density dark-fantasy pixel-art    LOCKED-IN-PRINCIPLE
                          direction                                

  UIV2-D003               Approx. 360 logical pixels horizontal    PROVISIONALLY LOCKED
                          art density; viewport geometry defined   
                          separately                               

  UIV2-D004               Pixel art authored natively, not         LOCKED-IN-PRINCIPLE
                          post-pixelated painting                  

  UIV2-D005               Specification/wireframe/geometry/asset   LOCKED-IN-PRINCIPLE
                          requirements precede production UI art   

  UIV2-D006               v2 screens built separately beside v1    LOCKED-IN-PRINCIPLE
                          and swapped only after validation        

  UIV2-D007               Reuse appropriate game logic/state;      LOCKED-IN-PRINCIPLE
                          legacy visual DOM/CSS is not v2 visual   
                          authority                                

  UIV2-D008               Migration occurs screen-by-screen, not   LOCKED-IN-PRINCIPLE
                          as one global visual cutover             
  ----------------------------------------------------------------------------------------

These become formally `LOCKED` only when Gate 000 is approved.

## Phase ledger

    Phase Name                      Status        Checkpoint
  ------- ------------------------- ------------- --------------------------------
      000 Project Governance        REVIEW        `ui-v2-000-project-governance`
        0 Complete Game Inventory   NOT STARTED   `ui-v2-phase0-approved`
        1 Visual Identity           NOT STARTED   `ui-v2-phase1-approved`
        2 Global Design System      NOT STARTED   `ui-v2-phase2-approved`
        3 Screen Specifications     NOT STARTED   `ui-v2-phase3-approved`
        4 Art-Free Wireframes       NOT STARTED   `ui-v2-phase4-approved`
        5 Geometry Contracts        NOT STARTED   `ui-v2-phase5-approved`
        6 Stress Testing            NOT STARTED   `ui-v2-phase6-approved`
        7 Complete Asset Manifest   NOT STARTED   `ui-v2-phase7-approved`
        8 Art Production            NOT STARTED   staged art gates
        9 v2 Implementation         NOT STARTED   staged implementation gates
       10 Screen Cutover            NOT STARTED   per-screen gates
       11 Legacy Removal            NOT STARTED   final cleanup gate

## Universal advancement rule

A phase advances only when its deliverables exist, blocking unresolved
items are zero, a completion review is presented, the owner explicitly
approves, approval is recorded, and the repository receives the
checkpoint.

## Restart protocol

In a new conversation: read this file, governance, current phase file,
relevant locked decisions, then only the screen/spec/geometry files
needed for the current task. Repository authority wins over chat memory.
