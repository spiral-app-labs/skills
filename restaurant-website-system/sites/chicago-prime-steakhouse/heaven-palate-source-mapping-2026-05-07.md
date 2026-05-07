# Chicago Prime Steakhouse — Heaven Palate source mapping

- Date: 2026-05-07
- Status: **local implementation-source mapping prepared / not build authorization**
- Canonical archetype: **Heaven Palate**
- Buildable implementation source: `restaurant-website-system/templates/1776-redesign-01/`
- Framer reference source: `restaurant-website-system/inputs/framer-templates/heaven-palate-01/`
- Build status: **not build-authorized**
- Owner outreach status: **not sent**
- MC status: pending protected API auth/provisioning and attach replay

## Decision

Keep **Heaven Palate** as Chicago Prime Steakhouse’s canonical archetype, but do **not** wait for a nonexistent local `templates/heaven-palate-*` directory before future implementation.

If/when Ethan/founder/MC authorizes a build, use `restaurant-website-system/templates/1776-redesign-01/` as the buildable source template and adapt it into the Heaven Palate steakhouse register using the routing/build brief constraints.

## Why this mapping is necessary

The local repo does not contain a buildable `restaurant-website-system/templates/heaven-palate-*` implementation. The only Heaven Palate source in the repo is:

- `restaurant-website-system/inputs/framer-templates/heaven-palate-01/source.md`
- `restaurant-website-system/inputs/framer-templates/heaven-palate-01/meta/home.json`

That source explicitly says Heaven Palate was evaluated and rejected as a catalog template because it duplicates the warm-upscale fine-dining register better represented by `1776-redesign-01`:

- Heaven Palate is dark green / cream-gold / gold accent.
- It uses oversized Playfair/Merriweather fine-dining typography.
- It is reservation-led.
- It overlaps the same warm-upscale destination lane as `1776-redesign-01` but with less typographic discipline.

So the correct build path is not to invent a new template or fork from scratch. The correct path is to use the implemented `1776-redesign-01` codebase and personalize it toward the Heaven Palate/Chicago Prime steakhouse system.

## Why `1776-redesign-01` is the right buildable source

`1776-redesign-01` already has the practical pieces Chicago Prime needs:

- Full buildable Next.js 14 / TypeScript / Tailwind / Framer Motion template.
- Premium fine-dining long-scroll homepage.
- Dark-warm cinematic palette and photo treatment.
- Serif display system with italic emphasis.
- Full-bleed hero with dual CTAs.
- Multi-channel reservation strip that supports OpenTable + Call.
- Featured card grid usable for steaks/seafood/wine/private dining.
- Testimonial/proof surfaces that can remain internal or owner-approved.
- Quote/photo overlay usable for legacy/hospitality story.
- About/story page structure usable for George A. Kalkounos legacy if approved.
- Contact page and rich footer suitable for address, phone, hours, directions, private dining, order providers, gift cards, and socials.

The template inventory also identifies steakhouse as a gap and says to use `1776-redesign-01` or `varro-01` with content swap. Chicago Prime’s wine/private-event/fine-dining warmth makes `1776-redesign-01` the stronger source than `varro-01`.

## What must remain Heaven Palate / Chicago Prime specific

Using `1776-redesign-01` as the buildable source must not turn the preview into a 1776-style American destination clone. The future builder should preserve the Heaven Palate routing intent:

1. **Classic steakhouse confidence**
   - Dark charcoal / oxblood / espresso / warm ivory / muted brass palette.
   - Large classic serif identity.
   - Mature spacing and restrained motion.

2. **Reserve + Private Dining as the conversion spine**
   - Primary CTA: Reserve a Table.
   - Secondary CTA: Private Dining.
   - Supporting actions: Menu, Call, Directions.
   - Order providers stay utility-level unless owner requests otherwise.

3. **Chicago Prime content hierarchy**
   - Steakhouse craft: prime steaks, seafood, chops, wine/cocktails.
   - Private rooms/events as a major revenue path.
   - Live lounge/patio as supporting mood.
   - George A. Kalkounos hospitality legacy handled respectfully.
   - Visit/CTA close with address, phone, hours, reservation path, private dining email, and verified links.

4. **Truth-safety**
   - No fake awards, ratings, review quotes, capacities, live schedules, menu details, prices, provider links, or image rights.
   - Review proof and “award-winning” language remain owner-approved only.
   - Private dining details and live entertainment schedule must be confirmed before public use.

## Locked source files for future builder

When authorized, start from:

- `restaurant-website-system/templates/1776-redesign-01/app/page.tsx`
- `restaurant-website-system/templates/1776-redesign-01/content.example.ts`
- `restaurant-website-system/templates/1776-redesign-01/theme.ts`
- `restaurant-website-system/templates/1776-redesign-01/components/FullBleedHero.tsx`
- `restaurant-website-system/templates/1776-redesign-01/components/FeaturedCardGrid.tsx`
- `restaurant-website-system/templates/1776-redesign-01/components/MoreThanAMealSplit.tsx`
- `restaurant-website-system/templates/1776-redesign-01/components/MultiChannelReservationStrip.tsx`
- `restaurant-website-system/templates/1776-redesign-01/components/QuoteOnPhotoOverlay.tsx`
- `restaurant-website-system/templates/1776-redesign-01/components/RichFooter.tsx`

Reference, but do not fork directly from:

- `restaurant-website-system/inputs/framer-templates/heaven-palate-01/source.md`
- `restaurant-website-system/inputs/framer-templates/heaven-palate-01/meta/home.json`

## Future fork command after authorization

Do not run this until MC/founder authorization is explicit:

```bash
node restaurant-website-system/scripts/fork-template.mjs \
  --template 1776-redesign-01 \
  --slug chicago-prime-steakhouse-preview
```

Use a distinct preview slug or MC-approved project slug so existing evidence artifacts under `sites/chicago-prime-steakhouse/` are not overwritten. Do **not** use `--force` unless MC explicitly approves overwriting the current artifact directory.

## Remaining blockers

This artifact resolves the local implementation-source ambiguity only. These blockers remain:

- Protected MC agency API auth/provisioning.
- Founder approval to proceed.
- Owner confirmations/currentness and photo rights.
- Preview/build authorization.
- Build execution.
- QA evidence and link/claim validation.
- Owner outreach authorization.

## Verdict

Heaven Palate remains the correct Chicago Prime archetype. The practical source mapping is now clear: use `1776-redesign-01` as the buildable implementation base, then adapt it into the classic reservation-led steakhouse experience specified by the Chicago Prime routing and builder briefs.
