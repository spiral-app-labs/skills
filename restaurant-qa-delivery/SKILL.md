---
name: restaurant-qa-delivery
description: Three-round QA and delivery gate for restaurant website builds. Use after a fork is locally built and before marking an agency lead delivered; captures screenshots, runs build/link/mobile checks, updates skills if needed, writes QA rounds to Mission Control, and verifies pitch evidence.
---

# Restaurant QA Delivery

Use this after the first complete fork is built.

## Required Rounds

Run exactly three QA rounds. Each round must produce screenshots/evidence and a Mission Control QA round writeback.

1. Round 1: build correctness and content truth.
2. Round 2: mobile conversion and visual polish.
3. Round 3: delivery readiness, links, preview URL, pitch doc, battle cards, top-three-improvement evidence, concierge evidence, and MC requirements.

## Round Checks

Each round should cover:

- `npm run build` or the repo's equivalent.
- Homepage, menu, about/story, contact/location, and any special pages.
- Mobile 390x844 and desktop 1440x900 screenshots.
- Header/footer/nav links.
- Phone, map, reservation, order, social, and provider links.
- No placeholder copy, fake awards, fake menu items, fake prices, or invented review counts.
- OG/social metadata includes restaurant name, address, rating/review count if captured, and a themed image.
- Accessibility basics: readable contrast, tap targets, no hidden text on mobile.

## Mission Control Writeback

For every round, use `POST /api/agency/leads/:leadId/qa-rounds`:

```json
{
  "round_number": 1,
  "findings": [],
  "fixes_applied": [],
  "screenshots": [],
  "mc_task_id": "mission-control-task-id"
}
```

After round 3, use `POST`/`PATCH /api/agency/leads/:leadId/build` to update the build stage to `ready_for_higgsfield_video` with the QA-clean preview URL, motion notes, and founder handoff evidence. That is a human-review handoff, not a blocker. Packaging/delivery happens only after Ethan/Higgsfield final video work and Ethan final review are complete.

The `/build` route rejects `delivered` when required delivery evidence is missing. Treat any returned missing-evidence list as the next QA/package checklist; do not mark local delivery complete or tell Ethan it is sell-ready until the MC delivered transition succeeds or a founder override is explicitly recorded.

## Skill Feedback

If QA reveals a recurring workflow failure, update the relevant skill or checklist before delivery. Record the skill update in the QA round payload.
