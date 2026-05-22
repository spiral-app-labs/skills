// Curated Unsplash photo set for V's House. Verifies each before saving.
import { writeFile, mkdir } from 'node:fs/promises';
import path from 'node:path';

const OUT = path.resolve(process.cwd(), '../public/images/vs-house');

// Curated by intent. Each entry: { slot, id, w }.
const SET = [
  // Hero — warm low-light Vietnamese / Asian dining room
  { slot: 'hero-room',         id: '1517248135467-4c7edcad34c4', w: 2400 },
  { slot: 'hero-pho',          id: '1582878826629-29b7ad1cdc43', w: 2000 },
  // Food
  { slot: 'food-pho-deluxe',   id: '1576577445504-6af96477db52', w: 1600 },
  { slot: 'food-pho-bowl',     id: '1614961233913-a5113a4a34ed', w: 1600 },
  { slot: 'food-bun-bo-hue',   id: '1583032015879-e5022cb87c6b', w: 1600 },
  { slot: 'food-banh-khot',    id: '1607330289024-1535c6b4e1c1', w: 1600 },
  { slot: 'food-shaken-beef',  id: '1606756790138-261d2b21cd75', w: 1600 },
  { slot: 'food-spring-rolls', id: '1604908176997-125f25cc6f3d', w: 1600 },
  { slot: 'food-vermicelli',   id: '1559314809-0d155014e29e',    w: 1600 },
  { slot: 'food-sushi',        id: '1579871494447-9811cf80d66c', w: 1600 },
  // Bar / cocktails
  { slot: 'cocktail-saigon',   id: '1551024709-8f23befc6f87',    w: 1600 },
  { slot: 'cocktail-mekong',   id: '1514362545857-3bc16c4c7d1b', w: 1600 },
  { slot: 'cocktail-espresso', id: '1556679343-c7306c1976bc',    w: 1600 },
  { slot: 'bar-room',          id: '1559339352-11d035aa65de',    w: 1800 },
  // Interior detail
  { slot: 'interior-booth',    id: '1414235077428-338989a2e8c0', w: 1800 },
  { slot: 'interior-plants',   id: '1551632436-cbf8dd35adfa',    w: 1800 },
  { slot: 'interior-detail',   id: '1466978913421-dad2ebd01d17', w: 1800 },
  // Patio / fairy lights
  { slot: 'patio-lights',      id: '1545486332-9e0999c535b2',    w: 1800 },
  // Process / hands
  { slot: 'process-broth',     id: '1543353071-873f17a7a088',    w: 1600 },
  { slot: 'process-hands',     id: '1556909114-44e3e9399a2c',    w: 1600 },
];

async function tryFetch(id, w) {
  const url = `https://images.unsplash.com/photo-${id}?w=${w}&q=80&auto=format&fit=crop`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const ct = res.headers.get('content-type') || '';
  if (!ct.startsWith('image/')) throw new Error(`bad content-type ${ct}`);
  return Buffer.from(await res.arrayBuffer());
}

async function main() {
  await mkdir(OUT, { recursive: true });
  const results = [];
  for (const { slot, id, w } of SET) {
    try {
      const buf = await tryFetch(id, w);
      const out = path.join(OUT, `${slot}.jpg`);
      await writeFile(out, buf);
      console.log(`  ok  ${slot}  (${(buf.length/1024).toFixed(0)} KB)`);
      results.push({ slot, ok: true, bytes: buf.length });
    } catch (e) {
      console.log(`  FAIL ${slot}  ${e.message}`);
      results.push({ slot, ok: false, err: e.message });
    }
  }
  const ok = results.filter(r => r.ok).length;
  console.log(`\n${ok}/${SET.length} downloaded`);
}

main().catch((e) => { console.error(e); process.exit(1); });
