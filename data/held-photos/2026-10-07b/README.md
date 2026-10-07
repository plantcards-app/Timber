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
