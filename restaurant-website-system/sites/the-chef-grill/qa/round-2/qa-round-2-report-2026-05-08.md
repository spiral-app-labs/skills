# QA Round 2 — Mobile conversion and visual polish

Restaurant: The Chef Grill  
Lead ID: `25633ae3-0c44-4d23-9996-da4440eeaa97`  
Root task ID: `d9024ee4-cc50-4247-8529-2cb8b30c5ab2`  
Round: 2  
Date: 2026-05-08

## Result

PASS — QA Round 2 approved after mobile polish fixes.

## Focus

- Mobile conversion path: order, menu, call, directions.
- Mobile tap targets and sticky actions.
- Visit/contact section readability.
- Contact form field order and reachability.
- Visual polish on mobile and desktop.
- Customer-facing copy scan for internal or placeholder wording.

## Findings

1. Initial vision QA found the mobile sticky header/logo and header order CTA appeared clipped after anchor scrolling.
2. Initial vision QA found the bottom mobile CTA and concierge bubble could compete with the visit/contact content near the bottom of the page.
3. Automated mobile checks otherwise passed: no horizontal overflow, mobile quick actions were 44px tall, menu shortcut chips were readable/tappable, contact form fields were in the correct order, and conversion links were present.

## Fixes applied

1. Changed the site header to be non-sticky on mobile while retaining sticky desktop behavior. Mobile conversion is still handled by the bottom quick-action bar, avoiding clipped header states in mobile browser viewports.
2. Added `scroll-mt-24` to the homepage menu and visit sections so anchor jumps land cleanly.
3. Hid mobile quick actions and the concierge launcher when the visit section is visible, preventing overlap with contact/order/directions content.
4. Increased mobile bottom padding on the visit CTA section so important contact details remain visible above browser and CTA chrome.
5. Removed a remaining internal `preview` word from a source comment and re-ran the customer-facing source scan.

## Evidence

### Screenshots

- `restaurant-website-system/sites/the-chef-grill/qa/round-2/screenshots/qa2-mobile-hero-sticky-2026-05-08.png`
- `restaurant-website-system/sites/the-chef-grill/qa/round-2/screenshots/qa2-mobile-menu-shortcuts-2026-05-08.png`
- `restaurant-website-system/sites/the-chef-grill/qa/round-2/screenshots/qa2-mobile-review-proof-2026-05-08.png`
- `restaurant-website-system/sites/the-chef-grill/qa/round-2/screenshots/qa2-mobile-visit-ctas-2026-05-08.png`
- `restaurant-website-system/sites/the-chef-grill/qa/round-2/screenshots/qa2-mobile-contact-flow-2026-05-08.png`
- `restaurant-website-system/sites/the-chef-grill/qa/round-2/screenshots/qa2-desktop-home-polish-2026-05-08.png`

### Check artifacts

- `restaurant-website-system/sites/the-chef-grill/qa/round-2/qa-round-2-checks-2026-05-08.json`
- `restaurant-website-system/sites/the-chef-grill/qa/round-2/qa-round-2-source-scan-2026-05-08.txt`
- Production build: PASS (`npm run build`)
- Typecheck: PASS (`npm run typecheck`)
- Vision review after fixes: PASS — no blockers; sticky header clipping resolved, bottom CTA no longer blocks key content, concierge no longer competes with critical CTAs.

## Caveats to carry forward

- Day-by-day or holiday hours still need restaurant confirmation.
- Catering/private-event capacity should not be claimed without owner confirmation.
- Preferred ordering provider should be confirmed before launch.
- Owner/founder story and spelling should remain unclaimed unless verified.
