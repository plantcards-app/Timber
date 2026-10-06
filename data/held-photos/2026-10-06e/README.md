# 2026-10-06e — Weigela 'Nana Variegata' photo replaced by two flashing frames; a second frame for Verbena bonariensis

Oscar, evening of 2026-10-06, no JSON:

- Two photos with "Two flash between photos for weigla nana verigata the existing photo sucks all eddited
  and stuff simiple take it out and make it a flash between these 2"
- One photo, sent mid-job, with "Also another flash between photo for Verbena bonariensis"

| original (byte-identical) | card | camera, size, taken | became | sha256 (first 16) |
|---|---|---|---|---|
| `weigela-florida-nana-variegata.jpg` | Weigela florida 'Nana Variegata' | Galaxy S24, 4000x3000 orientation 6 (upright 3000x4000), 2026-09-29 11:36 | the card photo, `photos/weigela-florida-nana-variegata.jpg` (replaced) | c717c8517c342a45 |
| `weigela-florida-nana-variegata-white-flowers.jpg` | Weigela florida 'Nana Variegata' | Galaxy S24, 3000x4000, 2026-09-29 11:36 | the flash frame, `photos/weigela-florida-nana-variegata-white-flowers.jpg` | c9814c1d1135c77f |
| `verbena-bonariensis-flowerhead.jpg` | Verbena bonariensis | Galaxy S24, 3000x3266, 2026-10-05 11:28 | the flash frame, `photos/verbena-bonariensis-flowerhead.jpg` | 10d244cd829f553c |

A byte search for C2PA, JUMBF, content-credential and AI-generation markers found none in any of the three
files. All were staged as shot, with no crop.

## Weigela — a replacement, at his word

The old card photo was a cut-out of the variegated leaves on a black background, with no flowers in it. He
asked for it to come out. So, by the replacement routine (Clematis, Eve Price, Viburnum davidii):

- His first photo, pale-pink bells over cream-edged, red-rimmed leaves, went through the canvas pipeline as
  the card photo. The pipeline turned the orientation-6 file upright, 3000x4000 to 1200x1600.
- The card derivative was rebuilt and the CREDITS entry rewritten with the replacement note.
- The old master stays in git history.
- There was no focus override for the old photo, so the new one frames at the default.

His second photo, near-white bells with pink buds over the same leaves, went on as the flash frame with
`tools/add-swap.js --as white-flowers`. The order follows his message: first photo as the card photo, second
as the frame. The first also matches the card's "pale-pink bells". No card text changed.

## Verbena — a second frame

`tools/add-swap.js --as flowerhead`. The new frame is one whole flower head, close up: purple florets on
magenta spikes browning at the base, on hairy grey-green stems. The card photo stays: his cluster with a
honeybee taken by a white crab spider, focus 50% 10%. No card text changed.

## Checks

Both cards were rendered at 390x844 @2x, reached through `goToCard`, with each frame shot while the cycle was
frozen. All three new frames are upright and whole in the photo window. The Weigela flowers sit above the
plaque, and the outermost petal tips meet the window's side edges. Results: deck-audit PASS (549 cards),
audit-layout "all cards clean", fast set 9/9, build r363.
