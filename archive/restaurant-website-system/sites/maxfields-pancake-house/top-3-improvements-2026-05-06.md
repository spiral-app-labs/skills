# Maxfield's Pancake House — Top 3 Improvements

Date: 2026-05-06  
Stage: `top_3_improvements`  
Archetype: `Cuisine`  
Template: `plate-01`

## 1. Broken-domain sales story above the fold

- Before state:
  - The audit established that `maxfieldschaumburg.com` and `www.maxfieldschaumburg.com` were returning a Wix ConnectYourDomain 404.
  - The existing preview restored useful information, but the owner-facing before/after story was not explicit enough in the hero to sell the value quickly.
- Implementation:
  - Rewrote the hero subcopy to frame the preview as a fix for the broken official site, not just a generic redesign.
  - Added a right-column recovery panel in the hero with a simple `Before` / `Now` explanation and a positive “what this preview fixes” sales note.
- After state:
  - The first screen now explains why the preview matters in business terms: the live domain was broken, and this preview restores the visit basics in one owner-controlled flow.
- Evidence paths:
  - Before:
    - `restaurant-website-system/sites/maxfields-pancake-house/audit.md`
    - `restaurant-website-system/sites/maxfields-pancake-house/screenshots/current-site-desktop-wix-error.png`
    - `restaurant-website-system/sites/maxfields-pancake-house/screenshots/current-site-mobile-wix-error.png`
  - After:
    - `restaurant-website-system/sites/maxfields-pancake-house/content.ts`
    - `restaurant-website-system/sites/maxfields-pancake-house/components/HeroSplit.tsx`

## 2. Review proof bridged directly to conversion

- Before state:
  - The prior improvement pass summarized Google review themes well, but the proof cards still behaved more like passive trust content than active conversion support.
- Implementation:
  - Reframed the proof section heading and intro around “what reviews support visitors doing next.”
  - Added a conversion bridge inside each proof card with a real CTA tied to the review theme:
    - breakfast staples → menu highlights
    - service and pace → call to confirm timing
    - value and local trust → directions
- After state:
  - Review proof now helps the visitor choose a real next step instead of just reading general praise. This keeps the copy grounded in captured review themes without inventing quotes.
- Evidence paths:
  - Before:
    - `restaurant-website-system/sites/maxfields-pancake-house/improvement-pass-2026-05-06.md`
    - `restaurant-website-system/sites/maxfields-pancake-house/scrapes/google-reviews-highest-30.md`
  - After:
    - `restaurant-website-system/sites/maxfields-pancake-house/content.ts`
    - `restaurant-website-system/sites/maxfields-pancake-house/components/LatestUpdatesGrid.tsx`

## 3. Hours/order uncertainty handled with a polished visit-confidence module

- Before state:
  - Hours uncertainty was disclosed in scattered notes, the footer, and the contact page, but it did not yet feel like a composed “verify before you go” system.
  - Order-provider uncertainty was still only implicit.
- Implementation:
  - Added a reusable `VisitConfidencePanel` component to the homepage and contact page.
  - Turned the uncertainty into a structured module with three trust-safe cards:
    - address and phone are consistent
    - hours need a quick confirmation call
    - direct ordering is unverified, so takeout questions should go through the phone
  - Included a side-by-side public-hours comparison with a plain-language footnote explaining what is and is not claimed.
- After state:
  - Visitors now get a cleaner “verify before you go” path that preserves confidence without inventing live hours or a fake ordering flow.
- Evidence paths:
  - Before:
    - `restaurant-website-system/sites/maxfields-pancake-house/build-notes-2026-05-06.md`
    - `restaurant-website-system/sites/maxfields-pancake-house/improvement-pass-2026-05-06.md`
    - `restaurant-website-system/sites/maxfields-pancake-house/app/contact/page.tsx`
  - After:
    - `restaurant-website-system/sites/maxfields-pancake-house/content.ts`
    - `restaurant-website-system/sites/maxfields-pancake-house/components/VisitConfidencePanel.tsx`
    - `restaurant-website-system/sites/maxfields-pancake-house/app/page.tsx`
    - `restaurant-website-system/sites/maxfields-pancake-house/app/contact/page.tsx`

## Verification

- `npm run typecheck` — passed
- `npm run build` — passed
- Forbidden placeholder grep — passed with no output

## Remaining blockers

- `mission_control_auth` — Mission Control auth is still unavailable in this runtime, so the prepared top-3 writeback payload cannot be synced yet.
- `hours_confirmation` — public sources still conflict on hours; final publish should confirm against Google Business Profile and/or owner confirmation.
- `order_link_confirmation` — public ordering actions exist, but a direct owner-controlled provider was not verified.
