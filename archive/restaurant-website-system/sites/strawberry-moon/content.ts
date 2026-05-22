const officialImageBase = 'https://strawberrymoonmartinisandmore.weebly.com/uploads/9/2/6/0/92606188';

export const content = {
  brand: {
    name: 'Strawberry Moon',
    tagline: 'Martinis, wine, live music, and cozy nights behind the red door in Wauconda.',
    description:
      'Strawberry Moon is a cozy Wauconda martini bar with wine, nibbles, decadent desserts, live music, and first-come seating behind the red door on Main Street.',
    address: {
      line1: '204 S Main St',
      line2: 'Wauconda, IL 60084',
    },
    phone: '847-865-5151',
    phoneHref: 'tel:+18478655151',
    email: 'thomasmalik830@gmail.com',
    emailHref: 'mailto:thomasmalik830@gmail.com',
    officialSite: 'https://strawberrymoonmartinisandmore.weebly.com/',
    eventsPage: 'https://strawberrymoonmartinisandmore.weebly.com/events.html',
    bookEventPage: 'https://strawberrymoonmartinisandmore.weebly.com/bookanevent.html',
    directionsHref:
      'https://www.google.com/maps/search/?api=1&query=204+S+Main+St+Wauconda+IL+60084',
    statusLine: 'Tuesday-Saturday · open 4 pm · first come, first served',
    googleSummary: '4.7 on Google · 214 reviews · $20–30 · Bar',
    quickFacts: [
      'Tue-Sat from 4 pm',
      'First-come seating',
      'Live music Thu-Sat',
      '204 S Main St',
    ],
    hours: [
      { days: 'Tuesday - Saturday', time: 'Open 4 pm' },
      { days: 'Seating', time: 'First-come, first-served' },
      { days: 'Live music', time: 'Thu 6:30-9:30 · Fri-Sat 7-10' },
    ],
    geo: { lat: 42.2595094, lng: -88.1402679 },
  },

  nav: {
    links: [
      { label: 'home', href: '/' },
      { label: 'about', href: '/about' },
      { label: 'menu', href: '/menu' },
      { label: 'contact', href: '/contact' },
      { label: 'events', href: 'https://strawberrymoonmartinisandmore.weebly.com/events.html', external: true },
    ],
  },

  home: {
    cocktailPhotoRow: [
      { src: `${officialImageBase}/img-0586.jpg`, alt: 'Strawberry Moon martinis and bar detail' },
      { src: `${officialImageBase}/img-0587.jpg`, alt: 'Cocktail and lounge detail at Strawberry Moon' },
      { src: `${officialImageBase}/img-0588.jpg`, alt: 'Drink detail inside Strawberry Moon' },
      { src: `${officialImageBase}/img-0594.jpg`, alt: 'Warm bar scene at Strawberry Moon' },
    ],
    editorialParagraph:
      'Behind the red door on Main Street, Strawberry Moon sells the kind of night people actually mention by name afterward: Tuesday martini flights, signature pours like the Strawberry Moon and Stormy Night martinis, wine and cheese fondue, and live sets that stay lively without wiping out conversation.',
    galleryLink: { label: 'see the room', href: '/about' },
    asymmetricGallery: {
      left: {
        src: `${officialImageBase}/sign_1.jpg`,
        alt: 'Strawberry Moon exterior sign',
        aspect: 'portrait' as const,
      },
      right: {
        src: `${officialImageBase}/moon-upstairs_1.jpg`,
        alt: 'Strawberry Moon upstairs seating',
        aspect: 'landscape' as const,
      },
    },
    cocktailsNoPrice: [
      {
        name: 'Tuesday flights and named house pours',
        desc: 'Regulars explicitly call out Tuesday martini flights, the Strawberry Moon martini, dirty martinis, and the Stormy Night martini, which gives the bar a real signature-drink identity instead of generic cocktail copy.',
      },
      {
        name: 'Wine, fondue, and actual shareables',
        desc: 'Official copy promises wine, nibbles, and decadent desserts; guests make that concrete with wine and cheese fondue, pretzel nuggets, appetizers, and noshes that turn a stop-in drink into a full evening.',
      },
      {
        name: 'Live music that still leaves room to talk',
        desc: 'Thursday through Saturday performances are part of the draw, and guests still describe the upstairs as quiet enough for conversation instead of a too-loud bar night.',
      },
      {
        name: 'Bartenders who read the room',
        desc: 'Knowledgeable bartenders, custom off-menu drinks, warm welcomes, and Tom-level owner hospitality make the room feel looked after without making it feel precious.',
      },
    ],
    numberedEyebrow: { number: '03', label: 'THE NIGHT' },
    occasions: [
      {
        heading: 'Date night',
        body: 'Small tables, candlelit energy, and an intimate room that guests repeatedly call out for date nights, ladies nights, and an evening that feels tucked away rather than overproduced.',
        photo: { src: `${officialImageBase}/strawberry-moon-1.jpg`, alt: 'Interior mood at Strawberry Moon' },
      },
      {
        heading: 'Live music',
        body: 'The events page makes the calendar a real reason to return, with Thursday, Friday, and Saturday sets spanning R&B, classic rock, and local acoustic acts without turning the lounge into a loud nightclub.',
        photo: { src: `${officialImageBase}/img-0603.jpg`, alt: 'Stage or live music atmosphere at Strawberry Moon' },
      },
      {
        heading: 'Warm hospitality',
        body: 'Guests talk about being greeted warmly, offered birthday cake, and steered toward the right martini or custom cocktail by bartenders who know how to read the room.',
        photo: { src: `${officialImageBase}/img-0604.jpg`, alt: 'Bar hospitality detail at Strawberry Moon' },
      },
    ],
    brandStory: {
      paragraph:
        'Strawberry Moon has the details that make a lounge memorable: a red-door arrival, two levels, martinis that locals come back for, and live performers who make the room feel active without flattening the cozy side of the night. Tuesday flights give groups an easy way in, the upstairs offers a quieter perch, and fondue, pretzel nuggets, and custom drinks make it easy to linger.',
      thumbnails: [
        { src: `${officialImageBase}/img-0592.jpg`, alt: 'Cocktail at Strawberry Moon' },
        { src: `${officialImageBase}/img-0588.jpg`, alt: 'Drink and garnish at Strawberry Moon' },
        { src: `${officialImageBase}/moon-upstairs_1.jpg`, alt: 'Upstairs seating at Strawberry Moon' },
      ],
    },
    events: {
      label: "Live music, Thursdays through Saturdays",
      items: [
        {
          src: `${officialImageBase}/lj-and-jeff.jpg`,
          alt: 'Live music performer image from Strawberry Moon events page',
          caption: 'Thursdays · 6:30-9:30 pm',
        },
        {
          src: `${officialImageBase}/heather-moran-and-steve-gritman.jpg`,
          alt: 'Friday music act from Strawberry Moon events page',
          caption: 'Fridays · 7-10 pm',
        },
        {
          src: `${officialImageBase}/john-ludy-puleo2.jpg`,
          alt: 'Saturday music act from Strawberry Moon events page',
          caption: 'Saturdays · 7-10 pm',
        },
      ],
    },
  },

  menu: {
    categories: [
      {
        title: 'Martinis',
        items: [
          {
            name: 'Weekly martinis',
            desc: 'Rotating weekly pours and Tuesday martini flights give guests a low-pressure way to try more than one lane.',
            meta: 'Local favorite',
          },
          {
            name: 'Strawberry Moon martini',
            desc: 'Named directly by guests as a house hit and an easy starting point if you want the signature order.',
            meta: 'Signature',
          },
          {
            name: 'Dirty martini',
            desc: 'A repeat public favorite alongside the sweeter seasonal and fruit-forward options.',
            meta: 'House favorite',
          },
          {
            name: 'Stormy Night martini',
            desc: 'Another named drink that helps the house cocktail identity feel specific rather than generic.',
            meta: 'Named pour',
          },
          {
            name: 'Custom craft cocktails',
            desc: 'Bartenders can build on or off menu, which matters when regulars want something tuned to taste rather than just ordered by name.',
            meta: 'Staff craft',
          },
        ],
      },
      {
        title: 'Wine & more',
        items: [
          {
            name: 'Wine list',
            desc: 'The official site\'s own promise is simple and useful: martinis, wine, and more.',
            meta: 'House list',
          },
          {
            name: 'Curated cocktails',
            desc: 'The broader cocktail list has enough range for guests who want something creative even when martinis are not the only goal.',
            meta: 'Local favorite',
          },
          {
            name: 'Adult beverages beyond the martini list',
            desc: 'A wider adult beverage spread gives the room more range than a one-note martini bar.',
            meta: 'Local favorite',
          },
          {
            name: 'Tuesday flight energy',
            desc: 'Martini flights on Tuesdays are a real repeat reason people mention returning.',
            meta: 'Tuesday feature',
          },
        ],
      },
      {
        title: 'Nibbles & sweets',
        items: [
          {
            name: 'Wine and cheese fondue',
            desc: 'A natural companion to martini orders when the night calls for something slower and more shareable.',
            meta: 'Local favorite',
          },
          {
            name: 'Appetizers and noshes',
            desc: 'Nibbles and light bites keep the room from feeling like a one-drink stop.',
            meta: 'Light bites',
          },
          {
            name: 'Pretzel nuggets',
            desc: 'A casual, shareable bar snack that fits the martini-and-music rhythm.',
            meta: 'Local favorite',
          },
          {
            name: 'Decadent desserts',
            desc: 'A sweeter finish for nights that turn from one cocktail into a full visit.',
            meta: 'House list',
          },
        ],
      },
    ],
    photoStrip: [
      { src: `${officialImageBase}/img-0586.jpg`, alt: 'Strawberry Moon martini close-up' },
      { src: `${officialImageBase}/img-0594.jpg`, alt: 'Cocktail at Strawberry Moon bar' },
      { src: `${officialImageBase}/img-0603.jpg`, alt: 'Atmosphere inside Strawberry Moon' },
      { src: `${officialImageBase}/img-0587.jpg`, alt: 'Drink detail at Strawberry Moon' },
    ],
    cantFind: {
      heading: 'Need the latest nightly details?',
      body: 'For the latest martini pages, rotating specials, and live schedule, head to Strawberry Moon\'s current site and events page.',
      linkLabel: 'go to the current site',
      linkHref: 'https://strawberrymoonmartinisandmore.weebly.com/',
      photos: [
        { src: `${officialImageBase}/img-0588.jpg`, alt: 'Cocktail detail at Strawberry Moon' },
        { src: `${officialImageBase}/img-0592.jpg`, alt: 'Bar detail at Strawberry Moon' },
      ],
    },
  },

  about: {
    h1Part1: 'Cozy martini nights in',
    h1Part2: 'Wauconda',
    stats: [
      { value: '4.7', label: 'Google rating' },
      { value: '214', label: 'Google reviews' },
      { value: 'Tue-Sat', label: 'Open from 4 pm' },
      { value: '3', label: 'Live music nights' },
    ],
    story:
      'Strawberry Moon reads as an intimate local lounge with real repeat traffic: a warm room, a strong martini list, a live-music cadence, and a two-level setup that makes the space feel bigger than it first looks.',
    aboutGallery: [
      { src: `${officialImageBase}/sign_1.jpg`, alt: 'Strawberry Moon exterior sign' },
      { src: `${officialImageBase}/moon-upstairs_1.jpg`, alt: 'Upstairs view at Strawberry Moon' },
    ],
    proofHeading: 'What guests come back for',
    proofItems: [
      {
        name: 'Knowledgeable bartenders',
        desc: 'Guests say the staff can make drinks on or off the menu and steer people toward the right martini without making the room feel precious.',
      },
      {
        name: 'Tom-level hospitality',
        desc: 'Owner warmth and hands-on hospitality are part of the appeal, especially when guests want a place that feels personal.',
      },
      {
        name: 'Two levels, one intimate feel',
        desc: 'The upstairs shows up in reviews as the quieter perch, while the lower level carries the music without taking over the entire visit.',
      },
      {
        name: 'Live music with range',
        desc: 'Official copy mentions performers from R&B to classic rock and the event page backs up the recurring Thursday through Saturday cadence.',
      },
      {
        name: 'Small but mighty',
        desc: 'That exact guest feeling shows up more than once: intimate room, strong drinks, and enough food to keep it from being a one-drink stop.',
      },
      {
        name: 'First-come, first-served',
        desc: 'Strawberry Moon lists seating as first-come, first-served, so the plan-a-visit path stays honest about that policy.',
      },
    ],
  },

  contact: {
    eyebrow: 'Call, directions, and live music',
    h1: 'Plan a Strawberry Moon night',
    direct: {
      heading: 'Call before you go',
      call: { label: 'Call', value: '847-865-5151', href: 'tel:+18478655151' },
      email: { label: 'Email', value: 'thomasmalik830@gmail.com', href: 'mailto:thomasmalik830@gmail.com' },
      directions: { label: 'Directions', value: '204 S Main St', href: 'https://www.google.com/maps/search/?api=1&query=204+S+Main+St+Wauconda+IL+60084' },
    },
    visit: {
      heading: 'Visit us',
      address: ['Strawberry Moon', '204 S Main St', 'Wauconda, IL 60084'],
      directionsLink: 'https://www.google.com/maps/search/?api=1&query=204+S+Main+St+Wauconda+IL+60084',
      hoursHeading: 'Hours & seating',
      hours: [
        'Tuesday-Saturday · open 4 pm',
        'First-come, first-served seating',
        'Live music Thu 6:30-9:30 · Fri-Sat 7-10',
      ],
    },
    socials: {
      heading: 'Quick links',
      links: [
        { label: 'Current site', href: 'https://strawberrymoonmartinisandmore.weebly.com/', external: true },
        { label: 'Events page', href: 'https://strawberrymoonmartinisandmore.weebly.com/events.html', external: true },
        { label: 'Book an event', href: 'https://strawberrymoonmartinisandmore.weebly.com/bookanevent.html', external: true },
        { label: 'Email', href: 'mailto:thomasmalik830@gmail.com' },
        { label: 'Directions', href: 'https://www.google.com/maps/search/?api=1&query=204+S+Main+St+Wauconda+IL+60084', external: true },
      ],
    },
    panel: {
      heading: 'Your easiest next step',
      body: 'Strawberry Moon is a first-come martini lounge, so the easiest plan is simple: call if you have a question, get directions, then check the live-music calendar for the current lineup.',
      actions: [
        { label: 'Call Strawberry Moon', href: 'tel:+18478655151', style: 'primary' as const },
        { label: 'Email Strawberry Moon', href: 'mailto:thomasmalik830@gmail.com', style: 'secondary' as const },
        { label: 'Get directions', href: 'https://www.google.com/maps/search/?api=1&query=204+S+Main+St+Wauconda+IL+60084', style: 'secondary' as const },
        { label: 'Visit current site', href: 'https://strawberrymoonmartinisandmore.weebly.com/', style: 'secondary' as const },
        { label: 'See events page', href: 'https://strawberrymoonmartinisandmore.weebly.com/events.html', style: 'secondary' as const },
        { label: 'Book an event', href: 'https://strawberrymoonmartinisandmore.weebly.com/bookanevent.html', style: 'secondary' as const },
      ],
      notes: [
        '4.7 on Google across 214 reviews, listed as a $20-30 bar.',
        'Martinis, wine, nibbles, decadent desserts, and live music are the core of the night.',
        'Official contact paths include phone, email, the events page, and the current-site Book an Event page.',
        'Two levels, Tuesday martini flights, friendly bartenders, and warm hospitality give the room its regulars-come-back feel.',
      ],
    },
    interiorStrip: [
      { src: `${officialImageBase}/strawberry-moon-1.jpg`, alt: 'Interior view at Strawberry Moon' },
      { src: `${officialImageBase}/moon-upstairs_1.jpg`, alt: 'Upstairs lounge at Strawberry Moon' },
      { src: `${officialImageBase}/img-0594.jpg`, alt: 'Cocktail and table at Strawberry Moon' },
      { src: `${officialImageBase}/img-0604.jpg`, alt: 'Venue detail at Strawberry Moon' },
    ],
    faqHeading: 'Good to know before you go',
    faqs: [
      {
        q: 'Do you take reservations?',
        a: 'Strawberry Moon lists seating as first-come, first-served, so the best move is to call ahead if timing matters.',
      },
      {
        q: 'What is Strawberry Moon known for?',
        a: 'Martinis lead the story, with wine, nibbles, decadent desserts, weekly specials, custom cocktails, and wine and cheese fondue in the mix.',
      },
      {
        q: 'When is live music?',
        a: 'The events page lists Thursdays from 6:30 to 9:30 pm, with Fridays and Saturdays from 7 to 10 pm.',
      },
      {
        q: 'What is the room like?',
        a: 'Guests describe Strawberry Moon as intimate, cozy, and bigger than it first appears because of the two-level setup and quieter upstairs seating.',
      },
      {
        q: 'Why does the site lean so hard on hospitality?',
        a: 'Because Strawberry Moon is not just selling drinks. The draw is a warm room, friendly bartenders, owner hospitality, and a night that feels personal.',
      },
    ],
  },

  footer: {
    contactHeading: 'Contact',
    links: [
      { label: 'home', href: '/' },
      { label: 'about', href: '/about' },
      { label: 'menu', href: '/menu' },
      { label: 'events', href: 'https://strawberrymoonmartinisandmore.weebly.com/events.html', external: true },
      { label: 'current site', href: 'https://strawberrymoonmartinisandmore.weebly.com/', external: true },
    ],
    colophon: 'Martinis, wine, live music, and cozy nights behind the red door in Wauconda.',
  },
} as const;

export type Content = typeof content;
