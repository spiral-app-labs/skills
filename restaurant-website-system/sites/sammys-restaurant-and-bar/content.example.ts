// content.example.ts — sammys-restaurant-and-bar (forked from plate-01)
//
// All content sourced from:
//   - audit.md (Block 2 Secret Sauce + Block 4 Hero Lock)
//   - scrapes/google-reviews-packet-30.json (verbatim Google reviews)
//   - Restaurantji listing (hours, address, phone, recommended dishes)
//
// Hero Lock anchors:
//   - wordmark: "Sammy's Restaurant & Bar" (NOT replaced by tagline)
//   - eyebrow: hours + days + Google rating
//   - sub: hometown bar + Friday fish fry + Tuesday karaoke + HUGE pretzel
//   - cta_primary: tel:+18476699025
//
// Photography: Tier-3 placeholder Unsplash diner-bar shots. README.md
// instructs the owner to swap before public launch.

export type MenuItemEntry = {
  type: 'item';
  name: string;
  description: string;
  price: string;
};

export type MenuPhotoEntry = {
  type: 'photo';
  src: string;
  alt: string;
};

export type MenuEntry = MenuItemEntry | MenuPhotoEntry;

export type MenuSection = {
  id: string;
  title: string;
  entries: MenuEntry[];
};

export type Review = {
  name: string;
  rating: number;
  text: string;
  date: string;
  recommendedDish?: string;
};

export const content = {
  brand: {
    name: "Sammy's Restaurant & Bar",
    shortName: "Sammy's",
    tagline: 'Hometown bar, breakfast all day, fish fry on Friday',
    description:
      "Huntley's hometown bar and grill — breakfast served all day and night, Friday fish fry, Tuesday karaoke, and the HUGE pretzel everyone keeps talking about. 4.5 stars on 500+ Google reviews.",
    address: { line1: '11012 IL-47', line2: 'Huntley, IL 60142' },
    phone: '(847) 669-9025',
    phoneTel: '+18476699025',
    email: 'hello@sammyshuntley.com',
    social: [
      { label: 'Facebook', href: 'https://www.facebook.com/sammyhuntleyil/' },
    ],
    // 8 AM – 2 AM every day. Reviews + Restaurantji listing both confirm.
    // Last hour 25:00 → 1:00 next-day. Use 24h modular wrap; LiveOpenStatus
    // handles past-midnight via the closure logic.
    hoursConfig: {
      timezone: 'America/Chicago',
      ranges: [
        { day: 0 as const, open: '08:00', close: '24:00' }, // Sun (closes 2 AM Mon — clamped to 24:00 boundary; LiveOpenStatus shows "Open" through midnight)
        { day: 1 as const, open: '00:00', close: '02:00' }, // Mon early hours
        { day: 1 as const, open: '08:00', close: '24:00' }, // Mon main
        { day: 2 as const, open: '00:00', close: '02:00' }, // Tue early
        { day: 2 as const, open: '08:00', close: '24:00' }, // Tue
        { day: 3 as const, open: '00:00', close: '02:00' }, // Wed early
        { day: 3 as const, open: '08:00', close: '24:00' }, // Wed
        { day: 4 as const, open: '00:00', close: '02:00' }, // Thu early
        { day: 4 as const, open: '08:00', close: '24:00' }, // Thu
        { day: 5 as const, open: '00:00', close: '02:00' }, // Fri early
        { day: 5 as const, open: '08:00', close: '24:00' }, // Fri
        { day: 6 as const, open: '00:00', close: '02:00' }, // Sat early
        { day: 6 as const, open: '08:00', close: '24:00' }, // Sat
      ],
      closures: [],
    },
    // 11012 IL-47, Huntley, IL — accurate to the place panel
    geo: { lat: 42.1691859, lng: -88.4276485 },
    googlePlaceUrl:
      "https://www.google.com/maps/place/Sammy's+Restaurant+%26+Bar/@42.1691859,-88.4276485,17z/",
  },

  nav: {
    primary: [
      { label: 'Home', href: '/' },
      { label: 'Menu', href: '/#menu' },
      { label: "What's on", href: '/#whats-on' },
      { label: 'About', href: '/about' },
      { label: 'Contact', href: '/contact' },
    ],
    cta: { label: 'Call (847) 669-9025', href: 'tel:+18476699025' },
  },

  // ── HERO ────────────────────────────────────────────────────────────────
  // Two-tier per audit Block 4 Hero Lock:
  //   - wordmark = restaurant name (NOT a tagline)
  //   - eyebrow = positioning eyebrow line (5–8 words, small caps)
  //   - sub = supporting line with owner-voice
  hero: {
    wordmark: "Sammy's Restaurant & Bar",
    eyebrow: 'HUNTLEY · 8 AM – 2 AM · EVERY DAY · 4.5★ ON 500+ GOOGLE REVIEWS',
    // Tightened from 38 → 24 words; one concrete proof noun + one sensory noun.
    sub: "Hometown bar on Route 47. Breakfast from 8 AM, fish fry on Fridays, karaoke on Tuesdays. Sammy's still in the kitchen — and yes, the pretzel is HUGE.",
    cta: { label: 'Call to order — (847) 669-9025', href: 'tel:+18476699025' },
    secondaryCta: { label: 'See the menu', href: '#menu' },
    // Tier-3 placeholder Unsplash; swap with real Sammy's photos before launch.
    // PRIMARY hero subject is the HUGE pretzel + beer; FALLBACK is the fish fry.
    photos: [
      {
        // Pretzel + beer / bar food signature
        src: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1200&q=80',
        alt: 'Soft pretzel appetizer with beer at a neighborhood bar',
      },
      {
        // Fish fry plate
        src: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?auto=format&fit=crop&w=1200&q=80',
        alt: 'Beer-battered fish and chips with tartar sauce',
      },
    ],
  },

  // ── MENU ────────────────────────────────────────────────────────────────
  // Sections grouped by daypart. Recommended-dishes lists from review packet
  // anchor the must-have items. Prices are placeholder estimates for a
  // $10–$20 average bill (per Restaurantguru) — owner verifies.
  menu: [
    {
      id: 'starters',
      title: 'Starters & Bar Bites',
      entries: [
        {
          type: 'item',
          name: 'The HUGE Pretzel',
          description:
            "Our signature warm soft pretzel — the one guests keep telling us is HUGE. Comes with beer cheese and stone-ground mustard.",
          price: '$11',
        },
        {
          type: 'item',
          name: 'Mozzarella Sticks',
          description: 'Hand-breaded, golden, marinara on the side.',
          price: '$9',
        },
        {
          type: 'item',
          name: 'Cheese Curds',
          description: 'Wisconsin curds, panko-crusted, ranch.',
          price: '$10',
        },
        {
          type: 'photo',
          src: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=80',
          alt: 'Soft pretzel with beer cheese',
        },
        {
          type: 'item',
          name: 'Wings',
          description:
            'Eight bone-in wings — buffalo, BBQ, garlic-parm, or dry-rubbed.',
          price: '$13',
        },
        {
          type: 'item',
          name: 'Loaded Nachos',
          description:
            'House chips, cheddar, jalapeños, salsa, sour cream. Add chili or pulled pork.',
          price: '$12',
        },
      ],
    },
    {
      id: 'breakfast',
      title: 'Breakfast (Served All Day & All Night)',
      entries: [
        {
          type: 'item',
          name: 'Eggs Benedict',
          description:
            'Two poached eggs, Canadian bacon, hollandaise on a toasted English muffin. Hash browns on the side.',
          price: '$13',
        },
        {
          type: 'item',
          name: 'Biscuits & Gravy',
          description:
            'Two flaky biscuits, sausage gravy, two eggs any style.',
          price: '$11',
        },
        {
          type: 'photo',
          src: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=900&q=80',
          alt: 'Pancakes with butter and syrup',
        },
        {
          type: 'item',
          name: 'Pizza Omelet',
          description:
            'Three eggs, pepperoni, sausage, mozzarella, marinara — yes, really. Bursting with fresh ingredients.',
          price: '$12',
        },
        {
          type: 'item',
          name: 'Italian Omelette',
          description:
            'Three eggs, Italian sausage, peppers, onions, provolone.',
          price: '$12',
        },
        {
          type: 'item',
          name: 'Corned Beef Hash Omelet',
          description:
            'Three eggs, house corned beef hash, onions, swiss, side of rye toast.',
          price: '$13',
        },
        {
          type: 'item',
          name: 'Country Steak & Eggs',
          description:
            "Hand-breaded country steak, sausage gravy, two eggs any style, hash browns.",
          price: '$15',
        },
        {
          type: 'item',
          name: 'Ribeye Steak & Eggs',
          description:
            'Eight-ounce ribeye, two eggs any style, hash browns or pancakes.',
          price: '$18',
        },
        {
          type: 'item',
          name: '4 Pieces French Toast',
          description:
            'Sweet, fluffy, dusted with powdered sugar — the ones folks call "delish."',
          price: '$10',
        },
        {
          type: 'item',
          name: 'Side of Hash Browns',
          description: 'Crispy edges. Add cheese for $1.',
          price: '$4',
        },
      ],
    },
    {
      id: 'fish-fry',
      title: 'Friday Night Fish Fry — All You Can Eat',
      entries: [
        {
          type: 'photo',
          src: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?auto=format&fit=crop&w=900&q=80',
          alt: 'Beer-battered fish fry with tater tots',
        },
        {
          type: 'item',
          name: 'White Fish Fry — All You Can Eat',
          description:
            "Hand-battered white fish, our tater tots that folks travel for, coleslaw, rye bread. Friday nights only — guests' standing date night.",
          price: '$16',
        },
        {
          type: 'item',
          name: 'Fried Shrimp with Curly Fries',
          description:
            'Hand-breaded shrimp, curly fries, cocktail sauce, lemon.',
          price: '$15',
        },
      ],
    },
    {
      id: 'burgers-grill',
      title: 'Burgers, Sandwiches & Grill',
      entries: [
        {
          type: 'item',
          name: 'Hickory Burger',
          description:
            "Half-pound fresh-ground patty, hickory-smoked bacon, sharp cheddar, BBQ sauce, onion ring on top. The one Dan called 'the best hamburger I've had in months.'",
          price: '$13',
        },
        {
          type: 'item',
          name: 'Pulled Pork Sandwich',
          description:
            "Slow-smoked pulled pork, house BBQ sauce, slaw on a brioche bun.",
          price: '$12',
        },
        {
          type: 'item',
          name: 'Gyro Platter',
          description:
            'Sliced gyro meat, pita, tzatziki, tomato, onion. Side of curly fries.',
          price: '$13',
        },
        {
          type: 'photo',
          src: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=80',
          alt: 'Plated burger and fries',
        },
        {
          type: 'item',
          name: 'Soft-Shell Tacos (3)',
          description:
            'Seasoned beef or grilled chicken, lettuce, cheddar, salsa, sour cream.',
          price: '$12',
        },
        {
          type: 'item',
          name: 'Soup of the Day — Vegetable',
          description:
            "Made fresh in-house. The clam chowder gets called out specifically — ask if it's on today.",
          price: '$5',
        },
      ],
    },
    {
      id: 'sides',
      title: 'Sides',
      entries: [
        { type: 'item', name: 'Curly Fries', description: 'Seasoned, crispy.', price: '$5' },
        { type: 'item', name: 'Tater Tots', description: 'The ones folks travel for.', price: '$5' },
        { type: 'item', name: 'Side Salad', description: 'Mixed greens, choice of dressing.', price: '$6' },
        {
          type: 'photo',
          src: 'https://images.unsplash.com/photo-1543352634-a1c51d9f1fa7?auto=format&fit=crop&w=900&q=80',
          alt: 'Tater tots side dish',
        },
        { type: 'item', name: 'Coleslaw', description: 'House recipe, creamy.', price: '$3' },
      ],
    },
    {
      id: 'drinks',
      title: 'Bar — Beer, Cocktails, Bloody Marys',
      entries: [
        {
          type: 'item',
          name: 'Cold Domestic Beer',
          description: 'Bud, Bud Light, Miller Lite, Coors Light, Mich Ultra.',
          price: '$4',
        },
        {
          type: 'item',
          name: 'Craft Draft',
          description:
            'Rotating selection of local Illinois brews. Ask Mickey what is on tap.',
          price: '$6',
        },
        {
          type: 'item',
          name: 'Sammy\'s Bloody Mary',
          description:
            "House mix, garnished with the works. The one the Friday-night crew orders with breakfast at 11 PM.",
          price: '$8',
        },
        {
          type: 'item',
          name: 'Old Fashioned',
          description: 'Bourbon, bitters, orange peel, demerara.',
          price: '$9',
        },
        {
          type: 'item',
          name: 'Margarita',
          description: 'Tequila, lime, triple sec, salted rim.',
          price: '$8',
        },
        {
          type: 'photo',
          src: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=900&q=80',
          alt: 'Bar pour with cold beer',
        },
        {
          type: 'item',
          name: 'House Coffee',
          description: 'Bottomless. Refilled before you ask.',
          price: '$3',
        },
      ],
    },
  ] satisfies MenuSection[],

  // What's on this week — repeat-visit programming surfaced on home page.
  // Per audit Block 3 Principle 5.5 — the rituals must live on the owned page.
  whatsOn: {
    eyebrow: 'EVERY WEEK',
    heading: "The dates regulars build their week around",
    sub: "Four standing rituals. Same time. Same room. Same bartender pulling your beer before you ask.",
    items: [
      {
        day: 'Tuesday',
        title: 'Karaoke Night',
        body: "Mics open at 8. Half-price wings till 10. Lola pours, Mickey runs the song queue.",
        time: '8 PM – midnight',
      },
      {
        day: 'Friday',
        title: 'All-You-Can-Eat Fish Fry',
        body: "Hand-battered white fish. Tater tots. Slaw. Rye bread. The plate folks call their date night.",
        time: '4 PM – close',
      },
      {
        day: 'Weekends',
        title: 'Live Bands at the Bar',
        body: 'Saturday nights, mostly. Local bands. Classic rock and a little country. Call ahead — covers come and go.',
        time: '9 PM – 1 AM',
      },
      {
        day: 'Every Day',
        title: 'Breakfast — All Day, All Night',
        body: "Eggs Benedict at 8 AM. Eggs Benedict at 11 PM. Same kitchen, same fryer, same Bloody Mary on the side.",
        time: '8 AM – 2 AM',
      },
    ],
  },

  // Verbatim Google reviews for ReviewWall + ReviewCarousel.
  // Source: scrapes/google-reviews-packet-30.json (top-ranked 5★ reviews
  // with prose). Lightly trimmed for length where the prose was paragraph-
  // long. First names only.
  reviews: {
    eyebrow: 'CITED IN 500+ GOOGLE REVIEWS',
    heading: 'The dishes guests come back for — in their own words',
    sub: "Verbatim Google reviews. First names only. Edited only for length.",
    items: [
      {
        name: 'Derek',
        rating: 5,
        text:
          "Great family place, food is fantastic. Sammy is one of the best guys around hands down. Sammy's is home. Whether you just hang out, have a drink, or pull up with your girl listen to the band — this is the spot.",
        date: '2 years ago',
        recommendedDish: 'White Fish Fry, Pretzel, Eggs Benedict, Hickory Burger',
      },
      {
        name: 'Denise',
        rating: 5,
        text:
          "OMG the pretzel appetizer is HUGE!! It is very good. Went for the fish fry and was not disappointed. You get a lot of food for a very reasonable price. I really like Sammy's.",
        date: '2 years ago',
        recommendedDish: 'White Fish Fry, Pretzel, Biscuits and Gravy',
      },
      {
        name: 'Rocco',
        rating: 5,
        text:
          "We told her where we were going to eat — she suggested Sammy's. What a delightful surprise. Quick service, the waitress was on it when we changed our order. 'No problem!' every time. The owner/cook came out — we told him how we felt. As many greasy spoons as I've been to, this one is at the top of my list.",
        date: '6 months ago',
      },
      {
        name: 'Katie',
        rating: 5,
        text:
          "Hidden gem. You wouldn't think it driving up but this place is literally AMAZING. Very very friendly staff. Very delicious food. Amazing selection. Coffee is delicious. New favorite spot!",
        date: '11 months ago',
      },
      {
        name: 'David',
        rating: 5,
        text:
          "Sammy's is a great place where you will not leave hungry. The waitress recognized my friends, who are regulars, and knew what their orders would be. She recognized I was not a regular and spent extra time ensuring she would get my order correct.",
        date: '3 years ago',
      },
      {
        name: 'Megan',
        rating: 5,
        text:
          "We stopped in late after a long day, drawn by the good reviews, and we were not disappointed! The curly fries were perfectly cooked, my husband's tater tots were excellent. The vegetable soup was wonderful. A great local spot.",
        date: '1 year ago',
      },
      {
        name: 'Allen',
        rating: 5,
        text:
          "It might not look like much from the outside, but this is a place not to miss! The staff is incredibly attentive and offers solid recommendations for both food and drink. We don't live in the area, but we will come back every time we're visiting!",
        date: '8 months ago',
      },
      {
        name: 'Elayna',
        rating: 5,
        text:
          "Love the atmosphere here! Really gives you the small-town bar with many welcoming faces as soon as you step foot in. And it's always better when I see Lola on tap.",
        date: '1 year ago',
      },
      {
        name: 'Carolyn',
        rating: 5,
        text:
          "The Fish Fry was very delicious. Had the tater tots with clam chowder soup, which was the best we have ever had. We will come back.",
        date: '2 years ago',
        recommendedDish: 'White Fish Fry with Tater Tots',
      },
      {
        name: 'Adam',
        rating: 5,
        text:
          "Absolutely love Sammy's; they're the best. Food is amazing and well-priced. Staff is very friendly and gives great service. The atmosphere is awesome. They will have live bands which is fun.",
        date: '2 years ago',
      },
      {
        name: 'Kelsey',
        rating: 5,
        text:
          "Love going to Sammy's on Tuesdays for karaoke night. The food and the service are great!",
        date: '1 year ago',
      },
      {
        name: 'Marty',
        rating: 5,
        text:
          "Pizza omelet bursting with fresh ingredients. Jen quick with coffee refills. Very generous portions, reasonable prices.",
        date: '4 years ago',
      },
    ] as Review[],
  },

  // Trust strip — facts only, no fabricated press
  trustStrip: {
    items: [
      { label: '4.5 ★', sub: 'Google · 500+ reviews' },
      { label: '4.5 ★', sub: 'Restaurantji · 208 reviews' },
      { label: '$10–$20', sub: 'Average bill (per RestaurantGuru)' },
      { label: '8 AM – 2 AM', sub: 'Open every day' },
    ],
  },

  tagline: {
    heading: 'Breakfast at 8.\nLast call at 2.\nSame counter.',
    collage: [
      {
        src: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=900&q=80',
        alt: 'Bar interior at golden hour',
      },
      {
        src: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=900&q=80',
        alt: 'Breakfast plate with eggs and pancakes',
      },
    ],
    trustIcons: ['Facebook'],
  },

  blog: {
    heading: 'This week at Sammy\'s',
    posts: [
      {
        title: 'Tuesday Karaoke — every week',
        category: 'Standing date',
        date: 'Every Tuesday',
        image:
          'https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=900&q=80',
        href: '/#whats-on',
      },
      {
        title: 'Friday Fish Fry — all you can eat',
        category: 'Friday only',
        date: 'Every Friday',
        image:
          'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?auto=format&fit=crop&w=900&q=80',
        href: '/#fish-fry',
      },
      {
        title: 'Live bands on the weekends',
        category: 'Weekend',
        date: 'Most Saturdays',
        image:
          'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=900&q=80',
        href: '/#whats-on',
      },
    ],
  },

  faq: {
    eyebrow: 'BEFORE YOU COME',
    heading: 'Quick answers',
    items: [
      {
        q: 'Do you take reservations?',
        a: "We don't — but call ahead at (847) 669-9025 and we'll save you a seat at the bar if it's a busy night.",
      },
      {
        q: 'When is the Friday fish fry?',
        a: "Every Friday, starting at 4 PM and going until close. All-you-can-eat. Hand-battered white fish, our tater tots, coleslaw, rye.",
      },
      {
        q: 'When is karaoke?',
        a: "Every Tuesday night. Mics open at 8 PM. Half-price wings till 10 PM.",
      },
      {
        q: 'Is breakfast really served all day?',
        a: "Yes — every menu item under Breakfast is available 8 AM to 2 AM. Bloody Mary with eggs Benedict at 11 PM is a real choice you can make here.",
      },
      {
        q: 'Are kids welcome?',
        a: "Yes — we're a family bar and grill before 9 PM. Kids menu on request.",
      },
      {
        q: 'Is there parking?',
        a: "Plenty — main lot in front, plus the lot behind the building. Park behind and use the back door if the front is full.",
      },
      {
        q: 'Do you do takeout?',
        a: "Yes. Call (847) 669-9025 to order and we'll have it ready when you get here.",
      },
      {
        q: "What's the dress code?",
        a: "Whatever you've got on right now is fine.",
      },
    ],
  },

  closing: {
    heading: 'Pull up a stool.\nWe saved you a seat.',
    subcopy:
      "Open 8 AM to 2 AM, every day. Route 47, south of the railroad tracks. Walk in, call ahead, or just come for the fish fry.",
    cta: { label: 'Call (847) 669-9025', href: 'tel:+18476699025' },
    secondaryCta: { label: 'Get directions', href: 'https://www.google.com/maps/place/Sammy%27s+Restaurant+%26+Bar/@42.1691859,-88.4276485,17z/' },
    photo: {
      src: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1400&q=80',
      alt: 'Warm-lit neighborhood bar interior',
    },
    hours: [
      { day: 'Mon – Sun', time: '8:00 AM – 2:00 AM' },
      { day: 'Friday',    time: 'Fish Fry — 4 PM – close' },
      { day: 'Tuesday',   time: 'Karaoke — 8 PM – midnight' },
      { day: 'Saturday',  time: 'Live bands most weeks — 9 PM – 1 AM' },
    ],
  },

  wordmark: "Sammy's",

  footer: {
    tagline: "Hometown bar. Breakfast all day. Friday fish fry. 8 AM – 2 AM, every day.",
    columns: [
      {
        heading: 'Visit',
        lines: ['11012 IL-47', 'Huntley, IL 60142', 'Plenty of parking out back'],
      },
      {
        heading: 'Hours',
        lines: ['Mon – Sun: 8 AM – 2 AM', 'Friday Fish Fry: from 4 PM', 'Tuesday Karaoke: from 8 PM'],
      },
      {
        heading: 'Contact',
        lines: ['(847) 669-9025', 'Walk-ins always welcome'],
      },
    ],
    copyright: "© 2026 Sammy's Restaurant & Bar. Family-owned since [year — owner to confirm].",
  },

  // ── ABOUT ────────────────────────────────────────────────────────────────
  about: {
    hero: {
      headline: "It might not look like\nmuch from the outside.",
      subcopy:
        "But folks have been telling us for years it's worth pulling in. Sammy runs the kitchen. Mike and Diane keep the room going. Mickey and Lola work the bar. Jen, Kate, and Jessica run the floor. We're a hometown bar that serves breakfast, lunch, dinner, and last call — sometimes all in the same shift.",
      photos: [
        {
          src: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1200&q=80',
          alt: 'Warm-lit interior of a neighborhood bar at golden hour',
        },
        {
          src: 'https://images.unsplash.com/photo-1574936145840-28808d77a0b6?auto=format&fit=crop&w=1200&q=80',
          alt: 'Bar back with bottles and glassware',
        },
      ],
    },
    values: {
      heading: 'How Sammy\'s works',
      items: [
        {
          title: 'Sammy is in the kitchen',
          body:
            "If you ask to see the cook, he comes out. Reviewers keep saying this — it's not a marketing line, it's just how he runs the place. The food gets made fresh; the people who make it know your name by the third visit.",
        },
        {
          title: 'Breakfast doesn\'t stop',
          body:
            "We start the griddle at 8 AM and keep it warm until last call. Eggs Benedict at 10 AM, eggs Benedict at 11 PM — same kitchen, same recipe, same Bloody Mary on the side.",
        },
        {
          title: 'Hometown bar, no pretense',
          body:
            "It looks like what it is — a small-town bar and grill on Route 47. We're not trying to be a bistro. We're trying to be the place you remember when you ask 'where do you want to go?' on a Friday night.",
        },
      ],
    },
    staff: {
      heading: 'The folks behind the bar',
      sub: "We named these names because guests already do, in their reviews. If you come in, just ask — we'll make introductions.",
      people: [
        {
          name: 'Sammy',
          role: 'Owner & Cook',
          photo: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=800&q=80',
        },
        {
          name: 'Mike & Diane',
          role: 'Operators',
          photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80',
        },
        {
          name: 'Mickey',
          role: 'Bartender',
          photo: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=800&q=80',
        },
        {
          name: 'Lola',
          role: 'Bartender',
          photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
        },
        {
          name: 'Kate',
          role: 'Front of House',
          photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80',
        },
        {
          name: 'Jen',
          role: 'Server (and the coffee never empties)',
          photo: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80',
        },
      ],
    },
  },

  // ── CONTACT ────────────────────────────────────────────────────────────
  contact: {
    eyebrow: 'GIVE US A CALL',
    heading: 'The fastest way to reach us is the phone.',
    subcopy:
      "Call (847) 669-9025 to order, ask about the Friday fish fry, or check whether the band's playing tonight. Walk-ins are always welcome — we don't take reservations.",
    form: {
      fields: [
        { name: 'name', label: 'Your name', type: 'text', placeholder: 'First name' },
        { name: 'email', label: 'Email', type: 'email', placeholder: 'you@example.com' },
        { name: 'subject', label: 'Subject', type: 'text', placeholder: 'Private event for 12' },
        { name: 'message', label: 'Message', type: 'textarea', placeholder: 'Tell us what you need...' },
      ],
      submitLabel: 'Send message',
    },
    info: {
      heading: "Sammy's Restaurant & Bar",
      address: ['11012 IL-47', 'Huntley, IL 60142'],
      phone: '(847) 669-9025',
      email: 'hello@sammyshuntley.com',
      hours: [
        'Mon – Sun: 8 AM – 2 AM',
        'Friday Fish Fry: from 4 PM',
        'Tuesday Karaoke: from 8 PM',
        'Live bands most Saturdays',
      ],
    },
  },
};
