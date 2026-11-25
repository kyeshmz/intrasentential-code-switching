# Multilingual examples

## Texts you can run offline

[cases.json](cases.json) contains 17 detector inputs: nine seven-sentence bundles and eight single utterances. Each row includes the original text, source ID, attribution or generator, and a SHA-256 fingerprint. The examples below show **one sentence** from each track; the bold marks are for reading and are not part of the input.

| Track | Example | What was collected |
| --- | --- | --- |
| `es-en` | La vecina dijo que **the back door** se queda abierta hasta que terminen de sacar las sillas. | Three original AI bundles. No human Spanish baseline in this track. |
| `zh-en` | 我找了很久 **floor plan**，但是真的真的没有找到。 | “I looked for the floor plan for a long time, but really couldn’t find it.” This is PSU forum row `calvillo-psu-473` in `zh-en-02`. The three human bundles collect independent posts; the three AI bundles are informal writing, not matched rewrites. |
| `hi-en-short` | Kya koi **fun events** hai **this weekend** | “Are there any fun events this weekend?” A human-written assistant request from Hinglish-TOP (`test.tsv`, line 45). Original Roman spelling and punctuation are preserved. |
| `zh-en-speech` | 因为你不可能邀你的**female friends**去说走我们去**play basketball** | One ASCEND speaker uses two English phrases in the same Mandarin utterance. These are speech transcripts, not forum posts. `zh-en-speech-02` is a borderline example: its English names an event. |

The Japanese **satellite Internet service** example is already in the [original open track](../cases.json): `open-02`, part `JECS0060`. The *Sleeping Dogs* excerpts are there too, under `sleeping-dogs`. Neither is counted again here. For French–English and Korean–English AI texts, see the [drafting-loop track](../drafting-loop/README.md).

From the repository root:

```sh
node bench.mjs inputs hi-en-short
node bench.mjs inputs zh-en-speech
node bench.mjs score es-en multilingual/pangram-4.1-es-en.jsonl
node bench.mjs score zh-en multilingual/pangram-4.1-zh-en.jsonl
```

Each historical Pangram 4.1 prediction was matched by source ID and exact returned text. All three Spanish AI bundles received `AI`; the three Mandarin human bundles received `Human` and the three Mandarin AI bundles received `AI`. These are nine observations, not sentence-level predictions.

## Reference index

Each link below locates one published example. [references.json](references.json) gives its ID, source, excerpt boundaries, punctuation conventions and SHA-256. The fingerprint identifies the cited transcription, not independent verification against game audio or an official script.

| Source | Languages | Where the switch happens |
| --- | --- | --- |
| [*Valorant* · Gekko](https://wiki.playvalorant.com/en-us/Gekko/Quotes) | English / Spanish | As a defuse runs out of time, **mi ama** (“my mom”) is the object of *tell*. English resumes after it. |
| [*Apex Legends* · Octane](https://apexlegends.wiki.gg/wiki/Octane/Voice_lines) | English / Spanish | In an intro quip, **casa de Octane** (“Octane’s place”) gives the destination of an English invitation. |
| [*Cyberpunk 2077* · Jackie Welles](https://game-scripts-wiki.blogspot.com/2020/12/cyberpunk-2077-full-transcript.html) | Spanish / English | During *The Pickup*, **Mi madre** (“my mother”) is the subject; the predicate is English. |
| [*GTA V* · attributed to Franklin](https://ejournal1.unud.ac.id/index.php/ejl/en/article/download/6367/3566/33844) | English / Spanish | A study’s Data 1 uses **loco** (“crazy”) as an English predicate adjective. Possible borrowing; the attribution is the study’s. |
| [*Warframe: 1999* · Lettie](https://wiki.warframe.com/w/Leticia/Quotes) | English / Spanish | In a Gemini Switch Emote, **con La Flaca** supplies the partner in a dance. The switch includes a preposition, not just a name. |
| [*Coco* · “Un Poco Loco”](https://www.youtube.com/watch?v=yg8116aeD7E) | English / Spanish | **un poco loco** (“a little crazy”) completes an English predicate. |
| [*Terminator 2* · T-800](https://www.afi.com/news/terminator-2-judgment-day-afi-movie-club/) | Spanish / English | A Spanish farewell ends in English **baby**. Borderline: a form of address, not an embedded phrase. |
| [Poplack’s 1980 paper title](https://doi.org/10.1515/ling.1980.18.7-8.581) | English / Spanish | **Y TERMINO EN ESPAÑOL** (“and I finish in Spanish”) coordinates with an English clause. The source is a title, not a recording. |
| [*Valorant* · Neon](https://wiki.playvalorant.com/en-us/Neon/Quotes) | English / Tagalog | **lola** (“grandmother”) follows an English possessive. Single kinship term; possible borrowing. |
| [*Assassin’s Creed II* · Vieri](https://game-scripts-wiki.blogspot.com/2022/04/assassins-creed-2-full-transcript.html) | English / Italian | **ubriacone** (“drunkard”) comes between an English determiner and Mario’s name. |
| [*Jab We Met* · Geet](https://www.youtube.com/watch?v=fTjUKibDVek) | Hindi / English | **favourite** comes between Hindi *apni* and *hoon* (“I’m my own favourite”). The clip title supplies the Roman spelling. |
| [*Hamilton* · Lafayette](https://github.com/amandavisconti/ham4corpus/blob/master/All_Lyrics_Speakers) | English / French | In “Aaron Burr, Sir,” an English instruction contains a **quoted French command** meaning “get lost.” |
| [Hong Kong forum · schedule question](https://www.xboxachievements.com/forum/topic/347541-do-you-find-the-cantonese-enjoyable-or-annoying/) | Cantonese / English | The commenter illustrates a Cantonese question with English **check** and **schedule**. |
| [Hong Kong forum · scanning request](https://www.xboxachievements.com/forum/topic/347541-do-you-find-the-cantonese-enjoyable-or-annoying/) | Cantonese / English | The same commenter puts a Cantonese classifier between **scan** and **file**. Neither forum example is *Sleeping Dogs* dialogue. |
| [*Mobile Legends* · player chat](https://www.atlantis-press.com/article/125990475.pdf) | Javanese / Indonesian | A Javanese “if you dare” is completed by the Indonesian command **jangan mundur** (“don’t back down”). The study records a player’s message, not a character’s line. |

To check text obtained from the cited sources, put one `{"id":"…","text":"…"}` per reference in `LOCAL.jsonl` and run `node bench.mjs inputs references LOCAL.jsonl` from the repository root. Copy only the excerpt specified by each `locator`; omit surrounding quotation marks and editorial glosses unless specified. Predictions, if supplied, are summarized by source type, not scored against assumed authorship. No predictions are bundled for these 15 references.

### Related sources without a frozen input

- [*Far Cry 6*](https://www.theverge.com/2021/10/19/22714609/far-cry-6-ubisoft-spanish-language), [*9mm*](https://repository.ub.ac.id/id/eprint/100855/) and [*Assassin’s Creed Mirage*](https://www.asoundeffect.com/assassins-creed-mirage-game-audio/) document Spanish in the first two games and Arabic in the third. These sources establish the practice; the index does not invent dialogue from their descriptions.
- [*Valhalla*’s Brigid](https://www.wired.com/story/assassins-creed-valhalla-linguistic-guide/) mixes **Welsh** and English. [*Venba*](https://gamedev.substack.com/p/in-conversation-with-abhi-from-visai) can depict Tamil and English through typography and text speed; that alone does not give a literal bilingual string.
- [Thai *Valorant* players](https://doi.org/10.17507/tpls.1211.24), extract 1, use **fake footstep** inside a Thai turn. [Finnish *Killing Floor* and *Portal 2* players](https://urn.fi/URN:NBN:fi:jyu-201505272056) switch in recorded voice chat; see example 9 for English terms in Finnish. These are studies of players, distinct from Gekko and Neon’s voice lines.
- For naturally written Spanish–English, the [CodeSwitch-Reddit addendum](https://aclanthology.org/D19-1484/) and [SentiMix](https://aclanthology.org/2020.semeval-1.100/) are discovery sources. A bilingual post is not necessarily a within-sentence switch; no social-media posts from these datasets are distributed here.

## Sources and licenses

- **Mandarin forum text:** Penn State CSSA BBS contributors, compiled by Jesús Calvillo, Le Fang, Jeremy Cole and David Reitter ([paper](https://aclanthology.org/2020.emnlp-main.330/), [source CSV](https://github.com/lfang1/CodeSwitchingResearch/blob/master/11152019_two_entropies_appended_input_R_v4.csv)). Only PSU rows are included, under [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) as documented in the [archived PSU footer](https://github.com/lfang1/CodeSwitchingResearch/blob/master/copy-right-license/psu-cssa-copyrights-full.PNG). The adapted bundles retain that license. Segmentation spaces were removed as described on each row; independent sentences were joined with newlines.
- **Mandarin speech:** Holy Lovenia et al., [ASCEND](https://huggingface.co/datasets/CAiRE/ASCEND), [LREC 2022](https://aclanthology.org/2022.lrec-1.788/), [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/). The four mixed test-split transcriptions are unchanged.
- **Hindi requests:** Anmol Agarwal, Jigar Gupta, Rahul Goel, Shyam Upadhyay, Pankaj Joshi and Rengarajan Aravamudhan, [Hinglish-TOP](https://github.com/google-research-datasets/Hinglish-TOP-Dataset). Four unchanged `cs_query` fields from the **Human Annotated Data** test split. [Apache License 2.0](Hinglish-TOP-LICENSE.txt).
- **Japanese scripts:** [JECS](https://sites.google.com/site/shinnosuketakamichi/research-topics/jecs_corpus), [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/); see the [original track’s attribution](../README.md#what-can-be-shared).
- **Original AI text and benchmark metadata:** [0BSD](../LICENSE). The reference index links to third-party works; the repository license does not relicense those works.
