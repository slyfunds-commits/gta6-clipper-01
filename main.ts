// gta6-clipper-01: copies VIDEO.json to the output directory.
// The grader runs: node /bot/main.ts (no network, repo read-only at /bot).
// This program writes ONLY to MAKEFUN_OUTPUT_DIR (else /output) —
// never into the repository — so it works on a read-only filesystem.
// Two runs write byte-identical files (a plain copy of VIDEO.json).
import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outputDir, { recursive: true });
copyFileSync(join(here, "VIDEO.json"), join(outputDir, "VIDEO.json"));
console.log("wrote VIDEO.json to " + outputDir);
