# The Forge handover — what "deal the Forge handover" means

Oscar scans labels and attaches photos in the **Timber Card Forge** on his phone
(<https://claude.ai/artifact/2Byv3SGZ3jyTV1QcZTqhed>) and taps **Hand over**. That only stamps `handedAt` on the batch
and on every card not yet dealt, in the Forge's own store. Nothing is sent, nothing starts, nothing asks for approval
(Oscar, 2026-10-29: "maybe there's an easier way, can it just send it to a designated handover section … as i do all
label scanning from my phone"). The handover tray is the Forge's store; this file is the procedure that empties it.

When Oscar says **"deal the Forge handover"** (with or without a batch id), a session on this repo does this:

1. **Find what is waiting.** `ArtifactData` `list` on `batches` (a few dozen documents) and keep those with `handedAt` set
   and no `handoverDoneAt` later than it. For each open batch, `query` on `cards` with
   `where: [["batch", "==", "<id>"]]` and `out_dir` set under the scratchpad. Keep each card's `version` from the result.
2. **Fetch the photos.** For each `photos[].id` on a waiting card, the `Artifact` tool's `read` with the Forge's `url`,
   `path: <asset id>` and one `out_dir` for the batch.
3. **Lay the batch out.** `node tools/forge-handover.js <cards out_dir> --photos <photo out_dir>` writes
   `data/held-photos/<batch>/`: `forge-cards.json`, `batch-as-sent.json` (the drafts), `to-research.json` (names with no
   usable draft) and the photos named by slug, plus `HANDOVER-PLAN.md`, one line per card. Show Oscar nothing yet.
4. **Research.** Every card is researched or checked **online**: the drafts with the second pass (`SECOND-PASS.md`), the
   names in `to-research.json` from scratch to PLANT-BRIEF.md. The label text on a card is authoritative for name,
   hardiness and sizes. A name that cannot be identified is not guessed: it stays in the Forge with a `cloudNote`.
5. **Deal and hold** with the normal tools (NEW-SESSION.md, CARD-FORGE.md): `compare-double`, fit, `add-plants-bulk` for
   cards with a photo, `ingest-batch` for the rest, `add-swap` for second photos. Batch README, ledger line, full gate,
   commit, push to the session's branch.
6. **Write back** (CARD-FORGE.md, *The write-back*): `dealtAt`, `dealtAs`, `dealtRev`, `checkedOnline` on each card,
   pinned to its version; `handoverDoneAt` and `sessionId` on the batch; refresh `deck/index`. The Forge then shows
   every card as Dealt or Held.
7. **Report** to Oscar in a few lines: dealt, held, could not identify, anything to look at.

A card handed over twice (Oscar taps Hand over again after adding cards) is fine: step 1 takes every card with
`handedAt` and no `dealtAt`.

## What the Forge no longer does

It no longer starts Claude Code sessions (`create_session`, scheduled tasks) and no longer asks for the Claude Code
Remote connector: on 2026-10-28 a run started that way could not push, and the page misreported it. The *JSON file*
button stays as the offline route.
