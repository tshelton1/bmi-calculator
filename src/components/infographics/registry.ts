import type { ComponentType } from "react";
import BmiForWomenOver40 from "./infographics/BmiForWomenOver40";
import BmiVsBodyFatPercentage from "./infographics/BmiVsBodyFatPercentage";
import WhatDoesBmiOf25Mean from "./infographics/WhatDoesBmiOf25Mean";
import HowToCalculateTdee from "./infographics/HowToCalculateTdee";
import NavyBodyFatMethod from "./infographics/NavyBodyFatMethod";
import BmrExplained from "./infographics/BmrExplained";
import MacrosForWeightLoss from "./infographics/MacrosForWeightLoss";
import HealthyBmiRangeByAge from "./infographics/HealthyBmiRangeByAge";
import HowToLoseWeightWithBmi from "./infographics/HowToLoseWeightWithBmi";
import BodyFatPercentageByAge from "./infographics/BodyFatPercentageByAge";
import CalorieDeficitForWeightLoss from "./infographics/CalorieDeficitForWeightLoss";
import BmiLimitationsAndAlternatives from "./infographics/BmiLimitationsAndAlternatives";

export type InfographicEntry = {
  slug: string;
  Component: ComponentType;
};

// Slugs mirror the blog post slugs so titles/descriptions can be shared.
export const INFOGRAPHICS: InfographicEntry[] = [
  { slug: "bmi-for-women-over-40", Component: BmiForWomenOver40 },
  { slug: "bmi-vs-body-fat-percentage", Component: BmiVsBodyFatPercentage },
  { slug: "what-does-bmi-of-25-mean", Component: WhatDoesBmiOf25Mean },
  { slug: "how-to-calculate-tdee", Component: HowToCalculateTdee },
  { slug: "navy-body-fat-method-explained", Component: NavyBodyFatMethod },
  { slug: "bmr-explained", Component: BmrExplained },
  { slug: "macros-for-weight-loss", Component: MacrosForWeightLoss },
  { slug: "healthy-bmi-range-by-age", Component: HealthyBmiRangeByAge },
  { slug: "how-to-lose-weight-with-bmi-calculator", Component: HowToLoseWeightWithBmi },
  { slug: "body-fat-percentage-by-age-and-sex", Component: BodyFatPercentageByAge },
  { slug: "calorie-deficit-for-weight-loss", Component: CalorieDeficitForWeightLoss },
  { slug: "bmi-limitations-and-alternatives", Component: BmiLimitationsAndAlternatives },
];

export function getAllInfographicSlugs(): string[] {
  return INFOGRAPHICS.map((e) => e.slug);
}

export function getInfographic(slug: string): InfographicEntry | undefined {
  return INFOGRAPHICS.find((e) => e.slug === slug);
}
