# 2026-10-18 — two arrays (14 + 12 entries), stored and fitted; 24 new cards wait for photos, 2 doubles filled in (r405)

Oscar, 2026-10-18: two JSON files in the PLANT-BRIEF shape, `Timber_14_Plant_Profiles.json` and
`Timber_12_Plant_Profiles.json`, no words, no photos.

Files:
- `batch-14-as-sent.json`, `batch-12-as-sent.json` — his files as received, byte-identical.
- `batch-corrected.json` — the 24 new entries fitted, made by `fit-2026-10-18.js` (kept here), which asserts the 26/44
  soil budgets and the prose budgets (visual 190, water 120, prune 165, resilience 165, uses 150). Every change is
  keyed by latin in that script, with a line in each entry's `uncertain` saying what changed and why.

## compare-double

Two exact doubles, both dealt cards: **Jacobaea maritima** and **Dryopteris erythrosora**. Every other PROBABLE hit
shared only one word with a different plant ("lights" Anisodontea, "deciduous" R. 'Homebush', "whitewater" Leucothoe,
"climbing" Hydrangea petiolaris, "zealand" Griselinia littoralis ×2, "mouse" Brachyglottis, "confirm" R. 'Silver Sword',
"face" Viola, "hybridus" ViV Celestina ×2, "volcano" Penstemon). Griselinia littoralis 'Variegata' is a third card
beside the dealt green species, not a double.

### The doubles (dealt cards, rules 1, 2, 5)

Only the fields blank on the card were taken, plus the Jacobaea's hue 0, the unset default:
- Jacobaea maritima: hue 0 → 205; cvs (blank) → his synonym note; pollination (blank) → "not applicable; yellow
  flowers, when allowed, provide pollen and nectar to insects".
- Dryopteris erythrosora: foliage (blank) → semi-evergreen; clay (blank) → yes; pollination (blank) → "not
  applicable; does not flower or set seed; reproduces by spores".

Kept as the cards have them (dealt card keeps its value; **your call** if you want the incoming):
- Jacobaea: H3 vs H4 incoming (the RHS gives H4 for 'Silver Dust' and 'Cirrus', search snippets; no species page found);
  size 0.5–1 m vs 30–60 cm incoming (RHS cultivar pages 0.1–0.5 m); peak Mar-Oct; sunMin 75 vs 50.
- Dryopteris: peak Mar-Jun vs Apr-Jun; size 0.5–1 m vs 50–75 × 50–90 cm; sunNeed 35 vs 20.
- Dryopteris toxicity stays blank: his "Do not consume; fern identification is important…" matches no keyword and
  would print Handle with care only by default, not by meaning.
- stockForm and rootSize on both: the incoming values are not valid card values, so they stay blank.

## Fitting changes on the 24 new entries (as-sent → corrected)

Applied to every entry, because the validator refuses the as-sent form:
- **hardiness** carried prose with the band ("H6 · −20 to −15°C"); the band alone. Where no band was given: Daphne sp.
  H4 (cautious end of his "often H4–H6"), Lampranthus sp. H2 (his provisional H2), Gardenia 'Leefour' H4 (the band the
  breeder's −12°C claim clears; no RHS rating found), × Mangave 'Night Owl' H2 (tender, keep frost-free, as the deck's
  Agave americana), both ViV hellebores H6 (his "approx. H6"). All of those are [Unverified].
- **pollination** must name a class: "not applicable; " in front of his prose, unchanged.
- **stockForm** was a habit description: `container`. **rootSize** carried no figure: blank. **clay** "conditional": blank.
- **peak** that would not parse: Jan-Dec for year-round foliage (Griselinia 'Variegata', Phormium, Mangave, Carex,
  the deck's form), May-Aug for Lampranthus and Gardenia ("late spring–summer"). Split seasons kept as he wrote them
  ("Apr-May / Sep-Nov" for the Jordan maple and similar).
- **aspect** to the compass facing his text names; Magical Volcano's light-level aspect becomes "Any aspect".
- **soil / soilWarning** hand-written inside 26 / 44 (every as-sent line was over). The two azaleas take the dealt
  azalea 'Silver Sword''s exact pair; the two hellebores take 'Silver Star''s soil line.
- **pest** is an icon key (`slugs`): Acanthus, Hosta, Asarum. The rest blank; the pest prose moves into `resilience` as
  "Pests: …", shortened where needed to fit 165.
- **visual** trimmed to 190 on ten entries; **water** trimmed to 120 on the Gardenia. Sizes lose their trailing notes
  ("including spikes", "foliage; flower stems to 30 cm").
- **toxicity** sentences that print the wrong rung: eleven say "not toxic" but contain toxic/poison and would print the
  orange Toxic rung. Reworded to "No known hazard." (the three Acers, Jordan maple, Orostachys, Abelia, Carex,
  Griselinia with "foliage and berries are not food") or to Handle with care (Acanthus skin, Phormium sharp edges,
  Lampranthus hazard not established). Daphne, both azaleas, Hosta, Asarum, Yucca, Gardenia, hellebores, Windmills and
  the Mangave print the rung their sources support and stay as sent.

Latin names, commons, cvs, hue and every rating stay as sent. check-plant-json: 0 errors on all 24. Its warnings are
low ratings (pestRisk 2–5, thirst 3–4, careLevel 4–5, growthSpeed 4–5) on trouble-free, drought-tolerant or slow
plants, where the low end of the 0–20 scale is the meaning; they stand.

## Fact check (2026-10-18), search snippets only; the proxy blocks rhs.org.uk itself

Agrees with the RHS (snippets): Northern Hi-Lights H6 1–1.5 m; Sunte Nectarine H6 1–1.5 m; Acanthus 'Whitewater' H5
1–1.5 × 0.5–1 m; Windmills H5 8–12 × 4–8 m Jun–Jul, harmful to pets; Griselinia 'Variegata' H4 1.5–2.5 m; Phormium
'Sundowner' H3 1–1.5 m; Hosta 'Blue Mouse Ears' H7; Acer 'Jordan' H6, 'Trompenburg' H6, 'Green Trompenburg' H6 4–8 m,
'Garnet' H6, sizes as sent; Orostachys iwarenge H5; Yucca 'Color Guard' H5; Carex Evercream H7; Photinia Louise H5,
Magical Volcano H6, sizes as sent; Lampranthus H2. ASPCA lists azalea, hosta, yucca, gardenia and hellebore as toxic to
pets, which supports those Toxic rungs.

**Open for you, not applied (your input stays as sent):**
1. **Sunte Nectarine "fragrant"**: the RHS Rhododendron Group and rhododendrons.co.uk say not scented. The visual and
   the `uncertain` still say fragrant.
2. **Abelia 'Prostrata'**: RHS accepted name 'Prostrate White' (ID 189357), rated **H5**, not H4 as sent; height 0.5–1 m
   (as sent 40–60 cm).
3. **Asarum 'Ling Ling'** is sold as **Asarum maximum** 'Ling Ling' by every nursery found; A. arifolium is a different
   (US) species. The RHS lists A. maximum as panda face ginger, H6, toxic if eaten.
4. **Windmills**: the RHS accepted name is now Hydrangea fauriei Windmills ('Plooster'); his `cvs` already notes the
   synonym.
5. **Phormium**: the RHS accepted name is Phormium 'Sundowner' (tenax as a synonym).
6. **Trade-name form**: the deck writes PBR plants as `TRADE ('code')`. As sent, Gardenia 'Leefour' (DOUBLE
   DIAMONDS), Carex 'Evercream' ('Ficre'), Photinia 'Louise' ('Mclarlou') and 'Magical Volcano' ('Kolmavoca') keep his
   form. The Gardenia's US patent calls the flowers semi-double.
7. **Hosta flowering**: sources say July (Jun–Jul at widest); Jun-Aug as sent.
8. **ViV 'Vera'** exists (RHS 389005); colour reported as deep pink or light red, double; sibling ViVs show H7.
   **ViV 'Amalia'** exists, double white; no RHS entry.
9. **Mangave 'Night Owl'** height: sources give 15–20 cm, not up to 30.
10. **Daphne sp.** and **Lampranthus sp.** are genus-level entries; the photo or label should name the species before or
    at the deal.

Sources: rhs.org.uk/plants 139026, 100091, 300872, 510402, 354661, 8124, 91178, 12799, 353991, 378209, 208880, 190710,
26157, 81863, 231, 46015, 49549, 52154, 5311, 5331, 219931, 168496, 26878, 389005, 189357, 359898, 320144, 333827;
rhodogroup-rhs.org (Sunte Nectarine); ASPCA azalea, hosta (second-hand via Hepper), yucca, gardenia, hellebore, ice
plant; Plantipp and USPP27600 (Gardenia); Proven Winners, Park Seed (Mangave); Plant Delights, Hardy's (Asarum
maximum); Webbs, Gates GC, Promesse de Fleurs (ViV); Botanical Dermatology Database (Agave sap).

## State

Deck unchanged in count; hold unchanged. timber.html changes only the two doubles' blank fields (r404 → r405).
None of the 24 is in timber.html: they are dealt with `node tools/add-plants-bulk.js --quick` once their photos come,
one JSON per plant from `batch-corrected.json`. Full gate `node tests/run-all.js --jobs 3`: 18/18.
