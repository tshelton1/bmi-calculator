import PinterestInfographic, {
  type InfographicData,
} from "@/components/infographics/PinterestInfographic";

const data: InfographicData = {
  slug: "healthy-bmi-range-by-age",
  headlineLines: ["Healthy BMI", "Range by Age"],
  keyStat: { value: "23–29", label: "Often ideal for adults over 60" },
  points: [
    "One BMI chart is used for all adults",
    "But ideal BMI drifts up with age",
    "Children use percentile charts",
    "Watch for sarcopenic obesity",
    "Mild overweight can protect elders",
  ],
  chart: {
    type: "table",
    caption: "How to read BMI by decade",
    headers: ["Age", "Practical range"],
    rows: [
      ["20–39", "18.5–24.9"],
      ["40–59", "18.5–24.9 + waist"],
      ["60–69", "~23–28"],
      ["70+", "~24–29"],
    ],
  },
  ctaText: "Calculate your BMI free",
  ctaPath: "/bmi-calculator",
};

export default function HealthyBmiRangeByAge() {
  return <PinterestInfographic data={data} />;
}
