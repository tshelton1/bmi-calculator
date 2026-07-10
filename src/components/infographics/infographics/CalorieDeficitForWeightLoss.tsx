import PinterestInfographic, {
  type InfographicData,
} from "@/components/infographics/PinterestInfographic";

const data: InfographicData = {
  slug: "calorie-deficit-for-weight-loss",
  headlineLines: ["How Big Should", "Your Calorie", "Deficit Be?"],
  keyStat: { value: "~500 cal", label: "Daily deficit for about 1 lb/week" },
  points: [
    "500 cal/day is about 1 lb/week",
    "Cap the deficit near 20–25%",
    "Bigger isn't better — you lose muscle",
    "Eat protein and lift to keep muscle",
    "Fatigue and feeling cold = too hard",
  ],
  chart: {
    type: "table",
    caption: "Deficit trade-offs",
    headers: ["Deficit", "Loss/week", "Trade-off"],
    rows: [
      ["250 cal", "~0.5 lb", "Easiest"],
      ["500 cal", "~1 lb", "Balanced"],
      ["750–1000", "~1.5–2 lb", "Risky"],
    ],
  },
  ctaText: "Calculate your calories free",
  ctaPath: "/calorie-calculator",
};

export default function CalorieDeficitForWeightLoss() {
  return <PinterestInfographic data={data} />;
}
