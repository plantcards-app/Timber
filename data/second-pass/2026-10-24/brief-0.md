# Second-pass brief 0 — 8 plants

You are fact-checking UK garden-centre plant cards. Use WebSearch (load it with ToolSearch "select:WebSearch,WebFetch" first).
rhs.org.uk pages are blocked by the proxy: search-result snippets of RHS pages are acceptable evidence; say when you relied on
one. Do NOT edit any file except the one named below. Never invent: a value you cannot find is "" with source "not found".

For EACH plant find: (1) the RHS hardiness band H1a–H7 (give the RHS plant id), else the best other source and say so;
(2) RHS ultimate height and spread, written as the deck writes them ("1–1.5 m", "30–50 cm", ">12 m", "8 m+");
(3) flowering or peak-interest months as Mon-Mon (e.g. "Jun-Aug"); (4) toxicity: the RHS flags (harmful if eaten / skin
irritant / toxic to pets) and the ASPCA listing, or "no listing found"; (5) the accepted name, whether the cultivar exists,
and the TRADE ('code') form if it is a PBR plant; (6) any UK compliance point (Xylella host, Schedule 9, plant passport).

1. Corylus avellana MEDUSA ('JWW9') (Hazel) [batch:batch-as-sent.json] — claimed: hardiness H6; height blank; spread blank; peak Jan-Mar; foliage deciduous; toxicity "Nuts are edible but are a common food allergen, and the catkin pollen can trigger hay fever in spring." (prints edible); compliance "Sold under plant breeders' rights (PBR) as 'JWW9'; grant number not confirmed."
2. Imperata cylindrica 'Red Baron' (Japanese Blood Grass) [batch:batch-as-sent.json] — claimed: hardiness H6; height 30–50 cm; spread 30–40 cm; peak Jun-Oct; foliage deciduous; toxicity "" (prints blank); compliance "none"
3. Acer palmatum 'Sumi-nagashi' (Japanese Maple) [batch:batch-as-sent.json] — claimed: hardiness H6; height blank; spread blank; peak Apr-Oct; foliage deciduous; toxicity "No known hazard." (prints clear); compliance "none"
4. Ginkgo biloba (Maidenhair tree) [batch:batch-as-sent.json] — claimed: hardiness H7; height blank; spread blank; peak Oct-Nov; foliage deciduous; toxicity "Seeds, produced only by female trees, are harmful if eaten raw, especially by children and pets, and the fleshy seed coat can irritate skin; wear gloves to handle fallen fruit." (prints harmful); compliance "none"
5. Cryptomeria japonica 'Tenzan' (Dwarf Japanese Cedar) [batch:batch-as-sent.json] — claimed: hardiness H6; height 30–50 cm; spread 30–50 cm; peak Jan-Dec; foliage evergreen; toxicity "No reports of serious harm from eating it, but the foliage and resin may irritate sensitive skin, so wear gloves when handling or trimming." (prints caution); compliance "none"
6. Choisya × dewitteana GOLDFINGERS ('Limo') (Mexican Orange Blossom) [batch:batch-as-sent.json] — claimed: hardiness H4; height 1–1.5 m; spread 1–1.5 m; peak Jan-Dec; foliage evergreen; toxicity "Sap and crushed leaves may irritate sensitive skin; wear gloves when pruning." (prints caution); compliance "Believed to be a protected variety (plant breeders' rights); grant number not known."
7. Choisya ternata 'Brica' (Mexican Orange Blossom) [batch:batch-as-sent.json] — claimed: hardiness H4; height blank; spread blank; peak Apr-May; foliage evergreen; toxicity "Crushed leaves and sap may irritate sensitive skin, so wear gloves when pruning; not known to be seriously harmful." (prints harmful); compliance "none"
8. Callistemon citrinus (Crimson Bottlebrush) [batch:batch-as-sent.json] — claimed: hardiness H3; height 1.5–4 m; spread 1.5–2.5 m; peak May-Jul; foliage evergreen; toxicity "No known hazard." (prints clear); compliance "none"

Write your verdicts as JSON to: data/second-pass/2026-10-24/verdicts-0.json
Schema (one object per plant, every field present, "" where not found, every value with its source):
[
  {
    "latin": "<exactly as given>",
    "hardiness": { "value": "H5", "source": "RHS 12345" },
    "height":    { "value": "1–1.5 m", "source": "RHS 12345" },
    "spread":    { "value": "1–1.5 m", "source": "RHS 12345" },
    "peak":      { "value": "Jun-Aug", "source": "RHS 12345" },
    "toxicity":  { "rhs": "harmful if eaten; skin irritant", "aspca": "toxic to dogs, cats", "source": "..." },
    "name":      { "accepted": "Genus species 'Cultivar'", "trade": "Genus species TRADE ('code')", "exists": true, "source": "..." },
    "compliance": { "value": "...", "source": "..." },
    "notes": ["anything else the session should know, one line each"]
  }
]
Then reply with a five-line summary: how many agreed, which disagreed and on what.
