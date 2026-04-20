# Aliveness Patterns

> **The principle:** A static restaurant website feels dated, amateur, and abandoned. An alive website feels cared-for, current, and premium — and it kills friction for the customer.
>
> **Rule:** Every template fork ships with an "aliveness pass" before launch. Pick the right patterns from this catalog for the template's register. A pizza shop needs different aliveness than a Michelin tasting room, but every restaurant needs SOME aliveness.
>
> **Conversion logic:** Aliveness is a trust signal ("someone is running this place today") + a friction killer ("I don't have to open Google Maps to see if you're open") + a register signal ("this place is current, not frozen from 2018").
>
> **Strategic companion:** `restaurant-website-strategic-principles.md` §10 introduces this pattern family. This doc is the implementation catalog.

---

## 1. Time-aware patterns (every template, always)

These are FREE friction-killers and trust signals. No customer should have to calculate "is this place open right now?"

### 1.1 `LiveOpenStatus` — the must-have pattern
**What:** Real-time indicator of open/closed state with countdown.

**Variants:**
- **Open + closing soon:** `🟢 Open now · closes in 1h 39m` (green dot + urgency)
- **Open + plenty of time:** `🟢 Open now · closes at 10pm` (green dot + steady)
- **Closed + opening soon:** `🟠 Opens in 12 min` (amber dot + anticipation)
- **Closed + opening later today:** `🔴 Closed · opens today at 5pm` (red dot + next open)
- **Closed + closed tomorrow too:** `🔴 Closed · opens Wednesday at 11am` (red dot + day-name)
- **Special case — holiday closure:** `🔴 Closed for Christmas · reopens Dec 27`

**Where to place:**
- Right-rail hero sidebar (gusto pattern) — highest visibility
- Top-nav eyebrow (near logo) — second-highest
- Sticky footer band (fallback for minimal templates)

**Implementation:**
```tsx
// components/LiveOpenStatus.tsx
'use client';
import { useEffect, useState } from 'react';

type Hours = { day: number; open: string; close: string }; // day: 0=Sun, close: "22:00"
type Props = { hours: Hours[]; timezone?: string };

export function LiveOpenStatus({ hours, timezone = 'America/New_York' }: Props) {
  const [status, setStatus] = useState<{ label: string; tone: 'open' | 'opening' | 'closed' }>();
  useEffect(() => {
    const tick = () => setStatus(computeStatus(hours, timezone));
    tick();
    const id = setInterval(tick, 60_000); // update every minute
    return () => clearInterval(id);
  }, [hours, timezone]);
  if (!status) return null;
  return (
    <div className={`flex items-center gap-2 ${toneClass(status.tone)}`}>
      <span className="w-2 h-2 rounded-full bg-current" />
      <span>{status.label}</span>
    </div>
  );
}

function computeStatus(hours: Hours[], tz: string) {
  const now = new Date(); // use date-fns-tz for real implementation
  const dow = now.getDay();
  const today = hours.find(h => h.day === dow);
  const minutesNow = now.getHours() * 60 + now.getMinutes();
  const openMin = parseHM(today?.open);
  const closeMin = parseHM(today?.close);
  if (today && openMin <= minutesNow && minutesNow < closeMin) {
    const until = closeMin - minutesNow;
    const h = Math.floor(until / 60), m = until % 60;
    const label = until <= 60
      ? `Open now · closes in ${m}m`
      : `Open now · closes in ${h}h ${m}m`;
    return { label, tone: 'open' as const };
  }
  if (today && minutesNow < openMin && openMin - minutesNow <= 60) {
    return { label: `Opens in ${openMin - minutesNow} min`, tone: 'opening' as const };
  }
  // ... fallback cases (closed today, closed tomorrow, etc.)
  const nextOpen = findNextOpen(hours, dow, minutesNow);
  return { label: `Closed · opens ${nextOpen}`, tone: 'closed' as const };
}
```

**Register adaptation:**
- Upscale (alinea, varro, qitchen): text-only, no emoji dots, restrained — `Open · closes at 10pm`
- Casual (pepper, plate, latte): emoji dots OK, urgency copy encouraged — `🟢 Open · closing in 38 min`
- Multi-service (labrisa): one LiveOpenStatus per service — main dining hours + bar hours separately

### 1.2 `DayPartGreeting` — subtle time-awareness
**What:** Hero copy that shifts by time-of-day.

**Variants:**
- Morning (6am-11am): "Good morning · espresso + morning buns ready" (latte)
- Lunch (11am-2pm): "Lunch today — order ahead, skip the line" (pepper)
- Dinner prep (4pm-6pm): "Tonight's reservation book opens at 5" (gusto)
- Dinner active (6pm-close): "Tonight's menu · 3 tables left" (1776)
- Late-night (post-9pm): "Last orders in 2h" (velvet-shaker)

**Where:** hero subhead, never the H1 itself (H1 stays stable for SEO).

**Register adaptation:** Only for templates targeting frequent-visit customers (latte, pepper, plate). Skip for destination templates (alinea, varro — customers plan weeks out, day-part is irrelevant).

### 1.3 `SeasonalMenuStamp`
**What:** Small persistent indicator that the menu is current — reassures regulars that it's not a ghost site.

**Examples:**
- `Spring menu · through May 30` (seasonal restaurants)
- `Tuesday pasta night · tonight only` (weekly specials)
- `Chef's tasting · 7-course · Oct 4-6 only` (events)

**Where:** above menu section, nav badge, or footer stamp.

---

## 2. Live data patterns (replace static content with real data)

### 2.1 `LiveMapEmbed` — replace the static address
**What:** Interactive map iframe (Google Maps / Mapbox / Apple Maps) with directions, zoom, satellite view.

**Why static addresses are dead content:**
- Customer has to open Google Maps themselves to see neighborhood + directions
- No sense of scale ("is this walkable from my hotel?")
- Doesn't reveal parking / transit / street level
- Looks amateur next to restaurants that have live maps

**Implementation:**
```tsx
// components/LiveMapEmbed.tsx
type Props = { address: string; lat: number; lng: number; zoom?: number; mapLabel?: string };

export function LiveMapEmbed({ address, lat, lng, zoom = 15, mapLabel }: Props) {
  const src = `https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GMAPS_KEY}&q=${lat},${lng}&zoom=${zoom}`;
  return (
    <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden">
      <iframe
        src={src}
        className="absolute inset-0 w-full h-full border-0"
        loading="lazy"
        title={mapLabel || `Map of ${address}`}
        allowFullScreen
      />
      <a
        href={`https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`}
        target="_blank"
        rel="noopener"
        className="absolute bottom-4 right-4 bg-white/95 px-4 py-2 rounded-pill text-sm font-medium shadow"
      >
        Get directions →
      </a>
    </div>
  );
}
```

**Register adaptation:**
- Premium (alinea, 1776, varro, labrisa): styled map via Mapbox with custom cartography — muted, editorial
- Casual (pepper, plate, latte): default Google Maps is fine — utility matters more than style
- Multi-location (pepper chain): map with all pins + nearest-location detector based on user geolocation

### 2.2 `LiveReviewsCarousel`
**What:** Auto-rotating carousel of actual Google/Yelp/OpenTable reviews, pulled live (or hourly-cached).

**Why static testimonials die:**
- Customers know the restaurant cherry-picked them
- No sense of volume or recency
- If dates are from 2019, the restaurant looks abandoned

**Implementation approaches:**
1. **Google Places API** — pull 5 most recent 4+ star reviews every hour, cache, render. Paid but authoritative.
2. **Yelp Fusion API** — similar, free tier available.
3. **Embedded widgets** — TrustPilot / ReviewTrackers / Birdeye drop-in iframes. Easiest but less customization.
4. **Webhook-fed static** — manually-vetted reviews sync'd nightly from Google into a Sanity/Contentful table.

**Component:**
```tsx
// components/LiveReviewsCarousel.tsx
'use client';
// rotates through reviews, 5s per, pausable on hover
// shows: avatar + name + stars + snippet + date + platform logo
// CRITICAL: show the count ("4.8 ★ · 1,247 Google reviews") for authority
```

**Register adaptation:**
- Neighborhood (gusto, plate, pepper): Google reviews + rating count in hero (gusto already does this; others should)
- Upscale (alinea, 1776, varro): press quotes rotating instead of user reviews ("'World-class' — NYT")
- Casual (latte, saladify): Instagram-embedded comments OR Google reviews

### 2.3 `LiveReservationAvailability`
**What:** Real-time table availability pulled from Tock/Resy/OpenTable.

**Variants:**
- `3 tables left tonight · 6:30, 7:00, 7:30 pm` (urgency)
- `Next available: Saturday, Oct 12 at 7pm` (scarcity)
- `Fully booked tonight — try tomorrow` (honesty)

**Where:** hero right-rail (gusto HeroHoursSidebar variant), or sticky bottom on mobile.

**Implementation:** OpenTable / Resy / Tock all have reservation-availability APIs. Poll every 5-15 min, cache client-side.

**Register:** Reservation-essential templates only (alinea, 1776, varro, gusto, labrisa dine-in).

### 2.4 `LiveOrderActivity` (takeout/delivery)
**What:** Social-proof ticker for takeout.

**Variants:**
- `12 orders in the last hour` (velocity signal)
- `87 pizzas made today` (volume signal)
- `Sarah K. just ordered Margherita · 3 min ago` (Fiverr-style aggressive social proof — use sparingly, can feel tacky)

**Where:** pepper's `ChefTestimonialBand` slot could host this, or a sticky bottom bar.

**Register:** Takeout-primary only (pepper, saladify). NEVER on reservation-only templates — it breaks the exclusivity frame.

### 2.5 `LiveWeatherTie-In` (clever, optional)
**What:** Copy that changes with weather to recommend relevant menu items.

**Examples:**
- `Cold day? Our bouillabaisse is simmering.` (labrisa in winter)
- `Patio season — reserve outdoor seating.` (1776 in spring)
- `Rainy day · cocoa + pastry basket ready.` (latte in October rain)

**Implementation:** OpenWeather API, simple rule-based switch statement.

**Register:** Only for templates with active content strategy (latte, bramble, labrisa). Upscale templates should skip — too casual.

---

## 3. Scroll-triggered motion

### 3.1 `ScrollRevealSection`
**What:** Sections fade + slide into view as they enter the viewport.

**Why:** Signals the site was considered. Static websites where everything is instantly visible look "thrown together."

**Implementation:**
```tsx
// components/ScrollReveal.tsx (wrapper pattern)
'use client';
import { motion, useReducedMotion } from 'framer-motion';

export function ScrollReveal({ children, delay = 0, y = 24 }: { children: React.ReactNode; delay?: number; y?: number }) {
  const prefersReducedMotion = useReducedMotion();
  if (prefersReducedMotion) return <>{children}</>;
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
```

**Rule:** Wrap every major section in ScrollReveal unless `theme.motion.intensity === 0`. Use `once: true` — don't re-animate on scroll-up.

**Register adaptation:**
- `intensity: 1` (alinea, qitchen) — subtle, y=16, duration 0.5s
- `intensity: 2` (most) — y=24, duration 0.6s
- `intensity: 3` (labrisa scrapbook, bramble, pepper) — y=32, duration 0.7s, with rotation for scrapbook feel

### 3.2 `ParallaxHero`
**What:** Hero image moves slower than scroll (background floats up as content scrolls over).

**When to use:**
- Any template with a big hero photo (1776, varro, pepper, labrisa, bramble)
- NOT on typography-led heroes (velvet-shaker wordmark, alinea text-first) — breaks the composition

**Implementation:** Framer Motion's `useScroll` + `useTransform` on a y-axis transform, range `[0, 1] → [0, -100]`.

### 3.3 `KenBurnsEffect` on hero images
**What:** Hero photo slowly zooms + pans (5-10 second loop) — cinematic, feels like a video without the weight.

**When:** Atmospheric registers — alinea hero, qitchen hero, 1776 hero, varro 3-photo hero. NOT on product-card templates.

**Implementation:** CSS `@keyframes` with `transform: scale(1) → scale(1.08) → scale(1)` + subtle translate, 10-15s duration, `ease-in-out`, `infinite alternate`.

### 3.4 `StickyTransformElement`
**What:** Element that scales / rotates / changes color based on scroll position.

**Examples:**
- Wordmark in nav that shrinks from 48px to 20px as user scrolls (common in luxury sites)
- Hero text that fades to 0 as user scrolls past hero
- Photo that scales from 80% to 100% as user scrolls into its section

**Register:** Upscale / modernist only (1776, varro, velvet-shaker, alinea with restraint). Skip for casual templates — feels over-designed.

### 3.5 `ScrollProgressBar`
**What:** Thin top bar showing page scroll progress.

**Register:** Long-form templates only (varro 15.6kpx home, labrisa journal, 1776 multi-section). Skip for short pages.

---

## 4. Continuous motion (ambient)

### 4.1 `HorizontalMarquee` ⭐ already promoted in catalog
**What:** Text or logo strip scrolling right-to-left (or left-to-right) continuously.

**Already in:** bramble ("OPENING TIMES · OPENING TIMES"), 1776, varro ("OUR MENU · OUR MENU").

**Variants:**
- Text marquee (section-opener — "OUR MENU" repeating)
- Logo marquee (press logos: "Featured in The New York Times · Eater · Bon Appétit")
- Dish marquee (scrolling food photos as a section break)
- Chef quote marquee ("'We cook with love' — Chef Marco")

**Register adaptation:**
- Upscale: uppercase serif, letter-spaced, 10-15s loop (stately)
- Casual: mixed case sans, 5-8s loop (urgent)
- Playful (pepper, saladify): with emoji + colors (🍕 · HOT · FRESH · 🍕 · HOT · FRESH)

### 4.2 `VerticalReviewTicker`
**What:** Reviews/testimonials scroll UP continuously (like movie credits).

**When:** On reservation-primary templates where review volume matters (gusto, 1776, varro). Alternative to `LiveReviewsCarousel`.

### 4.3 `LoopingBackgroundVideo`
**What:** Muted, 5-10 sec loop behind hero. Shows the RESTAURANT ALIVE — kitchen activity, pasta dropping, pizza going into oven, cocktail being poured, bread coming out.

**Rules:**
- ≤5MB file, MP4 + WebM sources
- Muted + autoplay + loop + playsInline
- Poster image (high-quality frame) for slow connections — video replaces when ready
- `prefers-reduced-motion: reduce` — fall back to poster image
- Never full HD; 1280×720 max
- Load only on viewport intersection (don't block LCP)

**Register adaptation:**
- Best fits: varro (kitchen action), labrisa (coastal), bramble (bar pour), pepper (pizza slice pull), velvet-shaker (cocktail mix)
- Worst fits: alinea (too sacred), qitchen (too still), plate (too casual)

**Implementation:**
```tsx
<video
  autoPlay muted loop playsInline
  poster="/images/hero-poster.jpg"
  className="absolute inset-0 w-full h-full object-cover motion-reduce:hidden"
>
  <source src="/videos/hero.webm" type="video/webm" />
  <source src="/videos/hero.mp4" type="video/mp4" />
</video>
```

### 4.4 `SubtleHoverStates` (universal)
**What:** Every interactive element has a hover state. Images zoom slightly. Buttons lift. Links underline-slide. Cards rotate 1°.

**Rule:** If an element is clickable and has no hover state, it's dead content. Every fork must audit.

**Examples:**
- Dish cards: `hover:-translate-y-1 hover:shadow-lg transition`
- Photos: `hover:scale-105 transition duration-500`
- Buttons: `hover:bg-accent/90 hover:shadow-md`
- Links: animated underline via `::after`

### 4.5 `CursorParticle` (niche, sparingly)
**What:** Cursor leaves a subtle trail, or custom cursor element.

**When:** Design-forward venues where whimsy matters (velvet-shaker, labrisa illustration context). Almost always SKIP — feels gimmicky on most restaurant sites.

---

## 5. Engagement patterns (interactive on demand)

### 5.1 `DishHoverReveal`
**What:** Hover (or tap on mobile) on a dish photo reveals description, price, ingredients, allergens.

**Where:** menu pages with dense content — plate's `DenseMenuColumns`, pepper's `DishCardGrid`, varro's menu sections.

**Fallback:** On mobile, tap opens a modal with the same details.

### 5.2 `DishFilterChips`
**What:** Chips to filter menu by tag (vegan / gluten-free / under $20 / signature).

**When:** Casual + health templates (saladify, pepper, plate). Skip for upscale (alinea, varro — menu is the experience, filtering cheapens it).

### 5.3 `ReservationStepper`
**What:** Multi-step booking UX (party size → date → time → name/email) instead of a long form.

**When:** Upscale reservation flows (alinea, varro, labrisa). The form itself becomes ceremonial.

### 5.4 `MenuCategoryTabs`
**What:** Tabs for menu categories (not scroll-list). Click a category to filter.

**Already-ish in:** varro's `MultiSectionMenu` (segmented control).

**When:** Long menus with 5+ categories. Saves scrolling.

### 5.5 `IngredientSourceModal`
**What:** Click "Learn about our produce" → modal with farm names, photos, stories.

**When:** Farm-to-table / heritage templates (gusto, labrisa, plate, varro). Deepens the "we care" signal.

---

## 6. Visual aliveness via media

### 6.1 `InstagramEmbedGrid`
**What:** Live Instagram feed embedded on the site (most-recent 6-9 posts).

**Why:** Shows the restaurant is active this month. Dead Instagram = dead restaurant signal.

**Implementation:** Instagram Basic Display API, cached hourly. Or drop-in widget (EmbedSocial, Tagembed, Snapwidget).

**Placement:** bramble polaroid strip variant, latte below blog, plate "latest updates" secondary block.

**Rule:** If the restaurant's Instagram is stagnant (last post >30 days), SKIP this pattern — it'll hurt more than help.

### 6.2 `BeforeAfterPlating` (chef flourish)
**What:** Hover/tap a dish photo → reveals the "raw ingredients" or "plating process" photo underneath.

**When:** Chef-driven upscale (varro, alinea, 1776). Skip for casual.

### 6.3 `AmbientPhotoCycle`
**What:** Hero or section photo cycles through 3-5 images every 8-12 seconds. Softer than a slideshow — no CTAs change, just photography.

**Already-ish in:** bramble `HeroSlideshow`. latte has a manual carousel (should auto-advance).

### 6.4 `GalleryLightbox`
**What:** Click a gallery thumbnail → fullscreen lightbox with keyboard nav, zoom, share.

**Already-ish in:** alinea `GalleryMasonryGrid` (partial — missing true lightbox).

**Rule:** Every gallery page should have a lightbox. Without it, photos are trapped in thumbnails.

---

## 7. The register × aliveness matrix

Which patterns to use per template register:

| Template | LiveOpenStatus | LiveMap | LiveReviews | HeroVideo | Marquee | ScrollReveal | KenBurns | DayPartGreeting |
|---|---|---|---|---|---|---|---|---|
| `alinea-01` | ✅ (text-only) | ✅ (Mapbox styled) | press quotes | — | — | ✅ subtle | ✅ | — |
| `qitchen-01` | ✅ (text-only) | ✅ | — | — | — | ✅ subtle | ✅ | — |
| `1776-redesign-01` | ✅ | ✅ (Mapbox) | ✅ | ✅ | ✅ already | ✅ | ✅ | — |
| `bramble-01` | ✅ | ✅ | ✅ | ✅ bar pour | ✅ already | ✅ scrapbook | — | ✅ day/night |
| `bamzi-01` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | — |
| `gusto-01` | ✅ ⭐ (already HeroHoursSidebar) | ✅ needed on /contact | ✅ (4.8★ already in hero — make live) | ✅ kitchen | ✅ | ✅ | ✅ | ✅ dinner prep |
| `varro-01` | ✅ | ✅ | press + reviews | ✅ chef kitchen | ✅ already | ✅ | ✅ | — |
| `labrisa-01` | ✅ per service | ✅ ⭐ critical | ✅ | ✅ coastal | ✅ optional | ✅ ⭐ scrapbook drift already | ✅ | ✅ service day-part |
| `plate-01` | ✅ | ✅ | ✅ Google | — | — | ✅ | — | ✅ brunch/dinner |
| `pepper-01` | ✅ ⭐ (casual urgent copy) | ✅ multi-location | ✅ | ✅ pizza pull | ✅ add deals marquee | ✅ | — | ✅ lunch rush |
| `latte-01` | ✅ ⭐ (morning/afternoon) | ✅ | Instagram | — | — | ✅ | — | ✅ ⭐ morning/lunch/closing |
| `saladify-01` | ✅ | ✅ store locator | ✅ app store-style | ✅ produce close-ups | ✅ add | ✅ | — | ✅ lunch |
| `velvet-shaker-01` | ✅ (evening-focused) | ✅ | — (discipline) | ✅ ⭐ cocktail pour | — | ✅ | ✅ | ✅ last-call |

Legend: ✅ = should ship with. ⭐ = especially impactful for this register. — = explicitly skip (hurts register).

---

## 8. Fork-agent checklist (before ship)

Before marking a client fork "ready to launch," verify every item:

### Mandatory for every template
- [ ] `LiveOpenStatus` wired with real hours data (not placeholder)
- [ ] `LiveMapEmbed` replaces any static address image (if the template has an address)
- [ ] `ScrollReveal` wrappers on every major section
- [ ] Hover states on every clickable element
- [ ] `prefers-reduced-motion` respected (Framer Motion's `useReducedMotion`)
- [ ] All Unsplash placeholders replaced with real client photography
- [ ] All "TBD" / "placeholder" copy replaced

### Register-dependent
- [ ] Reservation-primary templates: `LiveReservationAvailability` wired to Tock/Resy/OpenTable API (or confirmed stub for Phase 2)
- [ ] Takeout templates: `LiveOrderActivity` OR `DayPartGreeting` for lunch/dinner rush
- [ ] Heritage templates: `SeasonalMenuStamp` current
- [ ] Review-prominent templates: `LiveReviewsCarousel` wired to Google Places / Yelp
- [ ] Multi-service templates (labrisa): separate `LiveOpenStatus` per service if hours differ
- [ ] Atmospheric templates: `HeroVideo` with muted loop + `KenBurns` fallback
- [ ] Content-active brands (latte, bramble, labrisa, plate): `InstagramEmbedGrid` OR blog-post freshness check

### Motion discipline
- [ ] `theme.motion.intensity` matches the register (1-3 scale, see strategic principles §2.3)
- [ ] Marquees present for dark-warm-destination (1776, varro) and light-retro (bramble) registers
- [ ] No autoplay sound — anywhere, ever

---

## 9. Anti-patterns (what NOT to do for aliveness)

1. **Autoplay sound on hero video.** Universal hatred. Never.
2. **Motion that blocks reading.** If marquees or animations make text unreadable, you lost the customer.
3. **"Fake" live reviews** (hardcoded testimonials labeled "recent"). Customers detect this — trust collapse.
4. **Cursor effects on mobile** — mobile has no cursor. Ship only if you've tested the mobile fallback.
5. **Hero video that takes >4s to load on 4G.** Use poster image + progressive load.
6. **More than one marquee at once.** Two competing marquees = chaos.
7. **ScrollReveal on content above the fold.** The first viewport should be instant. Start reveals AFTER hero.
8. **Parallax on body text.** Parallax on photos OK, parallax on reading content = nausea.
9. **Fake "X people are viewing this" counters.** Tacky, Fiverr-class. Only use real data.
10. **Over-animating** — if 8 things are moving at once, nothing feels special.

---

## 10. Implementation priority for our catalog

**Phase 1 (do first — universal retrofits for all 13 existing templates):**
1. Build `shared/components/LiveOpenStatus.tsx` — promote to shared immediately (will be in every fork)
2. Build `shared/components/LiveMapEmbed.tsx` — replace all static address uses
3. Build `shared/components/ScrollReveal.tsx` — motion wrapper used everywhere

**Phase 2 (register-specific):**
4. Add `LiveReviewsCarousel` to gusto, plate, 1776 (review-prominent)
5. Add `LoopingBackgroundVideo` pattern to varro, labrisa, bramble, pepper
6. Add `DayPartGreeting` to latte, plate, pepper
7. Add `SeasonalMenuStamp` to heritage templates (gusto, labrisa, varro, bramble)

**Phase 3 (advanced, per-client):**
8. Wire `LiveReservationAvailability` to real Tock/Resy accounts (client-specific)
9. Wire `InstagramEmbedGrid` to client Instagram (client-specific)
10. Chef-driven engagement (`BeforeAfterPlating`, `IngredientSourceModal`)

**All three phases ship as part of the "aliveness pass" — it's not optional, it's the last step of every fork.**
