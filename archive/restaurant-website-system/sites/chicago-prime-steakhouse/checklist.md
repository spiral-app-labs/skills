# chicago-prime-steakhouse Build Checklist

- Workflow version: 2026-05-04
- Source of truth: Mission Control tasks.metadata + this mirrored local checklist
- Lead ID: PENDING_MC_LEAD_ID_AUTH_BLOCKED
- MC parent task ID: PENDING_MC_ROOT_TASK_ID_AUTH_BLOCKED
- Template slug: Heaven Palate
- Current stage: checklist
- Checklist MD: restaurant-website-system/sites/chicago-prime-steakhouse/checklist.md
- Checklist JSON: restaurant-website-system/sites/chicago-prime-steakhouse/checklist.json
- Deploy URL: TBD
- Updated: 2026-05-07T16:13:55.754Z

## Current status

Local checklist artifacts exist and Chicago Prime is routed to Heaven Palate, but MC checklist sync is blocked by protected agency API auth (`401`). Build, QA, packaging, delivery, and owner outreach remain unauthorized. No raw Supabase writes were performed.

## Mission Control Sync Contract

- MC root task metadata must mirror currentStage/build_stage, checklist paths, requirements, evidence_required, required_skills, passed_requirement_ids, and blockers.
- MC child tasks must mirror workflow_step_id, requirements, evidence_required, required_skills, skill_contract, and operator_contract.
- Do not mark a later gate complete from local files alone. MC task status + MC requirement evidence must move with the checklist.

## Canonical Gates / Skills

### 1. checklist_created — Create and sync local + Mission Control checklist
- Stage: checklist
- Status: blocked
- Required skills: restaurant-build-checklist, agency-mission-control-sync
- Evidence required: checklist.md path; checklist.json path; MC root task metadata with checklist paths
- Current local evidence:
  - restaurant-website-system/sites/chicago-prime-steakhouse/checklist.md
  - restaurant-website-system/sites/chicago-prime-steakhouse/checklist.json
- Blocker: Local checklist exists, but Mission Control sync cannot complete until protected agency API auth/provisioning works.
- Requirement: checklist-md — Local checklist.md exists for this restaurant
- Requirement: checklist-json — Local checklist.json exists for this restaurant
- Requirement: checklist-mc-sync — Mission Control root + child task metadata mirrors checklist paths, requirements, evidence, and current stage

### 2. current_site_audit — Audit current site with browser evidence
- Stage: auditing
- Status: pending
- Required skills: restaurant-website-audit, browser-automation, agency-mission-control-sync
- Evidence required: audit.md; desktop screenshot; mobile screenshot; DOM/text scrape
- Current local evidence:
  - restaurant-website-system/sites/chicago-prime-steakhouse/audit-official-site-2026-05-07.md
- Requirement: current-site-screenshots — Desktop and mobile screenshots captured
- Requirement: current-site-scrape — Live site DOM/text scrape captured
- Requirement: current-site-opportunities — Audit names concrete conversion, credibility, mobile, and factual gaps

### 3. google_reviews_capture — Capture Google Reviews evidence
- Stage: reviews
- Status: pending
- Required skills: restaurant-website-audit, browser-automation, agency-mission-control-sync
- Evidence required: Google profile screenshot; Highest-filter screenshot; 30-review packet JSON/MD
- Current local evidence:
  - restaurant-website-system/sites/chicago-prime-steakhouse/scrapes/google-reviews-highest-30-2026-05-07.md
- Requirement: reviews-highest-filter — Google Reviews opened in browser and sorted by Highest
- Requirement: reviews-thirty-written — 30 written reviews captured, or exact shortage/blocker documented
- Requirement: reviews-themes — Review themes summary is usable for copy and pitch docs

### 4. template_route_fork_build — Route to one archetype, fork template, and build first preview
- Stage: building
- Status: blocked
- Required skills: website-agency-system, restaurant-site-router, restaurant-template-fork, restaurant-build-checklist, agency-mission-control-sync
- Evidence required: routing rationale; source.md/content files; npm build/typecheck output; preview URL or local preview evidence
- Current local evidence:
  - restaurant-website-system/sites/chicago-prime-steakhouse/routing-template-decision-2026-05-07.md
- restaurant-website-system/sites/chicago-prime-steakhouse/heaven-palate-source-mapping-2026-05-07.md
- restaurant-website-system/sites/chicago-prime-steakhouse/future-preview-content-map-2026-05-07.md
- restaurant-website-system/sites/chicago-prime-steakhouse/media-rights-and-shot-list-2026-05-07.md
  - restaurant-website-system/sites/chicago-prime-steakhouse/builder-implementation-brief-2026-05-07.md
- Blocker: Local source mapping is prepared: canonical archetype Heaven Palate maps to buildable source template 1776-redesign-01. Fork/build remains blocked until founder/MC authorization, owner confirmations, and preview authorization.
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
- Current local evidence:
  - restaurant-website-system/sites/chicago-prime-steakhouse/outreach/founder-seed-decision-brief-2026-05-07.md
- Requirement: pitch-specific — Pitch is specific to restaurant, neighborhood/cuisine, reviews, and conversion gaps
- Requirement: pitch-before-after — Pitch explains before/after delta in owner language
- Requirement: pitch-evidence — Evidence and preview links are embedded or linked

### 9. battle_cards_doc — Create owner battle cards
- Stage: battle_cards
- Status: pending
- Required skills: restaurant-pitch-doc, agency-mission-control-sync
- Evidence required: battle-cards.md
- Current local evidence:
  - restaurant-website-system/sites/chicago-prime-steakhouse/battle-cards-2026-05-07.md
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

- [x] checklist-md: Local checklist.md exists for this restaurant (passed) - Created locally; pending MC mirror.
- [x] checklist-json: Local checklist.json exists for this restaurant (passed) - Created locally; pending MC mirror.
- [ ] checklist-mc-sync: Mission Control root + child task metadata mirrors checklist paths, requirements, evidence, and current stage (blocked) - Blocked by MC protected agency API 401; no raw Supabase writes performed.
- [ ] current-site-screenshots: Desktop and mobile screenshots captured (pending)
- [ ] current-site-scrape: Live site DOM/text scrape captured (pending)
- [ ] current-site-opportunities: Audit names concrete conversion, credibility, mobile, and factual gaps (pending)
- [ ] reviews-highest-filter: Google Reviews opened in browser and sorted by Highest (pending)
- [ ] reviews-thirty-written: 30 written reviews captured, or exact shortage/blocker documented (pending)
- [ ] reviews-themes: Review themes summary is usable for copy and pitch docs (pending)
- [x] template-route-locked: Exactly one archetype/template route is chosen and justified (passed) - Locally routed to Heaven Palate; MC mirror pending.
- [ ] fork-built: Template fork builds successfully with real content and preserved conversion links (blocked) - Build/fork not authorized yet.
- [ ] specificity: No generic restaurant copy, fake claims, fake menu items, fake reviews, or fake ordering paths (pending) - Can be evaluated only after a preview exists.
- [ ] identity-specific: Copy/visual rhythm feels specific to the restaurant and selected archetype (pending)
- [ ] conversion-paths: Order/reserve/call/directions/catering/events paths are accurate as applicable (pending)
- [ ] mobile-check: Mobile pass is explicitly checked with evidence (pending)
- [ ] top-three-named: Top 3 concrete improvements are named from audit/preview/QA (pending)
- [ ] top-three-implemented: All three improvements are implemented (pending)
- [ ] top-three-evidence: Each improvement has before/after evidence (pending)
- [ ] concierge-kb-truthful: Concierge KB only uses verified restaurant facts (pending)
- [ ] concierge-tested: Short transcript proves useful behavior (pending)
- [ ] concierge-safe: Fallbacks prevent fake reservations, unsupported promises, or invented facts (pending)
- [ ] pitch-specific: Pitch is specific to restaurant, neighborhood/cuisine, reviews, and conversion gaps (pending)
- [ ] pitch-before-after: Pitch explains before/after delta in owner language (pending)
- [ ] pitch-evidence: Evidence and preview links are embedded or linked (pending)
- [ ] battle-cards-objections: Likely owner objections have concise answers (pending)
- [ ] battle-cards-demo-path: Demo path and proof points are clear (pending)
- [ ] battle-cards-risks: Risks/unknowns are called out truthfully (pending)
- [ ] qa-round-1: QA round 1 completed with screenshots, findings, fixes, and MC writeback (pending)
- [ ] qa-round-2: QA round 2 completed with screenshots, findings, fixes, and MC writeback (pending)
- [ ] qa-round-3: QA round 3 completed with final sell-readiness screenshots, fixes, and MC writeback (pending)
- [ ] delivery-package: Preview URL, screenshots, pitch doc, battle cards, checklist, QA evidence, and requirement status are mirrored to MC (pending)
- [ ] delivery-no-missing-evidence: No delivery until MC has checklist paths, preview/artifact URL, and required gate evidence (pending)

## Evidence Paths

- restaurant-website-system/sites/chicago-prime-steakhouse/research/build-readiness-seed-brief-2026-05-07.md
- restaurant-website-system/sites/chicago-prime-steakhouse/audit-official-site-2026-05-07.md
- restaurant-website-system/sites/chicago-prime-steakhouse/scrapes/google-reviews-highest-30-2026-05-07.md
- restaurant-website-system/sites/chicago-prime-steakhouse/routing-template-decision-2026-05-07.md
- restaurant-website-system/sites/chicago-prime-steakhouse/builder-implementation-brief-2026-05-07.md
- restaurant-website-system/sites/chicago-prime-steakhouse/preflight-handoff-package-2026-05-07.md
- restaurant-website-system/sites/chicago-prime-steakhouse/developer-handoff-checklist-2026-05-07.md
- restaurant-website-system/sites/chicago-prime-steakhouse/qa-readiness-rubric-2026-05-07.md
- restaurant-website-system/sites/chicago-prime-steakhouse/outreach/founder-seed-decision-brief-2026-05-07.md
- restaurant-website-system/sites/chicago-prime-steakhouse/battle-cards-2026-05-07.md
- restaurant-website-system/sites/chicago-prime-steakhouse/outreach/owner-confirmation-request-2026-05-07.md

## QA Rounds

- Round 1: pending — no authorized preview URL/screenshots/link audit yet.
- Round 2: pending — no authorized preview URL/screenshots/link audit yet.
- Round 3: pending — no authorized preview URL/screenshots/link audit yet.

## Pitch Artifacts

- Pitch doc: restaurant-website-system/sites/chicago-prime-steakhouse/outreach/founder-seed-decision-brief-2026-05-07.md
- Battle cards: restaurant-website-system/sites/chicago-prime-steakhouse/battle-cards-2026-05-07.md
- Outreach draft: restaurant-website-system/sites/chicago-prime-steakhouse/outreach/owner-confirmation-request-2026-05-07.md

## Blockers

- checklist: Mission Control protected agency API returns 401, so lead/root task IDs and checklist MC sync cannot be completed yet.
- building: Build is not authorized until founder approval, MC workflow provisioning, owner confirmations/photo rights, and preview authorization are available. Local source mapping is prepared: Heaven Palate archetype maps to buildable 1776-redesign-01 source.
- qa_round_1: QA cannot run until an authorized preview URL, screenshots, link audit, and owner-confirmation state exist.

## Done Criteria

- Mission Control root task metadata.build_stage/currentStage matches this checklist currentStage.
- Mission Control root + child tasks mirror this checklist requirements, evidence_required, required_skills, and checklist paths.
- Every canonical workflow step has either passed evidence in MC or a fresh blocker recorded in MC.
- Three QA rounds are logged with desktop/mobile screenshot evidence and MC writeback.
- Preview URL, pitch doc, battle cards, screenshots, checklist paths, QA evidence, and requirement status are attached before delivery.
