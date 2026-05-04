const directionsHref =
  'https://www.google.com/maps/dir/?api=1&destination=108%20Cass%20St%2C%20Woodstock%2C%20IL%2060098';
const orderHref =
  'https://www.doordash.com/en/store/marys-mexican-grill-woodstock-28404782/';

export const content = {
  brand: {
    name: "Mary's Mexican Grill",
    tagline: 'Mexican grill on Woodstock Square',
    description:
      'A casual Mexican grill at 108 Cass St known for tacos, tamales, ceviche, fresh salsa, and friendly service.',
    since: 'Neighborhood favorite on Woodstock Square',
    address: '108 Cass St, Woodstock, IL 60098',
    phone: '(815) 337-2303',
    phoneHref: 'tel:+18153372303',
    email: '',
    instagram: '',
    social: [],
    hoursConfig: {
      timezone: 'America/Chicago',
      ranges: [
        { day: 0 as const, open: '10:00', close: '20:00' },
        { day: 1 as const, open: '10:00', close: '21:00' },
        { day: 2 as const, open: '10:00', close: '21:00' },
        { day: 3 as const, open: '10:00', close: '21:00' },
        { day: 4 as const, open: '10:00', close: '21:00' },
        { day: 5 as const, open: '10:00', close: '21:00' },
        { day: 6 as const, open: '10:00', close: '21:00' },
      ],
      closures: [],
    },
    geo: { lat: 0, lng: 0 },
    utilityActions: [
      { label: 'Menu', href: '/menu' },
      { label: 'Order', href: orderHref },
      { label: 'Call', href: 'tel:+18153372303' },
      { label: 'Directions', href: directionsHref },
    ],
  },

  nav: {
    primary: [
      { label: 'Menu', href: '/menu' },
      { label: 'About', href: '/about' },
      { label: 'Visit', href: '/contact' },
    ],
    dropdown: {
      label: 'Explore',
      items: [
        { label: 'Home', href: '/' },
        { label: 'Menu', href: '/menu' },
        { label: 'About', href: '/about' },
        { label: 'Highlights', href: '/news' },
        { label: 'Visit', href: '/contact' },
      ],
    },
    cta: { label: 'View Menu', href: '/menu' },
  },

  hero: {
    eyebrow: 'Woodstock Square Mexican Grill',
    title: 'Tacos, tamales, and fresh salsa right on Woodstock Square.',
    subtitle:
      "Mary's Mexican Grill is a casual Woodstock Square stop for tacos, tamales, ceviche, fresh salsa, and an easy choice for lunch, dinner, takeout, or a quick walk over tonight.",
    cta: { label: 'View Menu', href: '/menu' },
    secondaryCta: { label: 'Order on DoorDash', href: orderHref },
    metaItems: [
      '4.8 Google rating',
      '600+ Google reviews',
      '108 Cass St, Woodstock',
      'Open daily on the Square',
    ],
    quickActions: [
      { label: 'View menu', detail: 'Tacos, tortas, tamales, and more', href: '/menu' },
      { label: 'Order online', detail: 'DoorDash pickup and delivery', href: orderHref },
      { label: "Call Mary's", detail: '(815) 337-2303', href: 'tel:+18153372303' },
      { label: 'Get directions', detail: 'Historic Woodstock Square', href: directionsHref },
    ],
    note:
      'Call (815) 337-2303 for the fastest answer on takeout, hours, and same-day plans.',
    plateImage: '/assets/marys/hero-tacos.svg',
    plateAlt: "Mary's hero illustration with tacos, salsa, and Woodstock Square cues",
  },

  mission: {
    eyebrow: 'Why locals come back',
    title: 'Fresh, friendly, and easy to come back to.',
    body:
      "Reviews keep circling the same strengths: authentic tacos, fresh chips, standout sauces, attentive service, and a location that feels built into a day around the Square.",
    cta: { label: 'See the menu favorites', href: '/menu#favorites' },
    phone: '(815) 337-2303',
    image: '/assets/marys/story-square.svg',
    imageAlt: "Illustrated storefront and plate for Mary's Mexican Grill",
  },

  categoryStrip: {
    eyebrow: 'Menu highlights',
    title: 'Start with the dishes guests call out most.',
    categories: [
      { label: 'Pastor, carnitas, and steak tacos', image: '/assets/marys/card-tacos.svg' },
      { label: 'Tamales, mole, and enchiladas', image: '/assets/marys/card-tamales.svg' },
      { label: 'Ceviche, shrimp, and house salsa', image: '/assets/marys/card-ceviche.svg' },
    ],
  },

  bigHeadline:
    "From first click to first bite, Mary's should feel easy to choose.",

  reviewCarousel: {
    eyebrow: 'Guest highlights',
    title: 'What guests keep mentioning after a visit',
    stats: [
      { value: '4.8', label: 'Google rating' },
      { value: '600+', label: 'Google reviews' },
      { value: '30', label: 'recent guest notes checked' },
    ],
    themes: [
      'Historic Square stop',
      'Fresh chips and salsa',
      'Friendly service',
      'Affordable portions',
      'Repeat-visit tacos and tamales',
    ],
    reviews: [
      { quote: 'A lovely little Mexican restaurant right on the historic Woodstock Square.', platform: 'Google Reviews' },
      { quote: 'The salsas were super good and the red one was the perfect amount of spicy.', platform: 'Google Reviews' },
      { quote: 'Best mole I\'ve had. Neat to find out it was the building used in the Groundhog Day movie.', platform: 'Google Reviews' },
      { quote: 'Great spot on the square to crush tacos and micheladas.', platform: 'Google Reviews' },
      { quote: 'Torta Mary absolutely delicious! So much to eat!', platform: 'Google Reviews' },
      { quote: 'The chips are really good / extra flakey, which holds the salsa ready well.', platform: 'Google Reviews' },
      { quote: 'The steak and pastor tacos were delicious! The prices are good.', platform: 'Google Reviews' },
      { quote: 'The red salsa was a perfect burst of spice on my taco dinner.', platform: 'Google Reviews' },
    ],
  },

  featured: [
    {
      eyebrow: 'Most-mentioned orders',
      title: 'Guest favorites around the menu',
      side: 'left' as const,
      image: '/assets/marys/featured-favorites.svg',
      imageAlt: "Illustration for Mary's tacos, torta, and tamales",
      items: [
        {
          name: 'Tacos al pastor',
          desc: 'Repeatedly called out as a standout, with juicy pastor and strong salsa rojo.',
          price: 'Guest favorite',
        },
        {
          name: 'Carnitas and steak tacos',
          desc: 'Authentic flavor, fair prices, and generous portions make these easy repeat orders.',
          price: 'Local go-to',
        },
        {
          name: 'Torta Mary and steak torta',
          desc: 'Named directly in reviews and carryout snippets as a filling, specific order path.',
          price: 'Guest pick',
        },
        {
          name: 'Tamales and mole enchiladas',
          desc: 'A comfort-food pairing guests connect with value, flavor, and return visits.',
          price: 'Worth repeating',
        },
      ],
    },
    {
      eyebrow: 'Seafood, sauces, and sides',
      title: 'The details that set the place apart',
      side: 'right' as const,
      image: '/assets/marys/featured-sauces.svg',
      imageAlt: "Illustration for Mary's ceviche, guacamole, and salsa service",
      items: [
        {
          name: 'Ceviche and grilled shrimp',
          desc: 'A fresh seafood choice that gives the menu more range than the usual taco order.',
          price: 'Fresh option',
        },
        {
          name: 'Homemade guacamole',
          desc: 'A natural starter when the table wants chips, salsa, and something fresh to share.',
          price: 'Warm service',
        },
        {
          name: 'Fresh chips and salsa',
          desc: 'Guests keep pointing to the chips, red salsa, and house sauces as repeat-visit fuel.',
          price: 'Repeat order',
        },
        {
          name: 'Horchata and margaritas',
          desc: 'Classic drinks that round out a quick lunch, dinner, or takeout plan.',
          price: 'Add-on draw',
        },
      ],
    },
  ],

  testimonial: {
    eyebrow: 'Guest favorite',
    quote:
      "We had a great experience at Mary's. Our waitress was super friendly, playful, and attentive, which made the whole meal even more enjoyable.",
    attribution: {
      role: 'Guest highlight',
      name: 'Google Reviews',
    },
    chefImage: '/assets/marys/review-service.svg',
    chefAlt: "Mary's service and hospitality illustration",
  },

  blog: {
    eyebrow: 'Why guests return',
    title: 'What stands out once people try Mary’s',
    posts: [
      {
        id: 'square-draw',
        date: 'Woodstock Square',
        title: 'Right on the Square, with an easy stop for lunch, dinner, or a walk-through visit.',
        image: '/assets/marys/proof-square.svg',
        href: '/contact',
      },
      {
        id: 'service-proof',
        date: 'Warm service',
        title: 'Attentive service keeps showing up alongside the food in guest reviews.',
        image: '/assets/marys/proof-service.svg',
        href: '/about',
      },
      {
        id: 'food-specificity',
        date: 'House favorites',
        title: 'Tacos, tamales, mole, ceviche, guacamole, and salsa give the menu its shape.',
        image: '/assets/marys/proof-food.svg',
        href: '/menu',
      },
      {
        id: 'value-speed',
        date: 'Casual comfort',
        title: 'Guests keep mentioning modest prices, quick service, and a clean welcoming room.',
        image: '/assets/marys/proof-value.svg',
        href: '/about',
      },
      {
        id: 'pickup-demand',
        date: 'Takeout demand',
        title: 'Pickup and delivery already matter here, especially for tacos, burritos, and tamales.',
        image: '/assets/marys/proof-order.svg',
        href: '/menu#plan-visit',
      },
      {
        id: 'phone-conflict',
        date: 'Call first',
        title: 'Call ahead for takeout questions, quick timing, and same-day plans.',
        image: '/assets/marys/proof-phone.svg',
        href: '/contact',
      },
    ],
  },

  timelessFooter: {
    image: '/assets/marys/footer-night.svg',
    title: 'Menu-first, order-ready, and square-local.',
  },

  about: {
    hero: {
      title: 'A neighborhood Mexican grill right on Cass Street.',
      subtitle:
        "Mary's keeps it simple in the best way: recognizable favorites, friendly service, posted hours, and a location that makes it easy to stop in while you're on Woodstock Square.",
    },
    immerse: {
      eyebrow: 'Why it stands out',
      title: "Mary's feels easy to come back to.",
      body:
        'Guests talk about fair prices, fresh food, welcoming service, and the kind of tacos, tamales, salsa, and mole that turn a first stop into a regular routine.',
      statBig: '4.8',
      statLabel: 'Google rating',
      chefImage: '/assets/marys/avatar-proof.svg',
      chefName: '600+ Google reviews',
      chefRole: '4.8-star local favorite',
    },
    journey: {
      eyebrow: 'How guests use it',
      title: 'Built for lunch, dinner, takeout, and repeat visits.',
      body:
        "Mary's fits the way people actually eat around the Square: walk in, grab lunch, pick up dinner, bring the family, and come back when the taco craving hits again.",
      milestones: [
        {
          year: 'Walk in',
          title: 'Woodstock Square stop',
          body: 'Address and directions stay easy to find for town-square foot traffic.',
        },
        {
          year: 'Order',
          title: 'Menu and pickup intent',
          body: 'Tacos, burritos, tamales, and chimichangas are easy takeout-friendly choices.',
        },
        {
          year: 'Lunch',
          title: 'Quick, friendly service',
          body: 'Reviews repeatedly praise speed, attentiveness, and a clean welcoming room.',
        },
        {
          year: 'Repeat',
          title: 'Local favorite status',
          body: 'Guests describe Marys as their go-to in Woodstock, not a one-time novelty stop.',
        },
      ],
    },
    hours: {
      eyebrow: 'Posted hours',
      title: 'Open daily on Woodstock Square.',
      times: [
        { day: 'Monday', time: '10:00 am - 9:00 pm' },
        { day: 'Tuesday', time: '10:00 am - 9:00 pm' },
        { day: 'Wednesday', time: '10:00 am - 9:00 pm' },
        { day: 'Thursday', time: '10:00 am - 9:00 pm' },
        { day: 'Friday', time: '10:00 am - 9:00 pm' },
        { day: 'Saturday', time: '10:00 am - 9:00 pm' },
        { day: 'Sunday', time: '10:00 am - 8:00 pm' },
      ],
      cta: { label: 'Get directions', href: directionsHref },
      image: '/assets/marys/hours-room.svg',
    },
    chefs: {
      eyebrow: 'Warm service',
      title: 'Friendly hospitality guests remember',
      team: [
        {
          name: 'Martha',
          role: 'Repeatedly praised for friendly, attentive service',
          image: '/assets/marys/team-martha.svg',
        },
        {
          name: 'Laura',
          role: 'Called out for making first visits feel memorable',
          image: '/assets/marys/team-laura.svg',
        },
        {
          name: 'Dining room team',
          role: 'Fast, welcoming service across dine-in and takeout mentions',
          image: '/assets/marys/team-room.svg',
        },
      ],
    },
    values: {
      eyebrow: "What makes it feel like Mary's",
      title: "Mary's identity comes through in the food, the pace, and the welcome.",
      items: [
        {
          title: 'Food-specific copy',
          body: 'Name the tacos, tamales, mole, ceviche, guacamole, and salsa instead of using generic category language.',
        },
        {
          title: 'Casual value register',
          body: 'Keep the tone warm, direct, and affordable instead of pushing a premium reservation story.',
        },
        {
          title: 'Fast conversion',
          body: 'Menu, order, call, and directions should stay within thumb reach on mobile.',
        },
      ],
    },
  },

  menuPage: {
    hero: {
      title: 'Menu highlights for tacos, tamales, salsa, and more',
      subtitle:
        "Start with the dishes guests mention most, then use the menu, call, or DoorDash links to plan the easiest way to order tonight.",
    },
    categories: [
      {
        eyebrow: 'Tacos and tortas',
        title: 'Street favorites',
        items: [
          { name: 'Tacos al pastor', desc: 'Frequently praised for bold flavor and a strong salsa pairing.', price: 'Guest favorite' },
          { name: 'Steak tacos', desc: 'Named alongside pastor and carnitas as a repeat order.', price: 'Guest favorite' },
          { name: 'Carnitas taco', desc: 'Guests specifically mention authentic flavor and return intent.', price: 'Popular pick' },
          { name: 'Torta Mary', desc: 'Called out by name as a filling house sandwich order.', price: 'House favorite' },
        ],
      },
      {
        eyebrow: 'Comfort plates',
        title: 'Tamales, mole, and enchiladas',
        items: [
          { name: 'Tamales', desc: 'A cozy, value-friendly favorite when you want something beyond tacos.', price: 'Comfort favorite' },
          { name: 'Mole enchiladas', desc: 'A recurring highlight and one of the clearest flavor signatures on the menu.', price: 'House favorite' },
          { name: 'Enchiladas verdes', desc: 'A familiar plate that helps round out the comfort-food side of the menu.', price: 'Menu highlight' },
          { name: 'Enchiladas suizas', desc: 'Another easy choice when you want a sauced, satisfying plate.', price: 'Menu highlight' },
        ],
      },
      {
        eyebrow: 'Seafood and grill',
        title: 'Shrimp, ceviche, and larger plates',
        items: [
          { name: 'Ceviche', desc: 'A bright seafood option that broadens the menu beyond tacos and burritos.', price: 'Fresh option' },
          { name: 'Grilled shrimp', desc: 'A flexible plate for seafood cravings, family visits, or a fuller dinner.', price: 'Guest pick' },
          { name: 'Tampiquena', desc: 'A larger plate that gives first-time guests a reason to come back.', price: 'Guest pick' },
          { name: 'Camarones a La Mexicana', desc: 'A strong shrimp option for guests looking past the usual taco order.', price: 'Menu highlight' },
        ],
      },
      {
        eyebrow: 'Burritos and house extras',
        title: 'Carryout-ready picks',
        items: [
          { name: 'Pork burrito', desc: 'Easy to picture as a filling takeout order.', price: 'Takeout favorite' },
          { name: 'Burritos suizos', desc: 'A hearty option when you want something saucy, filling, and easy to share.', price: 'Menu highlight' },
          { name: 'Pastor chimichanga', desc: 'Praised for flavor and portion in guest comments.', price: 'Big appetite pick' },
          { name: 'Horchata', desc: 'A classic drink pairing for lunch, dinner, or carryout.', price: 'Classic sip' },
        ],
      },
    ],
    testimonials: {
      eyebrow: 'Guest favorites',
      title: 'Three quick reasons people come back hungry',
      entries: [
        {
          stars: 5,
          quote: 'The tacos al pastor were dynamite, a great spot on the square to crush tacos and micheladas.',
          label: 'Taco favorite',
          platform: 'Google Reviews',
        },
        {
          stars: 5,
          quote: 'The chips and salsa are dangerously addictive, the food comes out quick and fresh and hot.',
          label: 'Chips and salsa',
          platform: 'Google Reviews',
        },
        {
          stars: 5,
          quote: 'The steak and pastor tacos were delicious, the prices are good for the amount they serve.',
          label: 'Good value',
          platform: 'Google Reviews',
        },
      ],
    },
    reservation: {
      eyebrow: 'Guest planning',
      title: 'Choose the quickest real next step tonight',
      body:
        "Check the menu, place an order through DoorDash, call the dining room, or head over to Cass Street. The fastest path stays simple on purpose.",
      image: '/assets/marys/action-order.svg',
      actions: [
        { label: 'Order on DoorDash', href: orderHref, note: 'Pickup and delivery' },
        { label: "Call Mary's", href: 'tel:+18153372303', note: 'Main dining room phone' },
        { label: 'Get directions', href: directionsHref, note: '108 Cass St, Woodstock' },
        { label: 'Check hours and visit info', href: '/contact', note: 'Hours, phone, and directions' },
      ],
      footnote:
        'For the clearest response on timing, takeout, and daily details, call (815) 337-2303.',
    },
  },

  newsPage: {
    hero: {
      title: "Why guests keep coming back to Mary's",
      subtitle:
        'A few quick highlights from the food, service, and Woodstock Square setting that people mention again and again.',
    },
  },

  contactPage: {
    hero: {
      title: "Visit Mary's on Cass Street",
      subtitle:
        'Find the dining room, call ahead, check hours, or head straight to the Square for tacos, tamales, and a quick meal.',
    },
    photos: [
      '/assets/marys/contact-exterior.svg',
      '/assets/marys/contact-dining.svg',
      '/assets/marys/contact-pickup.svg',
    ],
    headline: {
      eyebrow: 'Visit and order',
      title: 'The practical details should feel as polished as the food.',
    },
    infoCards: [
      {
        icon: 'map',
        label: 'Visit the Square',
        lines: ['108 Cass St', 'Woodstock, IL 60098', 'Historic Woodstock Square'],
      },
      {
        icon: 'phone',
        label: "Call Mary's",
        lines: ['(815) 337-2303', 'Best number for takeout questions', 'Call for takeout and daily details'],
      },
      {
        icon: 'map',
        label: 'Hours and directions',
        lines: ['Mon-Sat: 10:00 am - 9:00 pm', 'Sunday: 10:00 am - 8:00 pm', 'Use Google Maps for the fastest route'],
        href: directionsHref,
        linkLabel: 'Get directions',
      },
    ],
    form: {
      eyebrow: 'Plan your stop',
      title: "Pick the easiest way to reach Mary's tonight.",
      body:
        'Call for current details, use DoorDash for third-party online ordering, or head straight to directions if you are already on your way.',
      actions: [
        { label: "Call Mary's", href: 'tel:+18153372303' },
        { label: 'Order on DoorDash', href: orderHref },
        { label: 'Get directions', href: directionsHref },
      ],
      footnote:
        'For the clearest response on timing, takeout, and daily details, call (815) 337-2303.',
    },
  },
};
