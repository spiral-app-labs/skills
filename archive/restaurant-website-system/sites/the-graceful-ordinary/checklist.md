# the-graceful-ordinary Build Checklist

- Workflow version: 2026-05-04
- Source of truth: Mission Control tasks.metadata + this mirrored local checklist
- Lead ID: a513755c-e7a3-438e-b8e9-78e8cd99e080
- MC parent task ID: 377dcee1-820a-4d94-a5b1-0740be57c92c
- Template slug: roma
- Current stage: qa_round_3
- Checklist MD: restaurant-website-system/sites/the-graceful-ordinary/checklist.md
- Checklist JSON: restaurant-website-system/sites/the-graceful-ordinary/checklist.json
- Deploy URL: TBD
- Updated: 2026-05-06T09:57:36.702Z

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
- Status: blocked
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
- [x] fork-built: Template fork builds successfully with real content and preserved conversion links
- [x] specificity: No generic restaurant copy, fake claims, fake menu items, fake reviews, or fake ordering paths
- [x] identity-specific: Copy/visual rhythm feels specific to the restaurant and selected archetype
- [x] conversion-paths: Order/reserve/call/directions/catering/events paths are accurate as applicable
- [x] mobile-check: Mobile pass is explicitly checked with evidence
- [x] top-three-named: Top 3 concrete improvements are named from audit/preview/QA
- [x] top-three-implemented: All three improvements are implemented
- [x] top-three-evidence: Each improvement has before/after evidence
- [x] concierge-kb-truthful: Concierge KB only uses verified restaurant facts
- [x] concierge-tested: Short transcript proves useful behavior
- [x] concierge-safe: Fallbacks prevent fake reservations, unsupported promises, or invented facts
- [x] pitch-specific: Pitch is specific to restaurant, neighborhood/cuisine, reviews, and conversion gaps
- [x] pitch-before-after: Pitch explains before/after delta in owner language
- [x] pitch-evidence: Evidence and preview links are embedded or linked
- [x] battle-cards-objections: Likely owner objections have concise answers
- [x] battle-cards-demo-path: Demo path and proof points are clear
- [x] battle-cards-risks: Risks/unknowns are called out truthfully
- [x] qa-round-1: QA round 1 completed with screenshots, findings, fixes, and MC writeback
- [x] qa-round-2: QA round 2 completed with screenshots, findings, fixes, and MC writeback
- [ ] qa-round-3: QA round 3 completed with final sell-readiness screenshots, fixes, and MC writeback
- [ ] delivery-package: Preview URL, screenshots, pitch doc, battle cards, checklist, QA evidence, and requirement status are mirrored to MC
- [ ] delivery-no-missing-evidence: No delivery until MC has checklist paths, preview/artifact URL, and required gate evidence

## Evidence Paths

- Checklist: `restaurant-website-system/sites/the-graceful-ordinary/checklist.md`, `restaurant-website-system/sites/the-graceful-ordinary/checklist.json`
- Audit: `restaurant-website-system/sites/the-graceful-ordinary/audit.md`
- Current site scrape: `restaurant-website-system/sites/the-graceful-ordinary/scrapes/current-site-dom-snapshot.txt`
- Google reviews packet: `restaurant-website-system/sites/the-graceful-ordinary/reviews/google-reviews-highest.md`, `restaurant-website-system/sites/the-graceful-ordinary/reviews/google-reviews-highest.json`
- Routing: `restaurant-website-system/sites/the-graceful-ordinary/routing.md`
- Improvement pass: `restaurant-website-system/sites/the-graceful-ordinary/improvement-pass.md`
- Top-three improvements: `restaurant-website-system/sites/the-graceful-ordinary/top-3-improvements.md`
- Concierge evidence: `restaurant-website-system/sites/the-graceful-ordinary/concierge-test-transcript.md`
- Concierge screenshots: `restaurant-website-system/sites/the-graceful-ordinary/screenshots/concierge/concierge-entry-point-desktop.png`, `restaurant-website-system/sites/the-graceful-ordinary/screenshots/concierge/concierge-test-transcript-desktop.png`

## QA Rounds

- Round 1: `restaurant-website-system/sites/the-graceful-ordinary/qa-round-1.md` — passed
- Round 2: `restaurant-website-system/sites/the-graceful-ordinary/qa-round-2.md` — passed
- Round 3: blocked / attempted locally — `restaurant-website-system/sites/the-graceful-ordinary/qa-round-3.md`, `restaurant-website-system/sites/the-graceful-ordinary/qa-round-3-blocker.md`

## Pitch Artifacts

- Pitch doc: `restaurant-website-system/sites/the-graceful-ordinary/pitch-doc.md`
- Battle cards: `restaurant-website-system/sites/the-graceful-ordinary/battle-cards.md`
- Outreach draft: TBD

## Blockers

- `qa_round_3`: No founder-shareable public preview currently reflects local v2. Local QA round 3 attempt passed technical checks and produced local screenshots, but public stable preview `https://graceful-ordinary-redesign.vercel.app` is stale and still shows unsupported claims (`AAA Three-Diamond`, `TripAdvisor Guest`, `200+ Reviews`, `4.8`), while the PR preview `https://skills-git-feat-graceful-or-b80ef9-ethan-ethantalrejas-projects.vercel.app` returns HTTP 401 / Vercel Authentication Required. Redeploy/replace with a public local-v2 preview, then rerun QA round 3 before packaging/delivery.

## Done Criteria

- Mission Control root task metadata.build_stage/currentStage matches this checklist currentStage.
- Mission Control root + child tasks mirror this checklist requirements, evidence_required, required_skills, and checklist paths.
- Every canonical workflow step has either passed evidence in MC or a fresh blocker recorded in MC.
- Three QA rounds are logged with desktop/mobile screenshot evidence and MC writeback.
- Preview URL, pitch doc, battle cards, screenshots, checklist paths, QA evidence, and requirement status are attached before delivery.


## Current Site Audit Evidence — 2026-05-06

- Audit: `restaurant-website-system/sites/the-graceful-ordinary/audit.md`
- Scrape/DOM: `restaurant-website-system/sites/the-graceful-ordinary/scrapes/current-site-dom-snapshot.txt`
- Desktop screenshot: `restaurant-website-system/sites/the-graceful-ordinary/screenshots/current-site-desktop-full.png`
- Mobile screenshot: `restaurant-website-system/sites/the-graceful-ordinary/screenshots/current-site-mobile-full.png`
- Mobile fold: `restaurant-website-system/sites/the-graceful-ordinary/screenshots/current-site-mobile-fold.png`

Structured metadata is mirrored in `checklist.json` under `leadMetadata`. Google Reviews Highest-filter packet is captured and summarized; next canonical gate is `routing`.

## Google Reviews Evidence — 2026-05-06

- Reviews packet: `restaurant-website-system/sites/the-graceful-ordinary/reviews/google-reviews-highest.md`
- Structured JSON: `restaurant-website-system/sites/the-graceful-ordinary/reviews/google-reviews-highest.json`
- Highest-filter screenshot: `restaurant-website-system/sites/the-graceful-ordinary/screenshots/google-reviews-highest-filter-visible.png`
- Scrolled reviews screenshot: `restaurant-website-system/sites/the-graceful-ordinary/screenshots/google-reviews-highest-filter-scrolled.png`
- Captured 35 written 5-star reviews; first 30 are listed in the packet.
- Review themes: special occasions, suburban Chicago-caliber dining, warm expert service, riverfront/cozy/elegant atmosphere, seasonal chef-driven dishes, cocktail credibility, and premium-but-worth-it positioning.

## Routing + Preview Improvement Evidence — 2026-05-06

- Selected template/archetype: `roma`
- Routing rationale: `restaurant-website-system/sites/the-graceful-ordinary/routing.md`
- Improvement pass notes: `restaurant-website-system/sites/the-graceful-ordinary/improvement-pass.md`
- Current preview desktop screenshot: `restaurant-website-system/sites/the-graceful-ordinary/screenshots/current-preview-desktop-full.png`
- Current preview mobile fold: `restaurant-website-system/sites/the-graceful-ordinary/screenshots/current-preview-mobile-fold.png`
- Current preview text scrape: `restaurant-website-system/sites/the-graceful-ordinary/scrapes/current-preview-dom-text.txt`

Improvement pass is started. Do not mark improvement requirements passed until preview/source changes are implemented and before/after evidence is captured.

## Local Improvement Implementation Evidence — 2026-05-06

Implemented a local Roma/1776-aligned v2 fork in this site workspace without overwriting audit/review evidence.

- Local template metadata: `restaurant-website-system/sites/the-graceful-ordinary/.agency-template.json`
- Personalized content source: `restaurant-website-system/sites/the-graceful-ordinary/content.example.ts`
- Anonymous Google review carousel source: `restaurant-website-system/sites/the-graceful-ordinary/components/TestimonialCardGrid.tsx`
- Header/hero responsive fixes: `components/FloatingHeaderPill.tsx`, `components/FullBleedHero.tsx`, `components/DisplayHeading.tsx`
- Next image config for official Webflow assets: `next.config.mjs`
- Desktop after screenshot: `restaurant-website-system/sites/the-graceful-ordinary/screenshots/improvement-pass/local-improved-home-desktop-v2.png`
- Mobile after screenshot: `restaurant-website-system/sites/the-graceful-ordinary/screenshots/improvement-pass/local-improved-home-mobile-fold-v2.png`
- Verification: `npm run typecheck` passed; `npm run build` passed; local routes `/`, `/menu`, `/about`, `/contact` returned HTTP 200 on `127.0.0.1:3025`.

Implemented improvement coverage:

1. Repaired truth/factual proof: local v2 uses Google rating `4.6 / 593`, exact captured Google review fragments without names, and official press proof instead of unsupported AAA/TripAdvisor/composite claims.
2. Repaired conversion paths: Resy CTA now uses `https://resy.com/cities/stc/the-graceful-ordinary`; phone links use `tel:+13312355803`; contact/menu/about routes render locally.
3. Strengthened Roma-specific identity: preserved the 1776 warm editorial structure but rewrote around refined rustic open-hearth cooking, Chris and Megan Curren, St. Charles, wine/cocktail program, and Fox River/special-occasion review themes.

Natural pause: improvement implementation has local build evidence. The public Vercel preview still needs to be updated before founder-facing delivery/QA claims can treat this as the live preview.

## Top 3 Improvements Evidence — 2026-05-06

- Ranked top-three artifact: `restaurant-website-system/sites/the-graceful-ordinary/top-3-improvements.md`
- Before/current preview desktop: `restaurant-website-system/sites/the-graceful-ordinary/screenshots/current-preview-desktop-full.png`
- Before/current preview mobile: `restaurant-website-system/sites/the-graceful-ordinary/screenshots/current-preview-mobile-fold.png`
- After/local v2 desktop: `restaurant-website-system/sites/the-graceful-ordinary/screenshots/improvement-pass/local-improved-home-desktop-v2.png`
- After/local v2 mobile: `restaurant-website-system/sites/the-graceful-ordinary/screenshots/improvement-pass/local-improved-home-mobile-fold-v2.png`

Status: top-three improvements are ranked and implemented in local source with before/after evidence. Founder-facing delivery still must not claim the public preview contains these changes until the public preview URL is updated/redeployed and evidenced.


## AI Concierge Evidence — 2026-05-06

Implemented the concierge gate in local source with a truth-safe Graceful Ordinary KB and verified UI evidence.

- Concierge evidence doc: `restaurant-website-system/sites/the-graceful-ordinary/concierge-test-transcript.md`
- KB/source: `restaurant-website-system/sites/the-graceful-ordinary/lib/concierge-kb.ts`
- UI/source: `restaurant-website-system/sites/the-graceful-ordinary/components/AskConcierge.tsx`
- API fallback/source: `restaurant-website-system/sites/the-graceful-ordinary/app/api/chat/route.ts`
- Capture script: `restaurant-website-system/sites/the-graceful-ordinary/scrapes/capture-concierge-cdp-2026-05-06.mjs`
- Entry screenshot: `restaurant-website-system/sites/the-graceful-ordinary/screenshots/concierge/concierge-entry-point-desktop.png`
- Transcript screenshot: `restaurant-website-system/sites/the-graceful-ordinary/screenshots/concierge/concierge-test-transcript-desktop.png`
- Test prompt: “My wife and I are coming Saturday for her birthday. Can you suggest something and help us reserve?”
- Verified behavior: renders Graceful Ordinary menu cards, captures `2 guests · Sat May 9 · birthday dinner`, and surfaces `Reserve on Resy` without claiming to book.
- Safety: allergy/dietary/unknown operational questions route to call; local API fallback avoids exposing missing Anthropic auth errors.
- Verification: `npm run typecheck` passed; `npm run build` passed; screenshot inspection found no visible `1776`, `OpenTable`, `Crystal Lake`, or `Jill Vedaa` content in the concierge panel.

Natural pause: concierge is locally implemented and evidenced. Public preview redeploy remains required before founder-facing delivery claims this gate is live on `https://graceful-ordinary-redesign.vercel.app`.


## Pitch + Battle Cards Evidence — 2026-05-06

Created owner-facing sales artifacts from the audit, Google review packet, top-three improvement notes, local v2 source, and concierge evidence.

- Pitch doc: `restaurant-website-system/sites/the-graceful-ordinary/pitch-doc.md`
- Battle cards: `restaurant-website-system/sites/the-graceful-ordinary/battle-cards.md`
- Before/current preview evidence: `screenshots/current-preview-desktop-full.png`, `screenshots/current-preview-mobile-fold.png`
- After/local v2 evidence: `screenshots/improvement-pass/local-improved-home-desktop-v2.png`, `screenshots/improvement-pass/local-improved-home-mobile-fold-v2.png`
- Concierge evidence: `concierge-test-transcript.md`, `screenshots/concierge/concierge-test-transcript-desktop.png`

Pitch posture: preserve-stack / soft-leak. The current official site is content-rich and premium; the local v2 pitch focuses on faster mobile conversion, exact Resy preservation, surfaced press/review proof, real menu specificity, and truthful caveats around public preview redeploy, Saturday hours, and MC city mismatch.


## QA Round 1 Evidence — 2026-05-06

- QA artifact: `restaurant-website-system/sites/the-graceful-ordinary/qa-round-1.md`
- Desktop screenshot: `restaurant-website-system/sites/the-graceful-ordinary/screenshots/qa-round-1/desktop-full.png`
- Mobile screenshot: `restaurant-website-system/sites/the-graceful-ordinary/screenshots/qa-round-1/mobile-full.png`
- Capture script: `restaurant-website-system/sites/the-graceful-ordinary/scrapes/capture-qa-round-1-cdp-2026-05-06.mjs`
- Verification: `npm run typecheck` passed; `npm run build` passed; `/`, `/menu`, `/about`, `/contact` returned HTTP 200; source-fidelity string scan passed; Resy path present; dietary chat prompt routed to call.
- Fixes applied: made ScrollReveal/nested motion content visible before scroll-triggered animation so QA screenshots and crawler/no-scroll contexts do not capture blank sections.
- Deferred to QA round 2: mobile spacing/cropping, review card clipping, marquee edge handling, small-text contrast.


## QA Round 2 Evidence — 2026-05-06

- QA artifact: `restaurant-website-system/sites/the-graceful-ordinary/qa-round-2.md`
- Desktop screenshot: `restaurant-website-system/sites/the-graceful-ordinary/screenshots/qa-round-2/desktop-full.png`
- Mobile screenshot: `restaurant-website-system/sites/the-graceful-ordinary/screenshots/qa-round-2/mobile-full.png`
- Capture script: `restaurant-website-system/sites/the-graceful-ordinary/scrapes/capture-qa-round-2-cdp-2026-05-06.mjs`
- Verification: `npm run typecheck` passed; `npm run build` passed; `/`, `/menu`, `/about`, `/contact` returned HTTP 200; concierge birthday prompt returned reserve marker and birthday intent.
- Fixes applied: sticky mobile Reserve/Menu/Call bar, mobile proof-card story section, static mobile proof badges, readable mobile review cards, tighter mobile spacing/contrast.
- Final screenshot inspection: no remaining mobile polish or conversion blockers.


## QA Round 3 Blocker — 2026-05-06

- Blocker artifact: `restaurant-website-system/sites/the-graceful-ordinary/qa-round-3-blocker.md`
- Public preview checked: `https://graceful-ordinary-redesign.vercel.app/` returned HTTP 200 but remains stale.
- Stale preview evidence: public page still contains unsupported `AAA Three-Diamond` content and does not contain local v2 indicators such as `Ask Graceful` or `Maytag Bleu Cheese`.
- Required unblock: redeploy or replace the public preview URL from local v2 source, then rerun QA round 3 and only then proceed to packaging/delivery.


## Public Preview Unblock Runbook — 2026-05-06

- Runbook artifact: `restaurant-website-system/sites/the-graceful-ordinary/public-preview-unblock-runbook.md`
- Additional deploy-path findings: no local Vercel CLI binary on PATH, no `.vercel/` project binding found, Graceful Ordinary site folder is untracked in `skills`, and the current repo branch is unrelated (`feat/la-hacienda-qa2`).
- Safe unblock: clean branch/PR preview or explicitly approved non-production Vercel preview deployment, then update MC preview URL if needed and rerun QA round 3.


## PR Preview Blocker — 2026-05-06

- PR: `https://github.com/spiral-app-labs/skills/pull/83`
- Vercel PR preview: `https://skills-git-feat-graceful-or-b80ef9-ethan-ethantalrejas-projects.vercel.app`
- Blocker artifact: `restaurant-website-system/sites/the-graceful-ordinary/pr-preview-blocker.md`
- Route checks for `/`, `/menu`, `/about`, and `/contact` returned HTTP 401 / Vercel authentication protection, so QA round 3 and founder-facing delivery remain blocked.
- Required unblock: make the PR preview public/shareable or configure an approved preview bypass, then rerun QA round 3.

## QA Round 3 Local Attempt — 2026-05-06

- QA artifact: `restaurant-website-system/sites/the-graceful-ordinary/qa-round-3.md`
- Blocker artifact: `restaurant-website-system/sites/the-graceful-ordinary/qa-round-3-blocker.md`
- Local desktop screenshot: `restaurant-website-system/sites/the-graceful-ordinary/screenshots/qa-round-3/local-desktop-full.png`
- Local mobile screenshot: `restaurant-website-system/sites/the-graceful-ordinary/screenshots/qa-round-3/local-mobile-full.png`
- Local DOM text: `restaurant-website-system/sites/the-graceful-ordinary/scrapes/qa-round-3-local-dom-text-2026-05-06.txt`
- Local links: `restaurant-website-system/sites/the-graceful-ordinary/scrapes/qa-round-3-local-links-2026-05-06.json`
- Capture script: `restaurant-website-system/sites/the-graceful-ordinary/scrapes/capture-qa-round-3-cdp-2026-05-06.mjs`
- Prepared MC writeback payload: `restaurant-website-system/sites/the-graceful-ordinary/mc-build-writeback-qa-round-3-blocked-2026-05-06.json`
- Verification: `npm run typecheck` passed; `npm run build` passed; local routes `/`, `/menu`, `/about`, `/contact` returned HTTP 200 on port `3037`; concierge birthday prompt returned reserve marker and safe reservation intent.
- Result: local v2 remains the redeploy candidate, but QA round 3 stays blocked until a public/shareable preview reflects local v2 and Mission Control writeback can be retried with valid API credentials.

## QA Round 3 Public Preview Recheck — 2026-05-06T14:39Z

- Recheck artifact: `restaurant-website-system/sites/the-graceful-ordinary/qa-round-3-public-preview-recheck-2026-05-06-1439Z.md`
- Prepared MC writeback payload: `restaurant-website-system/sites/the-graceful-ordinary/mc-build-writeback-qa-round-3-blocked-recheck-2026-05-06-1439Z.json`
- HTTP evidence dir: `restaurant-website-system/sites/the-graceful-ordinary/scrapes/public-preview-recheck-2026-05-06-1439Z/`
- Stable public preview route checks: `/`, `/menu`, `/about`, and `/contact` returned HTTP 200 but still serve stale content.
- Stable public preview stale markers still found: `AAA Three-Diamond`, `TripAdvisor Guest`, `200+ Reviews`, and `4.8`.
- Stable public preview local-v2 indicators missing from homepage HTML: `Chris and Megan Curren`, `Kane County Choice Awards`.
- PR preview route checks: `/` and `/menu` returned HTTP 401 / Vercel Authentication Required; browser snapshot showed `Log in to Vercel`.
- MC API credentials unavailable in runtime: `AGENCY_AUTONOMY_API_KEY` and `OPENCLAW_WEBHOOK_SECRET` unset.
- Result: QA round 3 remains blocked; do not advance to packaging/delivery until a public founder-shareable preview reflects local v2 and final public desktop/mobile QA evidence is captured.

## 2026-05-07T20:47Z QA Round 3 public recheck

Status: **blocked**. Live scrape of `https://graceful-ordinary-redesign.vercel.app/` still found stale unsafe proof strings (`AAA Three-Diamond`, `TripAdvisor`, `TripAdvisor Guest`, `200+ Reviews`, unsupported `4.8`). Core routes return HTTP 200, but the public preview is not truth-safe to pitch or deliver until the corrected source is redeployed/aliased and QA round 3 is rerun.

Fresh evidence:
- `restaurant-website-system/sites/the-graceful-ordinary/qa-round-3-public-stable-recheck-2026-05-07-2047Z.md`
- `restaurant-website-system/sites/the-graceful-ordinary/mc-build-writeback-qa-round-3-blocked-recheck-2026-05-07-2047Z.json`
- `restaurant-website-system/sites/the-graceful-ordinary/screenshots/qa-round-3/public-stable-preview-desktop-warm-qa3-2026-05-07-2047Z.png`
- `restaurant-website-system/sites/the-graceful-ordinary/screenshots/qa-round-3/public-stable-preview-mobile-warm-qa3-2026-05-07-2047Z.png`
- `restaurant-website-system/sites/the-graceful-ordinary/scrapes/qa-round-3-public-stable-preview-dom-text-warm-2026-05-07-2047Z.txt`

MC writeback blocker: protected agency API credentials are missing (`AGENCY_AUTONOMY_API_KEY` / `OPENCLAW_WEBHOOK_SECRET`), and planner returns 401; no raw Supabase mutation was performed.


## Preview auth approval request — 2026-05-08

- Preview auth approval request: `restaurant-website-system/sites/the-graceful-ordinary/preview-auth-approval-request-2026-05-08.md`
- Status: prepared locally; QA Round 3 remains blocked until the clean PR preview is public/shareable, bypass-approved, aliased, or replaced with another verified public URL.

## Agency active decision index — 2026-05-08

- Consolidated index: `restaurant-website-system/research/lead-qualification/agency-active-decision-index-2026-05-08.md`
- JSON index: `restaurant-website-system/research/lead-qualification/agency-active-decision-index-2026-05-08.json`
- Status: local cross-site decision/approval index prepared while MC planner/writeback is unreachable.

## 2026-05-10T12:44Z QA Round 3 public recheck

Status: **blocked**. The stable public preview at `https://graceful-ordinary-redesign.vercel.app/` is reachable and `/`, `/menu`, `/about`, and `/contact` return HTTP 200, but it still cannot pass QA Round 3. Fresh desktop/mobile evidence shows weak mobile navigation/conversion, low-contrast hero/logo treatment, clipped mobile menu announcement/tabs, and the prior stale unsupported proof framing remains unsafe for founder delivery. The PR preview still returns HTTP 401 / Vercel Authentication Required.

Fresh evidence:
- `restaurant-website-system/sites/the-graceful-ordinary/qa-round-3-public-recheck-2026-05-10.md`
- `restaurant-website-system/sites/the-graceful-ordinary/mc-build-writeback-qa-round-3-blocked-recheck-2026-05-10.json`
- `restaurant-website-system/sites/the-graceful-ordinary/screenshots/qa-round-3-public-recheck-2026-05-10/desktop-home.png`
- `restaurant-website-system/sites/the-graceful-ordinary/screenshots/qa-round-3-public-recheck-2026-05-10/mobile-home.png`
- `restaurant-website-system/sites/the-graceful-ordinary/screenshots/qa-round-3-public-recheck-2026-05-10/desktop-menu.png`
- `restaurant-website-system/sites/the-graceful-ordinary/screenshots/qa-round-3-public-recheck-2026-05-10/mobile-menu.png`
- `restaurant-website-system/sites/the-graceful-ordinary/scrapes/qa-round-3-public-recheck-2026-05-10/`
- `heartbeat-preview-url-checks-20260510-124152.jsonl`

Required unblock: redeploy/replace the public preview with the corrected local candidate, verify unsupported proof claims are removed or sourced, fix mobile first-view navigation/Reserve CTA and menu wrapping, then rerun QA Round 3 before packaging/delivery.

MC writeback blocker: protected agency API credentials are missing (`AGENCY_AUTONOMY_API_KEY` / `OPENCLAW_WEBHOOK_SECRET`), and planner returns 401; no raw Supabase mutation was performed.

## 2026-05-10T12:53Z QA Round 3 local mobile polish

Status: **local candidate improved; public QA3 still blocked**. I fixed the local redeploy candidate’s first-view/mobile blockers: the floating header now appears immediately, mobile brand/header sizing no longer clips awkwardly, the sticky bottom Reserve/Menu/Call bar fits cleanly in a mobile viewport, hero readability is stronger, and menu tabs use a deliberate horizontal-scroll pattern with bottom spacing above the sticky CTA.

Changed source:
- `restaurant-website-system/sites/the-graceful-ordinary/components/FloatingHeaderPill.tsx`
- `restaurant-website-system/sites/the-graceful-ordinary/components/FullBleedHero.tsx`
- `restaurant-website-system/sites/the-graceful-ordinary/components/MenuTabbedList.tsx`
- `restaurant-website-system/sites/the-graceful-ordinary/app/globals.css`

Verification:
- `restaurant-website-system/sites/the-graceful-ordinary/evidence/typecheck-mobile-polish-v3-2026-05-10.txt`
- `restaurant-website-system/sites/the-graceful-ordinary/evidence/build-mobile-polish-v3-2026-05-10.txt`
- `restaurant-website-system/sites/the-graceful-ordinary/screenshots/qa-round-3-local-mobile-polish-v3-2026-05-10/`
- `restaurant-website-system/sites/the-graceful-ordinary/qa-round-3-local-mobile-polish-2026-05-10.md`

Remaining blocker: QA3 cannot pass until this corrected local candidate is deployed/aliased to a public founder-shareable URL and public QA3 is rerun. The stable public preview remains stale and the PR preview is still Vercel-auth gated.
