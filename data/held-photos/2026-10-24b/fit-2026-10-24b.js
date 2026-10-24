'use strict';
/* fit-2026-10-24b.js — the 7 new drafts in Forge download batch-2026-10-20_3 (2026-10-24), after the second pass
   (data/second-pass/2026-10-24b). Reads batch-checked.json, writes batch-corrected.json. The 7 repeats in that
   download (Imperata, Ginkgo, Brica ×2, Goldfingers, Callistemon) were handled in ../2026-10-24/.
   Usage: node fit-2026-10-24b.js [outdir] */
const fs = require('fs');
const dir = __dirname + '/';
const batch = JSON.parse(fs.readFileSync(dir + 'batch-checked.json', 'utf8'));

const SKIP = {
  "Heuchera 'Wild Any'": "label 'Heuchera hybrida 'Wild Any' matches no cultivar. Candidates: 'Wild Rose' PBR (Primo Series, RHS 369164, H5, rosy-purple leaves, dark veins) or 'Wildberry' (glowing purple, US PP31222). Back to Oscar for the full label",
};

const FIX = {
  "Viola 'Columbine'": {
    foliage: 'evergreen; small oval toothed leaves in low tufts',
    resilience: 'Reliable, free-flowering perennial viola; can be short-lived and tires in drought. Pests: slugs, snails, aphids; powdery mildew, leaf spot.',
    visual: 'Creamy white flowers streaked violet-lilac with a yellow eye · long spring-to-late-summer display over low tufted foliage',
    u: ["name: the label read 'Viola cornuta Columbine'; RHS 62773 lists it as Viola 'Columbine' (Va), not under V. cornuta. The Forge's form is kept.",
        'hardiness: as drafted H5; RHS 62773 gives H6.',
        'foliage: as drafted semi-evergreen; RHS says evergreen.',
        'flowers: creamy white streaked violet-lilac, yellow eye (RHS 62773; perennials.com).'] },
  "× Heucherella 'Hopscotch Any'": {
    latin: "× Heucherella 'Hopscotch'",
    common: "Heucherella 'Hopscotch'",
    hue: 10,
    height: '25–30 cm', spread: '50–60 cm',
    peak: 'Apr-Oct',
    foliage: 'evergreen; lobed leaves, red in spring, ageing through bronze to deep green',
    visual: 'Lobed leaves bright red in spring, ageing through bronze to deep green · airy sprays of small white flowers in late spring',
    compliance: '',
    u: ["name: the label read 'Heucherella 'Hopscotch Any'; 'Any' is a stray label word. RHS 369166: × Heucherella 'Hopscotch' (Fun and Games Series), bred by Hans Hansen at Walters Gardens (US PP28750).",
        'size: Walters Gardens and Proven Winners give 10–12 in tall × 20–24 in wide (25–30 cm × 50–60 cm); RHS says to 30 cm. Not RHS for the spread.',
        'hue, visual, foliage: rewritten from RHS and Walters Gardens (red spring leaves turning bronze then deep green, white flowers late spring); evergreen per RHS.',
        'peak: Apr-Oct is the foliage season, as on the deck\'s other Heucherella cards; flowering late spring (Walters) or midsummer (RHS).',
        'compliance: US patent PP28750; Canadian rights surrendered 2025; UK/EU PBR not found.'] },
  "× Heucherella 'Kimono'": {
    common: "Heucherella 'Kimono'",
    compliance: 'PBR protected · commercial propagation restricted',
    u: ["hardiness: RHS 163137 agrees, H6; AGM; evergreen.",
        'size: RHS band 0.1–0.5 m carried (draft 30–40 × 40–50 cm).',
        'compliance: RHS lists it PBR; Terra Nova, US PP12154.',
        'peak: Apr-Oct is the foliage season; flowers spring to early summer (RHS).'] },
  "Heuchera 'Lime Marmalade'": {
    common: "Heuchera 'Lime Marmalade'",
    resilience: 'Tough, evergreen and cold-hardy; copes with part shade. Lime leaves can scorch in hot afternoon sun. Pests: vine weevil grubs mainly; occasional rust.',
    u: ['hardiness: RHS 286096 agrees, H6; AGM.', 'size: RHS band 0.1–0.5 m carried (draft 30–45 × 40–45 cm).',
        'compliance: Terra Nova, US PP21861; UK PBR not found, left blank.'] },
  "Heuchera 'Caramel'": {
    common: "Heuchera 'Caramel'",
    compliance: 'PBR protected · commercial propagation restricted',
    u: ["name: the label read 'Heuchera 'Caramel' Squires Any'; 'Squires Any' is retailer text.",
        'hardiness: RHS 219309 agrees, H6; semi-evergreen.', 'size: RHS band 0.1–0.5 m carried (draft 30–45 × 45 cm).',
        "compliance: RHS lists 'Caramel' PBR; bred by Delabroye, US PP16560."] },
  "Lewisia 'Little Plum'": {
    common: "Lewisia 'Little Plum'",
    foliage: 'semi-evergreen; rosette of narrow fleshy green leaves',
    u: ["name: RHS 86371, Lewisia 'Little Plum' (Little Series); nurseries add 'longipetala'.",
        'hardiness: RHS agrees, H4; about 15 cm in flower.', 'size: RHS band 0.1–0.5 m carried.',
        'foliage: as drafted evergreen; RHS says semi-evergreen.',
        'flower colour: RHS describes salmon-pink, nurseries plum-magenta; the draft\'s plum stays with the name. [Unverified]'] },
};

const BUDGET = { visual: 190, water: 120, prune: 165, resilience: 165, uses: 150 };
const out = [], skipped = [];
for (const p of batch) {
  if (SKIP[p.latin]) { skipped.push([p.latin, SKIP[p.latin]]); continue; }
  const fix = FIX[p.latin] || {};
  const q = { ...p };
  for (const [k, v] of Object.entries(fix)) if (k !== 'u') q[k] = v;
  q.uncertain = [...(p.uncertain || []), ...(fix.u || [])];
  const bad = [];
  if (!q.height || !q.spread) bad.push('size blank');
  if ((q.soil || '').length > 26) bad.push('soil');
  if ((q.soilWarning || '').length > 44) bad.push('soilWarning');
  for (const [k, b] of Object.entries(BUDGET)) if ((q[k] || '').length > b) bad.push(`${k} ${q[k].length}>${b}`);
  if (bad.length) throw new Error(q.latin + ': ' + bad.join(', '));
  out.push(q);
}
fs.writeFileSync(dir + 'batch-corrected.json', JSON.stringify(out, null, 2) + '\n');
console.log(`wrote batch-corrected.json (${out.length} to hold; ${skipped.length} skipped)`);
skipped.forEach(([l, r]) => console.log('  skip', l, '—', r.split('.')[0]));
if (process.argv[2]) out.forEach((q, i) => fs.writeFileSync(`${process.argv[2]}/plant-${i}.json`, JSON.stringify(q, null, 2)));
