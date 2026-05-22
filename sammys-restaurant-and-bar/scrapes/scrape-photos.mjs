import { chromium } from 'playwright';
import fs from 'node:fs';

const browser = await chromium.launch({ headless: true });
const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 }, userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.4 Safari/605.1.15' });
const p = await ctx.newPage();
p.setDefaultTimeout(30000);

// Restaurant Guru photos page
await p.goto('https://restaurantguru.com/Sammys-Bar-and-Grill-Huntley/photos', { waitUntil: 'domcontentloaded', timeout: 30000 }).catch(() => {});
await p.waitForTimeout(3500);
for (let i = 0; i < 6; i++) { await p.evaluate(() => window.scrollBy(0, 3000)); await p.waitForTimeout(900); }
await p.screenshot({ path: 'screenshots/photos-rg.png', fullPage: false });
fs.writeFileSync('photos-rg.txt', await p.evaluate(() => document.body.innerText));
fs.writeFileSync('photos-rg.html', await p.content());

// Wheree photos
await p.goto('https://sammys-restaurant-bar-1.wheree.com/photos', { waitUntil: 'domcontentloaded', timeout: 30000 }).catch(() => {});
await p.waitForTimeout(3000);
await p.screenshot({ path: 'screenshots/photos-wheree.png', fullPage: false });
fs.writeFileSync('photos-wheree.txt', await p.evaluate(() => document.body.innerText));

// Yelp photos
await p.goto('https://www.yelp.com/biz_photos/sammys-bar-and-grill-huntley-2', { waitUntil: 'domcontentloaded', timeout: 25000 }).catch(() => {});
await p.waitForTimeout(3000);
await p.screenshot({ path: 'screenshots/photos-yelp.png', fullPage: false });

// Tripadvisor photos
await p.goto('https://www.tripadvisor.com/RestaurantPhotoAlbum-g36156-d7259490-Reviews-Sammy_s_Restaurant_Bar-Huntley_Illinois.html', { waitUntil: 'domcontentloaded', timeout: 25000 }).catch(() => {});
await p.waitForTimeout(2500);
await p.screenshot({ path: 'screenshots/photos-ta.png', fullPage: false });

await browser.close();
console.log('done');
