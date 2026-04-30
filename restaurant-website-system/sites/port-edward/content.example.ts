// Port Edward prospect content, forked from labrisa-01.
// The source site has strong real content; this file organizes it into a
// mobile-first decision path without replacing the phone-first operations.

const pe = (path: string) => `https://portedward.com${path}`;

export const content = {
  brand: {
    name: 'PORT EDWARD',
    legalName: 'Port Edward Restaurant',
    tagline: 'Fox River seafood since 1964',
    description:
      'Ziya’s Port Edward is a 60-year Fox River seafood institution for dinner, Sunday champagne brunch, Dockside, private rooms, and memory-making meals in Algonquin.',
    address: {
      street: '20 W. Algonquin Rd.',
      locality: 'Algonquin',
      region: 'IL',
      postalCode: '60102',
      country: 'US',
      line1: '20 W. Algonquin Rd.',
      line2: 'Algonquin, IL 60102',
    },
    phone: '(847) 658-5441',
    phoneHref: 'tel:+18476585441',
    email: 'info@portedward.com',
    url: 'https://portedward.com/',
    menuUrl: 'https://portedward.com/menu/',
    orderUrl: 'https://www.toasttab.com/port-edward-restaurant/v3',
    loyaltyUrl: 'https://portedward.com/loyalty-reward/',
    giftCardUrl: 'https://portedward.com/gift-cards/',
    emailSignupUrl: 'https://www.toasttab.com/port-edward-restaurant/marketing-signup',
    acceptsReservations: 'Phone reservations accepted for indoor dining, brunch, holiday brunch, Porpoise/Windmill seating, and private events.',
    social: [
      { label: 'Facebook', href: 'https://www.facebook.com/PortEdwardRestaurant' },
      { label: 'Instagram', href: 'https://www.instagram.com/portedwardrestaurant/' },
      { label: 'TikTok', href: 'https://www.tiktok.com/@portedwardrestaurant' },
      { label: 'YouTube', href: 'https://www.youtube.com/results?search_query=Port+Edward+Restaurant+Algonquin' },
    ],
    hours: [
      { day: 'Monday', range: 'Closed' },
      { day: 'Tuesday', range: '3:00 pm - 10:00 pm' },
      { day: 'Wednesday', range: '3:00 pm - 10:00 pm' },
      { day: 'Thursday', range: '3:00 pm - 10:00 pm' },
      { day: 'Friday', range: '3:00 pm - 11:00 pm' },
      { day: 'Saturday', range: '11:00 am - 11:00 pm' },
      { day: 'Sunday', range: '9:30 am - 10:00 pm' },
    ],
    menuServiceHours: [
      { day: 'Tuesday - Thursday', range: '3:00 pm - 8:00 pm' },
      { day: 'Friday', range: '3:00 pm - 9:00 pm' },
      { day: 'Saturday', range: '11:00 am - 9:00 pm' },
      { day: 'Sunday', range: '2:00 pm - 8:00 pm' },
    ],
    hoursConfig: {
      timezone: 'America/Chicago',
      ranges: [
        { day: 2 as const, open: '15:00', close: '22:00' },
        { day: 3 as const, open: '15:00', close: '22:00' },
        { day: 4 as const, open: '15:00', close: '22:00' },
        { day: 5 as const, open: '15:00', close: '23:00' },
        { day: 6 as const, open: '11:00', close: '23:00' },
        { day: 0 as const, open: '09:30', close: '22:00' },
      ],
      closures: [],
    },
    geo: { lat: 42.166797, lng: -88.2906569 },
  },

  nav: {
    primary: [
      { label: 'Menu', href: '/menu' },
      { label: 'Visit', href: '/visit' },
      { label: 'Events', href: '/events' },
      { label: 'Private Events', href: '/private-events' },
    ],
    cta: { label: 'Call', href: 'tel:+18476585441' },
  },

  images: {
    hero: pe('/wp-content/uploads/2019/06/pe-dockside-2019.jpg'),
    docksideWide: pe('/wp-content/uploads/2022/06/IMG_2074.jpg'),
    docksideTables: pe('/wp-content/uploads/2022/06/IMG_2068.jpg'),
    docksideCrew: pe('/wp-content/uploads/2022/06/IMG_0695.jpg'),
    privateTopside: pe('/wp-content/uploads/2024/02/port-edward-private-events-topside.jpg'),
    brunch: pe('/wp-content/uploads/2024/05/PortEds_Champagne-brunch.jpg'),
    surfTurf: pe('/wp-content/uploads/2024/11/PortEds_2024-surfturf2.webp'),
    menuDinner: pe('/wp-content/uploads/2021/02/PE_link-menu2-e1612729577373.jpg'),
    menuSpecials: pe('/wp-content/uploads/2021/02/PE_link-menu-e1612729585235.jpg'),
    wineEvent: pe('/wp-content/uploads/2026/03/PortEds_Spring-Wine-Tasting-2026-3.jpg'),
    surfEvent: pe('/wp-content/uploads/2026/01/PortEds_Surf-Turf-Buffet-2025-26-May.jpg'),
    mothersDay: pe('/wp-content/uploads/2026/04/PortEds_Mothers-Day-Brunch-2026-Post.jpg'),
  },

  hero: {
    eyebrow: 'Fox River seafood since 1964',
    h1: 'PORT EDWARD',
    intro:
      "Welcome aboard Ziya's Port Edward: brunch, Dockside, private rooms, and seafood memories on the river.",
    primaryCta: { label: 'Plan Your Visit', href: '#plan' },
    secondaryCta: {
      label: 'Order Online via Toast',
      href: 'https://www.toasttab.com/port-edward-restaurant/v3',
    },
    photoAlt: 'Dockside at Port Edward overlooking the Fox River',
    proof: [
      'Sunday champagne brunch',
      'Dockside returns Memorial Day weekend',
      'Private rooms up to 150 guests',
    ],
  },

  quickPaths: [
    { label: 'Dinner', href: '#plan', detail: 'Seafood, steaks, cocktails' },
    { label: 'Brunch', href: '#plan', detail: 'Sunday 9:30 am - 2 pm' },
    { label: 'Dockside', href: '#dockside', detail: 'Seasonal patio on the river' },
    { label: 'Private Events', href: '/private-events', detail: 'Topside, Mermaid, Regency' },
    { label: 'Order', href: 'https://www.toasttab.com/port-edward-restaurant/v3', detail: 'Toast pickup' },
  ],

  welcome: {
    script: 'Welcome aboard',
    body:
      'Port Edward is not a generic seafood room. It is the Fox River, the indoor harbor, the Porpoise boat, the windmill hideaway, koi and fish-pond memories, brunch tables, crab legs, staff who remember names, and Z carrying Mr. Ed’s unusual Algonquin landmark forward.',
    photo: pe('/wp-content/uploads/2022/06/IMG_0695.jpg'),
    photoAlt: 'Port Edward Dockside crew on the Fox River patio',
  },

  vignettes: [
    {
      src: pe('/wp-content/uploads/2022/06/IMG_2074.jpg'),
      alt: 'Port Edward Dockside seating along the water',
      caption: 'Dockside on the Fox',
    },
    {
      src: pe('/wp-content/uploads/2024/02/port-edward-private-events-topside.jpg'),
      alt: 'Topside room set for a private celebration',
      caption: 'Topside celebrations',
    },
    {
      src: pe('/wp-content/uploads/2024/05/PortEds_Champagne-brunch.jpg'),
      alt: 'Champagne brunch buffet at Port Edward',
      caption: 'Sunday brunch',
    },
    {
      src: pe('/wp-content/uploads/2022/06/IMG_2068.jpg'),
      alt: 'Busy Dockside patio tables at Port Edward',
      caption: 'River-season nights',
    },
  ],

  reviews: {
    eyebrow: 'Google Review Proof',
    heading: 'Guests come back for the river, brunch, seafood, and the room',
    intro:
      'No reviewer names are shown here. This section uses the Google highest-rating packet: aggregate rating, topic chips, and short review excerpts only.',
    aggregate: {
      rating: '4.2',
      count: '2,278',
      fiveStar: '1,426',
      source: 'Google Maps snapshot · April 30, 2026',
    },
    topics: [
      'buffet',
      'river view',
      'outdoor seating',
      'champagne',
      'lobster roll',
      'live music',
      'crab legs',
      'surf and turf buffet',
    ],
    items: [
      {
        quote: 'right on the water',
        theme: 'Riverfront atmosphere',
        body: 'The Fox River, patio, outdoor seating, and bar-facing water views show up as reasons to choose Port Edward.',
      },
      {
        quote: 'surf and turf buffet',
        theme: 'Brunch and buffet occasions',
        body: 'Sunday champagne brunch, holiday brunches, and first-Friday buffet nights read like family traditions, not side offerings.',
      },
      {
        quote: 'best cod sandwich',
        theme: 'Seafood signatures',
        body: 'Scallops, grouper, crab cakes, walleye, king crab legs, lobster, oysters, shrimp DeJonghe, and the Port Platter all recur in review themes.',
      },
      {
        quote: 'real port',
        theme: 'Nautical room memory',
        body: 'Guests treat the fish pond, boat, windmill, marine details, and old-school room as part of the meal.',
      },
    ],
  },

  feature: {
    photo: pe('/wp-content/uploads/2024/11/PortEds_2024-surfturf2.webp'),
    alt: 'Port Edward surf and turf buffet feature art',
    eyebrow: 'First Friday, November - May',
    caption:
      'Surf-and-turf buffet nights turn Port Edward into a seafood-and-prime-rib feast, with crab legs available by the pound.',
  },

  services: {
    eyebrow: 'Plan Your Visit',
    heading: 'Choose the Port Edward experience',
    intro:
      'Reservations stay phone-first, but the site should help guests ask for the right thing before they call.',
    items: [
      {
        id: 'dinner',
        label: 'Seafood Dinner',
        status: 'Indoor dining',
        body: 'Call for dinner reservations, then come for scallops, walleye, lobster, steaks, cocktails, and the nautical room.',
        cta: 'Call for Dinner',
        href: 'tel:+18476585441',
        photo: pe('/wp-content/uploads/2021/02/PE_link-menu2-e1612729577373.jpg'),
      },
      {
        id: 'brunch',
        label: 'Champagne Brunch',
        status: 'Sundays 9:30 am - 2 pm',
        body: 'Classic flowing champagne brunch with seafood stations, carving station, breakfast favorites, desserts, and optional crab legs.',
        cta: 'Call for Brunch',
        href: 'tel:+18476585441',
        photo: pe('/wp-content/uploads/2024/05/PortEds_Champagne-brunch.jpg'),
      },
      {
        id: 'holiday',
        label: 'Holiday Brunch',
        status: 'Deposit required',
        body: 'Easter, Mother’s Day, Father’s Day, and Thanksgiving brunches need a phone reservation and deposit.',
        cta: 'Holiday Details',
        href: '/events',
        photo: pe('/wp-content/uploads/2026/04/PortEds_Mothers-Day-Brunch-2026-Post.jpg'),
      },
      {
        id: 'porpoise',
        label: 'Porpoise & Windmill',
        status: 'Special seating',
        body: 'Ask about the 25-foot Porpoise boat cabin or the intimate Windmill alcove when you call.',
        cta: 'Call Availability',
        href: 'tel:+18476585441',
        photo: pe('/wp-content/uploads/2024/02/port-edward-private-events-topside.jpg'),
      },
      {
        id: 'dockside',
        label: 'Dockside',
        status: 'Reopens Memorial Day weekend',
        body: 'Seasonal patio and bar seating on the Fox River. During Dockside season, reservations stay limited to brunch.',
        cta: 'See Dockside',
        href: '#dockside',
        photo: pe('/wp-content/uploads/2022/06/IMG_2074.jpg'),
      },
      {
        id: 'private',
        label: 'Private Events',
        status: 'Rooms up to 150',
        body: 'Route showers, birthdays, rehearsal dinners, company dinners, and holiday parties to the right room.',
        cta: 'Plan an Event',
        href: '/private-events',
        photo: pe('/wp-content/uploads/2024/02/port-edward-private-events-topside.jpg'),
      },
    ],
  },

  revenuePaths: {
    eyebrow: 'What guests come for',
    heading: 'Dinner, brunch, Dockside, events, and gifts in one clear harbor',
    items: [
      { label: 'Seafood Dinner', detail: 'Scallops, walleye, lobster, crab legs, Port Platter, steaks.', href: '/menu' },
      { label: 'Sunday Brunch', detail: 'Flowing champagne, seafood station, carving station, desserts.', href: '/events' },
      { label: 'Toast Ordering', detail: 'Keep the existing Toast path for pickup orders.', href: 'https://www.toasttab.com/port-edward-restaurant/v3' },
      { label: 'Ticketed Events', detail: 'Wine tastings, buffet nights, and entertainment belong on the home page.', href: '/events' },
      { label: 'Private Rooms', detail: 'Topside, Mermaid Room, Regency, and whole-venue event routing.', href: '/private-events' },
      { label: 'Loyalty & Gifts', detail: 'Gift cards and email signup support repeat visits.', href: 'https://portedward.com/gift-cards/' },
    ],
  },

  dockside: {
    eyebrow: 'Dockside Season State',
    heading: 'Closed for the season, reopening Memorial Day weekend',
    body:
      'Dockside is a seasonal riverfront path, not a normal reservation product. The site should tell guests its state early, then point them to brunch reservations or dinner inside.',
    cta: { label: 'Call With Dockside Questions', href: 'tel:+18476585441' },
  },

  events: {
    eyebrow: 'Current Season',
    heading: 'What is happening now',
    intro:
      'Port Edward already has aliveness: ticketed tastings, recurring brunch, buffet nights, holiday services, and weekend music.',
    items: [
      {
        title: 'Spring Wine Tasting',
        date: 'April 30, 2026',
        time: '6 pm - 9 pm',
        body: 'A ticketed tasting night that belongs in the first-screen event path.',
        cta: 'Purchase Tickets',
        href: 'https://portedward.com/events/',
        photo: pe('/wp-content/uploads/2026/03/PortEds_Spring-Wine-Tasting-2026-3.jpg'),
      },
      {
        title: 'Surf & Turf Buffet',
        date: 'May 1, 2026',
        time: '4 pm - 9 pm',
        body: 'First-Friday buffet with surf, turf, action stations, seafood, and optional crab legs.',
        cta: 'Call to Reserve',
        href: 'tel:+18476585441',
        photo: pe('/wp-content/uploads/2026/01/PortEds_Surf-Turf-Buffet-2025-26-May.jpg'),
      },
      {
        title: 'Mother’s Day Brunch',
        date: 'May 10, 2026',
        time: '9 am - 4 pm',
        body: 'Holiday brunch service with phone reservations and deposit expectations.',
        cta: 'Call for Brunch',
        href: 'tel:+18476585441',
        photo: pe('/wp-content/uploads/2026/04/PortEds_Mothers-Day-Brunch-2026-Post.jpg'),
      },
    ],
    recurring: [
      'Champagne brunch every Sunday, 9:30 am - 2 pm',
      'Live entertainment Friday and Saturday evenings, 6 pm - 9 pm',
      'Surf & Turf Buffet on first Fridays from November through May',
    ],
  },

  menuPage: {
    h1: 'Menu',
    eyebrow: 'Seafood, brunch, cocktails',
    heroPhoto: pe('/wp-content/uploads/2021/02/PE_link-menu2-e1612729577373.jpg'),
    heroAlt: 'Port Edward dinner menu feature',
    intro:
      'A page-native menu should put the seafood proof first: Port Platter, scallops, walleye, king crab, Lobster Edwardo, brunch seafood stations, and the steakhouse side of the room.',
    callout: {
      heading: 'Menu service hours',
      body: 'Dine-in and curbside menu service run Tuesday through Sunday. Specials and market prices can change.',
    },
    categories: [
      {
        label: 'Port Edward Signatures',
        items: [
          { name: 'The Port Platter', description: 'TNT shrimp, calamari, and seafood-stuffed mushrooms.', price: '30' },
          { name: 'Classic Calamari', description: 'Flash-fried calamari with the house magic sauce.', price: '16' },
          { name: 'Seafood Stuffed Mushrooms', description: 'A house favorite for more than five decades.', price: '13' },
          { name: 'Maryland Classic Crab Cakes', description: 'Alaskan king crab and lump blue crab with Port mustard sauce.', price: '20' },
          { name: 'Signature Shrimp DeJonghe', description: 'Jumbo shrimp baked with herbed garlic butter and crumbs.', price: '21.5' },
          { name: 'Tuna Wonton', description: 'Ahi tuna over crisp wontons with seaweed and ponzu-soy glaze.', price: '20.5' },
        ],
      },
      {
        label: 'Soups & Salads',
        items: [
          { name: 'Signature Lobster Bisque', description: 'Served with a thimble of sherry.', price: 'Cup 9.5 / Bowl 11.5' },
          { name: 'New England Clam Chowder', description: 'Classic chowder with a sherry finish.', price: 'Cup 7.5 / Bowl 9.5' },
          { name: 'Classic Caesar', description: 'Romaine, garlic croutons, Parmesan, and Caesar dressing.', price: '11.5' },
          { name: 'Seafood Salad', description: 'Shrimp, crab, cheeses, egg, olives, tomato, and mixed greens.', price: '17.5' },
          { name: 'Cup of Soup & Sliders', description: 'Chowder with shrimp or tuna salad sliders.', price: '16.5' },
        ],
      },
      {
        label: 'Sandwiches & Handhelds',
        items: [
          { name: 'Cod Sandwich', description: 'Hand-battered Icelandic cod with slaw, lettuce, tomato, and basil mayo.', price: '20' },
          { name: 'New England Lobster Roll', description: 'Lobster salad on a buttered New England bun with kettle chips.', price: 'MP' },
          { name: 'Grouper Sandwich', description: 'Sauteed grouper with lettuce, tomato, and basil mayo.', price: '22.5' },
          { name: 'TNT Shrimp Tacos', description: 'Sweet-spiced shrimp, jicama slaw, corn tortillas, and rice.', price: '25' },
          { name: 'Steak Sandwich Trio', description: 'Tenderloin medallions on King’s Hawaiian rolls with horseradish sauce.', price: '25.5' },
        ],
      },
      {
        label: 'Oysters, Mussels & Bowls',
        items: [
          { name: 'Oysters Rockefeller', description: 'Six oysters with Pernod creamed spinach and hollandaise.', price: '21.5' },
          { name: 'Long Island Oysters', description: 'Six oysters, chilled or grilled.', price: '20 / 21.5' },
          { name: 'Mussels', description: 'A bucket steamed in white wine garlic-butter broth.', price: '18.5' },
          { name: 'Chipotle Lime Bowl', description: 'Spanish rice, black beans, tomato, avocado, and adobo-honey heat.', price: '22-24' },
          { name: 'Sashimi Tuna Bowl', description: 'Ponzu-glazed tuna with avocado, cucumber, scallions, and rice.', price: '24' },
        ],
      },
      {
        label: 'Fresh Fish & Seafood',
        items: [
          { name: 'Broiled Atlantic Salmon', description: 'Atlantic salmon with dill champagne cream sauce.', price: '31.5' },
          { name: 'Grouper', description: 'Sauteed grouper with basil-lime beurre blanc.', price: '33.5' },
          { name: 'JUMBO Sea Scallops', description: 'Grilled scallops with asparagus, tomatoes, and lemon beurre blanc.', price: '36.5' },
          { name: 'Walleye Pike', description: 'Pan-fried or pretzel-crusted.', price: '27.5 / 31.5' },
          { name: 'Alaskan King Crab Legs', description: 'Steamed in the shell with drawn butter.', price: 'MP' },
          { name: 'Gifts of the Sea Pasta', description: 'Shrimp, scallops, clams, mussels, calamari, and octopus over pasta.', price: '34.5' },
          { name: 'Lobster Edwardo', description: 'Ed’s favorite beer-battered lobster, served in the shell.', price: 'MP' },
        ],
      },
      {
        label: 'Steaks, Chops & Poultry',
        items: [
          { name: 'Filet Mignon', description: 'Center-cut Certified Angus beef with crisp onion garnish.', price: '35.5' },
          { name: 'Bone-In Ribeye', description: '20 oz premium ribeye charbroiled and served with au jus.', price: 'MP' },
          { name: 'New York Strip Steak', description: '14 oz Certified Angus Beef served with au jus.', price: '39.5' },
          { name: 'London Broil', description: 'Sliced prime sirloin finished with mushroom demi sauce.', price: '29.5' },
          { name: 'Lamb Chops', description: 'Half rack, marinated and grilled.', price: '43.25' },
          { name: 'Pork Chops', description: 'French-cut chops with apple-bourbon glaze and chutney.', price: '27.5' },
        ],
      },
      {
        label: 'Brunch & Buffet',
        items: [
          { name: 'Classic Champagne Brunch', description: 'Sunday brunch with seafood, carving, breakfast, fruit, cheese, and desserts.', price: 'Adults 55' },
          { name: 'Holiday Champagne Brunch', description: 'Holiday brunches add seasonal dishes and require deposit by phone.', price: 'Adults 70' },
          { name: 'Crab Legs Add-On', description: 'Add crab legs to brunch or buffet service.', price: '20 per lb' },
          { name: 'Surf & Turf Buffet', description: 'Seafood, prime rib, filet action station, smoked fish, sides, salads, desserts.', price: 'Adults 68' },
        ],
      },
      {
        label: 'Cocktails & Desserts',
        items: [
          { name: 'Mr. Ed’s Manhattan', description: 'Woodford Reserve and Carpano Antica.', price: '' },
          { name: 'Port Ed Paloma', description: 'Tequila, agave, grapefruit soda, and fresh lime.', price: '' },
          { name: 'Blackberry Bourbon Lemonade', description: 'Old Forester bourbon, blackberry, and lemonade.', price: '' },
          { name: 'Bananas Foster', description: 'Bananas, rum, brown sugar, vanilla ice cream, whipped cream, and pecans.', price: '11' },
          { name: 'Raspberry Creme Brulee', description: 'Custard layered with raspberries and caramelized sugar.', price: '9' },
        ],
      },
    ],
  },

  visitPage: {
    h1: 'Visit',
    eyebrow: 'Reservations, hours, directions',
    heroPhoto: pe('/wp-content/uploads/2022/06/IMG_2074.jpg'),
    heroAlt: 'Port Edward riverfront Dockside patio and docks',
    intro:
      'Call for indoor dining, brunch, holidays, Porpoise/Windmill seating, or private rooms. Use Toast for pickup ordering.',
    cards: [
      { label: 'Call', primary: '(847) 658-5441', secondary: 'Reservations, brunch, holidays, rooms, and seating questions', href: 'tel:+18476585441' },
      { label: 'Order', primary: 'Toast pickup', secondary: 'Preserve the current online ordering path', href: 'https://www.toasttab.com/port-edward-restaurant/v3' },
      { label: 'Find Us', primary: '20 W. Algonquin Rd.', secondary: 'On the Fox River in Algonquin, Illinois', href: 'https://www.google.com/maps/dir/?api=1&destination=42.166797,-88.2906569' },
    ],
  },

  privateEventsPage: {
    h1: 'Private Events',
    eyebrow: 'Rooms, river views, warm staff',
    heroPhoto: pe('/wp-content/uploads/2024/02/port-edward-private-events-topside.jpg'),
    heroAlt: 'Topside private event room at Port Edward',
    intro:
      'The current private-event story is strong: multiple rooms, Cynthia as the human path, and a venue that can handle dinners, showers, birthdays, company gatherings, and holiday parties.',
    contact: 'Call Cynthia at (847) 658-5441',
    rooms: [
      { name: 'Topside', capacity: 'Seats up to 50', note: 'A warm upstairs room with river-facing light and private-party flexibility.' },
      { name: 'Mermaid Room', capacity: 'Seats up to 70', note: 'A mid-size room for showers, birthdays, rehearsal dinners, and celebrations.' },
      { name: 'Regency', capacity: 'Seats up to 80', note: 'A larger setting for company meals, milestone parties, and holiday gatherings.' },
      { name: 'Full Event Footprint', capacity: 'Up to 150 guests', note: 'The public-facing event copy supports larger gatherings with staff planning help.' },
    ],
    inquiryPrompts: [
      'Preferred date and service window',
      'Estimated guest count',
      'Room preference or river-view priority',
      'Buffet, plated dinner, brunch, or cocktail-style service',
    ],
  },

  aboutPage: {
    h1: 'Since 1964',
    eyebrow: 'Mr. Ed, Z, and the Fox River',
    heroPhoto: pe('/wp-content/uploads/2022/06/IMG_0695.jpg'),
    heroAlt: 'Port Edward staff on Dockside by the Fox River',
    pullQuote:
      'A clearer website should feel like a clearer front door to the same beloved, eccentric riverfront institution.',
    prose: [
      'Edward Wolowiec opened the path in 1964, growing a small waterfront bar into one of Algonquin’s memorable dining landmarks.',
      'The experience is inseparable from its artifacts: the 25-foot Porpoise boat, the windmill, salvaged wood, nautical tools, indoor water features, and the Fox River outside.',
      'The new era under Ziya “Z” Senturk should not erase that texture. It should make the services easier to choose: dinner, brunch, Dockside, events, private rooms, Toast ordering, loyalty, and gift cards.',
    ],
    moments: {
      heading: 'The room is part of the menu',
      photos: [
        { src: pe('/wp-content/uploads/2022/06/IMG_2074.jpg'), alt: 'Dockside patio', caption: 'Fox River patio' },
        { src: pe('/wp-content/uploads/2024/02/port-edward-private-events-topside.jpg'), alt: 'Topside event room', caption: 'Private rooms' },
        { src: pe('/wp-content/uploads/2024/05/PortEds_Champagne-brunch.jpg'), alt: 'Brunch buffet', caption: '60-year brunch' },
      ],
    },
  },

  newsletter: {
    eyebrowScript: 'Stay in the current',
    heading: 'Loyalty, gift cards, and river-season updates',
    body:
      'Return guests already have reasons to come back. Keep loyalty, gift cards, email updates, and ticketed events visible without letting them crowd the first decision.',
    placeholder: 'your@email.com',
    cta: 'Email Signup',
  },

  signOff: {
    h1: 'The pleasure of the company we keep',
    photo: pe('/wp-content/uploads/2019/06/pe-dockside-2019.jpg'),
    photoAlt: 'Port Edward Dockside patio overlooking the Fox River',
  },

  jsonLd: {
    sameAs: [
      'https://www.facebook.com/PortEdwardRestaurant',
      'https://www.instagram.com/portedwardrestaurant/',
      'https://www.tiktok.com/@portedwardrestaurant',
      'https://www.youtube.com/results?search_query=Port+Edward+Restaurant+Algonquin',
    ],
  },
};
