# The Graceful Ordinary — QA Round 2

- Date: 2026-05-06
- Round: 2
- Gate: `qa_round_2`
- Focus: mobile polish + conversion flow
- Local preview: `http://127.0.0.1:3025`
- Public preview recorded in MC: `https://graceful-ordinary-redesign.vercel.app`

## Evidence

- Desktop screenshot: `restaurant-website-system/sites/the-graceful-ordinary/screenshots/qa-round-2/desktop-full.png`
- Mobile screenshot: `restaurant-website-system/sites/the-graceful-ordinary/screenshots/qa-round-2/mobile-full.png`
- Capture script: `restaurant-website-system/sites/the-graceful-ordinary/scrapes/capture-qa-round-2-cdp-2026-05-06.mjs`
- Typecheck: `npm run typecheck` passed on 2026-05-06
- Build: `npm run build` passed on 2026-05-06
- Route checks: `/`, `/menu`, `/about`, `/contact` returned HTTP 200 locally
- Concierge conversion check: birthday/reservation prompt returned `{{reserve}}` and captured birthday intent

## Findings

1. **Mobile first viewport needed an immediate conversion path.** The hero CTA existed lower in the page flow, but mobile QA required a visible above-the-fold Reserve/Menu/Call path.
2. **Mobile “New, yet familiar” image collage looked broken.** The image tiles were too dark/empty in the mobile evidence capture, leaving the section feeling like a blank gap.
3. **Mobile awards marquee clipped at viewport edges.** The animated desktop marquee did not read cleanly as static mobile proof.
4. **Mobile reviews had been compressed/clipped in the carousel.** Cards needed a readable mobile presentation instead of relying on horizontal carousel behavior.
5. **Small supporting text needed stronger contrast.** Footer and hour/supporting text were readable but too low contrast for mobile QA.

## Fixes applied in round 2

- Added a mobile sticky action bar in `components/FloatingHeaderPill.tsx` with immediate `Reserve`, `Menu`, and `Call` actions.
- Replaced the mobile story collage in `components/MoreThanAMealSplit.tsx` with visible Graceful Ordinary-specific proof cards; kept the image collage for desktop.
- Changed `components/MarqueeStrip.tsx` to render static wrapped proof badges on mobile and preserve the animated marquee on desktop.
- Adjusted `components/TestimonialCardGrid.tsx` so mobile shows readable stacked review cards while desktop keeps the auto-scrolling carousel.
- Tightened mobile section spacing and contrast in `MoreThanAMealSplit`, `MultiChannelReservationStrip`, `QuoteOnPhotoOverlay`, and `RichFooter`.
- Re-captured QA round 2 desktop/mobile screenshots after fixes.
- Re-ran `npm run typecheck` and `npm run build`; both passed.

## Pass/fail

QA round 2 passes. Final screenshot inspection found no remaining mobile polish or conversion blockers after the sticky mobile Reserve/Menu/Call bar and mobile layout fixes.

## Deferred to round 3

Round 3 should verify final sell-readiness and delivery pack completeness: preview URL caveat, pitch doc, battle cards, top-three evidence, concierge evidence, QA evidence, and Mission Control requirement mirroring.
