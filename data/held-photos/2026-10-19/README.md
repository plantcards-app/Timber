# 2026-10-19 — Card Forge batch `2026-10-19`: 9 drafts, 8 held, 1 a dealt double (r413)

Oscar, 2026-10-19: "New batch from the Timber Card Forge artifact … Batch: 2026-10-19 — 9 cards ready (0 with a
photo, 9 without)." No photos, so every card goes on hold. This is the first Forge batch checked with the second
pass (`SECOND-PASS.md`) instead of by hand.

Files:
- `forge-cards.json` — the 9 card documents as pulled from the artifact's `cards` collection (ids, Oscar's typed
  names, the drafts). The query listing showed every document at version 2; the write-back is pinned to that.
- `batch-as-sent.json` — the 9 drafts in card order.
- `batch-checked.json` — after `node tools/second-pass.js apply … --batch`: RHS bands and sizes applied, each with a
  line in `uncertain`. The brief, verdicts and `REPORT.md` are in `data/second-pass/2026-10-19/`.
- `batch-corrected.json` — the 8 held cards after the hand fixes in `fit-2026-10-19.js` (kept here), which names
  every change and why in each card's `uncertain`. (Hold cards do not carry `uncertain`; this file does.)

## Pull, as CARD-FORGE.md says

`ArtifactData` query on `cards` where `batch == "2026-10-19"`: 9 documents, all version 2, none with `dealtAt`,
none with photos. `batches/2026-10-19` was version 1 with `sessionId: null`. All 9 passed `check-plant-json` as
sent (three with blank sizes, which the validator only notes).

## compare-double

**Euonymus alatus** is an exact double of the deck's dealt Euonymus alatus. Its blank fields (foliage, toxicity,
pollination, stockForm, clay) were taken from the checked draft; the card keeps everything else, and its H6 is what
the RHS gives (the draft's H7 is not). The PROBABLE hits were one shared word each (Coronilla → Daphne PINK
FRAGRANCE, Acer 'Red Flamingo' → Salix 'Hakuro-nishiki'), not doubles. Diervilla matched the held COOL SPLASH card
on the common name "Bush Honeysuckle" only; a different cultivar, so the new card carries its cultivar in the common.

## Oscar's labels against the names carried

| Typed in the Forge | Carried | Note |
|---|---|---|
| Vitis Cognetiae Sp | Vitis coignetiae | spelling; species, no cultivar (RHS 19030, AGM) |
| Coronilla Temptations Fabulous Fragrance | Coronilla 'Temptations Fabulous Fragrance' | **not found anywhere** — see below |
| Hedera alg. Gloire de Marengo | Hedera algeriensis 'Gloire de Marengo' | RHS 82862; H. canariensis 'Gloire de Marengo' is a misapplied synonym |
| Diervilla KODIAK®MIXX | Diervilla × splendens KODIAK MIXX ('G2X88544VAR') | one cultivar, not a mix; breeder's form |
| Helichrysum Korma | Helichrysum italicum 'Korma' | RHS 169611, PBR |
| Cotoneaster sue. Coral Beauty | Cotoneaster × suecicus 'Coral Beauty' | RHS 47155, AGM |
| Berberis thunbergii Rose Glow | Berberis thunbergii f. atropurpurea 'Rose Glow' | RHS 91926, AGM |
| Euonymus alatus Runner | — (double of Euonymus alatus) | no cultivar 'Runner'; see below |
| Acer conspicuum red flamingo | Acer × conspicuum 'Red Flamingo' | RHS 300946 accepted name is Acer 'Red Flamingo' (v); the label's form kept |

## Fact check (second pass, one brief of 9; search snippets only, rhs.org.uk itself is proxy-blocked)

Tally from `REPORT.md`: 17 agree, 9 corrected, 6 filled, 4 reported, 1 safety-rung question.

| Plant | Hardiness | Height × spread | Source |
|---|---|---|---|
| Vitis coignetiae | H6 → **H5** | >12 m × 4–8 m → **>12 m × 2.5–4 m** | RHS 19030 |
| Coronilla 'Temptations Fabulous Fragrance' | H4 agrees (species) | blank → **0.5–1 m × 0.5–1 m** (species) | RHS 98759, C. valentina subsp. glauca |
| Hedera algeriensis 'Gloire de Marengo' | H3 → **H5** | 4–8 m × 2.5–4 m → **2.5–4 m × 2.5–4 m** | RHS 82862 |
| Diervilla KODIAK MIXX | H6 kept [Unverified] | 1–1.2 m × 1–1.2 m → **90 cm × 70 cm** [Unverified] | no RHS page; treesandshrubsonline H6 for D. × splendens, RHS H5 for the parent species; provenwinners.eu sizes |
| Helichrysum italicum 'Korma' | H4 agrees | blank → **0.5–1 m × 0.5–1 m** | RHS 169611 |
| Cotoneaster × suecicus 'Coral Beauty' | H6 agrees | 0.5–1 m × 1.5–2.5 m agrees | RHS 47155 |
| Berberis 'Rose Glow' | H7 agrees | 1–1.5 m × 1–1.5 m agrees | RHS 91926 |
| Euonymus alatus (double) | H7 → RHS H6 = the dealt card | blank → RHS 1.5–2.5 m × 1.5–2.5 m = the dealt card | RHS 6969 |
| Acer × conspicuum 'Red Flamingo' | H6 → **H5** [Unverified] | 4–8 m × 2.5–4 m → **4–8 m × 4–8 m** [Unverified] | RHS field not readable; treesandshrubsonline and worldplants report the RHS rating H5, the 2026-10-18 check read H5 and 4–8 × 4–8 from an RHS snippet (that batch's README) |

Peaks: all within the RHS seasons; none changed. Toxicity: RHS flags support the printed Toxic on Vitis (dogs),
Hedera (eaten + skin), Cotoneaster and Euonymus (harmful if eaten; ASPCA for Euonymus); Berberis prints Handle with
care where the RHS "potentially harmful" would also support Toxic (left as drafted); Helichrysum and Diervilla print
clear on the absence of any listing. Two rewordings:
- **Coronilla**: the draft's "cardiac glycosides" is wrong; the documented Coronilla toxin is 3-nitropropionic acid
  (RCP London medicinal garden), poisonous to horses. Reworded; still prints Toxic as a precaution.
- **Acer**: the draft printed Toxic on the word "toxic" in a sentence saying it is not known to harm anyone. No RHS
  flag; the ASPCA lists only Acer rubrum for horses; atypical myopathy is A. pseudoplatanus / A. negundo. Reworded
  to print Handle with care (horses, as a precaution).

Compliance, all plants: the UK plant passport is required because they are plants for planting moved in
professional trade (gov.uk), not because of any host status; the lines now say so. Vitis is in Defra's medium-risk
Xylella tier. Cotoneaster × suecicus is **not** on Schedule 9 (only bullatus, horizontalis, integrifolius,
microphyllus, simonsii); fireblight-specific conditions apply only to export into EU protected zones. Acer is the
main Asian longhorn beetle host (pest absent from GB, notifiable). Helichrysum 'Korma' is PBR (RHS suffix; grant
number not found). Diervilla Kodiak Mixx: breeder's propagation prohibition; PBR grant not confirmed. Berberis: no GB
restriction found.

## Hand fixes beyond the tool (all in `fit-2026-10-19.js`, each with an `uncertain` line)

- Vitis: cvs filled with 'Claret Cloak' ('Frovit') (RHS 115590); compliance reworded.
- Diervilla: identity corrected from "a retail mix of Kodiak colours" to the single variegated cultivar
  'G2X88544VAR' (GardenGenetics / Spring Meadow, Plantarium gold medal; trade press and provenwinners.eu, no RHS
  page): latin, common, hue 20 → 90, foliage, visual and cvs (with the series' codes) rewritten from those
  descriptions. [Unverified] beyond those listings.
- Hedera: uses "ground cover" → "carpeting under trees" (plant-sense reads ground cover as a dwarf claim against a 4 m
  size).
- Berberis: resilience 180 → 158 characters (budget 165), meaning kept.
- Helichrysum, Cotoneaster, Acer: compliance lines as above.
- sunMin stays blank on Coronilla and Helichrysum (the Forge sent null); rootSize blank on all, as sent.

## Open for Oscar

1. **Coronilla 'Temptations Fabulous Fragrance'** does not exist in any source found (no cultivar, trade name,
   series or PBR record; the only 'Temptation' plants are a Skimmia and a Clematis). [Inference] a retail strapline on
   Coronilla valentina subsp. glauca or its 'Citrina'. The label's name is kept on the held card with the species'
   figures. A label photo would settle it.
2. **Euonymus alatus 'Runner'**: no such cultivar. [Inference] the label means 'Blade Runner' (RHS 280088, 1.5–2.5 m,
   a compact rounded form sold by Coolings, Gardening Express and others). The deck has E. alatus and 'Compactus'; a
   'Blade Runner' card would be new. Check the label.
3. **Acer 'Red Flamingo' H5** rests on two sites reporting the RHS rating and last batch's snippet, not on the RHS
   page itself. One nursery (Paramount) says H6.

## Second-pass tool fixes from this run

- A source reading "not RHS", "RHS-style" or "RHS field not seen" matched the RHS test and would have corrected
  Diervilla's sizes and Acer's spread from nursery figures. `isRHS()` now excludes those phrasings.
- Hardiness is now corrected only from an RHS-sourced verdict (reported otherwise), the same as sizes.
- The generated hardinessNote cites the RHS id, not the checker's whole source sentence, and no longer adds a
  sourceless `uncertain` line of its own.

## State

Hold 114 → 122 (8 new), deck 635 unchanged; the Euonymus double's five blank fields filled. r413. Forge write-back:
`dealtAt`, `dealtAs: "held"`, `dealtRev`, `checkedOnline: true` on the 8; `sessionId` on the batch; `deck/index`
refreshed. The double's document is left as it was (neither dealt nor held by this session), as in 2026-10-18b.
