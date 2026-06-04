import { chromium, devices } from 'playwright';
import fs from 'node:fs/promises';
import path from 'node:path';

const siteDir = path.resolve('../');
const screenshotsDir = path.join(siteDir, 'screenshots');
const scrapesDir = path.join(siteDir, 'scrapes');
const baseUrl = 'https://moontimebbq.com/';
const pages = [
  ['home', baseUrl],
  ['menu', `${baseUrl}menu/`],
  ['about', `${baseUrl}about/`],
  ['contact', `${baseUrl}contact/`],
];

await fs.mkdir(screenshotsDir, { recursive: true });
await fs.mkdir(scrapesDir, { recursive: true });

const browser = await chromium.launch({ headless: true });
const desktop = await browser.newContext({ viewport: { width: 1440, height: 1000 }, deviceScaleFactor: 1 });
const desktopPage = await desktop.newPage();

const scraped = [];
for (const [name, url] of pages) {
  await desktopPage.goto(url, { waitUntil: 'networkidle', timeout: 60000 });
  await desktopPage.waitForTimeout(1200);
  const title = await desktopPage.title().catch(() => '');
  const text = await desktopPage.locator('body').innerText({ timeout: 10000 }).catch(() => '');
  const links = await desktopPage.locator('a').evaluateAll((items) =>
    items.map((a) => ({ text: a.textContent?.trim() || '', href: a.href || '' })).filter((item) => item.text || item.href),
  );
  scraped.push({ name, url, title, text, links });
  if (name === 'home') {
    await desktopPage.screenshot({ path: path.join(screenshotsDir, 'current-site-desktop-full.png'), fullPage: true });
  }
}

const mobile = await browser.newContext({ ...devices['iPhone 13'] });
const mobilePage = await mobile.newPage();
await mobilePage.goto(baseUrl, { waitUntil: 'networkidle', timeout: 60000 });
await mobilePage.waitForTimeout(1200);
await mobilePage.screenshot({ path: path.join(screenshotsDir, 'current-site-mobile-full.png'), fullPage: true });
await mobilePage.screenshot({ path: path.join(screenshotsDir, 'current-site-mobile-fold.png'), fullPage: false });

await fs.writeFile(path.join(scrapesDir, 'current-site-dom-snapshot.txt'), scraped.map((page) => {
  const links = page.links.map((link) => `- ${link.text}: ${link.href}`).join('\n');
  return [
    `# ${page.name}`,
    `URL: ${page.url}`,
    `Title: ${page.title}`,
    '',
    page.text,
    '',
    'Links:',
    links,
  ].join('\n');
}).join('\n\n---\n\n'));
await fs.writeFile(path.join(scrapesDir, 'current-site-scrape.json'), `${JSON.stringify({ captured_at: new Date().toISOString(), pages: scraped }, null, 2)}\n`);

await browser.close();
