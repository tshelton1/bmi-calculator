import PinterestInfographic, {
  type InfographicData,
} from "@/components/infographics/PinterestInfographic";

const data: InfographicData = {
  slug: "how-to-calculate-tdee",
  headlineLines: ["How to Calculate", "Your TDEE"],
  keyStat: { value: "BMR × activity", label: "The formula for daily calorie burn" },
  points: [
    "TDEE = BMR × an activity multiplier",
    "It's your true daily calorie burn",
    "Beats generic calorie advice",
    "Cut 15–20% below it to lose fat",
    "Recalculate as your weight drops",
  ],
  chart: {
    type: "table",
    caption: "Activity multipliers",
    headers: ["Activity level", "Multiplier"],
    rows: [
      ["Sedentary", "× 1.2"],
      ["Lightly active", "× 1.375"],
      ["Moderately active", "× 1.55"],
      ["Very active", "× 1.725"],
      ["Extremely active", "× 1.9"],
    ],
  },
  ctaText: "Calculate your TDEE free",
  ctaPath: "/calorie-calculator",
};

export default function HowToCalculateTdee() {
  return <PinterestInfographic data={data} />;
}
