import { chromium } from 'playwright';
import fs from 'fs/promises';
import path from 'path';

const baseUrl = process.env.QA_BASE_URL || 'http://127.0.0.1:3051';
const outDir = path.resolve('qa/round-1/screenshots');
await fs.mkdir(outDir, { recursive: true });

const routes = ['/', '/menu', '/about', '/contact'];
const viewports = [
  { name: 'desktop', width: 1440, height: 900 },
  { name: 'mobile', width: 390, height: 844 },
];

const expected = {
  phoneRaw: '3123138900',
  tel: 'tel:+13123138900',
  addressParts: ['812 E Higgins Rd', 'Elk Grove Village', 'IL'],
  reviewRating: '4.7',
  reviewCount: '807',
  orderLinks: [
    'https://order.online/store/the-chef-grill-elk-grove-village-33689647',
    'https://www.grubhub.com/restaurant/the-chef-grill-812-e-higgins-rd-elk-grove-village/11219672',
    'https://www.ubereats.com/store/the-chef-grill/JapASDZKWRigj7SSzDNElQ',
  ],
};

const browser = await chromium.launch({ headless: true });
const results = { baseUrl, generatedAt: new Date().toISOString(), expected, routes: [], screenshots: [], sitewide: {} };

for (const route of routes) {
  for (const viewport of viewports) {
    const page = await browser.newPage({ viewport: { width: viewport.width, height: viewport.height }, deviceScaleFactor: 1, isMobile: viewport.name === 'mobile' });
    const url = baseUrl + route;
    const response = await page.goto(url, { waitUntil: 'networkidle', timeout: 30000 });
    await page.waitForTimeout(400);
    const safeRoute = route === '/' ? 'home' : route.replace(/^\//, '').replace(/\//g, '-');
    const screenshotPath = path.join(outDir, `qa1-${viewport.name}-${safeRoute}-2026-05-08.png`);
    await page.screenshot({ path: screenshotPath, fullPage: true });
    const text = await page.locator('body').innerText({ timeout: 5000 });
    const anchors = await page.locator('a').evaluateAll((els) => els.map((a) => ({ text: a.innerText.trim(), href: a.href, target: a.target || null })));
    results.routes.push({
      route,
      viewport: viewport.name,
      status: response?.status() ?? null,
      finalUrl: page.url(),
      title: await page.title(),
      textLength: text.length,
      hasPlaceholderText: /lorem ipsum|placeholder copy|coming soon|your restaurant name|sample restaurant/i.test(text),
      hasFakeReservationLanguage: /book a table|reserve now|open table|opentable/i.test(text),
      hasUnsupportedCateringPromise: /catering packages|private dining room|private events|event package|catering menu/i.test(text),
      hasFakeAwards: /award[- ]winning|best of|michelin|james beard/i.test(text),
      includesPhone: text.includes(expected.phoneRaw) || text.includes('(312) 313-8900') || text.includes('312-313-8900'),
      includesAddress: expected.addressParts.every((part) => text.includes(part)),
      includesReviewProof: text.includes(expected.reviewRating) && text.includes(expected.reviewCount),
      anchors,
      screenshot: path.relative(process.cwd(), screenshotPath),
    });
    results.screenshots.push(path.relative(process.cwd(), screenshotPath));
    await page.close();
  }
}

const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await page.goto(baseUrl + '/', { waitUntil: 'networkidle', timeout: 30000 });
const homeText = await page.locator('body').innerText();
const allText = [homeText, ...results.routes.map((r) => `${r.route} ${r.viewport}`)].join('\n');
const allAnchors = results.routes.flatMap((r) => r.anchors);
results.sitewide = {
  routeCoverage: results.routes.map((r) => `${r.viewport} ${r.route} status ${r.status} -> ${r.finalUrl}`),
  telLinkPresent: allAnchors.some((a) => a.href === expected.tel),
  expectedOrderLinksPresent: expected.orderLinks.map((href) => ({ href, present: allAnchors.some((a) => a.href === href) })),
  directionsLinkPresent: allAnchors.some((a) => a.href.includes('google.com/maps') || a.href.includes('maps.google.com')),
  reviewProofPresent: results.routes.some((r) => r.includesReviewProof),
  anonymousReviewQuoteCheck: !/Rimsha|Mubeen|Feras|Gulcin|Amy May|Ibrahim said|Yusuf said/i.test(homeText),
  contentBans: {
    placeholder: /lorem ipsum|placeholder copy|your restaurant name|sample restaurant/i.test(allText),
    fakeAwards: /award[- ]winning|best of|michelin|james beard/i.test(allText),
    fakeReservations: /book a table|reserve now|open table|opentable/i.test(allText),
    unsupportedCateringPrivateEvents: /catering packages|private dining room|private events|event package|catering menu/i.test(allText),
    unsupportedOwnerDetails: /founder|owner/i.test(allText),
  },
};
await page.close();
await browser.close();

await fs.writeFile('qa/round-1/evidence/playwright-route-results-2026-05-08.json', JSON.stringify(results, null, 2) + '\n');
console.log(JSON.stringify(results.sitewide, null, 2));
