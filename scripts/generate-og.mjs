/**
 * generate-og.mjs
 * Converts public/og-image.svg → public/og-image.png (1200×630)
 *
 * Usage:
 *   node scripts/generate-og.mjs
 *
 * Requires:  npm install --save-dev sharp
 */

import { readFileSync, writeFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");

// Dynamic import so the file doesn't hard-crash if sharp isn't installed yet.
let sharp;
try {
  sharp = (await import("sharp")).default;
} catch {
  console.error(
    "\n❌  sharp is not installed. Run:  npm install --save-dev sharp\n"
  );
  process.exit(1);
}

const svgPath = resolve(root, "public", "og-image.svg");
const pngPath = resolve(root, "public", "og-image.png");

const svgBuffer = readFileSync(svgPath);

await sharp(svgBuffer)
  .resize(1200, 630)
  .png({ compressionLevel: 9 })
  .toFile(pngPath);

console.log("✅  og-image.png written to public/og-image.png");
