# snuggery-river-roadhouse Build Checklist

- Lead ID: 713dec87-03c2-4782-ad16-93d72368d130
- MC parent task ID: 28641d8b-ed9c-4fc3-9326-9c3436bbdc31
- Template slug: bramble-01
- Current stage: reviews (local; Mission Control writeback pending)
- Deploy URL: TBD
- Updated: 2026-05-05T08:55:00.000Z

## Requirements

- [x] lead-fit-qualified: Lead passed the restaurant lead-fit qualification gate - Browser audit confirms this is a conditional improvement lead, not a no-site lead: official site exists and is on-brand, but crawler fetches still hit 403 and above-fold everyday conversion is weak.
- [x] current-site-audit: Current site audit captured desktop, mobile, menu, reviews, and asset evidence - Browser evidence captured 2026-05-05: official homepage desktop/mobile, non-www redirect, Google proof, Restaurantji desktop/mobile, and Roost proof.
- [x] template-route-locked: Template route and modifiers are locked from the restaurant site router - Routed to bramble-01 as a family waterfront roadhouse/sports-bar variant, not upscale cocktail lounge.
- [ ] fork-built: Template fork is built with real content, preserved links, and no placeholder copy
- [ ] qa-round-1: QA round 1 completed with findings and fixes logged
- [ ] qa-round-2: QA round 2 completed with findings and fixes logged
- [ ] qa-round-3: QA round 3 completed with findings and fixes logged
- [ ] delivery-package: Preview URL, pitch doc, outreach draft, screenshots, and MC evidence are attached

## Evidence Paths

- restaurant-website-system/sites/snuggery-river-roadhouse/checklist.md
- restaurant-website-system/sites/snuggery-river-roadhouse/checklist.json
- restaurant-website-system/sites/snuggery-river-roadhouse/audit.md
- restaurant-website-system/reports/repo-mc-inventory-2026-05-03.md
- restaurant-website-system/sites/snuggery-river-roadhouse/scrapes/browser-audit-manifest-2026-05-05.json
- restaurant-website-system/sites/snuggery-river-roadhouse/screenshots/official-home-desktop-2026-05-05.png
- restaurant-website-system/sites/snuggery-river-roadhouse/screenshots/official-home-mobile-2026-05-05.png
- restaurant-website-system/sites/snuggery-river-roadhouse/scrapes/official-home-desktop-2026-05-05.txt
- restaurant-website-system/sites/snuggery-river-roadhouse/scrapes/official-home-mobile-2026-05-05.txt
- restaurant-website-system/sites/snuggery-river-roadhouse/screenshots/official-home-nonwww-desktop-2026-05-05.png
- restaurant-website-system/sites/snuggery-river-roadhouse/scrapes/official-home-nonwww-desktop-2026-05-05.txt
- restaurant-website-system/sites/snuggery-river-roadhouse/screenshots/google-search-desktop-2026-05-05.png
- restaurant-website-system/sites/snuggery-river-roadhouse/screenshots/google-search-mobile-2026-05-05.png
- restaurant-website-system/sites/snuggery-river-roadhouse/scrapes/google-search-desktop-2026-05-05.txt
- restaurant-website-system/sites/snuggery-river-roadhouse/scrapes/google-search-mobile-2026-05-05.txt
- restaurant-website-system/sites/snuggery-river-roadhouse/screenshots/restaurantji-desktop-2026-05-05.png
- restaurant-website-system/sites/snuggery-river-roadhouse/screenshots/restaurantji-mobile-2026-05-05.png
- restaurant-website-system/sites/snuggery-river-roadhouse/scrapes/restaurantji-desktop-2026-05-05.txt
- restaurant-website-system/sites/snuggery-river-roadhouse/scrapes/restaurantji-mobile-2026-05-05.txt
- restaurant-website-system/sites/snuggery-river-roadhouse/screenshots/roost-proof-desktop-2026-05-05.png
- restaurant-website-system/sites/snuggery-river-roadhouse/scrapes/roost-proof-desktop-2026-05-05.txt
- restaurant-website-system/sites/snuggery-river-roadhouse/browser-evidence-audit-2026-05-05.md

## QA Rounds

- Round 1: pending
- Round 2: pending
- Round 3: pending

## Pitch Artifacts

- Pitch doc: TBD
- Outreach draft: TBD

## Blockers

- Mission Control writeback pending: local audit evidence is complete and the next canonical stage is `reviews`, but this runtime is missing `AGENCY_AUTONOMY_API_KEY` and a trusted Mission Control base URL. Submit `restaurant-website-system/sites/snuggery-river-roadhouse/mc-build-writeback-auditing-complete-2026-05-05.json` before starting the reviews gate.

## Done Criteria

- Mission Control lead has a simple sales status and current metadata.build_stage.
- Mission Control parent task metadata.requirements mirrors this checklist.
- All required checklist rows are passed.
- Three QA rounds are logged with screenshot evidence.
- Preview URL, pitch doc, outreach draft, and delivery evidence are attached.
