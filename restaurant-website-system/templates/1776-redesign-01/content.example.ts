// content.example.ts — 1776-redesign-01 placeholder content
//
// Replace ALL strings + image URLs when forking for a real restaurant.
// Photos use Unsplash hotlinks for portability — forks should self-host the
// restaurant's own dark-warm food photography in /public.

// Helper for the italic-on-serif display heading pattern.
// Pass `upright` and `italic` words/phrases — they render side-by-side or stacked.
export type DisplayHeadingContent = {
  upright: string;
  italic: string;
  layout?: 'inline' | 'stacked';
};

export const content = {
  brand: {
    name: '1776',
    tagline: 'Redefining Fine Dining',
    description: 'Modern American cuisine, 100% gluten-free kitchen, in Crystal Lake, Illinois.',
    logo: '1776', // wordmark text
    location: 'Crystal Lake, Illinois',
    established: 'Est. 1776',
    address: '397 W Virginia St',
    addressFull: '397 W Virginia St, Crystal Lake, IL 60014',
    phone: '(815) 356-1776',
    email: 'info@1776restaurant.com',
    reservationUrl: 'https://www.opentable.com/1776-restaurant',
    hours: [
      { days: 'Wednesday & Thursday', time: '4:00 PM to 10:00 PM' },
      { days: 'Friday & Saturday', time: '4:00 PM to 10:30 PM' },
      { days: 'Sunday to Tuesday', time: 'Closed' },
    ],
    rating: { stars: 4.9, count: 1902 },
    // Powers <LiveOpenStatus /> — see shared/lib/hours.ts HoursConfig schema.
    // Fork rule: update timezone + ranges to match real venue. Add closures array for holidays.
    // 1776 is in Crystal Lake, IL — America/Chicago. Sun/Mon/Tue closed (omitted from ranges).
    hoursConfig: {
      timezone: 'America/Chicago',
      ranges: [
        { day: 3 as const, open: '16:00', close: '22:00' }, // Wednesday
        { day: 4 as const, open: '16:00', close: '22:00' }, // Thursday
        { day: 5 as const, open: '16:00', close: '22:30' }, // Friday
        { day: 6 as const, open: '16:00', close: '22:30' }, // Saturday
      ],
      closures: [],
    },
    // Primary location lat/lng — powers <LiveMapEmbed />. Fork rule: replace with real coords.
    geo: { lat: 42.2411, lng: -88.3162 }, // Crystal Lake, IL (placeholder; forks replace)
  },

  nav: {
    items: [
      { label: 'Home',    href: '/' },
      { label: 'Menu',    href: '/menu' },
      { label: 'About',   href: '/about' },
      { label: 'Contact', href: '/contact' },
    ],
    cta: { label: 'Reserve', href: 'https://www.opentable.com/1776-restaurant' },
  },

  hero: {
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=2000&q=80',
    eyebrow: 'Crystal Lake, Illinois · Est. 1776',
    heading: { upright: 'Redefining', italic: 'Fine Dining', layout: 'stacked' } as DisplayHeadingContent,
    primaryCta:   { label: 'Reserve a Table', href: 'https://www.opentable.com/1776-restaurant' },
    secondaryCta: { label: 'View Menu', href: '/menu' },
  },

  marquee: {
    items: ['Gluten Free', 'Fine Dining', 'Crystal Lake', 'Farm to Table'],
    separator: '◆',
  },

  signatureSelections: {
    heading: { upright: 'Signature', italic: 'Selections' } as DisplayHeadingContent,
    fullMenuLink: { label: 'Full Menu', href: '/menu' },
    items: [
      {
        tag: 'Entree',
        name: 'Braised Short Ribs',
        description: 'Slow-braised in red wine reduction, seasonal root vegetables, crispy shallots.',
        image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
      },
      {
        tag: 'Side',
        name: 'Lump Crab Cakes',
        description: 'Calabrian aioli, grapefruit, micro herbs.',
        image: 'https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=800&q=80',
      },
      {
        tag: 'Feature',
        name: 'Pan-Seared Scallops',
        description: 'Polenta cake, citrus salsa verde, crispy capers.',
        image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=800&q=80',
      },
    ],
  },

  moreThanAMeal: {
    heading: { upright: 'More than a', italic: 'meal.' } as DisplayHeadingContent,
    body: [
      'We believe fine dining is more than the very best in food, service & atmosphere. It is creating a space where you feel at home — but are still surprised.',
      'Resident Chef Jill Vedaa leads our 100% gluten-free kitchen, sourcing from local producers including Holcomb Hollow Farm, Meats by Linz, and Tribe Country Farms.',
    ],
    storyCta: { label: 'Our Story', href: '/about' },
    images: [
      'https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=900&q=80',
    ],
  },

  voicesOfExperience: {
    eyebrow: 'What Guests Say',
    heading: { upright: 'Voices of', italic: 'Experience' } as DisplayHeadingContent,
    testimonials: [
      {
        quote: 'The braised short ribs are a must. Incredible atmosphere, impeccable service. This is the best fine dining experience in the Chicago suburbs.',
        attribution: 'James R.',
        platform: 'Google',
      },
      {
        quote: 'Brussels sprouts were absolutely divine — everyone at our table couldn\'t stop talking about them. The mushroom soup was transcendent.',
        attribution: 'Patricia M.',
        platform: 'OpenTable',
      },
      {
        quote: 'We bring my mother-in-law for her birthday every year. She\'s gluten-free and the menu is incredible — she never feels limited.',
        attribution: 'Michael T.',
        platform: 'Yelp',
      },
      {
        quote: 'Wine list with depth and intention. The Wine Spectator award is well-earned. Sommelier service was attentive without being pushy.',
        attribution: 'Sarah L.',
        platform: 'Google',
      },
    ],
  },

  quoteOverlay: {
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=2000&q=80',
    quote: 'A space where you feel at home, but are still surprised.',
    attribution: '— Chef Jill Vedaa',
  },

  reservationStrip: {
    eyebrow: 'Ready to Dine?',
    heading: { upright: 'Reserve Your', italic: 'Table', trailingUpright: ' Tonight' } as DisplayHeadingContent & { trailingUpright?: string },
    primaryCta: { label: 'Reserve on OpenTable', href: 'https://www.opentable.com/1776-restaurant' },
    secondaryCta: { label: 'Call (815) 356-1776', href: 'tel:+18153561776' },
  },

  footer: {
    tagline: 'Redefining Fine Dining',
    description: 'Crystal Lake, Illinois — where colonial elegance meets modern American cuisine. 100% Gluten-Free Kitchen.',
    badges: ['100% Gluten-Free Kitchen', 'Wine Spectator Award of Excellence'],
    copyright: '© 2026 1776 Restaurant · All rights reserved',
  },

  // ---- /menu page ----
  menu: {
    pageTitle: 'The Menu',
    eyebrow: '100% Gluten-Free Kitchen · No Wheat-Beer Suppliers · Last 48 Hours Notice for French Pastry Delivery',
    notice: 'Wineday: Every bottle $75 & under is half-price · Wednesdays only',
    pageImage: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=2000&q=80',
    tabs: ['Nosh', 'Salads', 'Entrees', 'Dessert', 'Wine & Drinks'],
    sections: {
      'Nosh': {
        intro: 'Small plates & starters to begin your evening.',
        items: [
          { name: 'Lump Crab Cakes',     description: 'Calabrian aioli, grapefruit, micro herbs.',                            price: '$18' },
          { name: 'Cheese Curds',        description: 'House-made gluten-free beer batter, ranch dipping sauce.',             price: '$14' },
          { name: 'Charcuterie Board',   description: 'Seasonal selections, house-made accompaniments, gluten-free bread.',   price: '$22' },
          { name: 'Bruschetta',          description: 'Heirloom tomato, fresh basil, aged balsamic, gluten-free toast points.', price: '$12' },
          { name: 'Mushroom Bisque',     description: 'Wild mushroom, truffle cream, herb chive.',                             price: '$10' },
          { name: 'Brussels Sprouts',    description: 'Crispy, golden, roasted brown ale — a guest favorite.',                 price: '$11' },
        ],
      },
      'Salads': {
        intro: 'Fresh, seasonal, locally sourced.',
        items: [
          { name: 'Heirloom Tomato',      description: 'Burrata, basil oil, aged balsamic, sea salt.',                        price: '$15' },
          { name: 'Wedge',                description: 'Iceberg, candied bacon, pickled red onion, gluten-free crouton.',      price: '$13' },
          { name: 'Roasted Beet',         description: 'Whipped goat cheese, candied walnuts, citrus vinaigrette.',            price: '$14' },
        ],
      },
      'Entrees': {
        intro: 'The heart of the menu — chef-driven, gluten-free, locally sourced.',
        items: [
          { name: 'Braised Short Ribs',   description: 'Slow-braised red wine reduction, seasonal root vegetables, crispy shallots.', price: '$42' },
          { name: 'Pan-Seared Scallops',  description: 'Polenta cake, citrus salsa verde, crispy capers.',                     price: '$38' },
          { name: 'Filet Mignon',         description: '8oz Meats by Linz center cut, truffle butter, roasted root vegetables.', price: '$54' },
          { name: 'Roasted Half Chicken', description: 'Holcomb Hollow Farm chicken, lemon-thyme jus, mashed potatoes.',       price: '$32' },
          { name: 'Mushroom Risotto',     description: 'Wild mushroom medley, parmesan, truffle oil, micro herbs.',             price: '$28' },
          { name: 'Grilled Salmon',       description: 'Atlantic salmon, lemon dill butter, asparagus.',                        price: '$36' },
        ],
      },
      'Dessert': {
        intro: 'House-made, gluten-free.',
        items: [
          { name: 'Crème Brûlée',          description: 'Vanilla bean, caramelized sugar.',                                    price: '$10' },
          { name: 'Flourless Chocolate',  description: 'Dark chocolate torte, raspberry coulis, vanilla bean ice cream.',     price: '$11' },
          { name: 'Cheesecake',           description: 'New York style, seasonal fruit compote.',                              price: '$10' },
        ],
      },
      'Wine & Drinks': {
        intro: 'Wine Spectator Award of Excellence list. Cocktails crafted with intention.',
        items: [
          { name: 'House Red',            description: 'Cabernet Sauvignon, Napa Valley.',                                    price: '$14 / $52' },
          { name: 'House White',          description: 'Sauvignon Blanc, Marlborough.',                                       price: '$13 / $48' },
          { name: 'Old Fashioned',        description: 'Bourbon, demerara, orange bitters.',                                  price: '$15' },
          { name: 'Espresso Martini',     description: 'Vodka, fresh espresso, coffee liqueur.',                              price: '$16' },
        ],
      },
    },
    disclosure: 'Our menu changes with the seasons. All items prepared in our 100% gluten-free kitchen. Consuming raw or undercooked foods may increase your risk of foodborne illness.',
    partners: {
      eyebrow: 'Local Partners',
      heading: { upright: 'Our Producers &', italic: 'Farmers' } as DisplayHeadingContent,
      list: ['Conscious Cup Coffee Roasters', 'Holcomb Hollow Farm', 'Julie Ann\'s Custard', 'Meats by Linz', 'Tribe Country Farms'],
    },
  },

  // ---- /about page ----
  about: {
    pageTitle: { upright: 'Where Freedom', italic: 'Meets Flavor', layout: 'stacked' } as DisplayHeadingContent,
    pageImage: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=2000&q=80',
    manifesto: 'We believe fine dining is more than the very best in food, service & atmosphere. It is creating a space where you feel at home, in a way — but are still surprised.',
    chef: {
      name: 'Jill Vedaa',
      role: 'Resident Chef',
      portrait: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=800&q=80',
    },
    storyHeading: { upright: 'The Story', italic: 'of 1776' } as DisplayHeadingContent,
    timeline: [
      { phase: 'The Name',                  body: 'Inspired by the year America was founded, 1776 represents independence — in cuisine, in sourcing, in spirit.' },
      { phase: 'Crystal Lake Roots',        body: 'Established in the heart of Crystal Lake, Illinois — a destination dining venue serving the Chicago suburbs.' },
      { phase: 'Resident Chef Jill Vedaa', body: 'Chef Jill leads our 100% gluten-free kitchen, sourcing from local producers and crafting a seasonal menu.' },
      { phase: 'Wine Spectator Recognized', body: 'Awarded Wine Spectator Award of Excellence for our curated wine list with depth and intention.' },
    ],
    partners: {
      eyebrow: 'Sourced Locally',
      heading: { upright: 'Our Local', italic: 'Partners' } as DisplayHeadingContent,
      list: [
        { name: 'Conscious Cup Coffee Roasters', description: 'Crystal Lake roastery sourcing single-origin beans.' },
        { name: 'Julie Ann\'s Custard',          description: 'Family-owned dessert house since 1985.' },
        { name: 'Holcomb Hollow Farm',           description: 'Pasture-raised chicken & seasonal produce.' },
        { name: 'Meats by Linz',                 description: 'Premier dry-aged beef, three generations of butchery.' },
        { name: 'Tribe Country Farms',           description: 'Organic vegetables & micro herbs, weekly delivery.' },
      ],
    },
    cta: {
      eyebrow: 'Ready to Dine?',
      heading: { upright: 'Come', italic: 'Join Us' } as DisplayHeadingContent,
      primary:   { label: 'Reserve a Table', href: 'https://www.opentable.com/1776-restaurant' },
      secondary: { label: 'Call (815) 356-1776', href: 'tel:+18153561776' },
    },
  },

  // ---- /contact page ----
  contact: {
    pageTitle: { upright: 'Contact &', italic: 'Reservations', layout: 'stacked' } as DisplayHeadingContent,
    pageImage: 'https://images.unsplash.com/photo-1592861956120-e524fc739696?auto=format&fit=crop&w=2000&q=80',
    findUs: {
      eyebrow: 'Visit Us',
      heading: { upright: 'Come', italic: 'find us.' } as DisplayHeadingContent,
    },
    reserve: {
      eyebrow: 'Online Reservations',
      heading: 'Reserve Your Table',
      body: 'Powered by OpenTable. Booking up to 30 days in advance. Walk-ins accepted based on availability.',
      cta: { label: 'Reserve on OpenTable', href: 'https://www.opentable.com/1776-restaurant' },
    },
    goodToKnow: {
      eyebrow: 'Good to Know',
      items: [
        '100% gluten-free kitchen',
        'No food-and-wine pairings',
        'Casual smart-attire suggested',
        'All menu items vegan-adaptable',
        'Wine list features 200+ bottles',
        'Reservations recommended; walk-ins welcome (Wednesdays)',
      ],
    },
    bottomQuote: {
      image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=2000&q=80',
      quote: 'We look forward to welcoming you to our table.',
    },
  },
} as const;

export type SiteContent = typeof content;
