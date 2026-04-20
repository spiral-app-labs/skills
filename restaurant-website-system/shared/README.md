# shared/

Authoritative source for cross-template components, utilities, and patterns. Templates **copy** these files into their own `components/` directory — each template stays a self-contained Next.js app with no cross-template imports.

This directory is the source of truth. If a shared pattern changes, update here first, then propagate into each consuming template.

---

## Contents

### `lib/`
Pure TypeScript utilities (no React, no runtime dependencies beyond what Node/browsers ship).

- **`hours.ts`** — restaurant hours + timezone-aware open/closed computation. Powers `LiveOpenStatus`. Pure functions, fully testable.

### `ui-atoms/`
Small React components. One per file. Named exports. No side effects.

- **`LiveOpenStatus.tsx`** — real-time open/closed indicator with countdown. Three variants: `dot` / `text` / `pill`. See [`research/aliveness-patterns.md`](../research/aliveness-patterns.md) §1.1.
- **`LiveMapEmbed.tsx`** — interactive Google Maps embed with "Get directions" CTA. Replaces any static address string. Supports keyed (NEXT_PUBLIC_GMAPS_KEY) + keyless fallback. See aliveness patterns §2.1.

### `motion/`
Framer Motion wrappers for consistent animation.

- **`ScrollReveal.tsx`** — fade + slide on scroll into view. Once-only. Three intensity variants (`ScrollRevealSubtle`, `ScrollRevealStandard`, `ScrollRevealScrapbook`) matching the theme motion intensity scale (1-3). Respects `prefers-reduced-motion`. See aliveness patterns §3.1.

### `tokens/`
(Future) shared design tokens — cross-template palette definitions, type scale baselines. Empty for now; tokens live per-template in `theme.ts`.

---

## How to consume from a template

Since each template is an isolated npm project, copy the needed file(s) into the template's `components/` (or create a `lib/` / `motion/` subdirectory if you want the directory structure to match).

### Example: add `LiveOpenStatus` to a template

1. Copy `shared/lib/hours.ts` → `templates/<slug>/lib/hours.ts`
2. Copy `shared/ui-atoms/LiveOpenStatus.tsx` → `templates/<slug>/components/LiveOpenStatus.tsx`
3. Fix the import inside `LiveOpenStatus.tsx`:
   ```ts
   // was:  import { ... } from '../lib/hours';
   // to:   import { ... } from '../lib/hours';
   ```
   (same if you used the `lib/` layout; adjust if you put hours directly under `components/`)
4. Wire into a page or hero component:
   ```tsx
   import { LiveOpenStatus } from '../components/LiveOpenStatus';
   import { content } from '../content.example';

   <LiveOpenStatus hours={content.brand.hoursConfig} variant="dot" />
   ```
5. Update the template's `content.example.ts` to include a `hoursConfig` matching the `HoursConfig` schema from `shared/lib/hours.ts`:
   ```ts
   hoursConfig: {
     timezone: 'America/New_York',
     ranges: [
       { day: 0, open: '11:00', close: '21:00' }, // Sunday
       { day: 1, open: '11:00', close: '22:00' }, // Monday
       // ...
     ],
     closures: [
       { date: '2025-12-25', label: 'Closed for Christmas · reopens Dec 26' },
     ],
   }
   ```

### Example: add `LiveMapEmbed` to a template

1. Copy `shared/ui-atoms/LiveMapEmbed.tsx` → `templates/<slug>/components/LiveMapEmbed.tsx`
2. Add required fields to `content.example.ts`:
   ```ts
   brand: {
     address: { line1: '...', line2: '...' },
     geo: { lat: 40.7128, lng: -74.0060 },
     // ...
   }
   ```
3. Use in /contact page (or wherever address shows):
   ```tsx
   <LiveMapEmbed
     address={`${content.brand.address.line1}, ${content.brand.address.line2}`}
     lat={content.brand.geo.lat}
     lng={content.brand.geo.lng}
     zoom={15}
   />
   ```
4. (Optional) For styled maps, set `NEXT_PUBLIC_GMAPS_KEY` in `.env.local` — the component auto-uses the Embed API when keyed.

### Example: add `ScrollReveal` to a template

1. Copy `shared/motion/ScrollReveal.tsx` → `templates/<slug>/components/ScrollReveal.tsx`
2. Wrap each major section:
   ```tsx
   import { ScrollReveal } from '../components/ScrollReveal';

   <ScrollReveal>
     <section className="py-24"> ... </section>
   </ScrollReveal>
   ```
3. For scrapbook-drift registers (labrisa, bramble), use `ScrollRevealScrapbook` variant.
4. Match `theme.motion.intensity`:
   - Intensity 1 (alinea, qitchen) → `ScrollRevealSubtle`
   - Intensity 2 (most templates) → `ScrollRevealStandard`
   - Intensity 3 (labrisa, bramble, pepper) → `ScrollRevealScrapbook`

---

## Why copy instead of import?

1. **Each template is a deliverable.** Clients fork one template at a time — no monorepo setup to explain.
2. **No cross-template version drift.** If a pattern evolves, the template that needs it gets the update when intentional.
3. **Next.js app router ergonomics.** Cross-directory imports with path mapping add complexity for a single-template deploy.
4. **Testability.** Pure utilities in `shared/lib/` can be unit-tested once; React components get tested per-template integration.

**Future path:** if we hit 20+ templates with heavy shared-code needs, promote `shared/` to an `npm` workspace package. Not today.

---

## Authoritative versions

The files in `shared/` are the canonical versions. Template `components/` copies may drift for template-specific reasons — if they do, document the drift in the template's `source.md`. When in doubt, diff against `shared/` and sync.
