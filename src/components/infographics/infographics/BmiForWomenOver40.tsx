import PinterestInfographic, {
  type InfographicData,
} from "@/components/infographics/PinterestInfographic";

const data: InfographicData = {
  slug: "bmi-for-women-over-40",
  headlineLines: ["Healthy BMI for", "Women Over 40"],
  keyStat: { value: "35 in", label: "Waist size linked to higher risk (women)" },
  points: [
    "BMI can't see age-related muscle loss",
    "Menopause shifts fat to the abdomen",
    "Waist size matters more than BMI",
    "Lost muscle can hide gained fat",
    "Track waist, body fat, and strength",
  ],
  chart: {
    type: "table",
    caption: "What to track after 40",
    headers: ["Measure", "Healthy target"],
    rows: [
      ["Waist", "< 35 in"],
      ["Waist-to-height", "< 0.5"],
      ["Body fat %", "~23–33%"],
    ],
  },
  ctaText: "Calculate your BMI free",
  ctaPath: "/bmi-calculator",
};

export default function BmiForWomenOver40() {
  return <PinterestInfographic data={data} />;
}
