# la-hacienda-mexican-restaurant Build Checklist

- Lead ID: 7cba3fe2-8f65-4516-b46b-05c2c07ab235
- MC parent task ID: fd7f4976-daac-42aa-8c9a-1ddb09a9d12f
- Template slug: bamzi-01
- Current stage: top_3_improvements (local build gate passed; Mission Control writeback pending)
- Deploy URL: TBD
- Updated: 2026-05-05T11:38:00Z

## Requirements

- [x] lead-fit-qualified: Lead passed the restaurant lead-fit qualification gate - Qualification list flags La Hacienda as a Canva-as-website lead; source audit verified Canva page has almost no crawlable restaurant content and directory pages carry the core facts.
- [x] current-site-audit: Current site audit captured desktop, mobile, menu, reviews, and asset evidence - Browser evidence captured on 2026-05-05: Canva current-site desktop/mobile screenshots and DOM/text, plus Google local proof, Restaurantji, and Roost screenshots/text. The previous No supported browser found blocker is cleared locally.
- [x] template-route-locked: Template route and modifiers are locked from the restaurant site router - Routed to bamzi-01 hue-swap per qualification, with Cuisine as the truthful warm-casual Mexican core archetype if photos reject Bamzi energy.
- [x] google-reviews-highest-30: 30 written Google reviews captured using the Highest sort/filter - Captured browser evidence from Google Search local reviews panel on 2026-05-05. Highest sort selected; 30 written reviews summarized into a build-safe evidence packet. Observed 4.3 rating from 530 Google reviews.
- [x] improvement-pass: Improvement pass completed after first fork - Rewrote hero for diners, tightened mobile/header containment, reduced mobile hero scale, captured before/after homepage screenshots, passed npm run build, and verified no 390px horizontal overflow offenders.
- [ ] top-3-improvements: Top 3 improvements selected, implemented, and evidenced - Pending formal next gate.
- [x] fork-built: Template fork is built with real content, preserved links, and no placeholder copy - Bamzi scaffold copied into the existing La Hacienda site folder, placeholder content replaced with audit/review/menu proof, and `npm run build` passed locally on 2026-05-05 after switching to offline-safe font stacks.
- [ ] qa-round-1: QA round 1 completed with findings and fixes logged
- [ ] qa-round-2: QA round 2 completed with findings and fixes logged
- [ ] qa-round-3: QA round 3 completed with findings and fixes logged
- [ ] delivery-package: Preview URL, pitch doc, outreach draft, screenshots, and MC evidence are attached

## Evidence Paths

- restaurant-website-system/sites/la-hacienda-mexican-restaurant/checklist.md
- restaurant-website-system/sites/la-hacienda-mexican-restaurant/checklist.json
- restaurant-website-system/sites/la-hacienda-mexican-restaurant/audit.md
- restaurant-website-system/research/lead-qualification/next-15-bad-no-site-leads-2026-05-01.md
- restaurant-website-system/sites/la-hacienda-mexican-restaurant/scrapes/browser-audit-manifest-2026-05-05.json
- restaurant-website-system/sites/la-hacienda-mexican-restaurant/screenshots/canva-menu-desktop-2026-05-05.png
- restaurant-website-system/sites/la-hacienda-mexican-restaurant/screenshots/canva-menu-mobile-2026-05-05.png
- restaurant-website-system/sites/la-hacienda-mexican-restaurant/scrapes/canva-menu-desktop-2026-05-05.html
- restaurant-website-system/sites/la-hacienda-mexican-restaurant/scrapes/canva-menu-desktop-2026-05-05.txt
- restaurant-website-system/sites/la-hacienda-mexican-restaurant/scrapes/canva-menu-mobile-2026-05-05.html
- restaurant-website-system/sites/la-hacienda-mexican-restaurant/scrapes/canva-menu-mobile-2026-05-05.txt
- restaurant-website-system/sites/la-hacienda-mexican-restaurant/screenshots/restaurantji-desktop-2026-05-05.png
- restaurant-website-system/sites/la-hacienda-mexican-restaurant/scrapes/restaurantji-desktop-2026-05-05.txt
- restaurant-website-system/sites/la-hacienda-mexican-restaurant/screenshots/roost-proof-desktop-2026-05-05.png
- restaurant-website-system/sites/la-hacienda-mexican-restaurant/scrapes/roost-proof-desktop-2026-05-05.txt
- restaurant-website-system/sites/la-hacienda-mexican-restaurant/screenshots/google-search-desktop-2026-05-05.png
- restaurant-website-system/sites/la-hacienda-mexican-restaurant/scrapes/google-search-desktop-2026-05-05.txt
- restaurant-website-system/sites/la-hacienda-mexican-restaurant/browser-evidence-audit-2026-05-05.md
- restaurant-website-system/sites/la-hacienda-mexican-restaurant/google-reviews-highest-30-written-2026-05-05.md
- restaurant-website-system/sites/la-hacienda-mexican-restaurant/scrapes/google-reviews-highest-30-written-2026-05-05.json
- restaurant-website-system/sites/la-hacienda-mexican-restaurant/screenshots/google-reviews-highest-2026-05-05.png
- restaurant-website-system/sites/la-hacienda-mexican-restaurant/build-notes-2026-05-05.md
- restaurant-website-system/sites/la-hacienda-mexican-restaurant/mc-build-writeback-fork-built-2026-05-05.json

## QA Rounds

- Round 1: pending
- Round 2: pending
- Round 3: pending

## Pitch Artifacts

- Pitch doc: TBD
- Outreach draft: TBD

## Blockers

- stage_writeback: Local build gate is complete, but Mission Control writeback still cannot be submitted because AGENCY_AUTONOMY_API_KEY and a trusted Mission Control base URL are unavailable in this runtime. Next unblock action: Configure Mission Control agency API auth/base URL for OpenClaw, then submit the latest La Hacienda build writeback payload through the agency build writeback route.

## Done Criteria

- Mission Control lead has a simple sales status and current metadata.build_stage.
- Mission Control parent task metadata.requirements mirrors this checklist.
- All required checklist rows are passed.
- Three QA rounds are logged with screenshot evidence.
- Preview URL, pitch doc, outreach draft, and delivery evidence are attached.


## Improving evidence

- restaurant-website-system/sites/la-hacienda-mexican-restaurant/improvement-pass-2026-05-05.md
- restaurant-website-system/sites/la-hacienda-mexican-restaurant/screenshots/preview-home-desktop-improving-2026-05-05.png
- restaurant-website-system/sites/la-hacienda-mexican-restaurant/screenshots/preview-home-mobile-improving-2026-05-05.png
- restaurant-website-system/sites/la-hacienda-mexican-restaurant/screenshots/preview-home-desktop-improved-2026-05-05.png
- restaurant-website-system/sites/la-hacienda-mexican-restaurant/screenshots/preview-home-mobile-improved-2026-05-05.png
