'use strict';
/* fit-2026-10-13.js — scratch fit for the two-entry batch, keyed by latin, every change explicit. */
const fs = require('fs');
const dir = '/home/user/Timber/data/held-photos/2026-10-13/';
const batch = JSON.parse(fs.readFileSync(dir + 'batch-as-sent.json', 'utf8'));
const FIX = {
  "Lamium maculatum 'Beacon Silver'": {
    height: '15–20 cm', spread: '50–60 cm',
    hardinessNote: 'Very hardy: withstands below −20°C, so hardy anywhere in the UK. Foliage may thin in harsh winters.',
    pest: 'slugs',
    aspect: 'North / East / West',
    soil: 'Any, moist but drained',
    soilWarning: 'Avoid waterlogging; spreads fast when happy',
    water: 'Water regularly until established, then during long dry spells, especially under trees or in containers.',
    resilience: 'Very cold-hardy, shade-tolerant and adaptable; established plants take moderate dry shade and recover from cutting back. Pests: slugs and snails on tender growth.',
    toxicity: 'No known hazard.',
    rootSize: '',
    stockForm: 'container',
    pollination: 'not applicable; bee-friendly flowers rich in nectar',
    uncertain: [
      "rootSize: as sent, 'Shallow, spreading, rooting stems' carries no figure, so it is blank (the validator refuses a figureless value).",
      "toxicity: as sent blank. No ASPCA entry for Lamium maculatum; Gardeners' World ('Roseum') reports no toxic effects; Plant Addicts calls it safe for cats and dogs. Written as 'No known hazard.' on that evidence, none of it a veterinary database.",
      "spread: RHS gives 0.5–1 m for the cultivar; 50–60 cm as sent is the low end and stays (Oscar's call).",
    ],
  },
  "Chrysanthemum (Indicum Group) 'Soul Sister Purple'": {
    hardiness: 'H4',
    hardinessNote: 'Hardy through an average UK winter, approximately −10 to −5°C, by the deck’s other chrysanthemums; this cultivar’s own rating is unverified, so protect pots from hard frost and winter wet.',
    height: '20–35 cm', spread: '25–45 cm',
    pest: '',
    aspect: 'South / West',
    soil: 'Fertile, moist, drained',
    soilWarning: 'No winter wet; pots must drain freely',
    water: 'Keep evenly watered in growth and flower; water when the compost surface starts to dry, never leaving it saturated.',
    resilience: 'Made for cool autumn displays; winter survival depends on drainage and frost protection. Pests: aphids, spider mites, earwigs, leaf miner; white rust and mildew.',
    rootSize: '',
    stockForm: 'container',
    pollination: 'not applicable; fully double flowers offer little pollen or nectar',
    clay: '',
    uncertain: [
      "hardiness: as sent blank (required). H4 by the sibling rule: the deck's Chrysanthemum × morifolium Garden Mum Group and 'Autumn Bronze' both carry H4. [Unverified] against any rating for this cultivar; none was found online.",
      "rootSize: as sent, 'Compact, fibrous root system' carries no figure, so it is blank.",
      "clay: as sent 'with care', which is not yes/no; blank, as not established.",
    ],
  },
};
const BUDGET = { visual: 190, water: 120, prune: 165, resilience: 165, uses: 150 };
const out = batch.map(p => {
  const fix = FIX[p.latin]; if (!fix) throw new Error('no fix for ' + p.latin);
  const q = { ...p };
  for (const [k, v] of Object.entries(fix)) {
    if (k === 'uncertain') q.uncertain = [...(p.uncertain || []), ...v]; else q[k] = v;
  }
  const bad = [];
  if (q.soil.length > 26) bad.push(`soil ${q.soil.length}>26`);
  if (q.soilWarning.length > 44) bad.push(`soilWarning ${q.soilWarning.length}>44`);
  for (const [k, b] of Object.entries(BUDGET)) if ((q[k] || '').length > b) bad.push(`${k} ${q[k].length}>${b}`);
  if (bad.length) throw new Error(q.latin + ': ' + bad.join(', '));
  console.log(`${q.latin}\n  soil ${q.soil.length}  warn ${q.soilWarning.length}  visual ${q.visual.length}  water ${q.water.length}  prune ${q.prune.length}  resilience ${q.resilience.length}  uses ${q.uses.length}`);
  return q;
});
fs.writeFileSync(dir + 'batch-corrected.json', JSON.stringify(out, null, 2) + '\n');
out.forEach((q, i) => fs.writeFileSync(`/tmp/claude-0/-home-user-Timber/59fcc531-734d-52fe-8931-17e4edecfa61/scratchpad/plant-${i}.json`, JSON.stringify(q, null, 2)));
console.log('wrote batch-corrected.json');
