# Chicago Prime Steakhouse — official site Round 1 audit

- Date: 2026-05-07
- Canonical gate: `auditing`
- Site audited: https://www.chicagoprimesteakhouse.com/
- Preview audited: none yet — this is a current-site/source-of-truth audit to prepare an eventual authorized Heaven Palate build.
- Recommended archetype lock: **Heaven Palate**
- Mission Control status: protected MC agency API still returns `401`; this audit is local evidence only until founder approval, lead provisioning, and MC workflow attach are available.

## Evidence captured

- Desktop screenshot: `restaurant-website-system/sites/chicago-prime-steakhouse/evidence/official-site-home-desktop-full-2026-05-07.png`
- Mobile screenshot: `restaurant-website-system/sites/chicago-prime-steakhouse/evidence/official-site-home-mobile-full-2026-05-07.png`
- Text scrapes:
  - `restaurant-website-system/sites/chicago-prime-steakhouse/scrapes/official-site-home-text-2026-05-07.txt`
  - `restaurant-website-system/sites/chicago-prime-steakhouse/scrapes/official-site-menu-text-2026-05-07.txt`
  - `restaurant-website-system/sites/chicago-prime-steakhouse/scrapes/official-site-contact-text-2026-05-07.txt`
  - `restaurant-website-system/sites/chicago-prime-steakhouse/scrapes/official-site-private-dining-text-2026-05-07.txt`
  - `restaurant-website-system/sites/chicago-prime-steakhouse/scrapes/official-site-live-entertainment-text-2026-05-07.txt`
  - `restaurant-website-system/sites/chicago-prime-steakhouse/scrapes/official-site-legacy-text-2026-05-07.txt`
  - `restaurant-website-system/sites/chicago-prime-steakhouse/scrapes/official-site-special-events-text-2026-05-07.txt`
- Direct source fetches used for seed validation: homepage, menu, contact, private dining, live entertainment, special events, and George A. Kalkounos legacy page.

## Summary

- Chicago Prime Steakhouse has a strong underlying business story: classic Schaumburg steakhouse, OpenTable reservations, private dining rooms, live lounge music, and a meaningful George A. Kalkounos hospitality legacy.
- The current homepage has real steakhouse photography and an immediate fine-dining mood, but it under-sells the highest-value conversion paths: reservations and private events.
- The site visibly leaks template residue and unfinished content: bakery placeholders, `555-555-55-55`, slash placeholders, review carousel placeholders, and duplicated copyright years appear in fetched page text.
- Menu/private dining/order/reservation links exist, which is valuable, but the hierarchy is cluttered and repetitive instead of premium.
- Mobile is usable but not sell-optimized: the first screen shows identity, yet Reserve, Private Dining, Directions, and Call are not packaged into a high-confidence mobile action path.
- No preview exists yet; an eventual build must preserve the real conversion assets while moving the restaurant into a Heaven Palate classic-luxury structure.

## What the old site / real business gets right

- **Clear category and positioning:** The official site immediately identifies the business as Chicago Prime Steakhouse and describes it as fine dining / steakhouse.
- **Reservation path exists:** The site uses OpenTable with a specific reservation URL: `https://secure.opentable.com/chicago-prime-steakhouse-reservations-schaumburg?restref=36475`.
- **Private dining is a real business line:** The private-dining page includes room names and maximums: Main Dining Room 130, Bar & Lounge 80, Walnut & State Room 85, Walnut Room 32, State Room 35.
- **Event inquiry path exists:** `events@chicagoprimesteakhouse.com`, restaurant phone, and a private dining request CTA are present.
- **Multiple revenue channels exist:** The site includes Reserve, Call, Uber Eats, Grubhub, Toast, gift cards, private events, live entertainment, and membership/club navigation.
- **Live lounge programming creates differentiation:** The live entertainment page says live music in the lounge Wednesday–Saturday 7PM–11PM.
- **Legacy story is strong:** The George A. Kalkounos page gives the restaurant an authentic hospitality/family story that can support a premium founder-led feel.
- **Real business facts are easy to preserve:** Address, phone, hours, reservation URL, socials, menu PDFs, and event details are present across source pages.

## What the preview gets right

No preview exists yet, so there is nothing to credit visually. For the future preview, the correct direction is already clear:

- Use **Heaven Palate**, not a casual or nightlife template.
- Build around a classic steakhouse luxury rhythm: reservation hero, dining room/steak/wine craft, private dining, legacy, live lounge, visit/reserve close.
- Preserve OpenTable, private dining, menu PDFs/full menu, call, directions, order-online handoffs, and legacy story.
- Remove template residue and reduce CTA clutter.

## Critical issues

1. **Template residue weakens trust.** Fetched text includes “Downtown bakery,” “Uptown bakery,” placeholder phone `555-555-55-55`, slash placeholders, and duplicated copyright years. That is a high-salience sales opportunity because it makes the site feel unfinished despite the premium restaurant.
2. **Review carousel contains placeholder content.** Homepage evidence includes “Slide title / Write your caption here” placeholders alongside review snippets. This undercuts credibility and should not be carried into a preview.
3. **Reservation is present but not polished as the primary conversion.** The OpenTable link exists, but the experience repeats Reserve/Call/Order CTAs instead of presenting a refined hierarchy.
4. **Private dining is under-leveraged on the homepage.** The room capacities and event policies are commercially valuable, but a visitor has to navigate away instead of seeing a premium events funnel early.
5. **Legacy story is isolated.** George A. Kalkounos’s hospitality story is a differentiator, but it is buried as a separate navigation item instead of helping the homepage feel like a Schaumburg institution.
6. **Mobile lacks a high-converting action bar.** The mobile screenshot shows a hamburger and homepage content, but not a sticky Reserve / Private Dining / Call / Directions path.
7. **Menu experience is PDF-forward and thin in extracted text.** PDF links are useful, but the homepage does not transform menu/wine/steakhouse craft into an appetite-building story.
8. **Order-online providers need hierarchy discipline.** Uber Eats, Grubhub, and Toast exist, but for an upscale steakhouse the primary homepage action should remain reservations/private dining, not delivery clutter.
9. **Award/review claims need verification.** The official title/homepage uses “Award Winning,” and private-dining text says “Award winning wine selections,” but a preview should verify exact approved wording and not invent awards or ratings.
10. **Private dining policy details are too operational for homepage use.** Deposit, count, tax, cake fee, and food/beverage-minimum details matter, but the homepage should sell the event opportunity and link to detail, not overload early conversion.
11. **Live music schedule has source inconsistency.** Live entertainment page says Wednesday–Saturday 7PM–11PM; private dining policy text mentions Tuesday–Saturday live entertainment in the Lounge. Currentness must be confirmed before publishing.
12. **Contact/email inconsistency needs cleanup.** The site surfaces `dine@chicagoprimesteakhouse.com` via mailto/social area and `events@chicagoprimesteakhouse.com` for private dining. The preview should use each in the correct context and confirm any general contact email.

## Specific improvement list

1. **Rebuild the hero around Reserve + Private Dining.** Use a Heaven Palate dark-luxury hero with “Chicago Prime Steakhouse” and a concise Schaumburg fine-dining line. Primary CTA: Reserve a Table. Secondary CTA: Private Dining. Supporting links: Menu, Directions.
2. **Add address/hours near the hero CTAs.** Show `1444 E. Algonquin Road, Schaumburg, IL 60173` and `Mon–Sat 3PM–10PM / Sunday 3PM–9PM` close to the conversion module so visitors do not hunt.
3. **Remove all template residue.** No bakery placeholders, no `555-555-55-55`, no slash placeholders, no “Slide title,” no “Write your caption here,” and no duplicate copyright clutter.
4. **Create a premium private dining section.** Feature Main Dining Room, Bar & Lounge, Walnut & State Room, Walnut Room, and State Room with capacities only after owner/currentness confirmation. CTA should go to private-dining inquiry or `events@chicagoprimesteakhouse.com`.
5. **Build a legacy section with restraint.** Bring George A. Kalkounos’s hospitality story onto the homepage as a short, respectful founder/family legacy module. Avoid exploitative grief language; focus on hospitality, service, and guests-as-friends.
6. **Turn the menu into a steakhouse journey.** Instead of relying only on PDFs, create homepage chapters for steaks, seafood/classics, wine/cocktails, lounge/private dining support, and full menu links. Preserve PDFs for detail.
7. **Clarify CTA hierarchy.** Desktop and mobile should prioritize Reserve, Private Dining, Menu, Directions/Call. Order Online can exist but should not compete visually with reservations on an upscale steakhouse homepage.
8. **Create a sticky mobile action bar.** Include Reserve, Call, Directions, and maybe Private Dining/Menu depending on available width. Make it thumb-friendly and visible without blocking content.
9. **Verify and safely handle awards/reviews.** Do not add award badges, rating numbers, or review counts unless approved and sourced. If review snippets are used, remove placeholders and use only approved, sourced quotes.
10. **Resolve live entertainment currentness.** Confirm whether live music is Wednesday–Saturday or Tuesday–Saturday before publishing. Then position it as “Live music in the lounge” as a supporting dinner/lounge cue.
11. **Separate event details from event selling.** Homepage should sell “private dining for celebrations, corporate dinners, and gatherings”; detail page can carry deposit, cake fee, count deadline, sales tax, and policy specifics.
12. **Audit all provider links before preview.** Confirm OpenTable, Uber Eats, Grubhub, Toast, menu PDFs, Google Maps, phone, `dine@...`, `events@...`, Facebook, Instagram, Twitter/X, and YouTube links.
13. **Improve mobile visual rhythm.** Reduce empty vertical bands, make section transitions deliberate, and ensure menu/private dining cards stack cleanly without tiny text or awkward image crops.
14. **Use owner-approved photography.** Steak, wine, dining room, lounge, private rooms, exterior, and legacy imagery should be authentic or clearly marked as placeholders until rights are confirmed.
15. **Create a conversion-safe footer.** Footer should include address, hours, phone, reservation, private dining email, directions, socials, order-online links, and copyright once — cleanly and without template leftovers.

## Sellability verdict

The current site is not strong enough to represent a premium steakhouse confidently without explanation. The restaurant itself has excellent sellable assets — reservations, private dining, live music, steakhouse atmosphere, and a real hospitality legacy — but the website shows template residue, CTA clutter, under-leveraged private dining, and a weak mobile conversion spine. A Heaven Palate redesign should be easy to justify commercially: it can remove trust leaks, elevate the fine-dining/private-event story, and make Reserve / Private Dining / Menu / Directions feel deliberate and premium.

## Preserve for future build

- OpenTable reservation path.
- Address, phone, hours, directions.
- Menu PDF/full-menu access.
- Private dining room names/capacities after currentness confirmation.
- Event inquiry email and phone.
- Live lounge music after schedule confirmation.
- George A. Kalkounos legacy story with respectful tone.
- Existing order-online provider handoffs, but lower in hierarchy than Reserve/Private Dining.

## Guardrails

- Do not contact the restaurant from this audit.
- Do not publish or share owner-facing until MC/founder/owner gates clear.
- Do not use raw Supabase writes for agency state. No raw Supabase writes were performed.
- Do not invent awards, ratings, review counts, menu details, private dining policies, image rights, or live music schedules.
