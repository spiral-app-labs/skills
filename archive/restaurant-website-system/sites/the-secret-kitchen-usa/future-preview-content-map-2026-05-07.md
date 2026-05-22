# The Secret Kitchen USA — future preview content map

- Date: 2026-05-07
- Status: **implementation-readiness only / not build-authorized**
- Canonical archetype: **Bamzi**
- Buildable source template: `restaurant-website-system/templates/bamzi-01/`
- Intended future fork target: MC-approved preview slug, not the evidence directory
- Owner outreach status: **not sent**
- QA status: **not run**

## Purpose

This map translates The Secret Kitchen USA’s verified public facts, owner-confirmation gaps, and Bamzi routing into the actual `bamzi-01` content/component structure. It gives the future builder a safe first-pass implementation plan after MC/founder authorization arrives.

This is **not** permission to build, publish, contact the restaurant, or use unsupported claims. No raw Supabase writes were performed.

## Build source contract

Use `bamzi-01` as the implementation source and preserve the **Bamzi / Secret Kitchen** register:

- Cinematic modern Indian dinner destination, not generic Indian takeout.
- Reserve + Menu + Directions clarity above all else.
- Chef Aanal Kotak, handmade spices, royal-kitchen inspiration, and U.S. debut story as core proof.
- Menu journey is curated and chaptered, not a long unstructured dump.
- Jewel-tone dining-room drama, photo moments, mocktails, desserts, and experience cues where media rights are confirmed.

## Content model mapping

### `content.brand`

| Field | Future Secret Kitchen value | Confirmation status |
| --- | --- | --- |
| `name` | `The Secret Kitchen USA` | Public-source verified, preferred display name still owner-confirmed |
| `tagline` | `Modern Indian fine dining arrives in Schaumburg` | Draft copy |
| `description` | `Chef Aanal Kotak’s royal-kitchen inspiration, handmade spices, and global Indian menu journey in Schaumburg.` | Draft copy, owner confirm chef/story details |
| `since` | Omit or replace with `Schaumburg U.S. debut` | No founding-year claim |
| `address` | `1411 W Schaumburg Rd, Schaumburg, IL 60194` | Public-source verified |
| `phone` | `(630) 635-2854` / `+16306352854` | Public-source verified, owner confirm before publish |
| `email` | `info@thesecretkitchenusa.com` | Public-source verified, owner confirm before publish |
| `instagram` | `@thesecretkitchen.official.usa` | Public-source verified |
| `social` | Instagram + Facebook only unless owner confirms more | Needs final URL verification |
| `hoursConfig` | America/Chicago, daily 5:30PM–10:30PM | Public-source snapshot, owner confirm before publish |
| `geo` | Schaumburg coordinates after map verification | Needs verification |

### `content.nav`

Recommended nav:

1. Menu `/menu`
2. Chef Story `/about` or `/#chef-aanal`
3. Visit `/contact`
4. Private Dining only if owner confirms banquet/private dining details

Header CTA:

- Label: `Reserve`
- Href: GetSeat reservation URL after confirmation

Avoid a blog/news nav unless real news/press items are approved. Bamzi’s default `News` section should usually be removed or repurposed.

### `content.hero` → `<DarkLeafHero />`

Recommended content:

- Title: `Modern Indian fine dining arrives in Schaumburg`
- Subtitle: `Chef Aanal Kotak’s royal-kitchen inspiration, handmade spices, and global menu journey — reserve dinner and discover The Secret Kitchen USA.`
- CTA: `Reserve a Table` → GetSeat reservation URL
- Secondary links should be added if the component supports them or nearby: `Explore Menu`, `Directions`, `Call`
- Plate image: owner-approved hero dish, plated dessert, dining-room photo, or interior photo moment
- Alt text: factual only after image rights are confirmed

Do not publish “award-winning,” global expansion claims, or direct review/rating language in hero unless owner-approved.

### `content.mission` → `<MissionSplit />`

Purpose: Chef Aanal / royal-kitchen / handmade spice story.

Recommended content:

- Eyebrow: `Chef Aanal Kotak`
- Title: `A royal-kitchen story, reimagined for Schaumburg.`
- Body: `The future preview should make Chef Aanal’s handmade-spice approach, modern Indian point of view, and U.S. debut feel premium and immediate — while keeping exact awards and biography details owner-approved.`
- CTA: `Meet the Chef` → `/about` or chef anchor
- Phone: `(630) 635-2854`
- Image: owner-approved Chef Aanal or dining-room/interior image

### `content.categoryStrip` → `<CategoryStrip />`

Use for menu chapters and visual discovery.

Recommended categories:

1. `Street Food & Hot Bar`
2. `First Plates & Tandoor`
3. `Royal Mains`
4. `Dessert Theatre` if component can handle four; otherwise use three strongest chapters

Images must be owner-approved or internal placeholders only.

### `content.bigHeadline` → `<BigHeadline />`

Recommended line:

- `A cinematic Indian dining experience built around spice, story, and celebration.`

Keep it specific; avoid generic “delicious food & wonderful eating experience.”

### `content.featured` → `<MenuListDotLeader />`

Use the two menu-list sections for curated menu journeys. Publish prices only after owner confirmation.

#### Section 1

- Eyebrow: `Street Food, Tandoor & First Plates`
- Image: owner-approved dramatic appetizer/tandoor shot
- Items, subject to menu currentness confirmation:
  - Avocado Dahi Puri
  - Parmesan Cheese Pav Bhaji
  - The Dhokla Fondue
  - Thecha Paneer Tikka

#### Section 2

- Eyebrow: `Royal Mains & Dessert Theatre`
- Image: owner-approved curry/biryani/dessert shot
- Items, subject to menu currentness confirmation:
  - Nawabi Lamb Chop Tajdar
  - #TSKFIED Butter Chicken #Delhi Style
  - Nalli Gosht Ki Nihari
  - Gulab Jamun Flambé or Chef Aanal’s Autograph Dessert

If menu prices are not confirmed, hide price fields, use `Market / menu link`, or adjust component behavior so fake prices never appear.

### `content.testimonial` → `<TestimonialChefBlock />`

Default status: **do not publish direct Google review quotes yet**.

Preferred use: Chef/story proof block, not a fake testimonial.

Recommended content:

- Eyebrow: `The Chef’s Signature`
- Quote: `Every detail should point back to the experience: handmade spices, modern Indian presentation, and a dinner that feels like an occasion.`
- Attribution role: `Chef / Founder story`
- Attribution name: `Chef Aanal Kotak` only if approved
- Chef image: owner-approved Chef Aanal image only

If owner approves exact review snippets, create a separate proof section with exact quotes and source labels. Do not paraphrase reviews as testimonials.

### `content.blog` → `<BlogCardGrid />`

Bamzi’s default blog cards are likely a mismatch unless there are real approved press/news posts.

Recommended choices:

1. Remove this section for the first preview, or
2. Repurpose it into `Experience Highlights` cards:
   - Chef Aanal’s U.S. debut
   - Handmade spices and royal inspiration
   - Signature desserts / tableside theatre
   - Vegetarian, vegan, and non-vegetarian breadth after owner confirmation

Do not invent press articles, awards, media dates, or news.

### `content.timelessFooter` → `<TimelessFooterSection />`

Recommended content:

- Title: `Reserve the evening. Discover the story.`
- Image: approved dining room / dessert / table setting image
- CTA near section: Reserve / Menu / Directions

### `ContactStripFooter`

Must include:

- Address: `1411 W Schaumburg Rd, Schaumburg, IL 60194`
- Phone: `(630) 635-2854`
- Email: `info@thesecretkitchenusa.com`
- Hours: `5:30 PM–10:30 PM daily` if owner confirms
- Reservation: GetSeat URL
- Directions link
- Instagram/Facebook links

Mobile must make Reserve, Call, and Directions easy within seconds.

## Page-level mapping

### `/menu`

Use `menuPage.categories` for a real curated menu journey only after menu currentness/prices are confirmed.

Recommended category order:

1. Hot Bar / Indian Street Food
2. First Plate / Tandoor
3. Indo-Chinese
4. Main Plate / Comfort Plate
5. Dessert Bar
6. Bread Bar / At a Glance

If prices are unconfirmed, do not show prices. Always include a full-menu link.

### `/about`

Use the about page for:

- Chef Aanal Kotak story.
- Handmade spices.
- Royal-kitchen inspiration.
- India/Australia/Canada/USA presence only if owner approves exact wording.
- Avoid unsupported awards/logos/publication claims.

Possible timeline phases:

- The Secret Kitchen origin
- Handmade spices
- Global presence
- Schaumburg U.S. debut

### `/contact`

Use contact page for:

- GetSeat reservation.
- Call.
- Directions.
- Hours.
- Email.
- Socials.
- Private dining inquiry only after owner confirms availability/details.

## Theme/token mapping

Start from `bamzi-01/theme.ts`, then adapt toward The Secret Kitchen:

- Dark teal / emerald / onyx base.
- Brass/gold accent, not generic orange if it clashes with existing brand visuals.
- Crimson/royal jewel accent only in controlled highlights.
- Warm ivory text.
- Keep cinematic contrast and rounded premium food imagery.
- Avoid generic curry/spice-bowl stock clichés.

## Required component additions or adaptations

1. **Sticky mobile CTA**
   - Reserve / Call / Directions, possibly Menu.

2. **Menu-price gating**
   - Component must support hiding prices or marking menu details as current only after owner confirmation.

3. **Chef/award safety mode**
   - Awards and logos hidden until approved.
   - Chef claims sourced and owner-approved.

4. **Private dining cautious path**
   - Include only as inquiry or “ask us” if owner confirms availability.
   - Do not invent capacities, packages, or banquet policies.

5. **Full-menu link**
   - Always visible even when homepage menu is curated.

## Copy fragments approved as internal drafts only

- `Modern Indian fine dining arrives in Schaumburg.`
- `Chef Aanal Kotak’s royal-kitchen inspiration, handmade spices, and global menu journey.`
- `Reserve dinner, explore the menu, and plan your visit.`
- `From street-food sparks to royal mains and dessert theatre.`
- `A U.S. debut designed to feel like an occasion.`

## Data that must not be hard-coded until confirmed

- Awards, recognitions, logos, or publication claims.
- Google rating, review count, or direct review quotes.
- Private dining / banquet availability, capacities, packages, minimums, or policies.
- Menu prices or item descriptions if currentness is uncertain.
- Lunch service or future lunch plans.
- Photo rights or ownership.
- India/Australia/Canada/USA presence wording beyond what owner approves.
- Vegetarian/vegan/non-vegetarian positioning unless owner confirms how to say it.

## Future builder checklist before coding

Before writing or changing code, confirm:

- MC lead/root/child workflow exists.
- Real lead/root IDs are in `checklist.md` and `checklist.json`.
- Build is authorized.
- Owner/founder confirmation status is recorded.
- Preview slug is approved.
- Image strategy is rights-safe.
- Menu-price display strategy is decided.

## Verdict

This map gives the future builder a direct path from `bamzi-01` source files to a cinematic, truthful Secret Kitchen preview. The next real implementation step remains blocked until MC/founder/owner gates clear.
