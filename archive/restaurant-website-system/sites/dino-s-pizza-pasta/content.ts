export const content = {
  brand: {
    name: "Dino's",
    fullName: "Dino's Pizza & Pasta",
    tagline: 'Lake in the Hills pizza, pasta, slices, and beer',
    description:
      "Neighborhood pizza and pasta in Lake in the Hills with made-from-scratch thin crust, stuffed deep dish, pasta dinners, garlic bread sandwiches, and direct call-first ordering.",
    address: {
      line1: '6 Miller Rd',
      line2: 'Lake in the Hills, IL 60156',
    },
    phone: '(847) 658-3300',
    phoneHref: 'tel:+18476583300',
    email: 'dinospizza64@gmail.com',
    officialSite: 'https://www.dinospizzalith.com/',
    menuHref: 'https://www.dinospizzalith.com/menu/',
    directionsHref:
      'https://www.google.com/maps/search/?api=1&query=6+Miller+Rd+Lake+in+the+Hills+IL+60156',
    hours: [
      { days: 'Monday', time: 'Closed' },
      { days: 'Tuesday', time: 'Closed' },
      { days: 'Wednesday', time: '4 PM - 9 PM' },
      { days: 'Thursday', time: '4 PM - 9 PM' },
      { days: 'Friday', time: '4 PM - 10 PM' },
      { days: 'Saturday', time: '4 PM - 10 PM' },
      { days: 'Sunday', time: '4 PM - 9 PM' },
    ],
    hoursConfig: {
      timezone: 'America/Chicago',
      ranges: [
        { day: 0 as const, open: '16:00', close: '21:00' },
        { day: 3 as const, open: '16:00', close: '21:00' },
        { day: 4 as const, open: '16:00', close: '21:00' },
        { day: 5 as const, open: '16:00', close: '22:00' },
        { day: 6 as const, open: '16:00', close: '22:00' },
      ],
      closures: [],
    },
    mapQuery: '6 Miller Rd, Lake in the Hills, IL 60156',
    serviceArea:
      'Lake in the Hills, Algonquin, Huntley, Crystal Lake, and Lakewood. Further deliveries may vary in cost per the official location page.',
    socialProof: [
      'Official about copy describes Dino’s as a small family-owned and operated restaurant in old town Lake in the Hills.',
      'Official about page describes Dino’s as a small family owned and operated restaurant in old town Lake in the Hills.',
      'Official site says to follow Facebook and Instagram for daily updates.',
    ],
  },

  nav: {
    primary: [
      { label: 'Home', href: '/' },
      { label: 'Menu Highlights', href: '/#menu' },
      { label: 'Hours & Location', href: '/#visit' },
      { label: 'Contact', href: '/contact' },
    ],
    cta: { label: 'Call Now', href: 'tel:+18476583300' },
  },

  hero: {
    eyebrow: 'Lake in the Hills neighborhood pizza',
    headline: 'Thin crust first. Deep dish when the table wants more.',
    subhead:
      "Dino's Pizza & Pasta keeps the order simple: made-from-scratch crispy thin crust, stuffed Chicago-style deep dish, pasta dinners with a garlic stick, and a bar side with local craft beer.",
    highlightChips: [
      'Family owned and operated',
      'Old town Lake in the Hills staple',
      'Slices, sandwiches, pasta, beer',
    ],
    ctas: [
      { label: 'Call (847) 658-3300', href: 'tel:+18476583300', style: 'accent' as const },
      { label: 'See Full Menu', href: 'https://www.dinospizzalith.com/menu/', style: 'dark' as const },
    ],
  },

  fanFavorites: {
    heading: 'What Regulars Order',
    subhead:
      'Official menu items and Restaurantji favorites that give the first call some direction.',
    dishes: [
      {
        name: 'Wise Guy Sandwich',
        desc: 'Mortadella, salami, ham, Canadian bacon, provolone, lettuce, tomato, black olive, onion, pickle, and hot giardiniera with house Italian dressing.',
        price: '$12',
        tag: 'Restaurantji favorite',
      },
      {
        name: 'Lasagna Dinner',
        desc: "A repeat favorite in public reviews. Dino's pasta dinners include a garlic stick and your choice of meat or marinara sauce.",
        price: '$13',
        tag: 'Pasta dinner',
      },
      {
        name: 'Beer Nuggets',
        desc: "Golden beer nuggets served with Dino's pizza sauce. Also available in a parmesan garlic version on the official menu.",
        price: '$8',
        tag: 'Shareable starter',
      },
    ],
  },

  pizzaStyles: {
    heading: 'Pick Your Pizza Lane',
    subhead:
      "The official menu gives Dino's a much stronger story than the current homepage does. These are the formats worth leading with.",
    items: [
      {
        name: 'Crispy Thin Crust',
        inclusions: [
          'Made from scratch daily',
          '12 inch cheese starts at $13',
          'This is what the official menu says made Dino’s famous',
        ],
        price: 'From $13',
        note: 'Best-known style',
        color: 'deal-1' as const,
      },
      {
        name: 'Double Dough',
        inclusions: [
          'Dino’s version of hand tossed pizza',
          '12 inch cheese starts at $14.75',
          'Easy step up when thin crust is not the move',
        ],
        price: 'From $14.75',
        note: 'Softer bite',
        color: 'deal-2' as const,
      },
      {
        name: 'Old Fashioned In The Pan',
        inclusions: [
          'Cooked to perfection in a deep dish pan',
          '12 inch cheese starts at $16.25',
          'Good fit for heavier toppings and dine-in tables',
        ],
        price: 'From $16.25',
        note: 'Pan pizza',
        color: 'deal-3' as const,
      },
      {
        name: 'Stuffed Deep Dish',
        inclusions: [
          'Chicago-style deep dish with sauce on top',
          '12 inch cheese starts at $17.25',
          'Built for group orders and longer hangs',
        ],
        price: 'From $17.25',
        note: 'Chicago-style',
        color: 'deal-4' as const,
      },
    ],
  },

  moreMenu: {
    heading: 'More Than Just Pizza',
    subhead:
      "The menu is wide enough to support families, sandwich regulars, bar traffic, and people stopping in for a slice.",
    dishes: [
      {
        name: "Dino's Special",
        desc: 'Sausage, mushroom, onion, and green pepper. The signature combination the official menu calls out by name.',
        price: 'Signature combo',
        tag: 'House pie',
      },
      {
        name: 'Pasta Dinners',
        desc: 'Spaghetti, ravioli, lasagna, baked mostaccioli, fettuccine Alfredo, and chicken parmigiana. Most dinners start at $11.',
        price: 'From $11',
        tag: 'Includes garlic stick',
      },
      {
        name: 'Beer, Wine, and Bar Seats',
        desc: 'The official menu says Dino’s serves pop, not soda, and pours local craft beer alongside domestic and select imports while the game is on TV.',
        price: 'Dine-in energy',
        tag: 'Game on TV',
      },
    ],
  },

  visit: {
    heading: 'Why This Place Feels Like A Local Regular Spot',
    subhead:
      'Dino’s is not a one-note slice counter. The menu and review themes point to a neighborhood pizzeria with gaming, bar energy, and a big enough menu to hold repeat business.',
    tiles: [
      { title: 'Slices', body: 'Made fresh to order. Small $5 or large $7 on the official menu.' },
      { title: 'Garlic Bread', body: 'Any sandwich can be served on Dino’s garlic bread for a confirmed $2 upgrade.' },
      { title: 'Gluten-Free', body: 'A gluten-free 10 inch crust is listed directly on the menu.' },
      { title: 'Favorites', body: 'Wise Guy, lasagna, mozzarella sticks, chicken fingers, beer nuggets, and Italian beef keep surfacing in reviews.' },
      { title: 'Beer & TV', body: 'Bar seating, local craft beer, domestic and import bottles, and game-on-TV energy are part of the pitch.' },
    ],
    accordion: [
      {
        title: 'Hours',
        body: 'Monday closed. Tuesday closed. Wednesday, Thursday, and Sunday 4 PM to 9 PM. Friday and Saturday 4 PM to 10 PM.',
      },
      {
        title: 'Delivery & Pickup',
        body: 'The official location page lists delivery coverage for Lake in the Hills, Algonquin, Huntley, Crystal Lake, and Lakewood, with further delivery charges varying.',
      },
      {
        title: 'Ordering options',
        body: 'Direct call, directions, official site, and official menu links stay easy to find. The official site also mentions DoorDash, Grubhub, and Uber Eats, so the cleanest handoff is to call or use the official menu until Dino’s confirms the preferred provider flow.',
      },
    ],
  },

  proof: {
    eyebrow: 'Google reviews',
    heading: 'Regulars already describe the site Dino’s deserves.',
    body:
      'Dino’s Google reviews tell a consistent story: family warmth from Dino, crispy tavern-style thin crust, a real neighborhood bar feel, and regulars who keep making this their go-to pizza place.',
    quote:
      'Dino and his family really treat you like family every time you visit for food or drink.',
    name: 'Google reviewer',
    stats: [
      { value: '4.5', label: 'Google rating' },
      { value: '250+', label: 'Google reviews' },
      { value: '30', label: 'written reviews analyzed' },
    ],
  },

  concierge: {
    eyebrow: 'Dino’s order guide',
    heading: 'Need the right Dino’s order path?',
    subhead:
      'A simple guide for first-time callers: what to order, when Dino’s is open, and the safest way to call, view the menu, or get directions.',
    questions: [
      {
        question: 'What should I order first?',
        answer:
          'Start with the crispy thin crust — the official menu says it is made from scratch daily and is what made Dino’s famous. If the table wants something heavier, the menu also confirms double dough, old fashioned in-the-pan, and stuffed Chicago-style deep dish.',
        ctaLabel: 'Open official menu',
        ctaHref: 'https://www.dinospizzalith.com/menu/',
      },
      {
        question: 'Can I bring the family in?',
        answer:
          'Yes for dine-in context: public reviews describe a welcoming neighborhood feel, and the official menu mentions bar seating, beer, wine, and the game on TV. For current availability, call Dino’s directly before heading over.',
        ctaLabel: 'Call Dino’s',
        ctaHref: 'tel:+18476583300',
      },
      {
        question: 'When are they open?',
        answer:
          'Listed hours are: Wednesday, Thursday, and Sunday 4 PM to 9 PM; Friday and Saturday 4 PM to 10 PM; closed Monday and Tuesday. Always call for holiday or road-construction changes.',
        ctaLabel: 'Call to confirm',
        ctaHref: 'tel:+18476583300',
      },
      {
        question: 'How do I get there?',
        answer:
          'Dino’s is at 6 Miller Rd, Lake in the Hills, IL 60156. The safest handoff is directions to the verified address.',
        ctaLabel: 'Get directions',
        ctaHref: 'https://www.google.com/maps/search/?api=1&query=6+Miller+Rd+Lake+in+the+Hills+IL+60156',
      },
    ],
    guardrail:
      'This concierge does not place orders, quote current prep times, guarantee delivery coverage, or make unsupported reservation promises.',
  },

  closingCTA: {
    heading: 'Call for tonight, then let the menu do the rest.',
    subhead:
      "The path is simple: put Dino's core pizza and pasta story up front, make the phone and menu impossible to miss, and help people choose between call, menu, and directions fast.",
    links: [
      { label: 'Call Dino’s', href: 'tel:+18476583300' },
      { label: 'View Official Menu', href: 'https://www.dinospizzalith.com/menu/' },
      { label: 'Get Directions', href: 'https://www.google.com/maps/search/?api=1&query=6+Miller+Rd+Lake+in+the+Hills+IL+60156' },
      { label: 'Visit Official Site', href: 'https://www.dinospizzalith.com/' },
    ],
    note: 'Follow Facebook and Instagram for daily updates, per the official site.',
  },

  contact: {
    title: 'Contact Dino’s',
    subtitle:
      'Call Dino’s directly, open the official menu, or get directions to Miller Road before dinner.',
    links: [
      { label: 'Call (847) 658-3300', href: 'tel:+18476583300' },
      { label: 'Open the official menu', href: 'https://www.dinospizzalith.com/menu/' },
      { label: 'Get directions to 6 Miller Rd', href: 'https://www.google.com/maps/search/?api=1&query=6+Miller+Rd+Lake+in+the+Hills+IL+60156' },
      { label: 'Visit the current official site', href: 'https://www.dinospizzalith.com/' },
      { label: 'Email dinospizza64@gmail.com', href: 'mailto:dinospizza64@gmail.com' },
    ],
    contactFacts: [
      { label: 'Address', value: '6 Miller Rd, Lake in the Hills, IL 60156' },
      { label: 'Phone', value: '(847) 658-3300' },
      { label: 'Hours', value: 'Wed/Thu/Sun 4 PM - 9 PM, Fri/Sat 4 PM - 10 PM, Mon/Tue closed' },
      { label: 'Official note', value: 'Follow Facebook and Instagram for daily updates.' },
    ],
  },

  about: {
    title: "About Dino's",
    subtitle:
      'A family-run neighborhood pizza and pasta shop with dine-in, takeout, delivery, beer, and enough menu depth to keep regulars rotating back.',
    intro:
      "Dino's is a small family-owned and operated restaurant in old town Lake in the Hills, built around pizza, pasta, beer, and a neighborhood regulars feel.",
    stats: [
      { value: 'Family', label: 'owned and operated' },
      { value: '4.5', label: 'Google rating' },
      { value: '250+', label: 'Google reviews' },
      { value: '4 PM', label: 'Typical opening time' },
    ],
    paragraphs: [
      "The menu has real range: crispy thin crust made from scratch daily, double dough, old fashioned in-the-pan pizza, stuffed Chicago-style deep dish, gluten-free crust, pasta dinners, sandwiches on garlic bread, and a bar setup built around beer and game-on-TV energy.",
      "Start with the pizza format, check the hours, and use the call-first menu path when you know what the table wants.",
    ],
  },

  confetti: [
    { emoji: '🍕', top: '8%', left: '6%', rotate: -14 },
    { emoji: '🍺', top: '18%', left: '86%', rotate: 12 },
    { emoji: '🍝', top: '42%', left: '4%', rotate: 8 },
    { emoji: '🌶️', top: '58%', left: '92%', rotate: -18 },
    { emoji: '🧄', top: '72%', left: '10%', rotate: 6 },
    { emoji: '🍄', top: '30%', left: '80%', rotate: -10 },
    { emoji: '🫒', top: '80%', left: '78%', rotate: 14 },
    { emoji: '🍟', top: '12%', left: '40%', rotate: -6 },
  ],

  footer: {
    columns: [
      {
        heading: 'Visit',
        links: [
          { label: 'Menu Highlights', href: '/#menu' },
          { label: 'Hours & Location', href: '/#visit' },
          { label: 'About', href: '/about' },
          { label: 'Contact', href: '/contact' },
        ],
      },
      {
        heading: 'Order & Visit',
        links: [
          { label: 'Call Now', href: 'tel:+18476583300' },
          { label: 'Official Menu', href: 'https://www.dinospizzalith.com/menu/' },
          { label: 'Directions', href: 'https://www.google.com/maps/search/?api=1&query=6+Miller+Rd+Lake+in+the+Hills+IL+60156' },
          { label: 'Official Site', href: 'https://www.dinospizzalith.com/' },
        ],
      },
      {
        heading: 'Dino’s Favorites',
        links: [
          { label: 'Family owned and operated', href: '/about' },
          { label: 'Thin crust made from scratch', href: '/#menu' },
          { label: 'Beer and wine at the bar', href: '/#visit' },
          { label: 'Restaurantji favorites', href: '/#menu' },
        ],
      },
    ],
    copy: "Dino's Pizza & Pasta — pizza, pasta, beer, and neighborhood regulars in Lake in the Hills.",
  },
};
