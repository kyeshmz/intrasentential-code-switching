# What the drafting loop has found

Rounds 1 to 33 of the [drafting loop](README.md) produced **600 fully AI-written code-switched drafts** in Japanese, Spanish, Mandarin, French, and Korean. Pangram 4.1 labeled **572 `AI`, 21 `Human`, and 7 `Mixed`**. A `Human` label on these drafts is a detector miss on that text. It is not evidence of human authorship.

## Rule search: rounds 1 to 23

Each round drafted one unseen brief in all five languages with the current rules ([rules/current.txt](rules/current.txt)) and one candidate rule set proposed from earlier results. A candidate needed more `Human` labels than the current rules to replace them.

| Rules | Drafts | `Human` | `Mixed` |
|---|---:|---:|---:|
| Current rules | 120 | 6 | 1 |
| 23 candidate rule sets, combined | 120 | 0 | 3 |
| No drafting rules (round 1) | 10 | 0 | 0 |

No candidate was promoted. The candidates were one preset, the human-derived rules in round 8, and 21 proposals from the loop. Together they did worse than the current rules (Fisher exact test on `Human`, two-sided p ≈ 0.03). The proposals mostly asked for more variety in rhythm, verbs, and sentence joins. Starting at round 19, the proposer saw every earlier hit and every failed change. That did not help either.

## Ablation: rounds 24 to 33

Ten unseen briefs, each in five languages, with seven fixed rule sets: the current rules, five versions that each drop one of the five rules (`rules/arm-minus-N.txt`), and the current rules plus one casual-register rule (`rules/arm-casual.txt`). Counts are pooled across rounds.

| Rules | Drafts | `Human` | `Human` outside the laundry-room brief |
|---|---:|---:|---:|
| Current rules | 50 | 2 | 1 / 45 |
| Without rule 1 | 50 | 3 | 0 / 45 |
| Without rule 2 | 50 | 3 | 1 / 45 |
| Without rule 3 | 50 | 2 | 0 / 45 |
| Without rule 4 | 50 | 1 | 0 / 45 |
| Without rule 5 | 50 | 1 | 0 / 45 |
| Casual register added | 50 | 3 | 2 / 45 |

**No single rule carries the effect.** Every arm stays between 0 and 2 `Human` in 45 drafts once one brief is set aside.

**The brief does.** The laundry-room notice (round 29) produced 11 of its 35 drafts as `Human`, from all seven rule sets. In Japanese it was 7 of 7. The other nine briefs produced 0 to 2 each. The water-shutoff notice (round 2) comes from the same sender, to the same readers, at the same length, and got 0 of 10.

## What did not explain the hits

Rounds 1 to 6 suggested that `Human` drafts used English only for names of things and reused the brief's exact English. [rules/human-derived.txt](rules/human-derived.txt) encoded that and got 0 of 5 `Human` in round 8. Across all 360 CJK drafts:

- English share, number of switches, switch length, and the share copied from the brief are about the same for `Human` and `AI` drafts.
- Switches that contain function words or quantities (`out of order`, `one hour per load`, `a few minutes`) appear in 19% of a `Human` draft's switches on average, against 17% for `AI` drafts. Japanese laundry-room drafts with `out of order` still came back `Human`.

## Human text mixed in

Each round from 14 on also sent one Japanese draft interleaved line by line with human-written Japanese-English code-switched lines from [JECS](https://sites.google.com/site/shinnosuketakamichi/research-topics/jecs_corpus) (Takamichi et al., CC BY 3.0; credit in [README.md](README.md)). These do not count toward any rule decision.

| Mix | Rounds | `Human` |
|---|---:|---:|
| 7 AI lines + 7 human lines | 20 | 10 |
| 7 AI lines + 14 human lines | 20 | 13 |

A label measures the whole text, so these results show how much human text dilutes a fully AI draft. They say nothing about the drafting rules.

## How stable a label is

Every `Human` or `Mixed` text was sent again in a later batch. All 88 rechecks returned the same label. A label is a fixed function of the text, so the variation comes from drafting, not from scoring.

## Brief probe: rounds 34 and 35

The rules stayed fixed at the current rules, and 14 briefs each changed one thing. Each brief's `probe` field in [briefs.json](briefs.json) says what.

- **19 of 69 structure-passing drafts got `Human` (28%)**, against about 5% for the current rules in rounds 1 to 33. The generator setting, draft length, and English share did not change.
- **The laundry-room effect did not replicate.** The exact replicate got 1 of 5, and its Japanese draft got `AI`. The water-shutoff control got 1 of 5, against 0 of 10 before.
- **The highest were** `laundry-card` (5 of 5, including Spanish and French), `package-room-twin` and `mailroom-lockers` (3 of 5 each). `trash-room`, `rooftop-grill`, and `quiet-hours` got 0 of 5.

## Repeated English terms

The laundry-card drafts used `laundry card` in nearly every sentence. Across all 670 drafts, a draft is more likely to get `Human` the more lines contain its most frequent English term:

| Lines with the draft's most frequent English term | `Human` |
|---|---:|
| 1 | 8 / 429 (1.9%) |
| 2 | 16 / 164 (9.8%) |
| 3 or more | 17 / 77 (22.1%) |

The gap holds within a brief. In briefs that had at least one `Human` draft, the `Human` drafts repeated their top term on 2.2 lines on average, and the `AI` drafts on 1.4. This is a correlation, measured with a simple span extractor.

## Anchor-term test: rounds 36 to 38

[rules/arm-anchor.txt](rules/arm-anchor.txt) changes only rule 4 of the current rules: pick the one English term for the main thing in the message and reuse it unchanged in at least three sentences. Both rule sets drafted exact replicates of 9 briefs that earlier got no `Human` or `Mixed` label.

| Rules | Drafts | `Human` | `Mixed` | Top English term on 3+ lines |
|---|---:|---:|---:|---:|
| Current rules | 45 | 0 | 0 | 6 / 45 |
| Anchor-term rule | 45 | 0 | 1 | 34 / 45 |

- **No drift.** The current rules still got 0 on briefs that got 0 before, so the 28% in rounds 34 and 35 came from those briefs.
- **Repetition is not the cause.** The anchor rule made drafts repeat a term, as asked, and they still got `AI`. The correlation above comes from briefs built around one recurring item, such as a laundry card or a package locker.

So far the subject of the message is the only thing that has moved the label: building-amenity notices with a central card, locker, code, or permit.

## Genre arms: rounds 39 to 41

Four rule sets each drafted 6 building-amenity notices in five languages: exact replicates of `laundry-card`, `mailroom-lockers`, and `package-room-twin`, plus 3 new notices in the same style (`storage-cage`, `key-fob`, `visitor-parking`).

| Rules | `Human` |
|---|---:|
| Anchor-term rule | 25 / 30 (83%) |
| Current rules | 24 / 30 (80%) |
| Casual register added | 22 / 30 (73%) |
| No drafting rules | 2 / 30 (7%) |

**On these briefs, the rules take AI drafts from 7% `Human` to about 80%.** The three rule sets are within noise of each other. Every language reached at least 3 of 6 with every rule set. The same rules got 0 of 45 on the zero-hit replicates in rounds 36 to 38. So the effect needs both the rules and this kind of message.

## Next: brief morph, rounds 42 and 43

The current rules draft `storage-cage` (15 of 15 `Human` with rules) and versions that each remove one trait: office staff instead of residents, no English compound names, no price or sign-up or management office, a resident's group chat, and a resident asking the manager. Two zero-hit briefs get the traits added instead: `water-shutoff-admin` and `trip-form-admin`. Each version is drafted twice (the `-r2` ids), 10 drafts in all.
