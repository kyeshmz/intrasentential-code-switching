# Drafting-loop track

Fully AI-written messages with an English phrase of two or more words inside every sentence of a Japanese, Spanish, Mandarin, French, or Korean base. 670 drafts from 35 rounds, each labeled once by Pangram 4.1: 617 `AI`, 41 `Human`, 12 `Mixed`.

Climb rounds wrote one brief in all five languages with two rule sets: the current rules and a candidate proposed by the previous round. Round 1 also had a no-rules baseline and two briefs. A candidate replaced the current rules only if it got more `Human` labels without losing structure passes. No candidate did.

Rounds with `mode: "arms"` in [rounds.json](rounds.json) are an ablation. Each one runs the current rules, five versions with one rule removed (`rules/arm-minus-N.txt`), and a casual-register version (`rules/arm-casual.txt`) on one unseen brief. Counts are pooled across those rounds instead of deciding per round.

| File | Contents |
|---|---|
| [drafts.jsonl](drafts.jsonl) | One line per draft: brief, language, rule file, generator, exact text and SHA-256, structure check, Pangram label and assistance score. |
| [rounds.json](rounds.json) | Per round: generator, brief, rule files, labels, and whether the candidate was promoted. |
| [prompt-format.txt](prompt-format.txt) | Output instructions appended to every brief. `{language}` is the base language. |
| [rules/](rules) | Every rule set used, plus `human-derived.txt`, which has not been tested yet. |
| [briefs.json](briefs.json) | The English briefs. |
| [extras.jsonl](extras.jsonl) | Sent in each round's batch but not used for promotion. `mix` rows interleave that round's Japanese draft (current rules) with unchanged lines from one or two human JECS bundles: `half` is 7 AI and 7 human lines, `third` is 7 AI and 14 human lines. `recheck` rows resubmit an earlier `Human` or `Mixed` text and record the new label; the text is in the row named by `of`. |
| [FINDINGS.md](FINDINGS.md) | What the `Human`-labeled drafts did differently, and how far to trust it. |

Every draft is AI-written. A `Human` label (41 here) is a detector miss on that exact text, not evidence of human authorship. The writing review was off, so the drafts were checked for structure in code but not for meaning or naturalness. The structure check verifies the embedded English phrase only for Japanese, Mandarin, and Korean. For Spanish and French it counts lines. Generators and labels come from one account on one day. This is a development set, not an accuracy estimate.

Briefs, rules, and drafts are original to this project and use the repository [license](../LICENSE). The human lines in `mix` rows are [JECS](https://sites.google.com/site/shinnosuketakamichi/research-topics/jecs_corpus) text by Shinnosuke Takamichi, Yoshifumi Nakano, Ai Morimatsu, Takaaki Saeki and Hiroshi Saruwatari, under [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/), with emphasis markers removed.
