# ciao-baby Build Checklist

- Workflow version: 2026-05-04
- Source of truth: Mission Control tasks.metadata + this mirrored local checklist
- Lead ID: 8a8ca9fc-9c6d-49a6-aaa4-f532feaf533a
- MC parent task ID: 2d9738de-cfb4-4528-a017-b49ec7119785
- Template slug: gusto-01
- Current stage: packaging
- Checklist MD: restaurant-website-system/sites/ciao-baby/checklist.md
- Checklist JSON: restaurant-website-system/sites/ciao-baby/checklist.json
- Deploy URL: TBD
- Local preview URL: http://127.0.0.1:3084
- PR URL: https://github.com/spiral-app-labs/skills/pull/28
- Vercel PR preview URL: https://skills-git-chore-ciao-baby-c92606-ethan-ethantalrejas-projects.vercel.app
- Public preview blocker: Vercel PR preview deployed but currently returns authentication required, so it is not client-shareable yet.
- Updated: 2026-05-05T01:30:00Z

## Mission Control Sync Contract

- MC root task metadata must mirror currentStage/build_stage, checklist paths, requirements, evidence_required, required_skills, passed_requirement_ids, and blockers.
- MC child tasks must mirror workflow_step_id, requirements, evidence_required, required_skills, skill_contract, and operator_contract.
- Do not mark a later gate complete from local files alone. MC task status + MC requirement evidence must move with the checklist.
- Current runtime has no `AGENCY_AUTONOMY_API_KEY` / `OPENCLAW_WEBHOOK_SECRET`; MC payloads are local-only until official API auth is available. No raw Supabase write was used.

## Canonical Gates / Skills

### 1. checklist_created — Create and sync local + Mission Control checklist
- Stage: checklist
- Status: done
- Required skills: restaurant-build-checklist, agency-mission-control-sync
- Evidence required: checklist.md path; checklist.json path; MC root task metadata with checklist paths
- Requirement: checklist-md — Local checklist.md exists for this restaurant
- Requirement: checklist-json — Local checklist.json exists for this restaurant
- Requirement: checklist-mc-sync — Mission Control root + child task metadata mirrors checklist paths, requirements, evidence, and current stage
- Evidence:
  - restaurant-website-system/sites/ciao-baby/checklist.md
  - restaurant-website-system/sites/ciao-baby/checklist.json
  - Mission Control website workflow refresh returned ok for lead 8a8ca9fc-9c6d-49a6-aaa4-f532feaf533a

### 2. current_site_audit — Audit current site with browser evidence
- Stage: auditing
- Status: done
- Required skills: restaurant-website-audit, browser-automation, agency-mission-control-sync
- Evidence required: audit.md; desktop screenshot; mobile screenshot; DOM/text scrape
- Requirement: current-site-screenshots — Desktop and mobile screenshots captured
- Requirement: current-site-scrape — Live site DOM/text scrape captured
- Requirement: current-site-opportunities — Audit names concrete conversion, credibility, mobile, and factual gaps
- Evidence:
  - restaurant-website-system/sites/ciao-baby/audit.md
  - restaurant-website-system/sites/ciao-baby/screenshots/current-site-desktop-full.png
  - restaurant-website-system/sites/ciao-baby/screenshots/current-site-mobile-full.png
  - restaurant-website-system/sites/ciao-baby/screenshots/current-site-mobile-fold.png
  - restaurant-website-system/sites/ciao-baby/scrapes/current-site-browser-dom-snapshot.html
  - restaurant-website-system/sites/ciao-baby/scrapes/current-site-browser-text.txt
  - restaurant-website-system/sites/ciao-baby/screenshots/ciaobaby-net-shell-desktop-full.png
  - restaurant-website-system/sites/ciao-baby/screenshots/ciaobaby-net-shell-mobile-full.png
  - restaurant-website-system/sites/ciao-baby/screenshots/ciaobaby-net-shell-mobile-fold.png
  - restaurant-website-system/sites/ciao-baby/scrapes/ciaobaby-net-shell-browser-dom-snapshot.html
  - restaurant-website-system/sites/ciao-baby/scrapes/ciaobaby-net-shell-browser-text.txt

### 3. google_reviews_capture — Capture Google Reviews evidence
- Stage: reviews
- Status: done
- Required skills: restaurant-website-audit, browser-automation, agency-mission-control-sync
- Evidence required: Google profile screenshot; Highest-filter screenshot; 30-review packet JSON/MD
- Requirement: reviews-highest-filter — Google Reviews opened in browser and sorted by Highest
- Requirement: reviews-thirty-written — 30 written reviews captured, or exact shortage/blocker documented
- Requirement: reviews-themes — Review themes summary is usable for copy and pitch docs
- Evidence:
  - restaurant-website-system/sites/ciao-baby/screenshots/google-reviews-highest.png
  - restaurant-website-system/sites/ciao-baby/scrapes/google-reviews-highest-30.json
  - restaurant-website-system/sites/ciao-baby/google-reviews-themes.md

### 4. template_route_fork_build — Route to one archetype, fork template, and build first preview
- Stage: building
- Status: done
- Required skills: website-agency-system, restaurant-site-router, restaurant-template-fork, restaurant-build-checklist, agency-mission-control-sync
- Evidence required: routing rationale; source.md/content files; npm build/typecheck output; preview URL or local preview evidence
- Requirement: template-route-locked — Exactly one archetype/template route is chosen and justified
- Requirement: fork-built — Template fork builds successfully with real content and preserved conversion links
- Requirement: specificity — No generic restaurant copy, fake claims, fake menu items, fake reviews, or fake ordering paths
- Evidence:
  - restaurant-website-system/sites/ciao-baby/routing-rationale.md
  - restaurant-website-system/sites/ciao-baby/.agency-template.json
  - restaurant-website-system/sites/ciao-baby/content.ts
  - restaurant-website-system/sites/ciao-baby/first-preview-build-notes.md
  - restaurant-website-system/sites/ciao-baby/scrapes/capture-preview-evidence.mjs
  - restaurant-website-system/sites/ciao-baby/scrapes/first-preview-browser-checks-2026-05-04.json
  - restaurant-website-system/sites/ciao-baby/screenshot-inventory-first-preview-2026-05-04.json
  - restaurant-website-system/sites/ciao-baby/screenshots/preview-home-desktop-2026-05-04.png
  - restaurant-website-system/sites/ciao-baby/screenshots/preview-home-mobile-2026-05-04.png
  - restaurant-website-system/sites/ciao-baby/screenshots/preview-menu-desktop-2026-05-04.png
  - restaurant-website-system/sites/ciao-baby/screenshots/preview-menu-mobile-2026-05-04.png
  - restaurant-website-system/sites/ciao-baby/screenshots/preview-about-desktop-2026-05-04.png
  - restaurant-website-system/sites/ciao-baby/screenshots/preview-about-mobile-2026-05-04.png
  - restaurant-website-system/sites/ciao-baby/screenshots/preview-contact-desktop-2026-05-04.png
  - restaurant-website-system/sites/ciao-baby/screenshots/preview-contact-mobile-2026-05-04.png
  - npm ci; npm run typecheck; npm run build passed on 2026-05-04
  - Local preview URL during capture: http://127.0.0.1:3084
  - restaurant-website-system/sites/ciao-baby/mc-build-writeback-first-preview-2026-05-04.json

### 5. website_improvement_pass — Run first full improvement pass
- Stage: improving
- Status: done
- Required skills: restaurant-fork-improvement, website-agency-system, agency-mission-control-sync
- Evidence required: improvement notes; before/after screenshots or changed file list; mobile evidence
- Requirement: identity-specific — Copy/visual rhythm feels specific to the restaurant and selected archetype
- Requirement: conversion-paths — Order/reserve/call/directions/catering/events paths are accurate as applicable
- Requirement: mobile-check — Mobile pass is explicitly checked with evidence
- Evidence:
  - restaurant-website-system/sites/ciao-baby/improvement-pass-2026-05-04.md
  - restaurant-website-system/sites/ciao-baby/scrapes/improvement-pass-browser-checks-2026-05-04.json
  - restaurant-website-system/sites/ciao-baby/screenshot-inventory-improvement-pass-2026-05-04.json
  - restaurant-website-system/sites/ciao-baby/screenshots/improvement-pass-home-desktop-2026-05-04.png
  - restaurant-website-system/sites/ciao-baby/screenshots/improvement-pass-home-mobile-2026-05-04.png
  - restaurant-website-system/sites/ciao-baby/screenshots/improvement-pass-menu-desktop-2026-05-04.png
  - restaurant-website-system/sites/ciao-baby/screenshots/improvement-pass-menu-mobile-2026-05-04.png
  - restaurant-website-system/sites/ciao-baby/screenshots/improvement-pass-about-desktop-2026-05-04.png
  - restaurant-website-system/sites/ciao-baby/screenshots/improvement-pass-about-mobile-2026-05-04.png
  - restaurant-website-system/sites/ciao-baby/screenshots/improvement-pass-contact-desktop-2026-05-04.png
  - restaurant-website-system/sites/ciao-baby/screenshots/improvement-pass-contact-mobile-2026-05-04.png
  - restaurant-website-system/sites/ciao-baby/mc-build-writeback-improving-2026-05-04.json
  - npm run typecheck; npm run build passed on 2026-05-04 after improvement pass
  - Visual mobile QA found no blocker after second improvement capture

### 6. top_three_improvements — Identify and implement top 3 improvements
- Stage: top_3_improvements
- Status: done
- Required skills: restaurant-fork-improvement, restaurant-build-checklist, agency-mission-control-sync
- Evidence required: top-3 improvements doc; before/after screenshots or diff evidence
- Requirement: top-three-named — Top 3 concrete improvements are named from audit/preview/QA
- Requirement: top-three-implemented — All three improvements are implemented
- Requirement: top-three-evidence — Each improvement has before/after evidence
- Evidence:
  - restaurant-website-system/sites/ciao-baby/top-3-improvements-2026-05-04.md
  - restaurant-website-system/sites/ciao-baby/improvement-pass-2026-05-04.md
  - restaurant-website-system/sites/ciao-baby/scrapes/first-preview-browser-checks-2026-05-04.json
  - restaurant-website-system/sites/ciao-baby/scrapes/improvement-pass-browser-checks-2026-05-04.json
  - restaurant-website-system/sites/ciao-baby/screenshot-inventory-first-preview-2026-05-04.json
  - restaurant-website-system/sites/ciao-baby/screenshot-inventory-improvement-pass-2026-05-04.json
  - restaurant-website-system/sites/ciao-baby/mc-build-writeback-top-3-improvements-2026-05-04.json
  - npm run typecheck; npm run build passed on 2026-05-04 after top-three implementation
  - Visual mobile QA found no blocker after second improvement capture

### 7. ai_concierge_added — Add truthful AI concierge or record blocker
- Stage: concierge
- Status: done
- Required skills: website-agency-system, restaurant-build-checklist, agency-mission-control-sync
- Evidence required: KB/source file; test transcript; blocker if concierge cannot be safely added
- Requirement: concierge-kb-truthful — Concierge KB only uses verified restaurant facts
- Requirement: concierge-tested — Short transcript proves useful behavior
- Requirement: concierge-safe — Fallbacks prevent fake reservations, unsupported promises, or invented facts
- Evidence:
  - restaurant-website-system/sites/ciao-baby/lib/concierge-kb.ts
  - restaurant-website-system/sites/ciao-baby/app/api/concierge/route.ts
  - restaurant-website-system/sites/ciao-baby/components/TruthfulConcierge.tsx
  - restaurant-website-system/sites/ciao-baby/components/ContactPage.tsx
  - restaurant-website-system/sites/ciao-baby/ai-concierge.md
  - restaurant-website-system/sites/ciao-baby/ai-concierge-transcript.md
  - restaurant-website-system/sites/ciao-baby/scrapes/concierge-browser-checks-2026-05-04.json
  - restaurant-website-system/sites/ciao-baby/screenshot-inventory-concierge-2026-05-04.json
  - restaurant-website-system/sites/ciao-baby/screenshots/concierge-contact-desktop-2026-05-04.png
  - restaurant-website-system/sites/ciao-baby/screenshots/concierge-contact-mobile-2026-05-04.png
  - restaurant-website-system/sites/ciao-baby/mc-build-writeback-concierge-2026-05-04.json
  - node --experimental-strip-types smoke test against lib/concierge-kb.ts passed
  - POST /api/concierge reservation-refusal smoke test passed
  - npm run typecheck; npm run build passed on 2026-05-04 with dynamic /api/concierge route

### 8. pitch_doc — Create sellable pitch doc
- Stage: pitch
- Status: done
- Required skills: restaurant-pitch-doc, agency-mission-control-sync
- Evidence required: pitch-doc.md; before/after evidence links
- Requirement: pitch-specific — Pitch is specific to restaurant, neighborhood/cuisine, reviews, and conversion gaps
- Requirement: pitch-before-after — Pitch explains before/after delta in owner language
- Requirement: pitch-evidence — Evidence and preview links are embedded or linked
- Evidence:
  - restaurant-website-system/sites/ciao-baby/pitch-doc.md
  - restaurant-website-system/sites/ciao-baby/audit.md
  - restaurant-website-system/sites/ciao-baby/google-reviews-themes.md
  - restaurant-website-system/sites/ciao-baby/routing-rationale.md
  - restaurant-website-system/sites/ciao-baby/first-preview-build-notes.md
  - restaurant-website-system/sites/ciao-baby/improvement-pass-2026-05-04.md
  - restaurant-website-system/sites/ciao-baby/top-3-improvements-2026-05-04.md
  - restaurant-website-system/sites/ciao-baby/ai-concierge.md
  - restaurant-website-system/sites/ciao-baby/ai-concierge-transcript.md
  - restaurant-website-system/sites/ciao-baby/scrapes/google-reviews-highest-30.json
  - restaurant-website-system/sites/ciao-baby/scrapes/concierge-browser-checks-2026-05-04.json
  - restaurant-website-system/sites/ciao-baby/mc-pitch-writeback-2026-05-04.json

### 9. battle_cards_doc — Create owner battle cards
- Stage: battle_cards
- Status: done
- Required skills: restaurant-pitch-doc, agency-mission-control-sync
- Evidence required: battle-cards.md
- Requirement: battle-cards-objections — Likely owner objections have concise answers
- Requirement: battle-cards-demo-path — Demo path and proof points are clear
- Requirement: battle-cards-risks — Risks/unknowns are called out truthfully
- Evidence:
  - restaurant-website-system/sites/ciao-baby/battle-cards.md
  - restaurant-website-system/sites/ciao-baby/pitch-doc.md
  - restaurant-website-system/sites/ciao-baby/audit.md
  - restaurant-website-system/sites/ciao-baby/google-reviews-themes.md
  - restaurant-website-system/sites/ciao-baby/content.ts
  - restaurant-website-system/sites/ciao-baby/improvement-pass-2026-05-04.md
  - restaurant-website-system/sites/ciao-baby/top-3-improvements-2026-05-04.md
  - restaurant-website-system/sites/ciao-baby/ai-concierge.md
  - restaurant-website-system/sites/ciao-baby/ai-concierge-transcript.md
  - restaurant-website-system/sites/ciao-baby/mc-battle-cards-writeback-2026-05-04.json

### 10. qa_round_1 — QA round 1
- Stage: qa_round_1
- Status: done
- Required skills: restaurant-qa-delivery, browser-automation, agency-mission-control-sync
- Evidence required: qa-round-1.md; desktop screenshot; mobile screenshot; build/typecheck result
- Requirement: qa-round-1 — QA round 1 completed with screenshots, findings, fixes, and MC writeback
- Evidence:
  - restaurant-website-system/sites/ciao-baby/qa-round-1.md
  - restaurant-website-system/sites/ciao-baby/scrapes/qa-round-1-browser-checks-2026-05-04.json
  - restaurant-website-system/sites/ciao-baby/screenshot-inventory-qa-round-1-2026-05-04.json
  - restaurant-website-system/sites/ciao-baby/screenshots/qa-round-1-home-desktop-2026-05-04.png
  - restaurant-website-system/sites/ciao-baby/screenshots/qa-round-1-home-mobile-2026-05-04.png
  - restaurant-website-system/sites/ciao-baby/screenshots/qa-round-1-menu-desktop-2026-05-04.png
  - restaurant-website-system/sites/ciao-baby/screenshots/qa-round-1-menu-mobile-2026-05-04.png
  - restaurant-website-system/sites/ciao-baby/screenshots/qa-round-1-about-desktop-2026-05-04.png
  - restaurant-website-system/sites/ciao-baby/screenshots/qa-round-1-about-mobile-2026-05-04.png
  - restaurant-website-system/sites/ciao-baby/screenshots/qa-round-1-contact-desktop-2026-05-04.png
  - restaurant-website-system/sites/ciao-baby/screenshots/qa-round-1-contact-mobile-2026-05-04.png
  - restaurant-website-system/sites/ciao-baby/components/AboutHeritageSplit.tsx
  - restaurant-website-system/sites/ciao-baby/mc-build-writeback-qa-round-1-2026-05-04.json
  - npm run typecheck; npm run build passed on 2026-05-04 for QA round 1
  - POST /api/concierge reservation-refusal smoke test passed

### 11. qa_round_2 — QA round 2
- Stage: qa_round_2
- Status: done
- Required skills: restaurant-qa-delivery, browser-automation, agency-mission-control-sync
- Evidence required: qa-round-2.md; desktop screenshot; mobile screenshot; build/typecheck result
- Requirement: qa-round-2 — QA round 2 completed with screenshots, findings, fixes, and MC writeback
- Evidence:
  - restaurant-website-system/sites/ciao-baby/qa-round-2.md
  - restaurant-website-system/sites/ciao-baby/scrapes/qa-round-2-browser-checks-2026-05-04.json
  - restaurant-website-system/sites/ciao-baby/screenshot-inventory-qa-round-2-2026-05-04.json
  - restaurant-website-system/sites/ciao-baby/screenshots/qa-round-2-home-desktop-2026-05-04.png
  - restaurant-website-system/sites/ciao-baby/screenshots/qa-round-2-home-mobile-2026-05-04.png
  - restaurant-website-system/sites/ciao-baby/screenshots/qa-round-2-menu-desktop-2026-05-04.png
  - restaurant-website-system/sites/ciao-baby/screenshots/qa-round-2-menu-mobile-2026-05-04.png
  - restaurant-website-system/sites/ciao-baby/screenshots/qa-round-2-about-desktop-2026-05-04.png
  - restaurant-website-system/sites/ciao-baby/screenshots/qa-round-2-about-mobile-2026-05-04.png
  - restaurant-website-system/sites/ciao-baby/screenshots/qa-round-2-contact-desktop-2026-05-04.png
  - restaurant-website-system/sites/ciao-baby/screenshots/qa-round-2-contact-mobile-2026-05-04.png
  - restaurant-website-system/sites/ciao-baby/mc-build-writeback-qa-round-2-2026-05-04.json
  - npm run typecheck; npm run build passed on 2026-05-04 for QA round 2

### 12. qa_round_3 — QA round 3 final sell-readiness QA
- Stage: qa_round_3
- Status: done
- Required skills: restaurant-qa-delivery, website-agency-system, browser-automation, agency-mission-control-sync
- Evidence required: qa-round-3.md; desktop screenshots; mobile screenshots; build/typecheck result
- Requirement: qa-round-3 — QA round 3 completed with final sell-readiness screenshots, fixes, and MC writeback
- Evidence:
  - restaurant-website-system/sites/ciao-baby/qa-round-3.md
  - restaurant-website-system/sites/ciao-baby/scrapes/qa-round-3-browser-checks-2026-05-04.json
  - restaurant-website-system/sites/ciao-baby/screenshot-inventory-qa-round-3-2026-05-04.json
  - restaurant-website-system/sites/ciao-baby/screenshots/qa-round-3-home-desktop-2026-05-04.png
  - restaurant-website-system/sites/ciao-baby/screenshots/qa-round-3-home-mobile-2026-05-04.png
  - restaurant-website-system/sites/ciao-baby/screenshots/qa-round-3-menu-desktop-2026-05-04.png
  - restaurant-website-system/sites/ciao-baby/screenshots/qa-round-3-menu-mobile-2026-05-04.png
  - restaurant-website-system/sites/ciao-baby/screenshots/qa-round-3-about-desktop-2026-05-04.png
  - restaurant-website-system/sites/ciao-baby/screenshots/qa-round-3-about-mobile-2026-05-04.png
  - restaurant-website-system/sites/ciao-baby/screenshots/qa-round-3-contact-desktop-2026-05-04.png
  - restaurant-website-system/sites/ciao-baby/screenshots/qa-round-3-contact-mobile-2026-05-04.png
  - restaurant-website-system/sites/ciao-baby/mc-build-writeback-qa-round-3-2026-05-04.json
  - npm run typecheck; npm run build passed on 2026-05-04 for QA round 3
  - Final visual sell-readiness QA passed with delivery caveats

### 13. delivery — Package and deliver only after all gates pass
- Stage: packaging
- Status: pending
- Required skills: restaurant-qa-delivery, restaurant-pitch-doc, agency-mission-control-sync
- Evidence required: preview URL; pitch doc; battle cards; checklist.md/json; QA evidence; MC delivery writeback
- Requirement: delivery-package — Preview URL, screenshots, pitch doc, battle cards, checklist, QA evidence, and requirement status are mirrored to MC
- Requirement: delivery-no-missing-evidence — No delivery until MC has checklist paths, preview/artifact URL, and required gate evidence
- Evidence:
  - restaurant-website-system/sites/ciao-baby/delivery-package.md
  - restaurant-website-system/sites/ciao-baby/outreach-draft.md
  - restaurant-website-system/sites/ciao-baby/pitch-doc.md
  - restaurant-website-system/sites/ciao-baby/battle-cards.md
  - restaurant-website-system/sites/ciao-baby/checklist.md
  - restaurant-website-system/sites/ciao-baby/checklist.json
  - restaurant-website-system/sites/ciao-baby/qa-round-1.md
  - restaurant-website-system/sites/ciao-baby/qa-round-2.md
  - restaurant-website-system/sites/ciao-baby/qa-round-3.md
  - restaurant-website-system/sites/ciao-baby/scrapes/qa-round-3-browser-checks-2026-05-04.json
  - restaurant-website-system/sites/ciao-baby/screenshot-inventory-qa-round-3-2026-05-04.json
  - restaurant-website-system/sites/ciao-baby/ai-concierge.md
  - restaurant-website-system/sites/ciao-baby/ai-concierge-transcript.md
  - restaurant-website-system/sites/ciao-baby/mc-delivery-package-writeback-2026-05-04.json
  - https://github.com/spiral-app-labs/skills/pull/28
  - https://skills-git-chore-ciao-baby-c92606-ethan-ethantalrejas-projects.vercel.app
- Blocker: Local delivery package is complete and PR #28 is open, but final delivery is blocked until a client-shareable public preview URL, Mission Control remote sync auth, and owner/founder verification are complete.

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
- [x] template-route-locked: Exactly one archetype/template route is chosen and justified — Routed to `gusto-01`; rationale saved.
- [x] fork-built: Template fork builds successfully with real content and preserved conversion links — `npm run typecheck` and `npm run build` passed; local preview captured.
- [x] specificity: No generic restaurant copy, fake claims, fake menu items, fake reviews, or fake ordering paths — Copy/content uses real facts, review themes, call/directions handoffs, and explicit source caveats.
- [x] identity-specific: Copy/visual rhythm feels specific to the restaurant and selected archetype — Improvement pass tightened Ciao-specific proof, source caveats, and `gusto-01` warmth without template drift.
- [x] conversion-paths: Order/reserve/call/directions/catering/events paths are accurate as applicable — Phone, directions, menu, and private-party handoffs are surfaced; no fake forms/reservations.
- [x] mobile-check: Mobile pass is explicitly checked with evidence — Desktop/mobile screenshots recaptured for four routes with zero overflow offenders and visual mobile QA no-blocker.
- [x] top-three-named: Top 3 concrete improvements are named from audit/preview/QA — Top three are documented from first-preview QA and factual-safety review.
- [x] top-three-implemented: All three improvements are implemented — Phone-first conversion, sourced proof labels, and mobile trust/readability fixes are implemented.
- [x] top-three-evidence: Each improvement has before/after evidence — Before/after scrape manifests and screenshot inventories are linked.
- [x] concierge-kb-truthful: Concierge KB only uses verified restaurant facts — Deterministic KB uses only audit/scrape/review evidence and direct handoffs.
- [x] concierge-tested: Short transcript proves useful behavior — Resolver and `/api/concierge` smoke tests passed; transcript recorded.
- [x] concierge-safe: Fallbacks prevent fake reservations, unsupported promises, or invented facts — Unsupported/current requests refuse reservations, ordering, prices, allergy/medical, and private-event promises.
- [x] pitch-specific: Pitch is specific to restaurant, neighborhood/cuisine, reviews, and conversion gaps — Pitch frames Ciao as family-run Barrington Italian with two-domain trust/conversion problem.
- [x] pitch-before-after: Pitch explains before/after delta in owner language — Pitch explains current fragmented web presence versus call-first, source-backed preview.
- [x] pitch-evidence: Evidence and preview links are embedded or linked — Pitch links audit, review, routing, build, improvements, concierge, and browser evidence.
- [x] battle-cards-objections: Likely owner objections have concise answers — Battle cards include owner objections and calm responses.
- [x] battle-cards-demo-path: Demo path and proof points are clear — Battle cards include a six-step demo path Ethan can use.
- [x] battle-cards-risks: Risks/unknowns are called out truthfully — Risks and what-not-to-claim guardrails are explicit.
- [x] qa-round-1: QA round 1 completed with screenshots, findings, fixes, and MC writeback — QA1 completed with build/typecheck, screenshots, concierge safety check, and About CTA fix.
- [x] qa-round-2: QA round 2 completed with screenshots, findings, fixes, and MC writeback — QA2 completed with sellability/mobile polish fixes and caveats.
- [x] qa-round-3: QA round 3 completed with final sell-readiness screenshots, fixes, and MC writeback — QA3 final sell-readiness passed locally with delivery caveats.
- [ ] delivery-package: Preview URL, screenshots, pitch doc, battle cards, checklist, QA evidence, and requirement status are mirrored to MC — Local delivery package exists and PR #28 is open; client-shareable public preview and MC sync are still blocked.
- [ ] delivery-no-missing-evidence: No delivery until MC has checklist paths, preview/artifact URL, and required gate evidence — Not passed until client-shareable public preview URL and MC evidence mirror exist.

## Evidence Paths

- restaurant-website-system/sites/ciao-baby/checklist.md
- restaurant-website-system/sites/ciao-baby/checklist.json
- Mission Control website workflow refresh returned ok for lead 8a8ca9fc-9c6d-49a6-aaa4-f532feaf533a
- restaurant-website-system/sites/ciao-baby/audit.md
- restaurant-website-system/sites/ciao-baby/screenshots/current-site-desktop-full.png
- restaurant-website-system/sites/ciao-baby/screenshots/current-site-mobile-full.png
- restaurant-website-system/sites/ciao-baby/screenshots/current-site-mobile-fold.png
- restaurant-website-system/sites/ciao-baby/scrapes/current-site-browser-dom-snapshot.html
- restaurant-website-system/sites/ciao-baby/scrapes/current-site-browser-text.txt
- restaurant-website-system/sites/ciao-baby/screenshots/ciaobaby-net-shell-desktop-full.png
- restaurant-website-system/sites/ciao-baby/screenshots/ciaobaby-net-shell-mobile-full.png
- restaurant-website-system/sites/ciao-baby/screenshots/ciaobaby-net-shell-mobile-fold.png
- restaurant-website-system/sites/ciao-baby/scrapes/ciaobaby-net-shell-browser-dom-snapshot.html
- restaurant-website-system/sites/ciao-baby/scrapes/ciaobaby-net-shell-browser-text.txt
- restaurant-website-system/sites/ciao-baby/screenshots/google-reviews-highest.png
- restaurant-website-system/sites/ciao-baby/scrapes/google-reviews-highest-30.json
- restaurant-website-system/sites/ciao-baby/google-reviews-themes.md
- restaurant-website-system/sites/ciao-baby/routing-rationale.md
- restaurant-website-system/sites/ciao-baby/.agency-template.json
- restaurant-website-system/sites/ciao-baby/content.ts
- restaurant-website-system/sites/ciao-baby/first-preview-build-notes.md
- restaurant-website-system/sites/ciao-baby/scrapes/capture-preview-evidence.mjs
- restaurant-website-system/sites/ciao-baby/scrapes/first-preview-browser-checks-2026-05-04.json
- restaurant-website-system/sites/ciao-baby/screenshot-inventory-first-preview-2026-05-04.json
- restaurant-website-system/sites/ciao-baby/screenshots/preview-home-desktop-2026-05-04.png
- restaurant-website-system/sites/ciao-baby/screenshots/preview-home-mobile-2026-05-04.png
- restaurant-website-system/sites/ciao-baby/screenshots/preview-menu-desktop-2026-05-04.png
- restaurant-website-system/sites/ciao-baby/screenshots/preview-menu-mobile-2026-05-04.png
- restaurant-website-system/sites/ciao-baby/screenshots/preview-about-desktop-2026-05-04.png
- restaurant-website-system/sites/ciao-baby/screenshots/preview-about-mobile-2026-05-04.png
- restaurant-website-system/sites/ciao-baby/screenshots/preview-contact-desktop-2026-05-04.png
- restaurant-website-system/sites/ciao-baby/screenshots/preview-contact-mobile-2026-05-04.png
- npm ci; npm run typecheck; npm run build passed on 2026-05-04
- Local preview URL during capture: http://127.0.0.1:3084
- restaurant-website-system/sites/ciao-baby/mc-build-writeback-first-preview-2026-05-04.json
- restaurant-website-system/sites/ciao-baby/improvement-pass-2026-05-04.md
- restaurant-website-system/sites/ciao-baby/scrapes/improvement-pass-browser-checks-2026-05-04.json
- restaurant-website-system/sites/ciao-baby/screenshot-inventory-improvement-pass-2026-05-04.json
- restaurant-website-system/sites/ciao-baby/screenshots/improvement-pass-home-desktop-2026-05-04.png
- restaurant-website-system/sites/ciao-baby/screenshots/improvement-pass-home-mobile-2026-05-04.png
- restaurant-website-system/sites/ciao-baby/screenshots/improvement-pass-menu-desktop-2026-05-04.png
- restaurant-website-system/sites/ciao-baby/screenshots/improvement-pass-menu-mobile-2026-05-04.png
- restaurant-website-system/sites/ciao-baby/screenshots/improvement-pass-about-desktop-2026-05-04.png
- restaurant-website-system/sites/ciao-baby/screenshots/improvement-pass-about-mobile-2026-05-04.png
- restaurant-website-system/sites/ciao-baby/screenshots/improvement-pass-contact-desktop-2026-05-04.png
- restaurant-website-system/sites/ciao-baby/screenshots/improvement-pass-contact-mobile-2026-05-04.png
- restaurant-website-system/sites/ciao-baby/mc-build-writeback-improving-2026-05-04.json
- npm run typecheck; npm run build passed on 2026-05-04 after improvement pass
- Visual mobile QA found no blocker after second improvement capture
- restaurant-website-system/sites/ciao-baby/top-3-improvements-2026-05-04.md
- restaurant-website-system/sites/ciao-baby/mc-build-writeback-top-3-improvements-2026-05-04.json
- npm run typecheck; npm run build passed on 2026-05-04 after top-three implementation
- restaurant-website-system/sites/ciao-baby/lib/concierge-kb.ts
- restaurant-website-system/sites/ciao-baby/app/api/concierge/route.ts
- restaurant-website-system/sites/ciao-baby/components/TruthfulConcierge.tsx
- restaurant-website-system/sites/ciao-baby/components/ContactPage.tsx
- restaurant-website-system/sites/ciao-baby/ai-concierge.md
- restaurant-website-system/sites/ciao-baby/ai-concierge-transcript.md
- restaurant-website-system/sites/ciao-baby/scrapes/concierge-browser-checks-2026-05-04.json
- restaurant-website-system/sites/ciao-baby/screenshot-inventory-concierge-2026-05-04.json
- restaurant-website-system/sites/ciao-baby/screenshots/concierge-contact-desktop-2026-05-04.png
- restaurant-website-system/sites/ciao-baby/screenshots/concierge-contact-mobile-2026-05-04.png
- restaurant-website-system/sites/ciao-baby/mc-build-writeback-concierge-2026-05-04.json
- node --experimental-strip-types smoke test against lib/concierge-kb.ts passed
- POST /api/concierge reservation-refusal smoke test passed
- npm run typecheck; npm run build passed on 2026-05-04 with dynamic /api/concierge route
- restaurant-website-system/sites/ciao-baby/pitch-doc.md
- restaurant-website-system/sites/ciao-baby/mc-pitch-writeback-2026-05-04.json
- restaurant-website-system/sites/ciao-baby/battle-cards.md
- restaurant-website-system/sites/ciao-baby/mc-battle-cards-writeback-2026-05-04.json
- restaurant-website-system/sites/ciao-baby/qa-round-1.md
- restaurant-website-system/sites/ciao-baby/scrapes/qa-round-1-browser-checks-2026-05-04.json
- restaurant-website-system/sites/ciao-baby/screenshot-inventory-qa-round-1-2026-05-04.json
- restaurant-website-system/sites/ciao-baby/screenshots/qa-round-1-home-desktop-2026-05-04.png
- restaurant-website-system/sites/ciao-baby/screenshots/qa-round-1-home-mobile-2026-05-04.png
- restaurant-website-system/sites/ciao-baby/screenshots/qa-round-1-menu-desktop-2026-05-04.png
- restaurant-website-system/sites/ciao-baby/screenshots/qa-round-1-menu-mobile-2026-05-04.png
- restaurant-website-system/sites/ciao-baby/screenshots/qa-round-1-about-desktop-2026-05-04.png
- restaurant-website-system/sites/ciao-baby/screenshots/qa-round-1-about-mobile-2026-05-04.png
- restaurant-website-system/sites/ciao-baby/screenshots/qa-round-1-contact-desktop-2026-05-04.png
- restaurant-website-system/sites/ciao-baby/screenshots/qa-round-1-contact-mobile-2026-05-04.png
- restaurant-website-system/sites/ciao-baby/components/AboutHeritageSplit.tsx
- restaurant-website-system/sites/ciao-baby/mc-build-writeback-qa-round-1-2026-05-04.json
- npm run typecheck; npm run build passed on 2026-05-04 for QA round 1
- restaurant-website-system/sites/ciao-baby/qa-round-2.md
- restaurant-website-system/sites/ciao-baby/scrapes/qa-round-2-browser-checks-2026-05-04.json
- restaurant-website-system/sites/ciao-baby/screenshot-inventory-qa-round-2-2026-05-04.json
- restaurant-website-system/sites/ciao-baby/screenshots/qa-round-2-home-desktop-2026-05-04.png
- restaurant-website-system/sites/ciao-baby/screenshots/qa-round-2-home-mobile-2026-05-04.png
- restaurant-website-system/sites/ciao-baby/screenshots/qa-round-2-menu-desktop-2026-05-04.png
- restaurant-website-system/sites/ciao-baby/screenshots/qa-round-2-menu-mobile-2026-05-04.png
- restaurant-website-system/sites/ciao-baby/screenshots/qa-round-2-about-desktop-2026-05-04.png
- restaurant-website-system/sites/ciao-baby/screenshots/qa-round-2-about-mobile-2026-05-04.png
- restaurant-website-system/sites/ciao-baby/screenshots/qa-round-2-contact-desktop-2026-05-04.png
- restaurant-website-system/sites/ciao-baby/screenshots/qa-round-2-contact-mobile-2026-05-04.png
- restaurant-website-system/sites/ciao-baby/mc-build-writeback-qa-round-2-2026-05-04.json
- npm run typecheck; npm run build passed on 2026-05-04 for QA round 2
- restaurant-website-system/sites/ciao-baby/qa-round-3.md
- restaurant-website-system/sites/ciao-baby/scrapes/qa-round-3-browser-checks-2026-05-04.json
- restaurant-website-system/sites/ciao-baby/screenshot-inventory-qa-round-3-2026-05-04.json
- restaurant-website-system/sites/ciao-baby/screenshots/qa-round-3-home-desktop-2026-05-04.png
- restaurant-website-system/sites/ciao-baby/screenshots/qa-round-3-home-mobile-2026-05-04.png
- restaurant-website-system/sites/ciao-baby/screenshots/qa-round-3-menu-desktop-2026-05-04.png
- restaurant-website-system/sites/ciao-baby/screenshots/qa-round-3-menu-mobile-2026-05-04.png
- restaurant-website-system/sites/ciao-baby/screenshots/qa-round-3-about-desktop-2026-05-04.png
- restaurant-website-system/sites/ciao-baby/screenshots/qa-round-3-about-mobile-2026-05-04.png
- restaurant-website-system/sites/ciao-baby/screenshots/qa-round-3-contact-desktop-2026-05-04.png
- restaurant-website-system/sites/ciao-baby/screenshots/qa-round-3-contact-mobile-2026-05-04.png
- restaurant-website-system/sites/ciao-baby/mc-build-writeback-qa-round-3-2026-05-04.json
- npm run typecheck; npm run build passed on 2026-05-04 for QA round 3
- Final visual sell-readiness QA passed with delivery caveats
- restaurant-website-system/sites/ciao-baby/delivery-package.md
- restaurant-website-system/sites/ciao-baby/outreach-draft.md
- restaurant-website-system/sites/ciao-baby/mc-delivery-package-writeback-2026-05-04.json
- https://github.com/spiral-app-labs/skills/pull/28
- https://skills-git-chore-ciao-baby-c92606-ethan-ethantalrejas-projects.vercel.app

## Mission Control Payloads

- restaurant-website-system/sites/ciao-baby/mc-build-writeback-first-preview-2026-05-04.json
- restaurant-website-system/sites/ciao-baby/mc-build-writeback-improving-2026-05-04.json
- restaurant-website-system/sites/ciao-baby/mc-build-writeback-top-3-improvements-2026-05-04.json
- restaurant-website-system/sites/ciao-baby/mc-build-writeback-concierge-2026-05-04.json
- restaurant-website-system/sites/ciao-baby/mc-pitch-writeback-2026-05-04.json
- restaurant-website-system/sites/ciao-baby/mc-battle-cards-writeback-2026-05-04.json
- restaurant-website-system/sites/ciao-baby/mc-build-writeback-qa-round-1-2026-05-04.json
- restaurant-website-system/sites/ciao-baby/mc-build-writeback-qa-round-2-2026-05-04.json
- restaurant-website-system/sites/ciao-baby/mc-build-writeback-qa-round-3-2026-05-04.json
- restaurant-website-system/sites/ciao-baby/mc-delivery-package-writeback-2026-05-04.json

## QA Rounds

- Round 1: restaurant-website-system/sites/ciao-baby/qa-round-1.md
- Round 2: restaurant-website-system/sites/ciao-baby/qa-round-2.md
- Round 3: restaurant-website-system/sites/ciao-baby/qa-round-3.md

## Pitch Artifacts

- Pitch doc: restaurant-website-system/sites/ciao-baby/pitch-doc.md
- Battle cards: restaurant-website-system/sites/ciao-baby/battle-cards.md
- Outreach draft: restaurant-website-system/sites/ciao-baby/outreach-draft.md
- Delivery package: restaurant-website-system/sites/ciao-baby/delivery-package.md

## Blockers

- PR #28 is open and Vercel preview deployed, but the preview is auth-gated and not client-shareable yet.
- Mission Control remote sync pending official API auth (`AGENCY_AUTONOMY_API_KEY` / `OPENCLAW_WEBHOOK_SECRET` unset in this runtime). Local writeback payloads are prepared through packaging.
- Owner/founder verification still needed for preferred domain, exact current hours, and any changed menu prices before final delivery.

## Done Criteria

- Mission Control lead has a simple sales status and current metadata.build_stage.
- Mission Control parent task metadata.requirements mirrors this checklist.
- All required checklist rows are passed.
- Three QA rounds are logged with screenshot evidence.
- Preview URL, pitch doc, outreach draft, and delivery evidence are attached.
