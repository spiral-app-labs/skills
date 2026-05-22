// content.example.ts — galatis-hideaway fork of pepper-01
//
// Source audit: sites/galatis-hideaway/audit.md
// Register: casual Italian-American with pizza, parties, banquets, sports bar.
// Photography: bright, family-casual, NOT candlelit/date-night.

export const content = {
  brand: {
    name: "Galati's",
    tagline: "Cary's Italian hideaway since 1992",
    description: "Casual Italian, pizza, party rooms, and the best sports bar in Cary.",
    address: { line1: '800 Feinberg Court', line2: 'Cary, IL 60013' },
    phone: '847-516-3663',
    email: 'info@galatis.com',
    deliveryEmail: 'catering@galatis.com',
    orderHref: 'https://galatis.hrpos.heartland.us/menu',
    partyHref: 'https://galatishideaway.flavorplate.com/form-private-party-inquiry',
    hours: [
      { days: 'Mon–Thu', time: '3 PM – 11 PM' },
      { days: 'Fri–Sat', time: '11 AM – 12 AM' },
      { days: 'Sunday',  time: '11 AM – 10 PM' },
    ],
    // Powers <LiveOpenStatus />
    hoursConfig: {
      timezone: 'America/Chicago',
      ranges: [
        { day: 0 as const, open: '11:00', close: '22:00' }, // Sunday
        { day: 1 as const, open: '15:00', close: '23:00' }, // Monday
        { day: 2 as const, open: '15:00', close: '23:00' }, // Tuesday
        { day: 3 as const, open: '15:00', close: '23:00' }, // Wednesday
        { day: 4 as const, open: '15:00', close: '23:00' }, // Thursday
        { day: 5 as const, open: '11:00', close: '23:59' }, // Friday
        { day: 6 as const, open: '11:00', close: '23:59' }, // Saturday
      ],
      closures: [],
    },
    // 800 Feinberg Court, Cary, IL coordinates
    geo: { lat: 42.2114, lng: -88.2381 },
    social: [
      { label: 'Instagram',   href: 'https://instagram.com/galatishideaway' },
      { label: 'Facebook',    href: 'https://facebook.com/galatishideaway' },
      { label: 'Yelp',        href: 'https://www.yelp.com/biz/galatis-hideaway-cary-2' },
      { label: 'TikTok',      href: 'https://tiktok.com/@galatishideaway' },
    ],
  },

  nav: {
    primary: [
      { label: 'Home',     href: '/' },
      { label: 'Menu',     href: '/#menu' },
      { label: 'Parties',  href: '/#parties' },
      { label: 'About',    href: '/about' },
      { label: 'Contact',  href: '/contact' },
    ],
    cta: { label: 'Order Online', href: 'https://galatis.hrpos.heartland.us/menu' },
  },

  hero: {
    headline: "Cary's Italian Hideaway.",
    subhead:  "Pizza, pasta, party rooms, and the best sports bar in town. Since 1992 — and the portions still say we're not counting.",
    photo:    'https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?auto=format&fit=crop&w=1400&q=80',
    photoAlt: "Galati's signature thin-crust pizza, fresh from the oven",
  },

  // Trust strip — surfaces the 1,107 Google reviews + 39 years + #1 Italian per Restaurant Guru
  trustStrip: {
    items: [
      { stat: '1,107+', label: 'Google reviews · 4.3★' },
      { stat: 'Since 1992', label: '34 years in Cary' },
      { stat: '#1 Italian', label: 'in Cary (Restaurant Guru)' },
      { stat: '5 Rooms', label: 'private party capacity to 110' },
    ],
  },

  fanFavorites: {
    heading: 'Fan Favorites',
    subhead: "The dishes guests can't stop reviewing — generous portions, every time.",
    dishes: [
      {
        name: 'Our Famous Lasagna',
        desc: '"The meat in the lasagna had a wonderful flavour." House recipe, generous portion, served with garlic bread.',
        price: '$15.95',
        photo: 'https://images.unsplash.com/photo-1619895092538-128f4c1b6efc?auto=format&fit=crop&w=800&q=80',
      },
      {
        name: 'Caesar Salad',
        desc: '"Never did I think I\'d be leaving a review over a Caesar Salad. But I cannot stop thinking about it."',
        price: '$11.95',
        photo: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?auto=format&fit=crop&w=800&q=80',
      },
      {
        name: 'Steak Kabobs',
        desc: 'Marinated, char-grilled, served with sautéed veggies and your choice of side. "The steak kabobs I had were amazing."',
        price: '$24.95',
        photo: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&w=800&q=80',
      },
    ],
  },

  // Weekly specials — replaces "Hot Pizza, Hotter Deals" with Galati's actual nightly deals
  deals: {
    heading: 'Every Night Has a Deal',
    subhead: 'Half-price pizza Mondays. $3 tacos Tuesdays. Half-price wines Wednesdays. Something to come back for, every night of the week.',
    items: [
      {
        name: 'Monday: 1/2 Price Pizza + AYCE Ribs',
        inclusions: ['Half-price pizza (dine-in)', 'All-you-can-eat baby back ribs', 'Coors Light Draft $3 · Bacardi U-Call-It $5'],
        price: '$19.95',
        save:  'AYCE Ribs',
        color: 'deal-1' as const,
        photo: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=80',
      },
      {
        name: 'Tuesday: Taco Night',
        inclusions: ['Tacos $3 each · 3-Taco Dinner $11.95', 'Quesadilla Platter $11.95 · Fajitas $15.95', 'House Margaritas $5.50 · Bud Light $2.50'],
        price: '$3.00',
        save:  'per taco',
        color: 'deal-2' as const,
        photo: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=900&q=80',
      },
      {
        name: 'Wednesday: 1/2 Price Wines',
        inclusions: ['Half off our full wine list (dine-in)', 'Pair it with our famous lasagna', 'Absolut U-Call-It $4.50 · Misfit Pint $5'],
        price: '50% off',
        save:  'all wines',
        color: 'deal-3' as const,
        photo: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=900&q=80',
      },
      {
        name: 'Friday: Fish & Chips',
        inclusions: ['Beer-battered cod with house-cut fries', 'Stuffed Shells $15.95 also available', 'Fat Tire $4.50 · Lagunitas IPA $5'],
        price: '$15.95',
        save:  'Fish Fry Friday',
        color: 'deal-4' as const,
        photo: 'https://images.unsplash.com/photo-1580217593608-61931cefc821?auto=format&fit=crop&w=900&q=80',
      },
    ],
  },

  // Pizza section — Galati's signature thin crust (replaces desserts)
  pizza: {
    heading: 'Thin Crust, Pan, Stuffed, Gluten-Free.',
    subhead: '"Cracker crust pizza, and I love it." Hand-tossed daily. Order online or call 847-516-3663.',
    items: [
      {
        name: "Galati's Special",
        desc: 'Sausage, onions, mushrooms, green peppers — the signature pie since the Spring Street days.',
        price: '$15.95',
        photo: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80',
      },
      {
        name: 'Margherita',
        desc: 'San Marzano tomato, fresh mozzarella, basil. "Try the margarita pizza and get it crispy."',
        price: '$21.45',
        photo: 'https://images.unsplash.com/photo-1604917877934-07d8d248d396?auto=format&fit=crop&w=800&q=80',
      },
      {
        name: 'The Garbage',
        desc: 'Sausage, pepperoni, mushrooms, onions, green peppers, black olives. The everything-on-it.',
        price: '$27.45',
        photo: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80',
      },
    ],
  },

  // Banquet rooms — replaces the multi-city LocationFinder with Galati's 5 private rooms
  rooms: {
    heading: 'Five Rooms. One Hideaway.',
    subhead: 'Celebrations of life. 21st birthdays. Corporate dinners. Showers. Five private spaces from 25 to 110 guests — with a full-service bar in every one.',
    tiles: [
      { city: 'Room Two · 110',           photo: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=600&q=80' },
      { city: 'The Dining Room · 100',    photo: 'https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?auto=format&fit=crop&w=600&q=80' },
      { city: 'The Catwalk · 70',         photo: 'https://images.unsplash.com/photo-1592861956120-e524fc739696?auto=format&fit=crop&w=600&q=80' },
      { city: 'Room One · 35',            photo: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=600&q=80' },
      { city: 'Sky Box · 25',             photo: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80' },
    ],
    accordion: [
      {
        title: 'Pizza Packages',
        body:  'From $19/person. Includes pizza + drinks. Add salad ($20/person) or salad + mostaccioli ($21/person). Premium appetizer add-ons available.',
      },
      {
        title: 'Liquor Packages',
        body:  'Wine & Beer from $20/person · Full Bar from $24/person · Premium Tier $36/person — all 3-hour packages, extra hours $8–$16/person. Cash bar option available. All packages exclude tax and 20% gratuity.',
      },
      {
        title: 'Catering & Off-Site',
        body:  'Pasta trays $38.95–$132.50, Italian beef $18/lb, salad trays $29.95–$74.95, appetizer trays from $26.25. Pickup or delivery — call 847-516-3663 or email catering@galatis.com.',
      },
      {
        title: 'How to Plan a Party',
        body:  'Tell us the date, party size, and what you want to eat — we handle the rest. Available 7 days a week starting at 11 AM. Submit an inquiry below or call directly.',
      },
    ],
  },

  // Real review (replaces ChefTestimonialBand) — three-atmosphere proof
  testimonial: {
    eyebrow: 'GOOGLE REVIEW',
    heading: 'Three Atmospheres, One Building.',
    body:    'A quiet family dining room. A game-day sports bar with a 20-foot screen. An outdoor patio with a koi pond and fireplace. Self-select your night out.',
    quote:   "Nice and low key, legit feels like a little hideaway. One of my favorite date spots. Did I mention the Caesar Salad? Seriously though.",
    name:    'Heather S. · Google review',
    photo:   'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=900&q=80',
    photoAlt: "Galati's Hideaway dining room",
  },

  closingCTA: {
    heading: 'Plan a Party. Order a Pizza. Pull Up a Stool.',
    subhead: 'Open 7 days. Order online for pickup, call us for catering, or submit a party inquiry — we make it easy.',
    placeholder: 'Your email for our specials list',
    cta: 'Sign Up',
    photo: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=900&q=80',
    photoAlt: "Galati's pizza overhead",
  },

  contact: {
    title: 'Visit, Order, or Plan a Party',
    subtitle: "We've been doing this in Cary for 34 years. Whether you're calling for takeout, planning a 100-person party, or just want to know if the kitchen's open — here's how to reach us.",
    addressBlocks: [
      {
        city: "Galati's Hideaway · Cary",
        line1: '800 Feinberg Court, Cary, IL 60013',
        phone: '847-516-3663',
        email: 'info@galatis.com',
      },
      {
        city: 'Catering & Off-Site',
        line1: 'Pickup or delivery anywhere in McHenry County',
        phone: '847-516-3663',
        email: 'catering@galatis.com',
      },
      {
        city: 'Private Parties & Banquets',
        line1: '5 rooms · 25 to 110 guests · 7 days a week',
        phone: '847-516-3663',
        email: 'events@galatis.com',
      },
    ],
    form: {
      heading: 'Send Us a Message',
      fields: [
        { name: 'firstName', label: 'First Name' },
        { name: 'lastName',  label: 'Last Name'  },
        { name: 'email',     label: 'Email',      type: 'email' },
        { name: 'message',   label: 'How can we help? (Order question, party inquiry, etc.)', type: 'textarea' },
      ],
      submit: 'Send Message',
    },
  },

  about: {
    title: "About Galati's",
    subtitle: "Vince Galati has been feeding Cary since 1992. Family-owned, family-run, and the portions still say we're not counting.",
    intro: "Vince started cooking at 18, working with his uncle in Oshkosh, Wisconsin. In 1987 he opened Varro's Pizza in Schaumburg. By 1992 he was running Pizza Junction in Cary — which became Galati's. The Spring Street location ran from 1998 to 2014, then we moved to 800 Feinberg Court with a bigger dining room, a real bar, and five private party rooms. Same recipes. Same family. More space to feed you.",
    stats: [
      { value: '1992',  label: 'In Cary since' },
      { value: '5',     label: 'Private party rooms' },
      { value: '110',   label: 'Max party capacity' },
      { value: '4.3★',  label: 'Google · 1,107+ reviews' },
    ],
    paragraphs: [
      "We have three different rooms inside one building. The dining room is quiet — no TVs, family-friendly, the lasagna shows up hot. The bar has a 20-foot screen, a full menu, and the best wing-Tuesday-margarita-night you'll find in Cary. The patio has a koi pond and a fireplace, and Friday nights it's the best seat in town.",
      "Reviewers know our staff by name — Jenny, Nafi, Bel, Jessica, Kyra. Vince is in most nights. The food is generous on purpose: a chicken Alfredo can feed a family of four, and we've never apologized for that. Welcome to the hideaway.",
    ],
    photo: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1400&q=80',
    photoAlt: "Inside Galati's Hideaway — the family dining room",
  },

  // Italian-themed confetti — basil, tomato, olive, garlic, cheese, mushroom, pepper, pizza
  confetti: [
    { emoji: '🌿',  top: '8%',  left: '6%',  rotate: -14 },
    { emoji: '🍅',  top: '18%', left: '86%', rotate: 12 },
    { emoji: '🫒',  top: '42%', left: '4%',  rotate: 8 },
    { emoji: '🌶️', top: '58%', left: '92%', rotate: -18 },
    { emoji: '🍄',  top: '72%', left: '10%', rotate: 6 },
    { emoji: '🧀',  top: '30%', left: '80%', rotate: -10 },
    { emoji: '🍕',  top: '80%', left: '78%', rotate: 14 },
    { emoji: '🧄',  top: '12%', left: '40%', rotate: -6 },
  ],

  footer: {
    columns: [
      {
        heading: 'Visit',
        links: [
          { label: '800 Feinberg Court, Cary',   href: 'https://maps.google.com/?q=800+Feinberg+Court+Cary+IL' },
          { label: 'Hours & Directions',          href: '/contact' },
          { label: "About Galati's",              href: '/about' },
        ],
      },
      {
        heading: 'Order & Plan',
        links: [
          { label: 'Order Online',   href: 'https://galatis.hrpos.heartland.us/menu' },
          { label: 'Plan a Party',   href: 'https://galatishideaway.flavorplate.com/form-private-party-inquiry' },
          { label: 'Catering',       href: '/#parties' },
          { label: 'Gift Cards',     href: '/contact' },
        ],
      },
      {
        heading: 'Follow',
        links: [
          { label: 'Instagram',  href: 'https://instagram.com/galatishideaway' },
          { label: 'Facebook',   href: 'https://facebook.com/galatishideaway' },
          { label: 'Yelp',       href: 'https://www.yelp.com/biz/galatis-hideaway-cary-2' },
          { label: 'TikTok',     href: 'https://tiktok.com/@galatishideaway' },
        ],
      },
    ],
    copy: "© 2026 Galati's Hideaway. Family-owned in Cary since 1992.",
  },
};
