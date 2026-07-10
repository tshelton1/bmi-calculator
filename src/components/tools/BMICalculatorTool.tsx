// src/components/tools/BMICalculatorTool.tsx
"use client";

import { useMemo } from "react";
import NumberField from "@/components/NumberField";
import MeasurementStrip from "@/components/MeasurementStrip";
import ResetMetricsLink from "@/components/ResetMetricsLink";
import ContentReviewAttribution from "@/components/ContentReviewAttribution";
import { useUserMetrics } from "@/hooks/useUserMetrics";
import { calculateBMI, getBMICategory, BMI_CATEGORIES } from "@/lib/calculations";

export default function BMICalculatorTool() {
  const { feet, inches, weight, setFeet, setInches, setWeight } = useUserMetrics();

  const heightInches = (parseFloat(feet) || 0) * 12 + (parseFloat(inches) || 0);
  const weightLbs = parseFloat(weight) || 0;

  const bmi = useMemo(
    () => calculateBMI(weightLbs, heightInches),
    [weightLbs, heightInches]
  );
  const category = getBMICategory(bmi);
  const hasInput = heightInches > 0 && weightLbs > 0;

  return (
    <div className="bg-white shadow-luxury-md rounded-none border-t-2 border-gold-500">
      <div className="grid sm:grid-cols-3 gap-4 p-5 md:p-8 border-b border-ivory-300">
        <NumberField
          id="bmi-feet"
          label="Height — feet"
          value={feet}
          onChange={setFeet}
          unit="ft"
        />
        <NumberField
          id="bmi-inches"
          label="Height — inches"
          value={inches}
          onChange={setInches}
          unit="in"
        />
        <NumberField
          id="bmi-weight"
          label="Weight"
          value={weight}
          onChange={setWeight}
          unit="lb"
        />
        <div className="sm:col-span-3">
          <ResetMetricsLink />
        </div>
      </div>

      {hasInput ? (
        <>
          <div className="bg-forest-900 border-l-2 border-gold-500 p-8 md:p-10">
            <p className="eyebrow text-forest-200 mb-2">Body Mass Index</p>
            <span className="block font-mono text-6xl md:text-7xl font-light text-gold-400 tracking-display leading-none">
              {bmi}
            </span>
            <p className="font-display text-2xl text-ivory-100 mt-3">
              {category.label}
            </p>
          </div>
          <div className="p-5 md:p-8">
            <MeasurementStrip
              segments={BMI_CATEGORIES}
              value={bmi}
              displayMax={40}
            />
          </div>
        </>
      ) : (
        <div className="p-5 md:p-8">
          <p className="text-ink-500 text-sm font-mono">
            Enter height and weight to see your reading.
          </p>
        </div>
      )}

      <div className="border-t border-ivory-300 p-5 text-xs text-ink-500 font-mono leading-relaxed">
        BMI is a screening tool, not a diagnosis. It does not distinguish
        muscle from fat and can read high for muscular individuals or low for
        those with low muscle mass. Talk to a clinician about what your
        number means for you.
        <ContentReviewAttribution />
      </div>
    </div>
  );
}
