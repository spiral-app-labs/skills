# Ciao Baby! — template routing rationale

Date: 2026-05-04  
Site slug: `ciao-baby`  
Selected template: `gusto-01`

## Restaurant read

- *Type:* neighborhood Italian / Italian-American restaurant.
- *Vibe:* family-run, old-school warmth, cozy Barrington regulars-table energy.
- *Service model:* dine-in lunch/dinner, carryout by phone, private party room.
- *Primary conversion path:* call the restaurant, get directions, view menu proof, ask about private parties.
- *Evidence basis:* browser audit, current-site scrape, `ciaobaby.net` shell scrape, Highest-filter Google review packet, and review-theme notes already saved locally.

## Why `gusto-01`

`gusto-01` is the strongest match because its structure already expresses warm heritage Italian hospitality: asymmetric dining photography, testimonial overlay, hours/call rail, editorial menu rows, and an about page that can carry family-run proof without turning the site into a generic luxury restaurant.

The other archetypes would drift:

- A luxury reservation-led template would over-formalize a neighborhood family restaurant.
- A modern high-design layout would fight the old-school Italian trust signals.
- A nightlife/tavern structure would overemphasize mood instead of menu, family meals, and private parties.

## Personalization requirements applied

- Preserved `gusto-01` structure instead of inventing a new layout.
- Replaced template copy with Ciao Baby-specific facts: 232 E Main Street, Barrington, `(847) 381-3555`, family-run tone, Italian/Americana menu, private-party room, call/directions handoffs.
- Used real public imagery from the current Wix-hosted site rather than stock-led identity.
- Used review-grounded proof points: warm service, lamb chops Vesuvio, homemade gnocchi, burnt pasta, salted caramel gelato, carrot cake, private birthday party.
- Avoided unsafe claims: no fake online reservations, no invented ordering provider, no unsupported awards, no fake hours certainty, and no invented ownership resolution between `ciaobabyonline.com` and `ciaobaby.net`.

## Build evidence

- Template merge preserved existing audit/review artifacts in `restaurant-website-system/sites/ciao-baby/`.
- First fork build passed `npm run typecheck` and `npm run build`.
- Local preview ran at `http://127.0.0.1:3084`.
- Browser/CDP capture saved desktop + mobile screenshots for `/`, `/menu`, `/about`, `/contact` with zero horizontal overflow offenders.
