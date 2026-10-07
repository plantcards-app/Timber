# 2026-10-07c — 13 GPT entries: twelve new cards fitted and waiting for photos, one Aronia double

Oscar pasted this batch on 2026-10-07 with no text. `batch-as-sent.json` is the paste exactly as supplied
(13 entries). `batch-corrected.json` holds the twelve new entries fitted to the card conventions. Entry 13,
Aronia melanocarpa, is already a dealt card, so it went through the double rules instead (below). No photos
came with the batch, so no new card is dealt yet.

## What fitting changed (batch-corrected.json)

| # | as supplied | as it went in | why |
|---|---|---|---|
| 2 | Escallonia [Golden Carpet] ('Alcaura') | Escallonia GOLDEN CARPET ('Alcaura') | The trade name with its denomination, in the form of the deck's Escallonia laevis PINK ELLE ('Lades'). |
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
- **#8 Prunus 'Ichiyo'**, common name "Pink Champagne Cherry". GPT's cvs line says 'Pink Champagne' is a synonym
  of 'Ichiyo'. [Unverified] The label wording is not known here. The label name is the card name, so the
  latin may change when the label photo comes.
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

## Photos

None yet. The twelve wait for Oscar's photos, which are asked for four at a time in batch order.

## Checks

At r370: data-audit 0 problems, plant-sense --strict "No card contradicts itself", deck-audit PASS (557
cards), audit-layout "all cards clean", fast set 9/9.
