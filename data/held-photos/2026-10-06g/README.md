# 2026-10-06g — Pteris nipponica: the collage's two photos as frames beside the collage

Oscar, evening of 2026-10-06, two photos, no JSON: "For silver ribbon fern let's try using the same ohotos that
are in the collage as flash betweens partially so I can judge if I dislike the collages, and want to move away
from them so use the existing collage as one flah betwen and then use these two aswell".

So the card keeps its collage as the card photo and cycles through three frames: collage, then his first photo,
then his second. The entry has two alts, built with `tools/add-swap.js` twice (`--as backlit`, then
`--as fronds`). This is a test of collages against single photos, at his request. No card text changed.

| original (byte-identical) | camera, size, taken | became | sha256 (first 16) |
|---|---|---|---|
| `pteris-nipponica-backlit.jpg` | Galaxy S24, 4000x3000 orientation 6 (upright 3000x4000), 2026-10-06 16:51:39 | frame two, `photos/pteris-nipponica-backlit.jpg`, cropped | 57962905a7443cee |
| `pteris-nipponica-fronds.jpg` | Galaxy S24, 4000x3000 orientation 6 (upright 3000x4000), 2026-10-06 16:51:38 | frame three, `photos/pteris-nipponica-fronds.jpg`, top strip trimmed | 3ca999845032a5ea |

A byte search for C2PA, JUMBF, content-credential and AI-generation markers found none in either file.

## Why both are cropped

The first photo shows a colleague behind the fern: branded uniform with logo and name badge, gloved hands on a
trolley, legs behind the lower fronds. A person, a badge or a logo is a thing that should not be on a
customer-facing card. That is the v14.34 rule, made for a fingertip on the Cryptomeria. His own collage had
already cropped most of the colleague out.

- **Frame two.** `pteris-nipponica-backlit-crop.json` keeps the left side below the gloved hands: x 0-0.43,
  y 0.38-0.81 of the upright frame, 1290x1720, aspect 0.750. That is the backlit frond, the heathers and the
  trolley. A shirt-blue pixel count inside the box is 0.
- **Frame three.** The second photo has a blurred band of the same uniform along the top edge at the right,
  x 0.80-0.95, y 0-0.05. Every shirt-blue pixel in the photo fell in that strip.
  `pteris-nipponica-fronds-crop.json` trims the top 5% and nothing else: 3000x3800, aspect 0.789. One pale
  lavender highlight remains, at x 0.53, y 0.33 (RGB 184,155,239). It is a light spot, not cloth.

Both crops went through `tools/reframe-photo.js`, which checks the box, the aspect and the feature's place
against the card's safe area, and cuts the original's pixels without inventing any. Then `add-swap` staged each
through the canvas pipeline at 1200 px wide. The tool's `*-reframed.jpg` outputs are not kept: the same
original plus the same JSON always produces the same file, so
`node tools/reframe-photo.js <original> <crop.json>` reproduces either.

## Checks

The card was rendered at 390x844 @2x, reached through `goToCard`, with each of the three frames shot while the
cycle was frozen. All three are whole in the photo window, and no person is visible in either new frame.
Results: deck-audit PASS (549 cards), audit-layout "all cards clean", fast set 9/9, build r365.
