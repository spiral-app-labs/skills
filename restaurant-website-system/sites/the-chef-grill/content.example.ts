// content.example.ts — The Chef Grill fork of plate-01
//
// Source guardrails:
// - Official site/menu/contact scrapes in sites/the-chef-grill/scrapes/
// - Google Reviews Highest capture: 4.7 stars / 807 reviews, 30 written reviews
// - Do not add unverified founding year, day-by-day hours, catering promises,
//   private-event capacity, or owner biography beyond official-site wording.

export type MenuItemEntry = {
  type: 'item';
  name: string;
  description: string;
  price: string;
};

export type MenuPhotoEntry = {
  type: 'photo';
  src: string;
  alt: string;
};

export type MenuEntry = MenuItemEntry | MenuPhotoEntry;

export type MenuSection = {
  id: string;
  title: string;
  entries: MenuEntry[];
};

const links = {
  official: 'https://www.thechefgrill.com/',
  menu: 'https://www.thechefgrill.com/menu/',
  order: 'https://order.online/store/the-chef-grill-elk-grove-village-33689647',
  grubhub: 'https://www.grubhub.com/restaurant/the-chef-grill-812-e-higgins-rd-elk-grove-village/11219672',
  uberEats: 'https://www.ubereats.com/store/the-chef-grill/JapASDZKWRigj7SSzDNElQ',
  directions:
    'https://www.google.com/maps/dir/?api=1&destination=812%20E%20Higgins%20Rd%2C%20Elk%20Grove%20Village%2C%20IL%2060007',
  call: 'tel:+13123138900',
  email: 'mailto:info@thechefgrill.com',
};

const photos = {
  heroGrill:
    'https://www.thechefgrill.com/wp-content/uploads/2025/03/dff7373be6d8b3c1c1ab501b29db35e5.jpg',
  heroSpread:
    'https://www.thechefgrill.com/wp-content/uploads/2025/09/dff7373be6d8b3c1c1ab501b29db35e5-370x370-1.jpg',
  breakfast:
    'https://www.thechefgrill.com/wp-content/uploads/2026/04/53212.jpg',
  pide:
    'https://www.thechefgrill.com/wp-content/uploads/2026/04/maxresdefault-14.jpg',
  lahmacun:
    'https://www.thechefgrill.com/wp-content/uploads/2025/03/e423dae9bec48edb5c5ca67e447e0ae9.jpg',
  meze:
    'https://www.thechefgrill.com/wp-content/uploads/2025/03/a15e7644e534c9b879a5a970d0a1ab44.jpg',
  soup:
    'https://www.thechefgrill.com/wp-content/uploads/2026/04/49ac091d03c73060b398694632e80095-300x300.jpg',
  dessert:
    'https://www.thechefgrill.com/wp-content/uploads/2026/04/ab35c0839d6a6d7ec968b9a91f659b7a.jpg',
  cheesecake:
    'https://www.thechefgrill.com/wp-content/uploads/2026/04/dff64c6415641520647c0ad1cf4828ed.jpg',
  diningRoom:
    'https://www.thechefgrill.com/wp-content/uploads/2025/03/New-Project-2025-03-18T004557.016.png',
  openKitchen:
    'https://www.thechefgrill.com/wp-content/uploads/2025/09/New-Project-2024-07-04T033123-3-1-506x315.png',
};

export const content = {
  brand: {
    name: 'The Chef Grill',
    tagline: 'Halal Turkish & Mediterranean grill',
    description:
      'Authentic halal Turkish and Mediterranean food in Elk Grove Village: charcoal-grilled kebabs, pide, lahmacun, manti, breakfast, soups, desserts, ayran, and Turkish tea.',
    address: { line1: '812 E Higgins Rd', line2: 'Elk Grove Village, IL 60007' },
    phone: '(312) 313-8900',
    phoneRaw: '3123138900',
    email: 'info@thechefgrill.com',
    rating: '4.7 ★ / 807 Google reviews',
    social: [
      { label: 'Official site', href: links.official },
      { label: 'Order online', href: links.order },
      { label: 'Uber Eats', href: links.uberEats },
    ],
    geo: { lat: 42.0275064, lng: -87.9753786 },
  },

  nav: {
    primary: [
      { label: 'Home', href: '/' },
      { label: 'Menu', href: '/#menu' },
      { label: 'About', href: '/about' },
      { label: 'Visit', href: '/contact' },
    ],
    cta: { label: 'Order Online', href: links.order },
    proof: '4.7 ★ · 807 reviews',
    mobileCtas: [
      { label: 'Order Online', href: links.order },
      { label: 'View Menu', href: '/#menu' },
      { label: 'Call', href: links.call },
      { label: 'Directions', href: links.directions },
    ],
  },

  hero: {
    kicker: 'Elk Grove Village · halal Turkish grill',
    headline: 'Halal Turkish grill,\ncharcoal kebabs,\nfresh bread daily',
    subcopy:
      'The Chef Grill on Higgins Road serves mixed grills, Iskender, Beyti, Adana, pide, lahmacun, manti, kunefe, pistachio cheesecake, house ayran, and Turkish tea.',
    cta: { label: 'Order Online', href: links.order },
    secondaryCta: { label: 'View Menu', href: '#menu' },
    tertiaryCta: { label: 'Call (312) 313-8900', href: links.call },
    trustChips: ['4.7 ★ Google rating', '807 reviews', 'Halal Turkish & Mediterranean'],
    photos: [
      {
        src: photos.heroGrill,
        alt: 'The Chef Grill mixed grill platter',
      },
      {
        src: photos.pide,
        alt: 'Brick-oven pide from The Chef Grill',
      },
    ],
  },

  menu: [
    {
      id: 'kebabs',
      title: 'Charcoal Kebabs & Mixed Grills',
      entries: [
        {
          type: 'item',
          name: 'King Chef Mix Grill — 2 persons',
          description:
            'Group-style grill platter with tender meats, rice, bulgur, fries, and generous portions.',
          price: '$69',
        },
        {
          type: 'item',
          name: 'King Chef Mix Grill — 4 persons',
          description: 'The larger mixed grill built for family tables and groups.',
          price: '$139',
        },
        { type: 'photo', src: photos.heroGrill, alt: 'King Chef mixed grill from The Chef Grill' },
        {
          type: 'item',
          name: 'Iskender Kebab',
          description:
            'A repeated review favorite with meat over bread, tomato sauce, melted butter, and yogurt noted by guests.',
          price: '$27',
        },
        {
          type: 'item',
          name: 'Lamb Beyti Kebab',
          description: 'Lavash-wrapped Turkish kebab with a rich, satisfying grill flavor.',
          price: '$30',
        },
        { type: 'item', name: 'Adana Kebab', description: 'Classic Turkish grill order with Adana-style seasoned halal meat.', price: '$28' },
        { type: 'item', name: 'Chicken Shish', description: 'Halal chicken kebab with a straightforward charcoal-grill profile.', price: '$24' },
        { type: 'item', name: 'Lamb Chops', description: 'A premium grill order for guests who want a richer lamb plate.', price: '$44' },
      ],
    },
    {
      id: 'brick-oven',
      title: 'Brick Oven Pide & Lahmacun',
      entries: [
        { type: 'item', name: 'Mixed Pide', description: 'Brick-oven Turkish flatbread with a warm, shareable table feel.', price: '$21' },
        { type: 'photo', src: photos.pide, alt: 'Brick-oven pide from The Chef Grill menu' },
        { type: 'item', name: 'Pide with Ground Beef', description: 'Ground-beef pide with a crisp brick-oven edge.', price: '$19' },
        { type: 'item', name: 'Lahmacun — 1 piece', description: 'Turkish pizza served thin, bright, and easy to roll with fresh toppings.', price: '$8' },
        { type: 'item', name: 'Pide with Kashkaval Cheese', description: 'Cheese pide with Kashkaval for a simple, comforting brick-oven order.', price: '$17' },
        { type: 'photo', src: photos.lahmacun, alt: 'Lahmacun from The Chef Grill menu' },
        { type: 'item', name: 'Pide with Soujouk', description: 'Soujouk pide with Turkish sausage and a crisp brick-oven edge.', price: '$19' },
      ],
    },
    {
      id: 'breakfast-soups',
      title: 'Breakfast, Soups & Turkish Comfort',
      entries: [
        { type: 'item', name: 'Breakfast — 1 person', description: 'Mediterranean breakfast plate for a slower Turkish-style morning meal.', price: '$20' },
        { type: 'item', name: 'Mixed Chef Breakfast — for 2', description: 'Shared Turkish breakfast spread built for two.', price: '$49' },
        { type: 'photo', src: photos.breakfast, alt: 'The Chef Grill breakfast menu photo' },
        { type: 'item', name: 'Menemen', description: 'Turkish breakfast skillet with eggs, tomato, and pepper flavor.', price: '$12' },
        { type: 'item', name: 'Soujouk with Egg', description: 'Soujouk-and-egg breakfast plate with a savory Turkish sausage kick.', price: '$13' },
        { type: 'item', name: 'Red Lentil Soup', description: 'Comforting Turkish lentil soup for a warm start to the meal.', price: '$8' },
        { type: 'item', name: 'Kelle Paca Soup', description: 'Traditional Turkish soup with a hearty, old-world comfort profile.', price: '$13' },
        { type: 'photo', src: photos.soup, alt: 'Soup from The Chef Grill menu photos' },
      ],
    },
    {
      id: 'meze-specials',
      title: 'Meze, Hot Sides & Chef Specials',
      entries: [
        { type: 'item', name: 'Mixed Appetizer Plate', description: 'A shareable meze plate made for dips, fresh bread, and starting the table together.', price: '$18' },
        { type: 'photo', src: photos.meze, alt: 'Meze and appetizer spread from The Chef Grill' },
        { type: 'item', name: 'Hummus', description: 'Creamy cold appetizer for dipping with warm bread.', price: '$8' },
        { type: 'item', name: 'Baba Ghanoush', description: 'Smoky cold meze option for the table.', price: '$9' },
        { type: 'item', name: 'Cig Kofte', description: 'A Turkish favorite from the cold appetizer side of the menu.', price: '$10' },
        { type: 'item', name: 'Falafel with Hummus', description: 'Hot side pairing falafel with hummus for easy sharing.', price: '$9' },
        { type: 'item', name: 'Manti', description: 'Turkish dumplings with the comfort-food pull regulars look for.', price: '$25' },
        { type: 'item', name: 'Lamb Shank', description: 'Chef-special lamb shank for a slower, richer table order.', price: '$44' },
      ],
    },
    {
      id: 'seafood-salads-kids',
      title: 'Seafood, Salads & Family Options',
      entries: [
        { type: 'item', name: 'Salmon', description: 'Seafood entrée for guests who want a lighter main plate.', price: '$35' },
        { type: 'item', name: 'Sea Bass', description: 'Fish entrée with a clean Mediterranean direction.', price: '$37' },
        { type: 'item', name: 'Gavurdagi Turkish Walnut Salad', description: 'Turkish walnut salad with a fresh, bright table presence.', price: '$16' },
        { type: 'item', name: 'Arugula Avocado Salad', description: 'Fresh salad option with arugula and avocado.', price: '$18' },
        { type: 'item', name: 'Kids Chicken', description: 'Simple kids chicken option for family tables.', price: '$9' },
        { type: 'item', name: 'Kids Chicken Nuggets', description: 'Family-friendly kids menu option.', price: '$10' },
      ],
    },
    {
      id: 'desserts-drinks',
      title: 'Desserts, Ayran & Turkish Tea',
      entries: [
        { type: 'item', name: 'Pistachio Cheesecake', description: 'A standout dessert for pistachio lovers.', price: '$12' },
        { type: 'photo', src: photos.cheesecake, alt: 'Pistachio cheesecake from The Chef Grill' },
        { type: 'item', name: 'Baklava', description: 'Classic Turkish dessert with flaky pastry and syrup.', price: '$11' },
        { type: 'item', name: 'Orange Pistachio Semolina with Ice Cream', description: 'Warm semolina dessert finished with orange, pistachio, and ice cream.', price: '$12' },
        { type: 'item', name: 'Rice Pudding', description: 'Comforting rice pudding for a classic finish.', price: '$7' },
        { type: 'photo', src: photos.dessert, alt: 'Dessert from The Chef Grill menu photos' },
        { type: 'item', name: 'Ayran — Yogurt Drink', description: 'House ayran for the classic cool yogurt-drink pairing.', price: '$3.95' },
        { type: 'item', name: 'Organic Black Tea', description: 'Organic black tea for a simple Turkish finish.', price: '$1.95' },
        { type: 'item', name: 'Fresh Squeezed Lemonade', description: 'Fresh-squeezed lemonade for a bright, refreshing drink.', price: '$7.95' },
      ],
    },
  ] satisfies MenuSection[],

  tagline: {
    heading: 'Why guests come back:\nhalal trust, charcoal kebabs,\nfresh bread and desserts',
    collage: [
      { src: photos.heroSpread, alt: 'The Chef Grill food spread' },
      { src: photos.openKitchen, alt: 'The Chef Grill open-kitchen food preparation image' },
    ],
    trustIcons: ['4.7 ★ on Google', '807 reviews', 'Family & group dining'],
  },

  blog: {
    heading: 'Google review proof for first-time orders',
    cta: { label: 'Open Google directions', href: links.directions },
    posts: [
      {
        title: '“Fully halal” and authentically Turkish',
        category: 'Review theme',
        date: '4.7 ★ / 807 Google reviews',
        image: photos.heroGrill,
        href: links.directions,
      },
      {
        title: 'Fresh bread, pide, lahmacun, and mixed grill',
        category: 'Menu proof',
        date: 'Google review theme',
        image: photos.pide,
        href: '#menu',
      },
      {
        title: 'Kunefe, pistachio cheesecake, ayran, Turkish tea',
        category: 'Dessert & drinks',
        date: 'Repeated guest mentions',
        image: photos.cheesecake,
        href: '#desserts-drinks',
      },
    ],
  },

  reviewProof: {
    eyebrow: 'Google review proof',
    heading: 'What guests call out again and again',
    cta: { label: 'Open Google directions', href: links.directions },
    reviews: [
      { quote: 'Fully halal food and authentic Turkish cuisine you can enjoy with peace of mind…', source: 'Google Review' },
      { quote: 'The iskender kebap was one of the best I’ve had in a long time…', source: 'Google Review' },
      { quote: 'The crust was perfect, and the flavors were spot on.', source: 'Google Review' },
      { quote: 'Everything came out hot, delicious, and beautifully prepared.', source: 'Google Review' },
      { quote: 'You can smell the delicious grilling meats as soon as you park.', source: 'Google Review' },
      { quote: 'The complimentary freshly baked hot pide bread immediately reminded me of home…', source: 'Google Review' },
      { quote: 'Fresh, flavorful, and perfectly cooked, especially the kebabs and fresh bread.', source: 'Google Review' },
      { quote: 'The pistachio cheesecake was out of this world, creamy and nutty…', source: 'Google Review' },
      { quote: 'The mixed grill dish was amazing, we sampled everything.', source: 'Google Review' },
      { quote: 'The complimentary tea and bread were also amazing.', source: 'Google Review' },
    ],
  },

  faq: {
    eyebrow: 'Need-to-know',
    heading: 'Plan the meal without guessing',
    items: [
      {
        q: 'Is The Chef Grill halal?',
        a: 'Yes. The official site describes The Chef Grill as a halal Turkish and Mediterranean restaurant, and the captured Google reviews repeatedly mention halal and zabiha-halal trust.',
      },
      {
        q: 'What should first-time visitors order?',
        a: 'Review-proven starters and mains include mixed grill, Iskender kebab, Beyti kebab, Adana kebab, pide, lahmacun, manti, lentil soup, ayran, kunefe, baklava, and pistachio cheesecake.',
      },
      {
        q: 'How do I order online?',
        a: 'Use the Order Online button for the official order.online store. Grubhub and Uber Eats links are also available from this site.'
      },
      {
        q: 'Can I reserve or plan for a group?',
        a: 'The official site asks guests to reserve by calling (312) 313-8900 and has a celebration/contact form. Call the restaurant directly to confirm timing, group details, and availability.',
      },
      {
        q: 'Where are you located?',
        a: 'The Chef Grill is at 812 E Higgins Rd, Elk Grove Village, IL 60007. Use the Directions button for Google Maps routing.',
      },
      {
        q: 'What hours are verified?',
        a: 'The official contact form says the restaurant is open from 9:00 AM to 11:30 PM. Day-by-day holiday changes are not shown here, so call before a time-sensitive visit.'
      },
    ],
  },

  closing: {
    heading: 'Order tonight, call ahead,\nor get directions',
    subcopy:
      'Use the official online ordering link for pickup or delivery, call the restaurant to reserve or plan a group meal, or route straight to 812 E Higgins Rd in Elk Grove Village.',
    cta: { label: 'Order Online', href: links.order },
    secondaryCta: { label: 'Get Directions', href: links.directions },
    photo: {
      src: photos.heroSpread,
      alt: 'The Chef Grill mixed grill and table spread',
    },
    hours: [
      { day: 'Official contact form', time: '9:00 AM – 11:30 PM window' },
      { day: 'Phone', time: '3123138900' },
      { day: 'Address', time: '812 E Higgins Rd, Elk Grove Village' },
    ],
  },

  wordmark: 'chef grill',

  footer: {
    tagline: 'Halal Turkish & Mediterranean grill in Elk Grove Village',
    columns: [
      {
        heading: 'Visit',
        lines: ['812 E Higgins Rd', 'Elk Grove Village, IL 60007'],
      },
      {
        heading: 'Order',
        lines: ['Online ordering', 'Grubhub · Uber Eats'],
      },
      {
        heading: 'Contact',
        lines: ['3123138900', 'info@thechefgrill.com'],
      },
    ],
    copyright: '© 2026 The Chef Grill. All rights reserved.'
  },

  about: {
    hero: {
      headline: 'A practical Turkish grill\nwith serious guest proof',
      subcopy:
        'The Chef Grill emphasizes an open kitchen, halal ingredients, charcoal-grilled kebabs, Mediterranean breakfasts, Turkish soups, manti, pide, and desserts. The new flow makes those specifics easy to see before a guest orders, calls, or gets directions.',
      photos: [
        { src: photos.openKitchen, alt: 'The Chef Grill open kitchen food preparation' },
        { src: photos.heroSpread, alt: 'Food spread from The Chef Grill' },
      ],
    },
    values: {
      heading: 'What The Chef Grill makes easy to see',
      items: [
        {
          title: 'Halal confidence',
          body: 'Halal Turkish and Mediterranean positioning is clear right away, with enough specificity to build confidence before guests order.',
        },
        {
          title: 'Menu clarity',
          body: 'Show mixed grills, kebabs, pide, lahmacun, manti, soups, breakfast, desserts, ayran, and Turkish tea before asking a guest to commit.',
        },
        {
          title: 'Fast conversion',
          body: 'Mobile visitors can order online, call, or get directions immediately without extra searching.',
        },
      ],
    },
    staff: {
      heading: 'Proof points guests can trust',
      people: [
        { name: '4.7-star Google rating', role: '807 public Google reviews', photo: photos.heroGrill },
        { name: 'Halal Turkish grill', role: 'A clear reason to choose The Chef Grill', photo: photos.openKitchen },
        { name: 'Fresh bread & pide', role: 'Warm, table-ready Turkish comfort', photo: photos.pide },
        { name: 'Mixed grill for groups', role: 'Built for family-style sharing', photo: photos.heroSpread },
        { name: 'Dessert finish', role: 'Kunefe, baklava, and pistachio cheesecake', photo: photos.cheesecake },
        { name: 'Direct contact path', role: 'Phone, online ordering, directions, and email in one place', photo: photos.heroSpread },
      ],
    },
  },

  contact: {
    eyebrow: 'Visit The Chef Grill',
    heading: 'Order, call, or plan your visit',
    subcopy:
      'Find the official phone, address, email, menu, online ordering, delivery links, and directions path here. For reservations or group timing, call the restaurant directly.',
    form: {
      fields: [
        { name: 'name', label: 'Your name', type: 'text', placeholder: 'Your name' },
        { name: 'email', label: 'Email', type: 'email', placeholder: 'you@example.com' },
        { name: 'subject', label: 'Subject', type: 'text', placeholder: 'Reservation or order question' },
        { name: 'message', label: 'Message', type: 'textarea', placeholder: 'Tell The Chef Grill what you need...' },
      ],
      submitLabel: 'Prepare message',
      helper:
        'Use phone or email to contact the restaurant directly.'
    },
    info: {
      heading: 'The Chef Grill',
      address: ['812 E Higgins Rd', 'Elk Grove Village, IL 60007'],
      phone: '3123138900',
      email: 'info@thechefgrill.com',
      hours: ['Official contact form: 9:00 AM – 11:30 PM', 'Call before time-sensitive visits'],
      links: [
        { label: 'Menu', href: links.menu },
        { label: 'Order online', href: links.order },
        { label: 'Grubhub', href: links.grubhub },
        { label: 'Uber Eats', href: links.uberEats },
        { label: 'Directions', href: links.directions },
      ],
    },
  },
};
