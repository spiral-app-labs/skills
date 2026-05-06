# Ciao Baby! — Current Site / Source Audit

- Date: 2026-05-04
- Site slug: `ciao-baby`
- MC parent task: `2d9738de-cfb4-4528-a017-b49ec7119785`
- Lead ID: `8a8ca9fc-9c6d-49a6-aaa4-f532feaf533a`
- Restaurant: Ciao Baby!, Barrington, IL
- Phone: `(847) 381-3555`
- Address found: `232 E Main St, Barrington, IL 60010`
- Canonical gate covered here: `auditing`

## Inputs collected

Browser evidence captured with OpenClaw-managed Chrome/CDP on 2026-05-04:

- `restaurant-website-system/sites/ciao-baby/screenshots/current-site-desktop-full.png`
- `restaurant-website-system/sites/ciao-baby/screenshots/current-site-mobile-full.png`
- `restaurant-website-system/sites/ciao-baby/screenshots/current-site-mobile-fold.png`
- `restaurant-website-system/sites/ciao-baby/scrapes/current-site-browser-dom-snapshot.html`
- `restaurant-website-system/sites/ciao-baby/scrapes/current-site-browser-text.txt`
- `restaurant-website-system/sites/ciao-baby/screenshots/ciaobaby-net-shell-desktop-full.png`
- `restaurant-website-system/sites/ciao-baby/screenshots/ciaobaby-net-shell-mobile-full.png`
- `restaurant-website-system/sites/ciao-baby/screenshots/ciaobaby-net-shell-mobile-fold.png`
- `restaurant-website-system/sites/ciao-baby/scrapes/ciaobaby-net-shell-browser-dom-snapshot.html`
- `restaurant-website-system/sites/ciao-baby/scrapes/ciaobaby-net-shell-browser-text.txt`

Supporting public-source evidence:

- DuckDuckGo result for `https://ciaobaby.net/`: title `Ciao Baby! Barrington`, snippet says authentic Italian cuisine in Barrington and family-owned for 20+ years.
- DuckDuckGo result for `https://www.ciaobabyonline.com/`: title `Authentic Italian Food | Www.ciaobabyonline.com | United States`, snippet includes the Barrington address and phone.
- Restaurantji and Barrington Chamber source details captured in the prior local audit notes.

## Source status

Ciao Baby currently has a fragmented official-site footprint rather than a clean single source of truth:

1. `https://www.ciaobabyonline.com/` resolves to an older Wix-style site. It has the address, phone, hours, order/menu navigation, and party-room copy, but the design is dated and weak on mobile.
2. `https://ciaobaby.net/` resolves to a fuller modern site. The browser text includes a complete story section, menu sections, catering/events/visit navigation, phone CTA, and long menu content. It appears to be a full modern website, not a shell.

Because Mission Control does not currently provide an official `website_url`, builder-facing work should treat both domains as source candidates until ownership is verified. The pitch hook is therefore **fragmented / inconsistent web identity**, not simply “no website.”

## Public proof captured

### Restaurantji

- Category: Italian, pet friendly, vegetarian.
- Rating evidence: `4.4` from `224 ratings` in fetched Restaurantji page.
- Address: `232 E Main St, Barrington`.
- Phone: `(847) 381-3555`.
- Favorites surfaced: Zuppa Di Pesce Red Broth Dinner, Chicken Piccata Dinner, Salted Caramel Gelato, Eggplant Parmigiana, Ciao Baby Ravioli, Chicken Parmesan, Umbriago Salad, House Salad, Pizza.
- Hours from Restaurantji: Monday closed; Tue–Thu 11AM–8PM; Friday 11AM–9PM; Saturday 12–9PM; Sunday closed.

### Barrington Chamber profile

- Says Ciao Baby is a family-run restaurant in Barrington.
- Describes authentic Italian cuisine, pizza and pastas, casual atmosphere, and regulars from the Barrington area.
- Rep/contact surfaced: Bill Tarsitano.

### `ciaobabyonline.com` browser text

- `232 E Main Street, Barrington Il 60010`
- `Your Downtown Barrington Restaurant for Italian and Americana Dining`
- Hours: Tue–Thu 11am–9pm; Friday 11am–10pm; Saturday noon–10pm.
- Party room for birthday parties, showers, holiday events, and business meetings.
- Phone footer: `847-381-3555`.

### `ciaobaby.net` browser text

- Positions Ciao Baby as `An Italian Kitchen for the Whole Community`.
- Story copy says the restaurant opened in `2011` and emphasizes family recipes, tradition, fresh ingredients, and local produce whenever possible.
- Menu sections captured include Lunch, Dinner, Drinks, Alcohol, Pizza, and Dessert.
- Specific menu proof includes Ciao Baby! Sticks, Stuffed Artichoke, Aunt Dodie's Rolled Stuffed Eggplant, Stuffed Melrose Peppers, Lamb Chops Vesuvio, Baked Clams, CiaoBaby! Burnt Pasta, Very Chopped Meatless Salad, Umbriago Salad, and Create Your Own Pasta.

## Audit findings

1. **Two-domain identity conflict:** Search surfaces both `ciaobaby.net` and `ciaobabyonline.com`. The former looks modern and complete; the latter looks legacy but still contains official-looking operational info. Without MC-confirmed official URL, this is a trust/confusion risk.
2. **Legacy site has severe mobile issues:** `ciaobabyonline.com` is horizontally cropped/zoomed on mobile, with dated overlays and weak responsive behavior. This is the strongest visual before/after proof if the owner still uses that domain.
3. **Modern site still needs verification before reuse:** `ciaobaby.net` has strong content depth and a responsive layout, but ownership and recency need verification before treating its claims/menu as canonical.
4. **Event/private-room conversion is under-sold on the legacy site:** The party-room copy exists, but it has no strong event funnel, package framing, or inquiry path.
5. **Menu depth is the best specificity source:** Ciao Baby has named dishes and category depth that can prevent generic Italian copy. Any fork must preserve real dish names and avoid invented claims.
6. **Hours conflict risk:** Restaurantji and `ciaobabyonline.com` show different hours. The builder should not hard-code hours without marking source/date or verifying against Google/official owner source.

## Builder-safe direction

- Treat Ciao Baby as a warm neighborhood Italian/Americana restaurant with family-recipe language, strong menu depth, and private-event potential.
- Use the modern source only as evidence after ownership is verified; otherwise mark it as `unverified domain candidate`.
- Preserve phone CTA `(847) 381-3555`, Barrington address, menu proof, and private-room angle.
- Do not claim “over 20 years” unless confirmed by Google/reviews/owner source; `ciaobaby.net` says opened in 2011, which conflicts with that search snippet.

## Next canonical gate

The `auditing` gate is now locally satisfied with browser screenshots plus DOM/text scrapes. The next gate is `reviews`: open Google Reviews in a browser, choose the **Highest** filter, collect 30 written reviews, and save:

- `restaurant-website-system/sites/ciao-baby/screenshots/google-reviews-highest.png`
- `restaurant-website-system/sites/ciao-baby/scrapes/google-reviews-highest-30.json`
- `restaurant-website-system/sites/ciao-baby/google-reviews-themes.md`

Until that packet exists or a blocker is mirrored to MC, do not advance to final routing/forking.
