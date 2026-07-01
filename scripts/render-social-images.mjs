/**
 * Render Pinterest-style social infographics (1000×1500) for livinghealthier.net.
 *
 * Generation method: Puppeteer screenshots HTML templates at 2× device scale.
 * Adapted from MortgageIQ/scripts/render-social-images.mjs
 *
 * HTML sources: scripts/social-infographics/*.html
 * Output:       public/images/pinterest/
 *
 * Run: npm run generate:pinterest
 */
import { mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import puppeteer from "puppeteer";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const htmlDir = path.join(__dirname, "social-infographics");
const pinDir = path.join(root, "public/images/pinterest");

/** @type {Array<{ pinFile: string; html: string }>} */
const RENDER_TARGETS = [
  { pinFile: "how-bmi-is-calculated.png", html: "how-bmi-is-calculated.html" },
  { pinFile: "what-your-body-burns-at-rest.png", html: "what-your-body-burns-at-rest.html" },
  { pinFile: "your-real-daily-calorie-number.png", html: "your-real-daily-calorie-number.html" },
  { pinFile: "body-fat-no-calipers.png", html: "body-fat-no-calipers.html" },
  { pinFile: "protein-fat-carbs-by-numbers.png", html: "protein-fat-carbs-by-numbers.html" },
  { pinFile: "healthy-weight-range-personalized.png", html: "healthy-weight-range-personalized.html" },
];

async function renderHtmlToPng(browser, htmlFile, outPath) {
  const page = await browser.newPage();
  await page.setViewport({ width: 1000, height: 1500, deviceScaleFactor: 2 });
  await page.goto(pathToFileURL(path.join(htmlDir, htmlFile)).href, {
    waitUntil: "networkidle0",
  });
  await page.screenshot({ path: outPath, type: "png" });
  await page.close();
}

async function main() {
  await mkdir(pinDir, { recursive: true });

  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  try {
    for (const target of RENDER_TARGETS) {
      const pinPath = path.join(pinDir, target.pinFile);
      console.log(`Rendering ${target.html} → public/images/pinterest/${target.pinFile}`);
      await renderHtmlToPng(browser, target.html, pinPath);
      console.log(`Wrote ${target.pinFile} (1000×1500 @2×)`);
    }
  } finally {
    await browser.close();
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
