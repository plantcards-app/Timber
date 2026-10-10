# 2026-10-07b — the 22-name label list: JSON stored and fitted, twelve cards dealt

Oscar, morning of 2026-10-07. The GPT batch he pasted ("Worked for 4m 21s", then the JSON) answers the
22-name list built from his bench-label OCR the night before, recorded in LEDGER.md 2026-10-07.
`batch-as-sent.json` is the paste exactly as supplied. `batch-corrected.json` is the same 22 entries fitted to
the card conventions. Photos came in three drops, all Galaxy S24, taken 2026-10-07 between 09:24 and 10:25.
A byte search for C2PA, JUMBF, content-credential and AI-generation markers found none in any of them.

## What fitting changed (batch-corrected.json)

| # | as supplied | as it went in | why |
|---|---|---|---|
| 1–3 | latin "Dianthus spp." (all three) | Dianthus Hardy Rose / Hardy Violet / Hardy Violet Picotee | The label name. "spp." is no card name, and three cards cannot share one. No quotes: GPT found no registered cultivar behind these retail names. |
| 8 | Sedum spurium 'Variegatum' | Sedum spurium 'Tricolor' | The label name. The RHS cultivar name goes to cvs. |
| 10 | Heuchera 'Champagne' | Heuchera CHAMPAGNE ('Tnheucha') | The trade name with its denomination, in the form of the deck's Heuchera CRANBERRY ('Ifhepr'). |
| 11 | Heuchera [Forever Purple] ('Tnheufp') (Forever Series) | Heuchera FOREVER PURPLE ('Tnheufp') | As #10. |
| 15 | Hebe [Petita Red] (Petita Series) | Hebe Petita Red | The label name. A branded colour selection with no denomination found. |
| 16 | Epipremnum aureum | Epipremnum pinnatum 'Golden Pothos' | The label name, which customers search for. GPT's RHS mapping goes to cvs. |
| 21 | Codiaeum variegatum var. pictum 'Petra' | Codiaeum variegatum 'Petra' | The label name ("Codiaeum var."). var. pictum goes to cvs. |

Applied to all 22 entries:
- **hardiness:** the rating alone (H1A → H1a). The band and the supplied note are joined into hardinessNote.
- **sizes:** under 1 m in cm, with en dashes.
- **peak:** "All year" → Jan-Dec.
- **aspect:** no compass facing was stated, so it is derived from sunNeed (fit-incoming's `deriveFacing`).
- **soil and soilWarning:** short forms written within the 26 / 44 panel budgets.

Everything else is as supplied, including Vinca 'Colada' at hue 0, the white-flowered precedent. Each entry
passed `check-plant-json`. `compare-double` found no doubles; its six PROBABLE hits were single shared words
such as "song", "spider" and "croton".

## Photos and cards

**Drop 1** (7 photos, no text). Matched by eye ([Inference]):
- Alocasia zebrina, the Variegated Spider Plant ('Variegatum', cream margins) and Golden Pothos. **The spider
  plant match was wrong.** That photo is his Dracaena 'Song of India'; see the correction below.
- A Hebe, whose shot Oscar then dropped (drop 2). It was never committed.
- Held, unmatched: a coral Heuchera (`unmatched-photo-1`), a spider plant with a white centre stripe
  (`unmatched-photo-6`, [Inference] 'Vittatum' rather than 'Variegatum'), and a variegated string of hearts
  (`unmatched-photo-7`). Ceropegia was set aside from the list for want of a full name.

**Drop 2.** "Hechera fire chef and champagne , and better photos for patitared the previously uploaded shoot
remove it it sucks": four photos, taken in his order. Heuchera 'Fire Chief' and Heuchera CHAMPAGNE, then the
two Hebe Petita Red photos. The first became the card photo and the second the flash frame (`--as spikes`).

**Drop 3** (7 photos, no text). Sedum spurium 'Tricolor' is unmistakable and dealt. The other six are held
until Oscar names them: a lime leaf with a dark centre, a cut green leaf with dark stripes, a lilac-purple
Heuchera, a silver Heuchera, a yellow-edged purple-centred leaf, and narrow variegated leaves.

Seven cards were dealt: Hebe Petita Red, Golden Pothos, Alocasia zebrina, Variegated Spider Plant, Heuchera
'Fire Chief', Heuchera CHAMPAGNE and Sedum 'Tricolor'. The deck goes from 550 to 557 at r369.

[Unverified] doubts, carried on the cards as written:
- The Pothos photo shows solid lime leaves. The card says "splashed and streaked yellow or cream".
- The Fire Chief photo is coral-pink. The card says "bright red … deepening to wine-red".
- The Champagne photo is peach-cream with red veins. The card says "pink-gold … silvery veil".

## Lettered for naming (2026-10-07 evening)

Oscar asked to see the nine held photos so he could name them. They went to him on one sheet, lettered a–i,
and he answered by letter. The files were then renamed to his names, except c. The original names are shown
for tracing back to the sheet.

| letter | his name | was | now | outcome |
|---|---|---|---|---|
| a | "heucherella sweet tea" | `unmatched-photo-1-coral-heuchera.jpg` | `heucherella-sweet-tea.jpg` | dealt as × Heucherella 'Sweet Tea' from the 2026-10-07d JSON |
| b | "Chlorophytum 'Variegatum'" | `unmatched-photo-6-spider-plant-white-centre.jpg` | `chlorophytum-comosum-variegatum.jpg` | the Variegated Spider Plant's card photo, after the correction below |
| c | first "Dracaena refl. Song of India", then "ceropegia woodii", variety unknown | `unmatched-photo-7-variegated-string-of-hearts.jpg` | unchanged | dealt as Ceropegia woodii 'Variegata' from the 2026-10-07d JSON |
| d | "tiarella sugar and spice" | `unmatched-photo-08-lime-dark-centre-cut-leaf.jpg` | `tiarella-sugar-and-spice.jpg` | dealt from the 2026-10-07d JSON |
| e | "tarella pink skyrocket" | `unmatched-photo-09-green-dark-stripe-cut-leaf.jpg` | `tiarella-pink-skyrocket.jpg` | dealt (#14) |
| f | "heuchera forever purple" | `unmatched-photo-10-lilac-purple-heuchera.jpg` | `heuchera-forever-purple-tnheufp.jpg` | dealt (#11) |
| g | "heuchera cinnabar silver" | `unmatched-photo-11-silver-heuchera.jpg` | `heuchera-cinnabar-silver.jpg` | dealt (#12) |
| h | "heucherella golden zebra" | `unmatched-photo-12-yellow-edge-purple-centre.jpg` | `heucherella-golden-zebra.jpg` | dealt (#13) |
| i | "sedum lineare" | `unmatched-photo-14-narrow-variegated-leaves.jpg` | `sedum-lineare.jpg` | dealt as Sedum lineare 'Variegatum' from the 2026-10-07d JSON |

[Unverified] doubts, dealt under his names as his rule asks, and raised with him:
- **c:** his first name for it, Song of India, did not fit a string of hearts, so it was held and asked. His
  answer: "the strands of hearts plant is ceropegia woodii "verity " u may need to guess the correct verity".
  The photo shows the variegated form, with pink and cream edges around silver-marbled centres. The RHS files
  that form as Ceropegia linearis subsp. woodii 'Lady Heart' (v), with Ceropegia woodii 'Variegata' as a synonym
  (rhs.org.uk/plants/153282). [Inference] By his genus and species and the photo, the name to ask GPT for is
  Ceropegia woodii 'Variegata'. It needs card data before it can be dealt.
- **h** (answered: he re-sent d as "Sugar and spice", so d and h are not swapped and h stays Golden Zebra): the Golden Zebra entry says "bright yellow, deeply cut foliage marked by a bold dark red centre". The
  photo is mostly purple-red with a lime edge, and its leaves are lobed rather than deeply cut. That is closer to
  the deck's × Heucherella 'Solar Eclipse'. Photo d (lime, deeply cut, dark centre) fits the Golden Zebra text
  better. Asked whether d and h are swapped.
- **b:** the card's text says "narrow green leaves with clean white margins". This photo, now its card photo,
  shows a white centre stripe with green edges. [Inference] That is the pattern usually sold as 'Vittatum'.
  It is dealt under his label name, with the text unchanged, and the doubt is raised with him.

## Correction: the spider plant's first photo was Song of India (2026-10-07 evening)

Oscar sent his Song of India photo: "Sorry this is Dracaena refl. Song of India". It is byte-identical
(sha256 73067abf…) to the drop 1 photo matched by eye that morning to the Variegated Spider Plant, so that
match was wrong. b, the photo he names Chlorophytum 'Variegatum', is the spider plant. Three changes followed:
- The spider plant's evening flash entry was removed. Photo b's staged frame became the card photo, and its
  derivative was rebuilt. The `-stripes` files and their credit are gone, and the card's credit records the swap.
- Dracaena reflexa 'Song of India' (#18) was dealt with the drop 1 photo.
- The held originals were renamed to match: `dracaena-reflexa-song-of-india.jpg` (the drop 1 photo) and
  `chlorophytum-comosum-variegatum.jpg` (photo b). The duplicate he re-sent was not kept.

## Files

| file | sha256 (first 16) | |
|---|---|---|
| `alocasia-zebrina.jpg` | 2537c24f02040363 | dealt |
| `dracaena-reflexa-song-of-india.jpg` | 73067abfea3f232e | dealt: Song of India (sent first as unnamed, matched wrongly to the spider plant) |
| `epipremnum-pinnatum-golden-pothos.jpg` | d05d6a383c7b8fe3 | dealt |
| `hebe-petita-red.jpg` | b3f57c3a54c52f90 | dealt, card photo |
| `hebe-petita-red-spikes.jpg` | 3c6a71ec5df9eb9e | dealt, flash frame |
| `heuchera-champagne-tnheucha.jpg` | 519d65703bf4664b | dealt |
| `heuchera-fire-chief.jpg` | e03f496b10bd96ff | dealt |
| `sedum-spurium-tricolor.jpg` | c5a5b2868b33f02c | dealt |
| `heucherella-sweet-tea.jpg` (a) | 320c47c114af5c0f | dealt (2026-10-07d) |
| `chlorophytum-comosum-variegatum.jpg` (b) | 11035b74c69ef24d | dealt: the spider plant's card photo |
| `unmatched-photo-7-variegated-string-of-hearts.jpg` (c) | 2ed685d84d031c3d | dealt (2026-10-07d) |
| `tiarella-sugar-and-spice.jpg` (d) | 4d4cf98a27ad801f | dealt (2026-10-07d) |
| `tiarella-pink-skyrocket.jpg` (e) | 883c44b487515406 | dealt |
| `heuchera-forever-purple-tnheufp.jpg` (f) | a9107d4197cf604b | dealt |
| `heuchera-cinnabar-silver.jpg` (g) | d7c340379bf7ea81 | dealt |
| `heucherella-golden-zebra.jpg` (h) | 2432d60b8c1d6a55 | dealt, doubt raised |
| `sedum-lineare.jpg` (i) | f0cbe71108616ac9 | dealt (2026-10-07d) |

Every file here is byte-identical to what he sent.

## Checks

Results: data-audit, plant-sense --strict, photo-credits and deck-audit PASS (557 cards), audit-layout "all
cards clean", fast set 9/9. All seven cards were rendered at 390x844 @2x and are whole; the Hebe was shot in
both frames.

Named photos dealt, r375: data-audit 0 problems, plant-sense --strict "No card contradicts itself",
photo-credits 0 unrecorded, deck-audit PASS (570 cards), audit-layout "all cards clean", fast set 9/9. The four
new cards and both spider plant frames were rendered at 390x844 @2x and are whole. The deck goes from 566 to 570.

Correction, r377: data-audit 0 problems, plant-sense --strict "No card contradicts itself", photo-credits
0 unrecorded, check-boot OK (PHOTO_SWAP 30), deck-audit PASS (572 cards), audit-layout "all cards clean", fast set 9/9.
The spider plant and Song of India were rendered at 390x844 @2x and are whole. The deck goes from 571 to 572.

Later that evening he re-sent photos a and d with names: "Heuchera sweat tea" and "Sugar and spice". Both
are byte-identical to the held files, so nothing new was stored. His GPT JSON for a, c, d and i arrived next,
and all four are dealt from it. See `data/held-photos/2026-10-07d/`. No photo from this sheet is held any more.

## Fact check (2026-10-08)

Oscar: "Check the json is correct". All 38 fitted entries from 2026-10-07b, c and d pass check-plant-json with
0 errors and 0 warnings. The 27 dealt cards match their fitted entries field for field. Every field was then
checked against outside sources (RHS through search snippets, since rhs.org.uk returns 403 to fetch).

Fitting errors, fixed (r384, r385). These were the fitter's, not his JSON's:
- The hardiness notes on Hebe Petita Red, Sedum 'Tricolor' and Tiarella 'Pink Skyrocket' read "uK" or "rHS".
  The fit script lowercased the note's first letter. It now leaves a leading acronym alone.
- Sedum spurium 'Tricolor': cvs had the RHS naming the wrong way round. RHS's main entry is Sedum spurium
  'Tricolor' (v). 'Variegatum' and Phedimus spurius 'Tricolor' are its synonyms
  (rhs.org.uk/plants/58466). The fitter had taken GPT's `uncertain` note as fact. That note is kept verbatim
  above, and it is wrong.
- Facings: the fitter had derived these from sunNeed, but RHS states them, and a stated facing wins.
  Alocasia zebrina becomes East / West (rhs.org.uk/plants/136827). Both Vinca minor cards become Any aspect
  (RHS lists N/E/S/W).
  
Wrong or doubtful facts in his JSON are listed for Oscar and left as sent until he says otherwise. On the
dealt cards these are: Pink Skyrocket's height (RHS: to 20 cm in flower; card 30–40 cm), and the spider
plant's text against its photo. RHS 'Variegatum' has white margins and 'Vittatum' a central stripe; the photo
shows a central stripe, and the label says 'Variegatum'. Before dealing, the undealt entries need these
fixed: Dianthus toxicity is blank, but RHS marks the genus a skin allergen and ASPCA lists pinks as toxic to
pets. RHS gives Peperomia obtusifolia H1b, not H1a. No series or breeder was found for "Hardy Rose/Violet",
so their H4 is unverified.

### Applied (r390)

Oscar: "Yes, if they seem nessusary". Only fields that a source shows to be wrong were changed. The doubtful ones
are left as sent.
- **Tiarella 'Pink Skyrocket'** (live): height 30–40 cm becomes 20–30 cm. RHS gives "to 20cm high in flower". The
  patent gives flowering stalks of 27 cm, and Terra Nova 11" in flower.
- **Chlorophytum comosum 'Variegatum'** (live): the visual now reads "a broad creamy-white central stripe", which is
  what the photo shows. The warning "hot sun scorches margins" becomes "…scorches leaves". cvs was "'Variegatum'",
  only its own name; it now says the label reads 'Variegatum' and that the centre-striped leaves match RHS
  'Vittatum', since RHS 'Variegatum' has white edges. The name stays as the label has it.
- **Dianthus Hardy Rose, Hardy Violet and Hardy Violet Picotee** (not dealt): toxicity was blank. It is now "Mildly
  toxic to cats and dogs if eaten (ASPCA); can irritate skin, so wear gloves (RHS)". ASPCA's pinks entry gives mild
  stomach upset and dermatitis; RHS Dianthus pages say skin allergen.
- **Peperomia 'Obtipan Bicolor'** (not dealt): H1a becomes H1b, the rating RHS gives P. obtusifolia and its
  cultivars. The note now reads "keep above 10°C, ideally 15°C or more".

## Vinca minor 'Ralph Shugert' dealt (2026-10-10, r394)

Oscar sent one photo captioned "Vinca". It was taken on a Galaxy S24 at 10:33:31 on 2026-10-07, at 4000x3000
with EXIF rotation 6. It has no C2PA or AI-edit markers, and `vinca-minor-ralph-shugert.jpg` is byte-identical
to what he sent (sha256 72139df29924e452…). Two Vinca entries were waiting. The flower is violet-blue, and RHS
gives 'Colada' white flowers, so the photo goes to 'Ralph Shugert' ([Inference] by flower colour). [Unverified]:
the cream leaf margins look fairly broad for V. minor; the card keeps its JSON name.

The lime shape in the top-left corner looks like an out-of-focus leaf, green on its left half, not a tag
([Inference]), and the card's left strip covers most of it. The pot's moulded marks are unreadable. The photo
was not cropped. Deck 588 -> 589. Fast 9/9, data-audit 0, plant-sense clean, deck-audit PASS, layout clean. The
card was rendered at 390x844 and is whole.

## The Dianthus bench (2026-10-10, r395)

Oscar: "Here's some bulk images I took of that bench u work it out I guess". Eight photos, all taken on a Galaxy
S24 on 2026-10-07 between 10:38:44 and 10:39:56. None has C2PA or AI-edit markers, and every file here is
byte-identical to what he sent. Three show readable nursery labels, which were used to identify the plants but
never put on a card. They were matched by label, timestamp and flower pattern ([Inference]):

| time | file | match | use |
|---|---|---|---|
| 10:39:54 | `dianthus-hardy-rose.jpg` | **Hardy Rose**: bright pink speckled flowers, the same as those beside the label 2 s later | card |
| 10:39:56 | `dianthus-hardy-rose-label.jpg` | the "DIANTHUS HARDY ROSE" label | identification only |
| 10:38:58 | `dianthus-hardy-violet.jpg` | **Hardy Violet**: deep crimson-violet with a pale eye, as in the label's picture | card |
| 10:39:04 | `dianthus-hardy-violet-label.jpg` | the "DIANTHUS HARDY VIOLET" label, leaves only | identification only |
| 10:39:09 | `dianthus-hardy-violet-magenta.jpg` | Hardy Violet, 5 s after its label | flash `magenta`, cropped |
| 10:38:44 | `dianthus-hardy-violet-picotee.jpg` | **Hardy Violet Picotee**: white-fringed flower with a magenta zone | card |
| 10:39:02 | `dianthus-hardy-violet-picotee-label.jpg` | the "DIANTHUS HARDY VIOLET PICOTEE" label over white-fringed magenta flowers | flash `fringed`, cropped |
| 10:39:31 | `unmatched-dianthus-red.jpg` | red flowers beside a red label; matches none of the three JSONs | **held**, not used |

Two crops were made with `tools/reframe-photo.js`, recorded in `*-crop.json`, using original pixels only:
- the magenta Violet frame drops a strip of its label on the right edge (aspect 0.75)
- the picotee frame keeps only the two flowers below the label, as a 1400x1400 square

The tool confirmed every listed label is outside each crop. Deck 589 -> 592 at r395. Fast 9/9, data-audit 0,
plant-sense clean, deck-audit PASS, layout clean, check-boot OK. The cards match `batch-corrected.json` field for
field. All three cards and both frames were rendered at 390x844 and are whole, with no label showing.

[Unverified], carried as written: the photos show bright green leaves, while the cards say "grey-green" and
"blue-green". Hardy Violet's flowers look crimson-magenta rather than "violet-purple". The agent noted the same
about chinensis × barbatus types on 2026-10-08. The red Dianthus is held until Oscar names it.

## Vinca minor 'Colada' dealt (2026-10-10, r396)

One photo, sent without text. It was taken on a Galaxy S24 at 10:33:12 on 2026-10-07, at 4000x3000 with EXIF
rotation 6. It has no C2PA or AI-edit markers, and `vinca-minor-colada.jpg` is byte-identical to what he sent
(sha256 a301781d6fa312e8…). It shows a white five-petalled flower over plain glossy green leaves, which matches
'Colada' (RHS: white flowers). The only object in it is a pot rim, so it was not cropped. Deck 592 -> 593. The
card was rendered at 390x844 and is whole.
