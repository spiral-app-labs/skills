# Tin Man's Pub — Current Site / Source Audit

- Date: 2026-05-04
- Site slug: `tin-man-s-pub`
- MC parent task: `173436b8-bcc1-4ebd-85ac-44b2541409dc`
- Lead ID: `016b951a-6ed7-4687-ad56-3dd34d97a6ca`
- Bar/pub: Tin Man's Pub, Fox River Grove, IL
- Official website found: none in MC or current source pass
- Address found: `926 W State Rte 22, Fox River Grove, IL`
- Phone found: `(847) 516-1160`

## Source status

No clear owned restaurant/bar website surfaced in MC or the current source pass. Tin Man's public web presence appears to be led by Restaurantji and generated directory/profile pages. The qualification note says Restaurantji has no website listed, only an order/menu path, and that this is a weaker template-fit lead.

The pitch hook is therefore conditional and softer: **Tin Man's looks like a local sports pub with no owned site, but the fit is weaker and needs real-browser/Google verification before any build or outreach.**

## Public proof captured

### Restaurantji

- URL: `https://www.restaurantji.com/il/fox-river-grove/tin-mans-sports-pub-/`
- Title: `Tin Man's Pub, Fox River Grove - Menu, Reviews (66), Photos (26)`.
- Categories: Bars, Sports Bars, Pubs.
- Rating evidence: `4.7` from `66 ratings`.
- Address: `926 W State Rte 22, Fox River Grove`.
- Phone: `(847) 516-1160`.
- Customer favorite surfaced: Bowl of Chili.
- Menu evidence: Restaurantji references `gallery/menu/#id=YVSywUhxNZ.jpg`, suggesting menu discovery may be image/gallery-based rather than first-party HTML.
- Hours: Monday–Saturday 8AM–2AM; Sunday 8AM–12PM.
- **Important caution:** recent visible Restaurantji review excerpts in the fetch are politically charged/negative and not useful for marketing copy. Do not reuse them; browser/Google review capture is required to evaluate real reputation quality.

### Wheree / generated profile

- Qualification source listed `https://tin-mans-pub.wheree.com/`.
- Current web fetch hit a `403 / Just a moment...` checkpoint, so no usable profile details were captured in this environment.

### Restaurant Guru

- A guessed Restaurant Guru URL did not resolve to the Tin Man's profile and returned a generic page-not-found result. Do not treat Restaurant Guru as confirmed evidence for this lead unless browser/search finds the correct profile.

## Audit findings

1. **Owned-site gap:** no official website is present in MC or Restaurantji source evidence; public info is directory-led.
2. **Template-fit weakness:** this appears to be a casual sports pub/corner-bar concept, not a polished restaurant or cocktail lounge. The build should be stripped down and practical if pursued at all.
3. **Menu/content gap:** available menu proof is minimal — only a Restaurantji menu-gallery reference and bowl of chili favorite surfaced in fetch.
4. **Reputation/risk gap:** visible fetched review excerpts are negative/political. This may be review-bombing or a real brand risk, but it must be assessed in Google Reviews before any outreach.
5. **Route:** `bramble-01` as the closest current archetype for bars/pubs, but with a stripped-down sports-pub/corner-bar treatment. Qualification mentioned `plate-01` stripped down / possible skip; because the active archetype set maps bars to Bramble, use Bramble only if browser/photos prove enough pub personality. Otherwise skip/nurture rather than build.

## Required browser evidence blocker

OpenClaw managed browser is unavailable/cooling down after repeated failures (`No supported browser found`), so this audit currently has web-fetch/source evidence but not the required desktop/mobile screenshots or live browser DOM snapshot. Before marking the canonical audit gate fully passed, capture:

- Google/Maps profile screenshot verifying official website field, address, hours, and current rating
- Highest-filter 30 written Google review packet, with special attention to whether negative/political review snippets reflect a real outreach risk
- desktop/mobile screenshots of Restaurantji and any generated profile/order/menu pages
- browser DOM/text snapshot for the strongest available public profiles
- photo evidence to decide whether this should be Bramble, a stripped-down pub build, or a skip

## Current recommendation

Treat Tin Man's Pub as a weak/conditional lead, not a priority build. If Google/Maps confirms no owned site and reviews/photos show a stable local sports-pub identity, the site should be a practical pub page: hours, location, call, menu image/food basics, TVs/sports, drinks, and local vibe. If the political/reputation risk or template mismatch is real, skip or hold rather than spending build capacity.


## 2026-05-05 browser evidence update

OpenClaw managed Chrome is now available on this host, so the previous browser-capture blocker is cleared locally. New browser evidence is saved in `browser-evidence-audit-2026-05-05.md` and `scrapes/browser-audit-manifest-2026-05-05.json`.

Captured Google/no-owned-site evidence:

- Google desktop/mobile screenshots and text. Google mobile shows Tinman's Pub at `926 IL-22, Fox River Grove, IL 60021`, located in Stone Hill Center, with only 3.2 from 6 Google reviews, no owned website shown, and prompts to add phone/hours/website.
- Desktop Google results surface Yelp, Tripadvisor, MapQuest, Fox River Grove municipal listing, Apple Maps, SinglePlatform, Naturally McHenry County, Menuweb PDF, and Restaurant Guru — no first-party site.
- Menu/official-site search finds Yelp/SinglePlatform/Menuweb and directory results, not a restaurant-owned site.

Captured directory/reputation evidence:

- Restaurantji desktop/mobile screenshots and text showing 4.7 from 66 ratings, Bars/Sports Bars/Pubs categories, address, phone, hours, delivery, outdoor seating, great cocktails, no reservations, and Bowl of Chili as the only surfaced favorite. Visible recent Restaurantji review excerpts are political/negative and should not be used in marketing copy.
- Wheree screenshot/text showing sports bar / pub / pool hall positioning, Diamond pool tables, generous portions, homemade dishes, bartenders, free pool Fridays, and social pub atmosphere; status check still returned a 403 checkpoint.
- Restaurant Guru direct profile screenshot/text showing 4.5 Google-derived proof from 109, 30 photos, beer, burgers, pool/gaming, parking, TV, Wi-Fi, outdoor seating, takeaway, no booking, and positive recent Google excerpts. Restaurant Guru search evidence also surfaces a negative AI overview / reputation warning around a polarizing dive-bar atmosphere and political decor reports.

Updated audit interpretation: the browser audit confirms no clear owned-site path, but Tin Man's should not automatically advance to reviews/build. This is a weak/conditional corner-bar lead with sparse Google proof, inconsistent reputation signals, minimal food/menu depth, and real outreach risk. Recommended local status is `blocked` / hold for Mission Control/founder decision: skip/nurture unless explicitly approved for a very stripped-down Bramble pub page.

Local canonical status: `blocked`, pending Mission Control writeback.
