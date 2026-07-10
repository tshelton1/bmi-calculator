import PinterestInfographic, {
  type InfographicData,
} from "@/components/infographics/PinterestInfographic";

const data: InfographicData = {
  slug: "what-does-bmi-of-25-mean",
  headlineLines: ["What Does a", "BMI of 25", "Really Mean?"],
  keyStat: { value: "25.0", label: "The exact overweight threshold" },
  points: [
    "25 is a line, not a cliff edge",
    "Risk at 25 is not risk at 30",
    "Waist size changes the meaning",
    "Muscle can push BMI to 25",
    "Trend beats any single reading",
  ],
  chart: {
    type: "table",
    caption: "How risk scales with BMI",
    headers: ["BMI", "Category"],
    rows: [
      ["18.5–24.9", "Normal"],
      ["25.0–27.4", "Overweight (lower)"],
      ["27.5–29.9", "Overweight (upper)"],
      ["30.0+", "Obese"],
    ],
  },
  ctaText: "Calculate your BMI free",
  ctaPath: "/bmi-calculator",
};

export default function WhatDoesBmiOf25Mean() {
  return <PinterestInfographic data={data} />;
}
