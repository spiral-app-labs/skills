# Golden Rolls — Top 3 Improvements

- Date: 2026-05-05
- Stage advanced: `top_3_improvements` → `concierge`
- Archetype: `bamzi-01` / Bamzi, kept truthful for a casual Woodstock sushi bistro.

## 1. Remove owner/internal language from customer-facing story

**Problem:** The About page still read like an agency audit: “Bamzi route,” “not omakase theater,” and “Build guardrails.” That would be embarrassing in a founder demo and not sellable to a restaurant owner.

**Fix:** Rewrote the About page as a customer-facing restaurant story: a calm sushi room hiding in plain sight, fresh rolls, generous plates, attentive service, hot entrées, takeout/delivery, and guest proof.

**Files:**
- `restaurant-website-system/sites/golden-rolls/app/about/page.tsx`
- `restaurant-website-system/sites/golden-rolls/content.example.ts`

## 2. Add faster home-page conversion proof

**Problem:** The homepage was visually solid, but guests still needed clearer practical answers: when are they open, what should I do next, and where is it?

**Fix:** Added a compact three-card service strip ahead of menu highlights: Open Tue–Sun, Call first, and Find us fast. This keeps the Bamzi dark pacing while making phone/directions/hours obvious in the sales demo.

**Files:**
- `restaurant-website-system/sites/golden-rolls/app/page.tsx`

## 3. Turn menu proof into guest-facing recommendations

**Problem:** The menu page contained agency-ish wording like “a clearer mobile version of the real menu” and did not spotlight the highest-leverage dishes from the review packet.

**Fix:** Rewrote the hero copy and added a review-backed picks block using customer-safe language: Godzilla/Mini Godzilla, hot starters/non-raw options, and fresh nigiri/sashimi cuts. Also sanitized underlying content so the future concierge KB does not leak build/audit language.

**Files:**
- `restaurant-website-system/sites/golden-rolls/app/menu/page.tsx`
- `restaurant-website-system/sites/golden-rolls/content.example.ts`

## Evidence

- `restaurant-website-system/sites/golden-rolls/screenshots/preview-home-desktop-2026-05-05.png`
- `restaurant-website-system/sites/golden-rolls/screenshots/preview-home-mobile-2026-05-05.png`
- `restaurant-website-system/sites/golden-rolls/screenshots/preview-menu-desktop-2026-05-05.png`
- `restaurant-website-system/sites/golden-rolls/screenshots/preview-menu-mobile-2026-05-05.png`
- `restaurant-website-system/sites/golden-rolls/screenshots/preview-contact-desktop-2026-05-05.png`
- `restaurant-website-system/sites/golden-rolls/screenshots/preview-contact-mobile-2026-05-05.png`
- `restaurant-website-system/sites/golden-rolls/scrapes/preview-capture-manifest-2026-05-05.json`

## Validation

- `npm run typecheck` — passed
- `npm run build` — passed
- Production `next start` screenshot capture for `/`, `/menu`, and `/contact` on desktop/mobile — passed
- Visual QA on mobile home/menu/contact — passed; no critical rendering failures, agency/internal copy leaks, or major mobile issues found.

## Next gate

`concierge`: verify and improve the AI concierge so it uses a truthful Golden Rolls knowledge base, avoids fake reservations/allergy promises, and hands off to phone for current availability.

## Mission Control writeback

Local evidence is ready, but Mission Control writeback is still blocked because a trusted Mission Control base URL is unavailable in this runtime.
