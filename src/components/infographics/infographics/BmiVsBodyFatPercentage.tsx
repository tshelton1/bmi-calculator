import PinterestInfographic, {
  type InfographicData,
} from "@/components/infographics/PinterestInfographic";

const data: InfographicData = {
  slug: "bmi-vs-body-fat-percentage",
  headlineLines: ["BMI vs. Body Fat:", "Which Actually", "Matters?"],
  keyStat: { value: "±3–4%", label: "Navy method accuracy vs a DEXA scan" },
  points: [
    "BMI uses only height and weight",
    "Body fat % measures actual fat",
    "BMI mislabels muscular athletes",
    "The Navy method needs just a tape",
    "Use body fat % to track fat loss",
  ],
  chart: {
    type: "table",
    caption: "Body fat categories",
    headers: ["Category", "Men", "Women"],
    rows: [
      ["Athlete", "6–13%", "14–20%"],
      ["Fitness", "14–17%", "21–24%"],
      ["Acceptable", "18–24%", "25–31%"],
      ["Obese", "25%+", "32%+"],
    ],
  },
  ctaText: "Check your body fat % free",
  ctaPath: "/body-fat-calculator",
};

export default function BmiVsBodyFatPercentage() {
  return <PinterestInfographic data={data} />;
}
