# Winestock Build Checklist

- Workflow version: legacy-v1-mc-mirror
- Source of truth: Mission Control tasks.metadata + this mirrored local checklist
- Lead ID: 7f1432ae-2553-442c-80ff-df58acb162ef
- MC parent task ID: 35f58383-0074-4a64-85cc-46ea2cfcd6bb
- Template slug: bramble-01
- Current stage: packaging
- Checklist MD: restaurant-website-system/sites/winestock/checklist.md
- Checklist JSON: restaurant-website-system/sites/winestock/checklist.json
- Deploy URL: TBD
- Updated: 2026-05-05T04:51:00Z

## Mission Control Sync Contract

- Mission Control is authoritative for build stage, blockers, evidence, and task/requirement status.
- Local checklist mirrors MC state and evidence paths; it does not by itself mark delivery complete.
- Delivery remains blocked until three QA rounds, preview URL, founder review, Anthropic key, and MC evidence are complete.

## Requirement Status

- [x] lead-fit-qualified: Lead passed the restaurant lead-fit qualification gate - Mission Control inventory marks Winestock Market & Lounge as an in-progress agency website lead; official site confirms live business at 136 Cass St, Woodstock, IL.
- [x] current-site-audit: Current site audit captured desktop, mobile, menu, reviews, and asset evidence - Current-site and Google Reviews evidence are captured, including Highest-sort 30 written Google reviews.
- [x] template-route-locked: Template route and modifiers are locked from the restaurant site router - Routed to bramble-01 / Bramble because Winestock is a wine bar/market/lounge with live music, bottle/gift selection, charcuterie, and neighborhood regular energy.
- [x] fork-built: Template fork is built with real content, preserved links, and no placeholder copy - First Bramble fork is built with Winestock-specific content, safe contact CTAs, review proof, and browser evidence; typecheck/build passed.
- [x] improvement-pass: Website improvement pass completed after first fork - Improvement pass made the Winestock story more specific, surfaced Google-review proof, replaced fake forms with real handoffs, added menu clarity, fixed reveal wrappers for full-page screenshots, and passed typecheck/build/browser QA.
- [x] top-3-improvements: Top 3 concrete improvements identified, implemented, and evidenced - Implemented hero conversion clarity, practical visit handoffs, and mobile readability/CTA polish with before-after evidence, link check, typecheck/build, and browser screenshots.
- [x] concierge-added: Truthful AI concierge added with restaurant-specific KB and safe handoffs - Deterministic Winestock concierge uses only verified current-site/review/build facts, refuses unsafe unsupported requests, routes to email/phone/Facebook/directions, and passed API smoke/typecheck/build/browser QA.
- [x] pitch-doc: Sellable owner-facing pitch doc created - Pitch doc frames the current under-construction site gap, Bramble routing, Google review proof, visit handoffs, truthful concierge, preserve-stack promise, and owner asks without inventing providers or claims.
- [x] battle-cards: Sales battle cards created for owner objections and demo path - Battle cards package the one-sentence close, owner talking points, likely objections, proof references, demo path, risks, and what-not-to-claim guardrails for Winestock without inventing provider, pricing, ordering, reservation, or private-event claims.
- [x] qa-round-1: QA round 1 completed with findings and fixes logged - QA round 1 passed after findings/fixes, desktop/mobile screenshots, typecheck/build, screenshot QA review, Mission Control QA writeback, and stale blocker cleanup.
- [x] qa-round-2: QA round 2 completed with findings and fixes logged - QA round 2 passed after mobile readability/spacing fixes, 1440px/390px/320px screenshot evidence, typecheck/build, screenshot QA review, and MC writeback.
- [x] qa-round-3: QA round 3 completed with findings and fixes logged - QA round 3 final sell-readiness passed after mobile/conversion polish, fresh desktop/mobile/320px evidence, no console/HTTP errors, and MC writeback.
- [ ] delivery-package: Preview URL, pitch doc, outreach draft, screenshots, and MC evidence are attached
- [ ] packaging: Packaging packet and preview URL - Local packaging packet assembled; delivery remains blocked until a real public preview URL plus founder/operator gates are attached.

## QA Rounds

- Round 1: passed — QA1 passed after fixes to opening strip, hero contrast, scrapbook card treatment, and guest-facing concierge/contact language.
  - restaurant-website-system/sites/winestock/qa-round-1.md
  - restaurant-website-system/sites/winestock/evidence/qa-round-1-browser-2026-05-05/capture-manifest.json
  - restaurant-website-system/sites/winestock/evidence/qa-round-1-browser-2026-05-05/home-desktop-full.png
  - restaurant-website-system/sites/winestock/evidence/qa-round-1-browser-2026-05-05/home-mobile-full.png
  - restaurant-website-system/sites/winestock/evidence/qa-round-1-browser-2026-05-05/reserve-desktop-full.png
  - restaurant-website-system/sites/winestock/evidence/qa-round-1-browser-2026-05-05/reserve-mobile-full.png
  - restaurant-website-system/sites/winestock/mc-qa-round-1-writeback-2026-05-05.json
  - restaurant-website-system/sites/winestock/mc-build-writeback-qa-round-1-2026-05-05.json
  - restaurant-website-system/sites/winestock/mc-build-writeback-qa-round-1-clear-blocker-2026-05-05.json
- Round 2: passed — QA2 passed after mobile readability and spacing fixes; MC advanced to qa_round_3.
  - restaurant-website-system/sites/winestock/qa-round-2.md
  - restaurant-website-system/sites/winestock/evidence/qa-round-2-browser-2026-05-05/capture-manifest.json
  - restaurant-website-system/sites/winestock/evidence/qa-round-2-browser-2026-05-05/home-desktop-full.png
  - restaurant-website-system/sites/winestock/evidence/qa-round-2-browser-2026-05-05/home-mobile-full.png
  - restaurant-website-system/sites/winestock/evidence/qa-round-2-browser-2026-05-05/home-mobile-320-full.png
  - restaurant-website-system/sites/winestock/evidence/qa-round-2-browser-2026-05-05/reserve-desktop-full.png
  - restaurant-website-system/sites/winestock/evidence/qa-round-2-browser-2026-05-05/reserve-mobile-full.png
  - restaurant-website-system/sites/winestock/evidence/qa-round-2-browser-2026-05-05/reserve-mobile-320-full.png
  - restaurant-website-system/sites/winestock/mc-qa-round-2-writeback-2026-05-05.json
  - restaurant-website-system/sites/winestock/mc-build-writeback-qa-round-2-2026-05-05.json
- Round 3: passed — QA3 final sell-readiness passed after mobile/conversion polish; no severe blockers remain in screenshot review.
  - restaurant-website-system/sites/winestock/qa-round-3.md
  - restaurant-website-system/sites/winestock/evidence/qa-round-3-browser-2026-05-05/capture-manifest.json
  - restaurant-website-system/sites/winestock/evidence/qa-round-3-browser-2026-05-05/home-desktop-full.png
  - restaurant-website-system/sites/winestock/evidence/qa-round-3-browser-2026-05-05/home-mobile-full.png
  - restaurant-website-system/sites/winestock/evidence/qa-round-3-browser-2026-05-05/home-mobile-320-full.png
  - restaurant-website-system/sites/winestock/evidence/qa-round-3-browser-2026-05-05/reserve-desktop-full.png
  - restaurant-website-system/sites/winestock/evidence/qa-round-3-browser-2026-05-05/reserve-mobile-full.png
  - restaurant-website-system/sites/winestock/evidence/qa-round-3-browser-2026-05-05/reserve-mobile-320-full.png
  - restaurant-website-system/sites/winestock/mc-qa-round-3-writeback-2026-05-05.json
  - restaurant-website-system/sites/winestock/mc-build-writeback-qa-round-3-packaging-blocker-2026-05-05.json

## Packaging

- Packet: restaurant-website-system/sites/winestock/packaging.md
- MC packaging writeback: restaurant-website-system/sites/winestock/mc-build-writeback-packaging-packet-2026-05-05.json
- Status: blocked_preview_url_founder_gates

## Evidence Paths

- restaurant-website-system/sites/winestock/checklist.md
- restaurant-website-system/sites/winestock/checklist.json
- restaurant-website-system/sites/winestock/scrapes/current-site-text.txt
- restaurant-website-system/sites/winestock/scrapes/current-site-links.json
- restaurant-website-system/sites/winestock/scrapes/google-highest-30-2026-05-04.json
- restaurant-website-system/sites/winestock/scrapes/google-highest-30-2026-05-04.md
- restaurant-website-system/sites/winestock/scrapes/google-highest-sort-visible-2026-05-04.png
- restaurant-website-system/sites/winestock/routing.md
- restaurant-website-system/sites/winestock/evidence/first-fork-browser-2026-05-04/capture-manifest.json
- restaurant-website-system/sites/winestock/evidence/first-fork-browser-2026-05-04/home-desktop-full.png
- restaurant-website-system/sites/winestock/evidence/first-fork-browser-2026-05-04/home-mobile-full.png
- restaurant-website-system/sites/winestock/evidence/first-fork-browser-2026-05-04/contact-desktop-full.png
- restaurant-website-system/sites/winestock/evidence/first-fork-browser-2026-05-04/contact-mobile-full.png
- restaurant-website-system/sites/winestock/content.ts
- restaurant-website-system/sites/winestock/app/page.tsx
- restaurant-website-system/sites/winestock/components/DualServiceMenusSplit.tsx
- restaurant-website-system/sites/winestock/components/HorizontalMarquee.tsx
- restaurant-website-system/sites/winestock/components/BrambleWordmarkFooter.tsx
- restaurant-website-system/sites/winestock/app/globals.css
- restaurant-website-system/sites/winestock/build-evidence-2026-05-04.md
- restaurant-website-system/sites/winestock/improvement-pass-2026-05-04.md
- restaurant-website-system/sites/winestock/evidence/improvement-pass-browser-2026-05-04/capture-manifest.json
- restaurant-website-system/sites/winestock/evidence/improvement-pass-browser-2026-05-04/home-desktop-full.png
- restaurant-website-system/sites/winestock/evidence/improvement-pass-browser-2026-05-04/home-mobile-full.png
- restaurant-website-system/sites/winestock/evidence/improvement-pass-browser-2026-05-04/contact-desktop-full.png
- restaurant-website-system/sites/winestock/evidence/improvement-pass-browser-2026-05-04/contact-mobile-full.png
- restaurant-website-system/sites/winestock/evidence/improvement-pass-browser-2026-05-04/home-desktop-text.txt
- restaurant-website-system/sites/winestock/evidence/improvement-pass-browser-2026-05-04/home-mobile-text.txt
- restaurant-website-system/sites/winestock/evidence/improvement-pass-browser-2026-05-04/contact-desktop-text.txt
- restaurant-website-system/sites/winestock/evidence/improvement-pass-browser-2026-05-04/contact-mobile-text.txt
- restaurant-website-system/sites/winestock/evidence/improvement-pass-browser-2026-05-04/link-check.txt
- restaurant-website-system/sites/winestock/app/reserve/page.tsx
- restaurant-website-system/sites/winestock/components/MailingListBlock.tsx
- restaurant-website-system/sites/winestock/components/InlineInfoSplit.tsx
- restaurant-website-system/sites/winestock/components/TopTriptychHeader.tsx
- restaurant-website-system/sites/winestock/components/ScrollReveal.tsx
- restaurant-website-system/sites/winestock/components/OpeningTimesBlock.tsx
- restaurant-website-system/sites/winestock/components/PolaroidStrip.tsx
- restaurant-website-system/sites/winestock/top-3-improvements-2026-05-04.md
- restaurant-website-system/sites/winestock/evidence/top-3-improvements-browser-2026-05-04/capture-manifest.json
- restaurant-website-system/sites/winestock/evidence/top-3-improvements-browser-2026-05-04/home-desktop-full.png
- restaurant-website-system/sites/winestock/evidence/top-3-improvements-browser-2026-05-04/home-mobile-full.png
- restaurant-website-system/sites/winestock/evidence/top-3-improvements-browser-2026-05-04/home-mobile-320-full.png
- restaurant-website-system/sites/winestock/evidence/top-3-improvements-browser-2026-05-04/contact-desktop-full.png
- restaurant-website-system/sites/winestock/evidence/top-3-improvements-browser-2026-05-04/contact-mobile-full.png
- restaurant-website-system/sites/winestock/evidence/top-3-improvements-browser-2026-05-04/home-desktop-text.txt
- restaurant-website-system/sites/winestock/evidence/top-3-improvements-browser-2026-05-04/home-mobile-text.txt
- restaurant-website-system/sites/winestock/evidence/top-3-improvements-browser-2026-05-04/contact-desktop-text.txt
- restaurant-website-system/sites/winestock/evidence/top-3-improvements-browser-2026-05-04/contact-mobile-text.txt
- restaurant-website-system/sites/winestock/evidence/top-3-improvements-browser-2026-05-04/link-check.txt
- restaurant-website-system/sites/winestock/components/HeroSlideshow.tsx
- restaurant-website-system/sites/winestock/components/VisitPlanner.tsx
- restaurant-website-system/sites/winestock/concierge-evidence-2026-05-04.md
- restaurant-website-system/sites/winestock/evidence/concierge-browser-2026-05-04/capture-manifest.json
- restaurant-website-system/sites/winestock/evidence/concierge-browser-2026-05-04/home-desktop-full.png
- restaurant-website-system/sites/winestock/evidence/concierge-browser-2026-05-04/home-mobile-full.png
- restaurant-website-system/sites/winestock/evidence/concierge-browser-2026-05-04/home-mobile-320-full.png
- restaurant-website-system/sites/winestock/evidence/concierge-browser-2026-05-04/contact-mobile-full.png
- restaurant-website-system/sites/winestock/evidence/concierge-browser-2026-05-04/home-desktop-text.txt
- restaurant-website-system/sites/winestock/evidence/concierge-browser-2026-05-04/home-mobile-text.txt
- restaurant-website-system/sites/winestock/evidence/concierge-browser-2026-05-04/home-mobile-320-text.txt
- restaurant-website-system/sites/winestock/evidence/concierge-browser-2026-05-04/contact-mobile-text.txt
- restaurant-website-system/sites/winestock/evidence/concierge-browser-2026-05-04/link-check.txt
- restaurant-website-system/sites/winestock/evidence-concierge-api-smoke-2026-05-04.jsonl
- restaurant-website-system/sites/winestock/lib/concierge-kb.ts
- restaurant-website-system/sites/winestock/app/api/concierge/route.ts
- restaurant-website-system/sites/winestock/components/TruthfulConcierge.tsx
- restaurant-website-system/sites/winestock/ai-concierge.md
- restaurant-website-system/sites/winestock/ai-concierge-transcript.md
- restaurant-website-system/sites/winestock/pitch-doc.md
- restaurant-website-system/sites/winestock/battle-cards.md
- restaurant-website-system/sites/winestock/qa-round-1.md
- restaurant-website-system/sites/winestock/evidence/qa-round-1-browser-2026-05-05/capture-manifest.json
- restaurant-website-system/sites/winestock/evidence/qa-round-1-browser-2026-05-05/home-desktop-full.png
- restaurant-website-system/sites/winestock/evidence/qa-round-1-browser-2026-05-05/home-mobile-full.png
- restaurant-website-system/sites/winestock/evidence/qa-round-1-browser-2026-05-05/reserve-desktop-full.png
- restaurant-website-system/sites/winestock/evidence/qa-round-1-browser-2026-05-05/reserve-mobile-full.png
- restaurant-website-system/sites/winestock/mc-qa-round-1-writeback-2026-05-05.json
- restaurant-website-system/sites/winestock/mc-build-writeback-qa-round-1-2026-05-05.json
- restaurant-website-system/sites/winestock/mc-build-writeback-qa-round-1-clear-blocker-2026-05-05.json
- restaurant-website-system/sites/winestock/qa-round-2.md
- restaurant-website-system/sites/winestock/evidence/qa-round-2-browser-2026-05-05/capture-manifest.json
- restaurant-website-system/sites/winestock/evidence/qa-round-2-browser-2026-05-05/home-desktop-full.png
- restaurant-website-system/sites/winestock/evidence/qa-round-2-browser-2026-05-05/home-mobile-full.png
- restaurant-website-system/sites/winestock/evidence/qa-round-2-browser-2026-05-05/home-mobile-320-full.png
- restaurant-website-system/sites/winestock/evidence/qa-round-2-browser-2026-05-05/reserve-desktop-full.png
- restaurant-website-system/sites/winestock/evidence/qa-round-2-browser-2026-05-05/reserve-mobile-full.png
- restaurant-website-system/sites/winestock/evidence/qa-round-2-browser-2026-05-05/reserve-mobile-320-full.png
- restaurant-website-system/sites/winestock/mc-qa-round-2-writeback-2026-05-05.json
- restaurant-website-system/sites/winestock/mc-build-writeback-qa-round-2-2026-05-05.json
- restaurant-website-system/sites/winestock/qa-round-3.md
- restaurant-website-system/sites/winestock/evidence/qa-round-3-browser-2026-05-05/capture-manifest.json
- restaurant-website-system/sites/winestock/evidence/qa-round-3-browser-2026-05-05/home-desktop-full.png
- restaurant-website-system/sites/winestock/evidence/qa-round-3-browser-2026-05-05/home-mobile-full.png
- restaurant-website-system/sites/winestock/evidence/qa-round-3-browser-2026-05-05/home-mobile-320-full.png
- restaurant-website-system/sites/winestock/evidence/qa-round-3-browser-2026-05-05/reserve-desktop-full.png
- restaurant-website-system/sites/winestock/evidence/qa-round-3-browser-2026-05-05/reserve-mobile-full.png
- restaurant-website-system/sites/winestock/evidence/qa-round-3-browser-2026-05-05/reserve-mobile-320-full.png
- restaurant-website-system/sites/winestock/mc-qa-round-3-writeback-2026-05-05.json
- restaurant-website-system/sites/winestock/mc-build-writeback-qa-round-3-packaging-blocker-2026-05-05.json
- restaurant-website-system/sites/winestock/packaging.md
- restaurant-website-system/sites/winestock/app/layout.tsx
- restaurant-website-system/sites/winestock/components/FloralBreak.tsx
- restaurant-website-system/sites/winestock/components/SocialStripInline.tsx
- restaurant-website-system/sites/winestock/public/favicon.svg

- restaurant-website-system/sites/winestock/mc-build-writeback-packaging-packet-2026-05-05.json

## Pitch Artifacts

- Pitch doc: restaurant-website-system/sites/winestock/pitch-doc.md
- Battle cards: restaurant-website-system/sites/winestock/battle-cards.md
- Outreach draft: TBD

## Blockers

- packaging_preview_url: Packaging packet is assembled and QA1/QA2/QA3 passed, but final packaging/delivery cannot pass until a real public preview/deploy URL is attached plus site-specific Anthropic key and Ethan human review are complete. Next: Attach the real Vercel/public preview URL in Mission Control, complete site-specific Anthropic key setup, and record Ethan human review before delivery.

## Done Criteria

- Mission Control lead has a simple sales status and current metadata.build_stage.
- Mission Control parent task metadata.requirements mirrors this checklist.
- All required checklist rows are passed.
- Three QA rounds are logged with screenshot evidence.
- Preview URL, pitch doc, outreach draft, and delivery evidence are attached.
