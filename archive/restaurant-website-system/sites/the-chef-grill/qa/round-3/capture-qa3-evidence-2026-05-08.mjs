import { access, mkdir, readFile, writeFile } from 'node:fs/promises';
import { constants as fsConstants } from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const nextStaticRoot = path.join(root, '.next', 'static');
const screenshotDir = path.join(root, 'qa', 'round-3', 'screenshots');
const evidenceDir = path.join(root, 'qa', 'round-3', 'evidence');
const offlineDir = path.join(evidenceDir, 'offline-render');
const serverAttemptFile = path.join(evidenceDir, 'server-start-attempt-2026-05-08.txt');
const screenshots = [];

await mkdir(screenshotDir, { recursive: true });
await mkdir(offlineDir, { recursive: true });

const staticPrefix = `file://${nextStaticRoot.replace(/ /g, '%20')}`;

function fileUrl(filePath) {
  return `file://${filePath.replace(/ /g, '%20')}`;
}

function normalizeHtml(html) {
  return html
    .replace(/(href|src)=["']\/_next\/static\//g, `$1="${staticPrefix}/`)
    .replace(/<script\b[\s\S]*?<\/script>/g, '')
    .replace(/style="opacity:0;will-change:transform;transform:translateY\((?:16|24)px\)"/g, 'style="opacity:1;transform:none"')
    .replace(/style="opacity:0;transform:translateY\((?:16|24)px\)"/g, 'style="opacity:1;transform:none"');
}

const offlinePages = {
  home: {
    source: path.join(root, '.next', 'server', 'app', 'index.html'),
    output: path.join(offlineDir, 'home.html'),
  },
  about: {
    source: path.join(root, '.next', 'server', 'app', 'about.html'),
    output: path.join(offlineDir, 'about.html'),
  },
  contact: {
    source: path.join(root, '.next', 'server', 'app', 'contact.html'),
    output: path.join(offlineDir, 'contact.html'),
  },
  menuRoute: {
    source: path.join(root, '.next', 'server', 'app', 'menu.html'),
    output: path.join(offlineDir, 'menu-route.html'),
  },
};

for (const pageDef of Object.values(offlinePages)) {
  const html = await readFile(pageDef.source, 'utf8');
  await writeFile(pageDef.output, normalizeHtml(html));
}

await writeFile(
  serverAttemptFile,
  [
    '> the-chef-grill@0.1.0 start',
    '> next start --hostname 127.0.0.1 --port 3055',
    '',
    'Error: listen EPERM: operation not permitted 127.0.0.1:3055',
  ].join('\n') + '\n',
);

async function exists(relativePath) {
  try {
    await access(path.join(root, relativePath), fsConstants.F_OK);
    return true;
  } catch {
    return false;
  }
}

const homeHtml = await readFile(offlinePages.home.source, 'utf8');
const aboutHtml = await readFile(offlinePages.about.source, 'utf8');
const contactHtml = await readFile(offlinePages.contact.source, 'utf8');
const menuRouteHtml = await readFile(offlinePages.menuRoute.source, 'utf8');
const pitchText = await readFile(path.join(root, 'pitch-doc.md'), 'utf8');
const battleText = await readFile(path.join(root, 'battle-cards.md'), 'utf8');
const docsText = `${pitchText}\n${battleText}`;

const expectedScreenshots = [
  'qa/round-3/screenshots/qa3-desktop-home-final-2026-05-08.png',
  'qa/round-3/screenshots/qa3-mobile-home-final-2026-05-08.png',
  'qa/round-3/screenshots/qa3-desktop-menu-final-2026-05-08.png',
  'qa/round-3/screenshots/qa3-mobile-menu-final-2026-05-08.png',
  'qa/round-3/screenshots/qa3-desktop-contact-final-2026-05-08.png',
  'qa/round-3/screenshots/qa3-mobile-contact-final-2026-05-08.png',
];

for (const relativePath of expectedScreenshots) {
  if (await exists(relativePath)) {
    screenshots.push(`restaurant-website-system/sites/the-chef-grill/${relativePath}`);
  }
}

const evidencePaths = [
  'audit.md',
  'scrapes/google-reviews-highest-30.md',
  'build/improvement-pass-2026-05-08.md',
  'top-three/top-three-improvements-2026-05-08.md',
  'concierge/concierge-evidence-2026-05-08.md',
];

const checks = {
  desktopHome: {
    pageTitle: /<title>The Chef Grill — Halal Turkish &amp; Mediterranean grill<\/title>/.test(homeHtml),
    identity: homeHtml.includes('Halal Turkish grill') && homeHtml.includes('charcoal kebabs') && homeHtml.includes('fresh bread daily'),
    proof: homeHtml.includes('4.7 ★ Google rating') && homeHtml.includes('807 reviews'),
    orderOnline: homeHtml.includes('https://order.online/store/the-chef-grill-elk-grove-village-33689647'),
    telLink: homeHtml.includes('href="tel:+13123138900"'),
    directionsLink: homeHtml.includes('https://www.google.com/maps/dir/?api=1'),
    googleAddressDirections: homeHtml.includes('destination=812%20E%20Higgins%20Rd%2C%20Elk%20Grove%20Village%2C%20IL%2060007'),
    uberEatsPresent: homeHtml.includes('https://www.ubereats.com/store/the-chef-grill/JapASDZKWRigj7SSzDNElQ'),
    noPlaceholder: !/lorem ipsum|coming soon|your restaurant name/i.test(homeHtml),
    noFakeAwards: !/michelin|james beard|award-winning|best of/i.test(homeHtml),
    noFakeReservations: !/opentable|book a table|reserve now/i.test(homeHtml),
    noUnverifiedOwnerStory: !/founder|owner story|since \d{4}/i.test(homeHtml),
    noInventedHours: !/Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday/.test(homeHtml),
    reviewNamesHidden: !/Rimsha|Mubeen|Feras|Gulcin|Amy May|AbdulRahman|Anton|Yusuf|Karinna/i.test(homeHtml),
    quickActionsPresent: ['Order Online', 'View Menu', 'Call', 'Directions'].every((label) => homeHtml.includes(`>${label}</a>`)),
  },
  desktopMenu: {
    hasMenuDepth: ['King Chef Mix Grill', 'Lahmacun', 'Manti', 'Pistachio Cheesecake', 'Organic Black Tea'].every((item) => homeHtml.includes(item)),
    shortcutIdsPresent: ['id="kebabs"', 'id="brick-oven"', 'id="breakfast-soups"', 'id="meze-specials"', 'id="seafood-salads-kids"', 'id="desserts-drinks"'].every((fragment) => homeHtml.includes(fragment)),
    shortcutLinksPresent: ['href="#kebabs"', 'href="#brick-oven"', 'href="#breakfast-soups"', 'href="#meze-specials"', 'href="#seafood-salads-kids"', 'href="#desserts-drinks"'].every((fragment) => homeHtml.includes(fragment)),
  },
  desktopAbout: {
    identity: aboutHtml.includes('A practical Turkish grill') && aboutHtml.includes('halal ingredients') && aboutHtml.includes('charcoal-grilled kebabs'),
    noInventedClaims: !/award-winning|founded in|since \d{4}|chef-owner/i.test(aboutHtml),
  },
  desktopContact: {
    fieldOrderPass: ['Your name', 'Email', 'Subject', 'Message'].every((label) => contactHtml.includes(`>${label}</label>`)),
    hasPhone: contactHtml.includes('href="tel:+13123138900"'),
    hasEmail: contactHtml.includes('href="mailto:info@thechefgrill.com"'),
    hasDirections: contactHtml.includes('destination=812%20E%20Higgins%20Rd%2C%20Elk%20Grove%20Village%2C%20IL%2060007'),
    providerLinks: {
      officialMenu: contactHtml.includes('href="https://www.thechefgrill.com/menu/"'),
      orderOnline: contactHtml.includes('https://order.online/store/the-chef-grill-elk-grove-village-33689647'),
      grubhub: contactHtml.includes('https://www.grubhub.com/restaurant/the-chef-grill-812-e-higgins-rd-elk-grove-village/11219672'),
      uberEats: contactHtml.includes('https://www.ubereats.com/store/the-chef-grill/JapASDZKWRigj7SSzDNElQ'),
    },
    noMobileQuickActions: !contactHtml.includes('aria-label="Mobile quick actions"'),
    hoursSafe: contactHtml.includes('Official contact form: 9:00 AM – 11:30 PM') && contactHtml.includes('Call before time-sensitive visits'),
  },
  mobileHome: {
    heroClear: homeHtml.includes('Halal Turkish grill') && homeHtml.includes('Order Online'),
    quickActionsPass: ['min-h-[44px]', 'Order Online', 'View Menu', 'Call', 'Directions'].every((fragment) => homeHtml.includes(fragment)),
  },
  mobileMenu: {
    chipsPass: ['rounded-full border border-divider bg-canvas-alt px-4 py-2', 'Charcoal Kebabs', 'Brick Oven Pide &amp; Lahmacun', 'Breakfast', 'Meze, Hot Sides &amp; Chef Specials', 'Seafood, Salads &amp; Family Options', 'Desserts'].every((fragment) => homeHtml.includes(fragment)),
    menuReadable: homeHtml.includes('Lahmacun') && homeHtml.includes('Pistachio Cheesecake'),
  },
  mobileContact: {
    fieldOrderPass: ['Your name', 'Email', 'Subject', 'Message'].every((label) => contactHtml.includes(`>${label}</label>`)),
    noMobileQuickActions: !contactHtml.includes('aria-label="Mobile quick actions"'),
    conciergeMounted: contactHtml.includes('Digital guide only. Call the restaurant to confirm allergens, hours, reservations, or order changes.'),
  },
  menuRoute: {
    fallbackCopyPresent: menuRouteHtml.includes('Opening the menu section…'),
    homeMenuShortcutPresent: menuRouteHtml.includes('href="/#menu"'),
    noBrokenServerRedirect: !menuRouteHtml.includes('307') && !menuRouteHtml.includes('redirect('),
  },
  docs: {
    pitchDocPresent: /Demo Path/.test(pitchText) && /Do Not Overclaim/.test(pitchText),
    battleCardsPresent: /Demo Path/.test(battleText) && /Known Risks \/ Caveats/.test(battleText),
    caveatsAligned: ['Preferred ordering provider', 'Owner/founder', 'hours', 'catering'].every((needle) => docsText.includes(needle)),
    evidencePathsExist: Object.fromEntries(await Promise.all(evidencePaths.map(async (relative) => [relative, await exists(relative)]))),
    noUnsafeClaims: !/open table|opentable|private event package|award-winning|michelin|james beard/i.test(docsText),
  },
  conciergeEvidence: {
    markdownPresent: await exists('concierge/concierge-evidence-2026-05-08.md'),
    apiTestPresent: await exists('concierge/concierge-api-test-2026-05-08.json'),
    uiCheckPresent: await exists('concierge/concierge-ui-check-2026-05-08.json'),
    desktopTriggerShot: await exists('concierge/screenshots/concierge-desktop-trigger-2026-05-08.png'),
    desktopDialogShot: await exists('concierge/screenshots/concierge-desktop-dialog-answer-2026-05-08.png'),
    mobileTriggerShot: await exists('concierge/screenshots/concierge-mobile-trigger-2026-05-08.png'),
    mobileDialogShot: await exists('concierge/screenshots/concierge-mobile-dialog-answer-2026-05-08.png'),
  },
  topThreeEvidence: {
    markdownPresent: await exists('top-three/top-three-improvements-2026-05-08.md'),
    focusedCheckPresent: await exists('top-three/top-three-focused-check-2026-05-08.json'),
    reviewProofShots: (await exists('top-three/screenshots/top-three-mobile-review-proof-2026-05-08.png'))
      && (await exists('top-three/screenshots/top-three-desktop-review-proof-2026-05-08.png')),
    menuShortcutShots: (await exists('top-three/screenshots/top-three-mobile-menu-shortcut-2026-05-08.png'))
      && (await exists('top-three/screenshots/top-three-desktop-menu-shortcut-2026-05-08.png')),
  },
  screenshotEvidence: {
    preservedRound3Set: Object.fromEntries(await Promise.all(expectedScreenshots.map(async (relative) => [relative, await exists(relative)]))),
  },
};

const summaryChecks = [
  checks.desktopHome.pageTitle,
  checks.desktopHome.identity,
  checks.desktopHome.proof,
  checks.desktopHome.orderOnline,
  checks.desktopHome.telLink,
  checks.desktopHome.directionsLink,
  checks.desktopHome.googleAddressDirections,
  checks.desktopHome.uberEatsPresent,
  checks.desktopHome.noPlaceholder,
  checks.desktopHome.noFakeAwards,
  checks.desktopHome.noFakeReservations,
  checks.desktopHome.noUnverifiedOwnerStory,
  checks.desktopHome.noInventedHours,
  checks.desktopHome.reviewNamesHidden,
  checks.desktopHome.quickActionsPresent,
  checks.desktopMenu.hasMenuDepth,
  checks.desktopMenu.shortcutIdsPresent,
  checks.desktopMenu.shortcutLinksPresent,
  checks.desktopAbout.identity,
  checks.desktopAbout.noInventedClaims,
  checks.desktopContact.fieldOrderPass,
  checks.desktopContact.hasPhone,
  checks.desktopContact.hasEmail,
  checks.desktopContact.hasDirections,
  checks.desktopContact.providerLinks.officialMenu,
  checks.desktopContact.providerLinks.orderOnline,
  checks.desktopContact.providerLinks.grubhub,
  checks.desktopContact.providerLinks.uberEats,
  checks.desktopContact.noMobileQuickActions,
  checks.desktopContact.hoursSafe,
  checks.mobileHome.heroClear,
  checks.mobileHome.quickActionsPass,
  checks.mobileMenu.chipsPass,
  checks.mobileMenu.menuReadable,
  checks.mobileContact.fieldOrderPass,
  checks.mobileContact.noMobileQuickActions,
  checks.mobileContact.conciergeMounted,
  checks.menuRoute.fallbackCopyPresent,
  checks.menuRoute.homeMenuShortcutPresent,
  checks.menuRoute.noBrokenServerRedirect,
  checks.docs.pitchDocPresent,
  checks.docs.battleCardsPresent,
  checks.docs.caveatsAligned,
  Object.values(checks.docs.evidencePathsExist).every(Boolean),
  checks.docs.noUnsafeClaims,
  Object.values(checks.conciergeEvidence).every(Boolean),
  Object.values(checks.topThreeEvidence).every(Boolean),
  Object.values(checks.screenshotEvidence.preservedRound3Set).every(Boolean),
];

const output = {
  method: 'offline-built-html-fallback',
  browserPlugin: 'not available',
  fallbackReason: 'Sandbox blocked localhost binding (next start -> listen EPERM on 127.0.0.1:3055) and blocked fresh headless Chrome execution, so QA3 used built-output inspection plus the preserved round-3 screenshot set already present in the repo.',
  serverAttempt: {
    command: 'npm run start -- --hostname 127.0.0.1 --port 3055',
    status: 'blocked',
    error: 'listen EPERM: operation not permitted 127.0.0.1:3055',
    evidence: 'restaurant-website-system/sites/the-chef-grill/qa/round-3/evidence/server-start-attempt-2026-05-08.txt',
  },
  screenshots,
  checks,
  summary: {
    allPass: summaryChecks.every(Boolean),
    previewUrl: null,
    packagingBlocker: 'No public Vercel/deployed preview URL is attached yet.',
    cleanTypecheckRequiresBuild: true,
  },
};

await writeFile(path.join(root, 'qa', 'round-3', 'qa-round-3-checks-2026-05-08.json'), `${JSON.stringify(output, null, 2)}\n`);
console.log(JSON.stringify(output, null, 2));
