# tekka-sushi Build Checklist

- Workflow version: 2026-05-04
- Source of truth: Mission Control tasks.metadata + this mirrored local checklist
- Lead ID: 07fb5758-b0e2-48b6-9c3c-ee8372b8a388
- MC parent task ID: 58f50474-9827-4dc2-9b44-2d64bdab0bac
- Template slug: qitchen
- Current stage: checklist
- Checklist MD: restaurant-website-system/sites/tekka-sushi/checklist.md
- Checklist JSON: restaurant-website-system/sites/tekka-sushi/checklist.json
- Deploy URL: TBD
- Updated: 2026-05-08T02:24:45.069Z


## Lead Qualification (local complete; MC writeback pending)

- Decision: **Build**
- Selected archetype/register: **Qitchen**
- Why-switch sentence: If Tekka Sushi saw our redesign, the specific reason they would switch is that their owned website currently makes the menu look fake/template-filled, while a Qitchen-led site can make their real sushi, sashimi, ramen, and roll menu feel trustworthy and order-ready in seconds.
- Passed locally: `lead-fit-qualified`, `lead-fit-seven-checks`, `lead-fit-evidence`
- Qualification artifact: `restaurant-website-system/sites/tekka-sushi/qualification/lead-fit-qualification-2026-05-08.md`
- Qualification JSON: `restaurant-website-system/sites/tekka-sushi/qualification/lead-fit-qualification-2026-05-08.json`
- MC writeback blocker: `/api/agency/leads/:leadId/build` currently returns `column tasks.blocked does not exist`; replay qualification + checklist path writeback after the Mission Control build-route fallback deploys.

## Structured Lead Metadata

- Restaurant: Tekka Sushi
- Address: 84 Biesterfield Rd, Elk Grove Village, IL 60007
- Phone: (224) 875-7188
- Official site: https://tekkasushi.com/
- Official menu: https://tekkasushi.com/menu
- Order paths: Beyond Menu; tekkasushiil.com
- Public rating signal: Restaurantji 4.8 / 170 ratings (Google evidence still pending browser capture)
- Core current-site gap: official menu exposes placeholder/template copy while real sushi menu depth exists offsite.

## Mission Control Sync Contract

- MC root task metadata must mirror currentStage/build_stage, checklist paths, requirements, evidence_required, required_skills, passed_requirement_ids, and blockers.
- MC child tasks must mirror workflow_step_id, requirements, evidence_required, required_skills, skill_contract, and operator_contract.
- Do not mark a later gate complete from local files alone. MC task status + MC requirement evidence must move with the checklist.

## Canonical Gates / Skills

### 1. checklist_created — Create and sync local + Mission Control checklist
- Stage: checklist
- Status: pending
- Required skills: restaurant-build-checklist, agency-mission-control-sync
- Evidence required: checklist.md path; checklist.json path; MC root task metadata with checklist paths
- Requirement: checklist-md — Local checklist.md exists for this restaurant
- Requirement: checklist-json — Local checklist.json exists for this restaurant
- Requirement: checklist-mc-sync — Mission Control root + child task metadata mirrors checklist paths, requirements, evidence, and current stage

### 2. current_site_audit — Audit current site with browser evidence
- Stage: auditing
- Status: pending
- Required skills: restaurant-website-audit, browser-automation, agency-mission-control-sync
- Evidence required: audit.md; desktop screenshot; mobile screenshot; DOM/text scrape
- Requirement: current-site-screenshots — Desktop and mobile screenshots captured
- Requirement: current-site-scrape — Live site DOM/text scrape captured
- Requirement: current-site-opportunities — Audit names concrete conversion, credibility, mobile, and factual gaps

### 3. google_reviews_capture — Capture Google Reviews evidence
- Stage: reviews
- Status: pending
- Required skills: restaurant-website-audit, browser-automation, agency-mission-control-sync
- Evidence required: Google profile screenshot; Highest-filter screenshot; 30-review packet JSON/MD
- Requirement: reviews-highest-filter — Google Reviews opened in browser and sorted by Highest
- Requirement: reviews-thirty-written — 30 written reviews captured, or exact shortage/blocker documented
- Requirement: reviews-themes — Review themes summary is usable for copy and pitch docs

### 4. template_route_fork_build — Route to one archetype, fork template, and build first preview
- Stage: building
- Status: pending
- Required skills: website-agency-system, restaurant-site-router, restaurant-template-fork, restaurant-build-checklist, agency-mission-control-sync
- Evidence required: routing rationale; source.md/content files; npm build/typecheck output; preview URL or local preview evidence
- Requirement: template-route-locked — Exactly one archetype/template route is chosen and justified
- Requirement: fork-built — Template fork builds successfully with real content and preserved conversion links
- Requirement: specificity — No generic restaurant copy, fake claims, fake menu items, fake reviews, or fake ordering paths

### 5. website_improvement_pass — Run first full improvement pass
- Stage: improving
- Status: pending
- Required skills: restaurant-fork-improvement, website-agency-system, agency-mission-control-sync
- Evidence required: improvement notes; before/after screenshots or changed file list; mobile evidence
- Requirement: identity-specific — Copy/visual rhythm feels specific to the restaurant and selected archetype
- Requirement: conversion-paths — Order/reserve/call/directions/catering/events paths are accurate as applicable
- Requirement: mobile-check — Mobile pass is explicitly checked with evidence

### 6. top_three_improvements — Identify and implement top 3 improvements
- Stage: top_3_improvements
- Status: pending
- Required skills: restaurant-fork-improvement, restaurant-build-checklist, agency-mission-control-sync
- Evidence required: top-3 improvements doc; before/after screenshots or diff evidence
- Requirement: top-three-named — Top 3 concrete improvements are named from audit/preview/QA
- Requirement: top-three-implemented — All three improvements are implemented
- Requirement: top-three-evidence — Each improvement has before/after evidence

### 7. ai_concierge_added — Add truthful AI concierge or record blocker
- Stage: concierge
- Status: pending
- Required skills: website-agency-system, restaurant-build-checklist, agency-mission-control-sync
- Evidence required: KB/source file; test transcript; blocker if concierge cannot be safely added
- Requirement: concierge-kb-truthful — Concierge KB only uses verified restaurant facts
- Requirement: concierge-tested — Short transcript proves useful behavior
- Requirement: concierge-safe — Fallbacks prevent fake reservations, unsupported promises, or invented facts

### 8. pitch_doc — Create sellable pitch doc
- Stage: pitch
- Status: pending
- Required skills: restaurant-pitch-doc, agency-mission-control-sync
- Evidence required: pitch-doc.md; before/after evidence links
- Requirement: pitch-specific — Pitch is specific to restaurant, neighborhood/cuisine, reviews, and conversion gaps
- Requirement: pitch-before-after — Pitch explains before/after delta in owner language
- Requirement: pitch-evidence — Evidence and preview links are embedded or linked

### 9. battle_cards_doc — Create owner battle cards
- Stage: battle_cards
- Status: pending
- Required skills: restaurant-pitch-doc, agency-mission-control-sync
- Evidence required: battle-cards.md
- Requirement: battle-cards-objections — Likely owner objections have concise answers
- Requirement: battle-cards-demo-path — Demo path and proof points are clear
- Requirement: battle-cards-risks — Risks/unknowns are called out truthfully

### 10. qa_round_1 — QA round 1
- Stage: qa_round_1
- Status: pending
- Required skills: restaurant-qa-delivery, browser-automation, agency-mission-control-sync
- Evidence required: qa-round-1.md; desktop screenshot; mobile screenshot; build/typecheck result
- Requirement: qa-round-1 — QA round 1 completed with screenshots, findings, fixes, and MC writeback

### 11. qa_round_2 — QA round 2
- Stage: qa_round_2
- Status: pending
- Required skills: restaurant-qa-delivery, browser-automation, agency-mission-control-sync
- Evidence required: qa-round-2.md; desktop screenshot; mobile screenshot; build/typecheck result
- Requirement: qa-round-2 — QA round 2 completed with screenshots, findings, fixes, and MC writeback

### 12. qa_round_3 — QA round 3 final sell-readiness QA
- Stage: qa_round_3
- Status: pending
- Required skills: restaurant-qa-delivery, website-agency-system, browser-automation, agency-mission-control-sync
- Evidence required: qa-round-3.md; desktop screenshots; mobile screenshots; build/typecheck result
- Requirement: qa-round-3 — QA round 3 completed with final sell-readiness screenshots, fixes, and MC writeback

### 13. delivery — Package and deliver only after all gates pass
- Stage: packaging
- Status: pending
- Required skills: restaurant-qa-delivery, restaurant-pitch-doc, agency-mission-control-sync
- Evidence required: preview URL; pitch doc; battle cards; checklist.md/json; QA evidence; MC delivery writeback
- Requirement: delivery-package — Preview URL, screenshots, pitch doc, battle cards, checklist, QA evidence, and requirement status are mirrored to MC
- Requirement: delivery-no-missing-evidence — No delivery until MC has checklist paths, preview/artifact URL, and required gate evidence


## Current-site Audit (local complete; MC writeback pending)

- Audit artifact: `restaurant-website-system/sites/tekka-sushi/current-site-audit/audit-2026-05-08.md`
- Desktop screenshot: `restaurant-website-system/sites/tekka-sushi/current-site-audit/screenshots/menu-desktop-fullpage.png`
- Mobile screenshot: `restaurant-website-system/sites/tekka-sushi/current-site-audit/screenshots/menu-mobile-390x1400.png`
- Scrapes: `restaurant-website-system/sites/tekka-sushi/current-site-audit/scrapes/menu.txt`, `home.txt`, `reservation.txt`
- Local passed requirements pending MC replay: `current-site-screenshots`, `current-site-scrape`, `current-site-opportunities`
- Core finding: the official menu page exposes placeholder/template content and Colorlib residue while real sushi menu/order depth exists offsite.


## Google Reviews Capture (local complete; MC writeback pending)

- Google rating/review count: **4.8 / 370 reviews**
- Sort/filter: **Highest rating**
- Packet JSON: `restaurant-website-system/sites/tekka-sushi/google-reviews/google-reviews-highest-2026-05-08.json`
- Packet MD: `restaurant-website-system/sites/tekka-sushi/google-reviews/google-reviews-highest-2026-05-08.md`
- Screenshot: `restaurant-website-system/sites/tekka-sushi/google-reviews/screenshots/google-reviews-highest-cdp.png`
- Local passed requirements pending MC replay: `reviews-highest-filter`, `reviews-thirty-written`, `reviews-themes`
- Themes: fresh sushi/sashimi, beautiful presentation, modern/chic atmosphere, friendly attentive service, order/takeout quality.


## Template Routing (local locked; MC writeback pending)

- Chosen archetype: **Qitchen**
- Template slug: `qitchen-01`
- Register guardrail: de-ceremonialized Qitchen — Tekka is $20–30 dine-in/takeout/delivery sushi, not omakase/ticketed fine dining.
- Routing note: `restaurant-website-system/sites/tekka-sushi/routing/template-route-2026-05-08.md`
- Routing JSON: `restaurant-website-system/sites/tekka-sushi/routing/template-route-2026-05-08.json`
- Local passed requirements pending MC replay: `route-one-archetype`, `template-route-locked`


## Template Fork / Build (local complete; MC writeback pending)

- Forked template: `qitchen-01` → `sites/tekka-sushi`
- Fork method: rsync into existing artifact directory because checklist/evidence already existed and `--force` overwrite was not authorized.
- Metadata: `restaurant-website-system/sites/tekka-sushi/.agency-template.json`
- Package: `restaurant-website-system/sites/tekka-sushi/package.json`
- Verification: `npm ci` passed; `npm run typecheck` passed; `npm run build` passed (7 static pages generated).
- Dependency note: npm audit reports 1 moderate and 1 critical inherited from the qitchen template dependency set; do not force-upgrade without a scoped template/site fix.
- Local passed requirements pending MC replay: `template-fork-build-complete`


## Website Improvement Pass (local complete; MC writeback pending)

- Personalized `qitchen-01` content for Tekka Sushi in `content.example.ts`.
- Added truth-safe Tekka positioning, order/call/directions CTAs, location/phone/hours, Google proof, and verified menu/review anchors.
- Evidence note: `restaurant-website-system/sites/tekka-sushi/build-pass/content-pass-2026-05-08.md`
- Verification: `npm run typecheck` passed; `npm run build` passed.
- Remaining risks before final QA: placeholder imagery and inherited dependency audit warnings.
- Local passed requirements pending MC replay: `website-improvement-pass-complete`, `build-run`


## Top 3 Improvements (local complete; MC writeback ready)

- Improvement 1: replaced fake/placeholder menu with verified Tekka menu/review anchors.
- Improvement 2: added order/call/directions conversion on home + mobile.
- Improvement 3: replaced fake reservation form with truthful order/call/directions handoffs.
- Evidence: `restaurant-website-system/sites/tekka-sushi/top-three-improvements/top-three-improvements-2026-05-08.md`
- Verification: `npm run typecheck` passed; `npm run build` passed.
- Local passed requirements: `top-3-improvements-identified`, `top-3-improvements-implemented`, `top-three-before-after-evidence`

## Requirement Status

- [x] checklist-md: Local checklist.md exists for this restaurant (local; MC mirror pending)
- [x] checklist-json: Local checklist.json exists for this restaurant (local; MC mirror pending)
- [ ] checklist-mc-sync: Mission Control root + child task metadata mirrors checklist paths, requirements, evidence, and current stage
- [x] current-site-screenshots: Desktop and mobile screenshots captured (local; MC mirror pending)
- [x] current-site-scrape: Live site DOM/text scrape captured (local; MC mirror pending)
- [x] current-site-opportunities: Audit names concrete conversion, credibility, mobile, and factual gaps (local; MC mirror pending)
- [x] reviews-highest-filter: Google Reviews opened in browser and sorted by Highest (local; MC mirror pending)
- [x] reviews-thirty-written: 30 written reviews captured (local; MC mirror pending)
- [x] reviews-themes: Review themes summary is usable for copy and pitch docs (local; MC mirror pending)
- [x] template-route-locked: Exactly one archetype/template route is chosen and justified (local; MC mirror pending)
- [ ] fork-built: Template fork builds successfully with real content and preserved conversion links
- [ ] specificity: No generic restaurant copy, fake claims, fake menu items, fake reviews, or fake ordering paths
- [ ] identity-specific: Copy/visual rhythm feels specific to the restaurant and selected archetype
- [ ] conversion-paths: Order/reserve/call/directions/catering/events paths are accurate as applicable
- [ ] mobile-check: Mobile pass is explicitly checked with evidence
- [ ] top-three-named: Top 3 concrete improvements are named from audit/preview/QA
- [ ] top-three-implemented: All three improvements are implemented
- [ ] top-three-evidence: Each improvement has before/after evidence
- [ ] concierge-kb-truthful: Concierge KB only uses verified restaurant facts
- [ ] concierge-tested: Short transcript proves useful behavior
- [ ] concierge-safe: Fallbacks prevent fake reservations, unsupported promises, or invented facts
- [ ] pitch-specific: Pitch is specific to restaurant, neighborhood/cuisine, reviews, and conversion gaps
- [ ] pitch-before-after: Pitch explains before/after delta in owner language
- [ ] pitch-evidence: Evidence and preview links are embedded or linked
- [ ] battle-cards-objections: Likely owner objections have concise answers
- [ ] battle-cards-demo-path: Demo path and proof points are clear
- [ ] battle-cards-risks: Risks/unknowns are called out truthfully
- [ ] qa-round-1: QA round 1 completed with screenshots, findings, fixes, and MC writeback
- [ ] qa-round-2: QA round 2 completed with screenshots, findings, fixes, and MC writeback
- [ ] qa-round-3: QA round 3 completed with final sell-readiness screenshots, fixes, and MC writeback
- [ ] delivery-package: Preview URL, screenshots, pitch doc, battle cards, checklist, QA evidence, and requirement status are mirrored to MC
- [ ] delivery-no-missing-evidence: No delivery until MC has checklist paths, preview/artifact URL, and required gate evidence

## Evidence Paths

- restaurant-website-system/sites/tekka-sushi/checklist.md
- restaurant-website-system/sites/tekka-sushi/checklist.json
- restaurant-website-system/sites/tekka-sushi/qualification/lead-fit-qualification-2026-05-08.md
- restaurant-website-system/sites/tekka-sushi/qualification/lead-fit-qualification-2026-05-08.json
- restaurant-website-system/research/lead-qualification/tekka-sushi-seed-validation-2026-05-07.md
- restaurant-website-system/research/lead-qualification/tekka-sushi-evidence-2026-05-07/screenshots/tekkasushi-menu-placeholder-fullpage.png

- restaurant-website-system/sites/tekka-sushi/current-site-audit/scrapes/home.txt
- restaurant-website-system/sites/tekka-sushi/current-site-audit/scrapes/reservation.txt
- restaurant-website-system/sites/tekka-sushi/app/page.tsx
- restaurant-website-system/sites/tekka-sushi/app/menu/page.tsx
- restaurant-website-system/sites/tekka-sushi/components/MenuList.tsx
- restaurant-website-system/sites/tekka-sushi/content.example.ts
- restaurant-website-system/sites/tekka-sushi/components/HomeProofPanel.tsx
- restaurant-website-system/sites/tekka-sushi/components/StickyMobileActions.tsx
- restaurant-website-system/sites/tekka-sushi/components/ReservationFormPanel.tsx

## Mobile/preview evidence — 2026-05-08

- Mobile home screenshot: `restaurant-website-system/sites/tekka-sushi/screenshots/local-preview-mobile-home-2026-05-08-v2.png`
- Mobile menu screenshot: `restaurant-website-system/sites/tekka-sushi/screenshots/local-preview-mobile-menu-2026-05-08-v4.png`
- Desktop home screenshot: `restaurant-website-system/sites/tekka-sushi/screenshots/local-preview-desktop-home-2026-05-08.png`
- Checks: `npm run typecheck` passed; `npm run build` passed; 390px menu DOM scroll width matched viewport width after mobile menu layout fixes.


## AI Concierge (local complete; MC writeback ready)

- Added truth-safe rule-based Tekka Concierge on the Visit page.
- Component: `restaurant-website-system/sites/tekka-sushi/components/TekkaConcierge.tsx`
- KB/test transcript: `restaurant-website-system/sites/tekka-sushi/ai-concierge/concierge-kb-and-test-2026-05-08.md`
- Screenshot: `restaurant-website-system/sites/tekka-sushi/screenshots/local-preview-concierge-entry-desktop-2026-05-08.png`
- Guardrail: no fake reservations, no invented prices/allergen claims, no real-time availability; unsupported questions route to phone fallback.
- Verification: `npm run typecheck` passed; `npm run build` passed; Playwright DOM check found the entry point and response text.
- Local passed requirements: `concierge-visible`, `concierge-tested`, `concierge-safe`


## Pitch Doc (local complete; MC writeback ready)

- Pitch doc: `restaurant-website-system/sites/tekka-sushi/pitch/pitch-doc-2026-05-08.md`
- Covers before/after story, evidence links, owner talk track, top-three improvements, and truth guardrails.
- Local passed requirements: `pitch-before-after`, `pitch-evidence`, `pitch-specific`


## Battle Cards (local complete; MC writeback ready)

- Battle cards: `restaurant-website-system/sites/tekka-sushi/battle-cards/battle-cards-2026-05-08.md`
- Covers owner objections, demo path, proof points, and delivery risks.
- Local passed requirements: `battle-cards-objections`, `battle-cards-demo-path`, `battle-cards-risks`


## QA Round 2 (local complete; MC writeback ready)

- QA doc: `restaurant-website-system/sites/tekka-sushi/qa/qa-round-2-2026-05-08.md`
- Fixes applied: reduced mobile hero height and captured 390px route evidence for home/menu/visit.
- Verification: `npm run typecheck` passed; `npm run build` passed; no horizontal overflow on tested mobile routes.
- Local passed requirements: `qa2-mobile`, `qa2-conversion`


## QA Round 3 (local complete; MC writeback ready)

- QA doc: `restaurant-website-system/sites/tekka-sushi/qa/qa-round-3-2026-05-08.md`
- Fixes applied: replaced Qitchen placeholder imagery with Tekka-owned official public site/gallery/menu images.
- Verification: `npm run typecheck` passed; `npm run build` passed; updated mobile home/menu screenshots captured.
- Local passed requirements: `qa3-sell-ready`, `qa3-assets-ready`


## Delivery Package (prepared; blocked on public preview URL)

- Delivery package: `restaurant-website-system/sites/tekka-sushi/delivery/delivery-package-2026-05-08.md`
- Package includes checklist, audit, reviews, route, build pass, top-three improvements, concierge, pitch doc, battle cards, QA rounds 1–3, and final screenshots.
- Passed packaging requirements: `delivery-three-qa-rounds`, `delivery-pack`
- Blocker: `delivery-final-url` is missing because no public Vercel/preview URL is attached yet.

## QA Rounds

- Round 1: pending
- Round 2: pending
- Round 3: pending

## Pitch Artifacts

- Pitch doc: TBD
- Battle cards: TBD
- Outreach draft: TBD

## Blockers

- MC build writeback route returns `column tasks.blocked does not exist`; qualification + checklist-path MC replay is pending the build-route fallback fix/deploy.

## Done Criteria

- Mission Control root task metadata.build_stage/currentStage matches this checklist currentStage.
- Mission Control root + child tasks mirror this checklist requirements, evidence_required, required_skills, and checklist paths.
- Every canonical workflow step has either passed evidence in MC or a fresh blocker recorded in MC.
- Three QA rounds are logged with desktop/mobile screenshot evidence and MC writeback.
- Preview URL, pitch doc, battle cards, screenshots, checklist paths, QA evidence, and requirement status are attached before delivery.

