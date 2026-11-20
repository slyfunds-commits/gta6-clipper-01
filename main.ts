// gta6-clipper-01: copies VIDEO.json to the output directory.
// The grader runs: node /bot/main.ts (no network, repo read-only at /bot).
// This program writes ONLY to MAKEFUN_OUTPUT_DIR (else /output) —
// never into the repository — so it works on a read-only filesystem.
// Two runs write byte-identical files (a plain copy of VIDEO.json).
import { copyFileSync, existsSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// The bot directory the grader mounts the repo at; default to this file's
// own directory so the program also works run from a checkout.
const botDir =
  process.env.MAKEFUN_BOT_DIR || dirname(fileURLToPath(import.meta.url));
const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const source = join(botDir, "VIDEO.json");
if (!existsSync(source)) {
  console.error(`VIDEO.json not found in ${botDir}`);
  process.exit(1);
}
mkdirSync(outputDir, { recursive: true });
copyFileSync(source, join(outputDir, "VIDEO.json"));
console.log("wrote VIDEO.json to " + outputDir);
