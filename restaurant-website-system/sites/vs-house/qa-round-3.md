# V's House — QA Round 3

- Round: 3
- Focus: final sell-readiness + founder delivery pack
- Gate: `qa_round_3`
- Date: 2026-05-04
- Site slug: `vs-house`
- MC parent task: `41da188d-4629-4cb2-91f3-6be31d6b9b6d`

## Final verdict

Needs work before final delivery, but materially closer to sell-ready.

This is not a brand/content failure: the V's House rebuild is strongly restaurant-specific, conversion-oriented, and clearly better than the old Squarespace homepage. The remaining delivery blocker is evidence capture: fresh desktop/mobile screenshots cannot be attached until a working Chromium/browser path exists. During this QA pass, one factual/sellability issue was found and fixed.

## What is world-class already

- **Identity:** The site is unmistakably V's House: Vu family heritage since 1982, Bedford-Euless Road, V's House wordmark, Pho V / Quan Vu lineage, Hatsumi Kuzuu room design, Vietnamese coffee cocktails, and review-backed signature dishes.
- **Conversion:** The homepage now includes reserve, call, order, address, hours, map, sticky mobile call/reserve bar, text menu sections, and concierge entry. High-intent diner paths are no longer buried in separate pages only.
- **Old-site improvement:** The old experience hid the family story, press, ratings, and menu utility. The rebuild surfaces them in the core journey.
- **Proof density:** Fort Worth Magazine, Dallas Observer, Google/OpenTable/Restaurantji/Yelp ratings, review language, and named menu signatures are all present.
- **Build health:** Production build and TypeScript validation pass after the Round 3 fix.

## What still blocks sellability

1. **Screenshot evidence unavailable:** Browser capture is still blocked because this host has no managed Chromium executable and the user-profile attach path is not connected. Final QA cannot truthfully pass without desktop/mobile screenshots.
2. **Owner-confirmed menu pricing is still pending:** The site had demo/market-range prices in `content.ts`. That is risky because exact prices must not be invented. This QA round removed visible prices until they can be confirmed from the current menu/owner.
3. **Live concierge depends on API/runtime secrets:** The concierge is restaurant-specific and rule-bound, but final delivery should verify the deployed environment has the required Anthropic/API key or use a safe fallback state.

## Critical fixes before Ethan sees it

1. **Capture screenshots:** Once Chrome/Chromium is available, capture desktop and mobile homepage/menu/contact screenshots and attach them to MC.
2. **Confirm menu prices:** Extract/confirm exact prices from V's House's current menu or owner source before showing any price values. Until then, leave prices hidden rather than invented.
3. **Verify concierge runtime:** Confirm `/api/chat` streams successfully in the deployed/preview environment or disable the concierge trigger for the sales demo.
4. **Final visual pass:** After screenshots are available, inspect mobile spacing, sticky CTA overlap, menu density, and map/contact section rendering before delivery.

## Fix applied this round

- Removed all visible demo menu prices from `content.ts` by setting prices to `null` until owner-confirmed.
- Updated `MenuSection` to render price columns only when a real price exists.
- Updated concierge prompt assembly so it no longer tells the model invented prices.

## Verification evidence

- `npm run build` passed.
- `npm run typecheck` passed.
- Code changed:
  - `restaurant-website-system/sites/vs-house/content.ts`
  - `restaurant-website-system/sites/vs-house/components/MenuSection.tsx`
  - `restaurant-website-system/sites/vs-house/app/api/chat/route.ts`

## Confidence to sell

Ethan should not send this as a final delivered package yet because screenshots and confirmed prices are still pending. But the core pitch is strong: this is clearly a premium, custom V's House upgrade, and the remaining work is verification/commercial polish rather than a rebuild-level problem.

## 2026-05-04 heartbeat addendum — menu price confirmation advanced

- Fetched live official menu page HTML from `https://www.vshouse.net/menu` into `scrapes/menu-live.html`.
- Downloaded 11 current official Squarespace menu PNGs into `scrapes/menu-images/`.
- Added `menu-price-evidence.md` with item-by-item price confirmations.
- Reintroduced only source-confirmed prices into `content.ts`; left unconfirmed `Spicy California Roll` and happy-hour egg rolls without prices.
- Re-ran `npm run build` and `npm run typecheck`; both passed.

Updated blocker state: the broad demo-price risk is resolved for the preview. Remaining price work is narrow: confirm any unpriced items before final delivery or remove them from the sales demo.

## 2026-05-04 heartbeat addendum — unpriced demo items removed

- Removed the remaining unpriced `Spicy California Roll` item from the preview menu because it was not confirmed in the extracted official menu image set.
- Removed the remaining unpriced happy-hour egg rolls row from the preview menu because the price was not confirmed in the extracted official menu image set.
- Re-ran `npm run build` and `npm run typecheck`; both passed.

Updated blocker state: the unpriced-item cleanup is resolved for the sales demo. The site now shows only source-confirmed menu prices from official menu images. Final delivery still needs browser screenshots and deployed concierge runtime verification.

## 2026-05-04 heartbeat addendum — screenshot/review evidence attached

- Browser access recovered enough to capture live Google Maps review evidence and local preview screenshots.
- Added Google Reviews Highest packet: `scrapes/google-highest-30-2026-05-04.json` and `.md` companion.
- Captured preview screenshots:
  - `screenshots/preview-home-desktop-2026-05-04.png`
  - `screenshots/preview-home-mobile-2026-05-04.png`
- Updated checklist to mark QA rounds 1-3 locally evidence-backed and move the local stage to `packaging`.
- Remaining delivery blockers are now packaging-level: deployed preview URL, outreach draft, Mission Control evidence mirror/writeback, and deployed concierge runtime verification.

## 2026-05-04 heartbeat addendum — concierge fallback verified

- Updated `app/api/chat/route.ts` so Anthropic is instantiated lazily only when `ANTHROPIC_API_KEY` exists.
- Added a truthful no-secret SSE fallback grounded in V's House content for hours, address, reservation/order links, phone, and menu item names.
- Updated `components/AskConcierge.tsx` so streamed error frames surface to the guest instead of being swallowed as malformed SSE.
- Verified `npm run typecheck`, `npm run build`, and local production `/api/chat` fallback via curl.
- Evidence: `restaurant-website-system/sites/vs-house/concierge-runtime-evidence.md`.
