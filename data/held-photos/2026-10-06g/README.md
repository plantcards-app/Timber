# 2026-10-06g — Pteris nipponica: the collage's two photos as frames beside the collage

Oscar, evening of 2026-10-06, two photos, no JSON: "For silver ribbon fern let's try using the same ohotos that
are in the collage as flash betweens partially so I can judge if I dislike the collages, and want to move away
from them so use the existing collage as one flah betwen and then use these two aswell".

So the card keeps its collage as the card photo and cycles through three frames: collage, then his first photo,
then his second. The entry has two alts, built with `tools/add-swap.js` twice (`--as backlit`, then
`--as fronds`). This is a test of collages against single photos, at his request. No card text changed.

| original (byte-identical) | camera, size, taken | became | sha256 (first 16) |
|---|---|---|---|
| `pteris-nipponica-backlit.jpg` | Galaxy S24, 4000x3000 orientation 6 (upright 3000x4000), 2026-10-06 16:51:39 | frame two, `photos/pteris-nipponica-backlit.jpg`: as shot, one box blurred | 57962905a7443cee |
| `pteris-nipponica-fronds.jpg` | Galaxy S24, 4000x3000 orientation 6 (upright 3000x4000), 2026-10-06 16:51:38 | frame three, `photos/pteris-nipponica-fronds.jpg`: as shot | 3ca999845032a5ea |

A byte search for C2PA, JUMBF, content-credential and AI-generation markers found none in either file.

## The colleague, the logo and the blur

The first photo shows a colleague behind the fern, in her work uniform with the employer's logo and a badge.
The first version (commit 6a4c1c8) cropped her out by the v14.34 rule, and also trimmed a blurred strip of the
same uniform from the top of the second photo. Oscar's reply, verbatim but for the employer's name: "No just
blur thr [employer's] image keep the woman she said it was ok". So both photos now go in as shot, and the one
change is a blur over the logo.

- **The box.** `pteris-nipponica-backlit-blur.json` covers the four coloured squares, the name, the line under
  it and the badge below: x 0.52-0.61, y 0.157-0.24 of the upright frame, 270x332 px. It was measured on the
  full-resolution frame, and no fern pixels fall inside it.
- **The blur.** Gaussian, sigma 28 px at full resolution, feathered over 14 px at the box edges. Every pixel
  outside the box is untouched. At the card's size the logo reads as a soft smudge with no letters or squares.
- **The steps.** sharp auto-orient, then the blurred box composited back, written at JPEG 95, then the canvas
  pipeline at 1200 px wide, then the card derivative.
- **The second photo** went through the canvas pipeline as shot. Its blurred strip of uniform in the top-right
  corner sits under the hardiness shield on the card.

## Checks

The card was rendered at 390x844 @2x, reached through `goToCard`, with each frame shot while the cycle was
frozen. All three frames are whole. On frame two she is behind the fronds and the logo is unreadable. Results:
deck-audit PASS (549 cards), build r366. The layout audit and fast set results are recorded in the ledger
entry.
