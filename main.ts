import { mkdirSync, writeFileSync } from "node:fs";

// Famous last words, as a one-line tombstone epitaph.
// Deterministic: the same text on every run. No network, no file reads.
// Never deletes /output: the dir is created if missing and entry.txt is
// written in place (the sandbox bind-mounts /output).
// Why this line: "watch this" is the most famous last words in the world —
// every obituary of a daredevil starts there. The twist is that the line
// is addressed to the person standing at the stone: they came to look, and
// the dead man is still narrating. It is dying speech, a surprise, and it
// reads like something actually carved in stone. Short, quotable, one read.
const LINE =
  "I said 'watch this' — and, well, you are.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
