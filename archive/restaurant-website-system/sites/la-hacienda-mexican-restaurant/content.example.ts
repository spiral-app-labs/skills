export const content = {
  brand: {
    name: 'La Hacienda Mexican Restaurant',
    tagline: 'Neighborhood Mexican favorites with fast pickup and longtime regulars',
    description:
      'La Hacienda Mexican Restaurant in East Dundee serves tacos, burritos, tortas, chimichangas, fajitas, horchata, and quick pickup favorites from 411 E Main St.',
    since: 'East Dundee neighborhood Mexican restaurant',
    address: '411 E Main St, East Dundee, IL 60118',
    phone: '(847) 426-0506',
    email: '',
    instagram: '',
    social: [],
    hoursConfig: {
      timezone: 'America/Chicago',
      ranges: [
        { day: 0 as const, open: '10:00', close: '21:00' },
        { day: 1 as const, open: '10:00', close: '21:00' },
        { day: 2 as const, open: '10:00', close: '21:00' },
        { day: 3 as const, open: '10:00', close: '21:00' },
        { day: 4 as const, open: '10:00', close: '21:00' },
        { day: 5 as const, open: '10:00', close: '22:00' },
        { day: 6 as const, open: '10:00', close: '22:00' },
      ],
      closures: [],
    },
    geo: { lat: 42.0972, lng: -88.2681 },
  },

  links: {
    call: 'tel:+18474260506',
    directions:
      'https://www.google.com/maps/dir/?api=1&destination=411+E+Main+St,+East+Dundee,+IL+60118',
    menu: 'https://www.canva.com/design/DAFiva54Na0/0FUdTRi1uYaiwKx25OqRew/view',
    order: 'https://www.restaurantji.com/order.php?id=3429883',
  },

  nav: {
    primary: [
      { label: 'About', href: '/about' },
      { label: 'Menu', href: '/menu' },
      { label: 'Contact', href: '/contact' },
    ],
    dropdown: {
      label: 'More',
      items: [
        { label: 'Home', href: '/' },
        { label: 'About', href: '/about' },
        { label: 'Menu', href: '/menu' },
        { label: 'News', href: '/news' },
        { label: 'Contact', href: '/contact' },
      ],
    },
    cta: { label: 'View Menu', href: '/menu' },
  },

  hero: {
    eyebrow: 'East Dundee Mexican Restaurant',
    title: 'Authentic Mexican favorites in East Dundee.',
    subtitle:
      'Tacos, burritos, tortas, fajitas, horchata, and fast pickup at 411 E Main St — with clear calls, directions, menu, and order links.',
    cta: { label: 'View Menu', href: '/menu' },
    plateImage: '/la-hacienda/hero-review-board.svg',
    plateAlt: 'La Hacienda menu and review highlights panel',
  },

  mission: {
    eyebrow: 'Local Favorites',
    title: 'Fast pickup, familiar favorites, and one-tap next steps.',
    body:
      'Locals keep coming back for burritos, tacos, tortas, chimichangas, fajitas, pico, green salsa, chips and salsa, horchata, tamales, and enchiladas. Favorites, phone number, directions, and online ordering are easy to find before you head over.',
    cta: { label: 'Call La Hacienda', href: 'tel:+18474260506' },
    phone: '(847) 426-0506',
    image: '/la-hacienda/current-site-gap.svg',
    imageAlt: 'La Hacienda quick action and menu poster',
  },

  categoryStrip: {
    eyebrow: 'Guest Favorites',
    title: 'Tacos, burritos, tortas, and specials are easy to find before you go.',
    categories: [
      { label: 'Burritos & Chimichangas', image: '/la-hacienda/category-burritos.svg' },
      { label: 'Tacos & Salsa', image: '/la-hacienda/category-tacos.svg' },
      { label: 'Tortas & Specials', image: '/la-hacienda/category-tortas.svg' },
    ],
  },

  bigHeadline: 'Browse tacos, burritos, tortas, hours, and next steps before you head over.',

  featured: [
    {
      eyebrow: 'Top Taco Picks',
      side: 'left' as const,
      image: '/la-hacienda/featured-tacos.svg',
      imageAlt: 'Taco favorites poster',
      items: [
        { name: 'Carne Asada Taco', desc: 'Broiled skirt steak and one of the clearest taco favorites.', price: '$3.95' },
        { name: 'Carnitas Taco', desc: 'A regular favorite guests keep coming back for.', price: '$3.95' },
        { name: 'Al Pastor Taco', desc: 'A classic pick alongside carne asada, carnitas, and chorizo.', price: '$3.95' },
        { name: 'Chile Relleno Taco', desc: 'Stuffed pepper with beans, rice, lettuce, and tomatoes.', price: '$4.00' },
      ],
    },
    {
      eyebrow: 'Burritos, Tortas, Specials',
      side: 'right' as const,
      image: '/la-hacienda/featured-specials.svg',
      imageAlt: 'Burritos and tortas poster',
      items: [
        { name: 'Regular Burrito', desc: 'Giant flour tortilla with rice, beans, lettuce, cheese, and choice of protein.', price: '$8.99' },
        { name: 'Burrito Combination', desc: 'Two-meat burrito for guests who want a bigger order.', price: '$9.99' },
        { name: 'Cubana Torta', desc: 'Breaded steak, ham, chorizo, eggs, and no lettuce.', price: '$12.00' },
        { name: 'Everyday Special', desc: 'Two regular tacos or one regular burrito with fries and a canned drink.', price: '$11.75' },
      ],
    },
  ],

  testimonial: {
    eyebrow: 'What Regulars Say',
    quote:
      'La Hacienda already has what neighborhood restaurants are built on: generous portions, fast takeout, friendly service, and regulars who have been coming back for years.',
    attribution: {
      role: 'Local review themes',
      name: 'Regulars, takeout, tacos, and salsa',
    },
    chefImage: '/la-hacienda/review-proof.svg',
    chefAlt: 'La Hacienda review highlights poster',
  },

  blog: {
    eyebrow: 'Plan Your Visit',
    title: 'Everything guests need before they head over',
    posts: [
      {
        id: 'canva-menu',
        date: 'Menu',
        title: 'Open the full menu when you want more than the highlights.',
        image: '/la-hacienda/post-canva.svg',
        href: 'https://www.canva.com/design/DAFiva54Na0/0FUdTRi1uYaiwKx25OqRew/view',
      },
      {
        id: 'google-reviews',
        date: 'Favorites',
        title: 'Local reviewers keep pointing to tacos, burritos, salsa, and quick service.',
        image: '/la-hacienda/post-reviews.svg',
        href: '/about',
      },
      {
        id: 'hours-order',
        date: 'Visit',
        title: 'Call, get directions, check hours, or use the online order link.',
        image: '/la-hacienda/post-hours.svg',
        href: '/contact',
      },
    ],
  },

  timelessFooter: {
    image: '/la-hacienda/footer-band.svg',
    title: 'Call La Hacienda, get directions, browse the menu, or start an online order.',
  },

  about: {
    hero: {
      title: 'What locals already love about La Hacienda',
      subtitle: 'A warm, simple guide to the favorites, hours, address, and next steps guests actually need.',
    },
    immerse: {
      eyebrow: 'East Dundee regulars',
      title: 'Locals point to the same dishes and service strengths over and over.',
      body:
        'Local guest notes are consistent: burritos, tortas, steak tacos, carnitas tacos, al pastor, chimichangas, pico, green salsa, chips and salsa, fajitas, flautas, and horchata show up alongside quick phone orders, kind service, and regulars who have stayed loyal for years.',
      statBig: '530',
      statLabel: 'Google reviews from local guests',
      chefImage: '/la-hacienda/about-proof.svg',
      chefName: 'Local favorite themes',
      chefRole: 'Tacos, burritos, salsa, pickup',
    },
    journey: {
      eyebrow: 'Why It Matters',
      title: 'The repeat-customer story is already visible in public reviews.',
      body:
        'Instead of making guests hunt, the page organizes the strongest repeat patterns people mention: loyalty, speed, portions, and salsa-forward flavor.',
      milestones: [
        { year: '25+', title: 'Longtime regulars keep coming back', body: 'Guests describe years of repeat visits, quick pickup, and familiar favorites that make La Hacienda feel like a local standby.' },
        { year: 'FAST', title: 'Takeout speed keeps getting called out', body: 'Phone orders, fast carryout, and neat packaging appear across local guest comments.' },
        { year: 'BIG', title: 'Portion value is part of the reputation', body: 'Reviewers repeatedly describe burritos, chimichangas, and combo dinners as generous and satisfying.' },
        { year: 'GREEN', title: 'Salsa, pico, and green sauce are part of the identity', body: 'Green salsa, pico de gallo, chips and salsa, and flavor-forward taco toppings show up again and again in local guest comments.' },
      ],
    },
    hours: {
      eyebrow: 'Hours for your visit',
      title: 'A simple daily schedule makes planning pickup or dinner easy.',
      times: [
        { day: 'Sunday', time: '10:00 am – 9:00 pm' },
        { day: 'Monday – Thursday', time: '10:00 am – 9:00 pm' },
        { day: 'Friday – Saturday', time: '10:00 am – 10:00 pm' },
      ],
      cta: { label: 'Get Directions', href: 'https://www.google.com/maps/dir/?api=1&destination=411+E+Main+St,+East+Dundee,+IL+60118' },
      image: '/la-hacienda/hours-board.svg',
    },
    chefs: {
      eyebrow: 'Why guests return',
      title: 'Fast pickup, friendly service, and regular Mexican favorites',
      team: [
        { name: 'Fast Takeout', role: 'Phone orders and pickup praised in reviews', image: '/la-hacienda/card-fast.svg' },
        { name: 'Friendly Service', role: 'Kind, attentive, longtime local hospitality', image: '/la-hacienda/card-service.svg' },
        { name: 'Regular Favorites', role: 'Tacos, burritos, tortas, salsa, and fajitas', image: '/la-hacienda/card-regulars.svg' },
      ],
    },
    values: {
      eyebrow: 'Plan your meal',
      title: 'Find tacos, tortas, directions, and pickup details without digging.',
      items: [
        { title: 'Menu in easy reach', body: 'Put menu highlights, the full menu, and favorite categories where guests can find them fast.' },
        { title: 'Simple action flow', body: 'Keep call, directions, menu, and order online available from every important page.' },
        { title: 'Grounded trust', body: 'Talk about what guests actually praise: portions, speed, friendly service, and familiar favorites.' },
      ],
    },
  },

  menuPage: {
    hero: {
      title: 'Menu highlights and popular favorites',
      subtitle: 'Start with tacos, burritos, tortas, specials, and the favorites local guests mention most. Prices can change, so call to confirm tonight’s menu.',
    },
    categories: [
      {
        eyebrow: 'Tacos',
        title: 'Street taco standouts',
        items: [
          { name: 'Carne Asada', desc: 'Broiled skirt steak.', price: '$3.95' },
          { name: 'Carnitas', desc: 'Fried pork.', price: '$3.95' },
          { name: 'Chorizo', desc: 'Mexican sausage.', price: '$3.95' },
          { name: 'Al Pastor', desc: 'Roasted pork.', price: '$3.95' },
        ],
      },
      {
        eyebrow: 'Burritos',
        title: 'Large-format favorites',
        items: [
          { name: 'Regular Burrito', desc: 'Rice, beans, lettuce, cheese, and your choice of protein.', price: '$8.99' },
          { name: 'Burrito Combination', desc: 'Two-meat combination burrito.', price: '$9.99' },
          { name: 'Huevos con Carne Asada', desc: 'Eggs and steak burrito variation.', price: '$8.99' },
          { name: 'Burrito con Papas', desc: 'Potato burrito.', price: '$8.25' },
        ],
      },
      {
        eyebrow: 'Tortas',
        title: 'Mexican-style sandwiches',
        items: [
          { name: 'Chorizo con Huevo', desc: 'Mexican sausage with eggs.', price: '$9.50' },
          { name: 'Carne Asada con Huevo', desc: 'Steak with eggs.', price: '$9.50' },
          { name: 'Pechuga a la Plancha', desc: 'Chicken breast on the griddle.', price: '$9.99' },
          { name: 'Cubana', desc: 'Breaded steak, ham, chorizo, eggs, and no lettuce.', price: '$12.00' },
        ],
      },
      {
        eyebrow: 'Specials',
        title: 'Specials and bigger plates',
        items: [
          { name: 'Everyday Special', desc: 'Two regular tacos or one regular burrito with fries and a canned drink.', price: '$11.75' },
          { name: 'Monday Special', desc: 'Two gorditas with rice, beans, and a regular drink.', price: '$12.50' },
          { name: 'Thursday Special', desc: 'Three regular tortas.', price: '$19.99' },
          { name: 'Parrillada', desc: 'Shrimp, chicken, and steak platter for two or three with quesadillas and guacamole.', price: 'See menu' },
        ],
      },
    ],
    testimonials: {
      eyebrow: 'Local Guest Notes',
      title: 'Why people come back',
      entries: [
        {
          stars: 5,
          quote: 'Rey Cardenas calls burritos and tortas a favorite pick-me-up and specifically points to the green salsa.',
          name: 'Rey Cardenas',
          role: 'Google review, 4-year regular',
          avatar: '/la-hacienda/reviewer-rey.svg',
        },
        {
          stars: 5,
          quote: 'Tiffany V says service was great and quick, and the asada and carnitas tacos were delicious.',
          name: 'Tiffany V',
          role: 'Google review, dinner visit',
          avatar: '/la-hacienda/reviewer-tiffany.svg',
        },
        {
          stars: 5,
          quote: 'Kick describes 25 years of visits and calls out chips and salsa, al pastor, pico de gallo, and consistency.',
          name: 'Kick',
          role: 'Google review, 25-year regular',
          avatar: '/la-hacienda/reviewer-kick.svg',
        },
      ],
    },
    reservation: {
      eyebrow: 'Take Action',
      title: 'Call, map, menu, or order in one tap',
      image: '/la-hacienda/action-board.svg',
    },
  },

  newsPage: {
    hero: {
      title: 'Menu notes, local favorites, and easy next steps',
      subtitle: 'A quick guide to what people order, how to get there, and the easiest ways to plan pickup.',
    },
  },

  contactPage: {
    hero: {
      title: 'Call, order, or head straight to East Dundee',
      subtitle: 'Call, check the menu, get directions, or order online without hunting around.',
    },
    photos: [
      '/la-hacienda/contact-menu.svg',
      '/la-hacienda/contact-location.svg',
      '/la-hacienda/contact-call.svg',
    ],
    headline: {
      eyebrow: 'Call, menu, map, order',
      title: 'Need the fastest next step? Call for pickup questions, open the menu, map the drive, or start an online order.',
    },
    infoCards: [
      {
        icon: 'map',
        label: 'Visit La Hacienda',
        lines: ['411 E Main St', 'East Dundee, IL 60118', 'Sun–Thu 10 am–9 pm', 'Fri–Sat 10 am–10 pm'],
      },
      {
        icon: 'phone',
        label: 'Call or Order',
        lines: ['(847) 426-0506', 'Order online option available'],
      },
    ],
    form: {
      eyebrow: 'Start Here',
      title: 'Choose the fastest path for your visit',
    },
  },
};
