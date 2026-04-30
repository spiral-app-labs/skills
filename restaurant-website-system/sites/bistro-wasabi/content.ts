const imageBase = '/images/bistro-wasabi';

const premiumImages = {
  hero: `${imageBase}/premium-hero-sushi-bar.png`,
  platter: `${imageBase}/premium-sushi-platter.png`,
  rolls: `${imageBase}/premium-specialty-rolls.png`,
  starter: `${imageBase}/premium-sashimi-starter.png`,
  drinks: `${imageBase}/premium-sushi-martini.png`,
} as const;

export const links = {
  tock: 'https://www.exploretock.com/bistrowasabilakeinthehills',
  carryOut: 'https://order.toasttab.com/online/bistro-wasabi-lith-4590-w-algonquin-rd',
  giftCards: 'https://www.toasttab.com/bistro-wasabi-lith-4590-w-algonquin-rd/giftcards',
  delivery: 'https://www.ubereats.com/store/bistro-wasabi/jnP8YukWRxiW3drzGHnnrg',
  phone: 'tel:+18475152700',
  email: 'mailto:thebistrowasabi@gmail.com',
  lakeDirections:
    'https://www.google.com/maps/search/?api=1&query=4590%20W%20Algonquin%20Rd%2C%20Lake%20in%20the%20Hills%2C%20IL%2060156',
  hoffmanDirections:
    'https://www.google.com/maps/search/?api=1&query=1578%20W%20Algonquin%20Rd%2C%20Hoffman%20Estates%2C%20IL%2060192',
};

export const content = {
  brand: {
    name: 'Bistro Wasabi',
    tagline: 'Bistro Wasabi',
    description:
      'Fresh sushi, fusion plates, hand-shaken martinis, wine specials, steaks, and seafood in Lake in the Hills and Hoffman Estates.',
    logoText: 'BISTRO WASABI',
    phone: '847-515-2700',
    email: 'thebistrowasabi@gmail.com',
    established: 'Since 2000',
    address: { line1: '4590 W Algonquin Rd', line2: 'Lake in the Hills, IL 60156' },
    hoursDisplay: [
      { day: 'Mon', value: 'Closed' },
      { day: 'Tue-Thu', value: '5:00-9:30' },
      { day: 'Fri-Sat', value: '5:00-9:30' },
      { day: 'Sun', value: '4:30-9:00' },
    ],
    hoursConfig: {
      timezone: 'America/Chicago',
      ranges: [
        { day: 2 as const, open: '17:00', close: '21:30' },
        { day: 3 as const, open: '17:00', close: '21:30' },
        { day: 4 as const, open: '17:00', close: '21:30' },
        { day: 5 as const, open: '17:00', close: '21:30' },
        { day: 6 as const, open: '17:00', close: '21:30' },
        { day: 0 as const, open: '16:30', close: '21:00' },
      ],
      closures: [],
    },
  },

  nav: {
    items: [
      { label: 'Menu', href: '/menu' },
      { label: 'Locations', href: '/locations' },
      { label: 'Story', href: '/about' },
    ],
    cta: { label: 'Reserve', href: links.tock },
  },

  hero: {
    image: premiumImages.hero,
    alt: 'Premium nigiri plated on a dark sushi bar with warm restaurant lighting',
    eyebrow: 'Lake in the Hills + Hoffman Estates',
    title: 'Sushi, Martinis, Steaks',
    lead:
      'Fresh sushi, hand-shaken martinis, weekly wine specials, steaks, seafood, and more for the whole table.',
    supportingLine:
      'Locally owned since 2000, with two Algonquin Road locations for dinner, drinks, carry-out, and gift cards.',
  },

  trustHighlights: [
    { value: 'Since 2000', label: 'Locally owned', note: 'Serving the northwest suburbs' },
    { value: 'Two', label: 'Locations', note: 'Lake in the Hills + Hoffman Estates' },
    { value: 'Tonight', label: 'Dinner plans', note: 'Reserve, order, call, or get directions' },
  ],

  homeEntryCards: [
    {
      label: 'Menu',
      title: 'Sushi, dinner, and drinks',
      body:
        'Browse maki, sashimi, starters, steaks, seafood, martinis, sake, and wine before you head over.',
      href: '/menu',
      action: 'View menu',
      image: premiumImages.platter,
      alt: 'Nigiri, sashimi, and maki on a black ceramic plate',
    },
    {
      label: 'Locations',
      title: 'Lake in the Hills + Hoffman Estates',
      body:
        'Choose your location, reserve a table, order carry-out, call, or get directions.',
      href: '/locations',
      action: 'Choose a location',
      image: premiumImages.hero,
      alt: 'Warm sushi bar with nigiri in the foreground',
    },
  ],

  thumbnailNav: [
    {
      label: 'Menu',
      href: '/menu',
      image: premiumImages.platter,
      alt: 'Premium nigiri, sashimi, and maki on a black ceramic plate',
    },
    {
      label: 'Locations',
      href: '/locations',
      image: premiumImages.hero,
      alt: 'Warm sushi bar with premium nigiri in the foreground',
    },
    {
      label: 'Reserve',
      href: links.tock,
      image: premiumImages.rolls,
      alt: 'Premium specialty maki rolls with tuna, salmon, avocado, and roe',
    },
    {
      label: 'Carry Out',
      href: links.carryOut,
      image: premiumImages.starter,
      alt: 'Refined sashimi starter with citrus, jalapeno, and microgreens',
    },
  ],

  locations: [
    {
      name: 'Lake in the Hills',
      role: 'Dine in, carry-out, gift cards, and delivery',
      address: '4590 W Algonquin Rd, Lake in the Hills, IL 60156',
      actions: [
        { label: 'Reserve a table', href: links.tock, primary: true },
        { label: 'Order carry-out', href: links.carryOut, primary: true },
        { label: 'Directions', href: links.lakeDirections },
        { label: 'Call', href: links.phone },
      ],
    },
    {
      name: 'Hoffman Estates',
      role: 'Hoffman Estates dining room',
      address: '1578 W Algonquin Rd, Hoffman Estates, IL 60192',
      actions: [
        { label: 'Directions', href: links.hoffmanDirections, primary: true },
        { label: 'Call', href: links.phone, primary: true },
        { label: 'Email', href: links.email },
      ],
    },
  ],

  reviews: [
    {
      tag: 'Fresh sushi',
      quote:
        'Everything was delicious, the fish was fresh, the rolls were inventive, and the tempura was perfectly crispy.',
    },
    {
      tag: 'Service',
      quote: 'The sushi is always fresh and the service is always wonderful.',
    },
    {
      tag: 'Atmosphere',
      quote:
        'The overall vibe feels modern, stylish, and energetic, almost like stepping into a popular city spot.',
    },
    {
      tag: 'Dinner',
      quote: 'The ambiance is very inviting with moody lighting and tasteful decor.',
    },
    {
      tag: 'Regulars',
      quote: 'Been coming here for 25 years and the quality has always maintained itself!',
    },
    {
      tag: 'Drinks',
      quote: 'Great food, super drink menu and cozy place!',
    },
    {
      tag: 'Rolls + martinis',
      quote:
        'Loved the Bistro Wasabi roll, crab Rangoon roll, and dragon roll. Perfect mango martini!',
    },
    {
      tag: 'Reservations',
      quote:
        'The sushi chefs are incredibly talented and the fish is just so fresh. Busy even on weeknights.',
    },
    {
      tag: 'Sashimi',
      quote: 'Rolls were delicious and sashimi was super fresh.',
    },
    {
      tag: 'Full dinner',
      quote:
        'Excellent Sushi! Entrees were delicious! Desserts were amazing! Drinks were creative and refreshing!',
    },
  ],

  secretSauce: {
    eyebrow: 'The house style',
    title: 'Sushi night that works for the whole table',
    body:
      'Settle in for sushi-bar favorites, warm starters, martinis, wine specials, steaks, and seafood in a room built for a night out close to home.',
    points: [
      {
        label: 'From the sushi bar',
        text: 'Start with nigiri, sashimi, maki, and cold starters.',
      },
      {
        label: 'For the whole table',
        text: 'Bring the steak lover, the seafood person, and the sushi regular.',
      },
      {
        label: 'Weekly favorites',
        text: 'Tuesday wine bottles, Wednesday martinis, and Sunday Mai Tais make weeknights easy to look forward to.',
      },
    ],
  },

  signatureFavorites: [
    {
      name: 'Maguro Salad',
      description: 'Spicy tuna, pico de gallo, avocado, black tobiko, and crisp tortilla chips.',
      image: premiumImages.starter,
    },
    {
      name: 'Dragon Roll',
      description: 'A classic maki favorite with Bistro Wasabi polish.',
      image: premiumImages.rolls,
    },
    {
      name: 'Crackled Tuna',
      description: 'A crisp tuna starter made for the table.',
      image: premiumImages.starter,
    },
    {
      name: 'Sashimi Carpaccio',
      description: 'Sliced sashimi with a bright, refined finish.',
      image: premiumImages.starter,
    },
    {
      name: 'Shrimp & Scallops',
      description: 'A generous seafood entree for dinner.',
      image: `${imageBase}/menu-plate.jpg`,
    },
    {
      name: 'New York Steak',
      description: 'Charbroiled steak for the non-sushi craving.',
      image: `${imageBase}/beef-roll.jpg`,
    },
  ],

  specials: [
    { day: 'Tuesday', offer: 'Half-price bottles of wine under $100' },
    { day: 'Wednesday', offer: '$8 martinis' },
    { day: 'Sunday', offer: 'Mai Tai special' },
  ],

  about: {
    pageTitle: 'Story',
    image: premiumImages.hero,
    headline: 'Fresh sushi and fusion plates, locally owned since 2000.',
    intro:
      'Bistro Wasabi blends traditional sushi with Mexican, Korean, and French-inspired appetizers, entrees, and desserts. The menu goes beyond the sushi bar with broiled steaks, chops, charbroiled New York steak, martinis, sake, and wine.',
    badges: [
      { value: '2000', name: 'Established', descriptor: 'Locally owned' },
      { value: 'Two', name: 'Locations', descriptor: 'Algonquin Road' },
      { value: 'Sushi + steaks', name: 'Full dinner menu', descriptor: 'For the whole table' },
    ],
    storyHeadline: 'A night out, close to home',
    story:
      'Come for fresh sushi and inventive rolls, stay for martinis, warm lighting, and a menu that keeps every diner at the table happy.',
    storyImage: premiumImages.starter,
  },

  menu: {
    pageTitle: 'Menu',
    pageImage: premiumImages.platter,
    intro:
      'Explore sushi, maki, starters, seafood, steaks, martinis, sake, and wine.',
    sections: [
      {
        title: 'Sushi & Maki',
        items: [
          {
            name: 'Bistro Wasabi Special',
            description: 'The house roll for a first taste of Bistro Wasabi.',
            price: 'Roll',
            image: premiumImages.rolls,
          },
          {
            name: 'Dragon',
            description: 'A classic maki favorite with Bistro Wasabi polish.',
            price: 'Maki',
            image: premiumImages.rolls,
          },
          {
            name: 'Spicy Tuna Deluxe',
            description: 'A fresh-tuna classic from the sushi bar.',
            price: 'Sushi',
            image: premiumImages.platter,
          },
          {
            name: 'Crazy Roll',
            description: 'Inventive maki for a bolder roll order.',
            price: 'Roll',
            image: premiumImages.rolls,
          },
        ],
      },
      {
        title: 'Cold & Hot Starters',
        items: [
          {
            name: 'Crackled Tuna',
            description: 'A crisp tuna starter made for the table.',
            price: 'Starter',
            image: premiumImages.starter,
          },
          {
            name: 'Sashimi Carpaccio',
            description: 'Sliced sashimi with a bright, refined finish.',
            price: 'Cold',
            image: premiumImages.starter,
          },
          {
            name: 'Raspberry Chipotle Shrimp',
            description: 'Sweet heat for the table before sushi or steaks.',
            price: 'Hot',
            image: premiumImages.starter,
          },
          {
            name: 'Calamari Tempura',
            description: 'Crisp tempura for sharing.',
            price: 'Hot',
            image: premiumImages.starter,
          },
        ],
      },
      {
        title: 'Entrees & Steaks',
        items: [
          {
            name: 'Peppercorn Ahi Tuna',
            description: 'Peppercorn-seared ahi tuna with a bold finish.',
            price: 'Entree',
            image: premiumImages.starter,
          },
          {
            name: 'Shrimp & Scallops',
            description: 'A generous seafood entree for dinner.',
            price: 'Entree',
            image: `${imageBase}/menu-plate.jpg`,
          },
          {
            name: 'New York Steak',
            description: 'Charbroiled steak for the non-sushi craving.',
            price: 'Steak',
            image: `${imageBase}/beef-roll.jpg`,
          },
          {
            name: 'Rack of Lamb',
            description: 'A rich entree for a lingering dinner.',
            price: 'Entree',
            image: `${imageBase}/beef-roll.jpg`,
          },
        ],
      },
      {
        title: 'Martinis, Sake & Wine',
        items: [
          {
            name: 'Asian Pear Martini',
            description: 'Cool pear notes, shaken for dinner.',
            price: 'Martini',
            image: premiumImages.drinks,
          },
          {
            name: 'Mango Mango',
            description: 'A bright mango martini with a tropical finish.',
            price: 'Martini',
            image: premiumImages.drinks,
          },
          {
            name: 'Sapporo',
            description: 'A crisp beer alongside sushi, sake, cocktails, martinis, and wine.',
            price: 'Beer',
            image: premiumImages.drinks,
          },
          {
            name: 'Tuesday Wine Bottles',
            description: 'Half-price bottles under $100 on Tuesdays.',
            price: 'Special',
            image: premiumImages.drinks,
          },
        ],
      },
    ],
  },

  reservation: {
    pageTitle: 'Reserve',
    pageImage: premiumImages.rolls,
    headline: 'Make a plan for tonight',
    intro:
      'Book a table, order carry-out, send a gift card, start delivery, or call the location that fits your night.',
  },

  footer: {
    text: 'Bistro Wasabi. Locally owned since 2000.',
  },
} as const;

export type SiteContent = typeof content;
