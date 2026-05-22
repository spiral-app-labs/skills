# region-kitchen-and-bar Build Checklist

- Workflow version: 2026-05-04
- Source of truth: Mission Control tasks.metadata + this mirrored local checklist
- Lead ID: TBD
- MC parent task ID: TBD
- Template slug: roma
- Current stage: checklist
- Checklist MD: restaurant-website-system/sites/region-kitchen-and-bar/checklist.md
- Checklist JSON: restaurant-website-system/sites/region-kitchen-and-bar/checklist.json
- Deploy URL: TBD
- Updated: 2026-05-07T13:28:58.969Z

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
- Requirement: checklist-md — Local checklist.md exists for this restaurant
- Requirement: checklist-json — Local checklist.json exists for this restaurant
- Requirement: checklist-mc-sync — Mission Control root + child task metadata mirrors checklist paths, requirements, evidence, and current stage

### 2. current_site_audit — Audit current site with browser evidence
- Stage: auditing
- Status: blocked
- Required skills: restaurant-website-audit, browser-automation, agency-mission-control-sync
- Evidence required: audit.md; desktop screenshot; mobile screenshot; DOM/text scrape
- Requirement: current-site-screenshots — Desktop and mobile screenshots captured
- Requirement: current-site-scrape — Live site DOM/text scrape captured
- Requirement: current-site-opportunities — Audit names concrete conversion, credibility, mobile, and factual gaps

### 3. google_reviews_capture — Capture Google Reviews evidence
- Stage: reviews
- Status: blocked
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
- Status: blocked
- Required skills: restaurant-pitch-doc, agency-mission-control-sync
- Evidence required: pitch-doc.md; before/after evidence links
- Requirement: pitch-specific — Pitch is specific to restaurant, neighborhood/cuisine, reviews, and conversion gaps
- Requirement: pitch-before-after — Pitch explains before/after delta in owner language
- Requirement: pitch-evidence — Evidence and preview links are embedded or linked

### 9. battle_cards_doc — Create owner battle cards
- Stage: battle_cards
- Status: blocked
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

- [ ] checklist-md: Local checklist.md exists for this restaurant - Local artifact exists; pending MC mirror.
- [ ] checklist-json: Local checklist.json exists for this restaurant - Local artifact exists; pending MC mirror.
- [ ] checklist-mc-sync: Mission Control root + child task metadata mirrors checklist paths, requirements, evidence, and current stage
- [ ] current-site-screenshots: Desktop and mobile screenshots captured - Local evidence exists; pending canonical MC task provisioning and mirror.
- [ ] current-site-scrape: Live site DOM/text scrape captured - Local evidence exists; pending canonical MC task provisioning and mirror.
- [ ] current-site-opportunities: Audit names concrete conversion, credibility, mobile, and factual gaps - Local evidence exists; pending canonical MC task provisioning and mirror.
- [ ] reviews-highest-filter: Google Reviews opened in browser and sorted by Highest - Local evidence exists; pending canonical MC task provisioning and mirror.
- [ ] reviews-thirty-written: 30 written reviews captured, or exact shortage/blocker documented - Local evidence exists; pending canonical MC task provisioning and mirror.
- [ ] reviews-themes: Review themes summary is usable for copy and pitch docs - Local evidence exists; pending canonical MC task provisioning and mirror.
- [ ] template-route-locked: Exactly one archetype/template route is chosen and justified - Local evidence exists; pending canonical MC task provisioning and mirror.
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
- [ ] pitch-specific: Pitch is specific to restaurant, neighborhood/cuisine, reviews, and conversion gaps - Local evidence exists; pending canonical MC task provisioning and mirror.
- [ ] pitch-before-after: Pitch explains before/after delta in owner language - Local evidence exists; pending canonical MC task provisioning and mirror.
- [ ] pitch-evidence: Evidence and preview links are embedded or linked - Local evidence exists; pending canonical MC task provisioning and mirror.
- [ ] battle-cards-objections: Likely owner objections have concise answers - Local evidence exists; pending canonical MC task provisioning and mirror.
- [ ] battle-cards-demo-path: Demo path and proof points are clear - Local evidence exists; pending canonical MC task provisioning and mirror.
- [ ] battle-cards-risks: Risks/unknowns are called out truthfully - Local evidence exists; pending canonical MC task provisioning and mirror.
- [ ] qa-round-1: QA round 1 completed with screenshots, findings, fixes, and MC writeback
- [ ] qa-round-2: QA round 2 completed with screenshots, findings, fixes, and MC writeback
- [ ] qa-round-3: QA round 3 completed with final sell-readiness screenshots, fixes, and MC writeback
- [ ] delivery-package: Preview URL, screenshots, pitch doc, battle cards, checklist, QA evidence, and requirement status are mirrored to MC
- [ ] delivery-no-missing-evidence: No delivery until MC has checklist paths, preview/artifact URL, and required gate evidence

## Evidence Paths

- restaurant-website-system/research/lead-qualification/region-kitchen-and-bar-seed-validation-2026-05-07.md
- restaurant-website-system/research/lead-qualification/region-kitchen-and-bar-mc-seed-payload-2026-05-07.json
- restaurant-website-system/research/lead-qualification/region-kitchen-and-bar-r1-current-site-audit-2026-05-07.md
- restaurant-website-system/research/lead-qualification/region-kitchen-and-bar-r1-current-site-audit-2026-05-07/
- restaurant-website-system/research/lead-qualification/region-kitchen-and-bar-google-reviews-2026-05-07/region-google-reviews-highest-30-2026-05-07.md
- restaurant-website-system/research/lead-qualification/region-kitchen-and-bar-google-reviews-2026-05-07/region-google-reviews-highest-30-2026-05-07.json
- restaurant-website-system/research/lead-qualification/region-kitchen-and-bar-google-reviews-2026-05-07/region-google-reviews-insights-2026-05-07.md
- restaurant-website-system/research/lead-qualification/region-kitchen-and-bar-r2-build-brief-2026-05-07.md
- restaurant-website-system/research/lead-qualification/region-kitchen-and-bar-founder-pitch-2026-05-07.md
- restaurant-website-system/research/lead-qualification/region-kitchen-and-bar-battle-cards-2026-05-07.md

## QA Rounds

- Round 1: pending
- Round 2: pending
- Round 3: pending

## Pitch Artifacts

- Pitch doc: restaurant-website-system/research/lead-qualification/region-kitchen-and-bar-founder-pitch-2026-05-07.md
- Battle cards: restaurant-website-system/research/lead-qualification/region-kitchen-and-bar-battle-cards-2026-05-07.md
- Outreach draft: TBD

## Blockers

- Canonical Mission Control workflow root/child tasks are not provisioned because protected agency runtime auth is unavailable in this heartbeat shell.

## Done Criteria

- Mission Control root task metadata.build_stage/currentStage matches this checklist currentStage.
- Mission Control root + child tasks mirror this checklist requirements, evidence_required, required_skills, and checklist paths.
- Every canonical workflow step has either passed evidence in MC or a fresh blocker recorded in MC.
- Three QA rounds are logged with desktop/mobile screenshot evidence and MC writeback.
- Preview URL, pitch doc, battle cards, screenshots, checklist paths, QA evidence, and requirement status are attached before delivery.

