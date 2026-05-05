# la-hacienda-mexican-restaurant Build Checklist

- Workflow version: 2026-05-05
- Source of truth: Mission Control tasks.metadata + this mirrored local checklist
- Lead ID: 7cba3fe2-8f65-4516-b46b-05c2c07ab235
- MC parent task ID: fd7f4976-daac-42aa-8c9a-1ddb09a9d12f
- Template slug: bamzi-01
- Current stage: delivery_package (local package assembled; public preview + Mission Control writeback pending)
- Deploy URL: TBD
- Ready to pitch: false
- Updated: 2026-05-05T19:46:05Z

## Mission Control Sync Contract

- MC root task metadata must mirror currentStage/build_stage, checklist paths, passed requirements, blockers, lead metadata, ready-to-pitch state, and preview URL state.
- Local artifacts are ahead of MC for this site; the prepared writeback payload and runbook are the truth bridge until agency API auth/base URL are available.

## Requirements

- [x] lead-fit-qualified: Lead passed the restaurant lead-fit qualification gate - Qualification list flags La Hacienda as a Canva-as-website lead; source audit verified Canva page has almost no crawlable restaurant content and directory pages carry the core facts.
- [x] current-site-audit: Current site audit captured desktop, mobile, menu, reviews, and asset evidence - Browser evidence captured on 2026-05-05: Canva current-site desktop/mobile screenshots and DOM/text, plus Google local proof, Restaurantji, and Roost screenshots/text. The previous No supported browser found blocker is cleared locally.
- [x] template-route-locked: Template route and modifiers are locked from the restaurant site router - Routed to bamzi-01 hue-swap per qualification, with Cuisine as the truthful warm-casual Mexican core archetype if photos reject Bamzi energy.
- [x] google-reviews-highest-30: 30 written Google reviews captured using the Highest sort/filter - Captured browser evidence from Google Search local reviews panel on 2026-05-05. Highest sort selected; 30 written reviews summarized into a build-safe evidence packet. Observed 4.3 rating from 530 Google reviews.
- [x] improvement-pass: Improvement pass completed after first fork - Rewrote hero for diners, tightened mobile/header containment, reduced mobile hero scale, captured before/after homepage screenshots, passed npm run build, and verified no 390px horizontal overflow offenders.
- [x] top-3-improvements: Top 3 improvements selected, implemented, and evidenced - Visitor-facing copy cleanup, mobile conversion cleanup, and mobile/asset reliability fixes implemented with before/after screenshots and 390px overflow evidence.
- [x] concierge: AI concierge added with truthful restaurant-specific KB and safe handoffs - Mounted globally, deterministic KB router added, allergy/price/time-sensitive handoffs route to phone, screenshots/API transcript captured.
- [x] pitch: Sellable pitch doc created or updated - Owner-facing pitch doc created with demo path, proof locker, caveats, and next-step battle-card recommendation.
- [x] battle-cards: Battle cards doc created or updated - Core sales frame, demo path, objections, proof locker, founder cautions, and close created.
- [x] qa_round_1: QA round 1 completed with findings and fixes logged - Fixed cropped/internal decorative cards, SVG parse issues, guest-facing copy labels, and concierge trigger prominence; build, DOM, and vision checks passed.
- [x] qa_round_2: QA round 2 completed with findings and fixes logged - Production-preview QA2 recapture passed build/typecheck, 0 overflow offenders, 0 visible broken images, and no rendered internal/template phrase leaks.
- [x] fork-built: Template fork is built with real content, preserved links, and no placeholder copy - Bamzi scaffold copied into the existing La Hacienda site folder, placeholder content replaced with audit/review/menu proof, and `npm run build` passed locally on 2026-05-05 after switching to offline-safe font stacks.
- [x] qa-round-1: QA round 1 completed with findings and fixes logged
- [x] qa-round-2: QA round 2 completed with findings and fixes logged
- [x] qa-round-3: QA round 3 completed with findings and fixes logged - Final sell-readiness QA passed after fixing the mobile quick-action bar to stay fixed, adding body bottom padding, rebuilding/typechecking, and recapturing DOM/mobile viewport evidence.
- [ ] delivery-package: Preview URL, pitch doc, outreach draft, screenshots, and MC evidence are attached - Local package, archive, manifest, owner confirmation packet, public preview runbook, and MC writeback payload are prepared. Still blocked on public owner-shareable preview URL and Mission Control agency API writeback.

## Evidence Paths

- restaurant-website-system/sites/la-hacienda-mexican-restaurant/checklist.md
- restaurant-website-system/sites/la-hacienda-mexican-restaurant/checklist.json
- restaurant-website-system/sites/la-hacienda-mexican-restaurant/audit.md
- restaurant-website-system/research/lead-qualification/next-15-bad-no-site-leads-2026-05-01.md
- restaurant-website-system/sites/la-hacienda-mexican-restaurant/scrapes/browser-audit-manifest-2026-05-05.json
- restaurant-website-system/sites/la-hacienda-mexican-restaurant/screenshots/canva-menu-desktop-2026-05-05.png
- restaurant-website-system/sites/la-hacienda-mexican-restaurant/screenshots/canva-menu-mobile-2026-05-05.png
- restaurant-website-system/sites/la-hacienda-mexican-restaurant/scrapes/canva-menu-desktop-2026-05-05.html
- restaurant-website-system/sites/la-hacienda-mexican-restaurant/scrapes/canva-menu-desktop-2026-05-05.txt
- restaurant-website-system/sites/la-hacienda-mexican-restaurant/scrapes/canva-menu-mobile-2026-05-05.html
- restaurant-website-system/sites/la-hacienda-mexican-restaurant/scrapes/canva-menu-mobile-2026-05-05.txt
- restaurant-website-system/sites/la-hacienda-mexican-restaurant/screenshots/restaurantji-desktop-2026-05-05.png
- restaurant-website-system/sites/la-hacienda-mexican-restaurant/scrapes/restaurantji-desktop-2026-05-05.txt
- restaurant-website-system/sites/la-hacienda-mexican-restaurant/screenshots/roost-proof-desktop-2026-05-05.png
- restaurant-website-system/sites/la-hacienda-mexican-restaurant/scrapes/roost-proof-desktop-2026-05-05.txt
- restaurant-website-system/sites/la-hacienda-mexican-restaurant/screenshots/google-search-desktop-2026-05-05.png
- restaurant-website-system/sites/la-hacienda-mexican-restaurant/scrapes/google-search-desktop-2026-05-05.txt
- restaurant-website-system/sites/la-hacienda-mexican-restaurant/browser-evidence-audit-2026-05-05.md
- restaurant-website-system/sites/la-hacienda-mexican-restaurant/google-reviews-highest-30-written-2026-05-05.md
- restaurant-website-system/sites/la-hacienda-mexican-restaurant/scrapes/google-reviews-highest-30-written-2026-05-05.json
- restaurant-website-system/sites/la-hacienda-mexican-restaurant/screenshots/google-reviews-highest-2026-05-05.png
- restaurant-website-system/sites/la-hacienda-mexican-restaurant/build-notes-2026-05-05.md
- restaurant-website-system/sites/la-hacienda-mexican-restaurant/mc-build-writeback-fork-built-2026-05-05.json

## QA Rounds

- Round 1: passed — see `qa-round-1-2026-05-05.md`
- Round 2: passed — see `qa-round-2-2026-05-05.md`
- Round 3: passed — see `qa-round-3-2026-05-05.md`

## Pitch Artifacts

- Pitch doc: `restaurant-website-system/sites/la-hacienda-mexican-restaurant/pitch-doc.md`
- Battle cards: `restaurant-website-system/sites/la-hacienda-mexican-restaurant/battle-cards.md`
- Outreach draft: not created (`null`)

## Structured Lead Metadata

- Owner name: `null`
- Owner email: `null`
- Contact email: `null`
- Phone: `(847) 426-0506`
- Hours:
  - Sunday: 10:00 am - 9:00 pm
  - Monday-Thursday: 10:00 am - 9:00 pm
  - Friday-Saturday: 10:00 am - 10:00 pm
- Address/location: `411 E Main St, East Dundee, IL 60118`
- Website URL: `https://www.canva.com/design/DAFiva54Na0/0FUdTRi1uYaiwKx25OqRew/view`
- Order URL: `https://www.restaurantji.com/order.php?id=3429883`
- Reservation URL: `null`
- Catering/events URL: `null`
- Google rating/review count: `4.3` from `530` Google reviews
- Metadata source notes:
  - Checked Canva current-site capture, Restaurantji, Google local pack evidence, Roost directory capture, and the Google Highest review packet.
  - No publicly verified owner name, owner email, contact email, reservation URL, or catering/events URL was captured, so those remain `null`.
  - Hours, order-path preference, and review-count language still require owner/founder confirmation before final handoff.

## Blockers

- public_preview_url: Public owner-shareable preview URL is missing; final delivery cannot pass without it. Next unblock action: deploy a preview/staging build using `public-preview-runbook-2026-05-05.md`, attach URL to delivery package/checklist, and rerun remote smoke checks.
- stage_writeback: Local packaging artifacts are assembled, but Mission Control writeback still cannot be submitted because agency API auth/base URL are unavailable in this runtime. Next unblock action: configure Mission Control agency API auth/base URL for OpenClaw, then submit `mission-control-writeback-payload-2026-05-05.json`.
- owner_confirmation: Owner-sensitive facts still need confirmation before final handoff: hours, ordering/provider flow, current menu/prices, review-count language, and public claims. Next unblock action: use `owner-confirmation-questions-2026-05-05.md` or get Ethan approval for conservative wording before production/final delivery.
- founder_review: Founder human review has not been recorded, so `ready_to_pitch` remains false. Next unblock action: have Ethan/Evan review the package and explicitly clear or override the remaining owner-sensitive claims before any pitch or delivery status change.

## Done Criteria

- Mission Control lead has a simple sales status and current metadata.build_stage.
- Mission Control parent task metadata.requirements mirrors this checklist.
- All required checklist rows are passed.
- Three QA rounds are logged with screenshot evidence.
- Preview URL, pitch doc, outreach draft status, and delivery evidence are attached.


## Improving evidence

- restaurant-website-system/sites/la-hacienda-mexican-restaurant/improvement-pass-2026-05-05.md
- restaurant-website-system/sites/la-hacienda-mexican-restaurant/screenshots/preview-home-desktop-improving-2026-05-05.png
- restaurant-website-system/sites/la-hacienda-mexican-restaurant/screenshots/preview-home-mobile-improving-2026-05-05.png
- restaurant-website-system/sites/la-hacienda-mexican-restaurant/screenshots/preview-home-desktop-improved-2026-05-05.png
- restaurant-website-system/sites/la-hacienda-mexican-restaurant/screenshots/preview-home-mobile-improved-2026-05-05.png


## Top 3 improvements evidence

- restaurant-website-system/sites/la-hacienda-mexican-restaurant/top-3-improvements-2026-05-05.md
- restaurant-website-system/sites/la-hacienda-mexican-restaurant/responsive-overflow-check-top3-2026-05-05.json
- restaurant-website-system/sites/la-hacienda-mexican-restaurant/mc-build-writeback-top-3-improvements-complete-2026-05-05.json


## Concierge evidence

- restaurant-website-system/sites/la-hacienda-mexican-restaurant/concierge-2026-05-05.md
- restaurant-website-system/sites/la-hacienda-mexican-restaurant/scrapes/concierge-api-transcript-2026-05-05.json
- restaurant-website-system/sites/la-hacienda-mexican-restaurant/screenshots/concierge-open-mobile-2026-05-05.png
- restaurant-website-system/sites/la-hacienda-mexican-restaurant/screenshots/concierge-open-desktop-2026-05-05.png
- restaurant-website-system/sites/la-hacienda-mexican-restaurant/mc-build-writeback-concierge-complete-2026-05-05.json


## Pitch evidence

- restaurant-website-system/sites/la-hacienda-mexican-restaurant/pitch-doc.md
- restaurant-website-system/sites/la-hacienda-mexican-restaurant/mc-build-writeback-pitch-complete-2026-05-05.json


## Pitch and battle-card evidence

- restaurant-website-system/sites/la-hacienda-mexican-restaurant/pitch-doc.md
- restaurant-website-system/sites/la-hacienda-mexican-restaurant/battle-cards.md
- restaurant-website-system/sites/la-hacienda-mexican-restaurant/mc-build-writeback-pitch-complete-2026-05-05.json
- restaurant-website-system/sites/la-hacienda-mexican-restaurant/mc-build-writeback-battle-cards-complete-2026-05-05.json


## QA Round 1 evidence

- restaurant-website-system/sites/la-hacienda-mexican-restaurant/qa-round-1-2026-05-05.md
- restaurant-website-system/sites/la-hacienda-mexican-restaurant/scrapes/qa-round-1-dom-check-2026-05-05.json
- restaurant-website-system/sites/la-hacienda-mexican-restaurant/screenshots/qa1-home-mobile-2026-05-05.png
- restaurant-website-system/sites/la-hacienda-mexican-restaurant/screenshots/qa1-menu-mobile-2026-05-05.png
- restaurant-website-system/sites/la-hacienda-mexican-restaurant/screenshots/qa1-contact-mobile-2026-05-05.png
- restaurant-website-system/sites/la-hacienda-mexican-restaurant/screenshots/qa1-concierge-open-mobile-2026-05-05.png
- restaurant-website-system/sites/la-hacienda-mexican-restaurant/mc-build-writeback-qa-round-1-complete-2026-05-05.json


## QA Round 2 evidence

- restaurant-website-system/sites/la-hacienda-mexican-restaurant/qa-round-2-2026-05-05.md
- restaurant-website-system/sites/la-hacienda-mexican-restaurant/scrapes/qa-round-2-dom-check-2026-05-05.json
- restaurant-website-system/sites/la-hacienda-mexican-restaurant/screenshots/qa2-home-desktop-2026-05-05.png
- restaurant-website-system/sites/la-hacienda-mexican-restaurant/screenshots/qa2-about-desktop-2026-05-05.png
- restaurant-website-system/sites/la-hacienda-mexican-restaurant/screenshots/qa2-menu-desktop-2026-05-05.png
- restaurant-website-system/sites/la-hacienda-mexican-restaurant/screenshots/qa2-contact-desktop-2026-05-05.png
- restaurant-website-system/sites/la-hacienda-mexican-restaurant/screenshots/qa2-news-desktop-2026-05-05.png
- restaurant-website-system/sites/la-hacienda-mexican-restaurant/screenshots/qa2-home-mobile-2026-05-05.png
- restaurant-website-system/sites/la-hacienda-mexican-restaurant/screenshots/qa2-about-mobile-2026-05-05.png
- restaurant-website-system/sites/la-hacienda-mexican-restaurant/screenshots/qa2-menu-mobile-2026-05-05.png
- restaurant-website-system/sites/la-hacienda-mexican-restaurant/screenshots/qa2-contact-mobile-2026-05-05.png
- restaurant-website-system/sites/la-hacienda-mexican-restaurant/screenshots/qa2-news-mobile-2026-05-05.png
- restaurant-website-system/sites/la-hacienda-mexican-restaurant/screenshots/qa2-concierge-open-mobile-2026-05-05.png
- restaurant-website-system/sites/la-hacienda-mexican-restaurant/screenshots/qa2-concierge-open-desktop-2026-05-05.png
- restaurant-website-system/sites/la-hacienda-mexican-restaurant/mc-build-writeback-qa-round-2-complete-2026-05-05.json


## QA Round 3 evidence

- restaurant-website-system/sites/la-hacienda-mexican-restaurant/qa-round-3-2026-05-05.md
- restaurant-website-system/sites/la-hacienda-mexican-restaurant/scrapes/qa-round-3-final-audit-2026-05-05.json
- restaurant-website-system/sites/la-hacienda-mexican-restaurant/screenshots/qa3-viewport-home-top-mobile-2026-05-05.png
- restaurant-website-system/sites/la-hacienda-mexican-restaurant/screenshots/qa3-viewport-menu-top-mobile-2026-05-05.png
- restaurant-website-system/sites/la-hacienda-mexican-restaurant/screenshots/qa3-viewport-contact-top-mobile-2026-05-05.png
- restaurant-website-system/sites/la-hacienda-mexican-restaurant/screenshots/qa3-home-desktop-2026-05-05.png
- restaurant-website-system/sites/la-hacienda-mexican-restaurant/screenshots/qa3-home-mobile-2026-05-05.png
- restaurant-website-system/sites/la-hacienda-mexican-restaurant/screenshots/qa3-menu-desktop-2026-05-05.png
- restaurant-website-system/sites/la-hacienda-mexican-restaurant/screenshots/qa3-menu-mobile-2026-05-05.png
- restaurant-website-system/sites/la-hacienda-mexican-restaurant/screenshots/qa3-contact-desktop-2026-05-05.png
- restaurant-website-system/sites/la-hacienda-mexican-restaurant/screenshots/qa3-contact-mobile-2026-05-05.png
- restaurant-website-system/sites/la-hacienda-mexican-restaurant/mc-build-writeback-qa-round-3-complete-2026-05-05.json


## Delivery package evidence

- restaurant-website-system/sites/la-hacienda-mexican-restaurant/delivery-package-2026-05-05.md
- restaurant-website-system/sites/la-hacienda-mexican-restaurant/delivery-artifacts/la-hacienda-mexican-restaurant-local-package-2026-05-05.tar.gz
- restaurant-website-system/sites/la-hacienda-mexican-restaurant/delivery-artifacts/package-manifest-2026-05-05.md
- restaurant-website-system/sites/la-hacienda-mexican-restaurant/owner-confirmation-questions-2026-05-05.md
- restaurant-website-system/sites/la-hacienda-mexican-restaurant/public-preview-runbook-2026-05-05.md
- restaurant-website-system/sites/la-hacienda-mexican-restaurant/mission-control-writeback-payload-2026-05-05.json
- restaurant-website-system/sites/la-hacienda-mexican-restaurant/mission-control-writeback-runbook-2026-05-05.md
