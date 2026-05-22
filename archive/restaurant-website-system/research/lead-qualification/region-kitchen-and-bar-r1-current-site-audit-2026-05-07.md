# Region Kitchen and Bar — R1 Current-Site Audit

- Date: 2026-05-07T13:08Z
- Restaurant: Region Kitchen and Bar / Region
- Current site: `https://regionrestaurant.com/`
- Audit type: current-site-only Round 1 evidence for future MC workflow provisioning
- Recommended archetype: `roma`
- Overall verdict: **Strong redesign candidate; proceed once MC can provision the canonical website workflow.**

## Evidence captured

Folder: `restaurant-website-system/research/lead-qualification/region-kitchen-and-bar-r1-current-site-audit-2026-05-07/`

- Manifest: `capture-region-current-site-audit-manifest-2026-05-07.json`
- Desktop screenshots: home, menus, reservations, private-events, gift, about
- Mobile screenshots: home, menus, reservations, private-events
- DOM text and link JSON saved for each captured page

Key screenshot paths:

- Home desktop: `region-current-home-desktop-2026-05-07.png`
- Home mobile: `region-current-home-mobile-2026-05-07.png`
- Menus desktop: `region-current-menus-desktop-2026-05-07.png`
- Menus mobile: `region-current-menus-mobile-2026-05-07.png`
- Reservations desktop: `region-current-reservations-desktop-2026-05-07.png`
- Reservations mobile: `region-current-reservations-mobile-2026-05-07.png`
- Private events desktop: `region-current-private-events-desktop-2026-05-07.png`
- Private events mobile: `region-current-private-events-mobile-2026-05-07.png`

## Source-of-truth facts observed

- Address: `718 W. NW Highway, Barrington, IL 60010`
- Phone: `(224) 848-4005`
- Emails: `dperlick@regionrestaurant.com`, `jperlick@regionrestaurant.com`
- Hours shown on site: Tuesday–Thursday `4:30-9 pm`; Friday–Saturday `4:30-10 pm`; Sunday `4:30-9 pm`; Monday closed.
- Chef/owner: Dave Perlick
- Private-events contact: Jillian at `jperlick@regionrestaurant.com`
- Private-events capacity claims: groups of `15 to 170`; private dining room up to `40`; outside patio up to `30`; full buy-outs up to `170`.
- Reservation path on current site: phone-first (`CALL FOR RESERVATIONS`, `(224) 848-4005`) rather than embedded table booking.
- Ordering links surfaced from homepage/link capture:
  - Toast: `https://www.toasttab.com/region/v3`
  - DoorDash: safelinks-wrapped DoorDash URL
  - Uber Eats: safelinks-wrapped Uber Eats URL, duplicated in the captured href
- Gift card link: `https://www.giftrocker.com/secure/order/?h=63539eaa`
- Social: Facebook link present; Instagram/social proof appears sparse in capture.

## Archetype routing

**Use `roma`.** Region is chef-owned, seasonal, polished, and dinner/reservation-led. Its story is not a casual counter-service clarity play (`Cuisine`) and not nightlife-first (`Bramble`). The right redesign should feel editorial and restrained, with strong food/menu art direction, chef story, private-event proof, and repeated high-intent conversion paths.

## What is already valuable

1. **Real premium identity exists.** The menu has serious detail: chateaubriand crostini, black angus filet, Lake Superior walleye, miso black cod, duck confit, cioppino, lobster risotto, and other chef-driven items. This is not a generic bar-and-grill.
2. **Chef story is deep enough for a strong narrative section.** The About page gives Dave Perlick's background, local career path, family/business story, and Region opening context.
3. **Private events are commercially meaningful.** The site has concrete capacity numbers and use cases (business dinners, social gatherings, rehearsal dinners, buyouts).
4. **Multiple conversion paths already exist.** Reservations, carryout/delivery, gift cards, private events, phone, directions, and email all exist; they need hierarchy and polish rather than invention.
5. **Menu content is rich.** The menu page has enough real dish language for a redesign to feel restaurant-specific and premium.

## R1 blockers / biggest redesign opportunities

### 1. Homepage sells the wrong first impression

The current hero leads with:

> PLACE AN ONLINE ORDER FOR CARRYOUT
> We do our best to accommodate all to-go orders, but often times we need to turn this option off due to high volume in our dining room.

That may be useful operationally, but it is a poor first impression for a premium, chef-owned dinner destination. It tells guests what might not be available before it sells why they should dine there.

**Fix direction:** Lead with chef-owned seasonal American dining in Barrington, a strong visual, and primary reservation/private-event CTAs. Move carryout limitations to a secondary ordering module.

### 2. Reservation conversion is phone-only and low-confidence

The Reservations page is essentially:

- `Reservations #224.848.4005`
- `CALL FOR RESERVATIONS`
- phone/email/hours

There is no embedded booking flow, no OpenTable/Resy path observed, and little reassurance around availability, large parties, or special occasions.

**Fix direction:** Treat reservations as the main CTA. If phone-only is truly the business rule, make that feel intentional and premium; otherwise route to the correct booking provider. Include hours, map, phone, and large-party/private-event handoff without burying the user.

### 3. Private events have good facts but weak funnel

The Private Events page has useful proof — capacity `15 to 170`, private room `40`, patio `30`, full buyout `170` — but it ends with a plain email instruction.

**Fix direction:** Build a proper events section/page: event types, capacities, room/patio/buyout options, food/drink promise, photos, and an inquiry CTA. Use Jillian's email as fallback, not the whole funnel.

### 4. Menu is rich but presented as a long plain text wall

The menu content is excellent, but the current presentation is a long text list with little hierarchy or editorial pacing. On mobile it becomes a very long scroll.

**Fix direction:** Preserve the real dish names and prices, but route them into a tabbed/editorial menu: Field Small Plates, Stream Small Plates, Salad + Soup, Field Large Plates, Stream Large Plates, sides/escorts. Feature 6–8 signature dishes visually/copy-wise before the full list.

### 5. Visual design feels dated against the restaurant's quality

Browser/image review shows a two-tier orange/dark header, large orange hero type over a dark wine-bottle image, visible GoDaddy Design Services badge, `© 2018 Region` footer, large blank/empty vertical bands, and underused food/ambience imagery. The site feels more like an old operational page than a premium chef-owned destination.

**Fix direction:** Roma-style editorial restraint: warm dark/cream palette, strong food photography, confident spacing, chef quote/story, seasonal menu rhythm, private-event imagery, and clear CTAs.

### 6. Mobile is conversion-hostile

Mobile captures show very long pages, dense/small menu text, text-heavy first screens, large low-value areas, stacked footer content, and no sticky high-intent CTA treatment. The phone and “Call For Reservations” CTA are visible in the mobile header, which is good, but users still have to scroll too far to understand the restaurant's premium story or act on private events/menu interest.

**Fix direction:** Mobile-first header with call/reserve/order/directions; short hero; compact proof; sticky CTA bar; menu tabs; private-event CTA near the top.

### 7. External ordering links need cleanup

The captured DoorDash and Uber Eats hrefs are safelinks-wrapped and the Uber Eats href appears duplicated. That looks fragile and unpolished.

**Fix direction:** Use clean canonical DoorDash/Uber Eats URLs if those channels remain active. Keep Toast as the preferred online order path if accurate.

### 8. Accessibility/brand-detail issue

Earlier browser accessibility snapshot exposed a logo alt text mismatch: “A logo for the restaurant, veggii kitchen and bar.” This is a small but very visible quality-control smell for an agency sell.

**Fix direction:** Correct all alt text and metadata to Region-specific language.

## Recommended future build brief

When MC provisioning is unblocked, the implementation brief should require:

1. `roma` archetype, not generic premium restaurant styling.
2. Homepage hierarchy: reserve/table intent first, then chef story, menu highlights, private events, gift cards/order, location/hours.
3. Preserve exact address, phone, emails, hours, private-event capacity facts, and current menu structure unless newer sources prove otherwise.
4. Do not invent awards, review quotes, booking providers, or menu items.
5. Clean conversion paths:
   - Reserve / call
   - Order online via Toast + delivery options if active
   - Private event inquiry via Jillian
   - Gift cards via GiftRocker
   - Directions / phone
6. Mobile sticky CTA and readable menu tabs are mandatory.
7. Google Reviews gate still required before final copy/proof claims: collect 30 written reviews via browser and Highest filter.

## Sellability judgment

Region is a stronger use of agency time than forcing blocked roots. The current site has an obvious owner-understandable gap: the restaurant is chef-owned, menu-rich, and event-capable, but the website opens with carryout limitations and makes reservations/private events feel small. A high-quality Roma rebuild could make the sale easier because the before/after contrast is plain, especially on mobile.

## Current blocker

The only blocker to moving from evidence into canonical execution is MC provisioning auth/config. This runtime still cannot call the protected website-workflow planner/provisioning route because `AGENCY_AUTONOMY_API_KEY` is unavailable and production planner returns unauthorized/forbidden responses without the correct runtime auth. No raw Supabase agency mutation was performed.
