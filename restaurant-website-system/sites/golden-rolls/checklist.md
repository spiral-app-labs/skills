# golden-rolls Build Checklist

- Lead ID: e5048ba5-21d5-4400-8673-f92e16954560
- MC parent task ID: c98d74ad-1a44-4df4-b313-bd20d675ae71
- Template slug: bamzi-01
- Current stage: pitch (local; Mission Control writeback pending)
- Deploy URL: TBD
- Updated: 2026-05-05T10:20:01.000Z

## Requirements

- [x] lead-fit-qualified: Lead passed the restaurant lead-fit qualification gate - Qualification list flags Golden Rolls as a conditional technical-friction lead; source audit verified sparse owned content plus inconsistent official-domain fetch behavior and strong off-site proof.
- [x] current-site-audit: Current site audit captured desktop, mobile, menu, reviews, and asset evidence - Browser audit plus Google Reviews evidence captured on 2026-05-05: official homepage/full-menu/location-hours desktop/mobile, DOM/text snapshots, supporting Restaurantji/Roost proof, and a Highest-filter 30-written-review packet.
- [x] template-route-locked: Template route and modifiers are locked from the restaurant site router - Routed to bamzi-01 per qualification; core archetype: Bamzi for a moody/cinematic sushi bistro and bar identity, not formal omakase.
- [x] google-reviews-captured: Google Reviews Highest-filter packet captured with 30 written reviews - Google Maps reviews were opened in browser, sorted by Highest rating, and 30 written reviews were captured on 2026-05-05. Themes are ready for copy/pitch: hidden-gem interior, fresh/generous sushi, creative roll depth, friendly service, and takeout/delivery reliability.
- [x] fork-built: Template fork is built with real content, preserved links, and no placeholder copy - Bamzi-01 fork/build pass completed for Golden Rolls with restaurant-specific homepage, menu, about, and contact pages; phone, address, official domain, maps, dine-in/takeout/delivery context, Google rating/review proof, and captured menu/review themes are preserved. Production build and screenshot capture passed after a clean .next rebuild.
- [x] improvement-pass-completed: Post-fork improvement pass completed with fixes and evidence - Improvement pass added persistent mobile navigation, wrapped menu category shortcuts, larger mobile menu descriptions, and replaced the fragile embedded map with a reliable location/details card. Production build, screenshot capture, and mobile visual QA passed.
- [x] top-3-improvements: Top 3 sellability improvements identified, implemented, and evidenced - Top three sellability improvements completed: customer-facing About story replaced agency/internal language, homepage service strip clarified hours/phone/directions, and menu proof became guest-facing recommendations while sanitizing concierge KB copy. Production build, screenshot capture, and mobile visual QA passed.
- [x] concierge: AI concierge added/verified with truthful Golden Rolls KB and safe handoffs - AI concierge verified with a truthful Golden Rolls KB, safe phone handoffs for reservations/current availability/allergies, no fake online reservation/provider claims, and deterministic fallback responses when Anthropic API key is unavailable. API transcript captured and reviewed.
- [ ] pitch: Sellable pitch doc created for Golden Rolls outreach/demo
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
- restaurant-website-system/sites/golden-rolls/screenshots/google-reviews-highest-2026-05-05.png
- restaurant-website-system/sites/golden-rolls/scrapes/google-reviews-highest-30-2026-05-05.json
- restaurant-website-system/sites/golden-rolls/scrapes/google-reviews-highest-30-2026-05-05.md
- restaurant-website-system/sites/golden-rolls/google-reviews-themes.md
- restaurant-website-system/sites/golden-rolls/scrapes/capture-google-reviews-cdp.mjs
- restaurant-website-system/sites/golden-rolls/app/page.tsx
- restaurant-website-system/sites/golden-rolls/app/menu/page.tsx
- restaurant-website-system/sites/golden-rolls/app/about/page.tsx
- restaurant-website-system/sites/golden-rolls/app/contact/page.tsx
- restaurant-website-system/sites/golden-rolls/content.example.ts
- restaurant-website-system/sites/golden-rolls/screenshots/preview-home-desktop-2026-05-05.png
- restaurant-website-system/sites/golden-rolls/screenshots/preview-home-mobile-2026-05-05.png
- restaurant-website-system/sites/golden-rolls/screenshots/preview-menu-desktop-2026-05-05.png
- restaurant-website-system/sites/golden-rolls/screenshots/preview-menu-mobile-2026-05-05.png
- restaurant-website-system/sites/golden-rolls/screenshots/preview-contact-desktop-2026-05-05.png
- restaurant-website-system/sites/golden-rolls/screenshots/preview-contact-mobile-2026-05-05.png
- restaurant-website-system/sites/golden-rolls/scrapes/preview-capture-manifest-2026-05-05.json
- restaurant-website-system/sites/golden-rolls/scrapes/preview-home-desktop-2026-05-05.txt
- restaurant-website-system/sites/golden-rolls/scrapes/preview-home-mobile-2026-05-05.txt
- restaurant-website-system/sites/golden-rolls/scrapes/preview-menu-desktop-2026-05-05.txt
- restaurant-website-system/sites/golden-rolls/scrapes/preview-menu-mobile-2026-05-05.txt
- restaurant-website-system/sites/golden-rolls/scrapes/preview-contact-desktop-2026-05-05.txt
- restaurant-website-system/sites/golden-rolls/scrapes/preview-contact-mobile-2026-05-05.txt
- restaurant-website-system/sites/golden-rolls/mc-build-writeback-building-complete-2026-05-05.json
- restaurant-website-system/sites/golden-rolls/improvement-pass-2026-05-05.md
- restaurant-website-system/sites/golden-rolls/components/SiteChrome.tsx
- restaurant-website-system/sites/golden-rolls/mc-build-writeback-improving-complete-2026-05-05.json
- restaurant-website-system/sites/golden-rolls/top-3-improvements-2026-05-05.md
- restaurant-website-system/sites/golden-rolls/mc-build-writeback-top-3-improvements-complete-2026-05-05.json
- restaurant-website-system/sites/golden-rolls/concierge-qa-2026-05-05.md
- restaurant-website-system/sites/golden-rolls/app/api/chat/route.ts
- restaurant-website-system/sites/golden-rolls/components/AskConcierge.tsx
- restaurant-website-system/sites/golden-rolls/scrapes/concierge-api-transcript-2026-05-05.txt
- restaurant-website-system/sites/golden-rolls/mc-build-writeback-concierge-complete-2026-05-05.json

## QA Rounds

- Round 1: pending
- Round 2: pending
- Round 3: pending

## Pitch Artifacts

- Pitch doc: TBD
- Outreach draft: TBD

## Blockers

- stage_writeback: Mission Control agency API writeback is still pending because a trusted Mission Control base URL is unavailable in this runtime. Local concierge artifacts and writeback payload are ready; submit mc-build-writeback-concierge-complete-2026-05-05.json when MC API auth/base URL are configured. Next: Configure Mission Control agency API auth/base URL for OpenClaw, then submit the concierge-complete writeback payload before marking MC as pitch.

## Done Criteria

- Mission Control lead has a simple sales status and current metadata.build_stage.
- Mission Control parent task metadata.requirements mirrors this checklist.
- All required checklist rows are passed.
- Three QA rounds are logged with screenshot evidence.
- Preview URL, pitch doc, outreach draft, and delivery evidence are attached.
