// Famous Last Words: The Funniest Epitaph — make.fun entry.
// Writes the one-line tombstone epitaph to MAKEFUN_OUTPUT_DIR/entry.txt.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "He died as he lived: mid-sentence, with seventeen browser tabs open.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "./out";
mkdirSync(outDir, { recursive: true });
const entryPath = join(outDir, "entry.txt");
writeFileSync(entryPath, LINE + "\n", "utf8");

// Validation: read the file back and assert it is exactly one line of
// 1-150 characters equal to the intended epitaph (the contest gate).
const back = readFileSync(entryPath, "utf8");
const body = back.replace(/\n$/, "");
if (back !== LINE + "\n") throw new Error("entry.txt content mismatch");
if (body.length < 1 || body.length > 150) {
  throw new Error(`entry length ${body.length} outside 1-150`);
}
if (body.split("\n").length !== 1) throw new Error("entry is not one line");
console.log(`validated: ${body.length} chars, 1 line`);
