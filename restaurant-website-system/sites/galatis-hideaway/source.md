# pepper-01 — recreation provenance

- **Source:** https://pepper.framer.website (Framer marketplace template by Uihub.design)
- **Audit:** `research/template-audits/pepper-01.md`
- **Recreation date:** 2026-04-19
- **Register:** Mid-tier casual pizza / takeout, order-primary (DoorDash), candy-color deal grid, bubble-letter wordmark.

## What was recreated faithfully
- **Typography:** Cherry Bomb One (wordmark only) + Gabarito (headlines weight 800, body) — both Google Fonts, no license substitution needed.
- **Color tokens:** `#FFFFFF` canvas, `#1A1A1A` ink, `#FF003C` brand accent (all `[observed]` from `meta/home.json`).
- **Section order:** Confetti hero → Fan Favorites 3-up → 2x2 candy deal grid → Desserts 3-up → Location finder strip → Chef testimonial band → Closing CTA → Saturated footer — matches audit §3 structure exactly.
- **Single-page anchor menu:** Nav "Menu" link → `/#menu` anchor (source returns 404 at `/menu` per audit §3).
- **"Pickup Info" typo fix:** Source has "Pickp Info" (audit §12.2). We corrected to "Pickup Info" in the locations accordion.
- **Chef testimonial band:** Kept despite audit §7 flagging it as a weak fit for the register — fork-agents may remove for single-operator brands without a photogenic chef.

## What was substituted (documented here so forks know)
- **Confetti ingredient illustrations:** Source uses PNG/SVG ingredient cutouts (basil, cherry tomato, mushroom slice, olive, chili). We substituted Unicode food emoji (🌿 🍅 🫒 🌶️ 🍄 🧀 🧄) for zero-bandwidth and cross-platform legibility. Fork-agents may swap in custom SVG cutouts per cuisine — see `content.confetti` in `content.example.ts`.
- **Deal-card hex tokens:** Audit §4 flagged these as `[inferred]` (meta doesn't capture section bg). We color-picked from `/tmp/pepper-view/desktop-home.png`:
  - `#E8223B` red (Spicy Duo)
  - `#F5C945` yellow (Cheese Lovers)
  - `#3DAE4E` green (Veggie Delight)
  - `#E87521` orange (Meat Treat)
  These are sensible saturated approximations — not pixel-exact. Any fork wanting precision should re-pick from their own product photography.
- **`/about` page:** Source returns Framer 404 for `/about` (audit §3). We built a rebuilt About page from scratch using pepper tokens so fork-agents have a real page to customize (title + intro + stats row + photo + paragraphs). Remove if not needed.
- **Placeholder photography:** Hotlinked Unsplash food photography. Forks MUST replace with real brand photography — Unsplash URLs in `content.example.ts`.
- **Order Now nav CTA:** Audit §5 flagged "no persistent order CTA" as a conversion weakness — we added a persistent `Order Now` pill in the top nav by default (routes to `content.nav.cta.href` → DoorDash placeholder). Recommended upgrade, not literal recreation.
- **Marketplace badges ignored:** The "Remix for FREE" pill (top-right of source nav) and "Made in Framer" footer badge are Framer marketplace scaffolding, NOT template content. Intentionally omitted per audit note §3.
- **Confetti motion:** Source declares `animations: []` — zero CSS keyframe animations. We added a one-time opacity/scale reveal on mount only (no scroll-driven motion). Matches audit motion intensity 1 rating.

## Structural deviations from audit §11
- None. All 12 components listed in audit §11 implemented, with `AnchorNavMenuRouter` handled inline via hash links rather than as a separate utility (simpler + no bundle cost).

## What fork-agents MUST replace
1. **All Unsplash photos** — `content.hero.photo`, every `photo` field in `fanFavorites.dishes`, `deals.items`, `desserts.items`, `locations.tiles`, `testimonial.photo`, `closingCTA.photo`, `about.photo`.
2. **Brand name + wordmark text** — `content.brand.name` (appears in top nav, footer, metadata).
3. **Contact info** — addresses, phone, email, delivery email, hours.
4. **Order CTA href** — `content.nav.cta.href` currently points to generic DoorDash; replace with operator's actual storefront URL (DoorDash / Toast / Uber Eats / direct Square).
5. **Deal card `color` values** — or swap the `accentDeal1-4` tokens in `theme.ts` to the fork's brand palette (must stay saturated per audit §12.1).
6. **Confetti ingredient set** — swap `content.confetti[].emoji` or replace with SVG imports per cuisine (burger → 🧀🥒🍟🍅; wings → 🌶️🥬; taco → 🫒🌶️🥑).
7. **Chef testimonial** — provide real chef + quote or remove section outright (see §7).
8. **Location finder tiles** — swap cities + photos, or switch to single-location variant (one address block + map) for single-unit operators.

## Never touch (carries the register — audit §12.4)
- Candy-color 2x2 deal grid with saturated bg + photo bleed + Order Now pill.
- Gabarito weight 800 on all headlines.
- Cherry Bomb One restricted to wordmark only (do not expand to H1/H2).
- Saturated brand-red `#FF003C`-class full-bleed footer.
- Confetti-illustration hero (do not replace with single photo).
- Light-mode canvas (`#FFFFFF`).
- Single-page anchor-nav menu (do not split to `/menu` page).
- Order-primary CTA register (do not add Tock/Resy/OpenTable — route to a different template if reservations are needed).
