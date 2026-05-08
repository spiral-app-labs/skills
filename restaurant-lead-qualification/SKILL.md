---
name: restaurant-lead-qualification
description: Active 7-check lead-fit gate for restaurant website agency prospects. Use before building any speculative restaurant redesign to decide whether to build, skip, gather more evidence, or re-route to a lower/higher-register template.
---

# Restaurant Lead Qualification

Run this before opening a code editor for a new speculative restaurant lead. Time budget: 5-8 minutes. Output must be written to the local checklist/artifact packet and Mission Control when API auth is available.

Current MC workflow note: lead qualification is now the first canonical child task: `lead_qualification → qualifying`. For new/speculative leads, qualify before build work and write the Build/Re-route/Skip decision plus evidence to local artifacts and MC. If a lead was provisioned before this child existed, repair/backfill through the protected MC workflow endpoint instead of treating qualification as an implicit checklist substep.

Reference: `restaurant-website-system/research/lead-fit-qualification.md`.

## The 7 Checks

1. Visual reality: inspect real photos of exterior, interior, bar/counter, food, and staff.
2. Menu pricing register: sample real prices and map them to the aesthetic register.
3. Review tone: skim recent Google/Yelp/OpenTable language for the room guests describe.
4. Current-site quality: desktop and mobile score for clarity, menu, booking/order path, trust basics.
5. Why-switch sentence: write one concrete reason the owner would switch.
6. Switching cost: identify Toast, SpotHopper, BentoBox, Resy, OpenTable, Square, Wix, or other inertia.
7. Would-I-eat-here test: compare proposed hero posture against actual room photos.

## Decision

- Build: visual fit matches, current site is weak enough, and the switch reason is concrete.
- Re-route: restaurant is real but current template register is wrong.
- Skip: site is already strong, switch reason is vague, or register mismatch would misrepresent them.
- Blocked: evidence is too thin to make an honest decision.

## Required Writeback

For new/speculative leads, update/write `build_stage: qualifying` only while the qualification gate is actually active. For already-provisioned website workflows, preserve the planner-selected root/child stage and attach qualification evidence to the checklist/build evidence instead of silently rewinding the workflow.

Record:

- `lead_fit_decision`
- `lead_fit_checks`
- `why_switch_sentence`
- `recommended_template_register`
- screenshots or source paths used as evidence

Pass `lead-fit-qualified` / include it in `passed_requirement_ids` only when the decision is `Build` or `Re-route`. If MC API auth is unavailable, save a MC-compatible seed/writeback payload locally with the auth blocker and do not mutate agency state through raw Supabase.
