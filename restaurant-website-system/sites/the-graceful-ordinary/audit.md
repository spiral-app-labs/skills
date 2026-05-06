# The Graceful Ordinary — Current Site / Source Audit

- Date: 2026-05-06
- Site slug: `the-graceful-ordinary`
- MC parent task: `377dcee1-820a-4d94-a5b1-0740be57c92c`
- Lead ID: `a513755c-e7a3-438e-b8e9-78e8cd99e080`
- Restaurant: The Graceful Ordinary, St. Charles, IL
- Official site: `https://www.thegracefulordinary.com/`
- Existing preview in MC lead: `https://graceful-ordinary-redesign.vercel.app`
- Selected archetype: **not locked yet**; likely `Roma` or `Heaven Palate` candidate, pending formal routing gate.

## Inputs collected

Browser evidence captured against the live official site:

- `restaurant-website-system/sites/the-graceful-ordinary/screenshots/current-site-desktop-full.png`
- `restaurant-website-system/sites/the-graceful-ordinary/screenshots/current-site-desktop-fold.png`
- `restaurant-website-system/sites/the-graceful-ordinary/screenshots/current-site-mobile-full.png`
- `restaurant-website-system/sites/the-graceful-ordinary/screenshots/current-site-mobile-fold.png`
- `restaurant-website-system/sites/the-graceful-ordinary/screenshots/thumbs/current-site-desktop-full-thumb.png`
- `restaurant-website-system/sites/the-graceful-ordinary/screenshots/thumbs/current-site-mobile-full-thumb.png`
- `restaurant-website-system/sites/the-graceful-ordinary/scrapes/current-site-dom-snapshot.txt`
- `restaurant-website-system/sites/the-graceful-ordinary/scrapes/current-site-summary.json`

Support pages checked:

- Official menu: `https://www.thegracefulordinary.com/menu`
- About/team: `https://www.thegracefulordinary.com/about-us`
- Contact/hours: `https://www.thegracefulordinary.com/contact`
- Press: `https://www.thegracefulordinary.com/press`

Google Reviews are **not** captured in this artifact. The next canonical gate is `reviews` and must collect the Highest-filtered 30 written Google reviews packet before copy or pitch language relies on review themes.

## Source status

The official site is live and content-rich. It already contains a strong brand premise, chef/owner positioning, reservation conversion through Resy, gift card/employment paths, hours, location, press links, menu content, and high-quality dark editorial imagery.

The main opportunity is not basic credibility; it is conversion clarity and sell-story packaging. The current site has strong raw material, but some high-value proof and owner-ready story elements are buried or visually under-explained.

## Verbatim findings

| Field | Current site evidence |
| --- | --- |
| Platform / shape | Webflow-style polished editorial site with dark visual system, carousel/gallery sections, and separate pages for About, Menu, Events, Press, Contact. |
| Hero | “There is grace in the ordinary.” followed by: “In Colonial times, the town tavern was called the ordinary… This is our version, refined.” |
| Positioning | “The traditional tavern with a fresh twist”; “Prepared on an open hearth”; “refined rustic.” |
| Owner / chef story | “For the owners, award-winning chef Chris Curren and wife Megan…” with a vision “to create a place to be comfortable and an experience to be remembered.” |
| Team | Homepage names Adam Kappesser as Chef de Cuisine. About page includes Jack Sonin, Wine Director & Assistant General Manager, and his Court of Master Sommeliers credential path. |
| Primary CTA | Resy booking button on homepage; contact page links “Book your The Graceful Ordinary reservation on Resy.” |
| Other conversion paths | Gift card via Upserve, employment opportunities, events page, Instagram/Facebook. |
| Location | `3 East Main Street, St. Charles, Illinois`. MC lead city currently says Elgin; source audit should use the official site location unless MC intentionally tracks outreach territory. |
| Phone | `(331) 235-5803`. |
| Hours | Tue–Wed 4–10pm; Thu 4–11pm; Fri 4pm–12am; Sat brunch/lunch + dinner; Sun brunch + dinner; Mon closed; major holidays closed. Contact page has two Saturday variants: “Lunch 12pm-3pm” in one block and “Brunch 10am–3pm” in the Hours block. |
| Menu | Menu is rich and seasonal, with exact dishes like Maytag Bleu Cheese, Bone Marrow, Octopus Carpaccio, Ramp Cavatelli, Sea Bass, Whole Fish, Delmonico Ribeye, Beer Braised Short Rib Bourguignon, plus named cocktails including “The Fig and the Furious.” |
| Menu freshness | Menu page says items are subject to change weekly. It also appears to contain leftover/template copy in one section: “Add topping to any pizza” and repeated “Donec eget massa non ante.” |
| Press / trust | Press page lists Kane County Choice Awards, Chicago Magazine, Kane County Magazine, Restaurant Business, WGN9, FSR Magazine, Chicago Tribune Readers’ Choice, Eater Chicago, New York Times, Forbes, Daily Herald, Modern Luxury Chicago Social, and more. |
| Footer / contact | Footer repeats nav, address, phone, hours, gift card, employment opportunities. |

## Mobile state

Evidence: `screenshots/current-site-mobile-fold.png`, `screenshots/current-site-mobile-full.png`.

1. The mobile first fold preserves the cinematic identity but the primary booking path is not prominent at first paint; guests must scroll to reach the Resy module.
2. The top navigation collapses to a small menu control, but the hero itself does not immediately expose reservation, menu, hours, or phone actions.
3. The full mobile page is extremely tall because the photographic/editorial rhythm stretches the homepage; useful contact/hours information is far below the initial story sections.
4. The brand imagery is strong, but several sections render as image-first with sparse visible text, which weakens skim-speed for a hungry/mobile visitor.
5. Contact and hours are present, but a sticky mobile action bar for Reserve / Menu / Directions / Call would make the site much more conversion-forward without flattening the premium brand.

## Secret sauce observed from owned sources

Review packet pending; this section uses official-site and press/menu evidence only.

- **Refined rustic identity:** The site’s strongest owned phrase is “There is grace in the ordinary,” paired with “traditional tavern with a fresh twist” and “refined rustic.”
- **Open-hearth / seasonal cooking:** Menu and homepage both support a fire/craft-led food story: bone marrow, whole fish, dry-aged bolognese, smoked salmon deviled eggs, Delmonico ribeye, beer-braised short rib, weekly-changing menus.
- **Chef + community credibility:** Chris and Megan Curren are named as owners, with the current site connecting the concept to the community where they live.
- **Wine/cocktail credibility:** Jack Sonin’s sommelier path and the named cocktail list create a sophisticated beverage story.
- **Press density:** The restaurant has much more external validation than the homepage immediately surfaces.

## Owner voice phrase bank

Google owner replies pending. Current owned-site phrases that should seed the rebuild:

```json
[
  { "phrase": "There is grace in the ordinary.", "source": "homepage hero", "tone": "poetic / brand-defining" },
  { "phrase": "This is our version, refined.", "source": "homepage hero", "tone": "confident / refined" },
  { "phrase": "new, yet familiar somehow", "source": "homepage section heading", "tone": "warm / familiar" },
  { "phrase": "traditional tavern with a fresh twist", "source": "homepage", "tone": "positioning" },
  { "phrase": "refined rustic", "source": "homepage", "tone": "specific / culinary" },
  { "phrase": "a place to be comfortable and an experience to be remembered", "source": "owner story block", "tone": "hospitality / mission" }
]
```

## External trust signals to preserve/surface

The press page contains unusually strong proof that should be elevated in a redesign rather than hidden on a secondary page:

- 2025 Kane County Choice Awards: Best of the Fox Restaurant and Romantic Dinner — Kane County Chronicle.
- “Five Delicious Reasons to Leave the House This Winter” — Chicago Magazine.
- “Finest of the Fine: Dining on the Waterfront” — Kane County Magazine.
- Restaurant Business Menu Talk Podcast.
- WGN9 Chicago Gourmet / Hamburger Hop.
- FSR Magazine America’s Top 50 Independent Restaurants for 2023.
- Chicago Tribune Readers’ Choice Food Awards 2023: Best Suburban Restaurant.
- Eater Chicago James Beard Awards / Coffee Talk mention.
- New York Times / Forbes / Daily Herald / Modern Luxury Chicago Social items listed in the press archive.

## Principle violations / rebuild opportunities

1. **Conversion path is too subtle for mobile.** The site is premium, but reserve/menu/call/directions are not immediate enough on small screens.
2. **Trust proof is buried.** The press archive is a major sales asset and should become a concise “as featured in / awarded by” trust strip on the homepage.
3. **Menu page has at least one template/placeholder artifact.** The “Add topping to any pizza” / “Donec eget massa non ante” block clashes with an otherwise premium, chef-driven menu.
4. **Location mismatch with MC lead record.** Official source says St. Charles, IL; MC lead city says Elgin, IL. Treat St. Charles as public truth for build copy unless MC intentionally uses Elgin for outreach territory.
5. **Hours inconsistency inside the official site.** Saturday is shown as “Lunch 12pm-3pm” in one contact block and “Brunch 10am–3pm” in another. Copy should either quote official hours carefully or await owner confirmation.
6. **Story is strong but not packaged for a pitch.** The current site has premium phrases, awards, team credentials, and menu specificity; the redesign should make those elements faster to understand without becoming generic luxury.

## Why rebuild / improve

The Graceful Ordinary already has a credible premium identity. The sellable improvement is to preserve that identity while making the site work harder:

- turn hidden press into instant credibility,
- make mobile booking/menu/directions frictionless,
- remove placeholder/template artifacts,
- clarify hours and location,
- preserve chef-driven seasonal specificity,
- shape the story around riverfront refined-rustic dining rather than generic “fine dining.”

## Risks / blockers before later gates

- Google Reviews Highest-filter packet is still required before the `reviews` gate can pass.
- The routing gate should choose exactly one archetype. Current evidence points to a restrained chef-driven/editorial route (`Roma`) with possible premium tavern/luxury accents; do not lock until formal routing.
- Hours need careful handling because the official contact page has Saturday wording variance.
- MC lead city should be reconciled against official St. Charles address before pitch copy.

## Structured lead metadata packet

```json
{
  "owner_name": "Chris Curren and Megan Curren",
  "owner_email": null,
  "contact_email": "yourfriends@thegracefulordinary.com",
  "phone": "(331) 235-5803",
  "hours": [
    "Tue-Wed 4pm-10pm",
    "Thu 4pm-11pm",
    "Fri 4pm-12am",
    "Sat brunch/lunch/dinner hours require reconciliation: official page shows Lunch 12pm-3pm in one block and Brunch 10am-3pm in another; dinner 4pm-12am",
    "Sun brunch 10am-3pm and dinner 4pm-9pm",
    "Mon closed"
  ],
  "address_location": "3 East Main Street, St. Charles, Illinois",
  "website_url": "https://www.thegracefulordinary.com/",
  "order_url": null,
  "reservation_url": "https://resy.com/cities/stc/the-graceful-ordinary",
  "catering_events_url": "https://www.thegracefulordinary.com/events",
  "google_rating": 4.6,
  "google_review_count": 280,
  "outreach_email_draft_path": null,
  "outreach_email_draft_status": "existing_pitch_email_in_mc_lead",
  "metadata_source_notes": [
    "Official homepage/contact/menu/press pages checked 2026-05-06.",
    "Browser screenshots and DOM scrape captured under sites/the-graceful-ordinary.",
    "Google Reviews packet pending next canonical gate.",
    "Official address is St. Charles, IL even though MC lead city field currently says Elgin, IL."
  ],
  "field_sources": {
    "owner_name": ["restaurant-website-system/sites/the-graceful-ordinary/scrapes/current-site-dom-snapshot.txt"],
    "contact_email": ["Mission Control agency_leads row"],
    "phone": ["https://www.thegracefulordinary.com/contact"],
    "hours": ["https://www.thegracefulordinary.com/contact"],
    "address_location": ["https://www.thegracefulordinary.com/contact"],
    "reservation_url": ["https://www.thegracefulordinary.com/contact"],
    "google_rating": ["Mission Control agency_leads row"],
    "google_review_count": ["Mission Control agency_leads row"]
  }
}
```
