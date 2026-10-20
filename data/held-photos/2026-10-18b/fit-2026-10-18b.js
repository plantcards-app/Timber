'use strict';
/* fit-2026-10-18b.js — the Forge batch 2026-10-18 after the online fact check (snippets; see README).
   Every change is keyed by latin and explicit. Entries in SKIP are not held: dealt or held doubles (handled on
   their cards with compare-double), placeholders the Forge could not identify, and one in-batch duplicate.
   Usage: node fit-2026-10-18b.js [outdir]   (outdir: one plant-NN.json per entry for check-plant-json) */
const fs = require('fs');
const dir = __dirname + '/';
const batch = JSON.parse(fs.readFileSync(dir + 'batch-as-sent.json', 'utf8'));

const SKIP = {
  'Ginkgo biloba': 'dealt double (RHS 7990 H6: the deck card is right, the draft H7 is not); blanks applied on the card',
  "Yucca gloriosa 'Variegata'": 'dealt double (RHS 65193 H5, 1.5–2.5 m: the deck card is right, the draft H4 / 1–1.5 m spread are not); blanks applied',
  "Robinia pseudoacacia 'Frisia'": 'dealt double; blanks applied. RHS 42278 gives H6 where the dealt card carries H7 — open for Oscar',
  "Prunus 'Kanzan'": 'dealt double; blanks applied. RHS 99553 spread "over 8 m" where the dealt card carries 4–8 m — open for Oscar',
  "Choisya × dewitteana WHITE DAZZLER ('Londaz')": 'dealt double (2026-10-10c); clay applied',
  "Hydrangea macrophylla 'Living Red Velvet'": "the plant is Hydrangea PANICULATA Living Red Velvet ('Lc No19'), RHS 524139, which the deck already carries dealt; the draft's macrophylla text is not that plant, so nothing from it is applied",
  "Hypericum 'Hidcote'": "held double of the deck's Hypericum × hidcoteense 'Hidcote' (RHS 332180), whose H5 and 1–1.5 m × 1–1.5 m the RHS confirms (the draft's 1.5–2.5 m spread does not); blanks applied on the held card",
  'Schefflera': "placeholder: 'Winter Haskins Jungle' is a bench label, species unknown; nearly every field blank. Back to Oscar for the label",
  "Acer 'Red Flamingo'": "placeholder: identity unknown to the Forge, soil/water/prune/visual/peak blank. RHS has Acer × conspicuum 'Red Flamingo' (252851, H5, 4–8 m × 4–8 m, snakebark); a full card needs researching, not fact-checking. Back to the Forge with that name",
  "Hebe 'Year Round Interest'": "not a cultivar: 'Year Round Interest' is marketing copy on mixed hebe listings. Back to Oscar for the label",
  'Pinus': 'genus only, no sizes, and the draft H4 is wrong for the common garden-centre pines (RHS H7 for P. mugo, P. sylvestris, P. nigra). Back to Oscar for the species',
  'Tibouchina organensis#2': 'the same plant twice in the batch; the first entry is held',
};

/* u: lines appended to `uncertain`. Sizes are the RHS figure unless the line says otherwise. */
const FIX = {
  'Freesia laxa (syn. Anomatheca laxa)': { spread: '10 cm', peak: 'Jun-Aug',
    u: ['spread: RHS 167668 gives 0–0.1 m; 10 cm.', 'peak: as drafted Jul-Sep; RHS says early summer, other UK sources late Jun–Aug; Jun-Aug.'] },
  "Hosta 'Hadspen Samphire'": { height: '10–50 cm', spread: '10–50 cm',
    u: ['size: RHS 68940 gives only the band 0.1–0.5 m × 0.1–0.5 m (worldplants: 45 cm × 1 m); the RHS band is carried.', 'identity: an Eric Smith (Hadspen) hosta, RHS-listed; no Hemerocallis of this name exists.'] },
  "Chamaecyparis pisifera 'Nana'": {resilience: 'Very hardy and slow; dislikes drought, drying winds and waterlogging. Pests: conifer aphid, conifer spider mite; Phytophthora root rot and honey fungus.',  hardiness: 'H6', height: '10–50 cm', spread: '10–50 cm',
    hardinessNote: 'Hardy in most of the UK, approximately −20 to −15°C (RHS H6). Shelter from cold drying winds.',
    u: ['hardiness: as drafted H7; RHS 89256 gives H6.', 'size: as drafted 0.5–1 m (that is Filifera Aurea Nana); RHS gives 0.1–0.5 m, 15–20 cm × 20–30 cm in ten years.'] },
  "Cotinus coggygria 'Young Lady'": { height: '1–1.5 m', spread: '1–1.5 m', u: ['size: RHS 147186, 1–1.5 m × 1–1.5 m.'] },
  'Cryptomeria japonica': {uses: 'Specimen · conifer beds · rockeries and containers (compact forms) · Japanese-style gardens', cvs: "'Elegans' – soft juvenile foliage, bronze-purple in winter · 'Globosa Nana' – compact rounded form · 'Vilmoriniana' – very small tight bun · 'Sekkan-sugi' – cream-tipped new growth · 'Spiralis' – twisted foliage",  height: '>12 m', spread: '4–8 m', u: ['size: RHS 5015, higher than 12 m × 4–8 m.'] },
  "Cordyline 'Emerald Star'": { latin: "Cordyline australis EMERALD STAR ('Broadsword')", height: '1.5 m', spread: '80 cm',
    u: ["latin: as drafted Cordyline 'Emerald Star' (Summer Selection); the plant is Cordyline australis EMERALD STAR ('Broadsword' PBR, Thirkettle Nurseries, Plantipp); no 'Summer Selection' series was found.", 'size: no RHS figure; the breeder (Plantipp) gives 1.5 m × 0.8 m. [Unverified] beyond that.'] },
  "Hydrangea quercifolia 'Jetstream'": { latin: "Hydrangea quercifolia JETSTREAM ('PIIHQ-I')",
    u: ["latin: trade name JETSTREAM, cultivar 'PIIHQ-I' (First Editions); no RHS page, so H5 is the species and sibling rating."] },
  "Polygala 'Africana'": { height: '0.5–1 m', spread: '0.5–1 m',
    u: ["identity: RHS lists Polygala 'Africana' (283515), not P. myrtifolia or P. × dalmaisiana.", 'size: no figure found; Gardeners’ World calls it a compact container plant; 0.5–1 m × 0.5–1 m is an estimate. [Unverified]', 'hardiness: no RHS rating seen; Gardeners’ World says to about −6°C, nearer H3 than the H2 drafted; H2 stays as the cautious band.'] },
  "Senecio candicans 'Angel Wings'": { latin: "Senecio candicans ANGEL WINGS ('Senaw')", u: ["latin: trade name ANGEL WINGS, cultivar 'Senaw' (RHS 367752, which spells the species candidans)."] },
  "Muehlenbeckia complexa 'Golden Girl'": { latin: "Muehlenbeckia complexa GOLDEN GIRL ('Hausler1')", hardiness: 'H3', height: '10–30 cm', spread: '1–1.5 m',
    hardinessNote: 'Half-hardy, approximately −5 to 1°C (RHS H3 for the species); top growth may be cut back by frost and regrow.',
    u: ["latin: trade name GOLDEN GIRL, cultivar 'Hausler1' (PBR).", 'hardiness: as drafted H4; RHS 11221 gives the species H3.', 'size: no RHS figure for the cultivar; nurseries give 10–30 cm tall spreading to 1.5 m. [Unverified]'] },
  'Plerandra elegantissima': { height: '2.5–4 m', spread: '1.5–2.5 m',
    toxicity: 'Contact can aggravate skin allergies, so wear gloves; the ASPCA lists it as non-toxic to cats and dogs.',
    u: ['size: as drafted 1–1.5 m × 40–60 cm (a houseplant size); RHS 516937 gives 2.5–4 m × 1.5–2.5 m.', 'toxicity: as drafted "treat as harmful"; the ASPCA lists false aralia as non-toxic to pets and the RHS flags skin allergy only; reworded to print Handle with care.'] },
  "Fatsia 'Needham’s Lace'": { hardiness: 'H3', height: '2–3 m', spread: '1.5–2 m',
    hardinessNote: 'Half-hardy, approximately −5 to 1°C (RHS H3 for Fatsia polycarpa); US growers report hardier. Shelter it.',
    u: ["identity: sold in the UK as Fatsia polycarpa 'Needham’s Form' (Edward Needham’s Taiwan collection), 'Needham’s Lace' by a US nursery; no RHS entry; no 'Urban Oase' series found. The label’s name is kept.", 'hardiness: as drafted H4 (unverified); RHS 185322 gives F. polycarpa H3.', 'size: nursery figures 1.8–2.4 m tall; 2–3 m × 1.5–2 m. [Unverified]', 'toxicity: ASPCA lists Fatsia japonica as non-toxic to pets; RHS says the fruit is not to be eaten; the draft’s sentence stays.'] },
  'Geranium palmatum': { resilience: 'Short-lived but self-seeds freely, so it persists. Copes with coastal sites; hard frost or winter wet can kill it. Pests: vine weevil, occasional aphids.', u: ['size: RHS 7904, 1–1.5 m × 0.5–1 m; the draft 1–1.2 m × 1–1.2 m stays within it.'] },
  'Brassaiopsis mitis': { height: '2.5–4 m', spread: '2.5–4 m', u: ['size: RHS 387596, 2.5–4 m × 2.5–4 m.'] },
  'Heptapleurum taiwanianum (syn. Schefflera taiwaniana)': { height: '2.5–4 m', spread: '1.5–2.5 m', u: ['size: RHS 516912, 2.5–4 m × 1.5–2.5 m.'] },
  'Hylotelephium sieboldii (syn. Sedum sieboldii)': { hardiness: 'H4',
    hardinessNote: 'Hardy through an average UK winter, approximately −10 to −5°C (RHS H4); dislikes winter wet more than cold.',
    u: ['hardiness: as drafted H5; RHS 141321 gives H4.'] },
  "Polemonium 'Golden Feathers'": { height: '40–50 cm', spread: '30–40 cm', u: ['size: RHS 504797 gives 0.1–0.5 m (to around 50 cm); Suttons 40–50 × 30–40 cm.'] },
  "Coprosma 'Pacific Sunset'": { latin: "Coprosma repens PACIFIC SUNSET ('Jwncopps')", height: '1–1.5 m', spread: '1–1.5 m',
    u: ["latin: RHS 293367 lists Coprosma repens Pacific Sunset ('Jwncopps').", 'size: RHS, to 1.5 m × 1–1.5 m.'] },
  'Yucca gloriosa': { spread: '1.5–2.5 m', u: ['spread: as drafted 1–1.5 m; RHS 19168 gives 1.5–2.5 m.', 'toxicity: RHS flags skin allergen and harmful to pets; ASPCA lists Yucca as toxic to dogs and cats.'] },
  'Lavandula canariensis': { hardiness: 'H3', spread: '0.5–1 m',
    hardinessNote: 'Half-hardy, approximately −5 to 1°C (RHS H3); overwinter under glass in frost-prone areas.',
    u: ['hardiness: as drafted H2; RHS 9880 gives H3.', 'spread: RHS 0.5–1 m.', 'compliance: Defra lists the whole genus Lavandula as a high-risk Xylella host, so the line stands.'] },
  "Ginkgo biloba 'Troll Gold'": {common: "Dwarf Maidenhair Tree 'Troll Gold'", prune: 'Minimal. Remove dead, damaged or strong reverting shoots in late winter.',  hardiness: 'H6', height: '0.5–1 m', spread: '0.5–1 m',
    hardinessNote: 'Hardy in most of the UK, approximately −20 to −15°C (RHS H6 for ‘Troll’).',
    u: ["identity: no source for 'Troll Gold'; every hit is Ginkgo biloba 'Troll' (RHS 210450, AGM), and the label’s name is kept. [Unverified] that they differ.", 'hardiness: as drafted H7; RHS gives ‘Troll’ H6.', 'size: RHS ‘Troll’ 0.5–1 m × 0.5–1 m.'] },
  "Anisodontea 'Pink Lady'": {water: 'Water regularly in pots through summer, letting the top dry slightly between waterings. Keep drier over winter.',  hardiness: 'H2', height: '35–50 cm', spread: '30–50 cm',
    hardinessNote: 'Tender, approximately 1 to 5°C (RHS H2); a cool greenhouse plant that may survive outside in a sunny, sheltered, mild spot.',
    u: ["identity: no 'Pink Lady' found; the likely plant is Anisodontea LADY IN PINK ('Nuanilaninp'), RHS 284066. The label’s name is kept.", 'hardiness: as drafted H3; RHS gives Lady in Pink H2.', 'size: as drafted 1–1.5 m × 0.5–1 m (that is the species A. capensis); RHS and nurseries give 35–50 cm × 30–50 cm.'] },
  "Weigela 'All Summer Red'": { latin: "Weigela ALL SUMMER RED ('Slingco 1')", height: '0.5–1 m', spread: '0.5–1 m', peak: 'May-Oct',
    u: ["latin: RHS 338107, Weigela ALL SUMMER RED ('Slingco 1').", 'size: RHS, compact to 75 cm; 0.5–1 m × 0.5–1 m.', 'peak: as drafted May-Aug; RHS says mid-spring to autumn; May-Oct.'] },
  "Rhododendron ponticum 'Variegatum'": {water: 'Keep evenly moist, especially the first summer and in dry spells; use rainwater where tap water is hard.', resilience: 'Tough, wind-tolerant evergreen once established; cream edges scorch in hot sun or cold wind. Pests: vine weevil, leafhopper (bud blast), mildew, Phytophthora.',  hardiness: 'H6', height: '1–1.5 m', spread: '1–1.5 m',
    hardinessNote: 'Hardy in most of the UK, approximately −20 to −15°C (RHS H6).',
    compliance: 'Rhododendron ponticum is on Schedule 9 of the Wildlife and Countryside Act 1981: it must not be planted or allowed to grow in the wild. Sale is not restricted; the RHS does not class the variegated form as invasive.',
    u: ['hardiness: as drafted H5; RHS 92823 gives H6.', 'size: as drafted 1.5–2.5 m; RHS gives 1–1.5 m × 1–1.5 m.', 'compliance: added the Schedule 9 note; whether the cultivar falls within the listed taxon is not settled in the sources found.'] },
  "Nandina domestica 'Twilight'": {common: "Heavenly Bamboo 'Twilight'",  hardiness: 'H5', height: '1–1.5 m', spread: '0.5–1 m', peak: 'Jan-Dec',
    hardinessNote: 'Hardy in most of the UK, approximately −15 to −10°C (RHS H5); shelter from cold winds and avoid winter wet.',
    u: ['hardiness: as drafted H4; RHS 350962 gives H5.', 'size: RHS, 1–1.5 m × 0.5–1 m.', 'peak: as drafted blank; Jan-Dec for the variegated evergreen foliage it is sold on.'] },
  "Diervilla sessilifolia COOL SPLASH ('LPDC Podaras')": { hardiness: 'H5',
    hardinessNote: 'Hardy in most of the UK, approximately −15 to −10°C (RHS H5 for the species); US sources rate it hardier (USDA 4).',
    u: ['hardiness: as drafted H7; the RHS cultivar record carries no rating and the species (5848) is H5; H5 is carried, [Unverified] for the cultivar.', 'peak: as drafted May-Oct is the foliage season; flowers Jun–Aug.'] },
  'Dianella COOL VISTA': { height: '30–50 cm', spread: '30–50 cm',
    u: ["identity: RHS lists it as Dianella revoluta 'Allyn Citation' with Coolvista as synonym (341814 / 344180); the label’s name is kept. 'DP303' is a different Dianella.", 'size: RHS, around 40 cm; 30–50 cm × 30–50 cm.'] },
  "Hibiscus syriacus 'Little Hibiskiss Pink'": { height: '0.5–1 m', spread: '0.5–1 m', peak: 'Aug-Oct',
    u: ['identity: no RHS entry, patent or UK stockist found; one German listing (about 1 m, to −20°C). [Unverified] which compact pink cultivar this is.', 'size: from that one listing; 0.5–1 m × 0.5–1 m. [Unverified]', 'peak: as drafted Aug-Sep; RHS says the species flowers midsummer into autumn; Aug-Oct.'] },
  "Hydrangea macrophylla 'Cotton Candy'": {resilience: 'Wilts fast in drought or hot afternoon sun; late frost can kill flower buds. Pests: aphids, vine weevil, scale, capsid bugs; powdery mildew and grey mould.',  height: '0.5–1 m', spread: '0.5–1 m', peak: 'Jun-Oct',
    u: ["identity: RHS treats 'Cotton Candy' as a synonym of 'Cotton Candy Two' (346118), a lacecap; confirm the stock is the lacecap.", 'size: as drafted 1–1.5 m; RHS gives 0.5–1 m × 0.5–1 m.', 'peak: as drafted Jul-Sep; RHS says June into October.'] },
  "Hydrangea macrophylla 'Eclipse'": {prune: 'Leave spent heads on over winter as frost protection. In spring cut each stem back to the first strong pair of buds below the old head; no hard pruning.', resilience: 'Tolerates clay and coastal exposure; dislikes drought and hot afternoon sun. Pests: aphids, vine weevil in pots, powdery mildew and grey mould on flowers.',  latin: "Hydrangea macrophylla ECLIPSE ('Bailmacseven')", height: '1–1.5 m', spread: '1–1.5 m',
    u: ["latin: ECLIPSE is the First Editions trade name, cultivar 'Bailmacseven' (US PP34544).", 'hardiness: no RHS entry; H5 is the species rating, USDA 5–9. [Unverified]', 'size: no RHS figure; US nurseries 3–5 ft; 1–1.5 m × 1–1.5 m. [Unverified]'] },
  "Eriostemon 'Flower Girl Pink'": { height: '1–1.5 m', spread: '1–1.5 m', peak: 'Mar-May',
    u: ["identity: RHS 386690 lists Philotheca myoporoides 'Flower Girl Pink' with Eriostemon as synonym (name unresolved); the label’s name is kept.", 'size: no RHS figure (species to 3 m); Australian nurseries about 1–1.5 m. [Unverified]', 'peak: as drafted blank; spring, sometimes again in autumn (RHS, sibling Flower Girl White); Mar-May.'] },
  "Cytisus 'Boskoop Ruby'": { peak: 'May-Jun', u: ['peak: as drafted Apr-May; sources say May to early June.', "identity: RHS 332083 accepted name Cytisus × boskoopii 'Boskoop Ruby'; the label’s name is kept."] },
  "Ilex × meserveae 'Blue Maid'": { latin: "Ilex × meserveae BLUE MAID ('Mesid')", hardiness: 'H7', height: '2.5–4 m', spread: '1.5–2.5 m',
    hardinessNote: 'Very hardy: withstands below −20°C (RHS H7), so hardy anywhere in the UK.',
    u: ["latin: RHS 117328, Ilex × meserveae BLUE MAID ('Mesid'), female.", 'hardiness: as drafted H6; RHS gives H7.', 'size: RHS, 2.5–4 m × 1.5–2.5 m.'] },
  "Lagerstroemia 'Muskogee'": { hardiness: 'H3', height: '4–8 m', spread: '3–5 m',
    hardinessNote: 'Half-hardy, approximately −5 to 1°C (RHS H3 for Lagerstroemia indica); H4 in a sheltered, sunny, urban site.',
    u: ['hardiness: as drafted H4; no RHS entry for Muskogee; the RHS species is H3 and several modern cultivars H4; H3 carried. [Unverified] for the cultivar.', 'size: no RHS figure; US sources 6 × 4.5 m; 4–8 m × 3–5 m. [Unverified]', "identity: a US National Arboretum hybrid (L. indica × L. fauriei), so Lagerstroemia 'Muskogee', not L. indica."] },
  "Koelreuteria paniculata 'Coral Sun'": {common: "Golden Rain Tree 'Coral Sun'", resilience: 'Tolerates heat, drought once established and urban pollution; shelter young foliage from cold wind. Pests: generally trouble-free; coral spot, verticillium wilt.',  hardiness: 'H5', height: '8–12 m', spread: '8 m+',
    hardinessNote: 'Hardy in most of the UK, approximately −15 to −10°C (RHS H5).',
    u: ['hardiness: as drafted H6; RHS 177985 gives H5.', 'size: RHS, 8–12 m × wider than 8 m in 20–50 years; UK gardens realistically 5–8 m.'] },
  "Olearia 'Spring Bling'": {common: 'Daisy Bush SPRING BLING',  latin: "Olearia phlogopappa SPRING BLING ('Arkpap')", height: '1–1.5 m', spread: '1–1.5 m',
    u: ["latin: trade name SPRING BLING, cultivar 'Arkpap' (PBR); RHS 508292 lists it under O. phlogopappa (unresolved).", 'hardiness: H4 is the species and Comber’s Blue rating; no RHS rating for the cultivar. [Unverified]', 'size: no RHS figure; nurseries 1.5 × 1.5 m. [Unverified]'] },
  "Rhus typhina TIGER EYES ('Bailtiger')": {common: "Stag's Horn Sumach TIGER EYES", resilience: 'Tough, wind and drought tolerant once established. Suckers less than the species but still spreads. Pests: largely trouble-free; verticillium wilt, coral spot.',  spread: '2.5–4 m', u: ['spread: as drafted 1.8 m; RHS 211112 gives 2.5–4 m (height 1.5–2.5 m).'] },
  'Tibouchina organensis': {resilience: 'Will not survive frost; summer it outdoors in a sheltered sunny spot and move under glass in autumn. Pests: whitefly, mealybug, red spider mite, scale.',  hardiness: 'H1c', height: '4–8 m', spread: '2.5–4 m',
    hardinessNote: 'Tender, approximately 5 to 10°C minimum (RHS H1c for Pleroma foveolatum); a conservatory plant in the UK, outside only in summer.',
    u: ['identity: Tibouchina organensis is a synonym of Pleroma foveolatum (RHS 525536, POWO), not of T. urvilleana; the label’s name is kept.', 'hardiness: as drafted H2; RHS gives P. foveolatum H1c (T. urvilleana is H2).', 'size: as drafted 1.5–3 m (a UK pot size); RHS gives 4–8 m × 2.5–4 m.'] },
};

/* prose over the deck budgets (the Forge let resilience run to 171–200 and prune to 190 on eleven cards) is shortened above, meaning kept. */
/* common names: five clashed with cards already in the deck (the audit requires unique commons), so they carry the cultivar
   as the deck's other cultivar cards do. Cryptomeria's "dwarf forms" and the Ginkgo's "vigorous reverting shoots" tripped
   plant-sense's keyword rules against a 12 m size and growthSpeed 1; reworded, meaning kept. */
const BUDGET = { visual: 190, water: 120, prune: 165, resilience: 165, uses: 150 };
const out = [], skipped = [];
let tib = 0;
for (const p of batch) {
  let key = p.latin;
  if (key === 'Tibouchina organensis' && ++tib === 2) key = 'Tibouchina organensis#2';
  if (SKIP[key]) { skipped.push([p.latin, SKIP[key]]); continue; }
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
