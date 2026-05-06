# sushi-u Build Checklist

- Lead ID: 8dce758b-d6d8-45b9-9971-70e6810569fb
- MC parent task ID: b5ce710c-c4b4-431e-a258-82fb71ab60a0
- Template slug: bamzi-01
- Current stage: reviews (local; Mission Control writeback pending)
- Deploy URL: TBD
- Updated: 2026-05-05T09:18:00.000Z

## Requirements

- [x] lead-fit-qualified: Lead passed the restaurant lead-fit qualification gate - Qualification list flags Sushi U for SSL/certificate and PDF-menu friction; source audit reproduced certificate failures and verified PDF menu + HonorPOS order path.
- [x] current-site-audit: Current site audit captured desktop, mobile, menu, reviews, and asset evidence - Browser evidence captured 2026-05-05: official homepage desktop/mobile/www, PDF menu, HonorPOS order path, Google/local proof, Restaurantji, and Restaurant Guru.
- [x] template-route-locked: Template route and modifiers are locked from the restaurant site router - Routed to bamzi-01 by default; only use qitchen-01 if later photos prove restrained/special-occasion sushi brand.
- [ ] fork-built: Template fork is built with real content, preserved links, and no placeholder copy
- [ ] qa-round-1: QA round 1 completed with findings and fixes logged
- [ ] qa-round-2: QA round 2 completed with findings and fixes logged
- [ ] qa-round-3: QA round 3 completed with findings and fixes logged
- [ ] delivery-package: Preview URL, pitch doc, outreach draft, screenshots, and MC evidence are attached

## Evidence Paths

- restaurant-website-system/sites/sushi-u/checklist.md
- restaurant-website-system/sites/sushi-u/checklist.json
- restaurant-website-system/sites/sushi-u/audit.md
- restaurant-website-system/research/lead-qualification/next-15-bad-no-site-leads-2026-05-01.md
- restaurant-website-system/sites/sushi-u/scrapes/browser-audit-manifest-2026-05-05.json
- restaurant-website-system/sites/sushi-u/screenshots/official-home-desktop-2026-05-05.png
- restaurant-website-system/sites/sushi-u/screenshots/official-home-mobile-2026-05-05.png
- restaurant-website-system/sites/sushi-u/screenshots/official-home-www-desktop-2026-05-05.png
- restaurant-website-system/sites/sushi-u/scrapes/official-home-desktop-2026-05-05.txt
- restaurant-website-system/sites/sushi-u/scrapes/official-home-mobile-2026-05-05.txt
- restaurant-website-system/sites/sushi-u/scrapes/official-home-www-desktop-2026-05-05.txt
- restaurant-website-system/sites/sushi-u/screenshots/official-menu-pdf-desktop-2026-05-05.png
- restaurant-website-system/sites/sushi-u/screenshots/official-menu-pdf-mobile-2026-05-05.png
- restaurant-website-system/sites/sushi-u/scrapes/official-menu-pdf-desktop-2026-05-05.html
- restaurant-website-system/sites/sushi-u/scrapes/official-menu-pdf-mobile-2026-05-05.html
- restaurant-website-system/sites/sushi-u/screenshots/official-order-desktop-2026-05-05.png
- restaurant-website-system/sites/sushi-u/screenshots/official-order-mobile-2026-05-05.png
- restaurant-website-system/sites/sushi-u/scrapes/official-order-desktop-2026-05-05.txt
- restaurant-website-system/sites/sushi-u/scrapes/official-order-mobile-2026-05-05.txt
- restaurant-website-system/sites/sushi-u/screenshots/google-search-desktop-2026-05-05.png
- restaurant-website-system/sites/sushi-u/screenshots/google-search-mobile-2026-05-05.png
- restaurant-website-system/sites/sushi-u/scrapes/google-search-desktop-2026-05-05.txt
- restaurant-website-system/sites/sushi-u/scrapes/google-search-mobile-2026-05-05.txt
- restaurant-website-system/sites/sushi-u/screenshots/restaurantji-desktop-2026-05-05.png
- restaurant-website-system/sites/sushi-u/screenshots/restaurantji-mobile-2026-05-05.png
- restaurant-website-system/sites/sushi-u/scrapes/restaurantji-desktop-2026-05-05.txt
- restaurant-website-system/sites/sushi-u/scrapes/restaurantji-mobile-2026-05-05.txt
- restaurant-website-system/sites/sushi-u/screenshots/restaurantguru-desktop-2026-05-05.png
- restaurant-website-system/sites/sushi-u/scrapes/restaurantguru-desktop-2026-05-05.txt
- restaurant-website-system/sites/sushi-u/browser-evidence-audit-2026-05-05.md

## QA Rounds

- Round 1: pending
- Round 2: pending
- Round 3: pending

## Pitch Artifacts

- Pitch doc: TBD
- Outreach draft: TBD

## Blockers

- Mission Control writeback pending: local audit evidence is complete and the next canonical stage is `reviews`, but this runtime is missing `AGENCY_AUTONOMY_API_KEY` and a trusted Mission Control base URL. Submit `restaurant-website-system/sites/sushi-u/mc-build-writeback-auditing-complete-2026-05-05.json` before starting the reviews gate.

## Done Criteria

- Mission Control lead has a simple sales status and current metadata.build_stage.
- Mission Control parent task metadata.requirements mirrors this checklist.
- All required checklist rows are passed.
- Three QA rounds are logged with screenshot evidence.
- Preview URL, pitch doc, outreach draft, and delivery evidence are attached.
