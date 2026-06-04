# moontime-smokin-que Build Checklist

- Workflow version: 2026-05-27
- Source of truth: Mission Control tasks.metadata + this mirrored local checklist
- Lead ID: 788d0e2a-8fea-4a88-9d28-bbc0263959a6
- MC parent task ID: ae265b4e-6262-4a57-9e02-176730a62260
- Template slug: bramble-01
- Current stage: improving
- Checklist MD: restaurant-website-system/sites/moontime-smokin-que/checklist.md
- Checklist JSON: restaurant-website-system/sites/moontime-smokin-que/checklist.json
- Deploy URL: Local static export at restaurant-website-system/sites/moontime-smokin-que/out/index.html
- Updated: 2026-06-04T17:29:53.000Z

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
- Status: passed
- Required skills: restaurant-website-audit, browser-automation, agency-mission-control-sync
- Evidence required: Google profile screenshot; Highest-filter screenshot; 30-review packet JSON/MD
- Evidence: restaurant-website-system/sites/moontime-smokin-que/reviews/google-reviews-highest-30.json
- Evidence: restaurant-website-system/sites/moontime-smokin-que/reviews/google-review-themes-summary-2026-06-04.md
- Evidence: restaurant-website-system/sites/moontime-smokin-que/screenshots/google-reviews-highest-filter-menu-2026-06-04.png
- Evidence: restaurant-website-system/sites/moontime-smokin-que/screenshots/google-reviews-highest-2026-06-04.png
- Requirement: reviews-highest-filter — passed
- Requirement: reviews-thirty-written — passed
- Requirement: reviews-themes — passed

### 4. template_route_fork_build — Route to one archetype, fork template, and build first preview
- Stage: routing/building
- Status: passed
- Required skills: website-agency-system, restaurant-site-router, restaurant-template-fork, restaurant-build-checklist, agency-mission-control-sync
- Evidence required: routing rationale; source.md/content files; npm build/typecheck output; preview URL or local preview evidence; build notes
- Evidence: restaurant-website-system/sites/moontime-smokin-que/routing/template-routing-2026-06-04.md
- Evidence: restaurant-website-system/sites/moontime-smokin-que/.agency-template.json
- Evidence: restaurant-website-system/sites/moontime-smokin-que/content.example.ts
- Evidence: restaurant-website-system/sites/moontime-smokin-que/app/page.tsx
- Evidence: restaurant-website-system/sites/moontime-smokin-que/build-first-preview-2026-06-04.md
- Evidence: restaurant-website-system/sites/moontime-smokin-que/build-check-output-2026-06-04.txt
- Evidence: restaurant-website-system/sites/moontime-smokin-que/preview-check-output-2026-06-04.json
- Evidence: restaurant-website-system/sites/moontime-smokin-que/out/index.html
- Evidence: file:///Users/ethantalreja/.openclaw/workspace/GitHub/skills/restaurant-website-system/sites/moontime-smokin-que/out/index.html
- Requirement: template-route-locked — passed (`bramble-01`)
- Requirement: fork-built — passed
- Requirement: fork-preview — passed
- Requirement: specificity — passed

### 4a. hero_art_bible — Generate hero image system + art bible before first preview
- Stage: hero_art_bible
- Status: passed
- Required skills: restaurant-hero-personalization, image-first-hero-generation, restaurant-build-checklist, agency-mission-control-sync
- Evidence required: ChatGPT image-gen hero/inspo URL; clean plate hero image URL; art bible markdown; MC personalization asset writeback
- Evidence: https://eayiazyiotnkggnsvhto.supabase.co/storage/v1/object/public/agency-hero-assets/788d0e2a-8fea-4a88-9d28-bbc0263959a6/inspo.png
- Evidence: https://eayiazyiotnkggnsvhto.supabase.co/storage/v1/object/public/agency-hero-assets/788d0e2a-8fea-4a88-9d28-bbc0263959a6/plate.png
- Evidence: restaurant-website-system/sites/moontime-smokin-que/public/images/raw/inspo.png
- Evidence: restaurant-website-system/sites/moontime-smokin-que/public/images/raw/plate.png
- Evidence: restaurant-website-system/sites/moontime-smokin-que/art-bible.md
- Requirement: hero-image-generated — passed
- Requirement: hero-clean-plate — passed
- Requirement: hero-art-bible — passed
- Requirement: hero-assets-mc-synced — passed

### 5. website_improvement_pass — Run first full improvement pass
- Stage: improving
- Status: passed
- Required skills: restaurant-fork-improvement, website-agency-system, agency-mission-control-sync
- Evidence required: improvement notes; before/after screenshots or changed file list; mobile evidence
- Evidence: restaurant-website-system/sites/moontime-smokin-que/improvement-pass-2026-06-04.md
- Evidence: restaurant-website-system/sites/moontime-smokin-que/improvement-check-output-2026-06-04.txt
- Evidence: restaurant-website-system/sites/moontime-smokin-que/improvement-preview-check-2026-06-04.json
- Evidence: restaurant-website-system/sites/moontime-smokin-que/out/index.html
- Evidence: file:///Users/ethantalreja/.openclaw/workspace/GitHub/skills/restaurant-website-system/sites/moontime-smokin-que/out/index.html
- Requirement: improvement-pass-complete — passed
- Requirement: conversion-paths — passed
- Requirement: mobile-check — passed with static export evidence; rendered screenshots blocked by Browser/dev-server sandbox limits

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

## Requirement Status

- [x] checklist-md: Local checklist.md exists for this restaurant
- [x] checklist-json: Local checklist.json exists for this restaurant
- [x] checklist-mc-sync: Mission Control root + child task metadata mirrors checklist paths, requirements, evidence, and current stage
- [x] current-site-screenshots: Desktop and mobile screenshots captured
- [x] current-site-scrape: Live site DOM/text scrape captured
- [x] current-site-opportunities: Audit names concrete conversion, credibility, mobile, and factual gaps
- [x] reviews-highest-filter: Google Reviews opened in browser and sorted by Highest
- [x] reviews-thirty-written: 30 written reviews captured, or exact shortage/blocker documented
- [x] reviews-themes: Review themes summary is usable for copy and pitch docs
- [x] template-route-locked: Exactly one archetype/template route is chosen and justified
- [x] hero-image-generated: ChatGPT image-gen hero/inspo image is created for this restaurant and uploaded or linked
- [x] hero-clean-plate: A clean plate/poster image is available for the first preview hero fallback
- [x] hero-art-bible: Art bible captures mood, palette, type, texture, layout rhythm, and motion direction
- [x] hero-assets-mc-synced: Mission Control personalization metadata contains enabled=true, asset URLs, art bible markdown, and ready_to_build state
- [x] fork-built: Template fork builds successfully with real content and preserved conversion links
- [x] fork-preview: Template fork/build produces a working preview URL or local preview evidence
- [x] specificity: No generic restaurant copy, fake claims, fake menu items, fake reviews, or fake ordering paths
- [x] improvement-pass-complete: Improvement pass notes, before/after coverage, build output, and preview check are complete
- [x] conversion-paths: Order/menu/call/directions/catering/events paths are accurate as applicable
- [x] mobile-check: Mobile pass is explicitly checked with evidence or exact rendered-screenshot blocker
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

- restaurant-website-system/sites/moontime-smokin-que/public/images/raw/inspo.png
- restaurant-website-system/sites/moontime-smokin-que/public/images/raw/plate.png
- restaurant-website-system/sites/moontime-smokin-que/art-bible.md
- restaurant-website-system/sites/moontime-smokin-que/build-first-preview-2026-06-04.md
- restaurant-website-system/sites/moontime-smokin-que/build-check-output-2026-06-04.txt
- restaurant-website-system/sites/moontime-smokin-que/preview-check-output-2026-06-04.json
- restaurant-website-system/sites/moontime-smokin-que/.agency-template.json
- restaurant-website-system/sites/moontime-smokin-que/content.example.ts
- restaurant-website-system/sites/moontime-smokin-que/app/page.tsx
- restaurant-website-system/sites/moontime-smokin-que/out/index.html
- file:///Users/ethantalreja/.openclaw/workspace/GitHub/skills/restaurant-website-system/sites/moontime-smokin-que/out/index.html
- restaurant-website-system/sites/moontime-smokin-que/improvement-pass-2026-06-04.md
- restaurant-website-system/sites/moontime-smokin-que/improvement-check-output-2026-06-04.txt
- restaurant-website-system/sites/moontime-smokin-que/improvement-preview-check-2026-06-04.json
- https://eayiazyiotnkggnsvhto.supabase.co/storage/v1/object/public/agency-hero-assets/788d0e2a-8fea-4a88-9d28-bbc0263959a6/inspo.png
- https://eayiazyiotnkggnsvhto.supabase.co/storage/v1/object/public/agency-hero-assets/788d0e2a-8fea-4a88-9d28-bbc0263959a6/plate.png

## QA Rounds

- Round 1: pending
- Round 2: pending
- Round 3: pending

## Pitch Artifacts

- Pitch doc: TBD
- Battle cards: TBD
- Outreach draft: TBD

## Blockers

- Mission Control writeback blocked: PATCH `/api/agency/leads/788d0e2a-8fea-4a88-9d28-bbc0263959a6/build` and GET `/api/agency/website-workflow/next?limit=5` failed with DNS resolution failure for `hq.ethantalreja.com` (`HTTP_STATUS:000`). Unblock by running `restaurant-website-system/sites/moontime-smokin-que/mc-payloads/improvement-pass-build-writeback-2026-06-04.json` in an environment with Mission Control network/DNS access.
- Git branch/commit/PR blocked: safe temporary-index commit from `origin/main` failed before branch creation because Git could not insert `restaurant-website-system/sites/moontime-smokin-que/.agency-template.json` into the object database: `unable to create temporary file: Operation not permitted`. No `feature/moontime-improvement-pass` branch ref was created. Unblock by running the branch/commit/PR step in an environment that permits writes to the repository Git object database.
- Rendered screenshots blocked: Browser `iab` is unavailable and `next dev` cannot bind to `127.0.0.1:3000` (`listen EPERM`). Static export text/link/mobile-sensitive checks passed. Unblock by running the static export or dev server in an environment that permits Browser attachment or localhost binding.

## Done Criteria

- Mission Control root task metadata.build_stage/currentStage matches this checklist currentStage.
- Mission Control root + child tasks mirror this checklist requirements, evidence_required, required_skills, and checklist paths.
- Every canonical workflow step has either passed evidence in MC or a fresh blocker recorded in MC.
- Three QA rounds are logged with desktop/mobile screenshot evidence and MC writeback.
- Preview URL, pitch doc, battle cards, screenshots, checklist paths, QA evidence, and requirement status are attached before delivery.


## Structured Lead Metadata

- Owner name: Heather and Joe Cummings
- Contact email: catering@moontimebbq.com
- Phone: (779) 994-7119
- Address/location: 88 Railroad Street Unit A, Crystal Lake, IL 60014
- Website URL: https://moontimebbq.com/
- Order URL: https://order.toasttab.com/online/moontime-smokin-que-88-railroad-street-unit-a
- Catering/events URL: https://moontimebbq.com/contact/
- Google rating/review count: 4.4 / 165
- Outreach draft: not_created
- Source notes: official site pages opened in browser and scraped; current-site audit evidence is in audit.md, screenshots, and scrape files.

## Current-Site Audit Evidence

- Audit: restaurant-website-system/sites/moontime-smokin-que/audit.md
- Desktop screenshot: restaurant-website-system/sites/moontime-smokin-que/screenshots/current-site-desktop-full.png
- Mobile full screenshot: restaurant-website-system/sites/moontime-smokin-que/screenshots/current-site-mobile-full.png
- Mobile fold screenshot: restaurant-website-system/sites/moontime-smokin-que/screenshots/current-site-mobile-fold.png
- Scrape: restaurant-website-system/sites/moontime-smokin-que/scrapes/current-site-dom-snapshot.txt
