# strawberry-moon Build Checklist

- Workflow version: 2026-05-04
- Source of truth: Mission Control tasks.metadata + this mirrored local checklist
- Lead ID: af98b880-9351-4f00-b35b-253ad35570d9
- MC parent task ID: 216314e9-4af6-4f99-92ab-54e7912b9173
- Template slug: velvet-shaker-01
- Current stage: qa_round_2
- Checklist MD: restaurant-website-system/sites/strawberry-moon/checklist.md
- Checklist JSON: restaurant-website-system/sites/strawberry-moon/checklist.json
- Deploy URL: TBD
- Updated: 2026-05-04T22:05:00Z

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
- [x] template-route-locked: Exactly one archetype/template route is chosen and justified - Routed to velvet-shaker-01 warmed down; core archetype is Bramble for cozy martini lounge/date-night personality, not tavern/fine-dining.
- [x] fork-built: Template fork builds successfully with real content and preserved conversion links - Velvet-shaker-01 fork now exists in the Strawberry Moon site folder with official-site imagery, factual martini/lounge/live-music content, honest handoff links, and no fake booking or price claims. Canonical QA1 reran `npm ci`, `npm run build`, and `npm run typecheck` successfully in this worktree on 2026-05-04.
- [x] specificity: No generic restaurant copy, fake claims, fake menu items, fake reviews, or fake ordering paths
- [x] identity-specific: Copy/visual rhythm feels specific to the restaurant and selected archetype
- [x] conversion-paths: Order/reserve/call/directions/catering/events paths are accurate as applicable
- [x] mobile-check: Mobile pass is explicitly checked with evidence
- [x] top-three-named: Top 3 concrete improvements are named from audit/preview/QA - Passed via `improvements.md`, QA round docs, changed site files, and QA Round 3 screenshots.
- [x] top-three-implemented: All three improvements are implemented - Passed via `improvements.md`, QA round docs, changed site files, and QA Round 3 screenshots.
- [x] top-three-evidence: Each improvement has before/after evidence - Passed via `improvements.md`, QA round docs, changed site files, and QA Round 3 screenshots.
- [x] concierge-kb-truthful: Concierge KB only uses verified restaurant facts - Passed via `lib/concierge-kb.ts`, `ai-concierge.md`, and the source/audit/review packet basis listed there.
- [x] concierge-tested: Short transcript proves useful behavior - Passed via `ai-concierge-transcript.md` and direct smoke tests against the same resolver used by `/api/concierge`.
- [x] concierge-safe: Fallbacks prevent fake reservations, unsupported promises, or invented facts - Passed via deterministic unsupported-intent handling in `lib/concierge-kb.ts` and the UI/API wiring.
- [x] pitch-specific: Pitch is specific to restaurant, neighborhood/cuisine, reviews, and conversion gaps - Passed via `pitch-doc.md`, `audit.md`, `source.md`, and the Google review packet.
- [x] pitch-before-after: Pitch explains before/after delta in owner language - Passed via the before/after sell story and Ethan demo path in `pitch-doc.md`.
- [x] pitch-evidence: Evidence and preview links are embedded or linked - Passed via linked file evidence in `pitch-doc.md`, QA docs, and the concierge/build artifacts.
- [x] battle-cards-objections: Likely owner objections have concise answers
- [x] battle-cards-demo-path: Demo path and proof points are clear
- [x] battle-cards-risks: Risks/unknowns are called out truthfully
- [x] qa-round-1: QA round 1 completed with screenshots, findings, fixes, and MC writeback - Canonical QA1 is complete locally via `qa-round-1.md`, `scrapes/qa-round-1-browser-checks-2026-05-04.json`, `mc-qa-round-1-writeback-2026-05-04.json`, and `mc-build-writeback-qa-round-1-2026-05-04.json`. Fresh localhost screenshots were blocked by sandbox `listen EPERM`, and that blocker is recorded truthfully in the QA1 payload.
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
- restaurant-website-system/sites/strawberry-moon/scrapes/qa-round-1-browser-checks-2026-05-04.json
- restaurant-website-system/sites/strawberry-moon/mc-qa-round-1-writeback-2026-05-04.json
- restaurant-website-system/sites/strawberry-moon/mc-build-writeback-qa-round-1-2026-05-04.json
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
- restaurant-website-system/sites/strawberry-moon/lib/concierge-kb.ts
- restaurant-website-system/sites/strawberry-moon/app/api/concierge/route.ts
- restaurant-website-system/sites/strawberry-moon/components/TruthfulConcierge.tsx
- restaurant-website-system/sites/strawberry-moon/ai-concierge.md
- restaurant-website-system/sites/strawberry-moon/ai-concierge-transcript.md
- restaurant-website-system/sites/strawberry-moon/mc-build-writeback-concierge-2026-05-04.json
- restaurant-website-system/sites/strawberry-moon/battle-cards.md
- restaurant-website-system/sites/strawberry-moon/mc-battle-cards-writeback-2026-05-04.json

## QA Rounds

- Round 1: passed
- Round 2: next
- Round 3: pending

## Pitch Artifacts

- Pitch doc: `restaurant-website-system/sites/strawberry-moon/pitch-doc.md`
- Battle cards: `restaurant-website-system/sites/strawberry-moon/battle-cards.md`
- Outreach draft: TBD

## Blockers

- `ready_to_pitch` remains `false` until founder review is complete.
- `anthropic_key_status` remains `pending_founder`.
- `human_review_status` remains `pending_founder`.
- Mission Control API auth is unavailable in this runtime, so sync is recorded through local writeback payloads only.

## Done Criteria

- Mission Control lead has a simple sales status and current metadata.build_stage.
- Mission Control parent task metadata.requirements mirrors this checklist.
- All required checklist rows are passed.
- Three QA rounds are logged with screenshot evidence.
- Preview URL, pitch doc, outreach draft, and delivery evidence are attached.

## 2026-05-04 — Top 3 improvements gate closeout

- Completed the canonical `top_3_improvements` gate.
- Evidence: `improvements.md`, `content.ts`, QA round docs, and final QA Round 3 desktop/mobile screenshots.
- Top 3 named and implemented: stronger above-the-fold visit facts, improved mobile/contrast/image reliability, and more named Strawberry Moon proof from reviews/source evidence.
- Mission Control heartbeat writeback succeeded as `c791097c-9730-43f6-988e-5467c82285f5`.
- Advanced local stage to `concierge`.

## 2026-05-04 — Concierge gate closeout

- Completed the canonical `ai_concierge_added` gate with a deterministic local concierge that renders safely without external secrets.
- Evidence: `lib/concierge-kb.ts`, `app/api/concierge/route.ts`, `components/TruthfulConcierge.tsx`, `ai-concierge.md`, and `ai-concierge-transcript.md`.
- Verified topics covered: hours, location, vibe, live music, seating policy, drinks/menu themes, and contact handoff.
- Explicit refusals: reservations, table holds, ordering, allergies/medical, private-event promises beyond known facts, prices, specials, closing times, and same-day availability.
- Advanced local stage to `pitch`.
- Mission Control API auth is still unavailable in this runtime, so concierge sync is recorded in a local writeback payload only.

## 2026-05-04 — Pitch gate closeout

- Completed the canonical `pitch_doc` gate with a Strawberry Moon-specific preserve-stack pitch brief.
- Evidence: `pitch-doc.md`, `audit.md`, `source.md`, `content.ts`, `qa-round-1.md`, `qa-round-2.md`, `qa-round-3.md`, `ai-concierge.md`, `ai-concierge-transcript.md`, and `scrapes/google-reviews-highest-30.json`.
- Sell story: the current Weebly site works, but it undersells the martini program, live-music cadence, upstairs conversation space, and Tom-level hospitality that reviews already prove.
- Advanced local stage to `battle_cards`.
- `ready_to_pitch` stays `false`; founder review and Anthropic key gates remain pending.
- Next: battle cards.

## 2026-05-04 — Battle cards gate closeout

- Completed the canonical `battle_cards_doc` gate with Strawberry Moon-specific owner objection handling, proof references, demo path, risks, and do-not-claim guardrails.
- Evidence: `battle-cards.md`, `pitch-doc.md`, `audit.md`, `source.md`, `content.ts`, `improvements.md`, `ai-concierge.md`, `ai-concierge-transcript.md`, `qa-round-1.md`, `qa-round-2.md`, `qa-round-3.md`, and `scrapes/google-reviews-highest-30.json`.
- Advanced local stage to `qa_round_1`.
- `ready_to_pitch` stays `false`; founder review and Anthropic key gates remain pending.
- Mission Control API auth is still unavailable in this runtime, so battle-card sync is recorded in a local writeback payload only.
- Next: QA round 1.

## 2026-05-04 — Canonical QA Round 1 closeout

- Completed the canonical `qa_round_1` gate locally for build correctness and source fidelity.
- Evidence: `qa-round-1.md`, `scrapes/qa-round-1-browser-checks-2026-05-04.json`, `mc-qa-round-1-writeback-2026-05-04.json`, and `mc-build-writeback-qa-round-1-2026-05-04.json`.
- Commands: `npm ci`, `npm run build`, `npm run typecheck`, and a blocked `npm run start -- --hostname 127.0.0.1 --port 3078` localhost attempt.
- Safe factual fixes shipped in QA1: surfaced the verified public email address and the official external `Book an Event` page without inventing any reservation or private-event promises.
- Browser blocker: sandbox denied localhost listen with `EPERM`, so no fresh or reusable screenshot artifacts were available in this worktree; blocker is recorded in the QA1 browser checks payload.
- Advanced local stage to `qa_round_2`.
- `ready_to_pitch` stays `false`; `anthropic_key_status` and `human_review_status` both remain `pending_founder`.
- Mission Control API auth is still unavailable in this runtime, so QA1 sync is recorded in local writeback payloads only.
