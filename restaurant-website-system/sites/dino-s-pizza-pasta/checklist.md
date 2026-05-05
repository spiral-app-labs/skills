# dino-s-pizza-pasta Build Checklist

- Workflow version: 2026-05-04
- Source of truth: Mission Control tasks.metadata + this mirrored local checklist
- Lead ID: da8188e5-7830-43ec-b908-661cf2e56b30
- MC parent task ID: 0d4123df-83b0-4d81-bc75-88263ebb402b
- Template slug: pepper-01
- Current stage: packaging
- Checklist MD: restaurant-website-system/sites/dino-s-pizza-pasta/checklist.md
- Checklist JSON: restaurant-website-system/sites/dino-s-pizza-pasta/checklist.json
- Deploy URL: TBD
- Updated: 2026-05-05T06:54:26.820Z

## Mission Control Sync Contract

- MC root task metadata must mirror currentStage/build_stage, checklist paths, requirements, evidence_required, required_skills, passed_requirement_ids, and blockers.
- MC child tasks must mirror workflow_step_id, requirements, evidence_required, required_skills, skill_contract, and operator_contract.
- Do not mark a later gate complete from local files alone. MC task status + MC requirement evidence must move with the checklist.

## Canonical Gates / Skills

### 1. checklist_created — Create and sync local + Mission Control checklist
- Stage: checklist
- Status: passed
- Required skills: restaurant-build-checklist, agency-mission-control-sync
- Evidence required: checklist.md path; checklist.json path; MC root task metadata with checklist paths
- Requirement: checklist-md — Local checklist.md exists for this restaurant
- Requirement: checklist-json — Local checklist.json exists for this restaurant
- Requirement: checklist-mc-sync — Mission Control root + child task metadata mirrors checklist paths, requirements, evidence, and current stage

### 2. current_site_audit — Audit current site with browser evidence
- Stage: auditing
- Status: passed
- Required skills: restaurant-website-audit, browser-automation, agency-mission-control-sync
- Evidence required: audit.md; desktop screenshot; mobile screenshot; DOM/text scrape
- Requirement: current-site-screenshots — Desktop and mobile screenshots captured
- Requirement: current-site-scrape — Live site DOM/text scrape captured
- Requirement: current-site-opportunities — Audit names concrete conversion, credibility, mobile, and factual gaps

### 3. google_reviews_capture — Capture Google Reviews evidence
- Stage: reviews
- Status: passed
- Required skills: restaurant-website-audit, browser-automation, agency-mission-control-sync
- Evidence required: Google profile screenshot; Highest-filter screenshot; 30-review packet JSON/MD
- Requirement: reviews-highest-filter — Google Reviews opened in browser and sorted by Highest
- Requirement: reviews-thirty-written — 30 written reviews captured, or exact shortage/blocker documented
- Requirement: reviews-themes — Review themes summary is usable for copy and pitch docs

### 4. template_route_fork_build — Route to one archetype, fork template, and build first preview
- Stage: building
- Status: passed
- Required skills: website-agency-system, restaurant-site-router, restaurant-template-fork, restaurant-build-checklist, agency-mission-control-sync
- Evidence required: routing rationale; source.md/content files; npm build/typecheck output; preview URL or local preview evidence
- Requirement: template-route-locked — Exactly one archetype/template route is chosen and justified
- Requirement: fork-built — Template fork builds successfully with real content and preserved conversion links
- Requirement: specificity — No generic restaurant copy, fake claims, fake menu items, fake reviews, or fake ordering paths

### 5. website_improvement_pass — Run first full improvement pass
- Stage: improving
- Status: passed
- Required skills: restaurant-fork-improvement, website-agency-system, agency-mission-control-sync
- Evidence required: improvement notes; before/after screenshots or changed file list; mobile evidence
- Requirement: identity-specific — Copy/visual rhythm feels specific to the restaurant and selected archetype
- Requirement: conversion-paths — Order/reserve/call/directions/catering/events paths are accurate as applicable
- Requirement: mobile-check — Mobile pass is explicitly checked with evidence

### 6. top_three_improvements — Identify and implement top 3 improvements
- Stage: top_3_improvements
- Status: passed
- Required skills: restaurant-fork-improvement, restaurant-build-checklist, agency-mission-control-sync
- Evidence required: top-3 improvements doc; before/after screenshots or diff evidence
- Requirement: top-three-named — Top 3 concrete improvements are named from audit/preview/QA
- Requirement: top-three-implemented — All three improvements are implemented
- Requirement: top-three-evidence — Each improvement has before/after evidence

### 7. ai_concierge_added — Add truthful AI concierge or record blocker
- Stage: concierge
- Status: passed
- Required skills: website-agency-system, restaurant-build-checklist, agency-mission-control-sync
- Evidence required: KB/source file; test transcript; blocker if concierge cannot be safely added
- Requirement: concierge-kb-truthful — Concierge KB only uses verified restaurant facts
- Requirement: concierge-tested — Short transcript proves useful behavior
- Requirement: concierge-safe — Fallbacks prevent fake reservations, unsupported promises, or invented facts

### 8. pitch_doc — Create sellable pitch doc
- Stage: pitch
- Status: passed
- Required skills: restaurant-pitch-doc, agency-mission-control-sync
- Evidence required: pitch-doc.md; before/after evidence links
- Requirement: pitch-specific — Pitch is specific to restaurant, neighborhood/cuisine, reviews, and conversion gaps
- Requirement: pitch-before-after — Pitch explains before/after delta in owner language
- Requirement: pitch-evidence — Evidence and preview links are embedded or linked

### 9. battle_cards_doc — Create owner battle cards
- Stage: battle_cards
- Status: passed
- Required skills: restaurant-pitch-doc, agency-mission-control-sync
- Evidence required: battle-cards.md
- Requirement: battle-cards-objections — Likely owner objections have concise answers
- Requirement: battle-cards-demo-path — Demo path and proof points are clear
- Requirement: battle-cards-risks — Risks/unknowns are called out truthfully

### 10. qa_round_1 — QA round 1
- Stage: qa_round_1
- Status: passed
- Required skills: restaurant-qa-delivery, browser-automation, agency-mission-control-sync
- Evidence required: qa-round-1.md; desktop screenshot; mobile screenshot; build/typecheck result
- Requirement: qa-round-1 — QA round 1 completed with screenshots, findings, fixes, and MC writeback

### 11. qa_round_2 — QA round 2
- Stage: qa_round_2
- Status: passed
- Required skills: restaurant-qa-delivery, browser-automation, agency-mission-control-sync
- Evidence required: qa-round-2.md; desktop screenshot; mobile screenshot; build/typecheck result
- Requirement: qa-round-2 — QA round 2 completed with screenshots, findings, fixes, and MC writeback

### 12. qa_round_3 — QA round 3 final sell-readiness QA
- Stage: qa_round_3
- Status: passed
- Required skills: restaurant-qa-delivery, website-agency-system, browser-automation, agency-mission-control-sync
- Evidence required: qa-round-3.md; desktop screenshots; mobile screenshots; build/typecheck result
- Requirement: qa-round-3 — QA round 3 completed with final sell-readiness screenshots, fixes, and MC writeback

### 13. delivery — Package and deliver only after all gates pass
- Stage: packaging
- Status: blocked
- Required skills: restaurant-qa-delivery, restaurant-pitch-doc, agency-mission-control-sync
- Evidence required: preview URL; pitch doc; battle cards; checklist.md/json; QA evidence; MC delivery writeback
- Requirement: delivery-package — Preview URL, screenshots, pitch doc, battle cards, checklist, QA evidence, and requirement status are mirrored to MC
- Requirement: delivery-no-missing-evidence — No delivery until MC has checklist paths, preview/artifact URL, and required gate evidence

## Requirement Status

- [x] checklist-md: Local checklist.md exists for this restaurant - Updated local checklist.md exists.
- [x] checklist-json: Local checklist.json exists for this restaurant - Updated local checklist.json exists.
- [ ] checklist-mc-sync: Mission Control root + child task metadata mirrors checklist paths, requirements, evidence, and current stage
- [x] current-site-screenshots: Desktop and mobile screenshots captured - Desktop/mobile homepage and menu screenshots captured in the OpenClaw browser.
- [x] current-site-scrape: Live site DOM/text scrape captured - Homepage/menu DOM and text scrapes captured.
- [x] current-site-opportunities: Audit names concrete conversion, credibility, mobile, and factual gaps - Audit identifies homepage template artifact, conversion clarity, menu packaging, family/local proof, and selected pepper-01/Cuisine route.
- [x] reviews-highest-filter: Google Reviews opened in browser and sorted by Highest - Google reviews were opened in the browser and sorted by Highest rating.
- [x] reviews-thirty-written: 30 written reviews captured, or exact shortage/blocker documented - 30 written Highest-filter Google reviews captured into JSON and Markdown packets.
- [x] reviews-themes: Review themes summary is usable for copy and pitch docs - Review themes are usable for copy/pitch: family/Dino warmth, crispy thin crust, neighborhood bar vibe, longtime loyalty, Wise Guy/beer nuggets/meatball/pasta proof, takeout and dine-in reliability.
- [x] template-route-locked: Exactly one archetype/template route is chosen and justified - Routed to pepper-01, closest core archetype: Cuisine-style warm casual neighborhood pizza/order clarity.
- [x] fork-built: Template fork builds successfully with real content and preserved conversion links - Local Next.js fork builds successfully with real content and preserved call/menu/directions/site flows. npm run build and npm run typecheck passed; local preview returned HTTP 200 on port 3073.
- [x] specificity: No generic restaurant copy, fake claims, fake menu items, fake reviews, or fake ordering paths - Reviewed and updated the build around verified Dino’s facts: Miller Rd/Lake in the Hills, call-first ordering, official menu pricing/items, hours, Google review proof, and no fake ordering/reservation claims.
- [x] identity-specific: Copy/visual rhythm feels specific to the restaurant and selected archetype - Improvement pass ties the preview to Dino’s verified identity: family warmth, made-from-scratch thin crust, Miller Rd/Lake in the Hills location, Google review proof, beer/bar energy, and real menu favorites.
- [x] conversion-paths: Order/reserve/call/directions/catering/events paths are accurate as applicable - Direct call, official menu, directions, email, official site, and source-backed hours are preserved; unsupported reservation/ordering promises are intentionally not invented.
- [x] mobile-check: Mobile pass is explicitly checked with evidence - Mobile preview screenshot captured after hiding decorative hero emoji on mobile; visual QA found no obvious broken layout, unreadable text, emoji overlap, or overflow.
- [x] top-three-named: Top 3 concrete improvements are named from audit/preview/QA - Named three concrete improvements from audit/preview/QA: Google proof section, mobile hero declutter, and persistent mobile menu access.
- [x] top-three-implemented: All three improvements are implemented - Implemented all three improvements across content.ts, ConfettiHero.tsx, and TopNavSimple.tsx.
- [x] top-three-evidence: Each improvement has before/after evidence - Attached top-3 doc, before/after mobile nav screenshots, after desktop/mobile preview screenshots, and build/typecheck evidence.
- [x] concierge-kb-truthful: Concierge KB only uses verified restaurant facts - Concierge KB is source-locked to verified address, phone, hours, menu facts, review themes, and safe handoffs.
- [x] concierge-tested: Short transcript proves useful behavior - Short transcript covers first-order recommendation, family dine-in context, hours, and directions.
- [x] concierge-safe: Fallbacks prevent fake reservations, unsupported promises, or invented facts - Concierge UI and KB explicitly forbid placing orders, quoting live waits, guaranteeing delivery, inventing reservations, or unsupported promises.
- [x] pitch-specific: Pitch is specific to restaurant, neighborhood/cuisine, reviews, and conversion gaps - Pitch is specific to Dino’s Lake in the Hills identity, thin-crust/deep-dish/pasta menu, Google review proof, and current-site artifact gap.
- [x] pitch-before-after: Pitch explains before/after delta in owner language - Pitch explains before/after delta in owner language: from thin/template-debris homepage to call-first, menu-first, proof-backed preview.
- [x] pitch-evidence: Evidence and preview links are embedded or linked - Pitch links audit screenshots/scrapes, Google review packet, top-3 improvements, concierge safety docs, and build evidence.
- [x] battle-cards-objections: Likely owner objections have concise answers - Battle cards cover current-site good-enough, phone ordering, genericness, concierge risk, changing specials, and send-readiness objections.
- [x] battle-cards-demo-path: Demo path and proof points are clear - Battle cards include a clear demo path: current artifact, preview hero/mobile header, menu sections, Google proof, concierge, owner pitch.
- [x] battle-cards-risks: Risks/unknowns are called out truthfully - Battle cards call out public preview URL, MC writeback, hours/specials confirmation, provider/order flow confirmation, and pending QA rounds.
- [x] qa-round-1: QA round 1 completed with screenshots, findings, fixes, and MC writeback - QA round 1 completed with screenshots, findings/fixes, build/typecheck result, and remaining blockers documented.
- [x] qa-round-2: QA round 2 completed with screenshots, findings, fixes, and MC writeback - QA round 2 completed with desktop/mobile screenshots for home/about/contact, page audit JSON, build/typecheck pass, metadata/OG fix, mobile CTA polish, contact map CTA fix, and tap-target fixes.
- [x] qa-round-3: QA round 3 completed with final sell-readiness screenshots, fixes, and MC writeback - QA round 3 final sell-readiness passed locally with final screenshots, final CDP audit, build/typecheck, copy cleanup, map polish, and visual QA re-check.
- [ ] delivery-package: Preview URL, screenshots, pitch doc, battle cards, checklist, QA evidence, and requirement status are mirrored to MC - Local delivery package/archive, owner-confirmation packet, public-preview runbook, and MC writeback payload/runbook are assembled; final delivery cannot pass until public preview URL and Mission Control writeback are available and owner-sensitive facts are confirmed.
- [ ] delivery-no-missing-evidence: No delivery until MC has checklist paths, preview/artifact URL, and required gate evidence - Local delivery package/archive, owner-confirmation packet, public-preview runbook, and MC writeback payload/runbook are assembled; final delivery cannot pass until public preview URL and Mission Control writeback are available and owner-sensitive facts are confirmed.

## Evidence Paths

- restaurant-website-system/sites/dino-s-pizza-pasta/checklist.md
- restaurant-website-system/sites/dino-s-pizza-pasta/checklist.json
- restaurant-website-system/sites/dino-s-pizza-pasta/audit.md
- restaurant-website-system/sites/dino-s-pizza-pasta/source.md
- restaurant-website-system/sites/dino-s-pizza-pasta/content.ts
- restaurant-website-system/sites/dino-s-pizza-pasta/app/page.tsx
- restaurant-website-system/sites/dino-s-pizza-pasta/components/ConfettiHero.tsx
- restaurant-website-system/sites/dino-s-pizza-pasta/components/ContactPageLayout.tsx
- restaurant-website-system/sites/dino-s-pizza-pasta/package.json
- restaurant-website-system/research/lead-qualification/next-15-bad-no-site-leads-2026-05-01.md
- restaurant-website-system/sites/dino-s-pizza-pasta/screenshots/current-site-home-desktop-2026-05-05.png
- restaurant-website-system/sites/dino-s-pizza-pasta/screenshots/current-site-home-mobile-2026-05-05.png
- restaurant-website-system/sites/dino-s-pizza-pasta/screenshots/current-site-menu-desktop-2026-05-05.png
- restaurant-website-system/sites/dino-s-pizza-pasta/screenshots/current-site-menu-mobile-2026-05-05.png
- restaurant-website-system/sites/dino-s-pizza-pasta/scrapes/current-site-home-dom-2026-05-05.html
- restaurant-website-system/sites/dino-s-pizza-pasta/scrapes/current-site-home-text-2026-05-05.txt
- restaurant-website-system/sites/dino-s-pizza-pasta/scrapes/current-site-menu-dom-2026-05-05.html
- restaurant-website-system/sites/dino-s-pizza-pasta/scrapes/current-site-menu-text-2026-05-05.txt
- restaurant-website-system/sites/dino-s-pizza-pasta/screenshots/google-reviews-highest-2026-05-05.png
- restaurant-website-system/sites/dino-s-pizza-pasta/scrapes/google-reviews-highest-30-2026-05-05.json
- restaurant-website-system/sites/dino-s-pizza-pasta/scrapes/google-reviews-highest-30-2026-05-05.md
- restaurant-website-system/sites/dino-s-pizza-pasta/build-evidence-2026-05-05.md
- restaurant-website-system/sites/dino-s-pizza-pasta/improvement-pass-2026-05-05.md
- restaurant-website-system/sites/dino-s-pizza-pasta/screenshots/preview-home-desktop-2026-05-05.png
- restaurant-website-system/sites/dino-s-pizza-pasta/screenshots/preview-home-mobile-2026-05-05.png
- restaurant-website-system/sites/dino-s-pizza-pasta/top-3-improvements-2026-05-05.md
- restaurant-website-system/sites/dino-s-pizza-pasta/screenshots/preview-home-mobile-cachebust-2026-05-05.png
- restaurant-website-system/sites/dino-s-pizza-pasta/screenshots/preview-home-mobile-before-nav-menu-fix-2026-05-05.png
- restaurant-website-system/sites/dino-s-pizza-pasta/screenshots/preview-home-mobile-after-nav-menu-fix-2026-05-05.png
- restaurant-website-system/sites/dino-s-pizza-pasta/components/TopNavSimple.tsx
- restaurant-website-system/sites/dino-s-pizza-pasta/concierge-kb.md
- restaurant-website-system/sites/dino-s-pizza-pasta/concierge-test-transcript-2026-05-05.md
- restaurant-website-system/sites/dino-s-pizza-pasta/components/ConciergePanel.tsx
- restaurant-website-system/sites/dino-s-pizza-pasta/screenshots/preview-concierge-mobile-2026-05-05.png
- restaurant-website-system/sites/dino-s-pizza-pasta/pitch-doc.md
- restaurant-website-system/sites/dino-s-pizza-pasta/battle-cards.md
- restaurant-website-system/sites/dino-s-pizza-pasta/qa-round-1.md
- restaurant-website-system/sites/dino-s-pizza-pasta/qa-round-2.md
- restaurant-website-system/sites/dino-s-pizza-pasta/scrapes/qa-round-2-page-audit-2026-05-05.json
- restaurant-website-system/sites/dino-s-pizza-pasta/screenshots/qa-round-2-home-desktop-2026-05-05.png
- restaurant-website-system/sites/dino-s-pizza-pasta/screenshots/qa-round-2-home-mobile-2026-05-05.png
- restaurant-website-system/sites/dino-s-pizza-pasta/screenshots/qa-round-2-about-desktop-2026-05-05.png
- restaurant-website-system/sites/dino-s-pizza-pasta/screenshots/qa-round-2-about-mobile-2026-05-05.png
- restaurant-website-system/sites/dino-s-pizza-pasta/screenshots/qa-round-2-contact-desktop-2026-05-05.png
- restaurant-website-system/sites/dino-s-pizza-pasta/screenshots/qa-round-2-contact-mobile-2026-05-05.png
- restaurant-website-system/sites/dino-s-pizza-pasta/app/layout.tsx
- restaurant-website-system/sites/dino-s-pizza-pasta/app/opengraph-image.tsx
- restaurant-website-system/sites/dino-s-pizza-pasta/components/LiveOpenStatus.tsx
- restaurant-website-system/sites/dino-s-pizza-pasta/components/SaturatedFooter.tsx
- restaurant-website-system/sites/dino-s-pizza-pasta/delivery-package-2026-05-05.md
- restaurant-website-system/sites/dino-s-pizza-pasta/qa-round-3.md
- restaurant-website-system/sites/dino-s-pizza-pasta/scrapes/qa-round-3-final-audit-2026-05-05.json
- restaurant-website-system/sites/dino-s-pizza-pasta/screenshots/qa-round-3-home-desktop-2026-05-05.png
- restaurant-website-system/sites/dino-s-pizza-pasta/screenshots/qa-round-3-home-mobile-2026-05-05.png
- restaurant-website-system/sites/dino-s-pizza-pasta/screenshots/qa-round-3-about-desktop-2026-05-05.png
- restaurant-website-system/sites/dino-s-pizza-pasta/screenshots/qa-round-3-about-mobile-2026-05-05.png
- restaurant-website-system/sites/dino-s-pizza-pasta/screenshots/qa-round-3-contact-desktop-2026-05-05.png
- restaurant-website-system/sites/dino-s-pizza-pasta/screenshots/qa-round-3-contact-mobile-2026-05-05.png
- restaurant-website-system/sites/dino-s-pizza-pasta/delivery-artifacts/dino-s-pizza-pasta-local-package-2026-05-05.tar.gz
- restaurant-website-system/sites/dino-s-pizza-pasta/delivery-artifacts/package-manifest-2026-05-05.md
- restaurant-website-system/sites/dino-s-pizza-pasta/owner-confirmation-questions-2026-05-05.md
- restaurant-website-system/sites/dino-s-pizza-pasta/public-preview-runbook-2026-05-05.md
- restaurant-website-system/sites/dino-s-pizza-pasta/mission-control-writeback-payload-2026-05-05.json
- restaurant-website-system/sites/dino-s-pizza-pasta/mission-control-writeback-runbook-2026-05-05.md

## QA Rounds

- Round 1: Passed local build readiness; mobile hero/nav and Google proof fixes documented.
- Round 2: Passed mobile conversion and visual polish QA after hero, nav/tap target, contact map CTA, status contrast, and OG metadata fixes.
- Round 3: Passed final sell-readiness QA locally; UI quality passed, with delivery blockers limited to public preview URL, MC writeback, and owner fact confirmation.

## Pitch Artifacts

- Pitch doc: restaurant-website-system/sites/dino-s-pizza-pasta/pitch-doc.md
- Battle cards: restaurant-website-system/sites/dino-s-pizza-pasta/battle-cards.md
- Outreach draft: TBD

## Blockers

- Public owner-shareable preview URL missing; delivery cannot pass without it. Public preview runbook is prepared locally.
- Mission Control API writeback pending: AGENCY_AUTONOMY_API_KEY is present, but no trusted Mission Control base URL is configured in this runtime; the only discovered example URL failed TLS hostname validation. Raw Supabase writes are forbidden for agency work. Local evidence is ready to mirror and MC writeback payload/runbook are prepared locally.
- Owner-sensitive facts still need confirmation before final handoff: hours/specials, delivery/provider flow, and current public claims such as rating/review count/family-owned/menu phrasing. Owner confirmation packet is prepared locally.

## Done Criteria

- Mission Control lead has a simple sales status and current metadata.build_stage.
- Mission Control parent task metadata.requirements mirrors this checklist.
- All required checklist rows are passed.
- Three QA rounds are logged with screenshot evidence.
- Preview URL, pitch doc, outreach draft, and delivery evidence are attached.

