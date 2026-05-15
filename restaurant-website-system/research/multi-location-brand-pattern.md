# Multi-location brand pattern

Reusable pattern for any restaurant lead operating two or more locations under one brand name, where each location has its own ops (separate Tock, Toast, phone, sometimes delivery partner). Validated on bistro-wasabi 2026-05-12.

## When this pattern applies

The lead is one brand, multiple physical restaurants, with **per-location operational independence**:

- Separate phone numbers per location
- Separate Tock / OpenTable reservation accounts per location
- Separate Toast / online-order accounts per location
- Possibly separate delivery partners (one location on Uber Eats, another on Grubhub, etc.)
- Shared brand identity (logo, design register, menu philosophy, hours pattern) but distinct addresses and ops contacts

When the lead is one brand running one physical room — use the standard single-location template structure. When the lead is a franchise with centralized ops — different pattern (typically a location picker that hands off to a corporate booking system).

## Anti-patterns this replaces

- Hardcoding one location's Tock URL as the global "Reserve" CTA — silently misroutes half the guests to the wrong restaurant
- Treating the second location as a sub-page mention only — undersells the second restaurant and offers no way to reserve there
- Using a single phone number in the footer — works for the first location, breaks the second

## Required `content.ts` shape

Per-location link bundles, namespaced by location key, with legacy aliases preserved for backwards compatibility with any components that haven't been updated yet:

```ts
export const links = {
  // Lake in the Hills (flagship)
  lakeTock: 'https://www.exploretock.com/bistrowasabilakeinthehills',
  lakeCarryOut: 'https://order.toasttab.com/online/bistro-wasabi-lith-4590-w-algonquin-rd',
  lakeGiftCards: 'https://www.toasttab.com/bistro-wasabi-lith-4590-w-algonquin-rd/giftcards',
  lakeDelivery: 'https://www.ubereats.com/store/bistro-wasabi/jnP8YukWRxiW3drzGHnnrg',
  lakePhone: 'tel:+18475152700',
  lakeDirections: 'https://www.google.com/maps/search/?api=1&query=...',

  // Hoffman Estates (sister restaurant — separate ops)
  hoffmanTock: 'https://www.exploretock.com/bistrowasabihoffmanestates',
  hoffmanCarryOut: 'https://order.toasttab.com/online/bistro-wasabi-hoffman-estates-1578-w-algonquin-rd',
  hoffmanGrubhub: 'https://www.grubhub.com/restaurant/bistro-wasabi-1578-w-algonquin-rd-hoffman-estates/614675',
  hoffmanPhone: 'tel:+18472021577',
  hoffmanDirections: 'https://www.google.com/maps/search/?api=1&query=...',

  // Brand-shared
  email: 'mailto:thebistrowasabi@gmail.com',

  // Legacy aliases — kept so older catalog components keep working. Always
  // prefer the location-specific link above when wiring new components.
  tock: 'https://www.exploretock.com/bistrowasabilakeinthehills',
  carryOut: 'https://order.toasttab.com/online/bistro-wasabi-lith-4590-w-algonquin-rd',
  phone: 'tel:+18475152700',
};
```

A comment at the top of `content.ts` should call out that the two restaurants are operationally independent — never cross-wire reservation/order links or phones. This is the kind of business-domain fact a future agent (human or AI) cannot derive from the code alone, so it earns the comment.

## Per-location data shape

`content.locations[]` carries everything the detail page needs:

```ts
locations: [
  {
    slug: 'lake-in-the-hills',
    name: 'Lake in the Hills',
    role: 'Flagship dining room',         // one-line eyebrow
    shortLine: '...',                      // hero sub for the detail page
    longDescription: '...',                // about-this-room paragraph
    address: '4590 W Algonquin Rd, Lake in the Hills, IL 60156',
    phone: '847-515-2700',
    geo: { lat: 42.1869, lng: -88.3225 }, // for LiveMapEmbed
    parking: 'Strip-mall lot, free, ample at dinner hours.',
    services: ['Sushi bar seating', 'Full dinner menu', 'Carry-out', 'Reservations via Tock'],
    actions: [
      { label: 'Reserve a table', href: links.lakeTock },
      { label: 'Order carry-out', href: links.lakeCarryOut },
      { label: 'Get directions',  href: links.lakeDirections },
      { label: 'Call this location', href: links.lakePhone },
    ],
  },
  { slug: 'hoffman-estates', ... },
],
```

The `actions` array drives the per-location CTA list on the detail page; the order and labels can be tuned per lead based on what the audit said matters most.

## Route structure

Two routes carry the locations work:

### `/locations` — the picker
A flat list of all locations as cards, each linking to its detail page. Used by the nav "Reserve" CTA when the brand's reserve flow needs the guest to pick a location first.

Implementation lives in `app/locations/page.tsx` (or the template's locations route equivalent).

### `/locations/[slug]` — the detail page
Dynamic route. `generateStaticParams` from `content.locations`. Each detail page renders:

- Back-link to `/locations`
- Eyebrow with the location's `role`
- h1 with the location's `name`
- Sub with the location's `shortLine`
- `LiveMapEmbed` (mobile 16/9 + desktop 21/9 variants)
- About-this-room paragraph (`longDescription`)
- Services list (`services[]`)
- Parking note (`parking`)
- Sticky right-rail aside with: address, phone, `LiveOpenStatus` + hours grid, per-location actions list

Standard sticky-aside grid:
```tsx
<section className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-12 md:gap-20">
  <div>{/* main column: about, services, parking */}</div>
  <aside className="md:sticky md:top-32 md:self-start">{/* address, phone, hours, actions */}</aside>
</section>
```

The aside stays anchored as the guest scrolls through long-form content — the actions list is always in reach.

## Hero CTA flow

Two valid configurations, picked by the audit's positioning:

### Configuration A — two location pills in the hero
When both locations are roughly equally important and the audit's Hero Lock points at the locations as the main differentiator. Hero contains two `<a href="/locations/[slug]">` pills below the wordmark/sub stack, side-by-side on desktop and stacked on mobile. Each pill renders the location name + a sublabel (e.g. `LAKE IN THE HILLS` / `Algonquin Road flagship`).

This skips the `/locations` picker entirely on the home-page entry — the guest picks at the hero and lands directly on the detail page.

### Configuration B — nav "Reserve" routes to the picker
The nav-level "Reserve" CTA points at `/locations` (not a Tock URL) so the picker handles the location selection. Use this when the hero is doing other work (a marquee dish, a story arc) and adding location pills would over-clutter.

In both configurations, the `FloatingHeaderPill` + `MobileActionBar` carry the always-visible conversion floor and route to `/locations` so a guest who scrolls past the hero still has a path.

## Aliveness inheritance

- `LiveOpenStatus` reads from a brand-shared `hoursConfig` (both locations on the same hours pattern is the common case; if they diverge, split into `lakeHoursConfig` / `hoffmanHoursConfig` and pass per-location)
- `LiveMapEmbed` renders per-location on the detail pages (uses each location's `address` + `geo`)
- `ScrollReveal` patterns are register-level, not location-level — no per-location work

## Standard component split

When this pattern is in play, the personalized fork ships with these dedicated components (don't collapse them into a single page-experience container):

- `components/LocationsPanel.tsx` — the home-page section that lists both locations as numbered cards linking to the detail pages
- `app/locations/page.tsx` — the picker route
- `app/locations/[slug]/page.tsx` — the dynamic detail route (referenced above)
- `components/LiveMapEmbed.tsx` — per-location maps (catalog-shared aliveness component)
- `components/FloatingHeaderPill.tsx` — points at `/locations`
- `components/MobileActionBar.tsx` — points at `/locations`

This is the "standard split" version of the decomposition guidance in `restaurant-hero-personalization` Phase 3.

## Audit signal that the lead is multi-location

In `restaurant-website-audit` outputs, the signal is:

- The audit lists 2+ distinct addresses
- The "ops contacts" block lists 2+ phones / 2+ booking URLs
- Google Business profile shows 2+ verified locations under the same brand
- The owner's social or about page describes them as "our second location" / "the original" / "sister restaurant"

When any of these signal multi-location, the route-lock step should flag this pattern as a required deliverable for the fork.

## Cross-references

- **Skill**: `restaurant-hero-personalization` Phase 3 — decomposition guidance lists `LocationsPanel.tsx` as a standard component
- **Pattern**: `restaurant-template-animations` BackgroundVideoAliveness — hero-internal CTA pills are the valid Configuration A
- **Audit**: `restaurant-website-audit` — the audit must surface multi-location ops contacts (separate phones / booking URLs) so the fork can wire them correctly
- **Aliveness**: `research/aliveness-patterns.md` — `LiveMapEmbed` + `LiveOpenStatus` interact with this pattern at the detail-page level

## Reference implementation

`restaurant-website-system/sites/bistro-wasabi/` is the validated reference, 2026-05-12:

- `content.ts` — per-location link bundles + legacy aliases + multi-location comment
- `app/locations/[slug]/page.tsx` — dynamic detail route with sticky aside
- `components/HeroVideoBackground.tsx` — Configuration A (two location pills in hero)
- `components/LocationsPanel.tsx` — numbered home-page locations section
- `components/FloatingHeaderPill.tsx` + `components/MobileActionBar.tsx` — conversion floor pointing at `/locations`
