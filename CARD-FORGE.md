# The Card Forge — pulling a batch built in the artifact

The **Timber Card Forge** is a Claude artifact Oscar uses on the shop floor:
<https://claude.ai/artifact/2Byv3SGZ3jyTV1QcZTqhed>. He pastes plant names (from the
Label Scanner, or read off label photos), the page asks Claude for a plant JSON in the
`PLANT-BRIEF.md` shape, runs this repo's own checks on it (a port of
`tools/check-plant-json.js`, the 26/44 soil budgets, the prose budgets and the card's
`TOX_LADDER`), lets him fix fields and attach photos, and then hands the batch to a
Claude Code session. This file is what that session reads.

**Two facts to hold onto before touching anything:**

1. **Every Forge draft was written without web access.** The page's Claude call cannot
   browse. Each card carries `research.checkedOnline: false` and the page labels it
   "Unchecked draft". So the session that deals it owns the fact check: hardiness,
   height and spread, peak, toxicity and compliance at least, with `WebSearch`, and the
   batch README records what was checked and what changed. The brief tells the model to
   blank what it does not know and list it in `uncertain`; read that list first.
2. **The page's "In deck" chip is a hint, not the double check.** It reads a slug index
   that is only as fresh as the last session that refreshed it. `tools/compare-double.js`
   still runs on every batch, as NEW-SESSION.md says.

## What the artifact stores

The artifact's shared database (read and written with the `ArtifactData` tool, the
artifact's URL as `url`):

| Collection / doc | What it is |
|---|---|
| `batches/<batchId>` | `{id, createdAt, note, handedAt, sessionId}`. The id is the day the batch was started, `2026-10-11`, with a letter suffix for a second batch that day (`2026-10-11b`), the same convention as `data/held-photos/`. |
| `cards/<cardId>` | One plant. See the fields below. |
| `deck/index` | `{updatedAt, rev, dealt, held, cards: {<slug>: "dealt" \| "held"}}` — every card in `timber.html`, slugged by the app's rule. Produced by `tools/forge-deck-index.js`. |

A card document:

| Field | Meaning |
|---|---|
| `batch` | the batch id |
| `name` | the name as typed or as read off the label |
| `label` | text copied from the label (care notes, hardiness, sizes). The brief treats it as authoritative for name, hardiness, height and spread |
| `notes` | Oscar's notes for the research |
| `plant` | the plant JSON in the `PLANT-BRIEF.md` shape, or `null` if not researched. Keys outside the schema were dropped on the page; numeric fields are numbers, blanks are `""` (`sunMin` blank is `null`), `uncertain` and `sources` are arrays |
| `photos` | `[{id, name, bytes, type, kind, at}]` — `id` is the artifact asset id; `kind` is `card` for the first photo and `flash` for the rest (the page's second-photo rule is the repo's: a second frame flashes, never replaces) |
| `validation` | `{errors, warnings, notes, tox}` as the page computed them at the last save; `tox` is the ladder tier the toxicity sentence prints (`clear`, `severe`, `harmful`, `caution`, `edible`) |
| `research` | `{tier, applied, at, rounds, truncated, checkedOnline: false, source}` — `rounds` is 2 when the page sent the validator's errors back for one repair call |
| `handedAt` | set when Oscar handed the batch off (copied the message, marked it, or started a session from the page) |
| `dealtAt`, `dealtAs`, `dealtRev`, `checkedOnline` | **written by the deal session**, see below. The page shows a card as *Dealt* once `dealtAt` is set |

The page derives the status it shows: no `plant` → *Named*; validator errors → *Needs
fixes*; `dealtAt` → *Dealt*; `handedAt` → *Handed*; otherwise *Ready*. Only cards with a
plant and no errors are "ready", and only those are in the JSON file the page downloads.

## The pull

1. **Read the cards.** `ArtifactData` `query` on collection `cards` with
   `where: [["batch", "==", "<batchId>"]]` and an `out_dir` under the scratchpad, so each
   document lands as a JSON file instead of in the conversation. Keep the `version` each
   document reports; the write-back is pinned to it. Skip any card with `dealtAt` set or
   `plant` null, and any whose `plant` fails `tools/check-plant-json.js` (the page's checks
   are a port, the repo's validator is the authority).
2. **Fetch the photos.** For each `photos[].id`, the `Artifact` tool's `read` with the
   artifact `url`, `path: <asset id>` and the same `out_dir`; the result names the saved
   file. The bytes are Oscar's original photo, untouched, exactly as a photo he attaches to
   a chat would be.
3. **Lay the batch out as every other batch is laid out.** `data/held-photos/<batchId>/`
   with:
   - `batch-as-sent.json` — the array of `plant` objects in card order, byte-for-byte what
     the page would have downloaded;
   - `forge-cards.json` — the raw card documents with their ids and versions (the record
     of what was pulled, and what the write-back pins to);
   - the photos, named by the card's slug: `<slug>.jpg` for `kind: card`,
     `<slug>-flash-2.jpg`, `<slug>-flash-3.jpg` for the rest (the slug rule is in
     NEW-SESSION.md; the extension follows the asset's `type`);
   - `README.md`, as for any batch: what came, what was fitted, what the fact check found,
     what was dealt and what was held and why.
4. **Then the routine is the normal one.** `compare-double` on the whole file;
   `tools/fit-incoming.js` budgets (the page already enforces 26/44 and the prose budgets,
   so fitting should be light); `node tools/add-plants-bulk.js --quick` for the cards with
   a photo, `node tools/ingest-batch.js` for the ones without (they go on hold); a second
   photo becomes a flash frame with `tools/add-swap.js` after the deal. Feature branch,
   `node tests/run-all.js --jobs 3` once before pushing.
5. **Fact-check before you write**, with the second pass (`SECOND-PASS.md`): `node tools/second-pass.js prepare
   <batch-as-sent.json>`, one checker agent per brief, `apply --batch … --out batch-corrected.json`, and the
   `REPORT.md` it writes goes in the batch folder. Every draft is unchecked (fact 1 above). Check at
   least hardiness, height/spread, peak, toxicity and compliance for each card online,
   correct the JSON where a source disagrees, and record every check and change in the
   batch README under a *Fact check* heading, [Unverified] items named as such. Where the
   proxy only gives snippets, say so, as the 2026-10-10c README does.

## The write-back

Once a card is dealt (or ingested onto the hold block), tell the page, so the Forge shows
it and Oscar does not research it twice:

- `ArtifactData` `update` on `cards/<cardId>`, pinned with `if_version` to the version
  read in step 1, with `{"dealtAt": <ms since epoch>, "dealtAs": "dealt" | "held",
  "dealtRev": "<short git hash>", "checkedOnline": true}`. Use a `batch` of updates for
  the whole batch — one approval. A pinned write that fails means Oscar edited the card
  after the pull: re-read it, look at what changed, and redo the write.
- `ArtifactData` `update` on `batches/<batchId>` with `{"sessionId": "<this session's id>"}`
  if the page did not set it (it only knows the id when it started the session itself).
- **Refresh the deck index**: `node tools/forge-deck-index.js --out <file>`, then
  `ArtifactData` `get` `deck/index` for its current version and `set` it from that file
  with `if_version`. Skipping this is how the page's "In deck" chip goes stale.

## What a session should not do

- Never deal a card from the page's JSON without running `tools/check-plant-json.js` on
  it. The page's port is for the shop floor; the repo's validator is the gate.
- Never treat a `plant` as fact-checked because the page shows it *Ready*. *Ready* means
  the deck would not refuse the shape, nothing more.
- Never delete an artifact asset. The photos belong to Oscar's record of the batch; the
  held-photos folder is a copy, not a move.
- Never edit `label`, `notes` or `name` on a card. They are his inputs.

## If the artifact is not reachable

A session without the `ArtifactData` tool (a plain chat, a session whose artifact tools
are off) takes the other route: Oscar downloads `batch-<batchId>.json` from the page's
*JSON file* button and attaches the photos himself, which is exactly the "New plant for
Timber" opening message in NEW-SESSION.md, one JSON array instead of one object.
