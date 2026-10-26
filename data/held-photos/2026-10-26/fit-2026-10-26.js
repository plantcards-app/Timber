'use strict';
/* fit-2026-10-26.js — Forge download batch-2026-10-26_1 (3 drafts), after the second pass (data/second-pass/2026-10-26).
   Reads batch-corrected.json, writes batch-new.json. Usage: node fit-2026-10-26.js */
const fs = require('fs');
const dir = __dirname + '/';
const batch = JSON.parse(fs.readFileSync(dir + 'batch-corrected.json', 'utf8'));

const FIX = {
  "Erysimum cheiri 'Sugar Rush Mixed'": {
    u: ["name: RHS 351299 lists the series as Erysimum Sugar Rush Series; retailers sell it as Erysimum cheiri F1 Sugar Rush. The label's form is kept.",
        'size: nurseries give about 30 × 30 cm (Seedaholic, Van Meuwen); the card carries the RHS band 10–50 cm.',
        'peak: Mar-May kept; RHS gives spring into summer, sometimes autumn, no months. Sold as flowering in autumn and again in spring.'] },
  "Physocarpus opulifolius ANGEL GOLD ('Minange')": {
    common: 'Ninebark Angel Gold',
    visual: 'Bright golden-yellow lobed leaves, flushed copper in spring · domed clusters of small white to pinkish flowers in early summer · peeling bark in winter',
    compliance: 'PBR protected · commercial propagation restricted',
    u: ["common: 'Ninebark' made unique, as the deck's five other ninebarks carry their cultivar.",
        'hardiness: RHS 338082 agrees, H7. Size from RHS 338082: 1.5–2.5 × 1–1.5 m.',
        "visual: copper spring flush from RHS 338082; the 'Apr-Sep' inside the visual line dropped (it is the peak field).",
        "compliance: RHS lists 'Minange' PBR; the grant number is not given."] },
  'Clerodendrum bungei': {
    toxicity: 'No record for this species; some Clerodendrum can cause mild stomach upset if eaten and skin irritation, so wear gloves if sensitive.',
    u: ['hardiness, height, spread: RHS 29541 agrees (H4, 1.5–2.5 × 1.5–2.5 m); spreads further by suckers.',
        "toxicity: no RHS or ASPCA listing found for C. bungei; Pet Poison Helpline's genus entry (Glory Chain) rates Clerodendrum mild (stomach upset, contact dermatitis). Reworded from 'No known hazard.' to print Handle with care.",
        'peak: Aug-Sep kept; RHS gives late summer and autumn, no months.'] },
};

const out = batch.map(p => {
  const f = FIX[p.latin];
  if (!f) throw new Error('no FIX entry for ' + p.latin);
  const { u, ...set } = f;
  return { ...p, ...set, uncertain: [...(p.uncertain || []), ...u] };
});
fs.writeFileSync(dir + 'batch-new.json', JSON.stringify(out, null, 2) + '\n');
out.forEach((p, i) => fs.writeFileSync(dir + `entry-${i}.json`, JSON.stringify(p, null, 2) + '\n'));
console.log('wrote batch-new.json and entry-0..' + (out.length - 1));
