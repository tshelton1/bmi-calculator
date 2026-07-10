import PinterestInfographic, {
  type InfographicData,
} from "@/components/infographics/PinterestInfographic";

const data: InfographicData = {
  slug: "bmr-explained",
  headlineLines: ["BMR: Calories", "You Burn at", "Rest"],
  keyStat: { value: "60–70%", label: "Of daily calories are burned at rest" },
  points: [
    "BMR is the energy to keep you alive",
    "Mifflin-St Jeor is most accurate",
    "More muscle raises your BMR",
    "Age and low thyroid lower it",
    "Don't diet below your BMR",
  ],
  chart: {
    type: "table",
    caption: "Which formula to use",
    headers: ["Formula", "Best for"],
    rows: [
      ["Mifflin-St Jeor", "Most people (preferred)"],
      ["Harris-Benedict", "Older standard"],
      ["Katch-McArdle", "If body fat % is known"],
    ],
  },
  ctaText: "Calculate your BMR free",
  ctaPath: "/bmr-calculator",
};

export default function BmrExplained() {
  return <PinterestInfographic data={data} />;
}
