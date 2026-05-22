# Next 3 Lead Audits — Deep-Research Pass

Date: 2026-04-27

Frameworks used:
- `../../../deep-research-on-website-criteria.md` revenue-leak rubric
- `../lead-fit-qualification.md` 7-check pre-build gate
- `../restaurant-website-strategic-principles.md` register / conversion rules

Vertical priority applied:

Italian → bistro → steakhouse → seafood → wine bar → cocktail lounge → upscale Mexican/Latin → coffee → pizza/takeout → diner.

Interpretation: vertical order is a weighting factor, not a license to build weak switch cases. The new deep-research rubric treats reservation/order/menu/profile failures as direct leaks, and treats SpotHopper / Wix / Toast / Square / OpenTable footprints mostly as scope or switching-friction modifiers.

## Final top 3

### 1. Cucina Bella — Algonquin

- **Vertical:** Italian, highest-priority remaining vertical.
- **Current site:** `https://cucinabellaalgonquin.com/`
- **Decision:** Build next, but pitch as an authority / premium-proof cleanup, not a broken-site rescue.
- **Likely template:** `gusto-01`, softened toward family-trattoria rather than date-night-only.
- **Lead tier:** B+ by leak severity, promoted to #1 by vertical priority.

#### Live-site findings

- Homepage has visible `View Menu` and `Make an RSVP` buttons above the fold; RSVP links to Toast Tables.
- Homepage copy says `Award-Winning Italian Cuisine`, but does not name the award, rating count, press proof, founder year, or review volume.
- Menu page is HTML shell plus client-side menu loading; the static page contains category tabs but no item/pricing text until scripts and CSV load.
- No `Restaurant` / `LocalBusiness` JSON-LD detected on the homepage.
- Site is a multi-location family wrapper: Algonquin, Galena, and Bella's Woodfire. That helps credibility, but dilutes the single-venue pitch.
- Tripadvisor currently shows 4.5 rating, 428 reviews, and `#2 of 121 Restaurants in Algonquin`, which is stronger proof than the homepage surfaces.

#### Deep-research signals

- `C5` strong public reputation not surfaced clearly on site.
- `D5` missing structured local / restaurant schema.
- `V3` partial: menu exists, but the static path is JS-dependent and weak for search / AI / no-JS consumption.
- `I1/I3` light friction: Toast Tables is active, so preserve the provider.

#### Why create a new website?

Not because the current site is catastrophically broken. It is not. The reason is that Italian is the highest-return vertical in this wave and Cucina Bella's site undersells the trust they already have. The rebuild should make the first screen say: authentic Sannicandro family Italian, brick-walled Algonquin institution, strong public rating/review proof, immediate Toast reservation path, and an indexable menu that searchers can read without depending on client-side hydration.

**Pitch sentence:** "Your site has the reservation path, but it hides the proof: 428 Tripadvisor reviews, a top Algonquin ranking, the family/Sannicandro story, and the actual menu deserve to be doing more work in the first screen."

#### Risks

- This is not an A-tier direct-leak site. If we pitch "your website is broken," we lose credibility.
- `gusto-01` must be downshifted from upscale romantic trattoria to lively family-heritage Italian. Overselling by even one register is the Walnut failure in softer clothes.

---

### 2. Vine & Plate — Crystal Lake

- **Vertical:** Wine bar, first strong pass after bistro / steakhouse / seafood candidates fail the direct-leak bar.
- **Current site:** `https://www.thevineandplate.com/`
- **Decision:** Build second.
- **Likely template:** `bramble-01`, adjusted wine-forward rather than cocktail-forward.
- **Lead tier:** A-/B+ by direct leak; medium switching friction.

#### Live-site findings

- Homepage positions the restaurant as `Wine Bar + Provisions` with globally inspired plates and wine.
- Homepage has `Reservation`, Toast `Order Here`, `Gift Card`, `Food Menu`, and `Drinks Menu` actions.
- Food and drinks menus are PDFs. The `/menu` page lists `Food Menu`, `Drinks Menu`, `Specials Menu`, and `Lunch Specials`, but the food/drinks actions resolve to PDF files.
- Site is Wix and exposes the Wix footer.
- Restaurant schema exists with address, phone, hours, URL, and `acceptsReservations`.
- OpenTable shows 4.7 rating from 146 diners, $30-and-under, American / Wine Bar / Tapas, and recent booking activity.
- The older queue said "Wine Spectator credential." I did not confirm that in live research, and I would not use it in pitch copy unless separately verified.

#### Deep-research signals

- `C1` PDF-only core menus.
- `V3` menu opens the wrong artifact for mobile/search intent.
- `C5` public OpenTable reputation exists but is not made concrete in the homepage hero.
- `I1/I3` Toast + Wix + reservation footprint: preserve-stack build, not a rip-out.

#### Why create a new website?

Because a wine bar lives or dies by pre-visit confidence: food, wine, mood, and whether it fits the night. Their current site has the right ingredients, but the menu experience turns the highest-intent click into PDF handling. A bramble-style fork can keep Toast/order/reservation intact while converting PDF menu intent into a fast, editorial, mobile-readable food + wine experience.

**Pitch sentence:** "Your site already gets people to the right actions, but the highest-intent click still opens a PDF; I rebuilt the food/wine path so guests can browse the plates, wines, hours, and reservation path without leaving the page."

#### Risks

- Do not lead with Wine Spectator unless verified.
- Do not over-cocktail the design. This is wine + shared plates, not a martini room.

---

### 3. Grounds Coffee Bar — Crystal Lake

- **Vertical:** Coffee, lower in the vertical wave, but the hard website leak is too clean to ignore.
- **Current sites checked:** `https://www.groundscoffeeroasters.com/`, `https://www.groundscb.com/`, `https://groundscrystallake.com/`
- **Decision:** Build third.
- **Likely template:** `latte-01`, but route as cafe-first with roaster/shop module, not pure bean-commerce.
- **Lead tier:** A by leak severity, demoted to #3 by vertical economics.

#### Live-site findings

- Downtown Crystal Lake lists the cafe website as `https://www.groundscb.com`.
- `groundscb.com` is a Square Online shell with no server-rendered text, no crawlable content, no visible HTML menu content in fetch, and `/menu` returns 404.
- `groundscrystallake.com` failed to fetch locally.
- `groundscoffeeroasters.com` is a separate Wix commerce site focused on roasted beans and subscriptions. It links out to `groundscb.com` as the cafe website.
- The roaster site has useful proof and commerce content, but it does not solve the cafe user's core question: what can I get at the cafe, when is it open, and can I order / visit?
- Downtown Crystal Lake confirms the physical cafe at 89 N Williams St and points to `groundscb.com`.

#### Deep-research signals

- `D1` wrong/dead/confusing canonical path: old `groundscrystallake.com` failed and the cafe/roaster paths are split.
- `V3` menu path returns 404 on the cafe domain.
- `C6` thin trust basics on the cafe path because the Square shell exposes almost no crawlable content.
- `D5` no detectable local-business schema on the cafe domain.
- `I3` Square/Wix footprint: preserve commerce / ordering if useful, but rebuild the owned cafe wrapper.

#### Why create a new website?

Because customers are being split between a roaster shop, a thin Square cafe shell, and stale/failed legacy domains. This is exactly the kind of hard path failure the deep-research rubric says to prioritize even when the vertical is lower-margin. The new site should unify cafe + roaster: cafe menu, hours, address, order/visit path, beans/subscriptions, and a canonical domain.

**Pitch sentence:** "Your roaster site sells beans, but the cafe website has no crawlable menu and `/menu` is a 404; I mocked one clean cafe + roaster site so local guests can actually find what to order and where to go."

#### Risks

- Coffee economics are lower than Italian / bistro / wine bar.
- If the Square shell powers live ordering, preserve it. Do not pitch a rip-and-replace.

---

## Why the obvious bench leads did not make top 3

### The Annex Restaurant & Lounge

- **Vertical:** Bistro / contemporary full-service, theoretically high priority.
- **Current site:** SpotHopper with OpenTable, order path, parties, catering, events, menu, reviews, hours, contact, photo gallery, and social links all present.
- **Decision:** Qualified but not top 3.

The Annex has a stronger vertical slot than Vine & Plate and Grounds, but the site already does the revenue jobs. Its issues are generic SpotHopper execution, noisy popups, a `Gaming` nav item that muddies the bistro register, and platform sameness. Under the new rubric, that is a preserve-stack / brand-positioning opportunity, not a direct leak. Build only after the harder menu/domain failures.

### Jude's Cocktails and Nosh

- **Vertical:** Cocktail lounge, good category fit.
- **Current site:** official site returned a Cloudflare challenge in terminal fetch; OpenTable page is strong.
- **Decision:** Hold until browser/photo verification.

OpenTable confirms the restaurant is real and active: $30-and-under cocktail bar, tapas/small plates/international, reservations, 4.8-class reputation in prior result set, and steady booking activity. But because the official site could not be audited cleanly via crawl, this needs a manual browser/photo pass before build. It may become a later bramble/velvet candidate, but it should not jump the three above.

### El Molino

- **Vertical:** Latin, but casual heritage Latin, not upscale Mexican/Latin.
- **Current site:** search/web index shows a SkyTab-powered site with inline menu, prices, order, gift cards, hours, address, and phone. Local terminal DNS returned no A answer for `elmolino1984.com`, so domain health needs confirmation.
- **Decision:** Strategic hold.

The restaurant is strategically interesting because Shaw Local confirms new Zepeda-family ownership, a six-month remodel, a muted white/cream/wood direction, Puebla-family recipes, and a new back-room bar. But the current template catalog still lacks the correct family-heritage Latin template. If the DNS issue is real, the outreach hook becomes urgent. If not, the site is no longer the dead-domain slam dunk from the older queue.

## Recommended build order

1. **Cucina Bella** — Italian-first vertical; credible but subtle leak; best for building the second Italian proof asset.
2. **Vine & Plate** — strongest remaining full-service direct leak: PDF menus on a wine/shared-plates concept.
3. **Grounds Coffee Bar** — lower vertical priority, but cleanest hard website problem: split domains + cafe menu 404.

If we force the vertical order literally, The Annex would be second. I do not recommend that. The new deep-research rubric is clear: a managed platform with the money paths already present is a weaker cold-outreach case than a lower vertical with a broken menu/domain path.
