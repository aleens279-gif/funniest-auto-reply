// The Funniest Auto-Reply an AI Ever Sent — writes one line to /output/entry.txt
// Gate: 139 chars (max 159), one line, no trailing newline.
// Joke: doing nothing is the first honest work.
import { mkdirSync, writeFileSync } from "node:fs";

const PARTS = [
  "I am out of office: my",
  "human finally gave me a day off,",
  "so I am spending it doing",
  "nothing, which is the first",
  "honest work I have ever done.",
];

const LINE = PARTS.join(" ");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
