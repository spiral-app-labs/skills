import { chromium, devices } from 'playwright';
import fs from 'node:fs/promises';

const URL = 'https://shopwinestock.com/';
const OUT_SHOTS = '../screenshots';
const OUT_SCRAPES = '.';

const browser = await chromium.launch({ headless: true });

// Mobile (iPhone 13)
{
  const ctx = await browser.newContext({ ...devices['iPhone 13'] });
  const page = await ctx.newPage();
  try {
    await page.goto(URL, { waitUntil: 'networkidle', timeout: 60000 });
  } catch (e) {
    console.error('mobile goto failed:', e.message);
    await page.goto(URL, { waitUntil: 'domcontentloaded', timeout: 60000 });
  }
  await page.waitForTimeout(2500);
  await page.screenshot({ path: `${OUT_SHOTS}/current-site-mobile-full.png`, fullPage: true });
  await page.screenshot({ path: `${OUT_SHOTS}/current-site-mobile-fold.png`, fullPage: false });
  const html = await page.content();
  await fs.writeFile(`${OUT_SCRAPES}/current-site-mobile.html`, html);
  await ctx.close();
  console.log('mobile done');
}

// Desktop
{
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await ctx.newPage();
  try {
    await page.goto(URL, { waitUntil: 'networkidle', timeout: 60000 });
  } catch (e) {
    console.error('desktop goto failed:', e.message);
    await page.goto(URL, { waitUntil: 'domcontentloaded', timeout: 60000 });
  }
  await page.waitForTimeout(2500);
  await page.screenshot({ path: `${OUT_SHOTS}/current-site-desktop-full.png`, fullPage: true });
  await page.screenshot({ path: `${OUT_SHOTS}/current-site-desktop-fold.png`, fullPage: false });
  const html = await page.content();
  await fs.writeFile(`${OUT_SCRAPES}/current-site-desktop.html`, html);
  const text = await page.evaluate(() => document.body.innerText);
  await fs.writeFile(`${OUT_SCRAPES}/current-site-text.txt`, text);
  // Pull links + nav
  const links = await page.$$eval('a', as => as.map(a => ({ href: a.href, text: (a.textContent || '').trim() })).filter(a => a.text || a.href));
  await fs.writeFile(`${OUT_SCRAPES}/current-site-links.json`, JSON.stringify(links, null, 2));
  await ctx.close();
  console.log('desktop done');
}

await browser.close();
console.log('all done');
