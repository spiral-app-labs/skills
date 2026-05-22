# The Secret Kitchen USA — template routing decision

- Date: 2026-05-07
- Canonical gate: `routing`
- Decision: **Bamzi**
- `template_slug`: `Bamzi`
- Status: route-ready locally; pending MC attach/writeback because protected Mission Control agency API still returns `401` and the lead/root workflow still needs founder approval + provisioning.

## Source evidence

- Build-readiness brief: `restaurant-website-system/sites/the-secret-kitchen-usa/research/build-readiness-menu-conversion-brief-2026-05-07.md`
- Official-site audit: `restaurant-website-system/sites/the-secret-kitchen-usa/audit-official-site-2026-05-07.md`
- Google reviews packet: `restaurant-website-system/sites/the-secret-kitchen-usa/scrapes/google-reviews-highest-30-2026-05-07.md`
- Official site screenshots:
  - `restaurant-website-system/sites/the-secret-kitchen-usa/evidence/official-site-home-desktop-full-2026-05-07.png`
  - `restaurant-website-system/sites/the-secret-kitchen-usa/evidence/official-site-home-mobile-full-2026-05-07.png`
- Official text scrapes:
  - `restaurant-website-system/sites/the-secret-kitchen-usa/scrapes/official-site-home-text-2026-05-07.txt`
  - `restaurant-website-system/sites/the-secret-kitchen-usa/scrapes/official-site-menu-text-2026-05-07.txt`
  - `restaurant-website-system/sites/the-secret-kitchen-usa/scrapes/official-site-chef-text-2026-05-07.txt`
  - `restaurant-website-system/sites/the-secret-kitchen-usa/scrapes/official-site-about-text-2026-05-07.txt`
  - `restaurant-website-system/sites/the-secret-kitchen-usa/scrapes/official-site-contact-text-2026-05-07.txt`
  - `restaurant-website-system/sites/the-secret-kitchen-usa/scrapes/official-site-reservations-text-2026-05-07.txt`

## Restaurant profile

The Secret Kitchen USA is a premium modern Indian dining restaurant in Schaumburg led by Chef Aanal Kotak. Its public identity is built around Indian heritage, global flavors, royal-kitchen inspiration, handmade spices, a U.S.-debut story, and a dramatic dinner experience. The official site and reviews both point toward an upscale, destination-style dinner conversion path: reserve a table, understand the menu, trust the chef/story, and arrive confidently.

Confirmed public facts to preserve unless the owner corrects them:

- Official site: https://thesecretkitchenusa.com/
- Address: 1411 W Schaumburg Rd, Schaumburg, IL 60194
- Phone: `+16306352854` / `(630) 635-2854`
- Email: `info@thesecretkitchenusa.com`
- Hours: 5:30 PM–10:30 PM, all days
- Reservation path: `https://getseat.net?channel=merchant_web#/public/online/reservation/8G2AG247`
- Instagram: `thesecretkitchen.official.usa`
- Facebook profile: `61578469689809`
- Official presence language: India, Australia, Canada, USA
- Chef story: Chef Aanal Kotak personally creates spices for The Secret Kitchen; inspired by royal kitchens and modern experimentation.

## Final archetype decision: Bamzi

Use **Bamzi** as the one structural base.

### Why Bamzi fits

1. **The concept needs cinematic emotional pacing.** The restaurant’s strongest identity cues are theatre, jewel tones, chef story, international journey, tableside/dessert drama, and destination dining. Bamzi’s dark-to-light-to-dark rhythm can make those cues feel intentional instead of fragmented.
2. **The primary conversion is premium reservation, not fast casual ordering.** Bamzi can keep a strong Reserve CTA visible while still pacing the story around chef, menu, dining room, and visit details.
3. **The menu needs editorial curation.** The official menu is large and valuable, but it should not become a long item dump. Bamzi supports chaptered menu storytelling: street food, tandoor/first plates, royal mains, comfort plates, sweet theatre, and bread bar.
4. **The public proof points are sensory and dramatic.** Reviews repeatedly praise ambiance, presentation, elevated Indian cuisine, mocktails, avocado dahi puri, lamb chops, butter chicken, tandoori prawns, gulab jamun, attentive service, and a memorable upscale experience.
5. **The current site already hints at poster-like drama.** It has dark atmosphere and elegant imagery, but under-converts. Bamzi lets the redesign preserve the mood while adding clearer hierarchy, better mobile CTAs, and sharper menu/chef storytelling.

## Archetypes rejected

### Roma — rejected

Roma is chef-driven and editorial, but it is too quiet and restrained for this concept. The Secret Kitchen USA is not a minimal seasonal bistro; it has maximalist interiors, royal-kitchen cues, global-spice language, theatrical dishes, and a high-drama U.S.-debut story. Roma would risk making the preview feel tasteful but underpowered.

### Heaven Palate — rejected

Heaven Palate could support premium reservations, but it is too classic-luxury/steakhouse/formal Italian for this restaurant. The Secret Kitchen needs modern Indian/global-spice drama, not generic gold-on-dark fine dining. Heaven Palate would flatten the restaurant’s cultural specificity and theatrical menu.

### Cuisine — rejected

Cuisine would help with menu clarity, but it is too warm/casual as the structural base. The restaurant is premium, dinner-led, and cinematic. Use Cuisine-like clarity only inside the menu/visit sections, not as the overall design system.

### Qitchen — rejected

Qitchen is too architectural/omakase-like. The Secret Kitchen has a rich story, broad menu, and conversion-heavy visit/reservation needs; it needs cinematic narrative pacing more than abstract viewport composition.

### Bramble — rejected

Bramble is for bars, taverns, cocktail lounges, and nightlife-led concepts. Mocktails and atmosphere matter here, but The Secret Kitchen is chef/menu/reservation-led modern Indian dining, not a bar-first brand.

## Bamzi implementation rules

### Structural rhythm

1. **Dark hero / reserve poster**
   - Centered, cinematic, dinner-destination framing.
   - Above-fold CTAs: Reserve Now, Explore Menu, Directions.
   - Keep address and dinner hours close to the hero CTA.

2. **Light or warm editorial chef section**
   - Chef Aanal Kotak, handmade spices, royal-kitchen inspiration, international The Secret Kitchen presence.
   - Avoid vague “award-winning” or press claims unless owner-approved and sourced.

3. **Dark / high-drama menu journey**
   - Curated chapters instead of a full item dump.
   - Feature real menu proof points from official scrape and review packet.
   - Always include a full-menu link.

4. **Dining room / visual identity break**
   - Jewel tones, brass/emerald/crimson, flamingo/onxy bar/interior cues where image rights are confirmed.
   - If images are placeholders, label them internally as replaceable; do not imply false photo ownership.

5. **Experience / occasions section**
   - Dinner dates, celebrations, group dinners, vegetarian/non-veg breadth.
   - Keep private dining cautious until capacity and policies are confirmed.

6. **Visit / reserve close**
   - Hours, address, phone, email, GetSeat CTA, directions.
   - Mobile sticky CTA: Reserve / Call / Directions or Reserve / Menu / Directions.

### Visual direction

- Dark teal / emerald / crimson / brass / warm ivory palette.
- Poster-like hero typography; elegant but not costume-like.
- Editorial two-column story sections.
- Marquee/rhythm-break moments only if they reinforce the U.S.-debut / global-spice narrative.
- Food/interior imagery should feel premium and restaurant-specific; avoid generic curry, spice bowl, naan, or stock-photo clichés.

### Copy direction

Use language like:

- “Modern Indian fine dining arrives in Schaumburg.”
- “Flavors of the world, from India to America.”
- “Chef Aanal Kotak’s royal-kitchen inspiration, handmade spices, and modern global approach.”
- “Reserve dinner, explore the menu, and plan your visit.”

Avoid language like:

- “Best Indian near me.”
- “Authentic curry and biryani restaurant.”
- “Award-winning” unless exact owner-approved award wording is available.
- “Private dining available” unless details are confirmed.
- Any fake rating, review count, capacity, delivery path, order path, or reservation alternative.

## Required builder constraints

- Do not publish as build-ready until MC lead seeding and canonical workflow provisioning exist, or Ethan explicitly approves a speculative pre-MC preview lane.
- Do not contact the restaurant from this artifact.
- Do not use raw Supabase mutations for agency state.
- Do not invent Google ratings, review snippets, awards, private-room details, capacities, press permissions, or reservation-provider alternatives.
- Preserve official contact/reservation/social/menu facts unless corrected by owner confirmation.
- Keep all review-derived content as internal direction unless explicit sourced/public placement is approved.

## MC writeback payload expectation

When protected MC agency auth is restored and the lead/root workflow exists, write the routing result to the canonical routing child task and root metadata:

```json
{
  "build_stage": "routing",
  "currentStage": "routing",
  "template_slug": "Bamzi",
  "archetype": "Bamzi",
  "routing_artifact": "restaurant-website-system/sites/the-secret-kitchen-usa/routing-template-decision-2026-05-07.md",
  "rationale_summary": "Use Bamzi for a cinematic, reservation-first modern Indian dining site built around Chef Aanal Kotak, royal-kitchen inspiration, global-spice menu theatre, jewel-toned interiors, and a Schaumburg U.S.-debut story."
}
```

## Routing verdict

**Bamzi is locked.** It is the only archetype that preserves the restaurant’s cinematic modern Indian identity while solving the current site’s conversion problems. The future build should feel like a dramatic dinner-destination story with a frictionless reserve/menu/directions path, not a generic Indian restaurant landing page and not a restrained fine-dining template.
