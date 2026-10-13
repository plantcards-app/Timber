# 2026-10-13 — two-entry JSON, stored and fitted; both wait for photos

Oscar, 2026-10-13: one JSON array of two entries in the PLANT-BRIEF shape, no words, no photos.

Files:
- `batch-as-sent.json` is his JSON as received (one valid array, two entries).
- `batch-corrected.json` is the fitted copy, made by `fit-2026-10-13.js` (kept here), which asserts the 26/44
  soil budgets and the prose budgets (visual 190, water 120, prune 165, resilience 165, uses 150). Every change
  is keyed by latin in that script; nothing is machine-trimmed.

The two entries: Lamium maculatum 'Beacon Silver'; Chrysanthemum (Indicum Group) 'Soul Sister Purple'.

compare-double: both are new. The PROBABLE hits were one shared word each, "beacon" (Achillea 'The Beacon') and
"sister" (Begonia BONFIRE), different plants.

Neither Lamium nor a Chrysanthemum (Indicum Group) is in the deck. The deck's two chrysanthemums are
Chrysanthemum × morifolium Garden Mum Group and 'Autumn Bronze', both H4, Sep-Nov, "Fertile, moist, drained".

## Fitting changes (as-sent -> corrected)

- **Sizes** take the "a–b cm" form.
- **Aspect** becomes the compass facing the research states: North / East / West for the Lamium ("North, East or
  West-facing; partial to full shade"), South / West for the mum ("South or West-facing; full sun…").
- **Soil and warning, within 26 / 44.** Both incoming soil lines were 84–103 characters and both warnings 118–128:
  - Lamium: "Any, moist but drained" / "Avoid waterlogging; spreads fast when happy". The chalk / clay / loam /
    sand / any-pH list is what "Any" means; the vigour warning is the constraint a customer needs.
  - Mum: "Fertile, moist, drained" / "No winter wet; pots must drain freely". Both are the deck's two chrysanthemums'
    own values ('Autumn Bronze' carries that warning verbatim), so the three mums read alike.
- **Water over 120.** Lamium (123) is shortened and keeps the trees-and-containers advice. The mum (122) is
  shortened and "evenly moist" becomes "evenly watered", which also clears the checker's water/soil overlap warning
  ("moist" was in both).
- **`pest` is an icon key, not prose** (registry: `slugs`). The Lamium names slugs and snails and takes the key;
  the mum names several with none dominant and is blank. The pest prose moves into `resilience` as a last sentence,
  "Pests: …", and both resilience lines are shortened to sit inside 165 (Lamium 162, mum 161): "Extremely cold-hardy"
  becomes "Very cold-hardy" and "recover readily" becomes "recover"; the mum's "Suited to cool autumn conditions and
  seasonal displays" becomes "Made for cool autumn displays" and "grey mould" is dropped from the pest list.
- **`pollination`** must name a controlled word: both become "not applicable; …" with the research's prose after
  the semicolon (bee-friendly flowers; double flowers offer little pollen or nectar).
- **`stockForm`** was a habit description on both ("Low, mat-forming perennial", "Compact, densely branched flowering
  pot plant"); both become `container`.
- **`rootSize`** was prose with no figure on both ("Shallow, spreading, rooting stems", "Compact, fibrous root
  system"); the validator refuses a figureless value, so both are blank and say so in `uncertain`.
- **`clay`** on the mum was "with care", which is not yes / no; blank, as not established.
- **`hardiness`** on the mum was blank, and it is required. H4 by the sibling rule (both deck chrysanthemums carry
  H4). [Unverified] against any rating for this cultivar; none was found (fact check below).
- **`hardinessNote`** on the Lamium takes the deck's H7 form, naming the band in words and the °C figure ("Very hardy:
  withstands below −20°C, so hardy anywhere in the UK. Foliage may thin in harsh winters."). The mum's is rewritten to
  name H4, the −10 to −5°C range, where the band comes from and the doubt.
- **`toxicity`** on the Lamium was blank, which renders exactly like safe; it becomes "No known hazard." on the fact
  check below. The mum's sentence stays as sent: it contains "harmful" and prints the orange Toxic rung, which is the
  rung the sources support.
- `common`, `cvs` and every rating stay as sent. The Lamium's `cvs` is a synonym note ('Silbergroschen') rather than
  sibling cultivars; left as sent.

check-plant-json passes both with 0 errors. It warns on the Lamium's pestRisk 3 and careLevel 3 as possible 0–5
values; 0–3 is "bulletproof" and "plant-and-forget" on the 0–20 scale, which is what a Lamium is, so they stand.

## Fact check (2026-10-13)

Search snippets only; the proxy blocks the pages themselves.

- **Lamium 'Beacon Silver'.** The RHS profile describes it as an evergreen, mat-forming perennial to about 20 cm,
  spread 0.5–1 m, hardiness H7. So H7, the height and "evergreen" agree with the RHS. Two sellers disagree on
  evergreen: Beth Chatto's listing says not evergreen, and Tesselaar says plants may go dormant where the ground
  freezes; the as-sent `uncertain` line already says this, and "evergreen" stays with the RHS. **Spread**: RHS
  0.5–1 m against 50–60 cm as sent; left as sent, Oscar's call. **Toxicity**: no ASPCA entry for Lamium maculatum
  (the ASPCA hits are Arum maculatum, lords-and-ladies, a different genus); Gardeners' World's entry for the same
  species ('Roseum') reports no toxic effects; Plant Addicts (a seller) calls dead nettle safe for cats and dogs.
  Lamium orvala is listed by Gardeners' World as possibly toxic, a different species. "No known hazard." rests on
  that, none of it a veterinary database; [Unverified] beyond it.
- **Chrysanthemum 'Soul Sister Purple'.** No UK hardiness rating for the Soul Sister series was found. A 2021 Mast
  Young Plants catalogue lists Soul Sister White as a decorative Belgian Mum timed at week 42 (mid-October), which
  fits the Oct-Nov peak; US sellers list other Belgian Mums as hardy garden mums for USDA zones 5–9, not Soul Sister.
  The identity doubt in the as-sent `uncertain` (Purple is a retail designation, not in Gediflora's catalogue)
  stands. **Toxicity**: the ASPCA lists chrysanthemum as toxic to dogs, cats and horses (sesquiterpene lactones,
  pyrethrins; vomiting, diarrhoea, drooling, incoordination, dermatitis), and Gardenia notes contact dermatitis in
  sensitive people. The as-sent sentence prints the Toxic rung, which those sources support. Open for Oscar, not
  blocking: the deck's two chrysanthemums print only "Handle with care" (skin irritation), one rung below.

Sources: RHS Lamium maculatum 'Beacon Silver' (rhs.org.uk/plants/98954), Beth Chatto, Gardenia, Tesselaar, Gertens;
Gardeners' World Lamium maculatum 'Roseum' and Lamium orvala; Plant Addicts "Is dead nettle poisonous?"; ASPCA
chrysanthemum profile (aspca.org/pet-care/animal-poison-control/toxic-and-non-toxic-plants/chrysanthemum); Gardenia
"Are mums toxic?"; Mast Young Plants 2021 mum catalogue; Romence Gardens Belgian Mums listings.

None is dealt. Both wait for photos. When they come: one JSON per plant from `batch-corrected.json`, then
`node tools/add-plants-bulk.js --quick a.json a.jpg b.json b.jpg` and the full gate before pushing.
