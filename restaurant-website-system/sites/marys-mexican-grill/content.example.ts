const directionsHref =
  'https://www.google.com/maps/dir/?api=1&destination=108%20Cass%20St%2C%20Woodstock%2C%20IL%2060098';
const orderHref =
  'https://www.doordash.com/en/store/marys-mexican-grill-woodstock-28404782/';

export const content = {
  brand: {
    name: "Mary's Mexican Grill",
    tagline: 'Mexican grill on Woodstock Square',
    description:
      "A casual Mexican grill at 108 Cass St with tacos, tamales, ceviche, fresh salsa, and strong 4.8-star public proof.",
    since: 'Neighborhood favorite with strong recent public proof',
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
        { label: 'Proof', href: '/news' },
        { label: 'Visit', href: '/contact' },
      ],
    },
    cta: { label: 'View Menu', href: '/menu' },
  },

  hero: {
    eyebrow: 'Woodstock Square Mexican Grill',
    title: "Tacos, tamales, and fresh salsa in downtown Woodstock.",
    subtitle:
      "Mary's Mexican Grill pairs a casual town-square location with 4.8-star public proof, warm service, and the dishes guests call out by name.",
    cta: { label: 'View Menu', href: '/menu' },
    secondaryCta: { label: 'Order on DoorDash', href: orderHref },
    metaItems: [
      '4.8 Google rating',
      '604 reviews captured May 4, 2026',
      '108 Cass St, Woodstock',
      'Open daily, public hours posted',
    ],
    plateImage: '/assets/marys/hero-tacos.svg',
    plateAlt: "Mary's preview hero illustration with tacos, salsa, and Woodstock Square cues",
  },

  mission: {
    eyebrow: 'Why locals come back',
    title: 'Casual, fast-moving, and specific about flavor.',
    body:
      "Public reviews keep returning to the same mix: authentic tacos, memorable sauces, fresh chips, friendly service, and a location that makes Mary's easy to choose after a walk around the Square.",
    cta: { label: 'See the menu favorites', href: '/menu#favorites' },
    phone: '(815) 337-2303',
    image: '/assets/marys/story-square.svg',
    imageAlt: 'Illustrated storefront and plate preview for Marys Mexican Grill',
  },

  categoryStrip: {
    eyebrow: 'Menu highlights',
    title: 'Built around the dishes guests actually mention.',
    categories: [
      { label: 'Pastor, carnitas, and steak tacos', image: '/assets/marys/card-tacos.svg' },
      { label: 'Tamales, mole, and enchiladas', image: '/assets/marys/card-tamales.svg' },
      { label: 'Ceviche, shrimp, and house salsa', image: '/assets/marys/card-ceviche.svg' },
    ],
  },

  bigHeadline:
    "A stronger first tap for Mary's means menu, order, call, and directions all show up before a guest ever leaves the page.",

  featured: [
    {
      eyebrow: 'Most-mentioned orders',
      title: 'Review-backed standouts',
      side: 'left' as const,
      image: '/assets/marys/featured-favorites.svg',
      imageAlt: 'Preview illustration for tacos, torta, and tamales',
      items: [
        {
          name: 'Tacos al pastor',
          desc: 'Repeatedly called out as a standout, with juicy pastor and strong salsa rojo.',
          price: 'Guest favorite',
        },
        {
          name: 'Carnitas and steak tacos',
          desc: 'Guests mention authentic flavor, fair prices, and portions that feel worth the stop.',
          price: 'Local go-to',
        },
        {
          name: 'Torta Mary and steak torta',
          desc: 'Named directly in reviews and carryout snippets as a filling, specific order path.',
          price: 'Review mention',
        },
        {
          name: 'Tamales and mole enchiladas',
          desc: 'Strong proof around comfort, value, and return visits.',
          price: 'Worth repeating',
        },
      ],
    },
    {
      eyebrow: 'Seafood, sauces, and sides',
      title: 'The details that set the place apart',
      side: 'right' as const,
      image: '/assets/marys/featured-sauces.svg',
      imageAlt: 'Preview illustration for ceviche, guacamole, and salsa service',
      items: [
        {
          name: 'Ceviche and grilled shrimp',
          desc: 'Pulled from Restaurantji favorites and review notes about seafood plates.',
          price: 'Menu signal',
        },
        {
          name: 'Homemade guacamole',
          desc: 'Reviews mention custom requests and attentive service around guacamole and chips.',
          price: 'Service proof',
        },
        {
          name: 'Fresh chips and salsa',
          desc: 'Guests keep pointing to the chips, red salsa, and house sauces as repeat-visit fuel.',
          price: 'Repeat order',
        },
        {
          name: 'Horchata and margaritas',
          desc: 'Drink mentions appear in public reviews, but food remains the lead conversion story.',
          price: 'Add-on draw',
        },
      ],
    },
  ],

  testimonial: {
    eyebrow: 'Guest proof',
    quote:
      "We had a great experience at Mary's. Our waitress was super friendly, playful, and attentive, which made the whole meal even more enjoyable.",
    attribution: {
      role: 'Google Highest rating review',
      name: 'Holly P',
    },
    chefImage: '/assets/marys/review-service.svg',
    chefAlt: "Preview illustration for Mary's service and hospitality proof",
  },

  blog: {
    eyebrow: 'What the reviews say',
    title: "The signals Mary's should own on its own site",
    posts: [
      {
        id: 'square-draw',
        date: 'Neighborhood draw',
        title: 'Lead with the Woodstock Square location and make directions a first-screen action.',
        image: '/assets/marys/proof-square.svg',
        href: '/contact',
      },
      {
        id: 'service-proof',
        date: 'Service proof',
        title: 'Martha, Laura, and the dining room warmth are part of the conversion story.',
        image: '/assets/marys/proof-service.svg',
        href: '/about',
      },
      {
        id: 'food-specificity',
        date: 'Food specificity',
        title: 'Tacos, tamales, mole, ceviche, guacamole, and salsa beat generic Mexican copy.',
        image: '/assets/marys/proof-food.svg',
        href: '/menu',
      },
      {
        id: 'value-speed',
        date: 'Casual register',
        title: 'Guests talk about modest prices, quick service, and a clean room, not fine dining.',
        image: '/assets/marys/proof-value.svg',
        href: '/about',
      },
      {
        id: 'pickup-demand',
        date: 'Order intent',
        title: 'Pickup and delivery demand already exists, the owned site should capture more of it.',
        image: '/assets/marys/proof-order.svg',
        href: '/menu#plan-visit',
      },
      {
        id: 'phone-conflict',
        date: 'Truth note',
        title: 'Public listings show (815) 337-2303, while older indexed site copy showed another number.',
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
      title: 'Local proof, not generic filler.',
      subtitle:
        "This preview stays inside what's verified: location, hours, public proof, menu signals, and named hospitality mentions from the review packet.",
    },
    immerse: {
      eyebrow: 'Public snapshot',
      title: "Mary's is strongest when it sounds like Mary's.",
      body:
        "The restaurant does not need a fake chef story or invented origin myth. The strongest version is already in the evidence: a clean casual grill, fair prices, fresh food, and a team guests want to see again.",
      statBig: '4.8',
      statLabel: 'Google rating',
      chefImage: '/assets/marys/avatar-proof.svg',
      chefName: '604 public reviews',
      chefRole: 'Captured May 4, 2026',
    },
    journey: {
      eyebrow: 'How guests use it',
      title: 'The site should follow the real conversion rhythm.',
      body:
        "Mary's is a walk-in, lunch, takeout, family, and repeat-visit restaurant. The build should help each of those intents move fast instead of hiding them behind vendor setup copy.",
      milestones: [
        {
          year: 'Walk in',
          title: 'Woodstock Square stop',
          body: 'Address and directions need to be visible immediately for town-square foot traffic.',
        },
        {
          year: 'Order',
          title: 'Menu and pickup intent',
          body: 'Public demand already exists for tacos, burritos, tamales, and chimichangas.',
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
      eyebrow: 'Public hours',
      title: 'Open daily, with owner confirmation still recommended before launch.',
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
      eyebrow: 'Hospitality proof',
      title: 'Named warmth from the review packet',
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
      eyebrow: 'What to preserve',
      title: "Mary's strongest identity is already visible in the public evidence.",
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
      title: 'Menu signals from public evidence',
      subtitle:
        'This first preview uses review-backed items and public listing signals, not invented prices or unverified full-menu claims.',
    },
    categories: [
      {
        eyebrow: 'Tacos and tortas',
        title: 'Street favorites',
        items: [
          { name: 'Tacos al pastor', desc: 'Frequently praised for bold flavor and strong salsa pairing.', price: 'Review-backed' },
          { name: 'Steak tacos', desc: 'Named alongside pastor and carnitas as a repeat order.', price: 'Review-backed' },
          { name: 'Carnitas taco', desc: 'Guests specifically mention authentic flavor and return intent.', price: 'Google review' },
          { name: 'Torta Mary', desc: 'Called out by name as a filling house sandwich order.', price: 'Google review' },
        ],
      },
      {
        eyebrow: 'Comfort plates',
        title: 'Tamales, mole, and enchiladas',
        items: [
          { name: 'Tamales', desc: 'Public reviews mention tamales directly, including strong value language.', price: 'Public proof' },
          { name: 'Mole enchiladas', desc: 'A recurring review highlight and a strong identity cue.', price: 'Public proof' },
          { name: 'Enchiladas verdes', desc: 'Visible in Restaurantji menu signals and favorites.', price: 'Menu signal' },
          { name: 'Enchiladas suizas', desc: 'Listed in public menu snippets and audit notes.', price: 'Menu signal' },
        ],
      },
      {
        eyebrow: 'Seafood and grill',
        title: 'Shrimp, ceviche, and larger plates',
        items: [
          { name: 'Ceviche', desc: 'Present in public listings and helps widen the menu story beyond tacos.', price: 'Menu signal' },
          { name: 'Grilled shrimp', desc: 'Mentioned in reviews alongside attentive service and family visits.', price: 'Google review' },
          { name: 'Tampiquena', desc: 'Called out in review copy as part of a first visit worth repeating.', price: 'Google review' },
          { name: 'Camarones a La Mexicana', desc: 'Appears in public menu favorites captured during audit.', price: 'Menu signal' },
        ],
      },
      {
        eyebrow: 'Burritos and house extras',
        title: 'Carryout-ready picks',
        items: [
          { name: 'Pork burrito', desc: 'Named in review snippets and stronger for takeout conversion.', price: 'Review mention' },
          { name: 'Burritos suizos', desc: 'Visible in public menu references and listing snippets.', price: 'Menu signal' },
          { name: 'Pastor chimichanga', desc: 'Directly praised in guest proof for flavor and portion.', price: 'Google review' },
          { name: 'Horchata', desc: 'Public drink mention that pairs well with lunch and carryout traffic.', price: 'Drink signal' },
        ],
      },
    ],
    testimonials: {
      eyebrow: 'Review excerpt cards',
      title: 'Specific praise beats generic praise',
      entries: [
        {
          stars: 5,
          quote: 'The tacos al pastor were dynamite, a great spot on the square to crush tacos and micheladas.',
          name: 'Matt Werhane',
          role: 'Google review',
          avatar: '/assets/marys/avatar-guest-a.svg',
        },
        {
          stars: 5,
          quote: 'The chips and salsa are dangerously addictive, the food comes out quick and fresh and hot.',
          name: 'FloofyGr3mlin',
          role: 'Google review',
          avatar: '/assets/marys/avatar-guest-b.svg',
        },
        {
          stars: 5,
          quote: 'The steak and pastor tacos were delicious, the prices are good for the amount they serve.',
          name: 'Sylvia Moreno',
          role: 'Google review',
          avatar: '/assets/marys/avatar-guest-c.svg',
        },
      ],
    },
    reservation: {
      eyebrow: 'Plan your visit',
      title: 'Truthful action paths for this first preview',
      body:
        'The owned direct-order setup is still unresolved, so this preview keeps the menu on-site and sends online ordering to the public DoorDash listing.',
      image: '/assets/marys/action-order.svg',
      actions: [
        { label: 'Order on DoorDash', href: orderHref, note: 'Public third-party listing' },
        { label: 'Call Marys', href: 'tel:+18153372303', note: 'Public listing number' },
        { label: 'Get directions', href: directionsHref, note: '108 Cass St, Woodstock' },
        { label: 'Review the phone conflict', href: '/contact', note: 'Older indexed site showed another number' },
      ],
      footnote:
        'Phone note: Google, Restaurantji, Restaurant Guru, and DoorDash point to (815) 337-2303. Older indexed official-site copy showed (815) 923-5240. Owner confirmation still needed.',
    },
  },

  newsPage: {
    hero: {
      title: 'Proof that should shape the build',
      subtitle:
        "These are the signals lifted from Mary's review and audit packet, not filler editorial cards.",
    },
  },

  contactPage: {
    hero: {
      title: 'Visit Marys on Cass Street',
      subtitle:
        'Directions, public hours, and phone clarity should be easier to find than marketplace detours or vendor setup copy.',
    },
    photos: [
      '/assets/marys/contact-exterior.svg',
      '/assets/marys/contact-dining.svg',
      '/assets/marys/contact-pickup.svg',
    ],
    headline: {
      eyebrow: 'Visit and order',
      title: 'The practical details should feel as polished as the food proof.',
    },
    infoCards: [
      {
        icon: 'map',
        label: 'Visit the Square',
        lines: ['108 Cass St', 'Woodstock, IL 60098', 'Historic Woodstock Square'],
      },
      {
        icon: 'phone',
        label: 'Call or verify',
        lines: ['Public listings: (815) 337-2303', 'Older indexed site: (815) 923-5240', 'Owner confirmation still needed'],
      },
    ],
    form: {
      eyebrow: 'Preview-safe contact paths',
      title: 'Use a real action instead of a fake form flow.',
      body:
        'This first preview keeps the high-intent paths explicit. Call for current details, use DoorDash for third-party online ordering, or head straight to directions.',
      actions: [
        { label: 'Call Marys', href: 'tel:+18153372303' },
        { label: 'Order on DoorDash', href: orderHref },
        { label: 'Get directions', href: directionsHref },
      ],
      footnote:
        'Current owned-domain ordering reliability remains unresolved in the audit packet, so the preview does not invent a direct online-order URL.',
    },
  },
};
