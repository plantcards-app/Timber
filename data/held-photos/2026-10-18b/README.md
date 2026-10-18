# 2026-10-18b — the first Card Forge batch (artifact batch `2026-10-18`): 52 drafts, 40 held, 12 set aside (r410)

Oscar, 2026-10-18, late: "New batch from the Timber Card Forge artifact … Batch: 2026-10-18 — 52 cards ready (0 with
a photo, 52 without); 1 held back with validator errors." He also attached the page's JSON download and, alongside
it, a GPT-made JSON of the same 52 names ("Interesting experiment … tell me how they differ"). The comparison is at
the end of this file. The folder is `2026-10-18b` because today's GPT batch already holds `data/held-photos/2026-10-18/`;
the artifact's batch id stays `2026-10-18`.

Files:
- `forge-cards.json` — the 53 card documents as pulled from the artifact's `cards` collection (ids, versions, Oscar's
  typed names, the drafts, the page's validation). The write-back is pinned to these versions.
- `batch-as-sent.json` — the 52 ready drafts in card order, as the page would download them. (The attached download
  differs only in key order and `null` vs `""` for a blank `sunMin`; same values.)
- `batch-corrected.json` — the 40 held cards after the fact check, made by `fit-2026-10-18b.js` (kept here), which
  names every change and why in each card's `uncertain`.
- No photos: the batch had none.

The one card the page held back: "Etoile Du Mexique 'Longue et abondante' floraison" — a French label line, no latin,
no hardiness. It stays in the Forge as *Needs fixes*.

## Pull, as CARD-FORGE.md says

`ArtifactData` query on `cards` where `batch == "2026-10-18"`: 53 documents, all version 2 (one version 3), none with
`dealtAt`, none with photos, every `research.checkedOnline` false. `batches/2026-10-18` has `sessionId: null`.

## compare-double

Exact doubles of dealt cards: **Ginkgo biloba, Yucca gloriosa 'Variegata', Robinia pseudoacacia 'Frisia', Prunus
'Kanzan', Choisya × dewitteana WHITE DAZZLER ('Londaz')**. Held double: **Hypericum 'Hidcote'** = the hold block's
Hypericum × hidcoteense 'Hidcote'. And **Hydrangea 'Living Red Velvet'**, which the draft made a macrophylla, is the
deck's dealt Hydrangea paniculata LIVING RED VELVET ('Lc No19') (RHS 524139 confirms paniculata). Everything else
was new; the PROBABLE hits were one shared word each. The same plant appeared twice in the batch (Tibouchina
organensis, two labels).

On the six doubles only blank fields were taken (foliage, toxicity, prune, resilience, uses, pollination, stockForm,
clay, compliance, as each card lacked them): the dealt card keeps its values. Nothing from the Living Red Velvet
draft was applied (its text describes a macrophylla). Open for Oscar: the RHS gives Robinia 'Frisia' H6 where the
dealt card carries H7, and Prunus 'Kanzan' a spread "over 8 m" where the card carries 4–8 m.

## Set aside, not held (12)

| Card | Why |
|---|---|
| the 6 doubles above + Living Red Velvet | already in the deck |
| Schefflera ("Winter Haskins Jungle") | bench label, species unknown; the Forge left nearly every field blank |
| Acer 'Red Flamingo' | the Forge could not place it and left soil, water, prune, visual and peak blank. It exists: Acer × conspicuum 'Red Flamingo' (RHS 252851, H5, 4–8 m × 4–8 m, a snakebark). Needs a full draft under that name, not a fact check |
| Hebe 'Year Round Interest' | not a cultivar: marketing copy on mixed-hebe listings. Needs the label |
| Pinus | genus only, no sizes, and H4 is wrong for the common pines (RHS H7). Needs the species |
| Tibouchina organensis (second copy) | same plant twice |

These keep `dealtAt` null in the Forge, so the page still shows them as handed, not dealt.

## Fitting changes on the 40 (draft → held)

The Forge's shape work held up: all 52 drafts pass `check-plant-json` with 0 errors as drafted, every soil line is
inside 26/44, every safety sentence prints the rung it means. What still needed a hand:

- **Sizes.** 29 drafts had no height or spread (the brief says blank what you do not know), and `ingest-batch`
  refuses a card without both. Every held card now carries a figure: the RHS ultimate size where a page was found
  (most), a breeder or nursery figure flagged [Unverified] where not (Cordyline EMERALD STAR, Polygala 'Africana',
  Muehlenbeckia GOLDEN GIRL, Fatsia 'Needham's Lace', Hydrangea ECLIPSE, Eriostemon 'Flower Girl Pink', Hibiscus
  'Little Hibiskiss Pink', Lagerstroemia 'Muskogee', Olearia SPRING BLING).
- **Prose over the deck budgets** on eleven cards (resilience 168–200 against 165; prune 190; water 121 and 135);
  shortened, meaning kept.
- **Common names**: five clashed with cards already in the deck (Maidenhair Tree, Heavenly Bamboo, Golden Rain Tree,
  Daisy Bush, Stag's Horn Sumach); they carry the cultivar now, as the deck's other cultivar cards do.
- **plant-sense** keyword catches: "(dwarf forms)" in the Cryptomeria's uses against its 12 m size, "vigorous
  reverting shoots" in the Ginkgo 'Troll Gold' prune against growthSpeed 1; reworded.
- **Names to the deck's TRADE ('code') form** where the fact check established the code: Cordyline australis EMERALD
  STAR ('Broadsword'), Hydrangea quercifolia JETSTREAM ('PIIHQ-I'), Senecio candicans ANGEL WINGS ('Senaw'),
  Muehlenbeckia complexa GOLDEN GIRL ('Hausler1'), Coprosma repens PACIFIC SUNSET ('Jwncopps'), Weigela ALL SUMMER
  RED ('Slingco 1'), Hydrangea macrophylla ECLIPSE ('Bailmacseven'), Ilex × meserveae BLUE MAID ('Mesid'), Olearia
  phlogopappa SPRING BLING ('Arkpap'). Label names that the check could not confirm stay as typed (label rule):
  Ginkgo 'Troll Gold' (every source is 'Troll'), Anisodontea 'Pink Lady' (likely LADY IN PINK), Fatsia 'Needham's
  Lace' (sold as F. polycarpa 'Needham's Form'), Dianella COOL VISTA (RHS: D. revoluta 'Allyn Citation'), Eriostemon
  (RHS: Philotheca myoporoides), Tibouchina organensis (RHS: Pleroma foveolatum), Cytisus 'Boskoop Ruby' (RHS: C. ×
  boskoopii).

## Fact check (2026-10-18), search snippets only; the proxy blocks rhs.org.uk itself

Six parallel checks of 8–9 plants each, at least hardiness, size, peak, toxicity, compliance and the name. Of the 40
held, the RHS (or best source) **agreed with the draft's hardiness on 26 and disagreed on 14**, always by one band and
in both directions:

| Card | Draft | Now | Source |
|---|---|---|---|
| Chamaecyparis pisifera 'Nana' | H7 | H6 | RHS 89256 (and size 0.1–0.5 m, not 0.5–1 m) |
| Muehlenbeckia GOLDEN GIRL | H4 | H3 | RHS species 11221 |
| Fatsia 'Needham's Lace' | H4 | H3 | RHS F. polycarpa 185322 |
| Hylotelephium sieboldii | H5 | H4 | RHS 141321 |
| Lavandula canariensis | H2 | H3 | RHS 9880 |
| Ginkgo 'Troll Gold' | H7 | H6 | RHS 'Troll' 210450 |
| Anisodontea 'Pink Lady' | H3 | H2 | RHS Lady in Pink 284066 (and 35–50 cm, not 1–1.5 m) |
| Rhododendron ponticum 'Variegatum' | H5 | H6 | RHS 92823 (and 1–1.5 m, not 1.5–2.5 m) |
| Nandina 'Twilight' | H4 | H5 | RHS 350962 |
| Diervilla COOL SPLASH | H7 | H5 | RHS species 5848; cultivar unrated |
| Ilex BLUE MAID | H6 | H7 | RHS 117328 |
| Lagerstroemia 'Muskogee' | H4 | H3 | RHS L. indica 100448; no cultivar page |
| Koelreuteria 'Coral Sun' | H6 | H5 | RHS 177985 |
| Tibouchina organensis | H2 | H1c | RHS Pleroma foveolatum 525536 |
| (Yucca 'Variegata', Ginkgo biloba, Robinia 'Frisia': the drafts' H4/H7/H6 vs the dealt cards' H5/H6/H7; RHS backs the deck on the first two) | | | |

Other corrections: peaks (Freesia Jun-Aug, Weigela May-Oct, Hydrangea 'Cotton Candy' Jun-Oct, Cytisus May-Jun,
Nandina Jan-Dec, Hibiscus Aug-Oct, Eriostemon Mar-May); sizes (Yucca gloriosa spread 1.5–2.5 m, Rhus TIGER EYES
spread 2.5–4 m, Hydrangea 'Cotton Candy' 0.5–1 m, Plerandra 2.5–4 m, Tibouchina 4–8 m); toxicity (Plerandra: ASPCA
non-toxic, RHS skin allergy only, reworded to Handle with care); compliance (Rhododendron ponticum: Schedule 9 note
added, no sale restriction found; Lavandula: Defra high-risk Xylella host, line stands; Prunus: passport applies to all
professional movement, not Xylella-specific).

Identity findings: Hosta 'Hadspen Samphire' is real (RHS 68940, Eric Smith) and no Hemerocallis of that name exists;
Polygala 'Africana' is RHS 283515 (not P. myrtifolia); Hydrangea 'Cotton Candy' is RHS 'Cotton Candy Two', a lacecap
(confirm the stock); Pteris vittata's arsenic note is right (hyperaccumulator); false aralia and Fatsia japonica are
ASPCA non-toxic; Senecio, Cordyline, Hosta, Nandina, Yucca, Ilex, Robinia, Rhododendron are ASPCA/RHS toxic as drafted.

[Unverified] throughout: nothing was read on an RHS page itself; every figure is from a search snippet of one.

Sources: rhs.org.uk/plants 167668, 68940, 524139, 89256, 147186, 7990, 5015, 13101, 13141, 13107, 4361, 8949, 283515,
367752, 11221, 7904, 516937, 185322, 7147, 387596, 516912, 141321, 504797, 293367, 19168, 65193, 9880, 210450, 284066,
1298, 338107, 92823, 100610, 70437, 187874, 350962, 293368, 5848, 341814, 344180, 40530, 83905, 346118, 42278, 99553,
386690, 386697, 261101, 332083, 117328, 332180, 100448, 177985, 508292, 45734, 211112, 20902, 525536, 525471, 252851,
300946, 517537; POWO/WFO (Heptapleurum, Pleroma, Brassaiopsis, Acer); ASPCA (hosta, cordyline, yucca, schefflera,
heavenly bamboo, locust, false aralia, Japanese aralia, crape myrtle, St John's wort, Senecio); Defra Xylella host
list and plant-passporting update 48; legislation.gov.uk Schedule 9; Plantipp (Emerald Star, Little Legends);
patents PP34544, PP32443, PP28830, PP19391, PP22965, PP17409, PP16185, PP35424, PP35067; nurseries as named per card.

## State

Hold 74 → 114 (40 new), deck 635 unchanged; the six doubles' blank fields filled. r410. Forge write-back: `dealtAt`,
`dealtAs: "held"`, `dealtRev`, `checkedOnline: true` on the 40; `sessionId` on the batch; `deck/index` refreshed.

## What this batch teaches about the Forge (Oscar asked)

1. **Blank sizes are a dead end.** The brief tells the model to blank what it does not know, and it did (29 of 52).
   The deck cannot hold a card without height and spread, so every blank became a session lookup. The Forge should
   treat a blank height or spread as a validator **error**, and the brief should ask for the RHS ultimate size with a
   note in `uncertain` rather than nothing.
2. **The page's prose budgets are looser than the deck's.** Eleven drafts were over (resilience to 200 against 165,
   prune 190, water 135). The page's port should use `tools/fit-incoming.js`'s BUDGET and the 26/44 exactly.
3. **Common names must be unique across the deck.** Five clashed. The page has the deck index; it can check the
   common as well as the slug and ask for the cultivar in the name.
4. **Hardiness from memory was right on 26 of 40 held cards (65%)**, and wrong by one band either way the rest. That is the
   single most useful thing to send through a second pass with web access. Everything the page writes as H-band
   should carry `uncertain` until a session has seen the RHS figure, which it does already; what is missing is a
   place in the page for the session to write the checked value back (it writes `checkedOnline` only).
5. **Trade names.** The deck writes PBR plants as `TRADE ('code')`. The model often knows the code; nine cards here
   got it in the session. The brief should ask for that form outright.
6. **Unidentifiable labels need a different exit.** Three cards (Schefflera "Winter Haskins Jungle", Hebe "Year
   Round Interest", Pinus) are bench text, not plants, and the Forge wrote a shell card for each. Better: the page
   refuses to research a name it cannot resolve to a genus + species or cultivar, and asks for a label photo instead.
7. **Duplicates inside a batch** (two Tibouchina) and **against the deck** (seven here) should stop at the page: it
   has the index for the second case already; the first is a one-line check.
8. **Oscar's typed names carry noise** ("Thclus. Broom Ginhgo biloba", "Cryptomeria Ten-.Sar", "Sedum Sieboldi
   Haskins"). The model coped, but a label photo field used every time would remove the guessing.
9. **A bulk second-pass tool is the next brick** (Oscar, tonight: "gather all the data and send it to Claude for a
   double check on numbers and stats"). The shape is already here: `batch-corrected.json` in, the six parallel checks
   this session ran, a per-card diff out. Worth making it a script rather than a session habit.

## The two JSONs compared (Oscar's experiment)

Same 52 labels, one array from GPT (the old route), one from the Forge. Only 22 latins matched; two were different
plants ('Hadspen Samphire': GPT Hemerocallis, Forge Hosta — the Hosta is right; 'Living Red Velvet': GPT paniculata,
Forge macrophylla — GPT was right). On shape, every GPT card failed `check-plant-json` (hardiness as prose, no
pollination class, habit text in stockForm, soil 56–103 chars, unparseable peaks) and 22 of its safety sentences
printed the Toxic rung for plants it said were not toxic; every Forge card passed and printed the rung it meant. On
facts, the two disagreed on hardiness 8 times in the 22 shared, one band apart, neither checked online. The Forge
also blanked where GPT guessed (sizes, see above) and carried ~11 doubt lines a card against ~2. Verdict given to
Oscar: build from the Forge; the fact check is the job either way.
