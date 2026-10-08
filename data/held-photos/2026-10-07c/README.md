# 2026-10-07c — 13 GPT entries: twelve new cards fitted (eleven dealt so far), one Aronia double

Oscar pasted this batch on 2026-10-07 with no text. `batch-as-sent.json` is the paste exactly as supplied
(13 entries). `batch-corrected.json` holds the twelve new entries fitted to the card conventions. Entry 13,
Aronia melanocarpa, is already a dealt card, so it went through the double rules instead (below). No photos
came with the batch. They are asked for four at a time in batch order, and each card is dealt when its photo
comes (below).

## What fitting changed (batch-corrected.json)

| # | as supplied | as it went in | why |
|---|---|---|---|
| 2 | Escallonia [Golden Carpet] ('Alcaura') | Escallonia GOLDEN CARPET ('Alcaura') | The trade name with its denomination, in the form of the deck's Escallonia laevis PINK ELLE ('Lades'). |
| 8 | Prunus 'Ichiyo' | Prunus 'Pink Champagne' | The label name, which became known on the evening of 2026-10-07 (see Drop 3, #7). The RHS lists 'Pink Champagne' as a synonym of the accepted 'Ichiyo' (rhs.org.uk/plants/90553), and that goes to cvs, as with Sedum 'Tricolor'. |
| 10 | toxicity "… seeds contain toxins and should be removed" | "… seeds are toxic and should be removed" | "toxins" matches no word on the card's safety ladder, so the plaque would fall to the default "Handle with care". Reworded, it prints "Toxic", as Malus 'Evereste' does. ('John Downie' and 'Veitch's Scarlet' carry no safety line.) |

Applied across the twelve:
- **aspect:** "North / East / South / West" → "Any aspect" (#2, #4, #6, #7, #10, #11, #12). Other facings as supplied.
- **sizes:** ranges wholly under 1 m in cm: Penstemon spread 0.1–0.5 m → 10–50 cm, Escallonia height
  0.5–0.6 m → 50–60 cm. Ranges reaching 1 m stay in metres ("0.5–1 m"), as on the deck's cards.
- **soil and soilWarning:** short forms written within the 26 / 44 panel budgets. The full wording stays in
  `batch-as-sent.json`. The shortening dropped "moderately fertile", the soil-type lists (where all four types
  were listed, the line now starts "Any"), "moist" on #1, #3, #9 and #11, Escallonia's "best foliage colour in
  good light", Magnolia's "very exposed sites", and "severe" before the Cornus's young-plant drought.

Everything else is as supplied. That includes hardiness (already H4 / H6), hardinessNote, the prose and these:
- **#8**, common name "Pink Champagne Cherry". It went in as GPT's Prunus 'Ichiyo' while the label wording was
  unknown, and was renamed to the label's 'Pink Champagne' once that was known (table above).
- **#4 Prunus sargentii:** GPT read "CLT" in its input as container notation. Its note stays in `uncertain`.
- **#5 Malus baccata 'Braendkjaer':** GPT notes the RHS lists the name as unresolved and the dimensions as
  poorly documented. Its note stays in `uncertain`.
- **Split peaks**, such as "Apr-May / Oct-Nov" on #4, #5, #10, #11 and #12, are kept as supplied. [Inference
  from `parseMonths` in timber.html] The card reads the first and last month it finds, so the month dots and
  month filters show one continuous span (Apr–Nov for #4). Because that span is longer than six months, the
  card also misses its season's "★ Peaks here" filter. The deck's one existing split peak, Clematis
  'Nelly Moser' ("May-Jun, Aug-Sep"), already behaves this way.

Each of the twelve passed `check-plant-json`. `compare-double` found no doubles among them. Its PROBABLE hits
were single shared words: "evergreen" (Clematis armandii), "siberian" (Brunnera) and "champagne" (Heuchera
CHAMPAGNE).

## #13 Aronia melanocarpa: a double of the dealt Black Chokeberry

Matched by exact latin. Applying the double rules:
- **foliage:** blank on the card, so "deciduous" was taken from the batch. This is the only change to the card.
- **peak:** card May-Oct, batch "May-Jun / Sep-Nov". **size:** card 1.5–2.5 m H × 1.5–3 m W, batch
  1.5–2.5 m H × 2.5–4 m W. The deck has no other Aronia to decide, so the dealt card keeps both.
- **ratings:** growthSpeed, thirst and sunMin are within one icon, so the card keeps its own.
- **prose** (visual, water, prune, resilience, uses, hardinessNote): the dealt card keeps its own.

## Photos and cards

**Drop 1**, 2026-10-07: "Escolinia and 2 flash berweens for penstomn". Three photos, all
Galaxy S24, taken that day between 13:15 and 13:41. A byte search for C2PA, JUMBF, content-credential and
AI-generation markers found none in any of them.
- **#2 Escallonia GOLDEN CARPET ('Alcaura')** was dealt with his first photo. It shows deep red-pink tubular
  flowers and buds on red stems, over golden-yellow and lime leaves with water droplets.
- **#1 Penstemon 'Volcano Fujiyama'** was dealt with the two Penstemon photos, in the order he sent them. The
  close-up of narrow glossy leaves is the card photo, and the flower close-up is the flash frame
  (`--as flowers`). The camera timestamps show the flower photo was taken first (13:40:57, then 13:41:09). The
  order he sent them decided it, as with Hebe Petita Red.

The deck goes from 557 to 559 at r371.

**Drop 2**, 2026-10-07: "Mag lil gem flash between". Two photos, both Galaxy S24, taken that day at 13:00:37
and 13:01:16. Neither has C2PA, JUMBF, content-credential or AI-generation markers.
- **#3 Magnolia grandiflora 'Little Gem'** was dealt with both, in the order he sent them. His first photo
  is the card photo: an open white flower with cream stamens tipped pink, over glossy dark green leaves with
  water droplets. The second is the flash frame (`--as buds`): a half-open flower with browned outer petals,
  two cream buds marked brown, and leaves, some showing rusty-brown undersides.
- The card photo is 3000x2776, slightly wider than tall, where the camera writes 4000x3000. [Inference] He
  cropped it on the phone before sending. The card shows the middle of the frame. The flower and its stamens
  fill the window, and the outer petal tips fall outside it.
- A white shape at the foot of the card photo is a blurred pot rim with compost, not a label. The flash
  frame shows a wire bench and pots, blurred, at the right. Neither shows a person, finger or label.

The deck goes from 559 to 560 at r372.

**Drop 3**, 2026-10-07: five photos, with the words "Prunus pink perfection last photo the tree had two different
tags so it could actually not be pink perfection check of the foliage should be thus colour or that it looks
right if not sure pause, I tuink it probably is tho". All five are Galaxy S24, taken between 13:03 and 13:07,
with no C2PA, JUMBF, content-credential or AI-generation markers.
- Only the last photo was named. The first four were matched to the three names asked for before it, in the
  order asked. [Inference] The sequence fits exactly: a cherry in autumn leaf, then two shots of one crab apple
  six seconds apart, then a cherry in green leaf.
- **#4 Prunus sargentii** was dealt with the first photo: red, pink and green autumn leaves with water droplets.
- **#5 Malus baccata 'Braendkjaer'** was dealt with the two crab apple photos. The first is the card photo and
  the second is the flash frame (`--as fruit`), under his 2026-10-01 rule that a second photo becomes a flash.
  [Unverified] that the tree is 'Braendkjaer' and not the batch's other crab apple, 'Gorgeous'. The order is
  the only evidence.
- **#6 Prunus 'Amanogawa'** was dealt with the fourth photo: large green leaves with bristle-tipped teeth, red
  stalks and a staked stem. A white nursery code band on the stem ("…8 C JRR…") sat at the right edge. It is
  a label, so by the v14.34 rule it came out with the smallest crop that holds the 0.75 aspect: the right 312 px
  and bottom 416 px of 3000x4000. The box is in `prunus-amanogawa-crop.json`. Original pixels only. The band
  carries no plant name, so it does not confirm the variety.
- **#7 Prunus 'Pink Perfection' is held, not dealt.** He asked for a check that the foliage looks right, and to
  pause if not sure. The photo shows one leaf deep red (backlit) and others orange-tan to yellow-green. The RHS
  entry (rhs.org.uk/plants/44879) gives "some orange tints in autumn". Nursery copy goes redder: Hillier gives
  "rich shades of orange-red", and Orange Pippin lists "Orange / Red". The colour is redder than the RHS and
  within the nursery descriptions. No autumn leaf can tell 'Pink Perfection' from other Japanese cherries, such
  as the deck's 'Kanzan'. Not sure, so paused.
  - **The second tag** (Oscar, that evening): "Second tag was prunus pink champagn, think it was my garden
    centres lable tho so its way more likley to have come second but could be wrong". The tree carries two
    tags naming two different cultivars, and both are cards in this batch: #7 'Pink Perfection' and #8
    'Pink Champagne' (RHS: a synonym of 'Ichiyo'). The RHS keeps them as separate plants (plants/44879 and
    plants/90553), so the two tags cannot both be right for this tree. The RHS gives no autumn colour for
    'Ichiyo', and nursery copy says orange-red (Coolings), so the leaf cannot choose between them either.
    It was held, and renamed so its name claimed neither cultivar.
  - **His call:** "I think its probably pink perfection". It is dealt as #7 Prunus 'Pink Perfection' (r379), and
    the photo takes the card's slug name again. [Unverified] The tree's second tag reads Pink Champagne. #8 waits
    for a photo of its own.

The deck goes from 560 to 563 at r373.

**Drop 4**, 2026-10-07: three photos, with "I sent two photos of that malus, to be flash betweens or doubles as I
sometimes call them". That confirms the Drop 3 crab apple pair is one tree, which is already a card photo plus
flash frame. All three are Galaxy S24, taken between 13:07 and 13:10, with no C2PA, JUMBF, content-credential or
AI-generation markers. They were not named, so each was matched to the only card of its genus left in the batch.
[Inference] They also came in the order asked.
- **#9 Liquidambar styraciflua 'Worplesdon'**: star-shaped leaves turning red, orange and yellow, with water
  droplets.
- **#10 Malus × atrosanguinea 'Gorgeous'**: orange-red crab apples flushed yellow, hanging under green leaves.
  The fruit is not the dark crimson of the Drop 3 crab apple, so this is a different tree. A heavily blurred
  white shape at the far top-right edge, perhaps a tag, has nothing readable on it. It sits outside the card
  window, so it is left as shot, as with the Astrantia label.
- **#11 Cornus kousa 'Schmetterling'**: broad oval leaves with curved veins, turning red-orange over green.

The deck goes from 563 to 566 at r374.

**Drop 5**, 2026-10-07: "Pryus chantcleer", one photo, Galaxy S24, taken 13:10, with no C2PA, JUMBF,
content-credential or AI-generation markers.
- **#12 Pyrus calleryana 'Chanticleer'** was dealt with it: glossy leaves on pink-red stalks, turning red and
  orange over green, with water droplets.
- **The card photo is his own crop (2026-10-07 evening):** "Also id prefer that pryus to be a photo more higher
  alowinf more of the leaf to be seen". He sent a phone crop of the same photo: 2244x2714, the same 13:10:31
  timestamp, and no C2PA, JUMBF, content-credential or AI-edit markers. It was restaged as the card photo
  (1200x1451), so the red leaf fills the window above the stats plaque. The uncropped original stays here.

The deck goes from 570 to 571 at r376. The 2026-10-07b named photos took it from 566 to 570 at r375. #8 'Pink
Champagne' is parked at his word ("Shelf pink champagne"). Its fitted entry stays in `batch-corrected.json`, to be
dealt if a photo comes.

| file | camera, size, taken | sha256 (first 16) | |
|---|---|---|---|
| `escallonia-golden-carpet-alcaura.jpg` | Galaxy S24, 3000x4000, 2026-10-07 13:15 | a0d3b4e207303f90 | dealt |
| `penstemon-volcano-fujiyama.jpg` | Galaxy S24, 3000x4000, 2026-10-07 13:41 | 67563391857bf419 | dealt, card photo |
| `penstemon-volcano-fujiyama-flowers.jpg` | Galaxy S24, 3000x4000, 2026-10-07 13:40 | 9208305e0eb591a5 | dealt, flash frame |
| `magnolia-grandiflora-little-gem.jpg` | Galaxy S24, 3000x2776, 2026-10-07 13:01 | aeaaa6e3fb76851f | dealt, card photo |
| `magnolia-grandiflora-little-gem-buds.jpg` | Galaxy S24, 3000x4000, 2026-10-07 13:00 | 75077bbc79545d27 | dealt, flash frame |
| `prunus-sargentii.jpg` | Galaxy S24, 3000x4000, 2026-10-07 13:03 | 6d206902c63f4cd0 | dealt |
| `malus-baccata-braendkjaer.jpg` | Galaxy S24, 3000x4000, 2026-10-07 13:03 | 4bc00c7180e95b9a | dealt, card photo |
| `malus-baccata-braendkjaer-fruit.jpg` | Galaxy S24, 3000x4000, 2026-10-07 13:03 | e755d006aa737f2d | dealt, flash frame |
| `prunus-amanogawa.jpg` | Galaxy S24, 3000x4000, 2026-10-07 13:06 | c1c57b1f6e7da76b | dealt after the crop above |
| `prunus-pink-perfection.jpg` | Galaxy S24, 3000x4000, 2026-10-07 13:06 | fe190b1ece5c6bf6 | dealt at his call; the tree has two tags |
| `liquidambar-styraciflua-worplesdon.jpg` | Galaxy S24, 3000x4000, 2026-10-07 13:07 | 1cb1c65e056f5231 | dealt |
| `malus-atrosanguinea-gorgeous.jpg` | Galaxy S24, 3000x4000, 2026-10-07 13:08 | fde0835b0675a1d7 | dealt |
| `cornus-kousa-schmetterling.jpg` | Galaxy S24, 3000x4000, 2026-10-07 13:09 | ca0c2e5bbc75330a | dealt |
| `pyrus-calleryana-chanticleer.jpg` | Galaxy S24, 3000x4000, 2026-10-07 13:10 | 0b2347621b909a6c | his original, replaced on the card by his crop |
| `pyrus-calleryana-chanticleer-crop.jpg` | Galaxy S24 crop, 2244x2714, 2026-10-07 13:10 | d1a55ec2aef3547a | the card photo since that evening |

Every photo here is byte-identical to what he sent.

## Checks

Batch stored, r370: data-audit 0 problems, plant-sense --strict "No card contradicts itself", deck-audit
PASS (557 cards), audit-layout "all cards clean", fast set 9/9. Full gate 18/18.

Drop 1 dealt, r371: data-audit 0 problems, plant-sense --strict "No card contradicts itself", photo-credits
0 unrecorded, deck-audit PASS (559 cards), audit-layout "all cards clean", fast set 9/9. Both cards were
rendered at 390x844 @2x and are whole. The Penstemon was shot in both frames.

Drop 2 dealt, r372: data-audit 0 problems, plant-sense --strict "No card contradicts itself", photo-credits
0 unrecorded, deck-audit PASS (560 cards), audit-layout "all cards clean", fast set 9/9. The Magnolia was
rendered at 390x844 @2x in both frames, and both are whole.

Drop 3 dealt, r373: data-audit 0 problems, plant-sense --strict "No card contradicts itself", photo-credits
0 unrecorded, deck-audit PASS (563 cards), audit-layout "all cards clean", fast set 9/9. All three cards and the
crab apple's flash frame were rendered at 390x844 @2x and are whole, and the code band is out of the Amanogawa.
The bloom strips on Sargent's cherry and the crab apple show the split-peak span (Apr–Nov) described above.

Drop 4 dealt, r374: data-audit 0 problems, plant-sense --strict "No card contradicts itself", photo-credits
0 unrecorded, deck-audit PASS (566 cards), audit-layout "all cards clean", fast set 9/9. All three cards were
rendered at 390x844 @2x and are whole. The Gorgeous card carries the front hazard flag, so the reworded
toxicity line reads as Toxic.

Drop 5 dealt, r376: data-audit 0 problems, plant-sense --strict "No card contradicts itself", photo-credits
0 unrecorded, deck-audit PASS (571 cards), audit-layout "all cards clean", fast set 9/9. The card was rendered
at 390x844 @2x and is whole. Its bloom strip shows the split-peak span (Mar–Nov) described above. #8's renamed
entry passes check-plant-json, and compare-double's only hit is the known word match on Heuchera CHAMPAGNE.

Pink Perfection dealt at his call, r379: data-audit 0 problems, plant-sense --strict "No card contradicts
itself", photo-credits 0 unrecorded, deck-audit PASS (577 cards), audit-layout "all cards clean", fast set 9/9. The
card was rendered at 390x844 @2x and is whole.

Chanticleer re-photo, r380: data-audit 0 problems, plant-sense --strict "No card contradicts itself",
photo-credits 0 unrecorded, deck-audit PASS (577 cards), audit-layout "all cards clean", fast set 9/9. Rendered
before and after at 390x844 @2x, the new frame is whole.

## Fact check (2026-10-08)

See the fact-check section in `../2026-10-07b/README.md`. These cards need no fitting fixes. Facts flagged
for Oscar and left as sent:
- Prunus sargentii's peak reads Apr-May / Oct-Nov. Keele and van den Berk give flowering in early April, and
  Trees and Shrubs Online gives autumn colour in late September to early October.
- Malus 'Braendkjaer' reads 6–10 m. Van den Berk, the only cultivar source, gives 4–6 m.

Doubtful but not shown wrong:
- RHS lists the Escallonia as "sheltered", which sits awkwardly with the card's "coastal".
- 'Pink Perfection' and 'Pink Champagne' have double flowers, and no source supports "wildlife" for them.
- Chanticleer colours late, around November.
- RHS lists Magnolia 'Little Gem' for any pH, while the card says neutral to acid.
