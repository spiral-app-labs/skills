# labrisa-01

> French Riviera / Mediterranean coastal upscale template. Two-token cream + cocoa palette, Imbue variable serif, 150px H1 locked across every page, 3-up `ServiceTypeSelector` for venues with multiple revenue streams (dine-in + at-home + private dining). Recreation of [labrisa.framer.website](https://labrisa.framer.website).

**Audit:** [`research/template-audits/labrisa-01.md`](../../research/template-audits/labrisa-01.md) — read first. §12 personalization manifest is the fork playbook.

**Stack:** Next.js 14 (app router) · TypeScript · Tailwind v3 · Framer Motion · Imbue Variable (primary) + La Belle Aurore (script captions) + Inter (form utility sans).

---

## What this template represents

French Riviera coastal-upscale dining. Warm cream paper canvas, deep cocoa ink, hand-illustrated "Bienvenue!" + sailboat brand iconography, scrapbook-drift photo vignettes with French script captions, and a 3-up multi-service selector that routes to different booking flows (Main Reservation / Dine at Home / Private Dining). **First catalog template with:**
- Serif-dominant typography (Imbue at 150px H1 across every page)
- Hand-drawn illustrated brand lockup
- Multi-service-stream selector for venues with dine-in + catering + private events
- Scrapbook-drift motion (rotated photo vignettes)
- La Belle Aurore script accent for localized captions

**Best fit:**
- French Riviera / Côte d'Azur restaurants
- Mediterranean coastal upscale (Italy/Spain/Greek islands)
- Destination resort restaurants
- Venues with multiple revenue streams (dine-in + catering + private dining)
- Bistros with heritage stories (1970s-1980s family-owned)
- Seaside spots, yacht-club-adjacent concepts

**Bad fit — route elsewhere:**
- Fast-casual takeout → `pepper-01`
- Heritage trattoria Italian → `gusto-01`
- Upscale chef-driven Italian → `varro-01`
- Michelin-tier fine dining → `alinea-01`
- Modernist cocktail bar → `velvet-shaker-01`
- Coffee shop → `latte-01`

---

## Signature patterns

1. **`ServiceTypeSelector`** — 3-up "Main Reservation / Dine at Home / Private Dining" cards. **Promote-now candidate** — first catalog primitive for venues with 2+ revenue streams.
2. **`BrandIllustrationLockup`** — inline-SVG sailboat + "Bienvenue!" script. First catalog template with hand-drawn brand iconography.
3. **`JournalVignetteStrip`** — 4-up French-captioned photo vignettes with scrapbook drift rotations.
4. **150px H1 locked** across every page — the real scale signature (more load-bearing than the font choice per audit).
5. **Two-token paper + ink palette** — `#FAF7ED` cream + `#452D26` cocoa, zero accent color. Warmth comes entirely from photography.
6. **`NewsletterBand`** — disambiguated "Rendez-Vous Émails" as email subscribe (not reminder-booking).

---

## Quickstart

```bash
npm install
PORT=3112 npm run dev      # http://localhost:3112
npm run typecheck
npm run build
```

All 4 routes (`/`, `/menu`, `/about`, `/contact`) should return 200.

---

## File layout

```
labrisa-01/
├── app/
│   ├── layout.tsx                      # Imbue + La Belle Aurore + Inter via next/font/google
│   ├── globals.css                     # Tailwind + type + scrapbook-drift utilities
│   ├── page.tsx                        # / home — hero + Bienvenue + vignettes + center dish + services + journal + newsletter + sign-off
│   ├── menu/page.tsx                   # /menu — 150px hero + category rail
│   ├── about/page.tsx                  # /about — 150px hero + editorial pull-quote + prose + moments strip
│   └── contact/page.tsx                # /contact — 150px hero + call/write cards + hours + map
├── components/
│   ├── CreamStripNav.tsx               # persistent flat nav
│   ├── RivieraHero.tsx                 # home 150px hero + upper-right intro card
│   ├── PageHero.tsx                    # 150px hero for /menu, /about, /contact (shared)
│   ├── BrandIllustrationLockup.tsx     # inline-SVG sailboat + "Bienvenue!" (SIGNATURE)
│   ├── JournalVignetteStrip.tsx        # 4-up French-captioned photos with scrapbook drift
│   ├── CenterDishPhoto.tsx             # wide hero-secondary dish photo
│   ├── ServiceTypeSelector.tsx         # 3-up multi-service selector (PROMOTE-NOW)
│   ├── TheJournalBlogBlock.tsx         # 3-up journal article cards
│   ├── NewsletterBand.tsx              # cocoa band "Rendez-Vous Émails" subscribe
│   ├── SignOffBand.tsx                 # closing "À Bientôt by the Riviera"
│   ├── MenuCategoryRail.tsx            # 2-col menu list with category labels
│   ├── AboutEditorial.tsx              # 75px pull-quote + prose + moments drift strip
│   ├── ContactCardsGrid.tsx            # 2 call/write cards + hours band + map inset
│   └── CreamFooter.tsx                 # cocoa-bg footer with brand + nav + social
├── theme.ts                            # locked tokens — cream #FAF7ED + cocoa #452D26 + Imbue
├── tailwind.config.ts
├── content.example.ts                  # placeholder content (fork replaces)
├── source.md                           # provenance + what was recreated
└── package.json
```

---

## Forking for a real restaurant

1. **Replace `content.example.ts`** with your real content (brand, menu, about copy, journal articles, service blocks, contact).
2. **Author your own brand illustration** — the sailboat + "Bienvenue!" lockup in `BrandIllustrationLockup.tsx` is a placeholder. Inline your own SVG (audit §12.4 calls this a required fork task — can't be stock art).
3. **Replace all Unsplash photos** — hero, vignettes, dishes, services, journal, about moments, contact map. The warm-graded coastal photography is load-bearing (see §12.4).
4. **Map your services to the 3-up selector.** If you only have dine-in, consider routing to `alinea-01` or `1776-redesign-01` instead — the `ServiceTypeSelector` pattern only pays off with 2+ revenue streams.
5. **Localize the script captions.** `La Belle Aurore` italic script is used for French vignette captions and "Bienvenue!" — swap to your own language or keep as-is if you want the Riviera register.
6. **Wire the newsletter** — `NewsletterBand` has a placeholder input; replace the `onSubmit` with your real email-capture endpoint (Mailchimp, Substack, Beehiiv, etc.).

---

## What's locked (do NOT change)

From audit §12.4:
- **150px H1 on all entry pages.** Downsizing below ~100px shifts register toward generic bistro.
- **Two-token palette.** Adding an accent color destroys the "paper and ink" restraint.
- **Imbue as primary typography.** Swapping to a sans or non-serif-dominant family breaks the heritage-editorial register.
- **Cream `#FAF7ED` canvas + cocoa `#452D26` ink.** Flipping to dark-mode breaks the brochure feel.
- **3-up service selector structure.** Collapsing to a single reservation link erases the multi-service positioning.
- **Hand-drawn illustrated lockup pattern.** Removing the SVG brand mark (even if placeholder) erases the character.
- **Scrapbook-drift motion on vignettes.** Removing rotations kills the journal aesthetic.
- **No uppercase text in body prose.** Uppercasing shifts register toward qitchen/velvet-shaker.
- **Hard rectangles (button-radius 0).** Rounding pills kills the brochure feel.

---

## Inspiration vs implementation

- **Source:** [labrisa.framer.website](https://labrisa.framer.website) — French Riviera restaurant template.
- **What was recreated:** 4-page architecture (home / menu / about / contact), cream + cocoa two-token palette, Imbue 150px H1 locked across pages, hand-drawn SVG "Bienvenue!" + sailboat lockup, 4-up French-captioned vignette strip with scrapbook drift, 3-up multi-service selector, "The Journal" 3-card blog block, cocoa "Rendez-Vous Émails" newsletter band (disambiguated as subscribe), sign-off band, cocoa footer.
- **Substitutions:** Geist → Inter (Geist not on Google Fonts); La Belle Aurore used for script captions; inline-SVG brand lockup is placeholder (real forks author their own).
- **What was simplified:** Menu page is a 2-col category rail (source had a sticky-left variant); contact map is an Unsplash placeholder (real forks embed a Google Map iframe).

See [`source.md`](./source.md) for full provenance.
