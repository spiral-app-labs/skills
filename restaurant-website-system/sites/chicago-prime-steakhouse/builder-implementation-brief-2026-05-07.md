# Chicago Prime Steakhouse — builder implementation brief

- Date: 2026-05-07
- Canonical intent: future `building` / Round 2 implementation brief
- Build status: **not build-authorized yet**
- Required route: **Heaven Palate**
- `template_slug`: `Heaven Palate`
- Current blocker: protected Mission Control agency API returns `401`; founder approval, owner confirmations, MC lead row, canonical root/child workflow provisioning, and Heaven Palate implementation-source mapping are still pending.

This brief is designed so a builder can execute quickly once the MC/owner gates clear. It is **not** permission to publish, contact the restaurant, or start an owner-facing preview.

## Inputs used

- Official-site audit: `restaurant-website-system/sites/chicago-prime-steakhouse/audit-official-site-2026-05-07.md`
- Routing decision: `restaurant-website-system/sites/chicago-prime-steakhouse/routing-template-decision-2026-05-07.md`
- Build-readiness seed brief: `restaurant-website-system/sites/chicago-prime-steakhouse/research/build-readiness-seed-brief-2026-05-07.md`
- Google Reviews packet: `restaurant-website-system/sites/chicago-prime-steakhouse/scrapes/google-reviews-highest-30-2026-05-07.md`
- Pending MC routing payload: `restaurant-website-system/sites/chicago-prime-steakhouse/mc-payloads/mc-routing-writeback-pending-2026-05-07.json`
- Official homepage screenshot evidence:
  - `restaurant-website-system/sites/chicago-prime-steakhouse/evidence/official-site-home-desktop-full-2026-05-07.png`
  - `restaurant-website-system/sites/chicago-prime-steakhouse/evidence/official-site-home-mobile-full-2026-05-07.png`
- Google Reviews screenshot evidence:
  - `restaurant-website-system/sites/chicago-prime-steakhouse/evidence/google-reviews-highest-header-2026-05-07.png`
  - `restaurant-website-system/sites/chicago-prime-steakhouse/evidence/google-reviews-highest-bottom-2026-05-07.png`
- Official site text scrapes:
  - `restaurant-website-system/sites/chicago-prime-steakhouse/scrapes/official-site-home-text-2026-05-07.txt`
  - `restaurant-website-system/sites/chicago-prime-steakhouse/scrapes/official-site-menu-text-2026-05-07.txt`
  - `restaurant-website-system/sites/chicago-prime-steakhouse/scrapes/official-site-contact-text-2026-05-07.txt`
  - `restaurant-website-system/sites/chicago-prime-steakhouse/scrapes/official-site-private-dining-text-2026-05-07.txt`
  - `restaurant-website-system/sites/chicago-prime-steakhouse/scrapes/official-site-live-entertainment-text-2026-05-07.txt`
  - `restaurant-website-system/sites/chicago-prime-steakhouse/scrapes/official-site-legacy-text-2026-05-07.txt`
  - `restaurant-website-system/sites/chicago-prime-steakhouse/scrapes/official-site-special-events-text-2026-05-07.txt`

## Objective

Build a classic, reservation-first steakhouse website that makes Chicago Prime Steakhouse feel like a polished Schaumburg fine-dining institution, not a template site with bakery leftovers. The commercial goal is to help Ethan sell a redesign that visibly removes trust leaks, elevates Reserve + Private Dining as the money path, preserves real business utility, and presents the restaurant’s steakhouse atmosphere, service, private rooms, live lounge, and George A. Kalkounos hospitality legacy with mature confidence.

The future site must make three actions obvious within seconds: reserve dinner, inquire about private dining, and plan the visit. Everything else should support those actions without competing with them.

## Restaurant identity

Chicago Prime Steakhouse is a family-owned prime steakhouse in Schaumburg, positioned against an “ocean of national chain restaurants” in the Northwest Suburbs. It is fine-dining enough to justify a classic luxury presentation, but it should not feel cold, snobby, or corporate.

Mandatory identity traits:

- Classic Schaumburg steakhouse / fine-dining institution.
- Family-owned and hospitality-led rather than chain-like.
- Prime steaks, seafood, chops, wine/cocktails, and a covered patio/lounge experience.
- Private dining and events as a major revenue line.
- Live lounge entertainment as a supporting differentiator.
- Service, warmth, and personal touch as proof themes.
- George A. Kalkounos legacy: immigrant hospitality story, culinary/hospitality mentorship, guests treated as friends, and a restaurant-family tone.

Tone should be polished, warm, grounded, and confident. Avoid fake old-money luxury, generic “elegance meets flavor” copy, and any language that turns the legacy story into melodrama.

## Primary conversion goals

1. **Reserve a table** — primary CTA. Use official OpenTable reservation path unless owner confirms a different path:
   `https://secure.opentable.com/chicago-prime-steakhouse-reservations-schaumburg?restref=36475`
2. **Request private dining / events information** — second-priority CTA. Use `events@chicagoprimesteakhouse.com`, phone, and a private-dining inquiry path once confirmed.
3. **Explore menu / menus** — preserve official menu access and turn menu categories into a premium steakhouse journey.
4. **Call / directions / visit planning** — phone, address, hours, map/directions must be easy on desktop and mobile.
5. **Order-online handoffs** — preserve Uber Eats, Grubhub, and Toast only as lower-priority utility links. Do not let delivery compete with reservations/private dining.
6. **Gift cards / club / socials** — keep as footer or secondary navigation utilities, not homepage distractions.

## Must preserve from old site / live business

Preserve these unless owner confirmation corrects them:

- Business name: Chicago Prime Steakhouse.
- Official site: https://www.chicagoprimesteakhouse.com/
- Address: 1444 E. Algonquin Road, Schaumburg, IL 60173.
- Phone: `847.969.9900`.
- Dining room hours snapshot: Monday–Saturday 3PM–10PM; Sunday 3PM–9PM.
- Reservation path: `https://secure.opentable.com/chicago-prime-steakhouse-reservations-schaumburg?restref=36475`.
- Private dining email: `events@chicagoprimesteakhouse.com`.
- General/contact email appears as `dine@chicagoprimesteakhouse.com` in source; confirm before using as a general contact address.
- Private dining room/capacity snapshot: Main Dining Room 130, Bar & Lounge 80, Walnut & State Room 85, Walnut Room 32, State Room 35.
- Live lounge music snapshot: live music Wednesday–Saturday 7PM–11PM on the live entertainment page; private dining scrape says Tuesday–Saturday, so currentness must be confirmed.
- Order-online provider handoffs: Uber Eats, Grubhub, Toast.
- Private dining policy details exist but should live below the sell section or on a detail page: deposit, tax, final count, cake fee, outside-food rule, menu changes, food/beverage minimum.
- George A. Kalkounos page and scholarship/legacy story.
- “Family-owned Prime Steakhouse in the Northwest Suburbs” positioning from the current homepage.
- Review proof themes from the Google packet: attentive staff, live entertainment, birthdays/celebrations, steak/seafood, wine, owner/staff hospitality, group/private occasions, inviting atmosphere.

Also preserve what is currently useful even if the current site is messy: Reserve, Call, Menu, Private Events, Special Events, Live Entertainment, Gift Card, Millionaire’s Club, Contact, social/provider links, and directions.

## Design direction

Use **Heaven Palate** as the single base archetype.

### Overall rhythm

- Dark classic-luxury hero.
- Calm steakhouse craft / atmosphere section.
- Premium private dining/events section.
- Menu journey with steak/seafood/wine/lounge chapters.
- Legacy/hospitality section handled with restraint.
- Live lounge as a supporting mood break.
- Visit/reserve close with clean utility.

### Visual system

- Palette: deep charcoal, oxblood, espresso, warm ivory, muted gold/brass accents.
- Typography: large elegant serif for hero/headlines; refined readable sans-serif for body and utility details.
- Layout: symmetrical or near-symmetrical above fold; strong margins; confident editorial image blocks; no crowded CTA rows.
- Texture: subtle grain, linen, leather, brass, or low-contrast divider treatments are acceptable if they stay premium.
- Imagery: prioritize owner-approved steak, wine, bar/lounge, dining room, private room, exterior, patio, and legacy images. If rights are not confirmed, use clearly replaceable placeholders and label them internally.
- Avoid: generic steak stock, casual rounded cards everywhere, bright gradients, playful collage, SaaS spacing, nightclub styling, and animation-heavy gimmicks.

### Homepage section order

1. **Hero / Reserve + Private Dining**
   - Headline direction: “Chicago Prime Steakhouse” with a refined subline like “Classic Schaumburg steakhouse dining, private events, and hospitality made for celebration.”
   - Primary CTA: Reserve a Table.
   - Secondary CTA: Private Dining.
   - Supporting links: Menu, Directions, Call.
   - Show address and hours close to CTA.

2. **Steakhouse craft / dining room atmosphere**
   - Position steaks, seafood, chops, wine/cocktails, service, and family-owned difference.
   - Avoid unsupported “best” claims.

3. **Menu journey**
   - Chaptered modules: Steaks & Chops, Seafood & Classics, Wine/Cocktails, Lounge/Patio, Desserts or Specials if confirmed.
   - Preserve full menu/PDF access.

4. **Private dining / events**
   - Sell celebrations, corporate dinners, rehearsal dinners, and group dining first.
   - Room names/capacities can be shown only if marked as source-captured and pending confirmation or after owner confirms.
   - CTA: Request Private Dining / Email Events / Call.

5. **Legacy / hospitality**
   - Short, respectful section about George A. Kalkounos, the restaurant family, hospitality mentorship, and guests-as-friends.
   - Link to the full legacy/scholarship page if retained.

6. **Live lounge / patio support**
   - Use as a mood/occasion section: dinner can continue into the lounge; live music supports the evening.
   - Do not publish a schedule until confirmed.

7. **Visit / reserve close**
   - Repeat Reserve, Private Dining, Menu, Call, Directions.
   - Footer: address, hours, phone, event email, reservation link, order providers, socials, gift cards/club, copyright once.

## Copy direction

Copy should sound like a real Schaumburg steakhouse with warmth and confidence.

Use phrasing like:

- “Classic Schaumburg steakhouse dining.”
- “Prime steaks, seafood, wine, and hospitality made for celebration.”
- “Reserve dinner, plan a private event, or explore the menu.”
- “A family-owned steakhouse in the Northwest Suburbs, built on service and personal touch.”
- “Private rooms for corporate dinners, milestones, and gatherings.”
- “Live lounge music and a covered patio round out the evening.”

Avoid:

- “Best steakhouse in Chicago” unless owner-approved and sourced.
- “Award-winning” unless exact owner-approved award wording and source are available.
- Fake ratings, fake review counts, fake awards, fake room capacities, fake schedules, fake menus, or fake delivery paths.
- Generic luxury filler that could describe any steakhouse.
- Overly mournful or exploitative legacy language.
- Delivery-first or casual-takeout language above the fold.

### Review usage rule

The Google review packet may inform copy themes, but public usage needs approval. If approved, use exact sourced quotes only and keep the tone restrained. Do not paraphrase reviews as if they are testimonials unless the placement clearly traces to the captured source and final owner/founder approval exists.

## Menu direction

The current scrape does not expose full item-level menu content, so the future build must avoid inventing a detailed menu. Treat the homepage as a steakhouse journey and preserve official menu/PDF links until owner-approved menu data is available.

### Required menu architecture

- **Steaks & chops** — prime cuts, chops, steakhouse standards. Use category language unless specific items are confirmed.
- **Seafood & classics** — seafood, Chilean sea bass, calamari, lobster/mac references only if sourced from review/menu evidence and safe for public use.
- **Wine, cocktails & lounge** — wine selections, martinis, lounge drinks; avoid “award-winning wine” unless confirmed.
- **Private dining menus/packages** — Skyline / Millennium package labels exist in source, but details need confirmation before publishing.
- **Full menu access** — prominent link/button to the official menu/PDF/full-menu path.

### Menu rules

- Do not publish prices unless owner confirms the captured menu/prices are current and approved.
- Do not make up cuts, specials, sides, drinks, or desserts.
- Use review-derived dish themes internally only unless exact quote/source usage is approved.
- Keep menu cards appetite-building but fact-safe.
- Preserve provider/order links as utility, lower than Reserve/Private Dining.

## Animation and interaction direction

Use motion sparingly to create premium calm.

- Hero: subtle fade/slide reveal; Reserve CTA must be immediately visible and clickable.
- Imagery: slow image reveal or gentle parallax is acceptable; no scroll-jacking.
- Menu/private dining cards: simple hover/focus states, not playful flips or bouncy motion.
- Legacy section: restrained text/image reveal; no dramatic grief effects.
- Mobile: reduce motion and prioritize speed, tap clarity, and sticky actions.
- Accessibility: every animated interaction must have a static fallback and readable contrast.

## Mobile requirements

Mobile must be strong enough to sell from a phone.

- Above fold must show identity + Reserve + Private Dining/Menu + Call/Directions path.
- Sticky mobile action bar should prioritize Reserve, Call, Directions; optionally Menu or Private Dining depending on width.
- No empty bands, tiny utility links, broken carousels, or hidden CTAs.
- Menu/private dining cards must stack cleanly.
- Phone, email, directions, reservation, and provider links must be tap-friendly.
- Footer must not become a long undifferentiated link pile.
- Avoid oversized images that push Reserve below the first screen.
- Keep copy tight: steakhouse confidence, not paragraphs of generic fine-dining copy.

## Exact fix checklist

1. Build from **Heaven Palate** only; do not blend in Bamzi/Bramble/Cuisine/Roma/Qitchen section logic.
2. Create a dark classic-luxury hero with Reserve a Table and Private Dining above the fold.
3. Add address, hours, phone, and directions close to the hero CTA.
4. Make Reserve the primary CTA across desktop and mobile.
5. Make Private Dining the second-priority CTA, not a buried navigation item.
6. Preserve OpenTable reservation URL exactly unless owner confirms a replacement.
7. Preserve `events@chicagoprimesteakhouse.com` for private dining and confirm any general email before using it.
8. Remove all template residue: bakery copy, `555-555-55-55`, slash placeholders, carousel placeholders, duplicated copyright.
9. Replace the review carousel with either approved sourced quotes or a proof-theme section without fake testimonials.
10. Create a premium private dining section around occasions and rooms; keep capacities marked pending confirmation unless owner-approved.
11. Add a respectful George A. Kalkounos legacy section with a link to the full story/scholarship page if retained.
12. Treat live lounge music as an enhancement and do not publish schedule details until the Tuesday-vs-Wednesday conflict is resolved.
13. Build a menu journey around steaks/chops, seafood/classics, wine/cocktails, lounge/patio, and full-menu access without invented item detail.
14. Keep Uber Eats, Grubhub, and Toast lower in hierarchy than Reserve/Private Dining.
15. Add a sticky mobile action bar with Reserve, Call, and Directions; consider Menu/Private Dining as a fourth action if space allows.
16. Use owner-approved photography first; if unavailable, use replaceable placeholders and avoid implying final photo ownership.
17. Make footer conversion-safe: address, hours, phone, event email, reservation, private dining, directions, socials, order providers, copyright once.
18. Run link checks for OpenTable, menu, phone, directions, event email, order providers, gift cards/club, socials, and contact paths.
19. Run desktop/mobile screenshot QA before Ethan sees the preview.
20. Confirm no fake award, rating, review count, menu item, room capacity, schedule, image-rights claim, or ordering path appears anywhere.
21. If Heaven Palate does not exist as an active local template directory, stop before implementation and resolve the source/template mapping with Ethan/MC rather than improvising from a different archetype.
22. Do not publish or share owner-facing until MC provisioning, founder approval, and owner/currentness confirmations are resolved.

## Required confirmations before public build / owner-facing preview

- Founder approval to seed/provision this lead in MC and proceed.
- Whether speculative internal preview work is allowed while MC auth remains blocked.
- Owner-approved photo rights for exterior, dining room, bar/lounge, patio, private rooms, food, wine/cocktails, and legacy imagery.
- Current hours.
- Current OpenTable/reservation URL and exclusivity.
- Current menu/PDF/full-menu path and whether any item-level menu content/prices can be shown.
- Private dining room names, capacities, packages, policies, inquiry form, and `events@...` use.
- Live entertainment schedule: Wednesday–Saturday vs. Tuesday–Saturday.
- Use of “award-winning” and any award/wine-selection claims.
- Use of Google rating/review count or exact review snippets.
- Preferred tone for George A. Kalkounos legacy story.
- Current provider links for Uber Eats, Grubhub, Toast, gift cards, club, socials, and directions.
- Heaven Palate implementation source/template mapping if no active local template directory exists.

## Do not regress

- Do not lose the real OpenTable reservation utility.
- Do not bury private dining again.
- Do not turn the steakhouse into a delivery/order-first site.
- Do not flatten the family-owned/local institution story into generic luxury copy.
- Do not hide address, phone, hours, or directions.
- Do not carry over any bakery/template placeholders.
- Do not publish review/award claims without source and approval.
- Do not make mobile a compressed afterthought.

## Sell-ready bar

Before Ethan sees the site, it must feel unmistakably like Chicago Prime Steakhouse: a classic Schaumburg steakhouse with warm service, private dining, live lounge atmosphere, and a serious Reserve / Private Dining conversion path. A visitor should never see template residue, fake claims, or confusing CTA clutter. The preview should make the current-site problem obvious in one comparison: the old site has real assets but feels unfinished; the new site turns those assets into a premium, trustworthy, mobile-strong experience Ethan can sell.

## Builder stop conditions

Stop and ask for direction before implementation if any of these remain unresolved:

- MC canonical workflow is not provisioned and Ethan has not approved speculative internal preview work.
- Heaven Palate cannot be mapped to an actual buildable source/template.
- Reservation/private-dining provider paths cannot be verified.
- Required imagery would force fake restaurant-owned photos.
- The build would require publishing awards, ratings, capacities, menu details, or schedules that have not been confirmed.
