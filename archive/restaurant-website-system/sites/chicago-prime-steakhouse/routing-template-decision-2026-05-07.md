# Chicago Prime Steakhouse — template routing decision

- Date: 2026-05-07
- Canonical gate: `routing`
- Decision: **Heaven Palate**
- `template_slug`: `Heaven Palate`
- Status: route-ready locally; pending MC attach/writeback because the protected Mission Control agency API still returns `401`, and the lead/root workflow still needs founder approval + provisioning before canonical stage writeback.

## Source evidence

- Build-readiness seed brief: `restaurant-website-system/sites/chicago-prime-steakhouse/research/build-readiness-seed-brief-2026-05-07.md`
- Official-site audit: `restaurant-website-system/sites/chicago-prime-steakhouse/audit-official-site-2026-05-07.md`
- Google Reviews packet: `restaurant-website-system/sites/chicago-prime-steakhouse/scrapes/google-reviews-highest-30-2026-05-07.md`
- Pending MC audit/reviews payload: `restaurant-website-system/sites/chicago-prime-steakhouse/mc-payloads/mc-audit-evidence-writeback-pending-2026-05-07.json`
- Official site screenshots:
  - `restaurant-website-system/sites/chicago-prime-steakhouse/evidence/official-site-home-desktop-full-2026-05-07.png`
  - `restaurant-website-system/sites/chicago-prime-steakhouse/evidence/official-site-home-mobile-full-2026-05-07.png`
- Google Reviews screenshots:
  - `restaurant-website-system/sites/chicago-prime-steakhouse/evidence/google-reviews-highest-header-2026-05-07.png`
  - `restaurant-website-system/sites/chicago-prime-steakhouse/evidence/google-reviews-highest-bottom-2026-05-07.png`
- Official text scrapes:
  - `restaurant-website-system/sites/chicago-prime-steakhouse/scrapes/official-site-home-text-2026-05-07.txt`
  - `restaurant-website-system/sites/chicago-prime-steakhouse/scrapes/official-site-menu-text-2026-05-07.txt`
  - `restaurant-website-system/sites/chicago-prime-steakhouse/scrapes/official-site-contact-text-2026-05-07.txt`
  - `restaurant-website-system/sites/chicago-prime-steakhouse/scrapes/official-site-private-dining-text-2026-05-07.txt`
  - `restaurant-website-system/sites/chicago-prime-steakhouse/scrapes/official-site-live-entertainment-text-2026-05-07.txt`
  - `restaurant-website-system/sites/chicago-prime-steakhouse/scrapes/official-site-legacy-text-2026-05-07.txt`
  - `restaurant-website-system/sites/chicago-prime-steakhouse/scrapes/official-site-special-events-text-2026-05-07.txt`

## Restaurant profile

Chicago Prime Steakhouse is a classic Schaumburg steakhouse and fine-dining restaurant with OpenTable reservations, private dining rooms, live lounge music, wine/cocktail cues, steak/seafood menu proof, and a George A. Kalkounos hospitality legacy story. The public business reality points to a premium, reservation-led conversion path rather than a casual order-first or nightlife-first site.

Confirmed public facts to preserve unless the owner corrects them:

- Official site: https://www.chicagoprimesteakhouse.com/
- Address: 1444 E. Algonquin Road, Schaumburg, IL 60173
- Phone: `847.969.9900`
- Hours snapshot: Monday–Saturday 3PM–10PM; Sunday 3PM–9PM
- Reservation path: `https://secure.opentable.com/chicago-prime-steakhouse-reservations-schaumburg?restref=36475`
- Private dining email: `events@chicagoprimesteakhouse.com`
- Private dining room/capacity snapshot from official page: Main Dining Room 130, Bar & Lounge 80, Walnut & State Room 85, Walnut Room 32, State Room 35
- Live entertainment snapshot: live music in the lounge Wednesday–Saturday 7PM–11PM, with schedule/currentness conflict noted in audit for owner confirmation
- Google review summary visible during evidence capture: `4.4 · 1,191 reviews`; use only if approved and sourced in a future preview

## Final archetype decision: Heaven Palate

Use **Heaven Palate** as the one structural base.

### Why Heaven Palate fits

1. **The restaurant is an upscale steakhouse, not a broad casual concept.** The official business story is prime steak, seafood, wine/cocktails, lounge entertainment, private rooms, and white-tablecloth dinner occasions. Heaven Palate is the system’s archetype for upscale steakhouse, formal dining, classic luxury, and premium reservation-led experiences.
2. **The primary conversion should be Reserve + Private Dining.** The audit found that the current site has real OpenTable/private-event assets but buries them under repeated CTAs and template residue. Heaven Palate’s restrained CTA hierarchy can turn Reserve, Private Dining, Menu, Call, and Directions into a deliberate premium conversion spine.
3. **The brand needs classic confidence more than novelty.** Chicago Prime’s strongest sellable cues are institution, service, celebration, owner/staff hospitality, private rooms, and steakhouse atmosphere. A dark luxury palette, oversized serif hero, symmetrical composition, and cinematic food/interior treatment fit those cues.
4. **Google review themes reinforce the steakhouse/occasion thesis.** Highest-rated reviews praise attentive service, birthday/celebration dinners, live entertainment, steak/seafood, wine, owner/staff hospitality, private/group occasions, and polished atmosphere. Those themes support classic luxury proof sections, not playful/casual menu cards or nightlife-first editorial energy.
5. **The current site’s biggest failure is trust leakage.** Bakery placeholders, `555-555-55-55`, carousel placeholders, slash placeholders, and duplicate copyright clutter make a premium restaurant feel unfinished. Heaven Palate gives the future build a clear way to remove residue and replace it with mature spacing, confident typography, and authentic restaurant facts.

## Archetypes rejected

### Bamzi — rejected

Bamzi is cinematic and could handle some dark/light drama, but it would over-index on narrative trendiness. Chicago Prime does not need a theatrical modern-dining poster site; it needs classic steakhouse authority, reservation confidence, private-event polish, and an owner/legacy story handled with restraint.

### Roma — rejected

Roma is chef-driven, seasonal, restrained, and editorial. Chicago Prime has premium dining, but its conversion problem is not seasonal chef storytelling; it is making steakhouse reservations, private rooms, live lounge, and service proof feel high-trust and easy to act on. Roma would risk feeling too quiet and under-commercial.

### Cuisine — rejected

Cuisine would improve clarity, but it is too warm/casual as the structural base. Chicago Prime’s price point, fine-dining positioning, private rooms, and steakhouse service model need more luxury and ceremony than a broad neighborhood-family layout.

### Bramble — rejected

Bramble is bar/tavern/nightlife-first. Chicago Prime has a lounge and live entertainment, but those are supporting differentiators. The core conversion remains dinner reservations and private dining, not cocktails/nightlife as the primary brand system.

### Qitchen — rejected

Qitchen is too architectural and high-design/omakase-like. Chicago Prime needs familiar classic luxury, readable private dining detail, and strong conversion hierarchy rather than abstract viewport composition or high-concept minimalism.

## Heaven Palate implementation rules

### Structural rhythm

1. **Dark classic-luxury reservation hero**
   - Large serif identity: Chicago Prime Steakhouse.
   - Supporting line: classic Schaumburg steakhouse / fine dining / private events.
   - Primary CTA: Reserve a Table.
   - Secondary CTA: Private Dining.
   - Tertiary links: Menu, Directions, Call.
   - Keep address and hours close enough for immediate confidence.

2. **Steakhouse craft and atmosphere section**
   - Feature steaks, seafood, wine/cocktails, and dining-room mood.
   - Use real menu and review themes without inventing dish awards or unsupported claims.

3. **Private dining / events section**
   - Show room names and capacity ranges only after owner/currentness confirmation.
   - Sell celebrations, corporate dinners, rehearsal dinners, and group dining before operational policy detail.
   - CTA to private dining inquiry / `events@chicagoprimesteakhouse.com`.

4. **Legacy / hospitality section**
   - Bring George A. Kalkounos’s hospitality story into the homepage with restraint.
   - Focus on warmth, service, and “guests as friends” tone.
   - Avoid exploitative grief language or overlong biography.

5. **Live lounge support section**
   - Treat live music as a dining/lounge enhancement, not the whole brand.
   - Confirm Wednesday–Saturday vs. Tuesday–Saturday schedule conflict before publishing.

6. **Visit / reserve close**
   - Repeat Reserve, Private Dining, Menu, Call, Directions.
   - Include address, phone, hours, provider handoffs, and socials cleanly.
   - Mobile sticky CTA should prioritize Reserve / Call / Directions, with Private Dining or Menu as available.

### Visual direction

- Dark charcoal / oxblood / warm ivory / muted gold palette.
- Oversized serif hero with refined sans-serif support text.
- Symmetrical or near-symmetrical above-fold composition.
- Cinematic steak, wine, dining room, lounge, and private-room imagery where rights are confirmed.
- Minimal animation; use slow reveals and tasteful section transitions only if they reinforce premium calm.
- Avoid casual rounded-card stacks, bright gradients, playful collage, generic steak stock imagery, or SaaS-style spacing.

### Copy direction

Use language like:

- “Classic Schaumburg steakhouse dining.”
- “Reserve dinner, plan a private event, or explore the menu.”
- “Prime steaks, seafood, wine, and hospitality made for celebrations.”
- “Private rooms for corporate dinners, milestones, and gatherings.”

Avoid language like:

- “Best steakhouse in Chicago” unless owner-approved and sourced.
- “Award-winning” unless exact owner-approved award wording is available.
- Fake review counts, star ratings, room capacities, live-music schedules, menus, delivery links, or private-dining policies.
- Generic luxury filler such as “where elegance meets flavor” unless grounded in real Chicago Prime details.

## Required builder constraints

- Do not publish as build-ready until MC lead seeding/canonical workflow provisioning, founder approval, and owner/currentness confirmations are available.
- Do not contact the restaurant from this artifact.
- Do not use raw Supabase mutations for agency state.
- Do not invent awards, ratings, review snippets, live schedules, room capacities, menu items, policy details, or image rights.
- Preserve official contact/reservation/social/menu facts unless owner confirmation corrects them.
- Keep review-derived content as internal direction unless exact sourced/public placement is approved.
- If no authorized restaurant photography is available, mark imagery placeholders internally and avoid implying final photo ownership.

## MC writeback payload expectation

When protected MC agency auth is restored and the lead/root workflow exists, write the routing result to the canonical routing child task and root metadata:

```json
{
  "build_stage": "routing",
  "currentStage": "routing",
  "template_slug": "Heaven Palate",
  "archetype": "Heaven Palate",
  "routing_artifact": "restaurant-website-system/sites/chicago-prime-steakhouse/routing-template-decision-2026-05-07.md",
  "rationale_summary": "Use Heaven Palate for a classic luxury, reservation-first Schaumburg steakhouse site built around Reserve, Private Dining, steak/seafood/wine proof, live lounge support, and George Kalkounos hospitality legacy."
}
```

## Routing verdict

**Heaven Palate is locked.** It is the only archetype that matches Chicago Prime Steakhouse’s classic steakhouse category, reservation-led conversion path, private-event revenue, service/occasion proof, and mature hospitality legacy. The future build should feel like a polished Schaumburg fine-dining institution with a clean Reserve / Private Dining / Menu / Directions path, not a generic restaurant template, casual ordering page, nightlife site, or overdesigned editorial concept.
