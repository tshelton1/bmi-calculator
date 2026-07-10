import PinterestInfographic, {
  type InfographicData,
} from "@/components/infographics/PinterestInfographic";

const data: InfographicData = {
  slug: "how-to-lose-weight-with-bmi-calculator",
  headlineLines: ["Set a Weight", "Loss Goal With", "a BMI Calculator"],
  keyStat: { value: "0.5–1 lb", label: "Safe weight loss per week" },
  points: [
    "Pick a target BMI of 22–24",
    "Find the weight that hits it",
    "A 500-cal deficit ≈ 1 lb/week",
    "Use TDEE to set a timeline",
    "Recalculate when you plateau",
  ],
  chart: {
    type: "table",
    caption: "Deficit math",
    headers: ["Plan", "Result"],
    rows: [
      ["250 cal/day", "~0.5 lb/week"],
      ["500 cal/day", "~1 lb/week"],
      ["Lose 20 lb", "~20 weeks"],
    ],
  },
  ctaText: "Calculate your BMI free",
  ctaPath: "/bmi-calculator",
};

export default function HowToLoseWeightWithBmi() {
  return <PinterestInfographic data={data} />;
}
