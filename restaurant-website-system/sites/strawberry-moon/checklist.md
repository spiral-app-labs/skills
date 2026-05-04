# strawberry-moon Build Checklist

- Workflow version: 2026-05-04
- Source of truth: Mission Control tasks.metadata + this mirrored local checklist
- Lead ID: af98b880-9351-4f00-b35b-253ad35570d9
- MC parent task ID: 216314e9-4af6-4f99-92ab-54e7912b9173
- Template slug: velvet-shaker-01
- Current stage: top_3_improvements
- Checklist MD: restaurant-website-system/sites/strawberry-moon/checklist.md
- Checklist JSON: restaurant-website-system/sites/strawberry-moon/checklist.json
- Deploy URL: TBD
- Updated: 2026-05-04T16:36:02.746Z

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
- Status: in_progress
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

## Requirement Status

- [ ] checklist-md: Local checklist.md exists for this restaurant
- [ ] checklist-json: Local checklist.json exists for this restaurant
- [ ] checklist-mc-sync: Mission Control root + child task metadata mirrors checklist paths, requirements, evidence, and current stage
- [ ] current-site-screenshots: Desktop and mobile screenshots captured
- [ ] current-site-scrape: Live site DOM/text scrape captured
- [ ] current-site-opportunities: Audit names concrete conversion, credibility, mobile, and factual gaps
- [ ] reviews-highest-filter: Google Reviews opened in browser and sorted by Highest
- [ ] reviews-thirty-written: 30 written reviews captured, or exact shortage/blocker documented
- [ ] reviews-themes: Review themes summary is usable for copy and pitch docs
- [x] template-route-locked: Exactly one archetype/template route is chosen and justified - Routed to velvet-shaker-01 warmed down; core archetype is Bramble for cozy martini lounge/date-night personality, not tavern/fine-dining.
- [x] fork-built: Template fork builds successfully with real content and preserved conversion links - Velvet-shaker-01 fork now exists in the Strawberry Moon site folder with official-site imagery, factual martini/lounge/live-music content, honest handoff links, and no fake booking or price claims. npm run build passed. npm install created no usable local next binary, so verification used a compatible local node_modules tree from dino-s-pizza-pasta.
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
- [ ] qa-round-1: QA round 1 completed with screenshots, findings, fixes, and MC writeback - Local QA artifacts may exist, but MC canonical QA child tasks are backlog/pending; do not treat this gate as passed until MC QA writeback marks it passed.
- [ ] qa-round-2: QA round 2 completed with screenshots, findings, fixes, and MC writeback - Local QA artifacts may exist, but MC canonical QA child tasks are backlog/pending; do not treat this gate as passed until MC QA writeback marks it passed.
- [ ] qa-round-3: QA round 3 completed with final sell-readiness screenshots, fixes, and MC writeback - Local QA artifacts may exist, but MC canonical QA child tasks are backlog/pending; do not treat this gate as passed until MC QA writeback marks it passed.
- [ ] delivery-package: Preview URL, screenshots, pitch doc, battle cards, checklist, QA evidence, and requirement status are mirrored to MC - Next: package preview URL, pitch doc, outreach draft, screenshots, QA evidence, and MC writeback.
- [ ] delivery-no-missing-evidence: No delivery until MC has checklist paths, preview/artifact URL, and required gate evidence

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
- restaurant-website-system/sites/strawberry-moon/qa-round-1.md
- restaurant-website-system/sites/strawberry-moon/screenshots/preview-home-desktop-2026-05-04.png
- restaurant-website-system/sites/strawberry-moon/screenshots/preview-home-mobile-2026-05-04.png
- restaurant-website-system/sites/strawberry-moon/components/MassiveWordmarkHero.tsx
- restaurant-website-system/sites/strawberry-moon/components/MinimalTextNav.tsx
- restaurant-website-system/sites/strawberry-moon/qa-round-2.md
- restaurant-website-system/sites/strawberry-moon/screenshots/qa-round-2-desktop-2026-05-04.png
- restaurant-website-system/sites/strawberry-moon/screenshots/qa-round-2-mobile-2026-05-04.png
- restaurant-website-system/sites/strawberry-moon/components/CurtainImage.tsx
- restaurant-website-system/sites/strawberry-moon/improvements.md
- restaurant-website-system/sites/strawberry-moon/qa-round-3.md
- restaurant-website-system/sites/strawberry-moon/screenshots/qa-round-3-home-desktop-2026-05-04.png
- restaurant-website-system/sites/strawberry-moon/screenshots/qa-round-3-home-mobile-2026-05-04.png
- restaurant-website-system/sites/strawberry-moon/screenshots/qa-round-3-menu-desktop-2026-05-04.png
- restaurant-website-system/sites/strawberry-moon/screenshots/qa-round-3-menu-mobile-2026-05-04.png
- restaurant-website-system/sites/strawberry-moon/screenshots/qa-round-3-contact-desktop-2026-05-04.png
- restaurant-website-system/sites/strawberry-moon/screenshots/qa-round-3-contact-mobile-2026-05-04.png
- restaurant-website-system/sites/strawberry-moon/screenshots/qa-round-3-about-desktop-2026-05-04.png
- restaurant-website-system/sites/strawberry-moon/screenshots/qa-round-3-about-mobile-2026-05-04.png
- restaurant-website-system/sites/strawberry-moon/components/ScrollReveal.tsx
- restaurant-website-system/sites/strawberry-moon/app/contact/page.tsx

## QA Rounds

- Round 1: pending
- Round 2: pending
- Round 3: pending

## Pitch Artifacts

- Pitch doc: TBD
- Battle cards: TBD
- Outreach draft: TBD

## Blockers

- None

## Done Criteria

- Mission Control lead has a simple sales status and current metadata.build_stage.
- Mission Control parent task metadata.requirements mirrors this checklist.
- All required checklist rows are passed.
- Three QA rounds are logged with screenshot evidence.
- Preview URL, pitch doc, outreach draft, and delivery evidence are attached.

