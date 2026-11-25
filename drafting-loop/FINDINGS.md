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

## Next: brief probe, rounds 34 and 35

The rules stay fixed, and the brief varies: an exact laundry-room replicate, a water-shutoff replicate as a control, the same laundry facts sent as a resident's group chat, a laundry room with different facts, three twins with laundry-room's sentence structure set in a building gym, a package room, and an office kitchen, six other building-manager notices about shared spaces, and a resident reporting the dryer to the manager. If the twins keep the effect, it comes from the message's shape and can become a rule. If only laundry-room keeps it, it is specific to that topic and no writing rule found here will move the label.
