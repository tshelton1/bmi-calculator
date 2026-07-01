// src/components/tools/BMRCalculatorTool.tsx
"use client";

import { useMemo } from "react";
import NumberField from "@/components/NumberField";
import SexToggle from "@/components/SexToggle";
import BmrProteinAffiliate from "@/components/BmrProteinAffiliate";
import ResetMetricsLink from "@/components/ResetMetricsLink";
import { useUserMetrics } from "@/hooks/useUserMetrics";
import { calculateBMR } from "@/lib/calculations";

export default function BMRCalculatorTool() {
  const {
    feet,
    inches,
    weight,
    age,
    sex,
    setFeet,
    setInches,
    setWeight,
    setAge,
    setSex,
  } = useUserMetrics();

  const heightInches = (parseFloat(feet) || 0) * 12 + (parseFloat(inches) || 0);
  const weightLbs = parseFloat(weight) || 0;
  const ageYears = parseFloat(age) || 0;
  const hasInput = heightInches > 0 && weightLbs > 0 && ageYears > 0;

  const bmr = useMemo(
    () => calculateBMR(weightLbs, heightInches, ageYears, sex),
    [weightLbs, heightInches, ageYears, sex]
  );

  return (
    <>
    <div className="border border-ink/20 bg-paper">
      <div className="grid sm:grid-cols-2 gap-4 p-5 border-b border-ink/15">
        <div className="grid grid-cols-2 gap-4">
          <NumberField id="bmr-feet" label="Height — ft" value={feet} onChange={setFeet} unit="ft" />
          <NumberField id="bmr-inches" label="Height — in" value={inches} onChange={setInches} unit="in" />
        </div>
        <NumberField id="bmr-weight" label="Weight" value={weight} onChange={setWeight} unit="lb" />
        <NumberField id="bmr-age" label="Age" value={age} onChange={setAge} unit="yrs" />
        <SexToggle value={sex} onChange={setSex} />
        <div className="sm:col-span-2">
          <ResetMetricsLink />
        </div>
      </div>

      <div className="p-5">
        {hasInput ? (
          <div className="flex items-end gap-3">
            <span className="text-5xl font-mono font-semibold text-ink leading-none">
              {bmr.toLocaleString()}
            </span>
            <span className="text-sage text-sm font-mono pb-1.5">
              calories / day at rest
            </span>
          </div>
        ) : (
          <p className="text-sage text-sm font-mono">
            Enter your stats to see your basal metabolic rate.
          </p>
        )}
      </div>

      <div className="border-t border-ink/15 p-5 text-xs text-sage font-mono leading-relaxed">
        BMR is the energy your body needs at complete rest — breathing,
        circulation, cell repair. It does not include any movement or
        exercise. Calculated using the Mifflin-St Jeor equation.
      </div>
    </div>
    <BmrProteinAffiliate bmr={bmr} weightLbs={weightLbs} hasInput={hasInput} />
    </>
  );
}
