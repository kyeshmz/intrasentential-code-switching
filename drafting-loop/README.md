# Drafting-loop track

Fully AI-written messages with an English phrase of two or more words inside every sentence of a Japanese, Spanish, Mandarin, French, or Korean base. 995 drafts from 44 rounds, each labeled once by Pangram 4.1: 774 `AI`, 192 `Human`, 29 `Mixed`.

Climb rounds wrote one brief in all five languages with two rule sets: the current rules and a candidate proposed by the previous round. Round 1 also had a no-rules baseline and two briefs. A candidate replaced the current rules only if it got more `Human` labels without losing structure passes. No candidate did.

Rounds with `mode: "arms"` in [rounds.json](rounds.json) run fixed rule sets, and counts are pooled within each `phase` instead of deciding per round. Phase `ablation` (rounds 24 to 33) runs the current rules, five versions with one rule removed (`rules/arm-minus-N.txt`), and a casual-register version (`rules/arm-casual.txt`) on one unseen brief per round. Phase `brief-probe` (rounds 34 and 35) runs only the current rules on 7 briefs per round that vary one thing at a time; each brief's `probe` field in [briefs.json](briefs.json) says what. Phase `anchor-term` (from round 36) runs the current rules against `rules/arm-anchor.txt`, which asks for one English term reused in at least three sentences, on exact replicates of briefs that earlier got no `Human` or `Mixed` label. Phase `genre-arms` (from round 39) runs the current rules, no drafting rules (`baseline`), the anchor rules, and the casual rules on building-amenity notices, the one genre where the current rules got `Human` often. Phase `brief-morph` (from round 42) runs only the current rules on `storage-cage` and versions of it that each change one trait, plus two zero-hit briefs with those traits added; each version is drafted twice (ids ending in `-r2`). Phase `genre-ablation` (from round 44) repeats the leave-one-out ablation, plus a no-rules arm, on new notices that explain how a facility or system works, where the current rules get `Human` most of the time.

| File | Contents |
|---|---|
| [drafts.jsonl](drafts.jsonl) | One line per draft: brief, language, rule file, generator, exact text and SHA-256, structure check, Pangram label and assistance score. |
| [rounds.json](rounds.json) | Per round: generator, brief, rule files, labels, and whether the candidate was promoted. |
| [prompt-format.txt](prompt-format.txt) | Output instructions appended to every brief. `{language}` is the base language. |
| [rules/](rules) | Every rule set used, plus `human-derived.txt`, which has not been tested yet. |
| [briefs.json](briefs.json) | The English briefs. |
| [extras.jsonl](extras.jsonl) | Sent in each round's batch but not used for promotion. `mix` rows interleave that round's Japanese draft (current rules) with unchanged lines from one or two human JECS bundles: `half` is 7 AI and 7 human lines, `third` is 7 AI and 14 human lines. `recheck` rows resubmit an earlier `Human` or `Mixed` text and record the new label; the text is in the row named by `of`. |
| [FINDINGS.md](FINDINGS.md) | What the `Human`-labeled drafts did differently, and how far to trust it. |

Every draft is AI-written. A `Human` label (192 here) is a detector miss on that exact text, not evidence of human authorship. The writing review was off, so the drafts were checked for structure in code but not for meaning or naturalness. The structure check verifies the embedded English phrase only for Japanese, Mandarin, and Korean. For Spanish and French it counts lines. Generators and labels come from one account on one day. This is a development set, not an accuracy estimate.

Briefs, rules, and drafts are original to this project and use the repository [license](../LICENSE). The human lines in `mix` rows are [JECS](https://sites.google.com/site/shinnosuketakamichi/research-topics/jecs_corpus) text by Shinnosuke Takamichi, Yoshifumi Nakano, Ai Morimatsu, Takaaki Saeki and Hiroshi Saruwatari, under [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/), with emphasis markers removed.
