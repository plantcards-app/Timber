# 2026-10-09 — Weeping Silver Pear dealt; Spiraea 'Goldflame' (held) dealt with a flash frame

Oscar, 2026-10-09: a two-entry JSON in the full PLANT-BRIEF shape (Pyrus salicifolia 'Pendula', Spiraea japonica
'Goldflame'), with "Two photos". Three photos came: one of the pear and two of the spiraea. `batch-as-sent.json`
is his JSON verbatim. In `batch-corrected.json` the only change is sizes in the "a–b m" / "a–b cm" form. Every
other field already fits the card: the soil lines are inside budget, the facings are compass words, and the
`foliage` prose leads with the class word as PLANT-BRIEF asks.

| file | card | camera, size, taken | sha256 (first 16) |
|---|---|---|---|
| `pyrus-salicifolia-pendula.jpg` | Weeping Silver Pear, card photo | Galaxy S24, 4000x3000 (rot 6), 10:39:00 | 075814015e2965eb |
| `spiraea-japonica-goldflame.jpg` | Spiraea 'Goldflame', card photo | Galaxy S24, 4000x3000 (rot 6), 10:40:27 | 7c16f34520db8215 |
| `spiraea-japonica-goldflame-buds.jpg` | Spiraea 'Goldflame', flash frame | Galaxy S24, 4000x3000 (rot 6), 10:40:32 | 8f8c3a5a30d6fa5e |

None has C2PA or AI-edit markers, and none shows people, labels or fingers. All are byte-identical to what he sent.

## Pyrus salicifolia 'Pendula' — new, dealt

compare-double's "PROBABLE" match to the Golden Weeping Willow was the word "weeping" alone, so this is a new
card. It was dealt with `add-plants-bulk.js --quick`, and the credit was set with photo-credits. Its toxicity
sentence ("should not be eaten") prints the Harmful rung, as he wrote it. The soil warning is blank in his JSON,
so the card shows the soil line alone. His `uncertain` note says RHS gives 8–12 m × 8 m+ against the 5–6 m he
used, and the card carries his 5–6 m.

## Spiraea japonica 'Goldflame' — double for a held card, dealt

This was an exact latin match for the held card, so the NEW-SESSION double rules applied:
- Taken from the incoming JSON:
  - toxicity "No known hazard.", pollination, stockForm and clay, which were blank on the card (rule 1)
  - peak Apr-Sep against the card's Mar-Aug. No sibling settles it, and a held card takes the newer research
    (rule 3).
  - visual, water, prune, resilience, uses, hardinessNote and foliage (rule 4, prose on a held card)
  - cvs, because the card's `'Goldflame'` was only its own name, and his lists three related cultivars
- Kept from the card:
  - common name and hue 340 (rules 5 and 6)
  - all four ratings, since each was within one icon (rule 2)
  - size, the same 0.5–1 m written another way
  - soil and aspect, which are layout fields (rule 7)

Applied with `compare-double.js --apply`. Then `deal-plant.js` moved it to the deck with the first photo, and
`add-swap.js --as buds` added the second.

plant-sense then flagged pest-vs-prose: the new resilience line says "generally pest-free … occasionally
susceptible to honey fungus" while pestRisk is 3. That is the same false alarm as the four honey-fungus cards
already under VERIFY-QUEUE item 85, so it is added to KNOWN and to the item 85 table. No card value changed.

Deck 578 -> 580 at r391. data-audit 0 problems (deck 580, hold 74), plant-sense --strict "No card contradicts
itself", deck-audit PASS, audit-layout clean, check-boot OK, fast set 9/9. Every card and frame was rendered at
390x844 and is whole.

## Fact check (2026-10-09)

A research agent checked both entries, using search snippets because the proxy blocks fetches. One point was
wrong, and I re-checked it by hand:
- **Pyrus, peak:** May-Sep leaves out the blossom. Trees and Shrubs Online (Bean) gives "flowers … produced in
  April", Red Butte Garden gives April, and van den Berk gives April–May. The peak is now **Apr-Sep** (r392), under
  Oscar's standing "yes, if they seem necessary".

Doubtful, left as sent:
- **Pyrus, height:** 5–6 m against RHS's 8–12 m. UK nurseries give 3–7 m, and his `uncertain` note already
  states the split.
- **Spiraea, "No known hazard":** ASPCA has no Spiraea entry either way.
- **Spiraea, cvs:** Golden Princess is RHS's trade designation for 'Lisp'.
- **Spiraea, visual:** "golden summer foliage" is a slight stretch, since RHS has yellow turning mid-green.

Confirmed:
- Pyrus is H6, has thorns on its short shoots (RBG Victoria flora), and has small, hard, unpalatable fruit.
- Spiraea is H6 and 0.5–1 m, with pink flowers mid to late summer, a hard spring prune to 15 cm, and is
  generally pest-free except for honey fungus.
