# What the Human-labeled drafts did differently

Rounds 1 to 6 of the drafting loop produced 80 fully AI-written code-switched drafts in five languages. Pangram 4.1 labeled **76 `AI`, 3 `Human`, and 1 `Mixed`**. Every draft and label is in [drafts.jsonl](drafts.jsonl). Rounds 7 to 9 were still running when this was written.

| Split | `Human` labels |
|---|---|
| Current rules ([rules/current.txt](rules/current.txt)) | 3 / 35 |
| Rules proposed by the loop | 0 / 35 |
| No drafting rules | 0 / 10 |
| `xhigh` reasoning | 3 / 60 |
| `high` reasoning | 0 / 20 |
| Carpool group chat | 2 / 10 |
| Lamp replacement email | 1 / 15 |
| Five other briefs | 0 / 55 |
| Mandarin, French, Korean | 1 / 16 each |
| Japanese, Spanish | 0 / 16 each |

## What the three drafts share

1. **English names, not English grammar.** Every English phrase names a thing, place, or event: `work trip`, `Wednesday pickup`, `booster seat`, `pickup time`, `side gate`, `after-school club`, `replacement unit`, `return window`. The verbs, negations, times, requests, and connectors stay in the base language. Same-brief drafts that got `AI` switched English verbs and connectors into the same slots: `still turns on`, `not a video`, `instead of a refund`, `please confirm`, `by Friday`, `ever since`, `to make up for`.
2. **The brief's own English.** On average 91% of their English phrases appear word for word in the English brief, against 73% for the same-brief `AI` drafts and 72% for all `AI` drafts. When the brief said the school "closes early," the Mandarin and French `Human` drafts wrote 提前放学 and *l'école ferme plus tôt*. The Japanese and Korean `AI` drafts coined `early dismissal`.
3. **The same name each time.** They reused an English label about once per draft, for example `pickup time` twice. Their same-prompt peers did so 0.43 times on average.

Length, line-length spread, questions, and exclamation marks did not separate the groups. The single `Mixed` draft (Spanish, round 3) used English discourse phrases such as `same as always` and `let me know`, plus the informal *porfa*.

## Rules to test

[rules/human-derived.txt](rules/human-derived.txt) keeps the current rules and changes two of them.

- **Rule 2.** Use English only for the names of things, places, and events. When the given facts already name something in English, reuse that exact phrase. Keep verbs, negations, time expressions, requests, and linking words in the base language.
- **Rule 4.** Call a recurring thing by the same English name every time.

## How far to trust this

These are hypotheses from **3 positive drafts**, not measured rules. Two of the three came from one brief, and all came from one generator. A close version of rule 2 has already been tested once. The round-2 proposal ("usually a noun phrase... keep verbs, negations, and linking words") got 0 of 5 `Human` on the water-shutoff notice, and so did the current rules on that brief. The writing review was off for rounds 1 to 6, so these drafts were never checked for meaning or naturalness. A `Human` label on an AI-written draft is a detector miss on that text. It is not evidence of human authorship, and it does not show that a rule causes misses.

The next test is a fresh loop with the current rules as the incumbent, `rules/human-derived.txt` as the candidate, new briefs, and the review turned back on for any draft that gets `Human`.
