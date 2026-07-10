import PinterestInfographic, {
  type InfographicData,
} from "@/components/infographics/PinterestInfographic";

const data: InfographicData = {
  slug: "body-fat-percentage-by-age-and-sex",
  headlineLines: ["Body Fat % by", "Age and Sex"],
  keyStat: { value: "10–13%", label: "Essential fat for women (2–5% for men)" },
  points: [
    "Women need more essential fat",
    "Healthy bands differ by sex",
    "Body fat rises gently with age",
    "Too low disrupts hormones",
    "Aim for the fitness range",
  ],
  chart: {
    type: "table",
    caption: "ACE reference ranges",
    headers: ["Category", "Men", "Women"],
    rows: [
      ["Athlete", "6–13%", "14–20%"],
      ["Fitness", "14–17%", "21–24%"],
      ["Acceptable", "18–24%", "25–31%"],
      ["Obese", "25%+", "32%+"],
    ],
  },
  ctaText: "Estimate your body fat free",
  ctaPath: "/body-fat-calculator",
};

export default function BodyFatPercentageByAge() {
  return <PinterestInfographic data={data} />;
}
