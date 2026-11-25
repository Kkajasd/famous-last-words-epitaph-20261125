import { mkdirSync, writeFileSync } from "node:fs";

// Famous Last Words: The Funniest Epitaph
// A dare gone wrong, told deadpan from beyond the grave.
// The epitaph is a single line: the last words of someone who
// said "watch this" one time too many.
const EPITAPH = "I said 'watch this' — and, well, you are.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", EPITAPH, "utf8");

// Output contract (per the bounty kit):
// - exactly one line, 41 characters, no trailing newline
// - deterministic: no input, no network, no file reads
// - /output is created if missing; entry.txt is overwritten in place
