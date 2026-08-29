# Phase 11 --- Legacy Removal

**Status:** NOT STARTED

## Purpose

Remove obsolete v1 visual implementation only after v2 cutover is
proven.

## Required work

Run zero-reference audit; create explicit obsolete-file/selector
inventory; remove unused visuals while preserving used logic/data; rerun
production validation.

## Prohibited work

Deleting shared directories wholesale without a proven unused inventory.

## Required deliverables

Legacy-removal inventory, zero-reference evidence, final validation
report.

## Completion gate

No production dependency remains on superseded v1 visuals, docs match
production, and owner approves final cleanup.
