# 2026-10-26 — Forge download batch-2026-10-26_1: 3 drafts, 2 dealt, 1 held; 1 viola photo with no name (deck 692 → 694, hold 83 → 84, r433)

Oscar sent `batch-2026-10-26_1.json` (three Forge drafts, written without web access) and four photos, with no words.
`compare-double`: all three are new. Its PROBABLE match of the wallflower to Gaultheria mucronata (the word "mixed")
is false and was ignored.

| Photo | Placed as | Why |
|---|---|---|
| 01 → `unmatched-viola-lilac-cream.jpg` | **not dealt, shelved** | a viola (lilac upper petals, cream and butter-yellow lower petals, dark whiskers). None of the three JSONs is a viola, and it is not the deck's Viola 'Columbine' (violet streaked white). The Forge batch holds a fourth card, "Purple Wing Teardrops Apricot", left out of the JSON file: [Inference] this photo, Viola cornuta 'Teardrops Apricot Purple Wing' (Sarah Raven, Marshalls). Not yet dealt. |
| 02 | Physocarpus opulifolius ANGEL GOLD ('Minange') | lobed, toothed lime-gold leaves; the only ninebark in the batch. [Inference] by appearance. |
| 04 | Clerodendrum bungei, card photo | large toothed heart-shaped leaves, purple veins, dark stems, a dense reddish flower-bud head. [Inference] by appearance. |
| 03 | Clerodendrum bungei, flash frame (`-shoot`) | the same plant from above. |

Erysimum 'Sugar Rush Mixed' had no photo and went on hold with `ingest-batch`.

## Fact check (second pass, `data/second-pass/2026-10-26/`)

Search snippets only; rhs.org.uk pages are proxy-blocked. The checking was done in this session, not by separate agents.

| Card | Field | Draft | Carried | Source |
|---|---|---|---|---|
| Wallflower Sugar Rush Mixed | hardiness | H4 | **H5** | RHS 351299 (Erysimum Sugar Rush Series) |
| | height × spread | 30 × 25 cm | **10–50 × 10–50 cm** (RHS band) | RHS 351299; nurseries say about 30 × 30 cm |
| | peak | Mar-May | Mar-May | RHS gives spring into summer, sometimes autumn, no months; sold as also flowering in autumn |
| Ninebark Angel Gold | hardiness | H7 | H7 | RHS 338082 |
| | height × spread | blank | **1.5–2.5 × 1–1.5 m** | RHS 338082 |
| | compliance | "PBR… grant number not confirmed" | PBR protected (deck wording) | RHS 338082 lists 'Minange' PBR |
| Glory Flower | hardiness, size | H4, 1.5–2.5 × 1.5–2.5 m | agrees | RHS 29541 |
| | toxicity | No known hazard. | **Handle with care** wording | no RHS or ASPCA listing for C. bungei found; Pet Poison Helpline's genus entry (Glory Chain) rates Clerodendrum mild: stomach upset if eaten, contact dermatitis |

Fitted by `fit-2026-10-26.js` (`batch-corrected.json` → `batch-new.json`): the ninebark's common name 'Ninebark' made
unique as 'Ninebark Angel Gold' (the deck has five other ninebarks), its visual line takes the RHS copper spring flush
and drops the "Apr-Sep" that was inside it. Each change is in the card's `uncertain`.

[Unverified], open for Oscar:
- the ninebark photo shows lime-green leaves, where the card says bright golden-yellow. [Inference] golden ninebarks
  fade to lime late in the season, and this photo was taken in late October.
- the wallflower's accepted name is the series, Erysimum Sugar Rush Series; the label's 'Sugar Rush Mixed' is kept (label rule).
- Physocarpus toxicity: no ASPCA listing reached directly; "No known hazard." kept.

## Tooling note

`sharp` was missing in this container, so `add-plants-bulk` aborted on the photo-credits check and `add-swap` could not
build the derivative. Fixed with `npm i -g sharp`, two CREDITS entries in the shape of the 2026-10-24 ones, then
`NODE_PATH=/opt/node22/lib/node_modules node tools/optimise-photos.js`. The rows the bulk tool had already inserted were kept.

Renders of both cards looked at (Clerodendrum flashes to its second frame); no page errors. Full gate 18/18 (`--jobs 3`).
