'use strict';
/* fit-2026-10-28.js — Forge download batch-2026-10-28_1 (one draft), after the second pass (data/second-pass/2026-10-28).
   Reads batch-corrected.json, writes batch-new.json and plant.json. Usage: node fit-2026-10-28.js */
const fs = require('fs');
const dir = __dirname + '/';
const [p] = JSON.parse(fs.readFileSync(dir + 'batch-corrected.json', 'utf8'));
const fixed = Object.assign({}, p, {
  height: p.height || '15–25 cm',
  spread: p.spread || '30–45 cm',
  toxicity: 'Highly toxic if eaten: all parts, including the milky sap, contain strong alkaloids. Keep away from children, dogs and cats, and wear gloves when handling.',
  cvs: "Soirée White – pure white · Soirée Pink White Eye – soft pink, white centre · Soirée Light Pink Dark Eye – blush with a dark centre",
  uncertain: (p.uncertain || []).concat([
    "size: 15–25 cm × 30–45 cm is Suttons' figure for the Soirée Sweet Besties Trio, which includes Cerise White Eye; not RHS and not this colour alone.",
    'hardiness: RHS 98105 gives H1c for the species, as drafted.',
    "toxicity: raised from the Toxic to the Highly toxic rung on the RHS profile ('all parts highly toxic, including the sap'); NC State Extension rates it low severity.",
    'cvs: sibling colours from UK retail listings (Promesse de Fleurs, Suttons), not RHS.'
  ]),
  sources: (p.sources || []).concat(['RHS 98105 Catharanthus roseus, search snippet', 'Suttons Soirée Sweet Besties Trio listing', 'Promesse de Fleurs Catharanthus roseus Cerise White Eye listing', 'NC State Extension Catharanthus roseus'])
});
fs.writeFileSync(dir + 'batch-new.json', JSON.stringify([fixed], null, 2) + '\n');
fs.writeFileSync(dir + 'plant.json', JSON.stringify(fixed, null, 2) + '\n');
console.log('wrote batch-new.json and plant.json');
