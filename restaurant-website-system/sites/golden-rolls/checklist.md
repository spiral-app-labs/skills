# golden-rolls Build Checklist

- Lead ID: e5048ba5-21d5-4400-8673-f92e16954560
- MC parent task ID: c98d74ad-1a44-4df4-b313-bd20d675ae71
- Template slug: bamzi-01
- Current stage: reviews (local; Mission Control writeback pending)
- Deploy URL: TBD
- Updated: 2026-05-05T08:10:00.000Z

## Requirements

- [x] lead-fit-qualified: Lead passed the restaurant lead-fit qualification gate - Qualification list flags Golden Rolls as a conditional technical-friction lead; source audit verified sparse owned content plus inconsistent official-domain fetch behavior and strong off-site proof.
- [x] current-site-audit: Current site audit captured desktop, mobile, menu, reviews, and asset evidence - Browser evidence captured 2026-05-05: official homepage/full-menu/location-hours desktop and mobile screenshots, DOM/text snapshots, and supporting Restaurantji/Roost proof screenshots.
- [x] template-route-locked: Template route and modifiers are locked from the restaurant site router - Routed to bamzi-01 per qualification; core archetype: Bamzi for a moody/cinematic sushi bistro and bar identity, not formal omakase.
- [ ] fork-built: Template fork is built with real content, preserved links, and no placeholder copy
- [ ] qa-round-1: QA round 1 completed with findings and fixes logged
- [ ] qa-round-2: QA round 2 completed with findings and fixes logged
- [ ] qa-round-3: QA round 3 completed with findings and fixes logged
- [ ] delivery-package: Preview URL, pitch doc, outreach draft, screenshots, and MC evidence are attached

## Evidence Paths

- restaurant-website-system/sites/golden-rolls/checklist.md
- restaurant-website-system/sites/golden-rolls/checklist.json
- restaurant-website-system/sites/golden-rolls/audit.md
- restaurant-website-system/research/lead-qualification/next-15-bad-no-site-leads-2026-05-01.md
- restaurant-website-system/sites/golden-rolls/scrapes/browser-audit-manifest-2026-05-05.json
- restaurant-website-system/sites/golden-rolls/scrapes/public-proof-manifest-2026-05-05.json
- restaurant-website-system/sites/golden-rolls/screenshots/home-desktop-2026-05-05.png
- restaurant-website-system/sites/golden-rolls/screenshots/home-mobile-2026-05-05.png
- restaurant-website-system/sites/golden-rolls/screenshots/full-menu-desktop-2026-05-05.png
- restaurant-website-system/sites/golden-rolls/screenshots/full-menu-mobile-2026-05-05.png
- restaurant-website-system/sites/golden-rolls/screenshots/location-hours-desktop-2026-05-05.png
- restaurant-website-system/sites/golden-rolls/screenshots/location-hours-mobile-2026-05-05.png
- restaurant-website-system/sites/golden-rolls/scrapes/home-desktop-2026-05-05.html
- restaurant-website-system/sites/golden-rolls/scrapes/home-mobile-2026-05-05.html
- restaurant-website-system/sites/golden-rolls/scrapes/full-menu-desktop-2026-05-05.html
- restaurant-website-system/sites/golden-rolls/scrapes/full-menu-mobile-2026-05-05.html
- restaurant-website-system/sites/golden-rolls/scrapes/location-hours-desktop-2026-05-05.html
- restaurant-website-system/sites/golden-rolls/scrapes/location-hours-mobile-2026-05-05.html
- restaurant-website-system/sites/golden-rolls/screenshots/restaurantji-desktop-2026-05-05.png
- restaurant-website-system/sites/golden-rolls/screenshots/roost-proof-desktop-2026-05-05.png
- restaurant-website-system/sites/golden-rolls/scrapes/restaurantji-desktop-2026-05-05.txt
- restaurant-website-system/sites/golden-rolls/scrapes/roost-proof-desktop-2026-05-05.txt
- restaurant-website-system/sites/golden-rolls/browser-evidence-audit-2026-05-05.md

## QA Rounds

- Round 1: pending
- Round 2: pending
- Round 3: pending

## Pitch Artifacts

- Pitch doc: TBD
- Outreach draft: TBD

## Blockers

- Mission Control writeback pending: local audit evidence is complete and the next canonical stage is `reviews`, but this runtime is missing `AGENCY_AUTONOMY_API_KEY` and a trusted Mission Control base URL. Submit `restaurant-website-system/sites/golden-rolls/mc-build-writeback-auditing-complete-2026-05-05.json` before starting the reviews gate.

## Done Criteria

- Mission Control lead has a simple sales status and current metadata.build_stage.
- Mission Control parent task metadata.requirements mirrors this checklist.
- All required checklist rows are passed.
- Three QA rounds are logged with screenshot evidence.
- Preview URL, pitch doc, outreach draft, and delivery evidence are attached.
