# Mary's Mexican Grill top 3 improvements - 2026-05-04

## Ranked list

### 1. Above-the-fold conversion clarity now matches Mary's actual guest intent

Why it matters:
- The audit showed the live domain currently misroutes guests with setup/vendor language instead of menu, call, order, and directions.
- The preview needed to make Mary's usable in the first screen, especially on mobile.

Implementation:
- Rewrote the home hero title/subtitle to foreground tacos, tamales, fresh salsa, rating proof, and tonight-useful actions.
- Added a four-card hero quick-action rail for `View menu`, `Order online`, `Call Marys`, and `Get directions`.
- Added a truthful hero note about the public listing number and the older indexed phone conflict.

Before / after:
- Before: hero conversion depended on the standard CTA row and supporting copy, with the phone conflict buried deeper in the site.
- After: the first screen now presents the core guest actions and the phone-note context immediately, without inventing a direct-order claim.

Files changed:
- `restaurant-website-system/sites/marys-mexican-grill/content.example.ts`
- `restaurant-website-system/sites/marys-mexican-grill/components/DarkLeafHero.tsx`
- `restaurant-website-system/sites/marys-mexican-grill/app/page.tsx`

Evidence:
- Diff evidence in the files above.

### 2. Google review proof is more immediately scannable instead of feeling buried in long quotes

Why it matters:
- The review packet is one of Mary's strongest sales assets: 4.8 Google rating, 604 public reviews, and strong recurring themes around tacos, salsa, service, value, and the Square.
- The earlier pass added proof, but this gate needed a faster read for owner/demo use.

Implementation:
- Added three summary proof stats above the home review carousel.
- Added theme pills so the repeated review themes scan in seconds.
- Converted the menu-page proof cards from named-avatar style into tighter labeled proof cards so the page reads faster and stays more focused on review-backed selling points.

Before / after:
- Before: review proof relied mostly on the carousel itself and a template-style testimonial row.
- After: the home page and menu page both summarize the strongest proof quickly before a user reads the full quotes.

Files changed:
- `restaurant-website-system/sites/marys-mexican-grill/content.example.ts`
- `restaurant-website-system/sites/marys-mexican-grill/components/ReviewCarousel.tsx`
- `restaurant-website-system/sites/marys-mexican-grill/components/TestimonialStarRow.tsx`

Evidence:
- Diff evidence in the files above.

### 3. Menu/order/phone friction is handled more truthfully and with less guest confusion

Why it matters:
- The audit found a real phone conflict and an unresolved owned-domain order path.
- Hiding those issues would make the preview less credible, but surfacing them clumsily would hurt conversion.

Implementation:
- Reframed the menu action band around "quickest real next step tonight" language.
- Upgraded the order/call/directions cards and surfaced the phone note in its own callout block.
- Tightened contact/footer/mobile sticky action language and touch/accessibility behavior so the practical paths stay clearer.

Before / after:
- Before: the planning/action areas were truthful, but they still read more like inherited template utility sections.
- After: the preview explicitly guides guests to the real available paths while keeping the phone conflict visible and non-alarming.

Files changed:
- `restaurant-website-system/sites/marys-mexican-grill/content.example.ts`
- `restaurant-website-system/sites/marys-mexican-grill/components/ReservationFormBlock.tsx`
- `restaurant-website-system/sites/marys-mexican-grill/components/ContactStripFooter.tsx`
- `restaurant-website-system/sites/marys-mexican-grill/components/MobileStickyActions.tsx`

Evidence:
- Diff evidence in the files above.

## Commands run

1. `git config user.name`
2. `git config user.email`
3. `npm ci`
4. `npm run typecheck`
5. `npm run build`

## Verification summary

- `git config user.name` -> `Ethan Talreja`
- `git config user.email` -> `64980375+EthanTalreja@users.noreply.github.com`
- `npm ci` succeeded.
- `npm run typecheck` succeeded.
- `npm run build` succeeded with Next.js `14.2.35`.

## Notes

- Evidence for this gate is local-only because Mission Control API writeback is blocked in this runtime.
- No direct Supabase or Mission Control write was attempted.
