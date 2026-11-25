# Intra-sentential Code-Switching Benchmark · v0.1

How does an authorship detector label text where a speaker changes languages **within a sentence**? This is a small, public development set. A bilingual exchange in which each person speaks only one language does not qualify. The task is to predict authorship, not to detect the switch itself.

| Track | What one prediction covers | Pangram 4.1 baseline |
| --- | --- | --- |
| `sleeping-dogs` · English with Cantonese insertions | One of three short, fan-reported game excerpts. At least one sentence per excerpt has a switch; other fragments may be monolingual. | 3 Human, 0 Mixed, 0 AI, 0 unscored |
| `open` · Japanese with English insertions | One seven-sentence bundle. Three human JECS bundles and three AI counterparts share topic, register and approximate length. Every sentence switches. | Human bundles: 3 Human. AI bundles: 3 AI. None unscored. |

The game track records what detectors **called** each excerpt. One is a reviewer's recollection, two are secondary quotations, and none is checked verbatim against the audio. The Cantonese expressions also overlap across cases. These three results are not an accuracy estimate for Cantonese–English. The Japanese track has known authorship but only three pairs and one generator. Do not pool the tracks: they differ in language, length, provenance and scoring unit.

The [drafting-loop track](drafting-loop/README.md) adds fully AI-written seven-sentence messages in Japanese, Spanish, Mandarin, French, and Korean with English insertions. Each carries its Pangram 4.1 label and the drafting rules that produced it. It has no human texts and is not scored by `bench.mjs`.

## Try it offline

From this directory, with Node.js 22+:

```sh
node bench.mjs inputs open > inputs.jsonl
node bench.mjs score open pangram-4.1-open.jsonl
node bench.mjs score sleeping-dogs pangram-4.1-sleeping-dogs.jsonl
```

To evaluate another detector, give it **only the `text` field** from each input. Save one prediction per input as `{"id":"open-01","verdict":"Human"}`. Verdicts are `Human`, `Mixed`, `AI` or `Unscored` (rejection, abstention or failure). Run `node bench.mjs score open predictions.jsonl`. IDs, not file order, determine the join. Record the detector, version, date and any threshold used to map scores to labels.

The scorer reports verdict counts and coverage (scored / total) for each group. On the known-authorship open track it also reports the fraction **among scored items** with the exact expected label; `Mixed` is not an exact match for either class. If a detector rejects every item in a group, that fraction is undefined (`null`), not zero. On the game track it reports counts and coverage only.

## What can be shared?

- **Open track:** `cases.json` includes all six texts, original source IDs, individual switch phrases, and the links between AI counterparts and human bundles. The [JECS](https://sites.google.com/site/shinnosuketakamichi/research-topics/jecs_corpus) text is by Shinnosuke Takamichi, Yoshifumi Nakano, Ai Morimatsu, Takaaki Saeki and Hiroshi Saruwatari, under [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/). Emphasis markers were removed and independent utterances joined with newlines. The AI texts are original generations for this project.
- **Game track:** only IDs, source links, provenance, SHA-256 fingerprints and detector verdicts are distributed. Permission for the earlier Pangram run did not establish redistribution rights for the dialogue. With an authorized local JSONL containing `id` and `text`, run `node bench.mjs inputs sleeping-dogs LOCAL.jsonl`. Matching requires the exact UTF-8 text, including punctuation, with no added newline in the field. This is a source-indexed supplement, not an openly licensed game script.
- **License:** the evaluator, documentation, original metadata and AI examples use the [included license](LICENSE). The JECS text retains its CC BY 3.0 license. The scorer runs offline with no API key.

The saved predictions come from historical Pangram jobs. Each retained result was joined by original ID and checked against the exact text returned by Pangram. The Cantonese-only item from the four-item game run was excluded before scoring this edition. No new scan was needed.

## What to collect next

For an open English–Cantonese comparison, start with independently written, redistribution-cleared dialogue from bilingual contributors. Preserve original wording, script and switch direction. Have a second bilingual reader mark the switch within the sentence and flag ambiguous loans, names or tags. Record source, authorship evidence, licensing, register and length for each case. Give multiple AI generators the same **scene briefs**, without the human wording, to create matched controls. Keep scripts, spontaneous speech transcripts and written chat in separate groups.

Keep these published examples for development. For a scored evaluation, hold out whole writers and scenes together with their variants, freeze case IDs and text hashes before running detectors, and report counts and rejection rates by group. Version any change to the inputs. Compare detectors on the same held-out items rather than treating these three short game quotes as a leaderboard.
