// Moontime Smokin' Que content for the bramble-01 fork.

const orderUrl = 'https://order.toasttab.com/online/moontime-smokin-que-88-railroad-street-unit-a';
const menuUrl = 'https://moontimebbq.com/menu/';
const weeklyMenuUrl = 'https://moontimebbq.com/?page_id=353';
const contactUrl = 'https://moontimebbq.com/contact/';
const cateringUrl = contactUrl;
const giftCardUrl = 'https://www.toasttab.com/moontime-smokin-que-88-railroad-street-unit-a/giftcards';
const rewardsUrl = 'https://www.toasttab.com/moontime-smokin-que-88-railroad-street-unit-a/rewardsSignup';
const facebookUrl = 'https://www.facebook.com/moontimebbq/';
const instagramUrl = 'https://www.instagram.com/smokininthemoontime/';
const address = '88 Railroad Street Unit A, Crystal Lake, IL 60014';
const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`Moontime Smokin' Que ${address}`)}`;
const phone = '(779) 994-7119';
const phoneHref = 'tel:+17799947119';
const email = 'catering@moontimebbq.com';
const heroPlate = 'images/raw/plate.png';

export const content = {
  brand: {
    name: "Moontime Smokin' Que",
    wordmark: "Moontime Smokin' Que",
    tagline: 'Downtown Crystal Lake smokehouse and bar',
    description:
      "Moontime Smokin' Que is a downtown Crystal Lake smokehouse and bar serving wood-fired barbecue, Toast carryout, and catering from Heather and Joe Cummings.",
    address,
    addressShort: '88 RAILROAD ST UNIT A - CRYSTAL LAKE IL',
    phone,
    phoneHref,
    email,
    menuPdfUrl: menuUrl,
    weeklyMenuUrl,
    orderUrl,
    contactUrl,
    cateringUrl,
    directionsUrl,
    giftCardUrl,
    rewardsUrl,
    facebookUrl,
    instagramUrl,
    hoursConfig: {
      timezone: 'America/Chicago',
      ranges: [
        { day: 3 as const, open: '11:00', close: '21:00' },
        { day: 4 as const, open: '11:00', close: '21:00' },
        { day: 5 as const, open: '11:00', close: '22:00' },
        { day: 6 as const, open: '11:00', close: '22:00' },
        { day: 0 as const, open: '11:00', close: '19:00' },
      ],
      closures: [],
    },
  },

  actions: [
    { label: 'Order Online', href: orderUrl, primary: true },
    { label: 'Catering / Events', href: cateringUrl, primary: true },
    { label: 'Menu', href: '#menus', primary: false },
    { label: 'Call', href: phoneHref, primary: false },
    { label: 'Directions', href: directionsUrl, primary: false },
  ],

  hero: {
    slides: [
      { src: heroPlate, alt: "Moontime Smokin' Que brisket, ribs, wings, cornbread, beans, pickled onions, and sauces", position: '50% 48%' },
      { src: heroPlate, alt: "Moontime Smokin' Que ribs and sauce ramekins", position: '34% 50%' },
      { src: heroPlate, alt: "Moontime Smokin' Que smoked wings, cornbread, and baked beans", position: '68% 53%' },
    ],
    localLine: 'Wood-fired barbecue on Railroad Street in downtown Crystal Lake',
    proofLine: "Black Angus brisket off Primitive Pits, blueberry chipotle ribs, smoked wings, and catering sized for 20-300 guests.",
  },

  tagline: {
    body:
      'Heather and Joe Cummings started with catering and carryout in 2017. Today, two Primitive Pits feed a downtown smokehouse, bar, and event-ready BBQ program.',
  },

  proof: [
    { label: 'Google proof', value: '4.5-star Google listing with 424 reviews in the captured packet' },
    { label: 'Smoke proof', value: 'Primitive Pits, hickory, oak, cherry, and review-backed smokiness' },
    { label: 'Menu cues', value: 'Ribs, wings, brisket grilled cheese, pulled pork tacos' },
    { label: 'Catering path', value: '20-300 person packages through the verified contact form' },
  ],

  polaroids: [
    { src: heroPlate, alt: 'Sliced brisket and glossy ribs on butcher paper', rotation: -5, position: '42% 45%' },
    { src: heroPlate, alt: 'Smoked wings with sauce ramekins', rotation: 3, position: '70% 46%' },
    { src: heroPlate, alt: 'Cornbread and baked beans beside smoked meats', rotation: -2, position: '57% 69%' },
    { src: heroPlate, alt: 'Pickled onions and barbecue sides', rotation: 5, position: '28% 69%' },
    { src: heroPlate, alt: 'Blueberry chipotle barbecue sauce with ribs', rotation: -3, position: '33% 53%' },
    { src: heroPlate, alt: 'Downtown smokehouse plate for carryout and catering', rotation: 2, position: '53% 50%' },
  ],

  hoursIntro: 'Open Wednesday through Sunday. The kitchen closes one hour before posted closing.',
  hours: [
    { day: 'Monday', time: 'Closed' },
    { day: 'Tuesday', time: 'Closed' },
    { day: 'Wednesday - Thursday', bar: '11am - 9pm', kitchen: 'Kitchen until 8pm' },
    { day: 'Friday - Saturday', bar: '11am - 10pm', kitchen: 'Kitchen until 9pm' },
    { day: 'Sunday', bar: '11am - 7pm', kitchen: 'Kitchen until 6pm' },
  ],

  menus: {
    title: 'The BBQ guests come back for',
    centerpieceImage: heroPlate,
    centerpieceAlt: 'Moontime barbecue spread with brisket, ribs, wings, cornbread, beans, and sauce',
    food: {
      label: 'Ribs, wings, brisket',
      pdfUrl: orderUrl,
      items: [
        'Smoked wings with house sauce',
        "Premium Duroc ribs with blueberry chipotle 'que",
        'Pulled pork and smoked turkey by the half pound',
        'Brisket taco with chipotle crema',
        'Pulled pork taco with tomatillo salsa',
      ],
    },
    drinks: {
      label: 'Sandwiches, sides, sauces',
      pdfUrl: orderUrl,
      items: [
        'Brisket grilled cheese with blueberry chipotle dip',
        'Cubano with pulled pork and pit ham',
        "Grandma's baked beans",
        'Cheese curds with homemade ranch',
        'Jalapeno cheddar cornbread',
      ],
    },
    sauceNote: 'Captured review themes keep naming smoke quality, blueberry chipotle sauce, baked beans, cornbread, cheese curds, and friendly service.',
    fullMenuCta: { label: 'View Current Menu', href: menuUrl },
  },

  floralBreak: {
    image: heroPlate,
    alt: "Moontime Smokin' Que barbecue plate with smokehouse sides",
    position: '50% 50%',
  },

  giftCards: {
    title: 'Catering / events',
    body:
      'Moontime began with catering and carryout, and the current site offers packages for 20 to 300 people. Use the verified contact path for parties, work lunches, family events, and group meals.',
    cta: { label: 'Start Catering Request', href: cateringUrl },
  },
  careers: {
    title: "Heather and Joe's pit story",
    body:
      'Heather and Joe Cummings started Moontime in 2017, then grew it from carryout and catering into a full-service Crystal Lake smokehouse with a bar.',
    cta: { label: 'Call the Restaurant', href: phoneHref },
  },

  reviewPhrases: ['Hidden gem', 'Perfect smokiness', 'Texas-approved brisket', 'Creative sauces', 'Kid friendly', 'Downtown Crystal Lake'],

  reviewsAnon: [
    { quote: 'The food was delicious, the staff was friendly, a relaxed atmosphere.', source: 'Google Review' },
    { quote: 'Moontime Smokin Que is a hidden gem of a place.', source: 'Google Review' },
    { quote: 'Pulled pork was juicy, with the perfect amount of smoke flavor.', source: 'Google Review' },
    { quote: 'Sauce was just tangy enough. The blueberry salsa was heavenly.', source: 'Google Review' },
    { quote: 'We ordered the Smoked Turkey for Thanksgiving and it was absolutely delicious!', source: 'Google Review' },
    { quote: 'The pulled pork was superb, and the brisket was so good...', source: 'Google Review' },
    { quote: 'Very good brisket, almost everything is gluten free or can be.', source: 'Google Review' },
    { quote: 'Excellent grilled cheese & brisket, curds & Mac & cheese!', source: 'Google Review' },
    { quote: 'Creative drinks and sauces. The atmosphere is light and warm.', source: 'Google Review' },
    { quote: 'The Brisket was perfectly cooked and smokey. The Cubano was also excellent.', source: 'Google Review' },
  ],

  cateringCta: {
    title: 'Bring the smokehouse to the table',
    subtitle: 'Use the verified catering contact form or email the team directly for events and group meals.',
    primary: { label: 'Catering / Events', href: cateringUrl },
    secondary: { label: email, href: `mailto:${email}` },
  },

  footer: {
    wordmark: "Moontime Smokin' Que",
    note: 'Started as a 2017 catering and carryout shop; now a downtown smokehouse built around two Primitive Pits.',
    credit: '88 Railroad Street Unit A, Crystal Lake, IL 60014',
    links: [
      { label: 'Order Online', href: orderUrl },
      { label: 'Current Menu', href: menuUrl },
      { label: 'Catering', href: cateringUrl },
      { label: 'Contact', href: contactUrl },
      { label: 'Directions', href: directionsUrl },
      { label: 'Gift Cards', href: giftCardUrl },
      { label: 'Rewards', href: rewardsUrl },
      { label: 'Facebook', href: facebookUrl },
      { label: 'Instagram', href: instagramUrl },
    ],
  },
} as const;

export type SiteContent = typeof content;
