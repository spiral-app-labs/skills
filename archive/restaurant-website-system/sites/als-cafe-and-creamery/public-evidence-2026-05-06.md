# Al's Cafe & Creamery — public evidence refresh

- Checked: 2026-05-06 09:53 CDT
- Site slug: `als-cafe-and-creamery`
- Scope: public evidence only; no Mission Control/Supabase writes.

## Official/public URLs checked

| Source | URL | Evidence captured |
|---|---|---|
| Official homepage | https://www.alscafe.com/ | Phone reservations, Toast order link, hours, address, menus/chef specials/wine/Burns Malts sections |
| About page | https://www.alscafe.com/about-al-s | Chef Tony Jamin; comfort food plus innovative dishes; European/American fusion; scratch-made positioning |
| History page | https://www.alscafe.com/history-of-al-s-cafe | 1892 Ranstead Building; Al's Cafe & Creamery opened 1982; Burns' Malts recipe; current owners Tony + Patricia Jamin since 2005 |
| Menu page | https://www.alscafe.com/menus | Full menu with appetizers, chef sandwiches, burgers, salads, dinner/beverage/dessert tabs, May Schnitzel Fest |
| Burns Malts page | https://www.alscafe.com/famous-burns-malts | "World Famous Burns Malts & Shakes" with >6 scoops deluxe vanilla ice cream, classic/premium malt pricing |
| Toast ordering | https://www.toasttab.com/als-cafe/v3/?mode=fulfillment | Official homepage links to Toast Takeout for online ordering |
| Google Maps | https://www.google.com/maps/place/Al's+Cafe+%26+Creamery/@42.0361725,-88.2827053,17z/ | Browser snapshot showed 4.6 stars / 959 reviews, $20–30, category American restaurant, address 43 Dupage Ct, phone (847) 742-1180, and description: "Quaint spot in an 1892 building serving creative American cooking & old-fashioned ice cream treats." |
| Restaurantji | https://www.restaurantji.com/il/elgin/als-cafe-and-creamery-/ | 4.7 / 276 ratings; category American/New American; favorites include schnitzels, salmon, Burn's Chocolate Shakes; hours Wed-Sun 11AM–8PM |
| Restaurant Guru | https://restaurantguru.com/Als-Cafe-and-Creamery-Elgin | 315 photos; $20–30; menu/review evidence for salmon, wine, sangria, milkshakes/chocolate malt, decor/ambiance; Google users 4.6 |
| Checkle menu | https://www.checkle.com/biz/als-cafe-creamery-elgin/menu | Attempted; blocked by Vercel Security Checkpoint / 429 during `web_fetch` |

## Local evidence artifacts

### Screenshots

- `screenshots/current-site-desktop-full.png` — official homepage desktop/full-page capture
- `screenshots/current-site-mobile-fold.png` — official homepage mobile first fold
- `screenshots/current-site-mobile-fullish.png` — official homepage long mobile capture
- Thumbnails: `screenshots/*-thumb.png`

SHA-256:

```text
c260fc90311fe8427ced508f15658991d8cf65bac91016766b4c0d6672d9b5cb  screenshots/current-site-desktop-full.png
f5ce4a87906ba4ef29e57b45f3526bac5fff6c6b27778ff265486ef76bb60864  screenshots/current-site-mobile-fold.png
6c6aaf52d86a373c0016d0804fecf3e3d125009b716e05ef616893431f4c402b  screenshots/current-site-mobile-fullish.png
```

### Scrapes / text snapshots

- `scrapes/current-site.html`
- `scrapes/current-site-text.txt`
- `scrapes/about.html`
- `scrapes/about-text.txt`
- `scrapes/history.html`
- `scrapes/history-text.txt`
- `scrapes/menus.html`
- `scrapes/menus-text.txt`
- `scrapes/burns-malts.html`
- `scrapes/burns-malts-text.txt`
- Compatibility aliases: `scrapes/current-site-dom-snapshot.txt`, `scrapes/menu-text-snapshot.txt`

SHA-256:

```text
95aaf7fc886bf8183a701d838595e143bc882e0846ae95c9f9978812039e1bf5  scrapes/current-site-text.txt
e1965e7f875a72df77d6ace85882ec60ebd7c1cb155a3d138ae02e0c0f0ab7b6  scrapes/menus-text.txt
5f1d3c4d8a99090363f6beef083f26c9a40f85969a5583a38b4fd772ec59cda2  scrapes/about-text.txt
29628ba96fd9b371fe3104ff23fa15ccdd854f3c8ffa24c5b0ef596fd5f83089  scrapes/history-text.txt
a66ab219ddb0c6f01d33b860ad33ebb45c008b5ed0e9febd946d4f441e61ac83  scrapes/burns-malts-text.txt
```

## Key verified facts

- Business: Al's Cafe & Creamery
- Address: 43 DuPage Ct / 43 Dupage Ct, Elgin, IL 60120
- Phone/reservations: (847) 742-1180
- Hours from official site and public directories: Monday closed, Tuesday closed, Wednesday-Sunday 11:00 AM-8:00 PM
- Ordering: Toast takeout link from official site
- Menu/register: American/New American comfort food with chef specials, sandwiches/burgers/salads, schnitzel specials, wine/beer/cocktails, desserts and Burns Malts
- Heritage: 1892 Ranstead Building; Al's Cafe & Creamery opened in 1982; Burns' Malts recipe acquired from Burns Pharmacy; current owners Chef Tony Jamin and Patricia Jamin since 2005
- Public proof: Google Maps 4.6 / 959 reviews; Restaurantji 4.7 / 276 ratings; Restaurant Guru notes Google users awarded 4.6

## Current-site audit notes

- Current site is functional but dated: Wix-era visual system, thin typography, lots of small text, hero image/photo sections carrying most of the atmosphere.
- Desktop has the core conversion paths: phone reservation, Toast order, hours/location, menu, Burns Malts, contact.
- Mobile has clear issues: header/nav content is cramped/clipped; text is small; hero/card sections do not fully adapt to the viewport.
- The current site actually preserves some critical identity cues (history page, Burns Malts page, phone reservation, 1892 building story). Any redesign must preserve and elevate those, not flatten into generic modern bistro language.
