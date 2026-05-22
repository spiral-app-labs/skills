import { chromium, devices } from 'playwright';
import fs from 'node:fs';

const out = '../screenshots';
fs.mkdirSync(out, { recursive: true });

// Headful-ish: launch with --headed via virtual display equivalent (xvfb not available, so just rich context)
const browser = await chromium.launch({
  headless: true,
  args: ['--disable-blink-features=AutomationControlled', '--no-sandbox', '--disable-web-security']
});
const ctx = await browser.newContext({
  viewport: { width: 1680, height: 1050 },
  deviceScaleFactor: 2,
  userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.4 Safari/605.1.15',
  locale: 'en-US',
  timezoneId: 'America/Chicago',
  geolocation: { longitude: -88.124, latitude: 42.092 },
  permissions: ['geolocation'],
  extraHTTPHeaders: {
    'Accept-Language': 'en-US,en;q=0.9',
  }
});
// Strip the webdriver flag
await ctx.addInitScript(() => {
  Object.defineProperty(navigator, 'webdriver', { get: () => undefined });
  Object.defineProperty(navigator, 'plugins', { get: () => [1,2,3] });
  Object.defineProperty(navigator, 'languages', { get: () => ['en-US', 'en'] });
});

const p = await ctx.newPage();
p.setDefaultTimeout(25000);

// Try the "search by name + city" URL — sometimes returns full place panel
await p.goto('https://www.google.com/maps?q=DiBenedetto+Trattoria+Hoffman+Estates&hl=en', { waitUntil: 'domcontentloaded', timeout: 45000 });
await p.waitForTimeout(6000);
await p.screenshot({ path: `${out}/g4-step1-place.png`, fullPage: false });

// Click first matching card if needed
try {
  const card = p.locator('a.hfpxzc').first();
  if (await card.count()) { await card.click(); await p.waitForTimeout(3500); }
} catch {}

// Inspect what tabs are present
const tabs = await p.evaluate(() => {
  return Array.from(document.querySelectorAll('[role="tab"]')).map(t => ({
    label: t.getAttribute('aria-label'),
    text: t.textContent?.trim()
  }));
});
console.log('tabs found:', JSON.stringify(tabs));
fs.writeFileSync('tabs-discovered.json', JSON.stringify(tabs, null, 2));

// Click any "Reviews" tab
let clicked = await p.evaluate(() => {
  const all = Array.from(document.querySelectorAll('[role="tab"], button'));
  for (const el of all) {
    const lbl = (el.getAttribute('aria-label') || '').toLowerCase();
    const txt = (el.textContent || '').trim();
    if (lbl.startsWith('reviews of') || txt === 'Reviews') {
      el.click();
      return true;
    }
  }
  return false;
});
console.log('reviews click:', clicked);
await p.waitForTimeout(4000);
await p.screenshot({ path: `${out}/g4-step2-after-reviews.png`, fullPage: false });

// Sort + Highest
let sortClicked = await p.evaluate(() => {
  const all = Array.from(document.querySelectorAll('button'));
  for (const el of all) {
    const lbl = (el.getAttribute('aria-label') || '').toLowerCase();
    if (lbl.includes('sort')) { el.click(); return true; }
    const txt = (el.textContent || '').trim().toLowerCase();
    if (txt === 'most relevant' || txt.startsWith('sort')) { el.click(); return true; }
  }
  return false;
});
console.log('sort click:', sortClicked);
await p.waitForTimeout(1500);

if (sortClicked) {
  await p.evaluate(() => {
    const items = Array.from(document.querySelectorAll('[role="menuitemradio"], [role="menuitem"]'));
    for (const i of items) {
      const t = (i.textContent || '').trim().toLowerCase();
      if (t.includes('highest')) { i.click(); return true; }
    }
    return false;
  });
  await p.waitForTimeout(4500);
}
await p.screenshot({ path: `${out}/google-reviews-highest.png`, fullPage: false });

// Aggressive scroll
for (let i = 0; i < 35; i++) {
  await p.evaluate(() => {
    const feeds = document.querySelectorAll('div[role="feed"], div.m6QErb.DxyBCb');
    feeds.forEach(f => f.scrollBy(0, 8000));
    document.querySelectorAll('button').forEach(b => {
      if ((b.textContent || '').trim() === 'More') try { b.click(); } catch {}
    });
  });
  await p.waitForTimeout(1100);
}
await p.screenshot({ path: `${out}/g4-step5-after-scroll.png`, fullPage: false });

const reviews = await p.evaluate(() => {
  const out = [];
  document.querySelectorAll('div[data-review-id]').forEach(c => {
    const name = c.querySelector('.d4r55')?.textContent?.trim() || null;
    const rating = c.querySelector('span[aria-label*="star" i]')?.getAttribute('aria-label') || null;
    const date = c.querySelector('.rsqaWe')?.textContent?.trim() || null;
    const text = c.querySelector('.wiI7pd')?.textContent?.trim() || c.querySelector('.MyEned')?.textContent?.trim() || null;
    const reply = c.querySelector('.CDe7pd')?.textContent?.trim() || null;
    out.push({ id: c.getAttribute('data-review-id'), name, rating, date, text, reply });
  });
  return out;
});

fs.writeFileSync('google-reviews-raw.json', JSON.stringify(reviews, null, 2));
fs.writeFileSync('google-maps-reviews-final.html', await p.content());
console.log('cards', reviews.length, 'with-text', reviews.filter(r => r.text).length);
await browser.close();
