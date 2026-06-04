# Moontime Smokin Que Current-Site Audit

Date: 2026-06-04
Lead ID: 788d0e2a-8fea-4a88-9d28-bbc0263959a6
Current website: https://moontimebbq.com/

## Inputs Collected

- Desktop screenshot: `restaurant-website-system/sites/moontime-smokin-que/screenshots/current-site-desktop-full.png`
- Mobile full screenshot: `restaurant-website-system/sites/moontime-smokin-que/screenshots/current-site-mobile-full.png`
- Mobile fold screenshot: `restaurant-website-system/sites/moontime-smokin-que/screenshots/current-site-mobile-fold.png`
- Scraped text and links: `restaurant-website-system/sites/moontime-smokin-que/scrapes/current-site-dom-snapshot.txt`
- Structured scrape mirror: `restaurant-website-system/sites/moontime-smokin-que/scrapes/current-site-scrape.json`

## Verbatim Findings

| Field | Evidence |
| --- | --- |
| Platform / maker | Footer says `Website made by 32 Creative`; site behaves like a simple WordPress-style restaurant site. |
| Hero | Homepage opens with `WOOD-FIRED BARBEQUE`, `ORDER ONLINE`, and `MEAT, MEAT AND MORE MEAT`. |
| Primary CTAs | Main nav includes `ORDER`; homepage has `ORDER ONLINE`; menu page ends with catering email and a `click here` link. |
| Menu | Full in-page menu with cash pricing, including smoked wings $12, ribs $24 half / $34 full, brisket sandwich $18.50, brisket grilled cheese $21, and sides/sauces. |
| Order flow | Toast order link is present: `https://order.toasttab.com/online/moontime-smokin-que-88-railroad-street-unit-a`. |
| Catering | About page says catering packages are available for 20 to 300 people; contact page frames the form around catering needs. |
| Address | `88 Railroad Street Unit A, Crystal Lake, IL 60014`. |
| Phone | `(779) 994-7119`. |
| Email | `catering@moontimebbq.com`. |
| Hours | Contact page lists Mon-Tues closed, Wed-Thurs 11am-9pm, Fri-Sat 11am-10pm, Sun 11am-7pm, with kitchen closing one hour before posted closing. |
| Social | Homepage links to Facebook and Instagram. |
| Story | About page names Heather and Joe Cummings and describes the 2017 start, growth from catering/carry-out to full service, and the downtown full bar. |

## Mobile State

1. The iPhone fold shows the main brand and order path, but the first-screen hierarchy is very sparse: a visitor sees the smokehouse claim before any catering, bar, trust, or menu proof.
2. The homepage relies on a long vertical scroll before the address and social proof, so mobile visitors must keep moving before they can confirm location and restaurant fit.
3. The menu is text-rich and usable, but it is a long single-page list with limited scan aids for high-margin categories like catering, ribs, brisket, and party trays.

## Conversion / Credibility Opportunities

1. Catering deserves a stronger front-door path. The current site mentions 20-300 person packages, but the homepage does not sell event use cases, group ordering, or why the BBQ travels well.
2. The order path exists, yet the site does not explain the fastest way to choose between dine-in, carryout, catering, gift cards, and rewards.
3. The current homepage gives very little trust evidence above the fold: no review count, no signature item strip, no owner story preview, and no local/downtown Crystal Lake signal until lower on the page.
4. The food identity is strong in copy, but the layout does not turn menu specifics like blueberry chipotle ribs, smoked wings, brisket grilled cheese, and house sauces into a skimmable sales case.
5. Small polish issues reduce confidence, including inconsistent capitalization and compressed copy such as `woodfired`, `St.Louis`, and `premuim` on the about page.

## Structured Lead Metadata

```json
{
  "owner_name": "Heather and Joe Cummings",
  "owner_email": null,
  "contact_email": "catering@moontimebbq.com",
  "phone": "(779) 994-7119",
  "hours": "Mon-Tues closed; Wed-Thurs 11am-9pm; Fri-Sat 11am-10pm; Sun 11am-7pm; kitchen closes one hour before posted closing.",
  "address_location": "88 Railroad Street Unit A, Crystal Lake, IL 60014",
  "website_url": "https://moontimebbq.com/",
  "order_url": "https://order.toasttab.com/online/moontime-smokin-que-88-railroad-street-unit-a",
  "reservation_url": null,
  "catering_events_url": "https://moontimebbq.com/contact/",
  "google_rating": 4.4,
  "google_review_count": 165,
  "outreach_email_draft_path": null,
  "outreach_email_draft_status": "not_created",
  "metadata_source_notes": "Official homepage, menu, about, and contact pages were opened in browser and scraped. Google rating/review count came from Mission Control lead metadata and public search/listing evidence; the separate Highest-filter Google review packet is not part of this current-site audit gate."
}
```

## Why Rebuild

Moontime already has the operational basics online, so the redesign should not pretend the current site is broken. The case is sharper: make the website sell the smokehouse better. A stronger preview can put ribs, brisket, catering, Toast ordering, local ownership, and downtown Crystal Lake trust into a mobile-first path that helps guests decide faster and helps the owner see a clearer catering/ordering upside.

