import { chromium, devices } from 'playwright';
import fs from 'node:fs/promises';
import path from 'node:path';

const slugDir = path.resolve('/Users/ethantalreja/.openclaw/workspace/GitHub/skills/restaurant-website-system/sites/fratos-culinary-kitchen');
const screenshotsDir = path.join(slugDir, 'screenshots');
const scrapesDir = path.join(slugDir, 'scrapes');
await fs.mkdir(screenshotsDir, { recursive: true });
await fs.mkdir(scrapesDir, { recursive: true });

const pages = [
  { key: 'home', url: 'https://fratospizza.com/', screenshot: true },
  { key: 'menu', url: 'https://fratospizza.com/menu/', screenshot: true },
  { key: 'online-ordering', url: 'https://fratospizza.com/online-ordering/', screenshot: true },
  { key: 'orderstart', url: 'https://orderstart.com/fratospizza', screenshot: true },
  { key: 'contact', url: 'https://fratospizza.com/contact-2/', screenshot: true },
  { key: 'hours', url: 'https://fratospizza.com/fratos-hours/', screenshot: true },
  { key: 'about', url: 'https://fratospizza.com/about/', screenshot: true },
  { key: 'catering', url: 'https://fratoscatering.com/', screenshot: true },
  { key: 'reviews-official', url: 'https://fratospizza.com/reviews/', screenshot: false },
  { key: 'culinary-trainee', url: 'https://fratospizza.com/fratos-culinary-trainee-program/', screenshot: false }
];

function safeName(key) {
  return key.replace(/[^a-z0-9-]+/gi, '-').toLowerCase();
}

async function gotoWithFallback(page, url) {
  const attempts = [
    { waitUntil: 'networkidle', timeout: 45000 },
    { waitUntil: 'domcontentloaded', timeout: 45000 },
    { waitUntil: 'load', timeout: 45000 }
  ];
  let lastError = null;
  for (const options of attempts) {
    try {
      const response = await page.goto(url, options);
      await page.waitForTimeout(2500);
      return { response, error: null, waitUntil: options.waitUntil };
    } catch (err) {
      lastError = err;
    }
  }
  return { response: null, error: String(lastError?.message || lastError), waitUntil: null };
}

async function capturePage(context, pageSpec, variant) {
  const page = await context.newPage();
  page.setDefaultTimeout(15000);
  const result = {
    key: pageSpec.key,
    sourceUrl: pageSpec.url,
    variant,
    loadedUrl: null,
    status: null,
    title: null,
    waitUntil: null,
    screenshotPath: null,
    foldScreenshotPath: null,
    htmlPath: null,
    textPath: null,
    linksPath: null,
    imageInventoryPath: null,
    textPreview: null,
    loadError: null,
    metrics: null
  };
  const loaded = await gotoWithFallback(page, pageSpec.url);
  result.waitUntil = loaded.waitUntil;
  result.loadError = loaded.error;
  result.loadedUrl = page.url();
  if (loaded.response) result.status = loaded.response.status();
  result.title = await page.title().catch(() => null);

  // Close or accept common popups if any appear without failing the capture.
  for (const label of ['Accept', 'I Accept', 'Close', 'No thanks', 'OK']) {
    try {
      const button = page.getByRole('button', { name: label, exact: false }).first();
      if (await button.isVisible({ timeout: 800 }).catch(() => false)) await button.click({ timeout: 1000 }).catch(() => {});
    } catch {}
  }

  const stem = `current-site-${safeName(pageSpec.key)}-${variant}`;
  const html = await page.content().catch(err => `<!-- content error: ${String(err.message || err)} -->`);
  const text = await page.locator('body').innerText({ timeout: 10000 }).catch(err => `TEXT_EXTRACTION_ERROR: ${String(err.message || err)}`);
  const links = await page.evaluate(() => Array.from(document.querySelectorAll('a')).map(a => ({
    text: (a.innerText || a.getAttribute('aria-label') || a.getAttribute('title') || '').trim().replace(/\s+/g, ' ').slice(0, 240),
    href: a.href || a.getAttribute('href') || null,
    target: a.target || null
  })).filter(l => l.href || l.text)).catch(() => []);
  const images = await page.evaluate(() => Array.from(document.images).map(img => ({
    alt: (img.alt || '').trim(),
    src: img.currentSrc || img.src || img.getAttribute('data-src') || null,
    width: img.naturalWidth || img.width || null,
    height: img.naturalHeight || img.height || null,
    visibleWidth: img.getBoundingClientRect().width,
    visibleHeight: img.getBoundingClientRect().height
  })).filter(i => i.src)).catch(() => []);
  result.htmlPath = `restaurant-website-system/sites/fratos-culinary-kitchen/scrapes/${stem}.html`;
  result.textPath = `restaurant-website-system/sites/fratos-culinary-kitchen/scrapes/${stem}.txt`;
  result.linksPath = `restaurant-website-system/sites/fratos-culinary-kitchen/scrapes/${stem}-links.json`;
  result.imageInventoryPath = `restaurant-website-system/sites/fratos-culinary-kitchen/scrapes/${stem}-images.json`;
  result.textPreview = text.replace(/\s+/g, ' ').slice(0, 600);
  result.metrics = await page.evaluate(() => ({
    bodyTextLength: document.body ? document.body.innerText.length : 0,
    linkCount: document.querySelectorAll('a').length,
    imageCount: document.images.length,
    scrollWidth: document.documentElement.scrollWidth,
    clientWidth: document.documentElement.clientWidth,
    scrollHeight: document.documentElement.scrollHeight,
    clientHeight: document.documentElement.clientHeight,
    hasHorizontalOverflow: document.documentElement.scrollWidth > document.documentElement.clientWidth + 2
  })).catch(() => null);

  await fs.writeFile(path.join(scrapesDir, `${stem}.html`), html);
  await fs.writeFile(path.join(scrapesDir, `${stem}.txt`), text);
  await fs.writeFile(path.join(scrapesDir, `${stem}-links.json`), JSON.stringify(links, null, 2));
  await fs.writeFile(path.join(scrapesDir, `${stem}-images.json`), JSON.stringify(images, null, 2));

  if (pageSpec.screenshot) {
    result.screenshotPath = `restaurant-website-system/sites/fratos-culinary-kitchen/screenshots/${stem}-full.png`;
    await page.screenshot({ path: path.join(screenshotsDir, `${stem}-full.png`), fullPage: true }).catch(async err => {
      result.screenshotError = String(err.message || err);
    });
    if (variant === 'mobile' && pageSpec.key === 'home') {
      result.foldScreenshotPath = `restaurant-website-system/sites/fratos-culinary-kitchen/screenshots/current-site-mobile-fold.png`;
      await page.screenshot({ path: path.join(screenshotsDir, 'current-site-mobile-fold.png'), fullPage: false }).catch(err => {
        result.foldScreenshotError = String(err.message || err);
      });
    }
  }
  await page.close().catch(() => {});
  return result;
}

const browser = await chromium.launch({ headless: true });
const desktop = await browser.newContext({ viewport: { width: 1440, height: 1100 }, deviceScaleFactor: 1, userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124 Safari/537.36 OpenClawAudit/1.0' });
const mobile = await browser.newContext({ ...devices['iPhone 13'], userAgent: devices['iPhone 13'].userAgent + ' OpenClawAudit/1.0' });

const captures = [];
for (const spec of pages) {
  captures.push(await capturePage(desktop, spec, 'desktop'));
}
// Required mobile current-site views plus key conversion pages.
for (const spec of pages.filter(p => ['home', 'menu', 'online-ordering', 'orderstart', 'contact', 'catering'].includes(p.key))) {
  captures.push(await capturePage(mobile, spec, 'mobile'));
}

await desktop.close();
await mobile.close();
await browser.close();

// Create canonical aliases requested by the skill/checklist.
async function copyIfExists(fromRel, toName) {
  const from = path.join(slugDir, fromRel.replace('restaurant-website-system/sites/fratos-culinary-kitchen/', ''));
  const to = path.join(slugDir, toName.replace('restaurant-website-system/sites/fratos-culinary-kitchen/', ''));
  try { await fs.copyFile(from, to); } catch (err) { return String(err.message || err); }
  return null;
}
await copyIfExists('restaurant-website-system/sites/fratos-culinary-kitchen/screenshots/current-site-home-desktop-full.png', 'restaurant-website-system/sites/fratos-culinary-kitchen/screenshots/current-site-desktop-full.png');
await copyIfExists('restaurant-website-system/sites/fratos-culinary-kitchen/screenshots/current-site-home-mobile-full.png', 'restaurant-website-system/sites/fratos-culinary-kitchen/screenshots/current-site-mobile-full.png');
await copyIfExists('restaurant-website-system/sites/fratos-culinary-kitchen/scrapes/current-site-home-desktop.html', 'restaurant-website-system/sites/fratos-culinary-kitchen/scrapes/current-site-dom-snapshot.html');
await copyIfExists('restaurant-website-system/sites/fratos-culinary-kitchen/scrapes/current-site-home-desktop.txt', 'restaurant-website-system/sites/fratos-culinary-kitchen/scrapes/current-site-text-snapshot.txt');

const summary = {
  capturedAt: new Date().toISOString(),
  lead: "Frato's Culinary Kitchen",
  leadId: 'cec3f7af-ab8d-4785-af76-e57e743cdf25',
  officialWebsite: 'https://fratospizza.com/',
  captureMethod: 'OpenClaw browser tab opened first, then Playwright Chromium desktop + iPhone 13 captures for evidence files.',
  googleReviewsDeferred: true,
  googleReviewsDeferredNote: 'Intentionally not captured in this current_site_audit gate; next MC gate is google_reviews_capture.',
  canonicalEvidence: {
    desktopScreenshot: 'restaurant-website-system/sites/fratos-culinary-kitchen/screenshots/current-site-desktop-full.png',
    mobileScreenshot: 'restaurant-website-system/sites/fratos-culinary-kitchen/screenshots/current-site-mobile-full.png',
    mobileFoldScreenshot: 'restaurant-website-system/sites/fratos-culinary-kitchen/screenshots/current-site-mobile-fold.png',
    domSnapshot: 'restaurant-website-system/sites/fratos-culinary-kitchen/scrapes/current-site-dom-snapshot.html',
    textSnapshot: 'restaurant-website-system/sites/fratos-culinary-kitchen/scrapes/current-site-text-snapshot.txt'
  },
  captures,
  discoveredSourceUrls: Array.from(new Set(captures.map(c => c.loadedUrl).filter(Boolean))),
  blocker: null
};
await fs.writeFile(path.join(scrapesDir, 'current-site-capture-summary.json'), JSON.stringify(summary, null, 2));
console.log(JSON.stringify(summary, null, 2));
