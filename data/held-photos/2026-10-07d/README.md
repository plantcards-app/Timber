# 2026-10-07d — four GPT entries for four held photos: all dealt

Oscar's GPT batch, the evening of 2026-10-07, answering the four held 2026-10-07b photos that had a name but no
card data: a (Sweet Tea), c (the variegated string of hearts), d (Sugar and Spice) and i (Sedum lineare).
`batch-as-sent.json` is the paste exactly as supplied. GPT's note with it: "I've used Sedum lineare 'Variegatum'
for the cream-edged variety. Hardiness and cultivar information were checked against RHS records." And: "The
numerical ratings are Timber estimates." `batch-corrected.json` is the same four entries fitted to the card
conventions. The photos are the 2026-10-07b originals. Their files and hashes are listed in that folder's
README, and they are not copied here.

## What fitting changed (batch-corrected.json)

| # | field | as supplied | as it went in | why |
|---|---|---|---|---|
| all | toxicity | e.g. "No significant toxicity commonly reported. …" | "No known hazard; no significant toxicity commonly reported. …" | Without the prefix, "toxicity" and "non-toxic" match the safety ladder's /toxic/, so all four would print **Toxic**. With it they print "No known hazard", the deck's existing form (two cards already read "No known hazard; no significant toxicity commonly reported."). Checked on the live ladder: harmful as sent, clear as fitted. |
| 4 | cvs | "" | "RHS: Ceropegia linearis subsp. woodii 'Lady Heart'; syn. Ceropegia woodii 'Variegata'" | The RHS accepted name (rhs.org.uk/plants/153282), in the Sedum 'Tricolor' form. The card keeps the trade name his label genus points to. |
| 4 | spread | "0.5-2m trailing" | "0.5–2 m" | The size field is "H × W". The trailing habit is already in the visual and uses. |

Applied across the four:
- **hardiness:** the rating alone (H1C → H1c). The band and the supplied note are joined into hardinessNote.
- **sizes:** "30-50cm" → "30–50 cm", with en dashes.
- **aspect:** GPT gave light prose, not compass facings, so the facing is derived from sunNeed (fit-incoming's
  `deriveFacing`), as in 2026-10-07b.
- **soil and soilWarning:** short forms within the 26 / 44 panel budgets. The full wording stays in
  `batch-as-sent.json`.

Everything else is as supplied, prose and ratings included. Each entry passed `check-plant-json`. `compare-double`
found no doubles. Its PROBABLE hits were single shared words: "bells", "sugar" and "hearts".

## Cards

| # | card | photo (2026-10-07b) |
|---|---|---|
| 1 | × Heucherella 'Sweet Tea' | `heucherella-sweet-tea.jpg` (a) |
| 2 | Tiarella 'Sugar and Spice' | `tiarella-sugar-and-spice.jpg` (d) |
| 3 | Sedum lineare 'Variegatum' | `sedum-lineare.jpg` (i) |
| 4 | Ceropegia woodii 'Variegata' | `unmatched-photo-7-variegated-string-of-hearts.jpg` (c) |

The deck goes from 572 to 576 at r378.

[Unverified] doubts, carried as written:
- **Sweet Tea's label:** he wrote "heucherella sweet tea", then "Heuchera sweat tea". The RHS name is × Heucherella
  'Sweet Tea' (rhs.org.uk/plants/286105), and the card carries it until his label says otherwise.
- **Sweet Tea's colour:** the photo is coral-pink, while the visual says copper-orange and burnt amber. The RHS notes
  the colour softens in autumn and winter, and the photo was taken in October.
- **Sedum lineare's label:** he wrote "sedum lineare". GPT took 'Variegatum' for the cream-edged plant in the
  photo. Whether the label says so is not known here.
- **Sugar and Spice is H7,** while the deck's Tiarella 'Pink Skyrocket' (2026-10-07b JSON) is H6. Both are as supplied.

## The stonecrop on plant-sense's KNOWN list

`plant-sense --strict` failed on Sedum lineare 'Variegatum': `pest-vs-prose`, pestRisk 4 against "Susceptible to
crown and root rot in persistently wet conditions". Both sides are his supplied research, which is the VERIFY-QUEUE
item 85 shape. It is added to `KNOWN` in `tools/plant-sense.js` and as a row in VQ 85, and neither side of the card
changed.

## Checks

At r378: data-audit 0 problems, plant-sense --strict "No card contradicts itself" (the stonecrop under KNOWN),
photo-credits 0 unrecorded, deck-audit PASS (576 cards), audit-layout "all cards clean", fast set 9/9. All four
cards were rendered at 390x844 @2x and are whole.
