# Tekka Sushi — Template routing — 2026-05-08

## Route decision

**Chosen archetype:** **Qitchen**  
**Implementation template slug:** `qitchen-01`  
**Route status:** Locked locally; MC writeback pending build-route `tasks.blocked` fallback fix.

Tekka Sushi should use Qitchen because the restaurant is a modern sushi/Japanese concept where the sellable redesign must communicate precision, freshness, presentation, and visual trust. Google review evidence specifically supports Qitchen cues: fresh sushi/sashimi, beautiful presentation, chic/modern atmosphere, and attentive service. The current owned-site failure is menu credibility, so the redesign should make the real sushi/roll/ramen menu feel intentional and trustworthy.

## Important register guardrail

Tekka is **not** an omakase/ticketed fine-dining lead. Google Maps shows `$20–30 per person`, with dine-in, takeout, and delivery all active. So this is a **de-ceremonialized Qitchen fork**:

- Keep Qitchen’s clean architectural composition, precision, high-contrast food focus, and restrained motion.
- Do **not** use luxury/omakase/tasting-menu claims.
- Do **not** hide prices or rely on a single reservation CTA.
- Add order-forward and call/directions conversion paths.
- Let “modern sushi presentation + fresh sashimi + favorite rolls” carry the premium feel.

## Intake snapshot

- Cuisine: Japanese / sushi / ramen
- Service type: dine-in + takeout + delivery; reservation by phone
- Price point: `$20–30 per person` from Google Maps
- Atmosphere: modern/chic/pleasant; warm service; date-night and local regular potential
- Visual tone: precise, fresh, modern, photo-forward; not generic family casual
- Reservation/order intensity: order/takeout high, phone reservation/support, directions important
- Revenue model: multi-stream — dine-in, takeout, delivery, gift cards
- Day-part: lunch + dinner
- Destination vs neighborhood: both; reviews say worth driving to / new local favorite
- Photography tier: public photos exist; use only verified food/room images or neutral visual treatment until assets are sourced
- Primary conversion priorities: Order Online, View Real Menu, Call to Reserve, Directions

## Rejected alternatives

### `plate-01`
Rejected because it is a cuisine-agnostic modern neighborhood workhorse. Tekka needs sushi-specific precision, menu hierarchy, and image treatment. Plate would fix clarity but lose the high-design Japanese presentation opportunity.

### `bamzi-01`
Rejected because its trendy cinematic dark/light pacing and saturated personality would over-style the lead. Tekka’s proof points are freshness, presentation, clean service, and modern room — not nightlife or big narrative energy.

### `cuisine` / warm-family archetype
Rejected because the lead should not be softened into a generic neighborhood Japanese spot. The public proof supports modern/chic/elegant enough to justify Qitchen as long as the copy avoids omakase/luxury exaggeration.

## Modifiers

- Palette: deep charcoal / warm white / muted rice-paper neutral with restrained wasabi/seaweed accent; avoid neon or nightclub saturation.
- Typography: modern editorial sans + restrained display; avoid overly ceremonial Bodoni-only austerity.
- CTA system: persistent dual/multi CTA — **Order Online**, **View Menu**, **Call to Reserve**, **Directions**.
- Menu: category-stack or tabbed real menu; highlight signature rolls, sashimi/nigiri, ramen, lunch specials, platters, appetizers.
- Proof: use Google 4.8 / 370 reviews only with the captured packet; emphasize themes rather than fake testimonials.
- Gallery: food-first with room/atmosphere images only when verified; no stock identity.
- Motion: subtle precision transitions; no animation spam.
- Mobile: sticky bottom action bar for Order / Call / Directions.

## Required sections

1. Hero: Tekka Sushi, modern Japanese/sushi in Elk Grove Village; fresh sushi + roll presentation; primary CTAs.
2. Trust strip: Google 4.8 / 370 reviews, address, dine-in/takeout/delivery, current order path.
3. Signature rolls / favorites: Godzilla, Volcano, Spicy Crispy Tuna, Sweetheart, Alaska, Boston, Fire Phoenix where supported.
4. Real menu preview: rolls, sashimi/nigiri, ramen, lunch specials, platters.
5. Order + dine-in conversion: Beyond Menu / `tekkasushiil.com`, phone reservation, directions.
6. Review-theme proof: fresh sushi, beautiful presentation, chic atmosphere, friendly service.
7. Visit block: address, phone, verified hours caveat, map/directions.
8. Footer: no template residue; clean contact/order/social links.

## Avoid list

- Omakase, tasting-menu, Michelin, chef’s counter, or ticketed-dining language unless later verified.
- Fake menu items, fake prices, fake reviews, or fabricated owner quotes.
- Reusing the existing placeholder menu structure.
- Overly warm generic “family restaurant” copy.
- Single reservation CTA that ignores takeout/delivery.
- Stock sushi identity when real public menu/review cues exist.

## MC replay intent

When the MC build writeback route is fixed, replay these local requirements:

- `route-one-archetype`
- `template-route-locked`

Evidence paths:

- `restaurant-website-system/sites/tekka-sushi/routing/template-route-2026-05-08.md`
- `restaurant-website-system/sites/tekka-sushi/routing/template-route-2026-05-08.json`
- `restaurant-website-system/sites/tekka-sushi/google-reviews/google-reviews-highest-2026-05-08.json`
- `restaurant-website-system/sites/tekka-sushi/current-site-audit/audit-2026-05-08.md`
