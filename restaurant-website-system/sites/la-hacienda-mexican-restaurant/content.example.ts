export const content = {
  brand: {
    name: 'La Hacienda Mexican Restaurant',
    tagline: 'Neighborhood Mexican favorites with fast pickup and longtime regulars',
    description:
      'La Hacienda Mexican Restaurant in East Dundee serves source-backed menu favorites including tacos, burritos, tortas, chimichangas, fajitas, and horchata. Public proof confirms the address, phone, hours, and strong local review volume.',
    since: 'Public proof captured May 5, 2026',
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
      label: 'Pages',
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
    title: 'A real hometown landing page for La Hacienda, not just a Canva menu.',
    subtitle:
      'Built from public proof around 411 E Main St: 4.3 from 530 Google reviews, source-backed hours, and menu favorites locals keep calling out.',
    cta: { label: 'See Menu Highlights', href: '/menu' },
    plateImage: '/la-hacienda/hero-review-board.svg',
    plateAlt: 'La Hacienda review-backed preview panel',
  },

  mission: {
    eyebrow: 'Why This Works',
    title: 'Warm, fast, familiar, and easy to act on.',
    body:
      'Public reviews repeat the same story: burritos, tacos, tortas, chimichangas, fajitas, pico, green salsa, chips and salsa, horchata, tamales, and enchiladas keep people coming back. This preview turns that proof into a proper call, directions, menu, and order flow.',
    cta: { label: 'Call La Hacienda', href: 'tel:+18474260506' },
    phone: '(847) 426-0506',
    image: '/la-hacienda/current-site-gap.svg',
    imageAlt: 'Poster contrasting Canva menu with a conversion website',
  },

  categoryStrip: {
    eyebrow: 'Review-Backed Favorites',
    title: 'The strongest menu signals are already there, they just need a better home.',
    categories: [
      { label: 'Burritos & Chimichangas', image: '/la-hacienda/category-burritos.svg' },
      { label: 'Tacos & Salsa', image: '/la-hacienda/category-tacos.svg' },
      { label: 'Tortas & Specials', image: '/la-hacienda/category-tortas.svg' },
    ],
  },

  bigHeadline: 'Give East Dundee one clean place to call, get directions, browse the menu, and order.',

  featured: [
    {
      eyebrow: 'Top Taco Picks',
      side: 'left' as const,
      image: '/la-hacienda/featured-tacos.svg',
      imageAlt: 'Taco favorites poster',
      items: [
        { name: 'Carne Asada Taco', desc: 'Broiled skirt steak, repeatedly mentioned in review proof.', price: '$3.95' },
        { name: 'Carnitas Taco', desc: 'A regular favorite in the highest-sort Google packet.', price: '$3.95' },
        { name: 'Al Pastor Taco', desc: 'Corroborated in review packets and directory menu coverage.', price: '$3.95' },
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
        { name: 'Burrito Combination', desc: 'Two-meat combination burrito from the Roost menu corpus.', price: '$9.99' },
        { name: 'Cubana Torta', desc: 'Breaded steak, ham, chorizo, eggs, and no lettuce.', price: '$12.00' },
        { name: 'Everyday Special', desc: 'Two regular tacos or one regular burrito with fries and a canned drink.', price: '$11.75' },
      ],
    },
  ],

  testimonial: {
    eyebrow: 'What Regulars Say',
    quote:
      'La Hacienda already has the kind of local proof most restaurants want: generous portions, fast takeout, friendly service, and people who have been coming back for years.',
    attribution: {
      role: 'Built from Google Highest reviews, May 5, 2026',
      name: '30 written reviews captured',
    },
    chefImage: '/la-hacienda/review-proof.svg',
    chefAlt: 'Review packet proof poster',
  },

  blog: {
    eyebrow: 'Public Proof',
    title: 'The pages this preview is built around',
    posts: [
      {
        id: 'canva-menu',
        date: 'May 5, 2026',
        title: 'The current website path still behaves like a Canva menu deck, not a proper homepage.',
        image: '/la-hacienda/post-canva.svg',
        href: 'https://www.canva.com/design/DAFiva54Na0/0FUdTRi1uYaiwKx25OqRew/view',
      },
      {
        id: 'google-reviews',
        date: 'May 5, 2026',
        title: 'Google proof currently shows 4.3 stars from 530 reviews, with strong taco, burrito, and salsa signals.',
        image: '/la-hacienda/post-reviews.svg',
        href: '/about',
      },
      {
        id: 'hours-order',
        date: 'May 5, 2026',
        title: 'Restaurantji corroborates the phone number, hours, Canva website link, and an order-online path.',
        image: '/la-hacienda/post-hours.svg',
        href: '/contact',
      },
    ],
  },

  timelessFooter: {
    image: '/la-hacienda/footer-band.svg',
    title: 'Call, get directions, browse the menu, and order with less friction.',
  },

  about: {
    hero: {
      title: 'What the public proof already says about La Hacienda',
      subtitle: 'This preview stays inside source-backed facts instead of inventing a glossy restaurant story.',
    },
    immerse: {
      eyebrow: 'Review Signal',
      title: 'Locals point to the same dishes and the same service strengths over and over.',
      body:
        'The highest-sort review packet is consistent: burritos, tortas, steak tacos, carnitas tacos, al pastor, chimichangas, pico, green salsa, chips and salsa, fajitas, flautas, and horchata show up alongside quick phone orders, kind service, and regulars who have stayed loyal for years.',
      statBig: '530',
      statLabel: 'Google reviews observed on May 5, 2026',
      chefImage: '/la-hacienda/about-proof.svg',
      chefName: 'Highest-sort review packet',
      chefRole: 'Local evidence, not guesswork',
    },
    journey: {
      eyebrow: 'Why It Matters',
      title: 'The repeat-customer story is already visible in public reviews.',
      body:
        'Instead of inventing a founder timeline, this preview uses the strongest repeat patterns from the captured review packet to frame what guests should expect.',
      milestones: [
        { year: '25+', title: 'Years of loyalty show up in reviews', body: 'Multiple reviewers describe 10, 25, or more years of repeat visits, which is a stronger trust signal than generic marketing copy.' },
        { year: 'FAST', title: 'Takeout speed keeps getting called out', body: 'Phone orders, fast carryout, and neat packaging appear across the Google evidence packet.' },
        { year: 'BIG', title: 'Portion value is part of the reputation', body: 'Reviewers repeatedly describe burritos, chimichangas, and combo dinners as generous and satisfying.' },
        { year: 'GREEN', title: 'Salsa, pico, and green sauce are part of the identity', body: 'Green salsa, pico de gallo, chips and salsa, and flavor-forward taco toppings show up again and again in the written proof.' },
      ],
    },
    hours: {
      eyebrow: 'Source-Backed Hours',
      title: 'Restaurantji and Roost both corroborate a simple weekly schedule.',
      times: [
        { day: 'Sunday', time: '10:00 am – 9:00 pm' },
        { day: 'Monday – Thursday', time: '10:00 am – 9:00 pm' },
        { day: 'Friday – Saturday', time: '10:00 am – 10:00 pm' },
      ],
      cta: { label: 'Get Directions', href: 'https://www.google.com/maps/dir/?api=1&destination=411+E+Main+St,+East+Dundee,+IL+60118' },
      image: '/la-hacienda/hours-board.svg',
    },
    chefs: {
      eyebrow: 'What Guests Remember',
      title: 'Three strengths this homepage can sell clearly',
      team: [
        { name: 'Fast Takeout', role: 'Phone orders and pickup praised in reviews', image: '/la-hacienda/card-fast.svg' },
        { name: 'Friendly Service', role: 'Kind, attentive, longtime local hospitality', image: '/la-hacienda/card-service.svg' },
        { name: 'Regular Favorites', role: 'Tacos, burritos, tortas, salsa, and fajitas', image: '/la-hacienda/card-regulars.svg' },
      ],
    },
    values: {
      eyebrow: 'Preview Priorities',
      title: 'This first build is trying to solve the exact conversion gaps the current setup leaves open.',
      items: [
        { title: 'Clear menu path', body: 'Bring the Canva menu and strongest menu anchors into a cleaner first-party experience.' },
        { title: 'Simple action flow', body: 'Keep the primary actions focused on call, directions, menu, and order online.' },
        { title: 'Grounded trust', body: 'Use the real review packet and directory proof instead of unsupported claims about sourcing, chefs, or events.' },
      ],
    },
  },

  menuPage: {
    hero: {
      title: 'Menu highlights pulled from public menu proof',
      subtitle: 'Item names and listed prices below come from captured Canva and Roost menu evidence where available.',
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
        title: 'Canva menu callouts',
        items: [
          { name: 'Everyday Special', desc: 'Two regular tacos or one regular burrito with fries and a canned drink.', price: '$11.75' },
          { name: 'Monday Special', desc: 'Two gorditas with rice, beans, and a regular drink.', price: '$12.50' },
          { name: 'Thursday Special', desc: 'Three regular tortas.', price: '$19.99' },
          { name: 'Parrillada', desc: 'Shrimp, chicken, and steak platter for two or three with quesadillas and guacamole.', price: 'See menu' },
        ],
      },
    ],
    testimonials: {
      eyebrow: 'Google Review Packet',
      title: 'Three quick proof points from locals',
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
      title: 'Use the links guests actually need',
      image: '/la-hacienda/action-board.svg',
    },
  },

  newsPage: {
    hero: {
      title: 'Current proof, menu signals, and route notes',
      subtitle: 'A warm neighborhood Mexican build still needs to stay inside the evidence.',
    },
  },

  contactPage: {
    hero: {
      title: 'Call, order, or head straight to East Dundee',
      subtitle: 'The contact page should reduce friction, not make people hunt through a Canva deck.',
    },
    photos: [
      '/la-hacienda/contact-menu.svg',
      '/la-hacienda/contact-location.svg',
      '/la-hacienda/contact-call.svg',
    ],
    headline: {
      eyebrow: 'Easy Next Step',
      title: 'La Hacienda does not need a complicated funnel. It needs a clean menu path, one-tap calling, simple directions, and a source-backed order link.',
    },
    infoCards: [
      {
        icon: 'map',
        label: 'Visit La Hacienda',
        lines: ['411 E Main St', 'East Dundee, IL 60118', 'Source-backed by Google, Restaurantji, and Roost'],
      },
      {
        icon: 'phone',
        label: 'Call or Order',
        lines: ['(847) 426-0506', 'Order Online link captured from Restaurantji'],
      },
    ],
    form: {
      eyebrow: 'Start Here',
      title: 'Choose the fastest path for your visit',
    },
  },
};
