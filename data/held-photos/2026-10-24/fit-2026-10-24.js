'use strict';
/* fit-2026-10-24.js — Forge batch 2026-10-20 (handed off 2026-10-24) after the second pass
   (data/second-pass/2026-10-24). Reads batch-checked.json, writes batch-corrected.json. Every change is
   keyed by latin; u: lines are appended to `uncertain`. SKIP entries are not held.
   Usage: node fit-2026-10-24.js [outdir] */
const fs = require('fs');
const dir = __dirname + '/';
const batch = JSON.parse(fs.readFileSync(dir + 'batch-checked.json', 'utf8'));

const SKIP = {
  "Imperata cylindrica 'Red Baron'": "dealt double: RHS lists 'Red Baron' as a synonym of 'Rubra', and the deck's Imperata cylindrica 'Rubra' card is already sold as Japanese blood grass 'Red Baron'. Blank pollination and stockForm applied on that card. RHS gives H4 where the draft said H6; the dealt card already carries its own band",
  'Ginkgo biloba': "dealt double of the species card. The label read 'Thelma's Broom', registered as Ginkgo biloba 'Thelma' (American Conifer Society, provisional): a male dwarf to about 1.5–3 m with some rolled, tubular leaves — a different plant from the species card. Back to Oscar: a 'Thelma' card needs its own research, and the tubular-leaved ginkgo photo of 2026-10-20 (2026-10-20b/13) may be it",
  "Choisya ternata 'Brica'": "dealt double: RHS 96024 lists 'Brica' as a synonym of Choisya ternata SUNDANCE ('Lich'), golden leaves, which the deck already carries as Choisya ternata 'Sundance'. Blank pollination and stockForm applied on that card",
};

const FIX = {
  "Corylus avellana MEDUSA ('JWW9')": {
    common: 'Contorted Hazel MEDUSA',
    soilWarning: 'Avoid waterlogged ground',
    hue: 75,
    visual: 'Tightly corkscrew-twisted stems, a sculpture in winter · pale yellow lambs-tail catkins on bare stems late winter · green leaves turning yellow in autumn',
    cvs: "'Contorta' – the classic corkscrew hazel, taller · 'Red Majestic' – twisted stems, purple leaves · 'Aurea' – straight stems, yellow leaves",
    u: ["identity: MEDUSA ('JWW9') is a heavily contorted (corkscrew) hazel, more compact than 'Contorta', green leaves yellow in autumn; found in the Netherlands by Jan-Willem Wezelenburg (Polish nursery catalogue e-katalogroslin.pl, not RHS). Visual, hue and cvs rewritten for the corkscrew form.",
        'size: filled by the second pass from futureforests.ie (1.5–2.5 m × 1.5–2.5 m); Promesse de Fleurs 2 × 1.5 m ultimate; no RHS page. [Unverified]',
        "hardiness: H6 is the RHS species rating (4511); no cultivar rating found.",
        "name: the Forge label line ran two labels together ('…Medusa' + 'Acer Palmatum Sumi Nagashi'); the Acer is its own card in this batch.",
        "soilWarning: blank in the draft; 'Avoid waterlogged ground' added because the card needs one (RHS: well-drained soil). Generic, not cultivar-specific.",
        "common: the draft's 'Hazel' made specific for the deck's unique-name rule."] },
  "Acer palmatum 'Sumi-nagashi'": {
    common: "Japanese Maple 'Sumi-nagashi'",
    visual: 'Deeply cut seven-lobed leaves, purple-red in spring, deep maroon through summer · bright red autumn colour · upright small tree',
    u: ["size: filled from RHS 48429, 2.5–4 m × 2.5–4 m in 10–20 years.",
        'visual: summer colour set to deep maroon (RHS 48429); Dobies says bronze-green in summer.',
        'toxicity: horse poisoning is documented for red maple (Acer rubrum), not A. palmatum; no ASPCA entry. No known hazard stays. [Unverified]'] },
  "Cryptomeria japonica 'Tenzan'": {
    visual: 'Tiny flat-topped bun of dense, soft needle-like foliage, pale green new shoots maturing deep green · deep reddish-bronze in winter',
    foliage: 'evergreen; short, densely packed needle-like leaves forming a tight bun, bronzing in winter',
    resilience: 'Extremely slow; less hardy than most Cryptomeria and prone to sun scorch. Dislikes cold winds and drought. Pests: few; red spider mite if stressed.',
    water: 'Water regularly in its first year and never let pots dry out; established plants need water only in long dry spells.',
    u: ["name: the label read 'Ten- San'; RHS 71612 files it as 'Tenzan-sugi'. 'Tenzan' as the Forge read it is kept.",
        'size: RHS 71612 gives 0.1–0.5 m × 0.1–0.5 m, about 15 cm in ten years; nurseries give more (75 × 90 cm at ten years).',
        'colour: RHS: pale green new shoots maturing deep green, deep reddish-bronze in winter; no golden tips.',
        "label: the held Cryptomeria japonica card (Forge 2026-10-18, label 'Cryptomeria Ten-.Sar') was very likely the same label misread as the species; Oscar to confirm before that card is removed."] },
  "Choisya × dewitteana GOLDFINGERS ('Limo')": {
    common: 'Mexican Orange Goldfingers',
    compliance: 'PBR protected (EU 5554) · commercial propagation restricted',
    u: ["name and code confirmed: RHS 144467, Choisya × dewitteana Goldfingers ('Limo' PBR); H4, 1–1.5 m × 1–1.5 m agree.",
        'compliance: EU plant variety right 5554, breeder Peter R. Moore (Plantipp, André Briant).',
        "common: 'Mexican Orange Blossom' is the dealt Choisya ternata card's name; the trade name is carried."] },
  'Callistemon citrinus': {
    u: ['size: as drafted 1.5–4 m × 1.5–2.5 m (cultivar figures); RHS 2687 gives the species 4–8 m × 2.5–4 m, often about 5 m.',
        'toxicity: the ASPCA lists Callistemon as non-toxic to dogs, cats and horses.',
        'compliance: whether Callistemon/Melaleuca is on the GB Xylella host list could not be checked (Defra portal unreachable); left blank. [Unverified]',
        "name: RHS uses Callistemon citrinus; Melaleuca citrina is the merged-genus name, not confirmed in sources found."] },
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
skipped.forEach(([l, r]) => console.log('  skip', l, '—', r.split(':')[0]));
if (process.argv[2]) out.forEach((q, i) => fs.writeFileSync(`${process.argv[2]}/plant-${i}.json`, JSON.stringify(q, null, 2)));
