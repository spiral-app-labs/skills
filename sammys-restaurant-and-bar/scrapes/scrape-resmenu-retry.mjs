import { chromium, devices } from 'playwright';
const browser = await chromium.launch({ headless: true });
try {
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const p = await ctx.newPage();
  await p.goto('https://sammys-bar-and-grill.res-menu.com/', { waitUntil: 'domcontentloaded', timeout: 30000 });
  await p.waitForTimeout(4000);
  await p.screenshot({ path: 'screenshots/res-menu-desktop-fold.png', fullPage: false });
  await p.screenshot({ path: 'screenshots/res-menu-desktop-full.png', fullPage: true });
  const fs = await import('node:fs');
  fs.writeFileSync('res-menu-dom.html', await p.content());
  await ctx.close();
  const ctx2 = await browser.newContext({ ...devices['iPhone 13'] });
  const p2 = await ctx2.newPage();
  await p2.goto('https://sammys-bar-and-grill.res-menu.com/', { waitUntil: 'domcontentloaded', timeout: 30000 });
  await p2.waitForTimeout(4000);
  await p2.screenshot({ path: 'screenshots/res-menu-mobile-fold.png', fullPage: false });
  await p2.screenshot({ path: 'screenshots/res-menu-mobile-full.png', fullPage: true });
  await ctx2.close();
  console.log('ok');
} catch (e) { console.log('err', e.message); }
await browser.close();
