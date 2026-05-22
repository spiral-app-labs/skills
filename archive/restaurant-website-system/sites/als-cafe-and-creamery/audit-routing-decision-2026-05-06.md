# Al's Cafe & Creamery — audit + routing decision packet

- Checked: 2026-05-06 09:53 CDT
- MC root: `Website: Als Cafe and Creamery`
- Root task id: `3ae4091c-c686-4270-8298-afd0cc5c913b`
- Next child task id: `cd3f2c60-da4a-4c05-8e83-69eb33dfde54`
- Current checklist stage: `blocked` / `unrouted`
- Supabase/MC writes: **not performed**. This is a local writeback packet only.

## Recommendation

**Keep blocked / skip for now. Do not advance to build with the current catalog.**

Al's is a real lead with a concrete site-improvement case, but it is not safely routable to any existing template without flattening the thing that makes it worth pitching: a heritage-Americana chef-owned cafe/diner/creamery inside the 1892 Ranstead Building, with Burns Malts, American comfort food, European-influenced chef specials, wine/cocktails, and phone-first reservation culture.

The next task **cannot safely advance** until founder/MC either:

1. selects/adds a dedicated **heritage-Americana diner/creamery** archetype, or
2. explicitly retires/skips this lead, or
3. explicitly approves a custom experimental fork despite the mismatch.

My recommendation is option 2 unless Ethan/Donna want this as a template-gap seed. If kept, make it a **catalog-gap candidate**, not a build target.

## Why this is still a template gap

### Verified identity signals

- Google Maps describes it as a "quaint spot in an 1892 building serving creative American cooking & old-fashioned ice cream treats" and shows 4.6 stars / 959 reviews.
- Official history page says the Ranstead Building was completed in 1892, Al's Cafe & Creamery opened in 1982, and the Burns' Malts recipe came from Burns Pharmacy.
- Official about page positions Chef Tony Jamin as trained in Holland, Germany, and France, with comfort food plus innovative European/American fusion.
- Official menu shows broad American/New American comfort food: sandwiches, burgers, salads, seafood, schnitzel specials, wine/beer/cocktails, desserts, and Burns Malts.
- Official homepage conversion paths are phone reservations `(847) 742-1180`, Toast takeout, hours/location, menus, Burns Malts, and contact.

### Current-site opportunity

There is a legitimate pitch angle:

- Wix-era design feels dated.
- Mobile header/nav is cramped/clipped and text is too small.
- Chef/monthly specials and Burns Malts are under-leveraged.
- The 1892 building story is buried on a subpage.
- Reservations are phone-first and not surfaced as cleanly as they could be.

But a redesign that does not honor the historic building + creamery/malt identity would be worse than the current site because the current site at least preserves those facts.

## Existing-template fit check

| Candidate | Fit | Why not safe |
|---|---:|---|
| `plate-01` / modern casual bistro | Partial menu fit, bad brand fit | Router explicitly says Plate should avoid heritage framing. It would clean up the site but flatten the 1892/creamery/malt character into generic modern New American. This repeats the lead-qualification blocker. |
| `latte-01` / café-brunch | Weak | Al's is not commodity-priced specialty coffee/daytime-only. It is full-service lunch/dinner with phone reservations, wine/cocktails, chef specials, and heritage malts. |
| `bramble-01` / warm retro cocktail bar | Weak/unsafe | Warm retro texture helps, but Bramble is bar/music/cocktail-led with food. Al's is restaurant/creamery-led, not a cocktail venue or nightlife/day-bar concept. |
| `roma` / editorial restraint | Unsafe | Too museum/editorial and too minimal for a menu-heavy neighborhood institution. Would hide practical conversion paths and risk over-luxurying the diner/creamery feel. |
| `cuisine` / organized warmth | Closest structurally, still insufficient | The clarity/family-restaurant IA is useful as a reference, but it lacks the dedicated historic-Americana/creamery visual language needed to make the pitch truthful. Also not in the current 13-template inventory as a recreated ship target. |
| `1776-redesign-01` / warm upscale destination | Tempting but oversells | Has heritage-American warmth and chef-driven potential, but it is $$$+ destination/wine-forward. Al's is $$ historic cafe/creamery/diner. Heavy adaptation would effectively become a custom archetype. |
| `gusto-01` / heritage Italian | Wrong cuisine | Heritage stamp/testimonial mechanics are useful, but the template is Italian-specific and candlelit trattoria-coded. |
| `varro-01` / serious Italian institution | Wrong cuisine/register | Chef-driven mechanics are useful, but it is serious Italian fine-dining/multi-chef coded. |
| `qitchen-01`, `alinea-01`, `labrisa-01`, `velvet-shaker-01`, `bamzi-01`, `pepper-01`, `saladify-01` | No | Fine-dining, coastal, cocktail, pan-Asian/accent, takeout, or health registers do not match. |

## What a correct archetype would need

If Spiral wants to revisit Al's, the needed archetype is roughly:

**Heritage-Americana diner/creamery / chef-owned historic cafe**

Required design language:

- Warm historic storefront/wood/Victorian details, not sleek white bistro.
- Prominent heritage stamp: `Ranstead Building · 1892` and/or `Al's Cafe & Creamery · since 1982`.
- Burns Malts / ice cream as a hero-level signature, not just a subpage.
- Chef-owned scratch-made food story that can hold both Reubens/burgers and schnitzel/salmon/wine without feeling incoherent.
- Practical conversion: phone reservations, Toast takeout, hours, address, and menu should be extremely obvious on mobile.
- Menu architecture that can handle lunch, dinner, beverages, desserts, specials, and malts.

Potential components to borrow later: `gusto-01` heritage/testimonial mechanics, `plate-01` menu clarity, `bramble-01` warmth/texture, `1776-redesign-01` warm editorial confidence. But borrowing components is **not** the same as routing this to an existing archetype.

## Evidence artifacts

Primary evidence packet:

- `public-evidence-2026-05-06.md`

Screenshots:

- `screenshots/current-site-desktop-full.png`
- `screenshots/current-site-mobile-fold.png`
- `screenshots/current-site-mobile-fullish.png`
- `screenshots/current-site-desktop-full-thumb.png`
- `screenshots/current-site-mobile-fold-thumb.png`
- `screenshots/current-site-mobile-fullish-thumb.png`

Scrapes:

- `scrapes/current-site-text.txt`
- `scrapes/menus-text.txt`
- `scrapes/about-text.txt`
- `scrapes/history-text.txt`
- `scrapes/burns-malts-text.txt`
- HTML mirrors in `scrapes/*.html`

Local MC writeback artifact:

- `mc-writeback-blocker-2026-05-06.json`

## Final routing decision

- `lead-fit-qualified`: **failed / remains blocked**
- `current-site-audit`: **passed locally** — evidence captured in screenshots/scrapes/public packet
- `template-route-locked`: **failed** — no safe existing archetype/template
- `fork-built`: **do not start**

**Safe to advance next task? No.** Keep blocker: `template-gap: heritage-Americana diner/creamery`.
