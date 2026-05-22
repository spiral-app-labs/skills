// content.example.ts — Frato's Culinary Kitchen fork from pepper-01
// Source facts: official site scrape, Google Maps capture, Google Reviews highest-sort packet.
// Do not add unverified prices or menu claims; keep order/call/catering links truthful.

export const content = {
  brand: {
    name: "Frato's",
    tagline: "Giant sticks. One-pound slices. Scratch-made comfort food.",
    description:
      "Frato's Culinary Kitchen in Schaumburg serves stone-oven pizza, giant mozzarella sticks, burgers, wings, gyros, halal options, catering, and direct online ordering.",
    address: { line1: '628 S. Roselle Road', line2: 'Schaumburg, IL 60193' },
    phone: '847-895-2122',
    email: 'Management@FratosKitchen.com',
    deliveryEmail: 'catering@fratoskitchen.com',
    orderHref: 'https://orderstart.com/fratospizza',
    hours: [
      { days: 'Mon-Thu', time: '4pm-9pm' },
      { days: 'Fri-Sat', time: '11am-10pm' },
      { days: 'Sun', time: '11am-9pm' },
      { days: 'Cafe / gaming deli', time: 'Mon-Thu 12pm-4pm' },
      { days: 'Hours note', time: 'Call ahead when catering or events affect service' },
    ],
    hoursConfig: {
      timezone: 'America/Chicago',
      ranges: [
        { day: 0 as const, open: '11:00', close: '21:00' },
        { day: 1 as const, open: '16:00', close: '21:00' },
        { day: 2 as const, open: '16:00', close: '21:00' },
        { day: 3 as const, open: '16:00', close: '21:00' },
        { day: 4 as const, open: '16:00', close: '21:00' },
        { day: 5 as const, open: '11:00', close: '22:00' },
        { day: 6 as const, open: '11:00', close: '22:00' },
      ],
      closures: [],
    },
    geo: { lat: 42.0152588, lng: -88.0810177 },
    directionsHref:
      'https://www.google.com/maps/dir/?api=1&destination=42.0152588,-88.0810177',
    social: [
      { label: 'Instagram', href: 'https://www.instagram.com/FratosPizza' },
      { label: 'Facebook', href: 'https://www.facebook.com/FratosPizza' },
      { label: 'Catering', href: 'https://fratoscatering.com/' },
      { label: 'YouTube', href: 'https://www.youtube.com/FratosPizza' },
    ],
  },

  nav: {
    primary: [
      { label: 'Home', href: '/' },
      { label: 'Favorites', href: '/#menu' },
      { label: 'Catering', href: 'https://fratoscatering.com/' },
      { label: 'Helper', href: '/#concierge' },
      { label: 'Contact', href: '/contact' },
    ],
    mobileQuickLinks: [
      { label: 'Favorites', href: '/#menu' },
      { label: 'Catering', href: 'https://fratoscatering.com/' },
      { label: 'Helper', href: '/#concierge' },
      { label: 'Contact', href: '/contact' },
      { label: 'Directions', href: 'https://www.google.com/maps/dir/?api=1&destination=42.0152588,-88.0810177' },
      { label: 'Call', href: 'tel:8478952122' },
    ],
    cta: { label: 'Order Online', href: 'https://orderstart.com/fratospizza' },
  },

  hero: {
    headline: "The Giant Mozzarella Stick Worth the Drive",
    subhead:
      "Since 1975, Frato's has mixed stone-oven pizza, one-pound slices, burgers, gyros, halal options, and scratch-made comfort food into one casual Schaumburg stop worth the drive.",
    proofPills: ['4.2 stars / 554 Google reviews', 'Since 1975', 'Online pickup + delivery'],
    photo: 'https://i0.wp.com/fratospizza.com/wp-content/uploads/2023/10/IMG_20231020_123631_800_x_1000_pixel.jpg?ssl=1',
    photoAlt: "Frato's dramatic cheese pull",
  },

  fanFavorites: {
    heading: 'Start with the signatures',
    subhead: 'The items customers keep naming in Google reviews and on the official site.',
    dishes: [
      {
        name: 'Giant Handmade Mozzarella Stick',
        desc: 'The signature cheese-pull order: huge, crispy, gooey, and the item most likely to get mentioned first.',
        price: 'Order online',
        photo: 'https://fratospizza.com/wp-content/uploads/2025/01/Screenshot_20240728_102831_InShot-scaled.jpg',
      },
      {
        name: '1-Pound Pizza Slice',
        desc: 'Chicago-style stone-oven pizza in a massive slice format built for the hungry table.',
        price: 'Order online',
        photo: 'https://fratospizza.com/wp-content/uploads/2020/12/1608488087121.png',
      },
      {
        name: 'Burger of the Month',
        desc: 'Big monthly burger builds that keep the menu feeling active without losing the comfort-food core.',
        price: 'Order online',
        photo: 'https://fratospizza.com/wp-content/uploads/2022/10/WHISKEY-BURGER-copy-scaled.jpeg',
      },
    ],
  },

  deals: {
    heading: 'Built for cravings, groups, and catering',
    subhead: 'Pick your lane: cheese pull, pizza night, wings, gyros, or a corporate lunch spread.',
    items: [
      {
        name: 'Cheese Pull Run',
        inclusions: ['Giant mozzarella stick', 'Marinara', 'Pizza fries or mac and cheese on the side'],
        price: 'Order online',
        save: 'Signature order',
        color: 'deal-1' as const,
        photo: 'https://fratospizza.com/wp-content/uploads/2025/01/Screenshot_20240728_102831_InShot-scaled.jpg',
      },
      {
        name: 'Pizza + Wings Night',
        inclusions: ['Stone-oven pizza', 'Wings or tenders', 'Ghost pepper wings if you mean it'],
        price: 'Order online',
        save: 'Hot + fresh',
        color: 'deal-2' as const,
        photo: 'https://i0.wp.com/fratospizza.com/wp-content/uploads/2023/02/Spicy-Szechuan-Wings-Groupon.jpg?ssl=1',
      },
      {
        name: 'Gyro Go-To',
        inclusions: ['Grilled gyro meat', 'Warm pita', 'Balanced tzatziki'],
        price: 'Order online',
        save: 'Review favorite',
        color: 'deal-3' as const,
        photo: 'https://fratospizza.com/wp-content/uploads/2019/02/GYRO-SANDWICH-CROPPED.jpg',
      },
      {
        name: 'Corporate Lunch Catering',
        inclusions: ['Greek chicken or wraps', 'Pasta or mac trays', 'Delivery timing support'],
        price: 'Plan catering',
        save: 'Office-ready',
        color: 'deal-4' as const,
        photo: 'https://fratoscatering.com/wp-content/uploads/2019/12/culinary-picture-1-resized-1100-v-400.jpg',
      },
    ],
  },

  desserts: {
    heading: 'More ways to make it Frato\'s',
    subhead: 'Round out the order with the comfort-food sides people keep talking about.',
    items: [
      {
        name: 'Mac & Cheese Comfort',
        desc: 'Ooey-gooey mac and cheese shows up in review after review as a surprise favorite.',
        price: 'Order online',
        photo: 'https://fratoscatering.com/wp-content/uploads/2016/12/Mac-Cheese-Pasta-Logo-Web-1000x363.jpg',
      },
      {
        name: 'Pizza Fries',
        desc: 'A quick, shareable hit for lunch, takeout, or waiting on the big order.',
        price: 'Order online',
        photo: 'https://fratospizza.com/wp-content/uploads/2017/11/SPINACH-ARTICHOKE-FULL-VIEW.jpg',
      },
      {
        name: 'Brownies + Shakes',
        desc: 'Customers mention rich shakes, brownies, and dessert-drink energy as the right final move.',
        price: 'Ask in store',
        photo: 'https://fratospizza.com/wp-content/uploads/2018/06/IMG_0384-01.jpeg',
      },
    ],
  },

  locations: {
    heading: 'One Schaumburg stop. Four fast ways in.',
    subhead: 'Order ahead, call for pickup, get directions, or route the office lunch order to catering.',
    tiles: [
      { city: 'Schaumburg', photo: 'https://fratospizza.com/wp-content/uploads/2020/01/ANDY-GRILL-WINDY-CITY-LIVE.jpeg' },
      { city: 'Order Online', photo: 'https://fratospizza.com/wp-content/uploads/2020/12/1608488087121.png' },
      { city: 'Catering', photo: 'https://fratoscatering.com/wp-content/uploads/2016/11/Mozzarella-Stick-Catering-Tray-1000x363.jpg' },
      { city: 'Call Ahead', photo: 'https://fratospizza.com/wp-content/uploads/2025/12/Van-halen-011-scaled.jpg' },
    ],
    accordion: [
      {
        title: 'Address',
        body: '628 S. Roselle Road, Schaumburg, IL. Google Maps lists the profile as Frato\'s Kitchen & Gaming in Weatherway Plaza.',
      },
      {
        title: 'Order Online',
        body: 'Use the official OrderStart link for pickup and delivery: orderstart.com/fratospizza. Call 847-895-2122 for questions.',
      },
      {
        title: 'Directions',
        body: 'Use the verified Google Maps route to Weatherway Plaza and head straight to Frato\'s Kitchen & Gaming.',
      },
      {
        title: 'Catering',
        body: 'Frato\'s catering supports office lunches, events, trays, wraps, chicken, pasta, and custom quantities through FratosCatering.com.',
      },
    ],
  },

  reviews: {
    eyebrow: 'GOOGLE PROOF',
    heading: '4.2 stars from 554 Google reviews',
    subhead:
      'Short anonymous fragments pulled from the captured Highest-sort review packet: giant mozz, one-pound slices, fresh comfort food, and a chill wait-for-your-order vibe.',
    items: [
      { quote: 'Actually 14 inches and about 2 inches wide… the giant mozz stick is real.', source: 'Google Review' },
      { quote: 'Perfectly crispy outside, unbelievably cheesy inside… we had to do the cheese pull.', source: 'Google Review' },
      { quote: 'The portion is insane worth every penny… made fresh and you can tell.', source: 'Google Review' },
      { quote: 'Ordering online ahead of time works great… delicious hot food right away.', source: 'Google Review' },
      { quote: 'Ghost pepper wings are the real deal… pizza cooked perfectly.', source: 'Google Review' },
      { quote: 'Sunday giant mozzarella stick is so good… definitely recommend the mozzarella stick.', source: 'Google Review' },
      { quote: 'Atmosphere was chill and music had a chill vibe… food was so delicious.', source: 'Google Review' },
      { quote: 'Mozzarella sticks are amazing… crispy, gooey cheese matched perfectly with marinara.', source: 'Google Review' },
      { quote: 'Crust is perfectly crispy, cheese is gooey, toppings always fresh and loaded.', source: 'Google Review' },
      { quote: 'Burger of the month had me in heaven.', source: 'Google Review' },
    ],
  },

  closingCTA: {
    heading: 'Order the cheese pull, feed the office, or call the kitchen',
    subhead: 'Use the verified OrderStart link for pickup or delivery, call for carryout questions, or open the catering site for group lunches and events.',
    primaryCta: { label: 'Ask About Catering', href: 'https://fratoscatering.com/catering-inquiry-form/' },
    secondaryCta: { label: 'Call 847-895-2122', href: 'tel:8478952122' },
    photo: 'https://fratoscatering.com/wp-content/uploads/2016/11/Mozzarella-Stick-Catering-Tray-1000x363.jpg',
    photoAlt: "Frato's catering mozzarella stick tray",
  },

  contact: {
    title: "Contact Frato's",
    subtitle: 'Questions about pickup, delivery, catering, or a custom office lunch? Use the verified order and catering paths below, or call the restaurant directly.',
    addressBlocks: [
      { city: 'Restaurant', line1: '628 S. Roselle Road, Schaumburg, IL 60193', phone: '847-895-2122', email: 'Management@FratosKitchen.com' },
      { city: 'Owner Contact', line1: 'Questions or feedback from the official site', phone: '847-895-2122', email: 'FratosPizza@gmail.com' },
      { city: 'Catering', line1: 'Corporate lunches, events, and quote requests', phone: '847-895-2122', email: 'catering@fratoskitchen.com' },
    ],
    actionsHeading: 'Choose the right path',
    actions: [
      {
        title: 'Order pickup or delivery',
        body: 'The official online ordering flow redirects to OrderStart for pickup, delivery, curbside, and dine-in ordering.',
        label: 'Open OrderStart',
        href: 'https://orderstart.com/fratospizza',
      },
      {
        title: 'Request catering',
        body: 'Use the Frato\'s Personal Chef Catering inquiry form for office lunches, events, trays, and custom planning.',
        label: 'Open Catering Inquiry',
        href: 'https://fratoscatering.com/catering-inquiry-form/',
      },
      {
        title: 'Call the kitchen',
        body: 'For hours changes, carryout questions, or same-day help, call the Schaumburg restaurant directly.',
        label: 'Call 847-895-2122',
        href: 'tel:8478952122',
      },
    ],
  },

  about: {
    title: "About Frato's",
    subtitle: 'Made-from-scratch comfort food, culinary-student training, and signature orders Schaumburg remembers.',
    intro:
      "Frato's presents itself as a culinary kitchen: stone-oven pizza, handmade burgers, wings, halal options, buttermilk chicken tenders, massive mozzarella sticks, young culinary students in training, and catering.",
    stats: [
      { value: '554', label: 'Google reviews' },
      { value: '4.2', label: 'Google rating' },
      { value: '1975', label: 'Since' },
      { value: '1 lb', label: 'Pizza slice' },
    ],
    paragraphs: [
      'The strongest story is not generic pizza. It is the giant mozzarella stick, one-pound pizza slice, scratch-made comfort food, and a playful dine-in experience with games while the kitchen cooks fresh.',
      'The official story also leans on training: Frato\'s publicly highlights a culinary-student pipeline, a made-from-scratch kitchen, and a catering arm that supports office lunches, events, trays, and custom planning.',
    ],
    photo: 'https://fratospizza.com/wp-content/uploads/2025/12/Chef-Andy-Opiela-Chef-Joseph-Gattuso-Chef-Nick-Taglianetti-scaled.jpeg',
    photoAlt: "Frato's culinary kitchen team",
  },

  concierge: {
    eyebrow: 'QUICK ANSWERS',
    heading: "Ask before you order.",
    subhead:
      "A safe site helper for the common Frato's questions: ordering, catering, hours, directions, and dietary handoffs — all grounded in verified public facts.",
    safetyNote:
      "This helper does not place orders, quote live prices, promise delivery timing, issue refunds, or make dietary guarantees. For same-day details, call the kitchen.",
    primaryActions: [
      { label: 'Order Online', href: 'https://orderstart.com/fratospizza' },
      { label: 'Call 847-895-2122', href: 'tel:8478952122' },
    ],
    questions: [
      {
        label: 'Order',
        prompt: 'Can I order the giant mozzarella stick for pickup?',
        answer:
          "Yes — use Frato's official OrderStart link for pickup or delivery. The giant handmade mozzarella stick is one of the signature items featured on the site. For same-day availability help, call the kitchen.",
        actions: [
          { label: 'Open OrderStart', href: 'https://orderstart.com/fratospizza' },
          { label: "Call Frato's", href: 'tel:8478952122' },
        ],
      },
      {
        label: 'Catering',
        prompt: "Can Frato's help with lunch for a group?",
        answer:
          "Yes — Frato's has a catering path for office lunches, events, trays, wraps, chicken, pasta, and custom planning. Use the catering inquiry form for quantities and timing, then call for urgent details.",
        actions: [
          { label: 'Catering Inquiry', href: 'https://fratoscatering.com/catering-inquiry-form/' },
          { label: 'Catering Site', href: 'https://fratoscatering.com/' },
        ],
      },
      {
        label: 'Hours',
        prompt: 'Are they open right now?',
        answer:
          "Published hours are Mon-Thu 4pm-9pm, Fri-Sat 11am-10pm, and Sun 11am-9pm. Hours can change for catering or events, so call Frato's for live same-day confirmation.",
        actions: [
          { label: 'Call To Confirm', href: 'tel:8478952122' },
        ],
      },
      {
        label: 'Directions',
        prompt: "Where is Frato's?",
        answer:
          "Frato's is at 628 S. Roselle Road in Schaumburg, inside Weatherway Plaza. Use the verified directions link for routing.",
        actions: [
          { label: 'Get Directions', href: 'https://www.google.com/maps/dir/?api=1&destination=42.0152588,-88.0810177' },
        ],
      },
      {
        label: 'Dietary',
        prompt: 'Is everything halal or gluten-free?',
        answer:
          'The site mentions halal options, but it does not confirm that every item is halal or gluten-free. For item-specific halal, gluten-free, or allergy questions, call the restaurant before ordering.',
        actions: [
          { label: 'Call With Questions', href: 'tel:8478952122' },
        ],
      },
    ],
  },

  confetti: [
    { emoji: '🧀', top: '8%', left: '6%', rotate: -14 },
    { emoji: '🍕', top: '18%', left: '86%', rotate: 12 },
    { emoji: '🍔', top: '42%', left: '4%', rotate: 8 },
    { emoji: '🌶️', top: '58%', left: '92%', rotate: -18 },
    { emoji: '🍟', top: '72%', left: '10%', rotate: 6 },
    { emoji: '🥤', top: '30%', left: '80%', rotate: -10 },
    { emoji: '🔥', top: '80%', left: '78%', rotate: 14 },
    { emoji: '🧄', top: '12%', left: '40%', rotate: -6 },
  ],

  footer: {
    columns: [
      {
        heading: 'About',
        links: [
          { label: 'About Frato\'s', href: '/about' },
          { label: 'Favorites', href: '/#menu' },
          { label: 'Contact', href: '/contact' },
        ],
      },
      {
        heading: 'Order',
        links: [
          { label: 'Order Online', href: 'https://orderstart.com/fratospizza' },
          { label: 'Call 847-895-2122', href: 'tel:8478952122' },
          { label: 'Catering', href: 'https://fratoscatering.com/' },
        ],
      },
      {
        heading: 'Find Us',
        links: [
          { label: '628 S. Roselle Road', href: 'https://www.google.com/maps/place/Frato%27s+Kitchen+%26+Gaming/' },
          { label: 'Instagram', href: 'https://www.instagram.com/FratosPizza' },
          { label: 'Facebook', href: 'https://www.facebook.com/FratosPizza' },
        ],
      },
    ],
    copy: '© 2026 Frato\'s Culinary Kitchen. Preview redesign for outreach discussion.',
    legal: '© 2026 Frato\'s Culinary Kitchen. Preview redesign for outreach discussion.',
  },
};
