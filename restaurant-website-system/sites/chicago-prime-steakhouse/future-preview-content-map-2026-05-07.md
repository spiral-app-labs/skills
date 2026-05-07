# Chicago Prime Steakhouse — future preview content map

- Date: 2026-05-07
- Status: **implementation-readiness only / not build-authorized**
- Canonical archetype: **Heaven Palate**
- Buildable source template: `restaurant-website-system/templates/1776-redesign-01/`
- Intended future fork target: MC-approved preview slug, not the evidence directory
- Owner outreach status: **not sent**
- QA status: **not run**

## Purpose

This map translates Chicago Prime Steakhouse’s verified facts, owner-confirmation gaps, and Heaven Palate routing into the actual `1776-redesign-01` content/component structure. It is meant to reduce builder ambiguity after MC/founder authorization arrives.

This is **not** permission to build, publish, contact the restaurant, or use unsupported claims. No raw Supabase writes were performed.

## Build source contract

Use `1776-redesign-01` as the implementation source, but make the resulting preview feel like the **Heaven Palate / Chicago Prime** steakhouse register:

- Classic dark steakhouse luxury, not patriotic/farm-to-table 1776 branding.
- Reserve + Private Dining first.
- Menu, Call, Directions, and provider links supporting.
- Private dining/event revenue visible but fact-safe.
- George A. Kalkounos legacy handled with restraint.
- Live lounge/patio as mood support, not nightlife-first positioning.

## Content model mapping

### `content.brand`

| Field | Future Chicago Prime value | Confirmation status |
| --- | --- | --- |
| `name` | `Chicago Prime Steakhouse` | Public-source verified |
| `tagline` | `Classic Schaumburg steakhouse dining` | Draft copy |
| `description` | `Prime steaks, seafood, wine, and hospitality made for celebration in Schaumburg.` | Draft copy |
| `logo` | `Chicago Prime Steakhouse` or owner-provided mark | Needs owner-approved logo/wordmark |
| `location` | `Schaumburg, Illinois` | Public-source verified |
| `established` | Omit unless owner confirms a founding year | Unconfirmed |
| `address` | `1444 E. Algonquin Road` | Public-source verified |
| `addressFull` | `1444 E. Algonquin Road, Schaumburg, IL 60173` | Public-source verified |
| `phone` | `847.969.9900` | Public-source verified, owner confirm before publish |
| `email` | `events@chicagoprimesteakhouse.com` for private dining; general email needs confirmation | Partially confirmed |
| `reservationUrl` | `https://secure.opentable.com/chicago-prime-steakhouse-reservations-schaumburg?restref=36475` | Public-source verified, owner confirm before publish |
| `reservationPlatform` | `opentable` | Public-source verified |
| `reservationRestref` | `36475` | Derived from OpenTable URL |
| `hours` | Mon–Sat 3PM–10PM; Sun 3PM–9PM | Public-source snapshot, owner confirm before publish |
| `rating` | Do not set/show unless owner approves Google rating proof | Internal only |
| `hoursConfig` | America/Chicago; day ranges for 3PM close times | Owner confirm first |
| `geo` | Schaumburg coordinates from map after link verification | Needs verification |

### `content.nav`

Recommended nav:

1. Home `/`
2. Menu `/menu`
3. Private Dining `/#private-dining` or future `/private-dining`
4. Legacy/About `/about`
5. Contact `/contact`

CTA:

- Label: `Reserve`
- Href: OpenTable reservation URL after confirmation

If private dining becomes the strategic priority for the pitch, use a two-action header pattern only if it stays elegant on mobile.

### `content.hero` → `<FullBleedHero />`

Recommended content:

- Image: owner-approved dining room / steak + wine / exterior hero. If unavailable, use an internal placeholder only and label it as replaceable.
- Eyebrow: `Schaumburg, Illinois · Prime Steakhouse · Private Dining`
- Heading:
  - Upright: `Classic Schaumburg`
  - Italic: `Steakhouse`
  - Layout: `stacked`
- Primary CTA: `Reserve a Table` → OpenTable
- Secondary CTA: `Plan Private Dining` → private dining anchor/contact

Do not use “award-winning” in the hero unless exact owner-approved award language exists.

### `content.marquee` → `<MarqueeStrip />`

Use as positioning proof, not fluff:

- `Prime Steaks`
- `Private Dining`
- `Seafood & Wine`
- `Live Lounge`
- `Schaumburg, Illinois`

Avoid review/rating claims here unless approved.

### `content.signatureSelections` → `<FeaturedCardGrid />`

Use category-level story unless current item/menu details are confirmed.

Recommended card set:

1. **Steaks & Chops**
   - Tag: `Steakhouse`
   - Description: `Classic prime-steakhouse dinner cues with chops, sides, wine, and occasion-ready service.`
   - Image: steak/wine plate, owner-approved.

2. **Seafood & Classics**
   - Tag: `Dinner`
   - Description: `Seafood, chops, and steakhouse classics for date nights, business dinners, and celebrations.`
   - Image: seafood/chop plate, owner-approved.

3. **Private Dining**
   - Tag: `Events`
   - Description: `Rooms for corporate dinners, milestones, rehearsal dinners, and private celebrations.`
   - Image: private room/event setup, owner-approved.

If the owner confirms specific menu items, this can become item-led. Until then, keep it category-led and link to the full menu.

### `content.moreThanAMeal` → `<MoreThanAMealSplit />`

Purpose: service/legacy/private-dining story.

Recommended heading:

- Upright: `More than a`
- Italic: `steakhouse.`

Body draft:

1. `Chicago Prime Steakhouse pairs prime steaks, seafood, wine, and warm hospitality with the kind of dining-room confidence guests expect for birthdays, business dinners, and milestone nights.`
2. `The next preview should make the family-owned service story, private rooms, live lounge atmosphere, and George A. Kalkounos legacy feel present without slowing down the reservation path.`

CTA:

- Label: `Our Story` or `Private Dining`
- Href: `/about` or `/#private-dining` depending on final strategy

Images:

- Dining room / bar-lounge image
- Private room or owner/team/legacy-approved image

### `content.voicesOfExperience` → `<TestimonialCardGrid />`

Default status: **do not publish direct testimonials yet**.

Use review themes internally for copy direction only until owner approves exact snippets. If owner approves, each card must include:

- Exact quote.
- Public source/platform.
- No altered rating/review claims.
- No private event claim beyond source text.

If not approved, replace the component with proof-theme cards that do not impersonate reviews:

- `Celebration dinners`
- `Attentive service`
- `Steakhouse classics`
- `Live lounge atmosphere`

### `content.quoteOverlay` → `<QuoteOnPhotoOverlay />`

Purpose: hospitality/legacy moment.

Recommended quote style, owner-approved before public use:

- `A restaurant built on service, friendship, and making guests feel known.`
- Attribution: `— George A. Kalkounos hospitality legacy` or `— Chicago Prime Steakhouse`

Do not use a direct quote unless it is official and approved.

### `content.reservationStrip` → `<MultiChannelReservationStrip />`

Recommended content:

- Eyebrow: `Ready for dinner or a private event?`
- Heading:
  - Upright: `Reserve Your`
  - Italic: `Table`
  - trailingUpright: ` Tonight`
- Primary CTA: `Reserve on OpenTable`
- Secondary CTA: `Call 847.969.9900`

Builder note: Chicago Prime also needs a Private Dining CTA near this strip or directly above/below it, because private dining is a major revenue path and not just a footer detail.

### `content.footer` → `<RichFooter />`

Recommended content:

- Tagline: `Classic Schaumburg steakhouse dining`
- Description: `Prime steaks, seafood, wine, private dining, and warm hospitality at 1444 E. Algonquin Road.`
- Badges:
  - `OpenTable Reservations`
  - `Private Dining`
  - `Live Lounge` only after schedule/currentness confirmation
- Copyright: `© 2026 Chicago Prime Steakhouse · All rights reserved`

Footer links should include: Reserve, Menu, Private Dining, Call, Directions, Gift Card, Millionaire’s Club, Contact, Socials, and provider links only after verification.

## Page-level mapping

### `/menu`

Use tabbed menu only if current menu details are owner-confirmed. Otherwise make this a menu gateway page with category copy and a full-menu link.

Safe tabs before menu detail confirmation:

- Steaks & Chops
- Seafood & Classics
- Wine & Cocktails
- Private Dining Menus
- Full Menu

Do not publish prices or invented item descriptions.

### `/about`

Use the story/timeline structure for George A. Kalkounos legacy and restaurant hospitality only after owner/founder tone approval.

Possible timeline phases:

- Family Hospitality
- Chicago Prime in Schaumburg
- Guests as Friends
- Scholarship / Legacy

Do not make the story overly mournful or salesy.

### `/contact`

Must support:

- OpenTable reservation.
- Call.
- Directions.
- Private dining inquiry.
- Hours.
- Address.
- Provider/utility links where confirmed.

## Theme/token mapping

Start from `1776-redesign-01/theme.ts`, then adapt:

| Token | 1776 source | Chicago Prime direction |
| --- | --- | --- |
| `canvas` | Deep navy `#0D1B2A` | Charcoal / black-green / espresso. Heaven Palate reference uses near-black green `#02110C`; use a steakhouse-friendly charcoal/espresso variant. |
| `surface` | Navy-black `#050C16` | Deeper espresso/charcoal. |
| `text` | Warm cream `#F5F0E8` | Keep warm ivory/cream. |
| `accent` | Amber `#C9A96E` | Muted brass/champagne, slightly less bright than gold. |
| `display font` | Cormorant Garamond | Keep Cormorant or move to Playfair/Merriweather only if the final tone needs more Heaven Palate weight. |
| `body font` | DM Sans | Keep neutral sans for readability. |

## Required component additions or adaptations

The future build may need these 1776-compatible additions:

1. **Private Dining CTA band**
   - A two-column or card-grid section between featured cards and story.
   - Room/capacity details only after owner confirmation.

2. **Sticky mobile CTA**
   - Reserve / Call / Directions, with Menu or Private Dining if space allows.
   - Must not cover content or conflict with the header pill.

3. **Provider utility links**
   - Uber Eats, Grubhub, Toast, gift card, club, socials as footer/utility links after verification.

4. **Claim-safety badge handling**
   - Hide awards/reviews unless confirmed.
   - Avoid default template badges that imply awards.

## Copy fragments approved as internal drafts only

- `Classic Schaumburg steakhouse dining.`
- `Prime steaks, seafood, wine, and hospitality made for celebration.`
- `Reserve dinner, plan a private event, or explore the menu.`
- `Private rooms for corporate dinners, milestones, and gatherings.`
- `Live lounge music and a covered patio round out the evening.`
- `A family-owned steakhouse in the Northwest Suburbs, built on service and personal touch.`

## Data that must not be hard-coded until confirmed

- Awards / “award-winning” language.
- Google rating, review count, or direct review quotes.
- Private dining capacities, deposits, fees, minimums, package names, and policies.
- Live entertainment schedule.
- Detailed menu items/prices.
- Photo rights or ownership.
- Social/provider/gift-card/club links.
- George legacy copy beyond source-safe internal draft language.

## Future builder checklist before coding

Before writing or changing code, confirm:

- MC lead/root/child workflow exists.
- Real lead/root IDs are in `checklist.md` and `checklist.json`.
- Build is authorized.
- Source mapping is attached/approved in MC.
- Owner/founder confirmation status is recorded.
- Preview slug is approved.
- Image strategy is rights-safe.

## Verdict

This map gives the future builder a direct path from the `1776-redesign-01` source files to a Heaven Palate-style Chicago Prime preview while keeping all risky facts gated. The next real implementation step remains blocked until MC/founder/owner gates clear.
