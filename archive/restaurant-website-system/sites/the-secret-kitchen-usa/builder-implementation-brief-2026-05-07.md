# The Secret Kitchen USA — builder implementation brief

- Date: 2026-05-07
- Canonical intent: future `building` / Round 2 implementation brief
- Build status: **not build-authorized yet**
- Required route: **Bamzi**
- `template_slug`: `Bamzi`
- Current blocker: protected Mission Control agency API returns `401`; founder approval, owner confirmations, MC lead row, and canonical root/child workflow provisioning are still pending.

This brief is designed so a builder can execute quickly once the MC/owner gates clear. It is **not** permission to publish or contact the restaurant.

## Inputs used

- Official-site audit: `restaurant-website-system/sites/the-secret-kitchen-usa/audit-official-site-2026-05-07.md`
- Routing decision: `restaurant-website-system/sites/the-secret-kitchen-usa/routing-template-decision-2026-05-07.md`
- Build-readiness brief: `restaurant-website-system/sites/the-secret-kitchen-usa/research/build-readiness-menu-conversion-brief-2026-05-07.md`
- Google reviews packet: `restaurant-website-system/sites/the-secret-kitchen-usa/scrapes/google-reviews-highest-30-2026-05-07.md`
- Official homepage screenshot evidence:
  - `restaurant-website-system/sites/the-secret-kitchen-usa/evidence/official-site-home-desktop-full-2026-05-07.png`
  - `restaurant-website-system/sites/the-secret-kitchen-usa/evidence/official-site-home-mobile-full-2026-05-07.png`
- Official site text scrapes:
  - `restaurant-website-system/sites/the-secret-kitchen-usa/scrapes/official-site-home-text-2026-05-07.txt`
  - `restaurant-website-system/sites/the-secret-kitchen-usa/scrapes/official-site-menu-text-2026-05-07.txt`
  - `restaurant-website-system/sites/the-secret-kitchen-usa/scrapes/official-site-chef-text-2026-05-07.txt`
  - `restaurant-website-system/sites/the-secret-kitchen-usa/scrapes/official-site-about-text-2026-05-07.txt`
  - `restaurant-website-system/sites/the-secret-kitchen-usa/scrapes/official-site-contact-text-2026-05-07.txt`
  - `restaurant-website-system/sites/the-secret-kitchen-usa/scrapes/official-site-reservations-text-2026-05-07.txt`

## Objective

Build a cinematic, reservation-first modern Indian dining website that makes The Secret Kitchen USA feel like a Schaumburg destination and Chef Aanal Kotak’s U.S. debut — not a generic Indian restaurant landing page. The site must make a visitor want to reserve dinner, explore the menu, understand the chef/story, and get directions within seconds, especially on mobile.

The commercial goal is to give Ethan a premium, restaurant-specific preview he can sell with minimal explanation once the lead is approved and the owner confirmation gaps are resolved.

## Restaurant identity

The Secret Kitchen USA is a premium modern Indian dining restaurant in Schaumburg. Its strongest identity traits are:

- Chef-led credibility through Chef Aanal Kotak.
- Indian heritage + global flavors.
- Royal-kitchen inspiration and personally crafted spices.
- A U.S.-debut / international The Secret Kitchen presence story: India, Australia, Canada, USA.
- Jewel-toned, theatrical, elegant dining-room energy.
- A substantial menu with dramatic signature dishes, vegetarian breadth, non-veg mains, breads, desserts, and mocktails.
- A dinner-led reservation path rather than a takeout-first flow.

Tone should be modern, sensory, confident, and upscale. Avoid costume-like “royal” language, generic curry tropes, or SEO filler. The site should feel like a high-design dinner destination grounded in real public facts.

## Primary conversion goals

1. **Reserve a table** — primary CTA. Use the official GetSeat reservation path unless owner confirms a different or additional path:
   `https://getseat.net?channel=merchant_web#/public/online/reservation/8G2AG247`
2. **Explore the menu** — secondary CTA. Use real menu categories and preserve a link to the full official menu.
3. **Get directions / plan the visit** — address and directions need to be easy on desktop and mobile.
4. **Call / email** — preserve phone and email, especially in the visit/footer module.
5. **Build chef/story trust** — explain why this is a special dinner choice, not just a nearby restaurant.
6. **Group/celebration interest** — include only careful language until private dining/banquet details are confirmed.

Do not create delivery/order CTAs unless the owner confirms an approved ordering path. Google showed an order-online surface, but this brief does not authorize adding an ordering provider link.

## Must preserve from old site / live business

Preserve these unless owner confirmation corrects them:

- Business name: The Secret Kitchen USA / The Secret Kitchen.
- Official site: https://thesecretkitchenusa.com/
- Address: 1411 W Schaumburg Rd, Schaumburg, IL 60194.
- Phone: `+16306352854` / `(630) 635-2854`.
- Email: `info@thesecretkitchenusa.com`.
- Hours: 5:30 PM–10:30 PM, all days.
- Reservation path: `https://getseat.net?channel=merchant_web#/public/online/reservation/8G2AG247`.
- Instagram: `thesecretkitchen.official.usa`.
- Facebook profile: `61578469689809`.
- Chef/founder identity: Chef Aanal Kotak.
- Official positioning: Indian heritage + global flavors; “Those who dine beyond ordinary”; “Flavors of the World / From India to America.”
- Official chef story: Chef Aanal personally creates spices for The Secret Kitchen; inspiration from royal kitchens.
- Official presence: India, Australia, Canada, USA.
- Menu breadth: Hot Bar, Indian Street Food, First Plate, Indo-Chinese, World Cuisine, Main Plate Veg, Main Plate Non-Veg, Sweet Plate, Traditional Platter, Junior Plate, Comfort Plate, Bread Bar.

Also preserve real public proof themes from Google Reviews internally: elegant decor, elevated presentation, flavorful food, avocado dahi puri, lamb chops, butter chicken, tandoori prawns, lamb shank, Chettinad-style curry, gulab jamun, mocktails, vegetarian selection, attentive service, and memorable dinner experience.

## Design direction

Use **Bamzi** as the single base archetype.

### Overall rhythm

- Dark-to-light-to-dark narrative pacing.
- Poster-like hero.
- Editorial two-column chef/story section.
- High-drama menu journey.
- Visual rhythm breaks for dining room / global story / dessert theatre.
- Strong final reserve/visit block.

### Visual system

- Palette: deep teal, emerald, crimson, brass/gold accents, warm ivory, charcoal.
- Typography: cinematic serif or editorial display for hero/headlines; clean readable body type.
- Layout: avoid generic rounded SaaS cards; use editorial panels, split sections, inset image frames, and deliberate negative space.
- Imagery: use owner-approved restaurant/food/interior imagery when available. If image rights are not confirmed, use clearly replaceable placeholders and do not imply false photo ownership.
- The site should feel rich and cinematic, but not cluttered or faux-palace themed.

### Homepage section order

1. **Hero / Reserve poster**
   - Headline direction: “Modern Indian fine dining arrives in Schaumburg.”
   - Subhead direction: Chef Aanal Kotak, Indian heritage, global flavors, dinner beyond ordinary.
   - CTAs: Reserve Now, Explore Menu, Directions.
   - Include hours/address close to the CTA.

2. **Chef Aanal story**
   - Handmade spices, royal-kitchen inspiration, global The Secret Kitchen presence.
   - Keep claims exact and sourced.

3. **Signature menu journey**
   - Chaptered menu, not a giant item list.
   - Include a full menu link.

4. **Dining-room / experience section**
   - Jewel-toned dining, celebrations, date nights, group dinners, photo-moment energy.
   - Keep private dining careful until confirmed.

5. **Social proof / review themes**
   - Use review themes internally to shape copy.
   - Do not publish rating numbers or direct review claims unless explicitly approved and sourced.

6. **Visit / reserve close**
   - Address, directions, phone, email, hours, GetSeat CTA, socials.

## Copy direction

Copy should be specific, restrained, and sensory.

Use phrasing like:

- “Modern Indian fine dining arrives in Schaumburg.”
- “Chef Aanal Kotak brings Indian heritage, handmade spice craft, and global flavors to the table.”
- “Reserve dinner, explore the menu, and plan your visit.”
- “A cinematic dinner built around bold spices, elegant presentation, and a menu made for celebration.”
- “From street-food inspiration to royal mains and tableside dessert theatre.”

Avoid:

- “Best Indian near me.”
- “Authentic curry and biryani.”
- “Award-winning” unless exact owner-approved wording exists.
- “Private dining available” unless details are confirmed.
- Fake rating/review counts.
- Generic luxury copy that could fit a steakhouse or hotel restaurant.

## Menu direction

The menu must feel abundant without becoming a wall of items.

### Required menu architecture

- **Street food reimagined**
  - Avocado Dahi Puri
  - Parmesan Cheese Pav Bhaji
  - The Dhokla Fondue
- **First plates / tandoor drama**
  - Thecha Paneer Tikka
  - Tandoor Ke Phool
  - Punjabi Kukkad Tikka
  - Nawabi Lamb Chop Tajdar / lamb chops where current naming is confirmed
- **Royal mains / global comfort**
  - Burrata Cheese Makhani
  - #TSKFIED Butter Chicken Delhi Style
  - Nalli Gosht Ki Nihari
  - Awadhi Gosht Biryani
- **Sweet theatre**
  - Gulab Jamun Flambé
  - Kesar Mango Rasmalai
  - Sizzling Brownie with Chocolate Sauce
  - Chef Aanal’s Autograph Dessert
- **Bread / comfort / family support**
  - Bread Bar, Comfort Plate, Junior Plate, Traditional Platter represented as supporting navigation or menu links.

### Menu rules

- Preserve the full-menu path.
- Do not publish prices unless owner confirms the captured menu/prices are current and approved for the preview.
- Do not underrepresent vegetarian breadth.
- Do not invent dishes or rename items beyond light presentation headings.
- Avoid a menu UI that hides the actual food behind vague category names.

## Animation and interaction direction

Use motion to create premium pacing, not to distract.

- Hero: subtle image fade/parallax or text reveal; no slow blocking animation before CTAs are usable.
- Menu: horizontal rhythm or chapter reveal is okay if categories remain readable and accessible.
- Chef story: elegant reveal or split-image transition.
- Reserve CTA: always immediately clickable; never hidden behind animation.
- Mobile: reduce motion, prioritize speed and tap clarity.
- Avoid gimmicky spice particles, random gradients, overactive hover effects, or scroll-jacking.

## Mobile requirements

Mobile is a primary sellability surface.

- Above the fold must show restaurant identity + Reserve/Menu/Directions path.
- Sticky mobile CTA must include Reserve and either Menu/Call/Directions.
- No large empty bands.
- No cropped category labels.
- Body text must be readable without zooming.
- Buttons must be thumb-friendly.
- Visit details must be tap-friendly: call, email, directions, reservation.
- Menu chapters must stack cleanly and avoid horizontal overflow.
- Keep page weight mindful; image-heavy cinematic design cannot become slow or unusable.

## Exact fix checklist

1. Build from **Bamzi** only; do not blend archetypes.
2. Create a dark cinematic hero with Reserve Now, Explore Menu, and Directions above the fold.
3. Add a sticky mobile CTA bar with Reserve plus Menu/Call/Directions.
4. Move Chef Aanal’s story into the homepage’s first major content section.
5. Explain handmade spices and royal-kitchen inspiration using sourced language only.
6. Add a chaptered menu journey with at least four clear menu chapters.
7. Include a persistent full-menu link from the menu journey.
8. Build a strong visit module with hours, address, phone, email, reservation, and directions.
9. Preserve the official GetSeat reservation URL exactly unless owner confirms a change.
10. Preserve official phone, email, address, Instagram, and Facebook links.
11. Use review evidence only as internal proof direction unless public usage is approved.
12. Add a photo-rights-safe image plan: approved assets first, replaceable placeholders second, no false ownership.
13. Keep private dining / banquet language cautious until capacities and policies are confirmed.
14. Do not add delivery/order CTAs unless an approved provider path is confirmed.
15. Do not publish award/press claims without exact owner-approved wording and usage rights.
16. Replace the current menu-carousel weakness with readable, premium menu cards or editorial chapters.
17. Tighten mobile spacing and type size so the page feels premium and fast.
18. Add final QA checks for all links: reservation, menu, phone, email, directions, Instagram, Facebook.
19. Confirm no fake review count, fake rating, fake availability, fake private-room name, fake capacity, or fake ordering path appears anywhere.
20. Before Ethan sees it, run desktop/mobile screenshots and a link check and save evidence to the site folder.

## Required confirmations before public build / owner-facing preview

- Founder approval to seed/provision in MC and proceed with this lead.
- Whether speculative pre-MC preview work is allowed, if MC remains blocked.
- Owner-approved photo rights for dining room, exterior, bar, food, desserts, Chef Aanal, and photo moments.
- Exact preferred U.S. brand name.
- Current menu/prices and whether captured menu content is safe to publish.
- GetSeat reservation path currentness and exclusivity.
- Private dining/banquet availability, capacities, minimums, policies, and inquiry flow.
- Awards/recognition claims and logo/name permissions.
- Lunch status — planned, active, or omit entirely.
- Vegetarian/vegan/non-vegetarian homepage positioning.
- Preferred pitch angle: U.S. debut, reservations, chef authority, menu storytelling, private dining, or mobile conversion.

## Do not regress

- Do not lose the real contact/reservation utility from the official site.
- Do not flatten the concept into generic Indian food copy.
- Do not hide the menu depth.
- Do not bury the chef story.
- Do not create a beautiful site that is harder to reserve from.
- Do not use stock imagery as if it is restaurant-owned.
- Do not make mobile feel like an afterthought.

## Sell-ready bar

Before Ethan sees a preview, all of these must be true:

- The site clearly feels like The Secret Kitchen USA, not a generic premium restaurant.
- Bamzi structure is obvious: cinematic hero, story pacing, menu drama, strong reserve close.
- Reservation, menu, phone, directions, and socials are correct and tested.
- Mobile has a visible conversion path without scrolling deep into the page.
- The menu journey makes the restaurant feel abundant and specific without overwhelming the homepage.
- Every factual claim is sourced or owner-confirmed.
- No unapproved ratings, reviews, awards, private dining details, capacities, press usage, or photo claims appear.
- Screenshots, link-check output, and build/test evidence are saved locally and ready for MC attachment.

## MC/build gate status

This brief can be attached to the future building child task after MC auth and workflow provisioning are restored. Until then:

- Do not use raw Supabase mutations.
- Do not mark the building gate complete.
- Do not publish owner-facing work from this brief.
- Continue only with local, truth-safe preparation unless Ethan explicitly approves speculative preview build work.
