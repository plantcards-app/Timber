'use strict';
/* fit-2026-11-05.js — Forge handover of 2026-11-05 (batch 2026-10-29, second hand-over), checked online this session.
   Reads batch-as-sent.json, writes batch-new.json and entry-N.json. Usage: node fit-2026-11-05.js */
const fs = require('fs');
const dir = __dirname + '/';
const batch = JSON.parse(fs.readFileSync(dir + 'batch-as-sent.json', 'utf8'));

const FIX = {
  "Pinus thunbergii 'Thunderhead'": {
    hardiness: 'H7',
    hardinessNote: 'Fully hardy in the UK, below -20°C (RHS H7).',
    height: '4–8 m',
    spread: '1.5–2.5 m',
    visual: 'Long stiff dark green needles · bold silvery-white candles in spring · dense, slow-growing pine',
    sources: ['RHS 115367 (Pinus thunbergii \'Thunderhead\'), search snippet: AGM, H7, 4–8 × 1.5–2.5 m in 20–50 years, full sun, well-drained loam or sand, drought resistant',
      'futureforests.ie: about 3 × 1.5 m in 10 years'],
    u: ['name: the Forge held three scans of one label (PINUS, / THUNBERGII / TTHUNDERHEAD); Oscar confirmed 2026-11-05 that they are this one plant.',
      'hardiness: RHS 115367 gives H7; the draft had H6. Corrected.',
      "size: RHS 115367 ultimate size 4–8 × 1.5–2.5 m (20–50 years); the draft's 1.5–2 m was too small. US nurseries give about 3 × 4.5 m.",
      'compliance: the plant-passport line is the draft\'s and was not checked online [Unverified].'] },
  "Pinus mugo 'Carsten’s Wintergold'": {
    common: "Dwarf mountain pine 'Carsten's Wintergold'",
    spread: '1–1.5 m',
    sources: ["RHS 511777 (Pinus mugo 'Carstens'), search snippet: 0.5–1 × 1–1.5 m in 5–10 years, well-drained",
      'promessedefleurs.ie, grasslands.co.uk: H7; winter colour deeper the colder it is',
      'Thompson & Morgan: up to 60 × 60 cm'],
    u: ["name: RHS lists the cultivar as 'Carstens' (Wintergold is the trade name); the label's form is kept.",
      "size: RHS 511777 gives 0.5–1 × 1–1.5 m; the draft's spread 0.5–1 m corrected.",
      'hardiness: H7 from two retailers quoting RHS; the RHS snippet itself did not show it [Unverified].',
      "common: 'Dwarf Mountain Pine' made unique, as the deck has the species and 'Palmeter' under that name.",
      'photo: shows the gold winter needles (taken in autumn under cover).'] },
  "Colocasia esculenta 'White Lava'": {
    common: "Elephant Ears 'White Lava'",
    hardiness: 'H1b',
    hardinessNote: 'Tender (H1b): RHS rates the species for a warm glasshouse, 10–15°C minimum. Outdoors only in summer; lift or bring in before frost.',
    height: '1–1.5 m',
    spread: '1–1.5 m',
    visual: 'Huge rounded heart-shaped leaves splashed creamy white along the centre · dark purple leaf stalks · bold tropical foliage Jun-Sep',
    sources: ["RHS 511667 (Colocasia esculenta 'White Lava' (Royal Hawaiian Series) (v)), search snippet: grown under glass; no size or rating in the snippet",
      'RHS 4248 (Colocasia esculenta), search snippet: H1b, 1–1.5 × 1–1.5 m',
      'gardenia.net: 90–120 × 60–90 cm; farmergracy.co.uk: 1.2–1.5 m, tender'],
    u: ["name: the label reads 'Calocasia', corrected to Colocasia. RHS lists it in the Royal Hawaiian Series.",
      "hardiness: no RHS rating found for 'White Lava' itself; H1b is the RHS species rating (the draft had H1c from memory). [Unverified] for the cultivar.",
      'size: the RHS species band 1–1.5 m; the draft had none. Retailers give 0.9–1.5 m.',
      "visual: dark purple stalks and the creamy (not pure white) centre splash are from Oscar's photo; Oscar confirmed the photo is 'White Lava'.",
      "common: made unique; the deck's 'Elephant's ears' is a Bergenia."] },
  "Cornus alba 'Siberian Pearls'": {
    common: 'Siberian Pearls Dogwood',
    height: '1.5–2.5 m',
    spread: '2.5–4 m',
    sources: ["RHS 103180 (Cornus alba 'Siberian Pearls'), search snippet: compact upright deciduous shrub, 1.5–2.5 × 2.5–4 m",
      'denolf.com: white berries in mid summer, hardy to -30°C',
      "Craven College: 'Siberian Pearls' is a particularly free-fruiting selection"],
    u: ["name: the label reads 'Cornus Alba Sibirica Siberian Pearl'; RHS 103180 names it Cornus alba 'Siberian Pearls'. Oscar confirmed the photo.",
      'size: RHS 103180, 1.5–2.5 × 2.5–4 m; the draft had none.',
      'hardiness: H7 is the RHS rating of Cornus alba; the cultivar snippet did not show one. Denolf gives -30°C.',
      "common: 'Siberian Dogwood' is also used for 'Sibirica'; made specific."] },
};

const out = batch.map(p => {
  const f = FIX[p.latin];
  if (!f) throw new Error('no FIX entry for ' + p.latin);
  const { u, ...set } = f;
  return { ...p, ...set, uncertain: [...(p.uncertain || []).filter(s => !/not checked online|as remembered/i.test(s)), ...u] };
});
fs.writeFileSync(dir + 'batch-new.json', JSON.stringify(out, null, 2) + '\n');
out.forEach((p, i) => fs.writeFileSync(dir + `entry-${i}.json`, JSON.stringify(p, null, 2) + '\n'));
console.log('wrote batch-new.json and entry-0..' + (out.length - 1));
