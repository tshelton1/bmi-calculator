// src/lib/calculations.ts
// Shared formulas for BMI, BMR, TDEE (calorie needs), and body fat % calculators.
// All weight inputs are in pounds, height in inches, age in years, internally
// converted to metric where the formula requires it.

export type Sex = "male" | "female";

export type ActivityLevel =
  | "sedentary"
  | "light"
  | "moderate"
  | "active"
  | "very_active";

export const ACTIVITY_MULTIPLIERS: Record<ActivityLevel, number> = {
  sedentary: 1.2,
  light: 1.375,
  moderate: 1.55,
  active: 1.725,
  very_active: 1.9,
};

export const ACTIVITY_LABELS: Record<ActivityLevel, string> = {
  sedentary: "Sedentary (little or no exercise)",
  light: "Lightly active (1-3 days/week)",
  moderate: "Moderately active (3-5 days/week)",
  active: "Active (6-7 days/week)",
  very_active: "Very active (physical job or 2x/day training)",
};

function lbsToKg(lbs: number): number {
  return lbs * 0.453592;
}

function inchesToCm(inches: number): number {
  return inches * 2.54;
}

export function calculateBMI(weightLbs: number, heightInches: number): number {
  if (heightInches <= 0) return 0;
  const bmi = (weightLbs / (heightInches * heightInches)) * 703;
  return Math.round(bmi * 10) / 10;
}

export type BMICategory = {
  label: string;
  range: [number, number]; // inclusive lower, exclusive upper (Infinity for last)
};

export const BMI_CATEGORIES: BMICategory[] = [
  { label: "Underweight", range: [0, 18.5] },
  { label: "Normal", range: [18.5, 25] },
  { label: "Overweight", range: [25, 30] },
  { label: "Obese", range: [30, Infinity] },
];

export function getBMICategory(bmi: number): BMICategory {
  return (
    BMI_CATEGORIES.find((c) => bmi >= c.range[0] && bmi < c.range[1]) ??
    BMI_CATEGORIES[BMI_CATEGORIES.length - 1]
  );
}

export const BMI_HEALTHY_MIN = 18.5;
export const BMI_HEALTHY_MAX = 24.9;

/** Weight bounds (lb) for a given height at min/max BMI. */
export function weightRangeFromBMI(
  heightInches: number,
  bmiMin: number,
  bmiMax: number
): { minLb: number; maxLb: number } {
  if (heightInches <= 0) return { minLb: 0, maxLb: 0 };
  const minLb = (bmiMin * heightInches * heightInches) / 703;
  const maxLb = (bmiMax * heightInches * heightInches) / 703;
  return { minLb: Math.round(minLb), maxLb: Math.round(maxLb) };
}

export function standardHealthyWeightRange(heightInches: number) {
  return weightRangeFromBMI(heightInches, BMI_HEALTHY_MIN, BMI_HEALTHY_MAX);
}

export type FrameSize = "small" | "medium" | "large";

/**
 * Height-to-wrist ratio frame estimate (commonly cited in YMCA / Robinson-style
 * charts). Thresholds vary slightly by source; values below match widely
 * published cutoffs — treat as a rough proxy, not clinical bone measurement.
 */
export function estimateFrameSize(
  heightInches: number,
  wristInches: number,
  sex: Sex
): FrameSize | null {
  if (heightInches <= 0 || wristInches <= 0) return null;
  const ratio = heightInches / wristInches;
  if (sex === "male") {
    if (ratio > 10.4) return "small";
    if (ratio >= 9.6) return "medium";
    return "large";
  }
  if (ratio > 11.0) return "small";
  if (ratio >= 10.1) return "medium";
  return "large";
}

const BMI_HEALTHY_MID = (BMI_HEALTHY_MIN + BMI_HEALTHY_MAX) / 2;

/** Narrows the clinical BMI band by frame — still within 18.5–24.9. */
export function personalizedBMIRange(frame: FrameSize): {
  min: number;
  max: number;
} {
  const span = BMI_HEALTHY_MAX - BMI_HEALTHY_MIN;
  switch (frame) {
    case "small":
      return { min: BMI_HEALTHY_MIN, max: BMI_HEALTHY_MID };
    case "large":
      return { min: BMI_HEALTHY_MID, max: BMI_HEALTHY_MAX };
    case "medium":
      return {
        min: BMI_HEALTHY_MIN + span * 0.25,
        max: BMI_HEALTHY_MIN + span * 0.75,
      };
  }
}

export function personalizedHealthyWeightRange(
  heightInches: number,
  frame: FrameSize
) {
  const { min, max } = personalizedBMIRange(frame);
  return weightRangeFromBMI(heightInches, min, max);
}

export function formatWeightRange(minLb: number, maxLb: number): string {
  return `${minLb}–${maxLb} lb`;
}

export function describeWeightPosition(
  weightLb: number,
  standard: { minLb: number; maxLb: number },
  personalized: { minLb: number; maxLb: number }
): string | null {
  if (weightLb <= 0) return null;
  if (weightLb < standard.minLb) {
    return `Your weight (${weightLb} lb) is below the standard clinical range for your height.`;
  }
  if (weightLb > standard.maxLb) {
    return `Your weight (${weightLb} lb) is above the standard clinical range for your height.`;
  }
  if (weightLb >= personalized.minLb && weightLb <= personalized.maxLb) {
    return `Your weight (${weightLb} lb) falls within the frame-adjusted estimate and the standard clinical range.`;
  }
  if (weightLb < personalized.minLb) {
    return `Your weight (${weightLb} lb) is within the standard clinical range but below the frame-adjusted estimate.`;
  }
  return `Your weight (${weightLb} lb) is within the standard clinical range but above the frame-adjusted estimate.`;
}

// Mifflin-St Jeor equation — the modern standard, more accurate than Harris-Benedict
// for most adults.
export function calculateBMR(
  weightLbs: number,
  heightInches: number,
  age: number,
  sex: Sex
): number {
  const weightKg = lbsToKg(weightLbs);
  const heightCm = inchesToCm(heightInches);
  const base = 10 * weightKg + 6.25 * heightCm - 5 * age;
  const bmr = sex === "male" ? base + 5 : base - 161;
  return Math.round(bmr);
}

export function calculateTDEE(bmr: number, activity: ActivityLevel): number {
  return Math.round(bmr * ACTIVITY_MULTIPLIERS[activity]);
}

// US Navy method for body fat % — uses circumference measurements (inches).
// Requires waist + neck for men; waist + neck + hip for women.
export function calculateBodyFatNavy(
  sex: Sex,
  heightInches: number,
  waistInches: number,
  neckInches: number,
  hipInches?: number
): number {
  const log10 = (n: number) => Math.log(n) / Math.LN10;

  let bodyFat: number;
  if (sex === "male") {
    bodyFat =
      495 /
        (1.0324 -
          0.19077 * log10(waistInches - neckInches) +
          0.15456 * log10(heightInches)) -
      450;
  } else {
    const hip = hipInches ?? 0;
    bodyFat =
      495 /
        (1.29579 -
          0.35004 * log10(waistInches + hip - neckInches) +
          0.22100 * log10(heightInches)) -
      450;
  }
  return Math.round(bodyFat * 10) / 10;
}

export type BodyFatCategory = {
  label: string;
  range: [number, number];
};

// Categories differ by sex (ACE body fat % norms)
export function getBodyFatCategories(sex: Sex): BodyFatCategory[] {
  if (sex === "male") {
    return [
      { label: "Essential fat", range: [0, 6] },
      { label: "Athletic", range: [6, 14] },
      { label: "Fit", range: [14, 18] },
      { label: "Average", range: [18, 25] },
      { label: "Above average", range: [25, Infinity] },
    ];
  }
  return [
    { label: "Essential fat", range: [0, 14] },
    { label: "Athletic", range: [14, 21] },
    { label: "Fit", range: [21, 25] },
    { label: "Average", range: [25, 32] },
    { label: "Above average", range: [32, Infinity] },
  ];
}

export function getBodyFatCategory(
  bodyFatPct: number,
  sex: Sex
): BodyFatCategory {
  const categories = getBodyFatCategories(sex);
  return (
    categories.find(
      (c) => bodyFatPct >= c.range[0] && bodyFatPct < c.range[1]
    ) ?? categories[categories.length - 1]
  );
}

export type MacroGoal = "cutting" | "maintenance" | "bulking";

export const MACRO_GOALS: Record<
  MacroGoal,
  {
    label: string;
    description: string;
    calorieAdjustment: number;
    proteinPerLb: number;
    fatPctOfCalories: number;
  }
> = {
  cutting: {
    label: "Cutting",
    description: "Moderate deficit to lose fat while preserving muscle.",
    calorieAdjustment: -500,
    proteinPerLb: 1.0,
    fatPctOfCalories: 0.25,
  },
  maintenance: {
    label: "Maintenance",
    description: "Eat at TDEE to hold weight steady.",
    calorieAdjustment: 0,
    proteinPerLb: 0.8,
    fatPctOfCalories: 0.3,
  },
  bulking: {
    label: "Bulking",
    description: "Modest surplus to support muscle gain with minimal fat.",
    calorieAdjustment: 300,
    proteinPerLb: 0.9,
    fatPctOfCalories: 0.25,
  },
};

export type MacroResult = {
  calories: number;
  proteinG: number;
  fatG: number;
  carbsG: number;
  proteinCalories: number;
  fatCalories: number;
  carbsCalories: number;
};

export function calculateMacros(
  weightLbs: number,
  tdee: number,
  goal: MacroGoal
): MacroResult {
  const { calorieAdjustment, proteinPerLb, fatPctOfCalories } =
    MACRO_GOALS[goal];
  const calories = Math.max(0, Math.round(tdee + calorieAdjustment));
  const proteinG = Math.round(weightLbs * proteinPerLb);
  const proteinCalories = proteinG * 4;
  const fatCalories = Math.round(calories * fatPctOfCalories);
  const fatG = Math.round(fatCalories / 9);
  const carbsCalories = Math.max(0, calories - proteinCalories - fatCalories);
  const carbsG = Math.round(carbsCalories / 4);
  return {
    calories,
    proteinG,
    fatG,
    carbsG,
    proteinCalories,
    fatCalories,
    carbsCalories,
  };
}
