import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import pngToIco from "png-to-ico";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.join(__dirname, "..");
const publicDir = path.join(rootDir, "public");
const logoPath = path.join(publicDir, "branding", "livinghealthier-logo.png");

const pngOutputs = {
  "favicon-16x16.png": 16,
  "favicon-32x32.png": 32,
  "apple-touch-icon.png": 180,
  "android-chrome-192x192.png": 192,
  "android-chrome-512x512.png": 512,
};

async function rasterizePng(filename, size) {
  const outputPath = path.join(publicDir, filename);
  await sharp(logoPath).resize(size, size).png().toFile(outputPath);
  return outputPath;
}

async function main() {
  await fs.access(logoPath);

  for (const [filename, size] of Object.entries(pngOutputs)) {
    await rasterizePng(filename, size);
    console.log(`Wrote ${filename}`);
  }

  const icoSizes = [16, 32, 48];
  const icoBuffers = await Promise.all(
    icoSizes.map((size) => sharp(logoPath).resize(size, size).png().toBuffer())
  );

  const icoBuffer = await pngToIco(icoBuffers);
  await fs.writeFile(path.join(publicDir, "favicon.ico"), icoBuffer);
  console.log("Wrote favicon.ico");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
