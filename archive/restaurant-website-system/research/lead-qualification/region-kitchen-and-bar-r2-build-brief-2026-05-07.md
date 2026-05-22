# Region Kitchen and Bar — R2 Builder Brief

- Date: 2026-05-07T13:21Z
- Site slug: `region-kitchen-and-bar`
- Restaurant: Region Kitchen and Bar / Region
- Current site: `https://regionrestaurant.com/`
- Selected archetype: `roma`
- Canonical MC state: **not provisioned yet** — this is a local implementation brief to replay/attach once MC agency provisioning auth is available.
- Source evidence:
  - Lead validation: `restaurant-website-system/research/lead-qualification/region-kitchen-and-bar-seed-validation-2026-05-07.md`
  - R1 audit: `restaurant-website-system/research/lead-qualification/region-kitchen-and-bar-r1-current-site-audit-2026-05-07.md`
  - Current-site screenshots/DOM: `restaurant-website-system/research/lead-qualification/region-kitchen-and-bar-r1-current-site-audit-2026-05-07/`
  - Google review packet: `restaurant-website-system/research/lead-qualification/region-kitchen-and-bar-google-reviews-2026-05-07/region-google-reviews-highest-30-2026-05-07.md`
  - Google review insights: `restaurant-website-system/research/lead-qualification/region-kitchen-and-bar-google-reviews-2026-05-07/region-google-reviews-insights-2026-05-07.md`
  - OpenTable confirmation fetched 2026-05-07: `https://www.opentable.com/restaurant/profile/1017823?ref=1068`

## Objective

Build a sell-ready Roma-style redesign that makes Region feel like what public evidence says it already is: a chef-owned, polished Barrington dinner destination with serious food, warm service, strong cocktails, special-occasion fit, and private-event upside. The current site is operationally useful but commercially underpowered; the rebuild must turn reservations, private events, gift cards, online ordering, and menu exploration into clear revenue paths without inventing claims.

## Restaurant identity

Region is a contemporary American / seasonal, chef-driven restaurant in Barrington, IL. The tone should be polished, restrained, warm, and confident — not loud, clubby, generic, or steakhouse-formal. It should feel like an elevated neighborhood destination for:

- date nights
- birthdays and anniversaries
- dinner with close friends
- chef-driven seasonal dining
- cocktails and wine
- private dinners, rehearsal dinners, business dinners, social gatherings, patio gatherings, and full buyouts

Mandatory identity traits:

- Chef/owner Dave Perlick matters; his story should be part of the site.
- The menu is the proof. Use real dish names and menu category language.
- The atmosphere is refined but approachable: upscale, warm, conversation-friendly, and celebration-ready.
- Region is local/Barrington-specific, not a downtown Chicago clone and not a generic bar-and-grill.

## Primary conversion goals

Prioritize in this order:

1. **Reserve a table**
   - Use OpenTable as the primary reservation path if the profile is still active at build time: `https://www.opentable.com/restaurant/profile/1017823?ref=1068`.
   - Preserve phone fallback: `(224) 848-4005`.
   - Current official site is phone-first, so final QA must confirm whether OpenTable is approved/active before making it the only booking path.
2. **Private event inquiry**
   - Use `jperlick@regionrestaurant.com` as the direct inquiry path.
   - Sell capacities and occasions before the email handoff.
3. **Explore the menu**
   - Make menu categories readable and premium, especially on mobile.
4. **Order online / delivery**
   - Toast: `https://www.toasttab.com/region/v3`
   - Clean DoorDash/Uber Eats links must be verified before use; do not use safelinks-wrapped or duplicated URLs from the current site.
5. **Gift cards**
   - GiftRocker: `https://www.giftrocker.com/secure/order/?h=63539eaa`
6. **Directions / call / hours**
   - Address: `718 W. NW Highway, Barrington, IL 60010`
   - Hours: Tue–Thu `4:30 pm–9 pm`; Fri–Sat `4:30 pm–10 pm`; Sun `4:30 pm–9 pm`; Mon closed.

## Must preserve from old site / live business

- Name: Region Kitchen and Bar / Region.
- Address, phone, hours, and emails exactly as observed unless a newer source proves otherwise.
- Emails: `dperlick@regionrestaurant.com`, `jperlick@regionrestaurant.com`.
- Chef/owner Dave Perlick biography and local culinary arc.
- Current menu structure:
  - Field Small Plates
  - Stream Small Plates
  - Salad + Soup Plates
  - Field Large Plates
  - Stream Large Plates
  - Escorts / sides
  - Dessert and libations should remain represented from their current pages.
- Private-event facts:
  - groups of `15 to 170`
  - private dining room up to `40`
  - outside patio up to `30`
  - full restaurant buyouts up to `170`
- Revenue paths: reservations, online order, delivery, gift cards, private events, phone, directions, email.
- OpenTable facts fetched 2026-05-07: `4.9`, `3,010` reviews, `$31 to $50`, Contemporary American, casual elegant, booked `36` times today, good for special occasions/neighborhood gem/creative cocktails.
- Google Maps facts captured 2026-05-07: `4.8` stars, `699` reviews, 30 written highest-sorted reviews saved locally.

## Design direction

Use `roma` as the structural base: editorial, restrained, image-led, chef/menu-forward, and polished. Do not use generic “premium restaurant” styling.

Art direction:

- Palette: warm charcoal, deep espresso/brown, cream/parchment, muted brass/gold accents, restrained wine/burgundy if useful.
- Typography: refined editorial serif for hero/section titles, clean readable sans for body/menu items.
- Imagery: prioritize real food, dining room, bar, patio, and private-event imagery. If image quality is inconsistent, use tight crops, dark overlays, editorial frames, and menu-detail closeups rather than obvious generic stock.
- Layout rhythm: generous but intentional spacing. No empty gray bands. Every section should earn its height.
- Mood: special-occasion dinner in Barrington; polished but not stiff.

Homepage section order:

1. Hero: chef-owned seasonal American dining in Barrington, with Reserve / View Menu / Private Events CTAs.
2. Trust/proof strip: OpenTable/Google rating facts if allowed by final QA, hours, location, special-occasion fit.
3. Signature menu highlights: real dish names and categories.
4. Chef story: Dave Perlick and Region’s seasonal American point of view.
5. Reservations module: OpenTable + phone fallback + hours.
6. Private events module: capacity, occasions, room/patio/buyout options, inquiry CTA.
7. Cocktails/gift/order secondary revenue module.
8. Location/footer with phone, directions, hours, emails.

## Copy direction

The first screen must stop leading with carryout limitations. It should sell the dining room and the chef-driven menu first.

Suggested hero copy direction:

> Chef-driven seasonal American dining in Barrington.
>
> Region brings polished hospitality, inventive plates, and a warm dining room to the Northwest Suburbs — built for date nights, celebrations, and dinners worth lingering over.

Tone rules:

- Specific, confident, local, and food-aware.
- Use real dish names as proof instead of vague “fresh ingredients” language.
- Use “Barrington,” “seasonal American,” “chef-owned,” “special occasions,” “private events,” “patio,” and “cocktails” only where supported by evidence.
- Avoid direct Google/OpenTable review quotes unless approved.
- Avoid staff names in final public copy unless approved by the restaurant.
- No fake awards, fake press, fake numbers, fake testimonials, or fake booking claims.

## Menu direction

Do not dump the full menu as one long text wall. Preserve fidelity, but improve information architecture.

Required menu experience:

- A short “signature dishes” section above the full menu.
- Tabs or segmented navigation for:
  - Field Small Plates
  - Stream Small Plates
  - Salad + Soup
  - Field Large Plates
  - Stream Large Plates
  - Escorts / sides
  - Dessert
  - Libations
- Show full dish names, descriptions, and prices where captured/current.
- Feature menu proof from reviews and current menu, including Bang Bang Cauliflower, sticky toffee pudding, Chateaubriand crostini, ricotta, short ribs, duck confit, filet meatloaf, burgers, San Fran Cioppino, walleye, ribeye/NY strip, lobster tail, sashimi tuna tartare, corn crème brûlée, salmon, and cocktails.
- Validate every featured item against the current menu before final QA. If an item is review-famous but not current, remove or move to a generic “guest favorites change seasonally” style line.

## Reservation / ordering / contact flow

Reservation module requirements:

- Primary CTA: `Reserve a table`.
- If OpenTable is active and approved, link to `https://www.opentable.com/restaurant/profile/1017823?ref=1068`.
- Secondary CTA: `Call (224) 848-4005`.
- Include hours and address near the booking CTA.
- Mention large parties/private dining handoff to events.

Ordering module requirements:

- Toast link may be used: `https://www.toasttab.com/region/v3`.
- DoorDash/Uber Eats links from the current site are safelinks-wrapped; verify and replace with clean canonical links or omit.
- Keep carryout availability caveat only in the ordering module, not in the hero.

Private-events module requirements:

- Headline should sell Region as a Northwest Suburbs celebration/private dining destination.
- Include facts: `15 to 170` guests, private dining room up to `40`, patio up to `30`, full buyout up to `170`.
- Suggested occasions: business dinners, social gatherings, rehearsal dinners, anniversaries, birthdays, cocktails/patio gatherings.
- CTA: `Plan a private event` / `Email Jillian` → `mailto:jperlick@regionrestaurant.com`.

## Photo strategy

- Use real Region photos wherever possible from current site/gallery/public listing/evidence.
- Prioritize: dining room, plated entrees, small plates, cocktails, bar, patio, private room/event feel, chef/story detail.
- If temporary stock is unavoidable, it must be subtle, food/restaurant-neutral, and clearly scheduled for replacement before final delivery.
- Do not use imagery that makes Region look like a steakhouse, nightclub, tavern, sushi restaurant, or generic wedding venue.
- Do not leave blank/gray bands or unfilled hero regions.

## Animation and interaction direction

Use motion sparingly and intentionally:

- Gentle hero image reveal / title fade.
- Subtle menu-category transitions.
- Hover treatment on dish cards, reservation CTA, and private-event cards.
- Sticky mobile CTA bar should feel practical, not flashy.
- Avoid scroll-jacking, excessive parallax, or animation that slows menu/reservation access.

## Mobile requirements

Mobile is a hard gate for sell-readiness.

- Above the fold must show: restaurant identity, Reserve CTA, Menu CTA, and phone/directions access.
- Add sticky mobile CTA bar: Reserve, Call, Menu, Directions.
- Menu tabs must be thumb-friendly and readable; no tiny dense wall of text.
- Private events must appear before the footer, not buried after long generic content.
- Remove all large empty bands from the current site pattern.
- Ensure footer emails wrap cleanly and CTAs remain tappable.
- Keep hours/address visible without requiring a long scroll.

## Factual corrections / cleanup

- Fix logo alt text. Earlier browser snapshot exposed mismatched alt text: “A logo for the restaurant, veggii kitchen and bar.” Every alt/meta label must say Region-specific language.
- Remove or replace the GoDaddy Design Services badge pattern in the redesign.
- Do not keep `© 2018 Region` as the only freshness signal; use a current copyright year if applicable.
- Clean duplicated/safelinks delivery URLs.
- Verify whether OpenTable should be first-class on the official site before final QA.
- Verify whether `dperlick@regionrestaurant.com` and `jperlick@regionrestaurant.com` are both intended to remain public.

## Exact fix checklist

1. Use `roma` as the one base archetype; do not mix in Bramble nightlife or Cuisine casual layouts.
2. Replace the carryout-first homepage hero with a chef-driven reservation/private-event hero.
3. Add Reserve, View Menu, and Private Events CTAs in the hero.
4. Build a reservation section with OpenTable if active/approved plus phone fallback.
5. Preserve exact address, phone, hours, and emails.
6. Build an editorial chef story section for Dave Perlick.
7. Rebuild the menu into readable categories/tabs with current dish names, descriptions, and prices.
8. Add a signature-dishes module using only current menu items.
9. Build a private-events section/page with capacities, occasions, and `jperlick@regionrestaurant.com` inquiry CTA.
10. Move online ordering/carryout into a secondary module and keep availability caveat out of the hero.
11. Use clean Toast / DoorDash / Uber Eats links only; omit unverifiable delivery links.
12. Add gift-card CTA via GiftRocker without letting it dominate the first screen.
13. Replace dated orange/dark two-tier visual language with warm restrained Roma art direction.
14. Remove blank/empty bands and make every section content-bearing.
15. Add mobile sticky CTA bar: Reserve, Call, Menu, Directions.
16. Make menu text readable on mobile with tabs/accordion/section anchors.
17. Correct logo alt text and all metadata to Region-specific language.
18. Avoid direct review quotes and staff names in public copy unless explicitly approved.
19. Include final QA evidence for desktop, mobile, menu, reservation path, private-event path, order/gift paths, and accessibility labels.
20. Attach checklist, screenshots, review packet, and build notes back to MC once agency auth is available.

## Sell-ready bar

Before Ethan sees the Region preview, all of this must be true:

- The first 5 seconds communicate “chef-owned polished Barrington dinner destination,” not “online carryout may be unavailable.”
- A visitor can reserve/call, view menu, inquire about private events, order online, buy a gift card, and get directions without hunting.
- The menu feels like Region specifically, using real dish/category depth.
- Mobile is cleaner than desktop, not a compressed afterthought.
- No fake awards, fake testimonials, fake menu items, fake claims, or placeholder provider links.
- The design feels custom enough that Ethan can pitch it as a clear before/after upgrade.

## MC handoff note

Do not begin build/fork work until Mission Control can provision the canonical workflow root and child tasks. Once `AGENCY_AUTONOMY_API_KEY` / agency runtime auth is available, attach this brief and the evidence paths above to the Region workflow, set `template_slug` to `roma`, and resume at the first incomplete canonical gate.
