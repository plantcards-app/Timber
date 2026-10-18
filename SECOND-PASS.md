# The second pass — a bulk double check of numbers and stats

Oscar, 2026-10-18: "we need to find a way of gathering all the data and sending it to Claude for a double check on
numbers and stats." This is that way. It is what the first Forge batch got by hand that night (six parallel web
checks of nine plants each, a diff, corrections, a report), made repeatable.

**Why a script plus a session, not a script alone.** A repo script cannot browse. The checking is done by Claude with
`WebSearch`, in parallel, one agent per brief. The script does everything around that: gathers the claims, writes
the briefs, reads the verdicts back, diffs them, applies what the rules allow, and writes the report.

## Running one

```sh
# 1. gather and brief
node tools/second-pass.js prepare data/held-photos/2026-10-18b/batch-corrected.json --chunks 6
node tools/second-pass.js prepare --held          # every card on hold; --skip 27 --limit 9 for a slice
node tools/second-pass.js prepare --deck          # every dealt card (large: ~70 briefs at 9 a brief)
node tools/second-pass.js prepare --latin "Robinia pseudoacacia 'Frisia'"
```

That writes `data/second-pass/<date>/claims.json` and `brief-0.md … brief-N.md`.

**2. The session launches one checker per brief**, all at once, each with this instruction (the brief file carries the
plants, the rules and the schema, so the prompt is short):

> Read `<dir>/brief-N.md` and do exactly what it says. Use WebSearch; rhs.org.uk pages are proxy-blocked, snippets are
> acceptable evidence. Write the verdicts JSON to the path the brief names and nothing else. Never invent a value.

Each checker writes `verdicts-N.json`. Nine plants a brief is the size that one agent finishes in two to three minutes.

```sh
# 3. diff, apply, report
node tools/second-pass.js apply data/second-pass/<date>                      # dry: the table and what would change
node tools/second-pass.js apply data/second-pass/<date> --write              # corrections onto held cards in timber.html
node tools/second-pass.js apply data/second-pass/<date> --batch in.json --out out.json   # onto a batch file instead
```

`REPORT.md` lands in the directory either way: one table per plant (field, card, checked, verdict, source), the notes
the checker added, and a tally. Commit the directory with the batch or the hold change it belongs to.

## The rules it applies (so a session does not re-decide them)

| Field | Held card / batch entry | Dealt card |
|---|---|---|
| hardiness | corrected to the sourced band | reported, card keeps (double rule 3) |
| height / spread, blank | filled from the verdict | reported ("fill by hand") |
| height / spread, present | corrected when the verdict is RHS; reported when not | reported |
| peak | corrected when the verdict gives a `Mon-Mon` | reported |
| toxicity | never rewritten; flags reported; a card printing *clear* or *Handle with care* where the sources say harmful (or the reverse) is flagged `RUNG?` for the session | same |
| name | never rewritten (the label rule, NEW-SESSION.md); accepted name and `TRADE ('code')` form reported | same |
| compliance | reported | same |

Nothing is applied from a verdict whose source is blank or "not found". Every applied change on a batch entry adds a
line to `uncertain` naming the old value, the new one and the source; on a card the same line is in `REPORT.md`.
Layout fields (soil, soilWarning, aspect) are never touched here; they are hand-fitted per batch.

After `--write`: `node tools/build-stamp.js --write`, the data checks, `node tests/run-all.js --jobs 3` before a push,
as for any card change.

## What a verdict looks like

One object per plant, every field present, `""` where not found, every value with its source:

```json
{ "latin": "Ilex × meserveae 'Blue Maid'",
  "hardiness": { "value": "H7", "source": "RHS 117328" },
  "height": { "value": "2.5–4 m", "source": "RHS 117328" }, "spread": { "value": "1.5–2.5 m", "source": "RHS 117328" },
  "peak": { "value": "Oct-Feb", "source": "retail; RHS gives no months" },
  "toxicity": { "rhs": "fruit not to be eaten; wear gloves", "aspca": "Ilex toxic to dogs, cats, horses", "source": "RHS 117328; ASPCA" },
  "name": { "accepted": "Ilex × meserveae BLUE MAID ('Mesid')", "trade": "Ilex × meserveae BLUE MAID ('Mesid')", "exists": true, "source": "RHS 117328" },
  "compliance": { "value": "", "source": "" },
  "notes": ["female; needs a male (Blue Prince) nearby to berry"] }
```

## What it is for, in order

1. **Every new batch**, Forge or GPT, before it is held or dealt. The Forge's drafts are written without web access
   and were right on hardiness 26 times in 40 on the first batch, one band out the rest.
2. **The hold block**, in slices, when there is a quiet hour: 114 cards at 2026-10-18, most researched in a single
   pass months ago.
3. **The dealt deck**, field by field, as a report only: the dealt card keeps its value, and the report is Oscar's
   reading list.

`node tools/second-pass.js selftest` runs prepare + apply on a fixture with no network.
