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
    <div className="border border-ink/20 bg-paper">
      <div className="grid sm:grid-cols-3 gap-4 p-5 border-b border-ink/15">
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

      <div className="p-5">
        {hasInput ? (
          <>
            <div className="flex items-end gap-3 mb-5">
              <span className="text-5xl font-mono font-semibold text-ink leading-none">
                {bmi}
              </span>
              <span className="text-sage text-sm font-mono pb-1.5">
                BMI — {category.label}
              </span>
            </div>
            <MeasurementStrip
              segments={BMI_CATEGORIES}
              value={bmi}
              displayMax={40}
            />
          </>
        ) : (
          <p className="text-sage text-sm font-mono">
            Enter height and weight to see your reading.
          </p>
        )}
      </div>

      <div className="border-t border-ink/15 p-5 text-xs text-sage font-mono leading-relaxed">
        BMI is a screening tool, not a diagnosis. It does not distinguish
        muscle from fat and can read high for muscular individuals or low for
        those with low muscle mass. Talk to a clinician about what your
        number means for you.
        <ContentReviewAttribution />
      </div>
    </div>
  );
}
