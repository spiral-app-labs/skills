# pepper-01

Bright, order-first, mid-tier-casual pizza / takeout template. First **order-primary** template in the catalog and first to use a **saturated candy-color deal grid** as the hero conversion surface. Recreation of [pepper.framer.website](https://pepper.framer.website).

- **Archetype:** `light-casual-order-primary-pizza-takeout`
- **Best fit:** pizza shops, slice joints, wing takeout, delivery-first ghost kitchens, family-feed bundles, multi-unit chains.
- **Bad fit:** any reservation-primary venue, fine-dining, cocktail bars, coffee shops, heritage trattoria.
- **Register siblings / disambiguation:** see `research/site-router.md` and `research/template-audits/pepper-01.md` §9.

## Quick start

```bash
npm install
npm run typecheck
PORT=3106 npm run dev
# open http://localhost:3106
```

## What's locked (do NOT touch — see audit §12.4)
- Candy-color 2x2 deal grid with saturated bg + photo bleed + Order Now pill.
- Gabarito weight 800 on every headline.
- Cherry Bomb One restricted to wordmark only.
- Saturated brand-red `#FF003C`-class full-bleed footer.
- Confetti-illustration hero (subtle reveal, no scroll motion).
- Light-mode canvas.
- Single-page anchor-nav menu.
- Order-primary CTA register (no reservation widgets).

## What's swappable (see `content.example.ts` + audit §12.1–12.3)
- Brand name, wordmark text, tagline, hero copy.
- All photos (every `photo` field — currently Unsplash placeholders).
- 4 deal card colors (`accentDeal1-4` in `theme.ts`) — must stay saturated.
- Confetti ingredient set (swap per cuisine).
- Dish items, deal items, dessert items, location tiles.
- Accordion copy (delivery / pickup / etc).
- Addresses + hours + phone + social links.
- Chef testimonial (or remove entirely).
- Location finder (swap tiles or replace with single-location variant).

## File structure
```
pepper-01/
├── app/
│   ├── layout.tsx           # Cherry Bomb One + Gabarito via next/font/google
│   ├── globals.css
│   ├── page.tsx             # / single-page home w/ #menu anchor
│   ├── contact/page.tsx     # /contact
│   └── about/page.tsx       # /about (rebuilt — source is 404)
├── components/              # 12 components — see audit §11
├── theme.ts                 # locked tokens
├── tailwind.config.ts
├── content.example.ts       # fork replaces this
├── source.md                # provenance notes
└── README.md
```

## Recreation notes
See `source.md` for: what was recreated faithfully, what was substituted (confetti emoji vs SVG, deal-card hex color picks, rebuilt /about page), and what fork-agents MUST replace.
