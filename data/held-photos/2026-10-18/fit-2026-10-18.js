'use strict';
/* fit-2026-10-18.js — scratch fit for the two arrays of 2026-10-18 (14 + 12 entries), keyed by latin, every
   change explicit. The two exact doubles (Jacobaea maritima, Dryopteris erythrosora) are not fitted here: they
   are handled on the dealt cards with compare-double (see README).
   Usage: node fit-2026-10-18.js [outdir]   (outdir: also write one plant-NN.json per entry for check-plant-json) */
const fs = require('fs');
const dir = __dirname + '/';
const batch = [...JSON.parse(fs.readFileSync(dir + 'batch-14-as-sent.json', 'utf8')),
               ...JSON.parse(fs.readFileSync(dir + 'batch-12-as-sent.json', 'utf8'))];
const DOUBLES = ['Jacobaea maritima', 'Dryopteris erythrosora'];
const RB = 'rootSize: as sent carries no figure, so it is blank (the validator refuses a figureless value).';
const CL = "clay: as sent 'conditional', which is not yes/no; blank, as not established.";
const CO = "container: as sent 'conditional'; blank (not a card field).";
const NA = s => 'not applicable; ' + s.charAt(0).toLowerCase() + s.slice(1).replace(/\.$/, '');
const FIX = {
  "Rhododendron 'Northern Hi-Lights'": {
    hardiness: 'H6', aspect: 'North / East', peak: 'May-Jun',
    soil: 'Acidic, humus-rich, moist', soilWarning: 'No chalk or lime; no drought or waterlogging',
    visual: 'Rounded deciduous shrub with spring trusses of creamy yellow to pale ivory trumpet flowers, yellow-blotched on the upper petals and lightly fragrant. Leaves can colour warmly in autumn.',
    resilience: 'Exceptional cold hardiness, but roots dislike drought and alkalinity. Pests: vine weevil, lacebugs, aphids, caterpillars; petal blight, mildew, Phytophthora.',
    clay: '', u: [CL],
  },
  'Daphne sp.': {
    hardiness: 'H4',
    hardinessNote: 'Genus-level guess: H4, approximately −10 to −5°C, the cautious end of commonly sold daphnes (RHS H4 for D. odora and D. bholua, H5–H6 for others). Confirm from the label.',
    height: '0.3–2.5 m', spread: '0.3–2 m', peak: 'Jan-Apr', aspect: 'East / West',
    soil: 'Humus-rich, free-draining', soilWarning: 'No waterlogging, drought or root disturbance',
    resilience: 'Many are cold hardy in sheltered ground; waterlogging and root disturbance are the usual killers. Pests: occasional aphids, scale, leaf spot; Phytophthora root rot.',
    clay: '', container: '', u: [CL, CO, "hardiness: as sent 'Species dependent; often H4–H6', not a band. H4 is the cautious end of that range, [Unverified] for whichever Daphne this is."],
  },
  "Rhododendron 'Sunte Nectarine'": {
    hardiness: 'H6', aspect: 'East / South / West', peak: 'May-Jun',
    soil: 'Acidic, humus-rich, moist', soilWarning: 'No chalk or lime; no drought or waterlogging',
    resilience: 'Winter-hardy and showy but dependent on acid soil and steady moisture. Pests: vine weevil, lacebug, aphids, leafhopper; mildew, bud blast, Phytophthora.',
    clay: '', u: [CL],
  },
  "Acanthus 'Whitewater'": {
    hardiness: 'H5', height: '1–1.5 m', pest: 'slugs', aspect: 'East / South / West', peak: 'Jun-Aug',
    soil: 'Deep, drained; chalk OK', soilWarning: 'Winter wet rots crowns; hot sun scorches',
    resilience: 'Bold perennial, drought tolerant once rooted; can regrow from fleshy roots. Pests: slugs or snails on young leaves; powdery mildew in dry, crowded spots.',
    toxicity: 'May irritate sensitive skin, so wear gloves; no other hazard known.',
    clay: '', u: [CL, "height: as sent '1–1.5 m including spikes'; the spike note is dropped from the size string.", "toxicity: as sent prints the orange Toxic rung (it contains 'poisonous') for a plant it says is not seriously poisonous; reworded to land on Handle with care."],
  },
  "Schizophragma integrifolium 'Windmills'": {
    hardiness: 'H5', aspect: 'Any aspect', peak: 'Jun-Jul',
    soil: 'Humus-rich, moist, drained', soilWarning: 'Needs ample support; no dry wall-foot roots',
    resilience: 'Hardy climbing woody plant; slow to establish, then increasingly vigorous. Pests: aphids, capsid bugs, scale, vine weevil; leaf spots, mildew.',
    container: '', u: [CO],
  },
  "Griselinia littoralis 'Variegata'": {
    hardiness: 'H4', peak: 'Jan-Dec', aspect: 'East / South',
    soil: 'Fertile, well-drained', soilWarning: 'Exposed frosty sites burn it; no winter wet',
    resilience: 'Takes coast and wind once established in mild areas, but frost-sensitive inland. Pests: generally pest free; rare leaf spot and honey fungus.',
    toxicity: 'No known hazard; foliage and berries are not food.',
    clay: '', u: [CL, "peak: as sent 'Year-round foliage; insignificant flowers in spring'; Jan-Dec, the deck's form for year-round foliage.", "toxicity: as sent prints Toxic (contains 'toxicity'); reworded to the clear rung it means."],
  },
  "Phormium tenax 'Sundowner'": {
    hardiness: 'H3', peak: 'Jan-Dec', aspect: 'South / West',
    soil: 'Fertile, free-draining', soilWarning: 'Winter wet and frost harm crowns and roots',
    visual: 'Bold upright to arching fans of strap-like bronze-green leaves edged and striped pink, crimson and red. Mature plants occasionally carry taller stems of tubular yellowish blooms.',
    resilience: 'Salt-wind tolerant in mild coastal sites; variable winter survival inland. Pests: Phormium mealybug at leaf bases, occasional root damage, rare honey fungus.',
    toxicity: 'Sharp, tough leaf edges can cut skin; no other hazard known.',
    clay: '', u: [CL, "peak: as sent 'Year-round foliage; occasional summer bloom'; Jan-Dec.", "toxicity: as sent prints Toxic (contains 'toxic'); reworded to Handle with care, the sharp-edge warning it carries."],
  },
  "Hosta 'Blue Mouse Ears'": {
    hardiness: 'H7', height: '15–25 cm', pest: 'slugs', aspect: 'North / East', peak: 'Jun-Aug',
    soil: 'Humus-rich loam, drained', soilWarning: 'Hot sun scorches; avoid drought and bog',
    resilience: 'Extremely winter hardy; keep out of afternoon sun to keep the blue bloom. Pests: slugs and snails; vine weevil in pots; occasional crown rot.',
    u: ["height: as sent '15–25 cm foliage; flower stems to 30 cm'; the flower-stem note is dropped from the size string."],
  },
  "Acer shirasawanum 'Jordan'": {
    hardiness: 'H6', aspect: 'East / West', peak: 'Apr-May / Sep-Nov',
    soil: 'Humus-rich, slightly acid', soilWarning: 'No drying wind, hot sun or standing water',
    visual: 'Slow Japanese maple with rounded, shallowly lobed leaves: pale orange to chartreuse in spring, fresh lime green in summer, orange-red in autumn. Small purple-red flowers, red winged seeds.',
    toxicity: 'No known hazard.',
    clay: '', u: [CL, "toxicity: as sent prints Toxic (contains 'toxic'); reworded to the clear rung it means. No ASPCA or RHS listing found."],
  },
  "Acer palmatum 'Trompenburg'": {
    hardiness: 'H6', aspect: 'East / South / West', peak: 'Apr-May / Oct-Nov',
    soil: 'Fertile, moist, drained', soilWarning: 'Dry roots, hot sun and wind scorch leaves',
    visual: 'Japanese maple with deeply divided, narrow seven-lobed leaves whose margins curl under. Deep burgundy-purple in spring, bronzing or greening in summer, orange-red in autumn.',
    resilience: 'Hardy woody framework; the leaves need a sheltered microclimate. Pests: aphids, scale, caterpillars, gall mites; leaf scorch and Verticillium wilt.',
    toxicity: 'No known hazard.',
    clay: '', u: [CL, "toxicity: as sent prints Toxic (contains 'poisonous'); reworded to the clear rung it means."],
  },
  "Acer palmatum 'Green Trompenburg'": {
    hardiness: 'H6', aspect: 'East / South / West', peak: 'Apr-May / Oct-Nov',
    soil: 'Fertile, acid to neutral', soilWarning: 'No hot dry wind, winter wet or drought',
    visual: 'Upright Japanese maple with large, deeply cut green leaves whose lobe margins curl under. Lime green with red-tinted edges in spring, then green, then yellow to orange in autumn.',
    resilience: 'Cold-hardy tree; foliage can scorch in summer drought. Pests: aphids, scale insects, caterpillars; Verticillium wilt, scorch, occasional honey fungus.',
    toxicity: 'No known hazard.',
    clay: '', container: '', u: [CL, CO, "toxicity: as sent prints Toxic (contains 'poisoning'); reworded to the clear rung it means."],
  },
  'Lampranthus sp.': {
    hardiness: 'H2', height: '10–30 cm', spread: '30–80 cm', peak: 'May-Aug', aspect: 'South / West',
    soil: 'Gritty, sharply drained', soilWarning: 'Frost-tender; no cold, wet winter compost',
    visual: 'Likely a mat-forming succulent with narrow fleshy leaves and masses of sun-opening daisy flowers in bright pink, purple, red, orange or yellow. Check colour and habit on the label.',
    toxicity: 'Hazard not established for an unidentified plant; keep pets from chewing it.',
    u: ["hardiness: as sent 'Provisional H2 · 1 to 5°C'; H2 (RHS H2 for L. spectabilis 'Tresco Brilliant' and L. brownii).", "peak: as sent 'Late spring–summer (varies)'; May-Aug.", "toxicity: as sent prints Toxic for a hazard it says is not established; reworded so the card prints Handle with care (the default rung). ASPCA lists 'ice plant' as non-toxic, but which plant this is remains open."],
  },
  "Gardenia jasminoides 'Leefour'": {
    latin: "Gardenia jasminoides DOUBLE DIAMONDS ('Leefour')",
    hardiness: 'H4',
    hardinessNote: 'Breeder (Plantipp) claims frost tolerance to −12°C; carded at H4 (−10 to −5°C), the band that claim clears, as no RHS rating was found. Shelter from cold wind and winter wet.',
    height: '90 cm', spread: '70 cm', peak: 'May-Aug', aspect: 'East / South / West',
    soil: 'Acidic, humus-rich', soilWarning: 'No lime, cold wet roots or hard frost',
    water: 'Keep evenly moist with rainwater if possible; never leave standing in water. Feed as an acid-lover in growth.',
    resilience: 'Breeder reports better heat and disease tolerance than most gardenias; protect from hard frost. Pests: scale, aphids, mealybugs, spider mite; root rot.',
    clay: '', u: [CL, "hardiness: as sent was the breeder claim in words, not a band. H4 [Unverified]; US patent USPP27600 gives USDA 8.", "peak: as sent 'Late spring–summer; sometimes repeat bloom'; May-Aug.", "latin: as sent 'Gardenia jasminoides \\'Leefour\\''; Oscar gave the label name on 2026-10-18 (\"Gardenia jasminoides Double Diamonds ('Leefour' PBR)\"), written in the deck's TRADE ('code') form."],
  },
  'Orostachys iwarenge': {
    hardiness: 'H5', height: '10–20 cm', aspect: 'East / West', peak: 'Aug-Oct',
    soil: 'Gritty, sharply drained', soilWarning: 'No heavy clay or winter rain; shelter pots',
    visual: 'Spreading rosettes of fleshy grey-green leaves, sometimes pink-flushed, making offsets on runners. Mature rosettes raise pointed cones of cream flowers, then die, replaced by offsets.',
    toxicity: 'No known hazard; not for eating.',
    u: ["height: as sent '10–20 cm (flower spikes may be taller)'; the spike note is dropped.", "toxicity: as sent prints Toxic (contains 'toxicity'); reworded to the clear rung it means."],
  },
  "× Mangave 'Night Owl'": {
    height: '15–30 cm',
    hardiness: 'H2', peak: 'Jan-Dec', aspect: 'South / West',
    soil: 'Gritty cactus compost', soilWarning: 'No standing water, cold wet mix or frost',
    resilience: 'Very drought tolerant once established; frost tender. Pests: mealybugs, scale, occasional vine weevil in pots; root rot if saturated.',
    u: ["hardiness: as sent 'Tender · protect from frost', not a band. H2 (keep frost-free), as the deck's Agave americana; US sources give USDA 9–11.", "peak: as sent 'Year-round foliage'; Jan-Dec.", "height: as sent '15–30 cm (foliage)'; the note is dropped (it printed on the height rail)."],
  },
  "Asarum arifolium 'Ling Ling'": {
    hardiness: 'H6', pest: 'slugs', aspect: 'North / East', peak: 'Mar-May',
    soil: 'Humus-rich, any pH', soilWarning: 'No parched ground or hot afternoon sun',
    visual: 'Low evergreen carpet of glossy heart- to arrow-shaped dark leaves, sometimes silver-marbled. Odd ground-level blackish three-lobed flowers with white centres resemble a panda face.',
    u: [],
  },
  "Yucca filamentosa 'Color Guard'": {
    hardiness: 'H5', height: '60–90 cm', aspect: 'East / South', peak: 'Jun-Aug',
    soil: 'Sharply drained sand/loam', soilWarning: 'No winter waterlogging or dense shade',
    visual: 'Architectural rosettes of stiff sword leaves, dark green with a broad creamy-yellow central stripe, often rose-tinted in cold weather. Mature plants raise tall spikes of ivory bells.',
    u: ["height: as sent '60–90 cm foliage; 1.5–2.5 m in flower'; the card carries the foliage height."],
  },
  "Helleborus × hybridus ViV 'Vera'": {
    hardiness: 'H6', aspect: 'North / East / West', peak: 'Nov-Mar',
    soil: 'Fertile, drained, lime OK', soilWarning: 'No summer drought, standing water, hot sun',
    u: ["hardiness: as sent 'Hardy UK garden perennial (approx. H6)'; H6 as estimated, [Unverified] (sibling ViV cultivars show H7 in RHS snippets)."],
  },
  "Abelia × grandiflora 'Prostrata'": {
    hardiness: 'H4', aspect: 'South / West', peak: 'Jul-Oct',
    soil: 'Fertile, well-drained', soilWarning: 'Shy to flower in shade; no winter wet',
    resilience: 'Reasonably drought tolerant once established; flowers from summer into autumn. Pests: generally few; occasional aphids; root stress on poor drainage.',
    toxicity: 'No known hazard.',
    u: ["toxicity: as sent prints Toxic (contains 'toxicity'); reworded to the clear rung it means."],
  },
  "Helleborus × hybridus ViV 'Amalia'": {
    hardiness: 'H6', aspect: 'North / East', peak: 'Oct-Mar',
    soil: 'Fertile, drained, lime OK', soilWarning: 'Avoid stagnant wet ground and summer drought',
    u: ["hardiness: as sent 'Hardy UK garden perennial (approx. H6)'; H6 as estimated, [Unverified]."],
  },
  "Carex oshimensis 'Evercream'": {
    hardiness: 'H7', peak: 'Jan-Dec', aspect: 'East / South / West',
    soil: 'Loam, sand or clay; any pH', soilWarning: 'Avoid drought, waterlogging and hot sun',
    toxicity: 'No known hazard.',
    u: ["peak: as sent 'Year-round foliage; summer flowers'; Jan-Dec.", "toxicity: as sent prints Toxic (contains 'toxic'); reworded to the clear rung it means."],
  },
  "Photinia × fraseri 'Louise'": {
    hardiness: 'H5', aspect: 'East / South / West', peak: 'Mar-Jun',
    soil: 'Fertile, moist, drained', soilWarning: 'Cold, wet or exposed sites drop leaves',
    visual: 'Glossy evergreen with narrow leaves: new growth red to olive-green edged pink, maturing slate-green with irregular creamy-white margins. Occasional cream spring flowers, red berries.',
    resilience: 'Evergreen screening with colourful new growth; moderate resilience in sheltered UK sites. Pests: Photinia leaf spot, powdery mildew, fireblight, vine weevil.',
    u: [],
  },
  "Acer palmatum 'Garnet'": {
    hardiness: 'H6', height: '2.5–4 m', aspect: 'East / West', peak: 'Apr-Nov',
    soil: 'Fertile, moist, drained', soilWarning: 'No drying wind, midday sun or drought',
    toxicity: 'No known hazard.',
    u: ["height: as sent '2.5–4 m (long-term, often smaller in cultivation)'; the note is dropped.", "toxicity: as sent prints Toxic (contains 'poisonous'); reworded to the clear rung it means."],
  },
  "Photinia × fraseri 'Magical Volcano'": {
    hardiness: 'H6', aspect: 'Any aspect', peak: 'Mar-Jun',
    soil: 'Any fertile, drained soil', soilWarning: 'No soggy ground; cold wind burns new leaves',
    visual: 'Dense evergreen with glossy, strongly toothed leaves; new shoots flush bright red to purple-red before turning rich green. White flower clusters may be followed by red berries.',
    u: ["aspect: as sent 'Any aspect with sufficient light; best red colour in sun to part shade' (a light level, refused); 'Any aspect'."],
  },
};
const BUDGET = { visual: 190, water: 120, prune: 165, resilience: 165, uses: 150 };
const out = [];
for (const p of batch) {
  if (DOUBLES.includes(p.latin)) continue;
  const fix = FIX[p.latin]; if (!fix) throw new Error('no fix for ' + p.latin);
  const q = { ...p };
  for (const [k, v] of Object.entries(fix)) if (k !== 'u') q[k] = v;
  if (!('pest' in fix)) q.pest = '';
  if (!('resilience' in fix)) q.resilience = p.resilience + ' Pests: ' + p.pest.replace(/\.$/, '') + '.';
  q.pollination = NA(p.pollination);
  q.stockForm = 'container';
  q.rootSize = '';
  q.uncertain = [...(p.uncertain || []), RB, ...fix.u];
  const bad = [];
  if (q.soil.length > 26) bad.push(`soil ${q.soil.length}>26`);
  if (q.soilWarning.length > 44) bad.push(`soilWarning ${q.soilWarning.length}>44`);
  for (const [k, b] of Object.entries(BUDGET)) if ((q[k] || '').length > b) bad.push(`${k} ${q[k].length}>${b}`);
  if (bad.length) throw new Error(q.latin + ': ' + bad.join(', '));
  out.push(q);
}
fs.writeFileSync(dir + 'batch-corrected.json', JSON.stringify(out, null, 2) + '\n');
console.log(`wrote batch-corrected.json (${out.length} entries)`);
if (process.argv[2]) out.forEach((q, i) => fs.writeFileSync(`${process.argv[2]}/plant-${String(i).padStart(2, '0')}.json`, JSON.stringify(q, null, 2)));
