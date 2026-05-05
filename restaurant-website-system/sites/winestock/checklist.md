# winestock Build Checklist

- Lead ID: 7f1432ae-2553-442c-80ff-df58acb162ef
- MC parent task ID: 35f58383-0074-4a64-85cc-46ea2cfcd6bb
- Template slug: bramble-01
- Current stage: routing
- Deploy URL: TBD
- Updated: 2026-05-05T01:55:00Z

## Requirements

- [x] lead-fit-qualified: Lead passed the restaurant lead-fit qualification gate - Mission Control inventory marks Winestock Market & Lounge as an in-progress agency website lead; official site confirms live business at 136 Cass St, Woodstock, IL.
- [x] current-site-audit: Current site audit captured desktop, mobile, menu, reviews, and asset evidence - Current-site scrape exists with under-construction homepage copy, address, contact link, Facebook link, and small plates/flatbreads/sandwiches/wine positioning.
- [x] template-route-locked: Template route and modifiers are locked from the restaurant site router - Routed to `bramble-01` / Bramble for a wine bar, market, and lounge with live music, charcuterie, bottle/gift selection, and Woodstock Square regulars.
- [ ] fork-built: Template fork is built with real content, preserved links, and no placeholder copy
- [ ] qa-round-1: QA round 1 completed with findings and fixes logged
- [ ] qa-round-2: QA round 2 completed with findings and fixes logged
- [ ] qa-round-3: QA round 3 completed with findings and fixes logged
- [ ] delivery-package: Preview URL, pitch doc, outreach draft, screenshots, and MC evidence are attached

## Evidence Paths

- restaurant-website-system/sites/winestock/checklist.md
- restaurant-website-system/sites/winestock/checklist.json
- restaurant-website-system/sites/winestock/scrapes/current-site-text.txt
- restaurant-website-system/sites/winestock/scrapes/current-site-links.json
- restaurant-website-system/sites/winestock/scrapes/google-highest-30-2026-05-04.json
- restaurant-website-system/sites/winestock/scrapes/google-highest-30-2026-05-04.md
- restaurant-website-system/sites/winestock/scrapes/google-highest-sort-visible-2026-05-04.png
- restaurant-website-system/sites/winestock/routing.md

## QA Rounds

- Round 1: pending
- Round 2: pending
- Round 3: pending

## Pitch Artifacts

- Pitch doc: TBD
- Outreach draft: TBD

## Blockers

- Browser blocker resolved locally: Google Maps Reviews was opened, sorted by Highest rating, and 30 written Google reviews were captured. Remaining blocker is authenticated Mission Control build/task writeback (`AGENCY_AUTONOMY_API_KEY` / `OPENCLAW_WEBHOOK_SECRET` missing in this runtime).

## Done Criteria

- Mission Control lead has a simple sales status and current metadata.build_stage.
- Mission Control parent task metadata.requirements mirrors this checklist.
- All required checklist rows are passed.
- Three QA rounds are logged with screenshot evidence.
- Preview URL, pitch doc, outreach draft, and delivery evidence are attached.


## 2026-05-04 heartbeat addendum — Google reviews + routing advanced

- Browser access recovered; opened Google Maps for Winestock Market & Lounge, clicked Reviews, sorted via `Sort -> Highest rating`, and captured 30 written Google reviews.
- Evidence added:
  - `restaurant-website-system/sites/winestock/scrapes/google-highest-30-2026-05-04.json`
  - `restaurant-website-system/sites/winestock/scrapes/google-highest-30-2026-05-04.md`
  - `restaurant-website-system/sites/winestock/scrapes/google-highest-sort-visible-2026-05-04.png`
- Routed Winestock to `bramble-01` / Bramble because the strongest proof is wine bar / market / lounge energy: live music, friendly owner/staff, charcuterie/cheese plates, craft beer, approachable bottle pricing, and Woodstock Square regulars.
- Added `restaurant-website-system/sites/winestock/routing.md`.
- Current local stage advanced to `routing`; next executable gate is fork/build from the Bramble archetype.
