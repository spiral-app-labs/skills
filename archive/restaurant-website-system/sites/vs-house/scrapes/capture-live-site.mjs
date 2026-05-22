import { chromium, devices } from 'playwright';

const SHOTS = '/Users/ethantalreja/skills/restaurant-website-system/sites/vs-house/screenshots';

const browser = await chromium.launch({ headless: true });

// 1) iPhone 13 home
{
  const ctx = await browser.newContext({ ...devices['iPhone 13'] });
  const page = await ctx.newPage();
  await page.goto('https://www.vshouse.net/', { waitUntil: 'networkidle', timeout: 60000 });
  await page.waitForTimeout(2000);
  await page.screenshot({ path: `${SHOTS}/mobile-home.png`, fullPage: true });
  await page.screenshot({ path: `${SHOTS}/mobile-home-fold.png`, fullPage: false });
  await ctx.close();
}

// 2) iPhone 13 menu
{
  const ctx = await browser.newContext({ ...devices['iPhone 13'] });
  const page = await ctx.newPage();
  await page.goto('https://www.vshouse.net/menu', { waitUntil: 'networkidle', timeout: 60000 });
  await page.waitForTimeout(2500);
  await page.screenshot({ path: `${SHOTS}/mobile-menu.png`, fullPage: true });
  await ctx.close();
}

// 3) iPhone 13 our story
{
  const ctx = await browser.newContext({ ...devices['iPhone 13'] });
  const page = await ctx.newPage();
  await page.goto('https://www.vshouse.net/our-story', { waitUntil: 'networkidle', timeout: 60000 });
  await page.waitForTimeout(2000);
  await page.screenshot({ path: `${SHOTS}/mobile-our-story.png`, fullPage: true });
  await ctx.close();
}

// 4) iPhone 13 contact / reservation
{
  const ctx = await browser.newContext({ ...devices['iPhone 13'] });
  const page = await ctx.newPage();
  await page.goto('https://www.vshouse.net/contact', { waitUntil: 'networkidle', timeout: 60000 });
  await page.waitForTimeout(2000);
  await page.screenshot({ path: `${SHOTS}/mobile-contact.png`, fullPage: true });
  await ctx.close();
}

// 5) Desktop home
{
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await ctx.newPage();
  await page.goto('https://www.vshouse.net/', { waitUntil: 'networkidle', timeout: 60000 });
  await page.waitForTimeout(2000);
  await page.screenshot({ path: `${SHOTS}/desktop-home.png`, fullPage: true });
  await ctx.close();
}

await browser.close();
console.log('captured');
