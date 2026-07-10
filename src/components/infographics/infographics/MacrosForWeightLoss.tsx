import PinterestInfographic, {
  type InfographicData,
} from "@/components/infographics/PinterestInfographic";

const data: InfographicData = {
  slug: "macros-for-weight-loss",
  headlineLines: ["Macros for", "Weight Loss"],
  keyStat: { value: "0.7–1 g/lb", label: "Protein target for fat loss" },
  points: [
    "Protein is the priority macro",
    "It preserves muscle in a deficit",
    "Protein and carbs: 4 cal per gram",
    "Fat holds 9 calories per gram",
    "Consistency beats perfection",
  ],
  chart: {
    type: "table",
    caption: "The three macronutrients",
    headers: ["Macro", "Cal/g", "Main role"],
    rows: [
      ["Protein", "4", "Preserves muscle"],
      ["Carbs", "4", "Energy"],
      ["Fat", "9", "Hormones"],
    ],
  },
  ctaText: "Calculate your macros free",
  ctaPath: "/macro-calculator",
};

export default function MacrosForWeightLoss() {
  return <PinterestInfographic data={data} />;
}
