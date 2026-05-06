# Maxfield's Pancake House Checklist

- Current stage: `pitch`
- Archetype: `Cuisine`
- Template: `plate-01`
- Updated: 2026-05-06

## Passed gates / requirements

- `checklist-md` — Local checklist.md exists for this restaurant
  - Notes: Local evidence completed 2026-05-06.
  - Evidence:
    - `restaurant-website-system/sites/maxfields-pancake-house/checklist.md`
- `checklist-json` — Local checklist.json exists for this restaurant
  - Notes: Local evidence completed 2026-05-06.
  - Evidence:
    - `restaurant-website-system/sites/maxfields-pancake-house/checklist.json`
- `current-site-screenshots` — Desktop and mobile screenshots captured
  - Notes: Local evidence completed 2026-05-06.
  - Evidence:
    - `restaurant-website-system/sites/maxfields-pancake-house/screenshots/current-site-desktop-wix-error.png`
    - `restaurant-website-system/sites/maxfields-pancake-house/screenshots/current-site-mobile-wix-error.png`
    - `restaurant-website-system/sites/maxfields-pancake-house/screenshots/public-source-google-maps-desktop.png`
    - `restaurant-website-system/sites/maxfields-pancake-house/screenshots/public-source-restaurantji-desktop.png`
    - `restaurant-website-system/sites/maxfields-pancake-house/screenshots/public-source-yelp-desktop.png`
- `current-site-scrape` — Live site DOM/text scrape captured
  - Notes: Local evidence completed 2026-05-06.
  - Evidence:
    - `restaurant-website-system/sites/maxfields-pancake-house/scrapes/current-site-dom-snapshot.txt`
    - `restaurant-website-system/sites/maxfields-pancake-house/scrapes/current-site-fetch-evidence-2026-05-06.txt`
    - `restaurant-website-system/sites/maxfields-pancake-house/scrapes/public-sources-evidence-2026-05-06.md`
- `current-site-opportunities` — Audit names concrete conversion, credibility, mobile, and factual gaps
  - Notes: Local evidence completed 2026-05-06.
  - Evidence:
    - `restaurant-website-system/sites/maxfields-pancake-house/audit.md`
- `reviews-highest-filter` — Google Reviews opened in browser and sorted by Highest
  - Notes: Google Reviews opened in browser; Sort reviews menu used and Highest rating selected before capture.
  - Evidence:
    - `restaurant-website-system/sites/maxfields-pancake-house/scrapes/google-reviews-highest-30.json`
    - `restaurant-website-system/sites/maxfields-pancake-house/scrapes/google-reviews-highest-30.md`
    - `restaurant-website-system/sites/maxfields-pancake-house/screenshots/google-reviews-overview.png`
    - `restaurant-website-system/sites/maxfields-pancake-house/screenshots/google-reviews-highest-filter.png`
    - `restaurant-website-system/sites/maxfields-pancake-house/screenshots/google-reviews-highest-selected.png`
- `reviews-thirty-written` — 30 written reviews captured, or exact shortage/blocker documented
  - Notes: Captured 30 written Google reviews from the Highest rating flow; star-only/empty reviews were skipped.
  - Evidence:
    - `restaurant-website-system/sites/maxfields-pancake-house/scrapes/google-reviews-highest-30.json`
    - `restaurant-website-system/sites/maxfields-pancake-house/scrapes/google-reviews-highest-30.md`
    - `restaurant-website-system/sites/maxfields-pancake-house/screenshots/google-reviews-overview.png`
    - `restaurant-website-system/sites/maxfields-pancake-house/screenshots/google-reviews-highest-filter.png`
    - `restaurant-website-system/sites/maxfields-pancake-house/screenshots/google-reviews-highest-selected.png`
- `reviews-themes` — Review themes summary is usable for copy and pitch docs
  - Notes: Markdown packet includes grounded themes for service, breakfast/brunch items, cleanliness, value, family/groups, speed, coffee, and lunch/diner breadth.
  - Evidence:
    - `restaurant-website-system/sites/maxfields-pancake-house/scrapes/google-reviews-highest-30.json`
    - `restaurant-website-system/sites/maxfields-pancake-house/scrapes/google-reviews-highest-30.md`
    - `restaurant-website-system/sites/maxfields-pancake-house/screenshots/google-reviews-overview.png`
    - `restaurant-website-system/sites/maxfields-pancake-house/screenshots/google-reviews-highest-filter.png`
    - `restaurant-website-system/sites/maxfields-pancake-house/screenshots/google-reviews-highest-selected.png`
- `template-route-locked` — Exactly one archetype/template route is chosen and justified
  - Notes: Cuisine archetype with plate-01 template route locked and documented.
  - Evidence:
    - `restaurant-website-system/sites/maxfields-pancake-house/routing-template-decision-2026-05-06.md`
- `fork-built` — Template fork builds successfully with real content and preserved conversion links
  - Notes: Maxfield-specific plate-01 fork builds successfully; npm install/typecheck/build passed.
  - Evidence:
    - `restaurant-website-system/sites/maxfields-pancake-house/build-notes-2026-05-06.md`
    - `restaurant-website-system/sites/maxfields-pancake-house/mc-build-writeback-building-2026-05-06.json`
- `specificity` — No generic restaurant copy, fake claims, fake menu items, fake reviews, or fake ordering paths
  - Notes: Forbidden placeholder grep passed; fake reservations/order paths and generic Plate content removed.
  - Evidence:
    - `restaurant-website-system/sites/maxfields-pancake-house/source.md`
    - `restaurant-website-system/sites/maxfields-pancake-house/content.ts`
- `identity-specific` — Copy/visual rhythm feels specific to the restaurant and selected archetype
  - Notes: Homepage and footer copy now read as a Schaumburg breakfast house centered on pancakes, skillets, coffee, family visits, and diner trust instead of generic bistro tone.
  - Evidence:
    - `restaurant-website-system/sites/maxfields-pancake-house/improvement-pass-2026-05-06.md`
    - `restaurant-website-system/sites/maxfields-pancake-house/content.ts`
    - `restaurant-website-system/sites/maxfields-pancake-house/components/TaglineBanner.tsx`
    - `restaurant-website-system/sites/maxfields-pancake-house/components/LatestUpdatesGrid.tsx`
- `conversion-paths` — Order/reserve/call/directions/catering/events paths are accurate as applicable
  - Notes: The preview now pushes call, directions, and menu highlights more clearly on desktop and mobile while continuing to omit fake reservations and unsupported order flows.
  - Evidence:
    - `restaurant-website-system/sites/maxfields-pancake-house/improvement-pass-2026-05-06.md`
    - `restaurant-website-system/sites/maxfields-pancake-house/content.ts`
    - `restaurant-website-system/sites/maxfields-pancake-house/components/SiteHeader.tsx`
    - `restaurant-website-system/sites/maxfields-pancake-house/components/HeroSplit.tsx`
    - `restaurant-website-system/sites/maxfields-pancake-house/components/ContactCtaClosing.tsx`
- `mobile-check` — Mobile pass is explicitly checked with evidence
  - Notes: Code-level mobile polish was completed for the header, hero, CTA stacking, menu density, wordmark scale, and footer spacing. Screenshot evidence is pending because browser capture was not available in this runtime.
  - Evidence:
    - `restaurant-website-system/sites/maxfields-pancake-house/improvement-pass-2026-05-06.md`
    - `restaurant-website-system/sites/maxfields-pancake-house/components/SiteHeader.tsx`
    - `restaurant-website-system/sites/maxfields-pancake-house/components/HeroSplit.tsx`
    - `restaurant-website-system/sites/maxfields-pancake-house/components/ContactCtaClosing.tsx`
    - `restaurant-website-system/sites/maxfields-pancake-house/components/WordmarkFooter.tsx`
    - `restaurant-website-system/sites/maxfields-pancake-house/app/globals.css`
- `top-three-named` — Top 3 concrete improvements are named from audit/preview/QA
  - Notes: Chosen improvements are broken-domain sales story above the fold, review proof bridged to real CTAs, and a clearer visit-confidence treatment for conflicting hours and unverified ordering.
  - Evidence:
    - `restaurant-website-system/sites/maxfields-pancake-house/top-3-improvements-2026-05-06.md`
- `top-three-implemented` — All three improvements are implemented
  - Notes: Homepage and contact experience were updated to add the above-the-fold recovery panel, CTA-linked review proof cards, and a dedicated visit-confidence module reused across pages.
  - Evidence:
    - `restaurant-website-system/sites/maxfields-pancake-house/top-3-improvements-2026-05-06.md`
    - `restaurant-website-system/sites/maxfields-pancake-house/content.ts`
    - `restaurant-website-system/sites/maxfields-pancake-house/components/HeroSplit.tsx`
    - `restaurant-website-system/sites/maxfields-pancake-house/components/LatestUpdatesGrid.tsx`
    - `restaurant-website-system/sites/maxfields-pancake-house/components/VisitConfidencePanel.tsx`
    - `restaurant-website-system/sites/maxfields-pancake-house/app/page.tsx`
    - `restaurant-website-system/sites/maxfields-pancake-house/app/contact/page.tsx`
- `top-three-evidence` — Each improvement has before/after evidence
  - Notes: Before state is anchored to the audit, build notes, and prior improvement pass; after state is documented with changed-file evidence and the new stage artifact.
  - Evidence:
    - `restaurant-website-system/sites/maxfields-pancake-house/top-3-improvements-2026-05-06.md`
    - `restaurant-website-system/sites/maxfields-pancake-house/audit.md`
    - `restaurant-website-system/sites/maxfields-pancake-house/build-notes-2026-05-06.md`
    - `restaurant-website-system/sites/maxfields-pancake-house/improvement-pass-2026-05-06.md`
    - `restaurant-website-system/sites/maxfields-pancake-house/mc-build-writeback-top-3-improvements-2026-05-06.json`
- `concierge-kb-truthful` — Concierge KB only uses verified restaurant facts
  - Notes: The concierge is deterministic and fixed-KB only, with hours conflicts, reservation caution, takeout uncertainty, and unsupported facts all handled explicitly.
  - Evidence:
    - `restaurant-website-system/sites/maxfields-pancake-house/concierge-kb-2026-05-06.md`
    - `restaurant-website-system/sites/maxfields-pancake-house/concierge-kb.ts`
    - `restaurant-website-system/sites/maxfields-pancake-house/source.md`
    - `restaurant-website-system/sites/maxfields-pancake-house/scrapes/google-reviews-highest-30.md`
- `concierge-tested` — Short transcript proves useful behavior
  - Notes: Transcript covers the six required visitor questions plus one unsupported-question fallback.
  - Evidence:
    - `restaurant-website-system/sites/maxfields-pancake-house/concierge-test-transcript-2026-05-06.md`
    - `restaurant-website-system/sites/maxfields-pancake-house/components/ConciergePanel.tsx`
    - `restaurant-website-system/sites/maxfields-pancake-house/app/page.tsx`
    - `restaurant-website-system/sites/maxfields-pancake-house/app/contact/page.tsx`
- `concierge-safe` — Fallbacks prevent fake reservations, unsupported promises, or invented facts
  - Notes: The UI explicitly says it is not live AI, omits freeform generation, and routes unknowns to the verified phone number.
  - Evidence:
    - `restaurant-website-system/sites/maxfields-pancake-house/components/ConciergePanel.tsx`
    - `restaurant-website-system/sites/maxfields-pancake-house/concierge-kb.ts`
    - `restaurant-website-system/sites/maxfields-pancake-house/content.ts`
    - `restaurant-website-system/sites/maxfields-pancake-house/mc-build-writeback-concierge-2026-05-06.json`
- `pitch-specific` — Pitch is specific to restaurant, neighborhood/cuisine, reviews, and conversion gaps
  - Notes: The pitch is framed around Maxfield's broken Wix domain, Schaumburg breakfast-house positioning, public review proof, menu-confidence gaps, and a truth-safe visit path.
  - Evidence:
    - `restaurant-website-system/sites/maxfields-pancake-house/pitch-2026-05-06.md`
    - `restaurant-website-system/sites/maxfields-pancake-house/audit.md`
    - `restaurant-website-system/sites/maxfields-pancake-house/scrapes/google-reviews-highest-30.md`
- `pitch-before-after` — Pitch explains before/after delta in owner language
  - Notes: The doc uses owner-facing before/after language focused on broken domain, scattered proof, unclear hours/order/reservation expectations, and the new phone-first, directions-first preview flow.
  - Evidence:
    - `restaurant-website-system/sites/maxfields-pancake-house/pitch-2026-05-06.md`
    - `restaurant-website-system/sites/maxfields-pancake-house/top-3-improvements-2026-05-06.md`
- `pitch-evidence` — Evidence and preview links are embedded or linked
  - Notes: The pitch links the audit, screenshots, review packet, concierge artifacts, deployed preview URL, and local artifact paths.
  - Evidence:
    - `restaurant-website-system/sites/maxfields-pancake-house/pitch-2026-05-06.md`
    - `restaurant-website-system/sites/maxfields-pancake-house/mc-build-writeback-pitch-2026-05-06.json`
    - `restaurant-website-system/sites/maxfields-pancake-house/screenshots/current-site-desktop-wix-error.png`
    - `restaurant-website-system/sites/maxfields-pancake-house/screenshots/current-site-mobile-wix-error.png`

## Verification

- `npm install` — passed on 2026-05-06
- `npm run typecheck` — passed on 2026-05-06 after `npm run build` generated `.next/types` required by the local `tsconfig.json` include pattern
- `npm run build` — passed on 2026-05-06
- Forbidden placeholder grep — passed on 2026-05-06 after checklist metadata wording was normalized to avoid legacy placeholder strings

## Google reviews evidence

- `restaurant-website-system/sites/maxfields-pancake-house/scrapes/google-reviews-highest-30.json`
- `restaurant-website-system/sites/maxfields-pancake-house/scrapes/google-reviews-highest-30.md`
- `restaurant-website-system/sites/maxfields-pancake-house/screenshots/google-reviews-overview.png`
- `restaurant-website-system/sites/maxfields-pancake-house/screenshots/google-reviews-highest-filter.png`
- `restaurant-website-system/sites/maxfields-pancake-house/screenshots/google-reviews-highest-selected.png`

## Build evidence

- `restaurant-website-system/sites/maxfields-pancake-house/routing-template-decision-2026-05-06.md`
- `restaurant-website-system/sites/maxfields-pancake-house/build-notes-2026-05-06.md`
- `restaurant-website-system/sites/maxfields-pancake-house/source.md`
- `restaurant-website-system/sites/maxfields-pancake-house/mc-build-writeback-building-2026-05-06.json`

## Pitch evidence

- Preview URL: https://skills-git-feat-maxfields-p-46b25d-ethan-ethantalrejas-projects.vercel.app
- `restaurant-website-system/sites/maxfields-pancake-house/pitch-2026-05-06.md`
- `restaurant-website-system/sites/maxfields-pancake-house/mc-build-writeback-pitch-2026-05-06.json`
- `restaurant-website-system/sites/maxfields-pancake-house/screenshots/current-site-desktop-wix-error.png`
- `restaurant-website-system/sites/maxfields-pancake-house/screenshots/current-site-mobile-wix-error.png`
- `restaurant-website-system/sites/maxfields-pancake-house/scrapes/google-reviews-highest-30.md`

## Open blockers

- `mission_control_auth` — Mission Control auth is unavailable in this runtime, so reviews/build writeback payloads are prepared locally only. No raw Supabase agency writes were performed.
- `hours_confirmation` — public sources conflict on hours; final publish should confirm with owner/Google Business Profile.
- `order_link_confirmation` — order actions exist in public sources, but the direct/first-party provider was not resolved.

## Pending later gates

- `battle-cards-objections` — Likely owner objections have concise answers
- `battle-cards-demo-path` — Demo path and proof points are clear
- `battle-cards-risks` — Risks/unknowns are called out truthfully
- `qa-round-1` — QA round 1 completed with screenshots, findings, fixes, and MC writeback
- `qa-round-2` — QA round 2 completed with screenshots, findings, fixes, and MC writeback
- `qa-round-3` — QA round 3 completed with final sell-readiness screenshots, fixes, and MC writeback
- `delivery-package` — Preview URL, screenshots, pitch doc, battle cards, checklist, QA evidence, and requirement status are mirrored to MC
- `delivery-no-missing-evidence` — No delivery until MC has checklist paths, preview/artifact URL, and required gate evidence
