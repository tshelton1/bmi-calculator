import PinterestInfographic, {
  type InfographicData,
} from "@/components/infographics/PinterestInfographic";

const data: InfographicData = {
  slug: "navy-body-fat-method-explained",
  headlineLines: ["The Navy Body", "Fat Method", "Explained"],
  keyStat: { value: "±3–4%", label: "Typical accuracy vs a DEXA scan" },
  points: [
    "Built by the US Navy in the 1980s",
    "Needs only a flexible tape measure",
    "Men: neck + waist + height",
    "Women: add the hip measurement",
    "Best for tracking change over time",
  ],
  chart: {
    type: "table",
    caption: "What to measure",
    headers: ["Measurement", "Men", "Women"],
    rows: [
      ["Neck", "Yes", "Yes"],
      ["Waist", "Yes", "Yes"],
      ["Hips", "No", "Yes"],
    ],
  },
  ctaText: "Estimate your body fat free",
  ctaPath: "/body-fat-calculator",
};

export default function NavyBodyFatMethod() {
  return <PinterestInfographic data={data} />;
}
