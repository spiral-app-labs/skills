import fs from 'node:fs';

const txt = fs.readFileSync('rg-deep-final.txt', 'utf8');

// Block-extract reviews. Pattern: "Name TIME ago on Google\n[optional prose]\nFood: N\nService: N\nAtmosphere: N\n[optional metadata]"
// Strategy: split on the date-marker pattern.
const splitter = /\n([A-Z][\w'’\.\-\/&\s]{0,40}?)\s(a year ago|\d+ (?:days?|weeks?|months?|years?) ago|yesterday|today)\s+on Google\n/g;

const matches = [];
let m;
while ((m = splitter.exec(txt)) !== null) {
  matches.push({ idx: m.index, end: m.index + m[0].length, name: m[1].trim(), date: m[2].trim() });
}

// For each match, the body is from end up to the start of the next match (or +2000 chars)
const reviews = [];
for (let i = 0; i < matches.length; i++) {
  const start = matches[i].end;
  const end = i + 1 < matches.length ? matches[i + 1].idx : start + 2000;
  let body = txt.slice(start, end).trim();

  // Stop body at the next "Recommended dishes:" or platform marker, whichever first — keep ratings
  const ratingFood = /Food:\s*(\d)/.exec(body);
  const ratingService = /Service:\s*(\d)/.exec(body);
  const ratingAtmos = /Atmosphere:\s*(\d)/.exec(body);
  // Prose is everything before the first "Food:" line
  const proseEnd = body.search(/\n?Food:\s*\d/);
  const prose = proseEnd >= 0 ? body.slice(0, proseEnd).trim() : '';
  const recDishes = /Recommended dishes:\s*([^\n]+)/i.exec(body);
  const mealType = /Meal type:\s*([^\n]+)/i.exec(body);
  const price = /Price per person:\s*([^\n]+)/i.exec(body);

  reviews.push({
    name: matches[i].name,
    date: matches[i].date,
    source: 'Google (via RestaurantGuru aggregation)',
    text: prose,
    ratings: {
      food: ratingFood ? +ratingFood[1] : null,
      service: ratingService ? +ratingService[1] : null,
      atmosphere: ratingAtmos ? +ratingAtmos[1] : null
    },
    mealType: mealType?.[1]?.trim() || null,
    pricePerPerson: price?.[1]?.trim() || null,
    recommendedDishes: recDishes?.[1]?.trim() || null,
    overallRating: ratingFood ? +ratingFood[1] : null
  });
}

// Filter: keep reviews with prose OR with all 5/5 ratings (so highest-rated 5-star ones aren't lost)
// Then sort: 5-star first, then by prose length descending (longer prose = more value)
const enriched = reviews.map(r => ({
  ...r,
  hasProse: !!r.text && r.text.length > 0,
  proseLen: r.text?.length || 0,
  isFiveStar: r.ratings.food === 5 && r.ratings.service === 5 && (r.ratings.atmosphere === 5 || r.ratings.atmosphere === null)
}));

// Sort by: prose-with-5-star first (highest), then any 5-star, then by prose length
enriched.sort((a, b) => {
  if (a.hasProse && !b.hasProse) return -1;
  if (!a.hasProse && b.hasProse) return 1;
  if (a.isFiveStar && !b.isFiveStar) return -1;
  if (!a.isFiveStar && b.isFiveStar) return 1;
  return b.proseLen - a.proseLen;
});

// Take top 30 with prose
const withProse = enriched.filter(r => r.hasProse);
const top30 = withProse.slice(0, 30);

// Write packet
const packet = {
  collectedAt: new Date().toISOString(),
  source: 'Google reviews via RestaurantGuru aggregation page (https://restaurantguru.com/Sammys-Bar-and-Grill-Huntley)',
  sortApplied: 'Prose-bearing first; then ranked by 5-star + prose length to approximate Highest filter',
  note: 'Headless Google Maps Reviews tab was not accessible from Playwright context (place panel did not surface Reviews UI). Aggregator route used per audit-skill bot-block matrix; all reviews are Google-sourced and tagged with reviewer date.',
  totalParsed: reviews.length,
  withProse: withProse.length,
  fiveStarShare: enriched.filter(r => r.isFiveStar).length,
  selected: top30.length,
  reviews: top30.map(r => ({
    name: r.name,
    rating: r.ratings.food,
    food: r.ratings.food,
    service: r.ratings.service,
    atmosphere: r.ratings.atmosphere,
    date: r.date,
    text: r.text,
    mealType: r.mealType,
    pricePerPerson: r.pricePerPerson,
    recommendedDishes: r.recommendedDishes
  }))
};

fs.writeFileSync('google-reviews-packet-30.json', JSON.stringify(packet, null, 2));
fs.writeFileSync('google-reviews-all-parsed.json', JSON.stringify(reviews, null, 2));

console.log('total parsed:', reviews.length);
console.log('with prose:', withProse.length);
console.log('selected top 30:', top30.length);
console.log('avg prose len of top 30:', Math.round(top30.reduce((s,r)=>s+r.proseLen,0) / top30.length));
