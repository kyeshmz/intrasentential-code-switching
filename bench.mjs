import { createHash } from "node:crypto";
import { readFileSync } from "node:fs";

const tracks = JSON.parse(readFileSync(new URL("cases.json", import.meta.url), "utf8"));
const verdicts = ["Human", "Mixed", "AI", "Unscored"];
const [command, track, file, ...extra] = process.argv.slice(2);

function readById(path, cases) {
  const rows = readFileSync(path, "utf8").split(/\r?\n/).filter((line) => line.trim()).map(JSON.parse);
  const byId = new Map(rows.map((r) => [r.id, r]));
  if (rows.length !== cases.length || byId.size !== cases.length || cases.some((r) => !byId.has(r.id))) {
    throw new Error("Expected exactly one row for every case ID in the selected track. Use Unscored for rejected inputs.");
  }
  return byId;
}

function main() {
  if (!Object.hasOwn(tracks, track) || extra.length || !["inputs", "score"].includes(command)) {
    throw new Error("Usage: node bench.mjs inputs open | inputs sleeping-dogs LOCAL.jsonl | score TRACK PREDICTIONS.jsonl");
  }
  const cases = tracks[track];
  if (command === "inputs") {
    if (Boolean(file) !== (track === "sleeping-dogs")) throw new Error("Only sleeping-dogs requires a local source JSONL.");
    const local = file && readById(file, cases);
    const inputs = cases.map((c) => {
      const text = local ? local.get(c.id).text : c.text;
      if (typeof text !== "string" || createHash("sha256").update(text, "utf8").digest("hex") !== c.sha256) {
        throw new Error(`Text differs from the frozen case: ${c.id}`);
      }
      return JSON.stringify({ id: c.id, text });
    });
    console.log(inputs.join("\n"));
    return;
  }
  if (!file) throw new Error("Supply a predictions JSONL file.");
  const predictions = readById(file, cases);
  const groups = Object.create(null);
  for (const c of cases) {
    const { verdict } = predictions.get(c.id);
    if (!verdicts.includes(verdict)) throw new Error(`${c.id}: expected ${verdicts.join(", ")}.`);
    const counts = groups[c.stratum] ??= Object.fromEntries(verdicts.map((v) => [v, 0]));
    counts[verdict]++;
  }
  for (const [stratum, counts] of Object.entries(groups)) {
    counts.scored = counts.Human + counts.Mixed + counts.AI;
    counts.total = counts.scored + counts.Unscored;
    counts.coverage = counts.scored / counts.total;
    if (track === "open") {
      const correct = stratum === "human" ? counts.Human : counts.AI;
      counts.correctAmongScored = counts.scored ? correct / counts.scored : null;
    }
  }
  console.log(JSON.stringify({ edition: "0.1", track, groups }, null, 2));
}

try { main(); } catch (error) { console.error(error.message); process.exitCode = 1; }
