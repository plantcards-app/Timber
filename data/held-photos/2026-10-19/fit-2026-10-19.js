'use strict';
/* fit-2026-10-19.js — the Forge batch 2026-10-19 after the second pass (data/second-pass/2026-10-19) and the hand
   fixes the tool cannot make. Reads batch-checked.json (the tool's output: RHS bands and sizes applied, each with a
   line in `uncertain`) and writes batch-corrected.json. Every change here is keyed by latin and explicit; `u:` lines
   are appended to `uncertain`. SKIP entries are not held.
   Usage: node fit-2026-10-19.js [outdir]   (outdir: one plant-NN.json per entry for check-plant-json) */
const fs = require('fs');
const dir = __dirname + '/';
const batch = JSON.parse(fs.readFileSync(dir + 'batch-checked.json', 'utf8'));

const SKIP = {
  'Euonymus alatus': "dealt double of the deck's Euonymus alatus (RHS 6969, H6: the deck card is right, the draft H7 is not); the card's blank fields (foliage, toxicity, pollination, stockForm, clay) applied with compare-double. The label read 'Euonymus alatus Runner': no such cultivar; almost certainly 'Blade Runner' (RHS 280088), which is not in the deck — back to Oscar for the label",
};

const FIX = {
  'Vitis coignetiae': {
    cvs: "'Claret Cloak' ('Frovit') – RHS-listed seedling of V. coignetiae, to 12 m × 4 m (AGM)",
    compliance: 'Vitis is a Defra-listed Xylella fastidiosa host (medium-risk tier). Plant passport required for trade movement, as for all plants for planting.',
    u: ["name: Oscar's label reads 'Vitis Cognetiae Sp'; the plant is the species Vitis coignetiae (RHS 19030, AGM); no cultivar.",
        'aspect: RHS 19030 gives South- or West-facing, sheltered; as drafted.',
        "cvs: RHS 115590 lists Vitis 'Claret Cloak' ('Frovit') as a V. coignetiae seedling (AGM); no other named selections found.",
        'compliance: Defra lists Vitis in the medium-risk Xylella tier (not the high-risk group); the passport comes from the general plants-for-planting rule.',
        'toxicity: RHS 19030 flags the fruit as harmful to dogs; the ASPCA lists grapes as toxic to dogs; "sour berries" is not an RHS statement.'] },
  "Coronilla 'Temptations Fabulous Fragrance'": {
    toxicity: 'Treat all parts as harmful if eaten and keep away from children, dogs and cats. The genus is recorded as poisonous to horses; the RHS gives no warning for the species.',
    u: ["identity: no cultivar, trade name, series or PBR record of 'Temptations Fabulous Fragrance' was found in any source (four searches); the only 'Temptation' plants are a Skimmia and a Clematis. Most likely a retail strapline on Coronilla valentina subsp. glauca (RHS 98759, AGM, H4, 0.5–1 m × 0.5–1 m) or its 'Citrina'. [Inference] The label's name is kept.",
        'size: filled with the species figure (RHS 98759); [Unverified] for the labelled plant.',
        'toxicity: as drafted "cardiac glycosides"; the documented Coronilla toxin is 3-nitropropionic acid (RCP London medicinal garden), poisonous to horses; reworded, still prints Toxic as a precaution.',
        'peak: RHS (Brockhill Blue) says late winter into spring; retailers Dec–Apr; Feb-Apr stays.'] },
  "Hedera algeriensis 'Gloire de Marengo'": {
    uses: 'Walls and fences · carpeting under trees · containers and hanging baskets · trailing houseplant',
    u: ["uses: as drafted 'ground cover', which plant-sense reads as a dwarf claim against a 4 m size; reworded, meaning kept.",
        "name: RHS 82862 accepted name Hedera algeriensis 'Gloire de Marengo' (v), AGM; Hedera canariensis 'Gloire de Marengo' is a misapplied synonym for the same plant, so a label in either form is this card.",
        'toxicity: RHS 82862 flags harmful if eaten and skin irritant (gloves); ASPCA lists Hedera helix toxic to dogs, cats, horses; as drafted.'] },
  'Diervilla KODIAK MIXX': {
    latin: "Diervilla × splendens KODIAK MIXX ('G2X88544VAR')", common: 'Kodiak Mixx Bush Honeysuckle', hue: 90, height: '90 cm', spread: '70 cm',
    foliage: 'deciduous; pointed oval green leaves edged cream-white, young shoots flushed pink',
    visual: 'Cream-edged variegated leaves with pink young shoots, spring to autumn · soft yellow tubular flowers early summer to autumn · bright autumn tints',
    cvs: "KODIAK ORANGE ('G2X88544') – orange new growth, the parent · KODIAK RED ('G2X885411') – red-flushed foliage · KODIAK BLACK ('SMNDRSF') – very dark purple foliage",
    compliance: "Protected variety: propagation for sale prohibited by the breeder's notice; PBR grant not confirmed.",
    u: ["identity: as drafted 'a retail mix'; KODIAK MIXX is one cultivar, Diervilla × splendens 'G2X88544VAR', a cream-variegated sport of Kodiak Orange (GardenGenetics / Spring Meadow; Plantarium gold medal) — trade press and provenwinners.eu, no RHS page. Dobies sells it as D. rivularis Kodiak Mixx; the breeder's species is carried.",
        'foliage, visual, hue: rewritten for the variegated plant from the breeder and trade-press descriptions (cream-white margins, pink young shoots, soft yellow flowers early summer to autumn). [Unverified] beyond those listings.',
        'size: as drafted 1–1.2 m from memory; the breeder (provenwinners.eu) gives 90 cm × 70 cm; GardenGenetics 36–48 in. No RHS figure. [Unverified]',
        'hardiness: H6 stays: treesandshrubsonline gives D. × splendens H6 and the breeder −25°C; the RHS rates the parent species D. sessilifolia and D. rivularis H5 and has no page for Kodiak Mixx. [Unverified]',
        'peak: Apr-Oct is the foliage season; flowers Jul–Sep (Promesse de Fleurs), early summer to autumn (breeder).',
        "common: 'Bush Honeysuckle' is the held COOL SPLASH card's common name; the cultivar is carried for uniqueness."] },
  "Helichrysum italicum 'Korma'": {
    compliance: 'PBR protected · commercial propagation restricted',
    u: ["name: RHS 169611 lists Helichrysum italicum 'Korma' PBR (syn. H. angustifolium 'Korma', H. italicum 'Proma'); the breeder and grant number were not found. Kernock's Helichrysum ambiguum 'Korma' is a different plant.",
        'size: RHS 169611, 0.5–1 m × 0.5–1 m (its text says to 60 cm; Boma 60 cm × 1 m).',
        'peak: Jan-Dec is the evergreen foliage it is sold on; flowers Jul–Aug (Burford), summer (RHS).',
        'toxicity: no RHS flag, no ASPCA listing; culinary use of the leaves is minor and not RHS-endorsed.'] },
  "Cotoneaster × suecicus 'Coral Beauty'": {
    compliance: 'Not on Schedule 9 (only C. bullatus, horizontalis, integrifolius, microphyllus and simonsii are). Fireblight host; plant passport required for trade movement, as for all plants for planting.',
    u: ['hardiness, size: RHS 47155 agrees (H6, 0.5–1 m × 1.5–2.5 m, AGM).',
        'compliance: Schedule 9 (England and Wales, SI 2010/609) does not list C. × suecicus; fireblight-specific passport conditions now apply only to export into EU protected zones (Defra portal, 2022).',
        'peak: RHS gives fruit in autumn; berries into December is retail observation.'] },
  "Berberis thunbergii f. atropurpurea 'Rose Glow'": {
    resilience: 'Tough, wind tolerant and copes with dry spells once established; colour fades in shade. Pests: Berberis sawfly larvae can strip leaves in summer; occasional aphids.',
    u: ['hardiness, size: RHS 91926 agrees (H7, 1–1.5 m × 1–1.5 m, AGM, Plants for Pollinators).',
        'compliance: no GB restriction on Berberis found; the wheat stem rust concern is B. vulgaris and an agronomy matter, not a plant-health prohibition.',
        'toxicity: RHS flags "potentially harmful, fruit not to be eaten, wear gloves"; the draft prints Handle with care, which the RHS wording also supports as Toxic — left as drafted.'] },
  "Acer × conspicuum 'Red Flamingo'": {
    hardiness: 'H5', spread: '4–8 m',
    hardinessNote: 'Hardy through a cold UK winter, approximately −15 to −10°C (RHS H5 as reported by treesandshrubsonline and worldplants; the RHS page itself was not readable).',
    toxicity: 'Not known to harm people or pets and carries no RHS hazard flag. As a precaution keep grazing horses from fallen leaves and seeds, which in some other maples cause illness.',
    compliance: 'Plant passport required for trade movement, as for all plants for planting. Acer is the main host genus of Asian longhorn beetle, a notifiable quarantine pest absent from GB.',
    u: ["name: RHS 300946 accepted name Acer 'Red Flamingo' (v), with Acer × conspicuum 'Red Flamingo' and A. coriaceifolium 'Esk Flamingo' as synonyms; the label's form is kept.",
        'hardiness: as drafted H6; treesandshrubsonline and worldplants both report the RHS rating as H5, and the 2026-10-18 check read H5 from an RHS snippet; the RHS field was not readable this time. H5 carried. [Unverified] against the page itself.',
        'spread: as drafted 2.5–4 m; worldplants 4–8 m, Burncoose 6 m, the 2026-10-18 check read 4–8 m × 4–8 m from an RHS snippet; 4–8 m carried. [Unverified] against the page itself.',
        'toxicity: as drafted printed Toxic on the word "toxic"; no RHS flag, the ASPCA lists only Acer rubrum for horses and atypical myopathy is A. pseudoplatanus / A. negundo; reworded to print Handle with care.'] },
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
  if (q.soil.length > 26) bad.push(`soil ${q.soil.length}>26`);
  if (q.soilWarning.length > 44) bad.push(`soilWarning ${q.soilWarning.length}>44`);
  for (const [k, b] of Object.entries(BUDGET)) if ((q[k] || '').length > b) bad.push(`${k} ${q[k].length}>${b}`);
  if (bad.length) throw new Error(q.latin + ': ' + bad.join(', '));
  out.push(q);
}
fs.writeFileSync(dir + 'batch-corrected.json', JSON.stringify(out, null, 2) + '\n');
console.log(`wrote batch-corrected.json (${out.length} to hold; ${skipped.length} skipped)`);
skipped.forEach(([l, r]) => console.log('  skip', l, '—', r.split(';')[0]));
if (process.argv[2]) out.forEach((q, i) => fs.writeFileSync(`${process.argv[2]}/plant-${String(i).padStart(2, '0')}.json`, JSON.stringify(q, null, 2)));
