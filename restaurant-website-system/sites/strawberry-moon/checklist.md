# strawberry-moon Build Checklist

- Lead ID: af98b880-9351-4f00-b35b-253ad35570d9
- MC parent task ID: 216314e9-4af6-4f99-92ab-54e7912b9173
- Template slug: velvet-shaker-01
- Current stage: qa_round_2
- Deploy URL: TBD
- Updated: 2026-05-04T15:35:00Z

## Requirements

- [ ] lead-fit-qualified: Lead passed the restaurant lead-fit qualification gate - Qualification list marks Strawberry Moon as softer/nurture: functioning but thin/dated Weebly site. Source audit confirms not a hard broken-site lead.
- [x] current-site-audit: Current site audit captured desktop, mobile, menu, reviews, and asset evidence - Browser screenshots plus DOM/text scrapes captured for homepage/events; Google Maps overview verified.
- [x] template-route-locked: Template route and modifiers are locked from the restaurant site router - Routed to velvet-shaker-01 warmed down; core archetype is Bramble for cozy martini lounge/date-night personality, not tavern/fine-dining.
- [x] google-reviews-captured: Highest-filter Google review packet captured with 30 written reviews, rating summary, and screenshots
- [x] fork-built: Template fork is built with real content, preserved links, and no placeholder copy - Velvet-shaker-01 now lives in the Strawberry Moon site folder with official-site imagery, factual martini/lounge/live-music content, honest call/directions/events/official-site handoff links, and no fake booking or price claims. `npm ci`, `npm run typecheck`, and `npm run build` passed.
- [x] qa-round-1: QA round 1 completed with findings and fixes logged - Round 1 passed after hero/nav fixes: first viewport is demo-ready; typecheck/build passed; desktop/mobile preview screenshots captured.
- [ ] qa-round-2: QA round 2 completed with findings and fixes logged - Next: fix below-fold mobile gallery gap/cropped strip, improve low-contrast section copy, then recapture screenshots.
- [ ] qa-round-3: QA round 3 completed with findings and fixes logged
- [ ] delivery-package: Preview URL, pitch doc, outreach draft, screenshots, and MC evidence are attached

## Evidence Paths

- restaurant-website-system/sites/strawberry-moon/checklist.md
- restaurant-website-system/sites/strawberry-moon/checklist.json
- restaurant-website-system/sites/strawberry-moon/audit.md
- restaurant-website-system/sites/strawberry-moon/source.md
- restaurant-website-system/sites/strawberry-moon/content.ts
- restaurant-website-system/sites/strawberry-moon/scrapes/current-site-dom-snapshot.txt
- restaurant-website-system/sites/strawberry-moon/scrapes/current-site-home-dom.html
- restaurant-website-system/sites/strawberry-moon/scrapes/current-site-home-text.txt
- restaurant-website-system/sites/strawberry-moon/scrapes/current-site-events-dom.html
- restaurant-website-system/sites/strawberry-moon/scrapes/current-site-events-text.txt
- restaurant-website-system/sites/strawberry-moon/scrapes/google-reviews-highest-30.json
- restaurant-website-system/sites/strawberry-moon/screenshots/current-home-desktop.png
- restaurant-website-system/sites/strawberry-moon/screenshots/current-home-mobile.png
- restaurant-website-system/sites/strawberry-moon/screenshots/current-events-desktop.png
- restaurant-website-system/sites/strawberry-moon/screenshots/current-events-mobile.png
- restaurant-website-system/sites/strawberry-moon/screenshots/google-profile-overview.png
- restaurant-website-system/sites/strawberry-moon/screenshots/google-reviews-highest.png
- restaurant-website-system/research/lead-qualification/next-15-bad-no-site-leads-2026-05-01.md

## QA Rounds

- Round 1: passed — `qa-round-1.md`
- Round 2: pending
- Round 3: pending

## Pitch Artifacts

- Pitch doc: TBD
- Outreach draft: TBD

## Blockers

- None for audit/reviews. Next gate is routing/building the first preview from `velvet-shaker-01` / Bramble cozy martini lounge direction.

## Done Criteria

- Mission Control lead has a simple sales status and current metadata.build_stage.
- Mission Control parent task metadata.requirements mirrors this checklist.
- All required checklist rows are passed.
- Three QA rounds are logged with screenshot evidence.
- Preview URL, pitch doc, outreach draft, and delivery evidence are attached.

## 2026-05-04 — QA Round 1 heartbeat progress

- Ran `npm ci`, `npm run typecheck`, and `npm run build`; production build passed.
- Captured local production desktop/mobile preview screenshots from `127.0.0.1:3078`.
- Fixed first-viewport sellability issues in `MassiveWordmarkHero`: reduced blank space, added real lounge image/proof, clarified directions/events/phone CTAs, and made the hero feel specific to Strawberry Moon.
- Tightened `MinimalTextNav` mobile spacing.
- Added `qa-round-1.md`; advanced local stage to `qa_round_2`.
- Mission Control heartbeat writeback succeeded as `c036c904-df28-426e-8461-e7243a0b8a83`.
- Round 2 follow-up: mobile below-fold gallery gap/cropped strip and low-contrast lower sections.
