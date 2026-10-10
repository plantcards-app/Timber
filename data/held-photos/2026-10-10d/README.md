# 2026-10-10d — Ivory Blush again: a double JSON for the dealt card, and the green flower confirmed as the card

Oscar, 2026-10-10, after the 2026-10-10c batch: two photos and one JSON, with "That second hellebore isn't from the
other Ice N' Roses collection, it's this variety; first card is a pinkish flower, second is the greeny one."

- `batch-as-sent.json` is his JSON verbatim: Helleborus × glandorfensis 'HG 1416' (HGC ICE N' ROSES IVORY BLUSH),
  the cultivar dealt this morning from the 2026-10-10 batch.
- `helleborus-glandorfensis-ice-n-roses-ivory-blush-hg-1416-closeup.jpg` is his first photo, byte-identical
  (sha256 2d1b1632…): Galaxy S24, 4000x3000, EXIF rotation 3, taken 2026-10-09 15:48:50, no C2PA or AI-edit markers.
- His second photo is byte-identical (sha256 05b4ca6b…) to the green frame already stored in `../2026-10-10/` (taken
  15:48:40), so it is not stored twice.
- `…-green-crop.json` is the crop applied to that green frame to make it the card photo.

## The double (compare-double, rules of NEW-SESSION.md)

compare-double matched the dealt card by genus and the code 'HG 1416'. Nothing on the card is blank, the six ratings
are identical, toxicity prints Toxic on both sides, and the prose differs without saying anything new, so prose,
cvs and compliance stay with the dealt card. Two disagreements, both kept on the card by the rules:
- **hardiness H5 (card) vs H7 (incoming).** The hellebore siblings split H6×2, H5, H7, H4, so a dealt card keeps its
  value. His `uncertain` note says H7 comes from one UK nursery with no RHS cultivar rating; the morning's note says
  the same about the card's H5. [Unverified] either way; his call if he wants H7.
- **spread 80 cm (card) vs 50–60 cm (incoming).** The morning's fact check already doubted the 80 cm (a planting
  distance); the rule still keeps the dealt value. His call.
- pollination: "not applicable; grown for ornamental winter flowers" (card) vs his insect-pollination prose; same
  meaning, the card's class word stays.

Nothing was applied.

## The photos — the pairing of this morning corrected

This morning's batch paired two hellebore photos with the one Ivory Blush JSON: the pink-flushed flower (15:48:16) as
the card photo and the green one (15:48:40) as a flash frame, with the doubt recorded that the card text says
ivory-white. His message makes them two plants: the green-white one is Ivory Blush, the pink one is "the first card",
a variety he has not named.

So, on his word:
- The pink-flushed photo came off the Ivory Blush card. It is shelved in `../2026-10-10/` as
  `unmatched-hellebore-pink-flushed.jpg` (git mv, history kept; the old card master stays in commit bdbda1b) until he
  names it. [Unverified] what it is; "the other Ice N' Roses collection" in his words.
- The green frame became the card photo: cropped with `tools/reframe-photo.js` to `…-green-crop.json` here (22% off
  the left, 5% off the right, aspect 0.973, no labels, original pixels only) and staged through the same canvas
  pipeline as add-plant (1200x1233). The old `-green` master and derivative are removed, since their content is now
  the master.
- His new close-up is the flash frame, added with `tools/add-swap.js --as closeup` (PHOTO_SWAP, CREDITS entry).
- CREDITS: the master's note records the replacement and points at the shelved pink photo.

Deck unchanged at 609, r403. check-boot OK (PHOTO_SWAP 43), data-audit 0 problems, plant-sense --strict clean,
photo-credits OK, deck-audit PASS, audit-layout clean, fast set 9/9. The card was rendered at 390x844 at 0.6 s, 4.2 s
and 7.8 s: whole, no label, and it flashes between the cropped green flower and the close-up.
