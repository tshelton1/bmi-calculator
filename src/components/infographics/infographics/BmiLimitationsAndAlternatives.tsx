import PinterestInfographic, {
  type InfographicData,
} from "@/components/infographics/PinterestInfographic";

const data: InfographicData = {
  slug: "bmi-limitations-and-alternatives",
  headlineLines: ["5 Limitations", "of BMI (and", "What to Use)"],
  keyStat: { value: "< 0.5", label: "Ideal waist-to-height ratio" },
  points: [
    "BMI mistakes muscle for fat",
    "It ignores ethnicity and age",
    "Same cutoffs for both sexes",
    "Blind to where fat is stored",
    "Waist-to-height ratio fixes much",
  ],
  chart: {
    type: "table",
    caption: "Better measures to add",
    headers: ["Alternative", "Healthy target"],
    rows: [
      ["Waist-to-height", "< 0.5"],
      ["Waist (men / women)", "< 40 / < 35 in"],
      ["Body fat %", "Age & sex based"],
    ],
  },
  ctaText: "Calculate your BMI free",
  ctaPath: "/bmi-calculator",
};

export default function BmiLimitationsAndAlternatives() {
  return <PinterestInfographic data={data} />;
}
