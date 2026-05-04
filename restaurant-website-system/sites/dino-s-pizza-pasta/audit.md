# Dino's Pizza & Pasta — Current Site / Source Audit

- Date: 2026-05-04
- Site slug: `dino-s-pizza-pasta`
- MC parent task: `0d4123df-83b0-4d81-bc75-88263ebb402b`
- Lead ID: `da8188e5-7830-43ec-b908-661cf2e56b30`
- Restaurant: Dino's Pizza & Pasta, Lake in the Hills, IL
- Official site: `https://www.dinospizzalith.com/`
- Address found: `6 Miller Rd, Lake in the Hills, IL`
- Phone found: `(847) 658-3300`

## Source status

Dino's does have an owned site, but the homepage is thin and visibly broken/unfinished in crawlable text. The fetched homepage exposes duplicate nav links, social/email links, the phone number, and a stray template artifact:

- `AVIATOR`
- `LONDON`
- `/menu-aviator`

That gives a concrete pitch hook: **the restaurant has real local pizza/pasta proof, but its owned homepage still exposes template/development debris and does not sell the menu/order story cleanly.**

## Public proof captured

### Official site

- Homepage title: `Dino's Pizza L.I.T.H`.
- Contact/social surfaced: Facebook, Instagram, `dinospizza64@gmail.com`, Yelp link, phone `847 658 3300`.
- Nav: News, About us, Welcome, Menu, Pictures, Location.
- Homepage crawl text is very sparse and includes `AVIATOR LONDON` artifact.

### Official menu page

- URL: `https://www.dinospizzalith.com/menu/`
- Daily dine-in specials promoted through Facebook/Instagram.
- Pizza formats: slices, thin crust, double dough, old fashioned in the pan, stuffed pizza / Chicago-style deep dish.
- Thin crust copy: `This is what makes Dino's famous. Crispy thin delicious pizza made from scratch daily.`
- Dino's Special: sausage, mushroom, onion, green pepper.
- Gluten-free 10" crust.
- Toppings include sausage, green pepper, pepperoni, mushroom, bacon, Canadian bacon, onion, pineapple, jalapeño, meatball, spinach, ground beef, fresh tomato, giardiniera, olives, fresh garlic, extra cheese/sauce, Italian beef.
- Pasta dinners include Dino's garlic stick and choice of meat or marinara sauce; meatballs/sausage add-on.
- Sandwiches can be served on Dino's garlic bread.
- Beer/wine copy: `we serve pop, not soda`; local craft beers, domestic/select imports, bar seating, game on TV.

### Restaurantji

- URL: `https://www.restaurantji.com/il/lake-in-the-hills/dinos-pizza-and-pasta-/`
- Category: Pizza, American.
- Rating evidence: `4.3` from `142 ratings`.
- Address: `6 Miller Rd, Lake in the Hills`.
- Phone: `(847) 658-3300`.
- Favorites surfaced: The Wise Guy Sandwich, Lasagna Meat Sauce, Mozzarella Sticks, Chicken Fingers, Beer Nuggets, Italian Beef, Meatball, Sausage.
- Hours: Monday closed; Tuesday closed; Wed/Thu/Sun 4–9PM; Fri/Sat 4–10PM.

### Yelp/search snippet

- Yelp snippet says Dino's is family owned and operated since 1997.
- Snippet claims owner Dino came to America and opened Dino's as a lifelong dream.
- Snippet includes brand line: `Life without Pizza, is no Life at all`.
- Search/menu snippet highlights Dino's homemade signature garlic spread and homemade pizza sauce.

## Audit findings

1. **Homepage credibility bug:** `AVIATOR LONDON` / `/menu-aviator` looks like a template artifact on the official site and weakens trust immediately.
2. **Conversion clarity gap:** the official site has a real menu and phone/social links, but the homepage does not lead with order/call/hours/pizza proof in a modern conversion-first way.
3. **Menu strength is under-packaged:** made-from-scratch thin crust, multiple pizza styles, local craft beer, garlic bread sandwiches, and pasta dinners are real assets but not surfaced as a sharp story.
4. **Local/family proof is off-site:** the family-owned since 1997 story appears in snippets/Yelp, not as the homepage's central differentiator.
5. **Route:** `pepper-01`, with a pizza/order-first interpretation. Core archetype mapping: **Cuisine** — warm casual neighborhood restaurant where clarity, approachability, phone/order flow, and menu readability matter most.

## Required browser evidence blocker

OpenClaw managed browser is unavailable on this host (`No supported browser found`), so this audit currently has web-fetch/search evidence but not the required desktop/mobile screenshots or live browser DOM snapshot. Before marking the canonical audit gate fully passed, capture:

- desktop/mobile screenshot of the official homepage showing the current first impression and any template artifact
- desktop/mobile screenshot of the official menu page
- browser DOM/text snapshot for homepage/menu/location
- Google/Maps review screenshot and later Highest-filter 30 written Google review packet

## Current recommendation

Proceed as a strong build candidate after browser evidence is attached. The pitch is concrete and easy to understand: Dino's has the food reputation and real menu depth, but the owned homepage still looks unfinished and undersells ordering, hours, made-from-scratch pizza, family ownership, and dine-in beer/bar energy.
