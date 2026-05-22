# Mary's Mexican Grill Pitch Doc

## 60-Second Read
Mary's already has what owners want before dinner: strong public demand, a 4.8 Google rating, repeat-love for tacos, tamales, mole, chips and salsa, and warm service on Woodstock Square. The leak is the owned site path: the live domain currently shows vendor setup language, no real menu or guest CTA, a vendor phone number, and a broken HTTPS path instead of helping a hungry guest choose Mary's tonight.

The bamzi-01 preview fixes that without pretending to replace what already works. It puts Mary's name, Cass Street location, menu-first actions, review proof, and truthful order/call/directions paths in the first screen, while keeping the DoorDash handoff and the unresolved phone conflict explicit instead of hiding it.

Evidence: `audit.md`, `google-reviews-themes.md`, `scrapes/google-reviews-highest-30.md`, `build-evidence-2026-05-04.md`, `improvement-evidence-2026-05-04.md`, `top-3-improvements-2026-05-04.md`, `concierge-evidence-2026-05-04.md`.

## Call Opener
"Mary's already has the food, service, and public proof people trust on Woodstock Square, but the owned site is still leaking that intent before guests ever reach the menu or the right phone number."

## Where The Current Site Leaks Revenue
| Leak | Why It Matters | Standard Practice | Prototype Fix |
| --- | --- | --- | --- |
| Live domain shows `FromTheRestaurant` setup copy instead of Mary's branding | Guests land on a vendor page, not a restaurant they can choose for dinner tonight | A restaurant homepage should establish the restaurant name, cuisine, location, and next action in the first screen | The hero now opens with Mary's Mexican Grill, Woodstock Square framing, menu-first copy, and immediate guest actions backed by Mary's review themes |
| The main CTA calls `866-883-6967`, a vendor setup number | High-intent mobile traffic can call the wrong party and abandon | Primary actions should route to menu, order, call, and directions for the restaurant itself | The preview replaces the setup CTA with `View Menu`, `Order Online`, `Call Mary's`, and `Get Directions`, plus a truthful phone note |
| No menu, food proof, or review proof on the current site | Mary's best selling points live on Google, Restaurantji, Restaurant Guru, and DoorDash instead of the owned path | Casual Mexican grill sites should surface dish hooks, proof, and tonight-useful actions fast | The preview brings tacos, tamales, mole, salsa, value, and service proof into the home and menu experience |
| HTTPS failed during audit and the live page showed no reliable guest-ready operating info | A guest can lose trust before seeing hours, address, or a usable path | The owned site should feel dependable and current across mobile and direct visits | The rebuilt experience is framed around current public hours, Cass Street location, and clear action bands that match the verified source pack |
| Phone/NAP conflict is unresolved between older indexed copy and public listings | Mismatched contact info makes guests hesitate or call the wrong number | Safer pitch is to surface the conflict clearly until owner confirmation is locked | The preview keeps `(815) 337-2303` as the public listing number and calls out the older `(815) 923-5240` conflict instead of burying it |

## What We Fixed
- **First-screen conversion:** The homepage now behaves like a real Mary's site, with brand, location, menu/order/call/directions actions, and a conversion-oriented hero instead of setup language.
- **Proof that feels local:** Review-backed proof now scans quickly around Woodstock Square, friendly service, affordable portions, tacos, tamales, mole, chips, and salsa instead of leaving trust stranded on third-party profiles.
- **Truthful handoff strategy:** The preview preserves the current public DoorDash path, labels it as third-party, and keeps the phone conflict visible so the owner can see we are protecting credibility, not papering over missing facts.

## Demo Path
1. Show the homepage hero first in [`app/page.tsx`](./app/page.tsx) and the live copy/content in `content.example.ts`: Mary's name, Woodstock Square framing, and the four-card action rail prove the first tap now serves guests instead of a vendor.
2. Scroll into the review proof and menu surfaces: the review carousel, featured dish sections, and menu page translate 30 Highest-rated Google reviews into fast-scanning owner-language proof.
3. End on the action handoff: `Order Online`, `Call`, `Directions`, and the concierge/footer utility prove we preserved the practical path guests need tonight while keeping caveats explicit.

## Do Not Overclaim
- Do not claim we confirmed the canonical phone number yet; the safer pitch is that the preview handles the public `(815) 337-2303` listing while flagging the older `(815) 923-5240` indexed number for owner confirmation.
- Do not claim the preview replaces a verified direct-order provider; the current truthful online order path is still the public DoorDash listing.
- Do not claim owner story, awards, or licensed production photography; those details were not verified in the audit package.
- Mission Control writeback is still local-only in this runtime because `AGENCY_AUTONOMY_API_KEY` and `OPENCLAW_WEBHOOK_SECRET` are unavailable.

## Close
"If this feels closer to how Mary's actually wins tables and takeout orders on the Square, the next step is to confirm the phone/order details and use this as the sales story instead of the current setup page."
