# tasty-bistro Build Checklist

- Lead ID: 4a61843f-7ce4-42d1-9971-1452aa311c47
- MC parent task ID: b19181d6-a00f-4d82-9c38-707c9dcb5372
- Template slug: bamzi-01
- Current stage: blocked (local; Mission Control writeback pending)
- Deploy URL: TBD
- Updated: 2026-05-05T09:35:00.000Z

## Requirements

- [!] lead-fit-qualified: Lead passed the restaurant lead-fit qualification gate - BLOCKED: browser/Google evidence shows the original Crystal Lake lead is temporarily closed/consolidated into Tasty Sushi/Cary.
- [x] current-site-audit: Current site audit captured desktop, mobile, menu, reviews, and asset evidence - Browser evidence captured 2026-05-05: official-domain/order-app redirect, Google closed/consolidated proof, Restaurantji, Restaurant Guru, and marketplace search proof.
- [x] template-route-locked: Template route and modifiers are locked from the restaurant site router - Routed to bamzi-01 for broad casual Asian/sushi energy; avoid over-premium omakase posture and verify room/photos.
- [ ] fork-built: Template fork is built with real content, preserved links, and no placeholder copy
- [ ] qa-round-1: QA round 1 completed with findings and fixes logged
- [ ] qa-round-2: QA round 2 completed with findings and fixes logged
- [ ] qa-round-3: QA round 3 completed with findings and fixes logged
- [ ] delivery-package: Preview URL, pitch doc, outreach draft, screenshots, and MC evidence are attached

## Evidence Paths

- restaurant-website-system/sites/tasty-bistro/checklist.md
- restaurant-website-system/sites/tasty-bistro/checklist.json
- restaurant-website-system/sites/tasty-bistro/audit.md
- restaurant-website-system/research/lead-qualification/next-15-bad-no-site-leads-2026-05-01.md
- restaurant-website-system/sites/tasty-bistro/scrapes/browser-audit-manifest-2026-05-05.json
- restaurant-website-system/sites/tasty-bistro/screenshots/official-domain-desktop-2026-05-05.png
- restaurant-website-system/sites/tasty-bistro/screenshots/official-domain-mobile-2026-05-05.png
- restaurant-website-system/sites/tasty-bistro/scrapes/official-domain-desktop-2026-05-05.txt
- restaurant-website-system/sites/tasty-bistro/scrapes/official-domain-mobile-2026-05-05.txt
- restaurant-website-system/sites/tasty-bistro/screenshots/orderonlinehub-desktop-2026-05-05.png
- restaurant-website-system/sites/tasty-bistro/screenshots/orderonlinehub-mobile-2026-05-05.png
- restaurant-website-system/sites/tasty-bistro/scrapes/orderonlinehub-desktop-2026-05-05.txt
- restaurant-website-system/sites/tasty-bistro/scrapes/orderonlinehub-mobile-2026-05-05.txt
- restaurant-website-system/sites/tasty-bistro/screenshots/google-search-desktop-2026-05-05.png
- restaurant-website-system/sites/tasty-bistro/screenshots/google-search-mobile-2026-05-05.png
- restaurant-website-system/sites/tasty-bistro/scrapes/google-search-desktop-2026-05-05.txt
- restaurant-website-system/sites/tasty-bistro/scrapes/google-search-mobile-2026-05-05.txt
- restaurant-website-system/sites/tasty-bistro/screenshots/restaurantji-desktop-2026-05-05.png
- restaurant-website-system/sites/tasty-bistro/screenshots/restaurantji-mobile-2026-05-05.png
- restaurant-website-system/sites/tasty-bistro/scrapes/restaurantji-desktop-2026-05-05.txt
- restaurant-website-system/sites/tasty-bistro/scrapes/restaurantji-mobile-2026-05-05.txt
- restaurant-website-system/sites/tasty-bistro/screenshots/restaurantguru-desktop-2026-05-05.png
- restaurant-website-system/sites/tasty-bistro/scrapes/restaurantguru-desktop-2026-05-05.txt
- restaurant-website-system/sites/tasty-bistro/screenshots/doordash-search-desktop-2026-05-05.png
- restaurant-website-system/sites/tasty-bistro/scrapes/doordash-search-desktop-2026-05-05.txt
- restaurant-website-system/sites/tasty-bistro/browser-evidence-audit-2026-05-05.md

## QA Rounds

- Round 1: pending
- Round 2: pending
- Round 3: pending

## Pitch Artifacts

- Pitch doc: TBD
- Outreach draft: TBD

## Blockers

- Operating-status blocker: Google/current browser evidence says Crystal Lake Tasty Bistro is temporarily closed and consolidated into Tasty Sushi/Cary at `630 Northwest Hwy, Cary IL 60013`. Do not proceed to reviews/build for the Crystal Lake lead until MC/founder confirms whether to retire this workflow or create a Cary-scoped workflow.
- Mission Control writeback pending: local audit evidence and blocked status are ready, but this runtime is missing `AGENCY_AUTONOMY_API_KEY` and a trusted Mission Control base URL. Submit `restaurant-website-system/sites/tasty-bistro/mc-build-writeback-blocked-2026-05-05.json` once configured.

## Done Criteria

- Mission Control lead has a simple sales status and current metadata.build_stage.
- Mission Control parent task metadata.requirements mirrors this checklist.
- All required checklist rows are passed.
- Three QA rounds are logged with screenshot evidence.
- Preview URL, pitch doc, outreach draft, and delivery evidence are attached.
