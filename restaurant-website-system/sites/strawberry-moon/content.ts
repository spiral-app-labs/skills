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
    directionsHref:
      'https://www.google.com/maps/search/?api=1&query=204+S+Main+St+Wauconda+IL+60084',
    statusLine: 'Tuesday-Saturday · open 4 pm · first come, first served',
    googleSummary: '4.7 on Google · 214 reviews · $20–30 · Bar',
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
      'Behind the red door on Main Street, Strawberry Moon leans into the part of a night out that people actually remember: martinis, wine, easy small plates, and live sets that keep the room lively without turning it into a shout-over-the-band bar.',
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
        name: 'Martinis first',
        desc: 'The official site leads with martinis, and regulars keep naming weekly pours, dirty martinis, Stormy Night martinis, and the house Strawberry Moon martini.',
      },
      {
        name: 'Wine, fondue, and noshes',
        desc: 'Official copy promises wine, nibbles, and decadent desserts; reviews keep adding wine and cheese fondue, appetizers, pretzel nuggets, and easy shareables to the picture.',
      },
      {
        name: 'Live music that still leaves room to talk',
        desc: 'Thursday through Saturday performances are a core part of the experience, with guests specifically noting the upstairs stays quiet enough for conversation.',
      },
      {
        name: 'Friendly bartenders',
        desc: 'The review packet repeatedly points to knowledgeable bartenders, warm welcomes, and owner hospitality from Tom when people want a local place that feels looked after.',
      },
    ],
    numberedEyebrow: { number: '03', label: 'THE NIGHT' },
    occasions: [
      {
        heading: 'Date night',
        body: 'Small tables, candlelit energy, and a room that feels tucked away rather than overproduced. Guests repeatedly call it a strong pick for romantic nights out.',
        photo: { src: `${officialImageBase}/strawberry-moon-1.jpg`, alt: 'Interior mood at Strawberry Moon' },
      },
      {
        heading: 'Live music',
        body: 'The official events page makes the calendar a real reason to return, with Thursday, Friday, and Saturday sets spanning R&B, classic rock, and local acoustic acts.',
        photo: { src: `${officialImageBase}/img-0603.jpg`, alt: 'Stage or live music atmosphere at Strawberry Moon' },
      },
      {
        heading: 'Warm hospitality',
        body: 'Guests talk about being greeted warmly, offered birthday cake, and steered toward the right martini or cocktail by bartenders who know how to read the room.',
        photo: { src: `${officialImageBase}/img-0604.jpg`, alt: 'Bar hospitality detail at Strawberry Moon' },
      },
    ],
    brandStory: {
      paragraph:
        'Strawberry Moon already has the real identity most lounge sites try to fake: a red-door arrival, two levels, martinis that locals drive back for, and live performers that make the room feel active without flattening the cozy side of the night. This first preview keeps the Velvet Shaker frame, but warms it toward the softer Bramble lane that fits Strawberry Moon better.',
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
            desc: 'The review packet calls out rotating weekly pours and Tuesday martini flights for guests who want to try more than one lane.',
            meta: 'Review-backed',
          },
          {
            name: 'Strawberry Moon martini',
            desc: 'Named directly by guests as a house hit and an easy starting point if you want the signature order.',
            meta: 'Signature',
          },
          {
            name: 'Dirty martini',
            desc: 'A repeat public favorite alongside the sweeter seasonal and fruit-forward options.',
            meta: 'Guest favorite',
          },
          {
            name: 'Stormy Night martini',
            desc: 'Another named drink from the review packet that helps prove the house cocktail identity is real, not generic.',
            meta: 'Named in reviews',
          },
          {
            name: 'Custom craft cocktails',
            desc: 'Reviews say the bartenders can build on or off menu, which matters when regulars want something tuned to taste rather than just ordered by name.',
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
            meta: 'Official site',
          },
          {
            name: 'Curated cocktails',
            desc: 'Guests repeatedly describe the broader cocktail list as creative, curated, and worth the drive even when martinis are not the only goal.',
            meta: 'Review-backed',
          },
          {
            name: 'Adult beverages beyond the martini list',
            desc: 'Public reviews describe a wider adult beverage spread, which gives the room more range than a one-note martini bar.',
            meta: 'Review-backed',
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
            desc: 'One of the clearest review-backed food tells. Guests mention it alongside martini orders when explaining why the stop felt complete.',
            meta: 'Review-backed',
          },
          {
            name: 'Appetizers and noshes',
            desc: 'Official copy promises nibbles, while multiple reviews use appetizer and nosh language to describe the light-food side of the bar.',
            meta: 'Official + reviews',
          },
          {
            name: 'Pretzel nuggets',
            desc: 'Called out directly in the review packet with multiple dipping sauces.',
            meta: 'Review-backed',
          },
          {
            name: 'Decadent desserts',
            desc: 'The current official homepage uses that exact phrase, so the sweeter finish belongs in the pitch.',
            meta: 'Official site',
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
      body: 'This preview keeps the proof tight and factual. For the official martini pages, rotating specials, and live schedule, hand off to Strawberry Moon\'s own site and events page.',
      linkLabel: 'go to the official site',
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
      'The official site is thin, but the public proof is not. Strawberry Moon reads as an intimate local lounge with real repeat traffic: people praise the atmosphere, the bartenders, the music lineup, and the fact that the space is bigger than it first looks thanks to a second level with quieter upstairs seating.',
    aboutGallery: [
      { src: `${officialImageBase}/sign_1.jpg`, alt: 'Strawberry Moon exterior sign' },
      { src: `${officialImageBase}/moon-upstairs_1.jpg`, alt: 'Upstairs view at Strawberry Moon' },
    ],
    proofHeading: 'What the review packet actually proves',
    proofItems: [
      {
        name: 'Knowledgeable bartenders',
        desc: 'Guests say the staff can make drinks on or off the menu and steer people toward the right martini without making the room feel precious.',
      },
      {
        name: 'Tom-level hospitality',
        desc: 'Tom is named directly in the review packet for hospitality, and other guests describe owner circulation and hands-on warmth as part of the appeal.',
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
        desc: 'The official homepage now explicitly says seating is first-come, first-served, so the conversion path should stay honest about that policy.',
      },
    ],
  },

  contact: {
    eyebrow: '(call, directions, official handoff)',
    h1: 'Plan a Strawberry Moon night honestly',
    bookNow: {
      heading: 'Use the real paths',
      viaEmail: { label: 'Email', value: 'thomasmalik830@gmail.com', href: 'mailto:thomasmalik830@gmail.com' },
      whatsapp: { label: 'Call', value: '847-865-5151', href: 'tel:+18478655151' },
    },
    visit: {
      heading: 'Visit us',
      address: ['Strawberry Moon', '204 S Main St', 'Wauconda, IL 60084'],
      directionsLink: 'https://www.google.com/maps/search/?api=1&query=204+S+Main+St+Wauconda+IL+60084',
      hoursHeading: 'What is confirmed',
      hours: [
        'Tuesday-Saturday · open 4 pm',
        'First-come, first-served seating',
        'Live music Thu 6:30-9:30 · Fri-Sat 7-10',
      ],
    },
    socials: {
      heading: 'Quick links',
      links: [
        { label: 'Official site', href: 'https://strawberrymoonmartinisandmore.weebly.com/', external: true },
        { label: 'Events page', href: 'https://strawberrymoonmartinisandmore.weebly.com/events.html', external: true },
        { label: 'Directions', href: 'https://www.google.com/maps/search/?api=1&query=204+S+Main+St+Wauconda+IL+60084', external: true },
        { label: 'Email', href: 'mailto:thomasmalik830@gmail.com', external: true },
      ],
    },
    panel: {
      heading: 'Keep the handoff clean',
      body: 'This preview avoids fake booking, fake ordering, and fake private-event claims. The strongest conversion path here is direct call, direct email, directions, and the official pages for the current lineup.',
      actions: [
        { label: 'Call Strawberry Moon', href: 'tel:+18478655151', style: 'primary' as const },
        { label: 'Email the bar', href: 'mailto:thomasmalik830@gmail.com', style: 'secondary' as const },
        { label: 'Open the official site', href: 'https://strawberrymoonmartinisandmore.weebly.com/', style: 'secondary' as const },
        { label: 'See the events page', href: 'https://strawberrymoonmartinisandmore.weebly.com/events.html', style: 'secondary' as const },
      ],
      notes: [
        'Google summary captured in the audit: 4.7 rating from 214 reviews, listed as a $20-30 bar.',
        'Official homepage language: martinis, wine and more, delicious nibbles, decadent desserts, and live music.',
        'Review packet proof: cozy two-level setting, friendly knowledgeable bartenders, and warm hospitality from Tom and the team.',
      ],
    },
    interiorStrip: [
      { src: `${officialImageBase}/strawberry-moon-1.jpg`, alt: 'Interior view at Strawberry Moon' },
      { src: `${officialImageBase}/moon-upstairs_1.jpg`, alt: 'Upstairs lounge at Strawberry Moon' },
      { src: `${officialImageBase}/img-0594.jpg`, alt: 'Cocktail and table at Strawberry Moon' },
      { src: `${officialImageBase}/img-0604.jpg`, alt: 'Venue detail at Strawberry Moon' },
    ],
    faqHeading: 'What is supported by the audit',
    faqs: [
      {
        q: 'Do you take reservations?',
        a: 'The official homepage now says Strawberry Moon operates on a first-come, first-served basis, so this preview does not invent a reservation flow.',
      },
      {
        q: 'What is Strawberry Moon known for?',
        a: 'Martinis lead the story, with wine, nibbles, decadent desserts, and review-backed mentions of weekly specials, custom cocktails, and wine and cheese fondue.',
      },
      {
        q: 'When is live music?',
        a: 'The captured official events page says Thursdays run 6:30 to 9:30 pm, while Fridays and Saturdays run 7 to 10 pm.',
      },
      {
        q: 'What is the room like?',
        a: 'Guests describe Strawberry Moon as intimate, cozy, and bigger than it first appears because of the two-level setup and quieter upstairs seating.',
      },
      {
        q: 'Why does the preview lean so hard on hospitality?',
        a: 'Because the review packet does. People repeatedly mention friendly, knowledgeable bartenders, birthday hospitality, and owner warmth from Tom.',
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
      { label: 'official site', href: 'https://strawberrymoonmartinisandmore.weebly.com/', external: true },
    ],
    colophon: 'Strawberry Moon preview built from the velvet-shaker-01 route with factual audit evidence only.',
  },
} as const;

export type Content = typeof content;
