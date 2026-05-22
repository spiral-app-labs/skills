# sofia-s-place-restaurant Build Checklist

- Lead ID: ad091f40-f7c7-48bb-bd00-7c6b9c7b7dec
- MC parent task ID: e6c4701f-c3f6-49f6-aab3-e3ce56ece6cc
- Template slug: bamzi-01
- Current stage: reviews (local; Mission Control writeback pending)
- Deploy URL: TBD
- Updated: 2026-05-05T09:05:00.000Z

## Requirements

- [x] lead-fit-qualified: Lead passed the restaurant lead-fit qualification gate - Qualification list flags Sofia’s as an official/order-domain setup-page failure; source audit verified FromTheRestaurant setup copy and directory-led proof.
- [x] current-site-audit: Current site audit captured desktop, mobile, menu, reviews, and asset evidence - Browser evidence captured 2026-05-05: setup page, HTTPS order-location failure, Google/location conflict, Restaurantji, and marketplace search proof.
- [x] template-route-locked: Template route and modifiers are locked from the restaurant site router - Routed to bamzi-01 hue-swap per qualification, with Cuisine as truthful warm-casual Mexican core and address-conflict guardrail.
- [ ] fork-built: Template fork is built with real content, preserved links, and no placeholder copy
- [ ] qa-round-1: QA round 1 completed with findings and fixes logged
- [ ] qa-round-2: QA round 2 completed with findings and fixes logged
- [ ] qa-round-3: QA round 3 completed with findings and fixes logged
- [ ] delivery-package: Preview URL, pitch doc, outreach draft, screenshots, and MC evidence are attached

## Evidence Paths

- restaurant-website-system/sites/sofia-s-place-restaurant/checklist.md
- restaurant-website-system/sites/sofia-s-place-restaurant/checklist.json
- restaurant-website-system/sites/sofia-s-place-restaurant/audit.md
- restaurant-website-system/research/lead-qualification/next-15-bad-no-site-leads-2026-05-01.md
- restaurant-website-system/sites/sofia-s-place-restaurant/scrapes/browser-audit-manifest-2026-05-05.json
- restaurant-website-system/sites/sofia-s-place-restaurant/screenshots/official-order-domain-desktop-2026-05-05.png
- restaurant-website-system/sites/sofia-s-place-restaurant/screenshots/official-order-domain-mobile-2026-05-05.png
- restaurant-website-system/sites/sofia-s-place-restaurant/scrapes/official-order-domain-desktop-2026-05-05.txt
- restaurant-website-system/sites/sofia-s-place-restaurant/scrapes/official-order-domain-mobile-2026-05-05.txt
- restaurant-website-system/sites/sofia-s-place-restaurant/screenshots/official-order-location-desktop-2026-05-05.png
- restaurant-website-system/sites/sofia-s-place-restaurant/scrapes/official-order-location-desktop-2026-05-05.txt
- restaurant-website-system/sites/sofia-s-place-restaurant/screenshots/google-search-desktop-2026-05-05.png
- restaurant-website-system/sites/sofia-s-place-restaurant/screenshots/google-search-mobile-2026-05-05.png
- restaurant-website-system/sites/sofia-s-place-restaurant/scrapes/google-search-desktop-2026-05-05.txt
- restaurant-website-system/sites/sofia-s-place-restaurant/scrapes/google-search-mobile-2026-05-05.txt
- restaurant-website-system/sites/sofia-s-place-restaurant/screenshots/restaurantji-desktop-2026-05-05.png
- restaurant-website-system/sites/sofia-s-place-restaurant/screenshots/restaurantji-mobile-2026-05-05.png
- restaurant-website-system/sites/sofia-s-place-restaurant/scrapes/restaurantji-desktop-2026-05-05.txt
- restaurant-website-system/sites/sofia-s-place-restaurant/scrapes/restaurantji-mobile-2026-05-05.txt
- restaurant-website-system/sites/sofia-s-place-restaurant/screenshots/restaurantguru-desktop-2026-05-05.png
- restaurant-website-system/sites/sofia-s-place-restaurant/scrapes/restaurantguru-desktop-2026-05-05.txt
- restaurant-website-system/sites/sofia-s-place-restaurant/screenshots/doordash-search-desktop-2026-05-05.png
- restaurant-website-system/sites/sofia-s-place-restaurant/scrapes/doordash-search-desktop-2026-05-05.txt
- restaurant-website-system/sites/sofia-s-place-restaurant/browser-evidence-audit-2026-05-05.md

## QA Rounds

- Round 1: pending
- Round 2: pending
- Round 3: pending

## Pitch Artifacts

- Pitch doc: TBD
- Outreach draft: TBD

## Blockers

- Mission Control writeback pending: local audit evidence is complete and the next canonical stage is `reviews`, but this runtime is missing `AGENCY_AUTONOMY_API_KEY` and a trusted Mission Control base URL. Submit `restaurant-website-system/sites/sofia-s-place-restaurant/mc-build-writeback-auditing-complete-2026-05-05.json` before starting the reviews gate.
- Address/current-location confirmation required before build/fork copy: Google and marketplace results point to `398 W Liberty St, Wauconda`, while Restaurantji/Yelp/web snippets still point to `640 E State Rd, Island Lake`.

## Done Criteria

- Mission Control lead has a simple sales status and current metadata.build_stage.
- Mission Control parent task metadata.requirements mirrors this checklist.
- All required checklist rows are passed.
- Three QA rounds are logged with screenshot evidence.
- Preview URL, pitch doc, outreach draft, and delivery evidence are attached.
