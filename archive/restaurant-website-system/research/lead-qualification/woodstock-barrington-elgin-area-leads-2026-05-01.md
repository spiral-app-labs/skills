# Woodstock / Barrington / Elgin Area Bad-Site Leads

Date researched: 2026-05-01

Purpose: focused pass around the Woodstock, Barrington, and Elgin triangle,
after the wider A-tier list felt too diffuse. This pass keeps the stricter
standard: prioritize restaurants where the website problem is a concrete pitch
hook, not just a dated look.

## Scope

Screened current Restaurantji city pages plus direct search verification across:

- Core cities: Woodstock, Barrington, Elgin.
- Nearby orbit: Lake Zurich, Wauconda, Huntley, Lake in the Hills, Crystal Lake,
  Cary, Fox River Grove, South Elgin, East Dundee, West Dundee,
  Carpentersville, Streamwood, Bartlett, Hoffman Estates, Marengo, Harvard,
  Hampshire, Gilberts, Pingree Grove, McHenry.

Volume:

- 742 non-chain-ish candidates screened.
- 565 official website paths audited.
- Direct search used to demote false positives where Restaurantji missed the
  current official domain.

Hard-leak filters used from `../../../deep-research-on-website-criteria.md`:

- `D1/T6`: broken, setup, 404, DNS, suspended, or otherwise failed site path.
- `D3`: no owned website surfaced; directories/order apps carry discovery.
- `C1`: PDF/image menu dependence.
- `C5`: strong reputation not carried onto the owned path.
- `V2/V3`: menu/order path is broken, buried, or provider-only.
- `V6`: catering/events/wine/private-party path missing on a fit concept.

## Focused Top 15

| Rank | Lead | Area | Category | Website state | Primary signals | Score | Route | Build motion |
|---:|---|---|---|---|---|---:|---|---|
| 1 | Mary's Mexican Grill | Woodstock | Mexican / seafood | Official domain resolves to Fox Ordering setup page over HTTP; HTTPS failed locally | `D1`, `V2`, `V3`, `C5` | 86 | `bamzi-01` hue-swap / Latin gap | Best local hard-failure lead |
| 2 | Winestock Market & Lounge | Woodstock | Wine lounge / small plates | Official domain says "We're building our new online experience" | `D1`, `V3`, `V6`, `C5` | 83 | `bramble-01` wine-forward | Higher-check concept with literal placeholder site |
| 3 | Ciao Baby! | Barrington | Italian | No clear owned site surfaced; directory/order pages carry menu and proof | `D3`, `V3`, `C5` | 80 | `gusto-01` warmed down | Strong Barrington Italian/no-site candidate |
| 4 | Polka Dot Restaurant | Lake Zurich / Barrington edge | Polish | Official site says "New Website Coming Soon" and punts to order/Facebook | `D1`, `V2`, `V3`, `C5` | 78 | `plate-01` heritage-casual | Strong hard-failure edge-area lead |
| 5 | Lao and Thai Spicy Noodle | South Elgin | Lao / Thai | No owned site surfaced; DoorDash and generated pages carry discovery | `D3`, `V3`, `C5` | 76 | `bamzi-01` adapted | Distinctive cuisine, good review proof |
| 6 | Street Food Kingz | Elgin | Puerto Rican | Official domain is only an "Order Online" shell with almost no crawlable content | `I3`, `V3`, `C6`, `C5` | 74 | `bamzi-01` / Latin casual gap | Stronger than generic no-site taco leads |
| 7 | Sagano Japanese Restaurant | Barrington | Japanese / sushi | No clear owned site surfaced; generated/menu pages substitute for a real site | `D3`, `V3`, `C5` | 71 | `bamzi-01` | Long-running sushi lead; verify photos first |
| 8 | The Blue Heron Cafe & Lounge | Barrington | Bar / American / lounge | Restaurantji shows no website; old `theblueheroncafe.com` path returned 502 locally | `D1`, `D3`, `V3`, `V6` | 70 | `plate-01` or `bramble-01` | Good Barrington hook, but lower review volume |
| 9 | Sammy's Restaurant & Bar | Huntley | Diner / bar & grill | No current owned site surfaced; old referenced domain is unreliable | `D3`, `V3`, `C5` | 69 | `plate-01` stripped down | Practical all-day local restaurant lead |
| 10 | La Alcancia | Carpentersville | Mexican / tacos | No owned site surfaced; order/directory pages carry discovery | `D3`, `V3`, `C5` | 67 | `bamzi-01` hue-swap | Solid Elgin-area no-site lead |
| 11 | El Niagara | Woodstock | Mexican | No owned site surfaced; Restaurantji/order pages carry menu and conversion | `D3`, `V3`, `C5` | 65 | `bamzi-01` hue-swap | Useful local Mexican bench candidate |
| 12 | Main Street Tacos | Wauconda / Barrington edge | Mexican / tacos | No clear owned site surfaced; directories/generated pages stand in | `D3`, `V3`, `C5` | 64 | `pepper-01` or `bamzi-01` | Strong rating; verify no Google-site path before build |
| 13 | Willy & Grace Diner | Elgin | Diner / breakfast | No owned site surfaced; generated diner pages + order links carry discovery | `D3`, `V3`, `C5` | 61 | `latte-01` or `plate-01` | Good local proof, lower-ticket economics |
| 14 | La Hacienda Mexican Restaurant | East Dundee | Mexican | Restaurantji website button points to a Canva page that returned a client error in scripted fetch | `D1`, `I3`, `V3` | 59 | `bamzi-01` hue-swap | Clean bad-site proof, but lower conviction |
| 15 | Fas Tacos | Woodstock | Mexican / tacos | Official domain returns 404 page | `T6`, `D1`, `V3` | 56 | `pepper-01` / `bamzi-01` | Hard failure, but weaker reputation/register |

## Build-First Shortlist

### 1. Mary's Mexican Grill - Woodstock

- **Sources:** [Restaurantji](https://www.restaurantji.com/il/woodstock/marys-mexican-grill-/), [official domain](http://www.marysmexicangrillil.com/)
- **Evidence:** Restaurantji lists 4.8 from 254 ratings. The official HTTP path displays "Finish Setting Up Your Online Ordering"; HTTPS failed locally.
- **Pitch sentence:** "Your reviews already tell guests the food works, but the website path currently tells them online ordering is unfinished. I mocked the version where menu, order, hours, and the Woodstock location are live in the first screen."
- **Template:** `bamzi-01` hue-swap, kept casual and family-local.
- **Risk:** Dedicated Latin casual template gap. Do not oversell it as date-night/upscale.

### 2. Winestock Market & Lounge - Woodstock

- **Sources:** [official placeholder](https://shopwinestock.com/), [Real Woodstock profile](https://realwoodstock.com/locations/winestock-market-lounge/), [Restaurantji](https://www.restaurantji.com/il/woodstock/winestock-market-and-lounge-/)
- **Evidence:** The official domain says the new online experience is still being built. Real Woodstock describes the concept as wine, spirits, small plates, flatbreads, sandwiches, and group/intimate gathering energy.
- **Pitch sentence:** "You already have the wine-room experience; the site is still a coming-soon note. I mocked the missing path: wine, small plates, group nights, hours, and a clearer visit/order path."
- **Template:** `bramble-01`, wine-forward.
- **Risk:** Review count is lower than Mary's, so lead with concept economics and placeholder proof.

### 3. Ciao Baby! - Barrington

- **Sources:** [Restaurantji](https://www.restaurantji.com/il/barrington/ciao-baby-/), [Barrington Chamber profile](https://business.barringtonchamber.com/list/member/ciao-baby-barrington-2707), [Nextdoor profile](https://nextdoor.com/pages/ciao-baby/)
- **Evidence:** Restaurantji shows 4.4 from 224 ratings and no official website link, only order/menu paths. Direct search found profiles and generated pages, not a clear owned domain.
- **Pitch sentence:** "Barrington diners already talk about Ciao Baby like a warm neighborhood Italian spot; the owned web path is missing. I mocked the version where menu, hours, order, and the family Italian feel live in one place."
- **Template:** `gusto-01`, softened toward neighborhood Italian rather than upscale trattoria.
- **Risk:** Need photo/menu register check. If the room is very casual, use `plate-01` with Italian copy instead.

### 4. Polka Dot Restaurant - Lake Zurich

- **Sources:** [Restaurantji](https://www.restaurantji.com/il/lake-zurich/polka-dot-restaurant-/), [official site](https://polkadotrestaurant.com/)
- **Evidence:** Official site says "New Website Coming Soon..." and links out to order/Facebook; Restaurantji lists 4.8 from 100 ratings.
- **Pitch sentence:** "The Polish lunch/dinner/catering story is real, but the website still says coming soon. I mocked the finished version where guests see the menu, catering, hours, and order path without leaving the site."
- **Template:** `plate-01`, heritage-casual.
- **Risk:** Slightly outside the core triangle, but close enough to Barrington/Lake Zurich to count if we want the stronger lead.

### 5. Lao and Thai Spicy Noodle - South Elgin

- **Sources:** [Restaurantji](https://www.restaurantji.com/il/south-elgin/lao-and-thai-spicy-noodle-/), [DoorDash](https://www.doordash.com/en/store/lao-thai-spicy-noodle---612-s-randall-rd-south-elgin-35275957/), [generated profile](https://lao-thai-spicy-noodle.wa-cafe.com/)
- **Evidence:** Restaurantji lists 4.5 from 189 ratings and no official site. Public web presence is DoorDash plus generated/local-directory pages.
- **Pitch sentence:** "People are already finding the Lao/Thai menu through delivery and directory pages. I mocked an owned page that makes the noodles, curry, hours, pickup, and South Elgin location clear before a guest bounces to DoorDash."
- **Template:** `bamzi-01`, adapted carefully for Lao/Thai.
- **Risk:** Lower-ticket casual restaurant. Keep it direct, menu-first, and practical.

## Elgin-Specific Notes

- **Street Food Kingz** is the best Elgin-city lead after direct verification. Its domain resolves to a bare order shell: [streetfoodkingzelgin.com](https://www.streetfoodkingzelgin.com/). Good distinctive Puerto Rican pitch.
- **Shawarma Stop** initially looked no-site from Restaurantji, but direct search surfaced [shawarmastops.com](https://shawarmastops.com/) with menu/location/catering/contact. Demote.
- **Tatsu Ramen House** initially looked no-site from Restaurantji, but direct search surfaced [tatsuramenhouse.com](https://tatsuramenhouse.com/) with a real menu and content. Demote.
- **Carmina's Restaurant and Banquets** looked Toast-only from Restaurantji, but direct search surfaced [carminasmexican.com](https://carminasmexican.com/) with table booking, ordering, banquet, and specials paths. Demote.
- **Cafe Roma** has a working owned site at [tastecaferoma.com](https://www.tastecaferoma.com/) with menus, catering, about, and location/hours. Not bad enough.
- **Martini Room** still has a weak old Wix-era site, but old qualification already flagged it as a template-gap entertainment lounge. Do not build with current catalog unless we intentionally create that lounge/event template.

## Barrington-Specific Notes

- **Ciao Baby!** is the cleanest Barrington lead: strong enough Italian proof and no clear owned site.
- **Sagano Japanese Restaurant** is a good no-owned-site sushi bench lead, but likely needs manual photo/menu verification before build.
- **The Blue Heron Cafe & Lounge** has a hard technical smell because an old domain path returned 502, but the concept is lower-proof than Ciao Baby.
- **La Mesa** looked no-site in Restaurantji but has a real current site at [lamesarestaurantil.com](https://lamesarestaurantil.com/). Demote.
- **Polish & American Bistro** has a real, fairly complete site at [polishamericanbistro.com](https://polishamericanbistro.com/). Demote.

## Woodstock-Specific Notes

- **Mary's** and **Winestock** are the two best Woodstock builds.
- **El Niagara** is useful no-site bench material, but the pitch is less distinctive than Mary's.
- **Fas Tacos** has a hard 404 official domain, but the business/register is more fast-casual and lower priority.
- **Your Sister's Tomato** is not a priority despite a script-level 403: direct search shows a working site with restaurant/food-truck/event content, and the restaurant is seasonally/temporarily closed during food-truck season.
- **Sofie's Whiskey & Wine** is not top priority: direct search found working contact and Toast-order paths. Could be a future wine/bar improvement lead, but not a hard bad-site case.

## Recommended Next Action

For this geography, build in this order:

1. **Mary's Mexican Grill** - sharpest hard failure in Woodstock.
2. **Winestock Market & Lounge** - strongest concept/economics in Woodstock.
3. **Ciao Baby!** - best Barrington no-owned-site opportunity.
4. **Lao and Thai Spicy Noodle** - best Elgin-area distinctive no-site restaurant.
5. **Street Food Kingz** - best Elgin-city order-shell lead.

