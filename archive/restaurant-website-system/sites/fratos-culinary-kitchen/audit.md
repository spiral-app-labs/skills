# Frato's Culinary Kitchen — Current-site audit gate — 2026-05-08

## Gate status

- **Workflow gate:** `current_site_audit`
- **Lead ID:** `cec3f7af-ab8d-4785-af76-e57e743cdf25`
- **MC root task:** `fdead14c-0079-4168-b6b7-c8b80218a681`
- **Current-site audit child task:** `aa6f9c6b-7f6b-41d9-b19e-8a77740adf4e`
- **Official site:** https://fratospizza.com/
- **Template slug:** `cuisine-pending`
- **Important split-gate note:** Google Reviews were **not** captured here. They are deferred to the next `google_reviews_capture` gate. Google rating/review count remain `null` until verified.

## Inputs collected

Browser path: opened `https://fratospizza.com/` in the OpenClaw browser, then captured live desktop + iPhone 13 evidence with Playwright.

Canonical evidence:

- Desktop homepage screenshot: `restaurant-website-system/sites/fratos-culinary-kitchen/screenshots/current-site-desktop-full.png`
- Mobile homepage screenshot: `restaurant-website-system/sites/fratos-culinary-kitchen/screenshots/current-site-mobile-full.png`
- Mobile first-fold screenshot: `restaurant-website-system/sites/fratos-culinary-kitchen/screenshots/current-site-mobile-fold.png`
- DOM snapshot: `restaurant-website-system/sites/fratos-culinary-kitchen/scrapes/current-site-dom-snapshot.html`
- Text snapshot: `restaurant-website-system/sites/fratos-culinary-kitchen/scrapes/current-site-text-snapshot.txt`
- Capture summary: `restaurant-website-system/sites/fratos-culinary-kitchen/scrapes/current-site-capture-summary.json`
- Structured audit JSON: `restaurant-website-system/sites/fratos-culinary-kitchen/audit.json`

Additional page/flow captures:

| Flow | Source URL | Evidence |
|---|---|---|
| Home | https://fratospizza.com/ | `screenshots/current-site-home-desktop-full.png`, `screenshots/current-site-home-mobile-full.png`, `scrapes/current-site-home-desktop.txt` |
| Menu | https://fratospizza.com/menu/ | `screenshots/current-site-menu-desktop-full.png`, `screenshots/current-site-menu-mobile-full.png`, `scrapes/current-site-menu-desktop.txt` |
| Online ordering redirect | https://fratospizza.com/online-ordering/ → https://orderstart.com/fratospizza | `screenshots/current-site-online-ordering-desktop-full.png`, `screenshots/current-site-online-ordering-mobile-full.png`, `scrapes/current-site-online-ordering-desktop.txt` |
| OrderStart storefront | https://orderstart.com/fratospizza | `screenshots/current-site-orderstart-desktop-full.png`, `screenshots/current-site-orderstart-mobile-full.png`, `scrapes/current-site-orderstart-desktop.txt` |
| Contact/location | https://fratospizza.com/contact-2/ | `screenshots/current-site-contact-desktop-full.png`, `screenshots/current-site-contact-mobile-full.png`, `scrapes/current-site-contact-desktop.txt` |
| Hours | https://fratospizza.com/fratos-hours/ | `screenshots/current-site-hours-desktop-full.png`, `scrapes/current-site-hours-desktop.txt` |
| Story/about | https://fratospizza.com/about/ | `screenshots/current-site-about-desktop-full.png`, `scrapes/current-site-about-desktop.txt` |
| Catering/events | https://fratoscatering.com/ | `screenshots/current-site-catering-desktop-full.png`, `screenshots/current-site-catering-mobile-full.png`, `scrapes/current-site-catering-desktop.txt` |
| Official testimonials | https://fratospizza.com/reviews/ | `scrapes/current-site-reviews-official-desktop.txt` |
| Culinary trainee program | https://fratospizza.com/fratos-culinary-trainee-program/ | `scrapes/current-site-culinary-trainee-desktop.txt` |

## Structured lead metadata

| Field | Verified value | Source / notes |
|---|---|---|
| Phone | `(847) 895-2122` | Homepage, contact page, OrderStart, catering page |
| Address | `628 S. Roselle Road, Schaumburg, IL 60193` | Homepage, contact page, OrderStart |
| Website URL | `https://fratospizza.com/` | Live 200 capture |
| Order URL | `https://orderstart.com/fratospizza` | Official order links + `/online-ordering/` redirect verified live |
| Catering/events URL | `https://fratoscatering.com/` | Official nav + live catering capture |
| Catering inquiry URL | `https://fratoscatering.com/catering-inquiry-form/` | Catering page links |
| Hours | Full kitchen: Mon-Thu 4pm-9pm, Fri-Sat 11am-10pm, Sun 11am-9pm. Cafe/Gaming limited deli: Mon-Thu 12pm-4pm. | Hours page says hours may change based on caterings/events and to call if needed. |
| Contact email | `Management@FratosKitchen.com` | Homepage/footer/about footer. Alternate public emails: `FratosPizza@gmail.com` and `catering@fratoskitchen.com`. |
| Owner name | `null` | Current owner name not publicly verified in captured pages. About page names Frank/Tony as origin-story names and Chef Ed/Andy/Joe as chefs. |
| Owner email | `FratosPizza@gmail.com` | Contact page lists `FratosPizza (at) gmail.com` and says mail goes directly to owner. |
| Google rating | `null` | Deferred to next `google_reviews_capture` gate. |
| Google review count | `null` | Deferred to next `google_reviews_capture` gate. |
| Outreach email draft | `null` / `not_created` | No outreach draft created in this gate. |

## What the current site does well

- The homepage immediately exposes the business name, phone, address, order CTA, broad food offering, and media mentions.
- The menu page is unusually deep and price-complete: stone oven pizzas, 1-pound slices, specialty burgers, wings, tenders, gyros, rice bowls, shakes/desserts, halal notes, and monthly items.
- The story is strong: `EST. 1975`, scratch-cooking transformation, culinary students becoming chefs, Chef Ed, Chef Andy/Joe, media features, and the “catering company that owns a restaurant” framing.
- Conversion infrastructure exists: direct phone, directions, OrderStart ordering, dine-in/pickup/curbside/delivery, specials, loyalty, and a separate catering engine.
- The site is active, not abandoned: captured pages include April/May 2026 monthly items and current menu/order flows.

## Current-site findings

### Hero / first impression

The hero has real specificity — “Made-From-Scratch Culinary Kitchen,” “Home of Illinois’s Greatest Mozzarella Stick(s),” pizza/burgers/wings/halal/tenders/student-chef copy, and media mentions. The issue is packaging: dense background imagery, small text, and many immediate promo CTAs compete with the primary order/call/directions job.

### Conversion flow

Primary ordering is verified through `https://orderstart.com/fratospizza`. The official `/online-ordering/` route redirects there. OrderStart supports pickup, curbside, dine-in, delivery, ASAP/in-advance, group orders, and coupons. The pre-order experience still feels operationally cluttered: account/login/header controls, group order, categories, item copy, coupon, and cart compete before the user gets a single clean “start your order” path.

### Menu flow

The current menu is an asset, but it is not curated. On mobile the menu capture is 21,660px tall, so a guest must scroll through a long document instead of seeing fast decision modules for mozzarella sticks, 1-pound slices, specialty burgers, wings/halal, and monthly specials.

### Mobile state

- Homepage mobile capture is 12,942px tall with 242 links. Key facts exist, but a guest has to scroll through a long promotional stack.
- Mobile first fold shows brand/phone/address/order, but the supporting message is cramped and the page quickly moves into multiple promotions.
- OrderStart mobile has horizontal overflow (`scrollWidth` 395 vs `clientWidth` 390) and small controls; account/login/header areas compete with the ordering task.
- Catering mobile capture is 16,910px tall with 232 links, so events/catering conversion is present but overwhelming.

### Credibility / story

Frato's has unusually good proof for a casual restaurant: `Since 1975`, media features, scratch cooking, culinary apprenticeship, current monthly specials, and a separate catering operation. The current site hides that proof across the About, Catering, Reviews, Trainee, and blog pages instead of turning it into a clean trust/story band near the top of the homepage.

### Factual / polish issues

- Footer exposes `Pizzeria WordPress Theme | Login`.
- Several pages expose pagination/archive artifacts like `1 of page 80` or `1 of page 48`.
- Contact identities are split across `Management@FratosKitchen.com`, `FratosPizza@gmail.com`, and `catering@fratoskitchen.com`; useful, but the future site should route them clearly.
- Some official links use `http` variants before resolving; future build should preserve verified final URLs where possible.
- Google rating and review count remain unavailable until the next gate.

## Current-site opportunities

1. **Conversion-first hero.** Keep OrderStart, phone, directions, and catering links, but make them the first-screen job rather than one CTA among many promotions.
2. **Story/trust band.** Move `Since 1975`, media mentions, scratch kitchen, culinary-student pipeline, and catering proof near the top.
3. **Mobile simplification.** Use sticky mobile CTAs and short category jumps so guests can order/call/get directions/request catering without wading through 12k-21k px pages.
4. **Menu curation.** Feature signature cards before the full menu/order handoff: mozzarella sticks, 1-pound slices, specialty burgers, wings/halal, monthly specials.
5. **Contact/catering routing.** Separate `Order Food`, `Call Restaurant`, `Get Directions`, `Catering Quote`, `Catering Menu`, and `Contact Management` with verified destinations.
6. **Brand-confidence cleanup.** Remove visible theme/login artifacts, archive pagination, duplicate nav clutter, and turn active specials into polished freshness signals.

## Requirements satisfied in this gate

- `current-site-audit` — current site opened, pages/flows captured, audit notes written.
- `current-site-screenshots` — desktop and mobile screenshots captured.
- `current-site-opportunities` — concrete conversion, credibility, mobile, menu, routing, and polish opportunities named.

Local checklist also records `current-site-scrape` as passed because DOM/text scrapes were captured.

## Deferred to next gate

- `google_reviews_capture`
- Google profile screenshot
- Highest-filter screenshot
- 30 written Google reviews or exact shortage/blocker
- Google rating/review count verification
- Review themes / owner replies / Google-derived secret sauce

**Next gate can start after MC accepts this current-site audit sync.**
