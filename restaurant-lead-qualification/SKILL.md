---
name: restaurant-lead-qualification
description: Active 7-check lead-fit gate for restaurant website agency prospects. Use before building any speculative restaurant redesign to decide whether to build, skip, gather more evidence, or re-route to a lower/higher-register template.
---

# Restaurant Lead Qualification

Run this before opening a code editor for a new restaurant lead. Time budget: 5-8 minutes. Output must be written to the local checklist and Mission Control.

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

Update the build stage to `qualifying` while running the gate. Then record:

- `lead_fit_decision`
- `lead_fit_checks`
- `why_switch_sentence`
- `recommended_template_register`
- screenshots or source paths used as evidence

Pass `lead-fit-qualified` in MC task requirements only when the decision is `Build` or `Re-route`.
