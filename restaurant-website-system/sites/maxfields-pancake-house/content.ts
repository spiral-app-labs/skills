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

const directionsHref =
  'https://www.google.com/maps/search/?api=1&query=Maxfield%27s%20Pancake%20House%20700%20E%20Schaumburg%20Rd%20Schaumburg%20IL%2060194';

export const content = {
  brand: {
    name: "Maxfield's Pancake House",
    tagline: 'Schaumburg pancakes, skillets, and comfort classics back online',
    description:
      "A Maxfield's Pancake House preview for Schaumburg with verified address, phone, menu highlights, review proof, and source-labeled hours notes.",
    address: {
      line1: '700 E Schaumburg Rd',
      line2: 'Schaumburg, IL 60194',
    },
    phone: '(847) 781-0300',
    phoneHref: 'tel:+18477810300',
    directionsHref,
    mapQuery: "Maxfield's Pancake House 700 E Schaumburg Rd Schaumburg IL 60194",
    geo: { lat: 42.0258, lng: -88.0586 },
    social: [] as { label: string; href: string }[],
  },

  nav: {
    primary: [
      { label: 'Home', href: '/' },
      { label: 'Menu', href: '/#menu' },
      { label: 'About', href: '/about' },
      { label: 'Contact', href: '/contact' },
    ],
    utility: { label: 'Get directions', href: directionsHref },
    cta: { label: 'Call (847) 781-0300', href: 'tel:+18477810300' },
  },

  hero: {
    eyebrow: 'Schaumburg breakfast favorite',
    headline: "Schaumburg pancakes,\nskillets, coffee,\nand breakfast-house basics in one place.",
    subcopy:
      "This Maxfield's preview keeps the chosen Cuisine / plate-01 route but rewrites it around what local diners actually need: a clear call path, directions, breakfast highlights, and review-backed reasons to stop in before the day gets moving.",
    cta: { label: 'Call (847) 781-0300', href: 'tel:+18477810300' },
    secondaryCta: { label: 'Get directions', href: directionsHref },
    tertiaryCta: { label: 'See menu highlights', href: '/#menu' },
    photos: [
      {
        src: '/media/maxfields-pancake-card.svg',
        alt: 'Illustrated pancake stack placeholder card for Maxfield preview',
      },
      {
        src: '/media/maxfields-diner-card.svg',
        alt: 'Illustrated diner-style visit card for Maxfield preview',
      },
    ],
    badges: ['Breakfast restaurant', '700 E Schaumburg Rd', 'Hours vary by source'],
  },

  menuIntro: {
    eyebrow: 'Menu highlights',
    heading: 'Breakfast-house favorites, not generic diner filler.',
    body:
      'These highlights stay close to what public diners repeatedly mention: pancakes, waffles, eggs, skillets, coffee, benedicts, omelettes, and lunch staples. Prices are omitted unless explicitly source-backed in a public listing.',
  },

  menu: [
    {
      id: 'pancakes-french-toast',
      title: 'Pancakes & French Toast',
      entries: [
        {
          type: 'item',
          name: 'Chocolate Chip Pancakes',
          description: 'Public-source pancake favorite captured on Restaurantji.',
          price: 'Favorite',
        },
        {
          type: 'item',
          name: 'Banana Bread French Toast',
          description: 'Public-source French toast highlight from Restaurantji.',
          price: 'Favorite',
        },
        {
          type: 'photo',
          src: '/media/maxfields-pancake-card.svg',
          alt: 'Abstract pancake illustration used as a preview placeholder',
        },
        {
          type: 'item',
          name: 'Mickey Mouse Pancakes',
          description: 'Kid-friendly pancake pick mentioned in public menu snippets.',
          price: 'Family pick',
        },
        {
          type: 'item',
          name: '2 Eggs Breakfast with Pancakes',
          description: 'A breakfast-combo favorite surfaced in public source listings.',
          price: 'Favorite',
        },
      ],
    },
    {
      id: 'skillets-eggs',
      title: 'Skillets & Eggs',
      entries: [
        {
          type: 'item',
          name: 'Skillet with Side of Pancakes',
          description: 'Restaurantji lists this as a customer favorite.',
          price: 'Favorite',
        },
        {
          type: 'photo',
          src: '/media/maxfields-skillet-card.svg',
          alt: 'Abstract skillet illustration used as a preview placeholder',
        },
        {
          type: 'item',
          name: 'Corned Beef Hash and Eggs',
          description: 'Public-source comfort-classic breakfast favorite.',
          price: 'Favorite',
        },
        {
          type: 'item',
          name: 'Fruit and Scrambled Eggs',
          description: 'A lighter breakfast option surfaced in Restaurantji favorites.',
          price: 'Favorite',
        },
        {
          type: 'item',
          name: 'Skirt Steak and Eggs',
          description: 'Hearty breakfast plate called out in public source evidence.',
          price: 'Favorite',
        },
      ],
    },
    {
      id: 'benedicts-omelettes',
      title: 'Benedicts & Omelettes',
      entries: [
        {
          type: 'item',
          name: 'Original Eggs Benedict',
          description: 'Visible on Yelp and Restaurantji public-source listings.',
          price: 'Yelp-listed',
        },
        {
          type: 'item',
          name: 'Greek Skillet',
          description: 'Yelp highlights this as a notable breakfast plate.',
          price: 'Yelp-listed',
        },
        {
          type: 'photo',
          src: '/media/maxfields-diner-card.svg',
          alt: 'Abstract diner counter illustration used as a preview placeholder',
        },
        {
          type: 'item',
          name: 'Egg White Omelette',
          description: 'Yelp public listing shows this as a menu highlight.',
          price: 'Yelp-listed',
        },
        {
          type: 'item',
          name: 'The Ole Omelet',
          description: 'Public-source omelette name captured from Yelp.',
          price: 'Yelp-listed',
        },
      ],
    },
    {
      id: 'comfort-classics',
      title: 'Comfort Classics & Lunch',
      entries: [
        {
          type: 'item',
          name: 'Chicken Noodle Soup',
          description: 'A Yelp-highlighted comfort item tied to review themes about soup and value.',
          price: 'Yelp-listed',
        },
        {
          type: 'item',
          name: 'Burgers, sandwiches, and wraps',
          description: 'Google Maps and public snippets describe a wider all-day diner menu beyond breakfast.',
          price: 'Public-source direction',
        },
        {
          type: 'photo',
          src: '/media/maxfields-coffee-card.svg',
          alt: 'Abstract coffee illustration used as a preview placeholder',
        },
        {
          type: 'item',
          name: 'Pancakes, waffles, eggs, and coffee',
          description: 'Google review excerpts repeatedly mention these breakfast staples.',
          price: 'Review theme',
        },
      ],
    },
  ] satisfies MenuSection[],

  tagline: {
    heading: 'Built to feel like a Schaumburg pancake house,\nnot a generic bistro fork.',
    collage: [
      { src: '/media/maxfields-coffee-card.svg', alt: 'Abstract coffee card for Maxfield preview' },
      { src: '/media/maxfields-skillet-card.svg', alt: 'Abstract skillet card for Maxfield preview' },
    ],
    trustIcons: ['Google 4.5 / 983 reviews', 'Call before you go for hours', 'Directions to 700 E Schaumburg Rd'],
  },

  proof: {
    heading: 'What repeated Google reviews point to',
    intro:
      'The Highest-rated 30 written Google reviews captured on May 6, 2026 repeatedly support these themes. The copy below summarizes those patterns instead of inventing testimonial language.',
    cards: [
      {
        source: 'Breakfast staples',
        score: 'Pancakes, waffles, eggs, and coffee show up again and again.',
        detail: 'Summarized from the Highest-rated 30 written Google reviews',
        body:
          'Reviewers repeatedly call out fluffy pancakes, French toast, waffles, skillets, crepes, biscuits and gravy, and strong coffee. The homepage now leans into that breakfast-first identity instead of broad restaurant-template language.',
      },
      {
        source: 'Service and pace',
        score: 'Friendly, attentive, fast enough for real breakfast traffic.',
        detail: 'Themes repeated across family visits, brunch stops, and weekday breakfasts',
        body:
          'The review packet repeatedly mentions warm greetings, attentive staff, quick food, and no-wait or speedy visits. That supports a stronger call-to-visit conversion path on both desktop and mobile.',
      },
      {
        source: 'Value and local trust',
        score: 'Clean, family-friendly, worth coming back for.',
        detail: 'Google Maps showed 4.5 stars from 983 reviews at capture time',
        body:
          "The captured reviews repeatedly describe reasonable prices, generous portions, a clean diner feel, and repeat family visits. That makes Maxfield's feel like a dependable Schaumburg breakfast stop rather than a one-off trend play.",
      },
    ],
  },

  faq: {
    eyebrow: 'Visit info',
    heading: "What visitors should know before heading to Maxfield's",
    items: [
      {
        q: "What are today's hours?",
        a: "Public hours vary by source, so this preview does not claim live hours. Call (847) 781-0300 to confirm today's hours before you go.",
      },
      {
        q: 'What hours do public sources show?',
        a: 'Restaurantji shows Mon, Tue, and Sun 7AM–2PM, with Wed–Sat split between 7AM–2PM and 3:30–8PM. Chicago Northwest shows Sun–Wed 7AM–3PM and Thu–Sat 7AM–9PM.',
      },
      {
        q: 'Do public sources show reservations?',
        a: "Restaurantji's listing notes that the restaurant does not accept reservations. This preview uses call and directions CTAs instead of a fake booking flow.",
      },
      {
        q: 'What kind of food should visitors expect?',
        a: 'Public-source signals consistently point to pancakes, French toast, skillets, eggs, benedicts, omelettes, soup, burgers, sandwiches, wraps, coffee, and family-friendly breakfast classics.',
      },
      {
        q: 'Why does this preview mention the site being back online?',
        a: 'Because the official domain returned a Wix ConnectYourDomain 404 on May 6, 2026. The preview is designed to restore clear visit info and menu confidence without inventing unsupported details.',
      },
    ],
  },

  closing: {
    heading: "Plan breakfast at Maxfield's\nwith the basics that matter.",
    subcopy:
      'Call before you go for today’s hours, use directions for the Schaumburg location, and browse source-safe breakfast and lunch highlights without fake reservations, fake online ordering, or made-up certainty.',
    cta: { label: 'Call (847) 781-0300', href: 'tel:+18477810300' },
    secondaryCta: { label: 'Get directions', href: directionsHref },
    tertiaryCta: { label: 'See menu highlights', href: '/#menu' },
    photo: {
      src: '/media/maxfields-diner-card.svg',
      alt: 'Abstract local diner illustration for Maxfield preview',
    },
    hours: [
      { day: 'Public hours note', time: 'Call to confirm today' },
      { day: 'Restaurantji', time: 'Mon/Tue/Sun 7AM–2PM; Wed–Sat 7AM–2PM + 3:30–8PM' },
      { day: 'Chicago Northwest', time: 'Sun–Wed 7AM–3PM; Thu–Sat 7AM–9PM' },
    ],
  },

  wordmark: "maxfield's",

  footer: {
    tagline: "Breakfast-house basics for Schaumburg, rebuilt around pancakes, skillets, coffee, family visits, and clear call-first planning.",
    columns: [
      {
        heading: 'Visit',
        lines: ['700 E Schaumburg Rd', 'Schaumburg, IL 60194'],
      },
      {
        heading: 'Call',
        lines: ['(847) 781-0300', 'Use phone to confirm hours'],
      },
      {
        heading: 'Sources',
        lines: ['Google Maps', 'Restaurantji', 'Yelp', 'Chicago Northwest'],
      },
    ],
    copyright: "© 2026 Maxfield's Pancake House preview build.",
  },

  about: {
    hero: {
      headline: "A Schaumburg breakfast house\nwith public-source trust worth preserving.",
      subcopy:
        "Public listings consistently show Maxfield's at 700 E Schaumburg Rd with strong breakfast demand, strong review volume, and a broken official website. This preview focuses on restoring clarity first: what it is, where it is, how to call, and what diners already recognize.",
      photos: [
        {
          src: '/media/maxfields-diner-card.svg',
          alt: 'Abstract breakfast-house exterior placeholder card',
        },
        {
          src: '/media/maxfields-coffee-card.svg',
          alt: 'Abstract coffee and breakfast placeholder card',
        },
      ],
    },
    values: {
      heading: 'How this Maxfield preview stays specific',
      items: [
        {
          title: 'Breakfast-house first',
          body: 'The copy leads with pancakes, skillets, eggs, comfort classics, and family-friendly breakfast signals instead of generic upscale-bistro language.',
        },
        {
          title: 'Truth-safe sourcing',
          body: 'Hours conflicts, reservation uncertainty, and menu gaps are labeled clearly. Unsupported claims like owner names, exact pricing, and awards are intentionally omitted.',
        },
        {
          title: 'Useful local conversion',
          body: 'The main actions are call, directions, and menu highlights because those are the verified actions public diners can take right now.',
        },
      ],
    },
    proof: {
      heading: 'Source-backed business signals',
      cards: [
        {
          title: 'Business identity',
          body: "Google Maps labels Maxfield's as a breakfast restaurant and describes a wide-ranging breakfast menu with burgers, sandwiches, and other simple bites.",
        },
        {
          title: 'Location confidence',
          body: 'Google Maps, Restaurantji, and Chicago Northwest all align on 700 E Schaumburg Rd, Schaumburg, IL 60194 and the same phone number.',
        },
        {
          title: 'Review demand',
          body: 'The public footprint is substantial: Google 4.5 with 983 reviews, Restaurantji 4.7 with 259 ratings, and Yelp 3.7 with 268 reviews plus 230 photos.',
        },
        {
          title: 'Story caution',
          body: 'Public snippets mention family-owned and established in 1998, but this preview treats those as pending stronger verification rather than headline fact.',
        },
      ],
    },
  },

  contact: {
    eyebrow: 'Call, directions, and source notes',
    heading: 'Contact and visit info for the Schaumburg location',
    subcopy:
      "This page avoids fake inboxes and fake submissions. Use the verified phone number for current hours and operational questions, and use directions for the 700 E Schaumburg Rd location.",
    info: {
      heading: "Maxfield's Pancake House",
      address: ['700 E Schaumburg Rd', 'Schaumburg, IL 60194'],
      phone: '(847) 781-0300',
      phoneHref: 'tel:+18477810300',
      email: null,
      directionsHref,
      hours: [
        'Public hours vary by source. Call to confirm today.',
        'Restaurantji: Mon/Tue/Sun 7AM–2PM; Wed–Sat 7AM–2PM + 3:30–8PM',
        'Chicago Northwest: Sun–Wed 7AM–3PM; Thu–Sat 7AM–9PM',
      ],
      sourceNotes: [
        'Google Maps shows 4.5 stars with 983 reviews and labels the business as a breakfast restaurant.',
        'Restaurantji shows 4.7 with 259 ratings and notes that reservations are not accepted.',
        'Yelp shows 3.7 stars with 268 reviews and 230 photos.',
      ],
    },
  },
};
