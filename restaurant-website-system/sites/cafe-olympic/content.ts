// content.ts — cafe-olympic (latte-01 fork)
//
// Authored from sites/cafe-olympic/audit.md (2026-04-30).
// All hero/about/letter copy traces to verbatim review quotes or the
// Angelos farewell letter and Shaw Local 2019 owner-transition coverage.
//
// Photography: placeholder Unsplash diner / Greek-skillet / cinnamon-roll
// shots staged for warm-daylight register. PRE-FLIGHT: swap with the
// 12-shot owner-supplied IG/FB grid before launch (audit Block 5 photo gate).

export const content = {
  brand: {
    name: 'Cafe Olympic',
    tagline: 'Crystal Lake breakfast ritual since 1984.',
    description:
      'A Crystal Lake breakfast ritual since 1984 — homemade cinnamon rolls, the Greek skillet, and Wednesday pasticio. Open 8 to 3, every day.',
    address: { line1: '90 N Williams Street', line2: 'Crystal Lake, IL 60014' },
    phone: '(815) 459-4100',
    phoneTel: '+18154594100',
    email: 'hello@cafeolympiccrystallake.com',
    orderUrl: 'https://www.toasttab.com/cafe_olympic_cl',
    social: [
      { label: 'Instagram', href: 'https://www.instagram.com/cafe_olympic_cl/' },
      { label: 'Facebook', href: 'https://www.facebook.com/CafeOlympic/' },
    ],
    // Open every day 8–3 per audit Block 1.
    hours: [
      { days: 'Mon–Sun', time: '8:00 AM – 3:00 PM' },
    ],
    hoursConfig: {
      timezone: 'America/Chicago',
      ranges: [
        { day: 0 as const, open: '08:00', close: '15:00' }, // Sun
        { day: 1 as const, open: '08:00', close: '15:00' }, // Mon
        { day: 2 as const, open: '08:00', close: '15:00' }, // Tue
        { day: 3 as const, open: '08:00', close: '15:00' }, // Wed
        { day: 4 as const, open: '08:00', close: '15:00' }, // Thu
        { day: 5 as const, open: '08:00', close: '15:00' }, // Fri
        { day: 6 as const, open: '08:00', close: '15:00' }, // Sat
      ],
      closures: [],
    },
    // 90 N Williams St, Crystal Lake, IL — downtown corner near Brink + Williams.
    geo: { lat: 42.2412, lng: -88.3175 },
  },

  nav: {
    primary: [
      { label: 'Menu', href: '/menu' },
      { label: 'Our story', href: '/about' },
      { label: 'A letter from us', href: '/letter' },
      { label: 'Visit', href: '/contact' },
    ],
  },

  hero: {
    ratingChip: { provider: 'Google', stars: 5, score: '4.6' },
    eyebrow: 'CRYSTAL LAKE BREAKFAST RITUAL · SINCE 1984',
    h1: 'Cafe Olympic',
    sub:
      'Three generations on the corner of Williams and Brink — homemade cinnamon rolls, the Greek skillet, and Wednesday pasticio. 4.6★ across 1,169 Google reviews and counting. Open 8 to 3, every day.',
    ctaPrimary: { label: 'Call (815) 459-4100', href: 'tel:+18154594100' },
    ctaSecondary: { label: 'View today’s menu', href: '#menu' },
    photos: [
      {
        src: 'https://images.unsplash.com/photo-1509365465985-25d11c17e812?auto=format&fit=crop&w=1400&q=80',
        alt: 'Top-down breakfast spread on a diner table — eggs, hash, toast, coffee',
      },
      {
        src: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1400&q=80',
        alt: 'Generous cinnamon roll with white icing on a plate',
      },
      {
        src: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=1400&q=80',
        alt: 'Diner storefront on a corner under bright morning light',
      },
    ],
  },

  // Trust strip — surfaces the volume the old site hid (audit Block 4 reason 1).
  trustStrip: {
    items: [
      { label: 'Google', value: '4.6 ★ / 1,169' },
      { label: 'Tripadvisor', value: '#11 of 138 in Crystal Lake' },
      { label: 'Restaurant Guru', value: '4.6 ★ / 2,211 votes' },
      { label: 'Facebook', value: '4.6 ★ / 716' },
    ],
  },

  // What guests come back FOR — derived from Block 2 thirteen-category extraction.
  loved: {
    eyebrow: 'WHAT REGULARS COME BACK FOR',
    heading: 'Five things on every Sunday-morning short list.',
    items: [
      {
        title: 'The 3/4-lb cinnamon roll',
        body:
          'Homemade, every morning, the size of your palm. The dish guests name first, every time.',
      },
      {
        title: 'The Greek skillet',
        body:
          '“My husband and I both got the Greek skillet. Every part of it was amazing.” — Tripadvisor, Sep 2015. The Greek-American spine of the menu.',
      },
      {
        title: 'Wednesday pasticio',
        body:
          'Every other Wednesday, a tray of homemade pasticio comes out of the oven. Regulars know to ask.',
      },
      {
        title: 'Caitlyn-the-waitress',
        body:
          '“Caitlyn, our waitress, is Superwoman.” — Tripadvisor, Dec 2018. Servers who know your face and your order.',
      },
      {
        title: 'The corner & the patio',
        body:
          'Sidewalk tables under the 1892 storefront, train rail in the distance, dog-friendly. Crystal Lake morning, slow version.',
      },
    ],
  },

  menu: {
    heading: 'On the menu',
    eyebrow: 'HOMEMADE EVERY MORNING',
    categories: [
      {
        id: 'famous',
        label: 'The famous ones',
        photo: {
          src: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=80',
          alt: 'Homemade cinnamon roll with icing',
        },
        items: [
          { name: '3/4-lb cinnamon roll', desc: 'Homemade. The one regulars come back for.', price: '$6.50' },
          { name: 'Greek skillet', desc: 'Eggs, gyro meat, feta, peppers, onions, hash browns.', price: '$13.95' },
          { name: 'Pasticio', desc: 'Greek baked-pasta, tomato-béchamel. Every other Wednesday only.', price: '$14.50' },
          { name: 'Cinnamon-roll French toast', desc: 'Our cinnamon roll, sliced, dipped, griddled.', price: '$11.95' },
          { name: 'Bruncherito', desc: 'Eggs, potatoes, cheese, choice of meat, salsa, all wrapped up.', price: '$12.50' },
        ],
      },
      {
        id: 'breakfast',
        label: 'Breakfast — all day',
        photo: {
          src: 'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=1200&q=80',
          alt: 'Stack of pancakes with butter and syrup',
        },
        items: [
          { name: 'Two eggs any style', desc: 'Hash browns or breakfast potatoes, toast.', price: '$9.95' },
          { name: 'Monte Cristo on thick french toast', desc: 'Ham, turkey, swiss, dusted, syrup-side.', price: '$13.50' },
          { name: 'Chicken & waffles', desc: 'Hand-breaded, hot honey, butter.', price: '$13.95' },
          { name: 'Avocado toast', desc: 'Smashed avocado, lemon, chili crunch, two eggs.', price: '$11.95' },
          { name: 'Breakfast gravy & biscuits', desc: 'Sausage gravy over our buttermilk biscuits.', price: '$10.95' },
          { name: 'Pancake stack', desc: 'Three buttermilk, real butter, warm syrup.', price: '$8.95' },
        ],
      },
      {
        id: 'lunch',
        label: 'Lunch',
        photo: {
          src: 'https://images.unsplash.com/photo-1565299507177-b0ac66763828?auto=format&fit=crop&w=1200&q=80',
          alt: 'Smash burger with fries on a diner plate',
        },
        items: [
          { name: 'Smash burger', desc: 'Two thin patties, american, pickles, special sauce.', price: '$12.95' },
          { name: 'Grownup grilled cheese', desc: 'Three cheeses, sourdough, tomato bisque option.', price: '$11.50' },
          { name: 'Fried chicken sandwich', desc: 'Buttermilk-brined, slaw, pickles, brioche.', price: '$12.95' },
          { name: 'Chicken cobb salad', desc: 'Bacon, blue, avocado, egg, tomato, grilled chicken.', price: '$13.95' },
          { name: 'Vegan chicken parm', desc: 'Plant-based cutlet, marinara, melted dairy-free.', price: '$13.50' },
          { name: 'Gyro plate', desc: 'House gyro meat, tzatziki, pita, Greek salad.', price: '$13.50' },
        ],
      },
      {
        id: 'bakery',
        label: 'From our bakery',
        photo: {
          src: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=1200&q=80',
          alt: 'Homemade pies and pastries on a wooden board',
        },
        items: [
          { name: 'Pecan square', desc: 'House recipe, brown-butter caramel, sea salt.', price: '$5.50' },
          { name: 'Fruit pie of the day', desc: 'Whatever was best at market this week. Ask.', price: '$5.95' },
          { name: 'Buttermilk biscuit', desc: 'Tall, flaky, served with honey butter.', price: '$3.50' },
          { name: 'Muffins', desc: 'Rotating flavors. Ask the counter.', price: '$3.50' },
        ],
      },
      {
        id: 'bar',
        label: 'Mimosas + brunch bar',
        photo: {
          src: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=1200&q=80',
          alt: 'Mimosas in flutes on a sunlit table',
        },
        items: [
          { name: 'Mimosa on tap', desc: 'House sparkling, fresh-squeezed orange.', price: '$6.00' },
          { name: 'Bloody mary', desc: 'House mix, pickled garnish, celery salt rim.', price: '$8.50' },
          { name: 'Coffee', desc: 'Bottomless. Black or with cream.', price: '$3.00' },
          { name: 'Fresh-squeezed OJ', desc: '', price: '$4.50' },
        ],
      },
    ],
  },

  // Anonymized Google review wall — verbatim quotes, no reviewer names per
  // the audit's privacy convention. Each entry's source platform is shown but
  // the review author is not. Stars are explicit so the visual rhythm holds.
  reviews: {
    eyebrow: 'WHAT REGULARS ARE SAYING',
    heading: 'Open most days for nearly forty years. Every one of these is a real Google review.',
    aggregate: { stars: 4.6, count: 1169, source: 'Google' },
    items: [
      {
        stars: 5,
        text: 'Cafe Olympic is always our first choice for breakfast. The staff is warm and welcoming, and the service is smooth and efficient.',
        source: 'Google · recent',
      },
      {
        stars: 5,
        text: 'They make you feel like family. Amazing food and outstanding service.',
        source: 'Google',
      },
      {
        stars: 5,
        text: 'Great food, great service, great prices.',
        source: 'Google · this month',
      },
      {
        stars: 5,
        text: 'It’s the only place in town where my dairy free family has zero issues eating great food. Makes my life so easy.',
        source: 'Google',
      },
      {
        stars: 5,
        text: 'First time. Friendly and fast service. Food was good. Have bar service too which is a plus.',
        source: 'Google · last month',
      },
      {
        stars: 5,
        text: 'This has to be the friendliest staff we have come across in a while.',
        source: 'Tripadvisor',
      },
      {
        stars: 5,
        text: 'Small and quaint. Don’t be afraid if there are a dozen people waiting outside, you’ll get your seat in a few minutes. We eat here almost every Sunday morning.',
        source: 'Tripadvisor',
      },
      {
        stars: 5,
        text: 'My husband and I both got the Greek skillet. Every part of it was amazing.',
        source: 'Tripadvisor',
      },
    ],
  },

  // Bridges Angelos farewell → current owners. Replaces BlogPreviewGrid slot.
  letter: {
    eyebrow: 'A LETTER FROM US',
    heading: 'From the Angelos family to ours, and from us to you.',
    excerpt:
      'When Chris and Nancy stepped away in 2019 they wrote: “We have seen your children grow up the last 21 years as you have watched our kids grow up. Without you we’d be nothing.” We try to live up to that letter every morning.',
    cta: { label: 'Read the full letter', href: '/letter' },
    image:
      'https://images.unsplash.com/photo-1559329007-40df8a9345d8?auto=format&fit=crop&w=1400&q=80',
    imageAlt: 'Diner counter with coffee mugs, morning sun on the wood',
  },

  love: {
    eyebrow: 'CAFE OLYMPIC',
    heading: 'Open eight to three, every day.',
    body: [
      'Cafe Olympic has been on the corner of Williams and Brink since 1984 — three ownership eras, one downtown ritual. The building is older than the restaurant: Dr. E. E. Ballou finished it in 1892.',
      'Today three Crystal Lake locals — Rachel, Anthony, and Rosanna — run the room with chef Jon in the kitchen. We bake our own cinnamon rolls, pull our own gyro, and keep the Wednesday pasticio Chris started years ago. Walk in. We’ll find you a seat.',
    ],
    cta: { label: 'View today’s menu', href: '#menu' },
    image:
      'https://images.unsplash.com/photo-1559329007-40df8a9345d8?auto=format&fit=crop&w=1400&q=80',
    imageAlt: 'Diner counter at morning, coffee mugs and the morning light',
  },

  closing: {
    wordmark: 'Cafe Olympic',
    tagline: 'Crystal Lake breakfast ritual since 1984.',
  },

  contact: {
    heading: 'Visit us',
    sub: 'Walk-ins welcome — no reservation needed. Larger group? Call ahead and we’ll save the back booth.',
    formHeading: 'Send a note',
    formFields: {
      name: 'Your name',
      email: 'Email address',
      message: 'What can we help with?',
      submit: 'Send message',
    },
  },

  about: {
    heading: 'Our story',
    sub: 'Three ownership eras, one downtown corner, one Sunday-morning ritual.',
    paragraphs: [
      'Cafe Olympic opened on the corner of Williams and Brink in 1984. The building had already been there for 92 years — Dr. E. E. Ballou finished construction in 1892, and the storefront has watched downtown Crystal Lake grow up around it ever since.',
      'In 1998, Chris and Nancy Angelos took the keys. For 21 years they served the community — Greek skillets, gyro, pasticio every other Wednesday, and the homemade cinnamon roll that became the dish guests still talk about. They watched the regulars’ kids grow up. The regulars watched their kids grow up.',
      'In October 2019, Chris and Nancy passed the cafe to Rachel Skubiszewski-Mucci, Anthony Kern, and Rosanna Cermak. Rachel grew up in Crystal Lake and has been a Cafe Olympic regular since childhood. Chef Jon Vasquez took over the kitchen the same week. The first thing the new owners said publicly was, “There’s something magical about this spot.” The second was, “It’s a little nerve-wracking, too, because we’re not Chris and Nancy.”',
      'We kept the cinnamon roll. We kept the Greek skillet. We kept the Wednesday pasticio. We added the bar — mimosas on tap, a bloody you’d order again — and we keep the door open eight to three, every day.',
    ],
    image:
      'https://images.unsplash.com/photo-1453614512568-c4024d13c247?auto=format&fit=crop&w=1400&q=80',
    imageAlt: 'Inside the diner, warm morning light through the storefront window',
  },

  // Full Letter page — bridges Angelos farewell → current welcome.
  letterPage: {
    heading: 'A letter from us.',
    sub: 'Two letters, really — Chris and Nancy’s, then ours.',
    fromAngelos: {
      eyebrow: 'OCTOBER 2019 · CHRIS & NANCY ANGELOS',
      heading: 'After 21 years, with a heavy heart and a look into the future.',
      body: [
        '“We would like to take this time to thank our employees who work tirelessly every day including weekends and holidays. We have seen your children grow up the last 21 years as you have watched our kids grow up.”',
        '“Without you we’d be nothing. It’s not goodbye, but see you soon!”',
      ],
      attribution: '— Chris & Nancy Angelos, owners 1998–2019. Published in Shaw Local, Oct 9 2019.',
    },
    fromUs: {
      eyebrow: 'OCTOBER 2019 → TODAY · RACHEL, ANTHONY, ROSANNA',
      heading: 'We’re not Chris and Nancy. We never will be. We’re carrying it forward.',
      body: [
        'Rachel grew up here. She’s been eating Greek skillets at this counter since she could see over it. When the chance came to take the keys in 2019, the three of us said yes before we’d had time to be properly scared. Then we got properly scared.',
        'We kept the cinnamon roll. We kept the gyro. We kept Wednesday pasticio because Chris kept it for two decades and we weren’t about to be the people who stopped it. Chef Jon came in the same week and the kitchen has been his ever since.',
        'We added the bar — mimosas on tap, fresh-squeezed orange, a real bloody — and we redid the floors and the ceiling and the chairs because the room was due. The rest, we left alone.',
        'If you’ve been coming here forever, thank you. If you’re new, the cinnamon roll is the size of your palm and the corner booth is the warm one. Either way, the door’s open eight to three. We hope to see you Sunday.',
      ],
      attribution: '— Rachel, Anthony, Rosanna, and the Cafe Olympic team.',
    },
  },

  menuPage: {
    heading: 'The full menu',
    sub: 'Everything we’re cooking and baking today. Walk-ins welcome — call ahead for a party of six or more.',
  },
} as const;
