// src/components/tools/CalorieCalculatorTool.tsx
"use client";

import { useState, useMemo } from "react";
import NumberField from "@/components/NumberField";
import SexToggle from "@/components/SexToggle";
import ActivitySelect from "@/components/ActivitySelect";
import ResetMetricsLink from "@/components/ResetMetricsLink";
import ExampleMealsSection from "@/components/ExampleMealsSection";
import { useUserMetrics } from "@/hooks/useUserMetrics";
import {
  calculateBMR,
  calculateTDEE,
  calculateMacros,
  type ActivityLevel,
} from "@/lib/calculations";

export default function CalorieCalculatorTool() {
  const {
    feet,
    inches,
    weight,
    age,
    sex,
    poundsToLose,
    setFeet,
    setInches,
    setWeight,
    setAge,
    setSex,
    setPoundsToLose,
  } = useUserMetrics();
  const [activity, setActivity] = useState<ActivityLevel>("moderate");

  const heightInches = (parseFloat(feet) || 0) * 12 + (parseFloat(inches) || 0);
  const weightLbs = parseFloat(weight) || 0;
  const ageYears = parseFloat(age) || 0;
  const poundsGoal = parseFloat(poundsToLose) || 0;
  const hasInput = heightInches > 0 && weightLbs > 0 && ageYears > 0;

  const bmr = useMemo(
    () => calculateBMR(weightLbs, heightInches, ageYears, sex),
    [weightLbs, heightInches, ageYears, sex]
  );
  const tdee = useMemo(() => calculateTDEE(bmr, activity), [bmr, activity]);
  const macros = useMemo(
    () => calculateMacros(weightLbs, tdee, "cutting"),
    [weightLbs, tdee]
  );

  const estimatedWeeks =
    poundsGoal > 0 ? Math.round(poundsGoal) : null;

  return (
    <div className="bg-white shadow-luxury-md rounded-none border-t-2 border-gold-500">
      <div className="grid sm:grid-cols-2 gap-4 p-5 md:p-8 border-b border-ivory-300">
        <div className="grid grid-cols-2 gap-4">
          <NumberField id="cal-feet" label="Height — ft" value={feet} onChange={setFeet} unit="ft" />
          <NumberField id="cal-inches" label="Height — in" value={inches} onChange={setInches} unit="in" />
        </div>
        <NumberField id="cal-weight" label="Weight" value={weight} onChange={setWeight} unit="lb" />
        <NumberField id="cal-age" label="Age" value={age} onChange={setAge} unit="yrs" />
        <SexToggle value={sex} onChange={setSex} />
        <div className="sm:col-span-2">
          <ActivitySelect value={activity} onChange={setActivity} />
        </div>
        <div className="sm:col-span-2">
          <ResetMetricsLink />
        </div>
      </div>

      {hasInput ? (
        <>
          <div className="bg-forest-900 border-l-2 border-gold-500 p-8 md:p-10">
            <p className="eyebrow text-forest-200 mb-2">
              Daily calories to maintain
            </p>
            <span className="block font-mono text-6xl md:text-7xl font-light text-gold-400 tracking-display leading-none">
              {tdee.toLocaleString()}
            </span>
            <hr className="divider-gold my-6" />
            <div className="grid grid-cols-2 gap-6">
              <div>
                <p className="eyebrow text-forest-400">Lose ~1lb / week</p>
                <p className="font-mono text-2xl text-gold-400 mt-1">
                  {(tdee - 500).toLocaleString()}
                </p>
              </div>
              <div>
                <p className="eyebrow text-forest-400">Gain ~1lb / week</p>
                <p className="font-mono text-2xl text-gold-400 mt-1">
                  {(tdee + 500).toLocaleString()}
                </p>
              </div>
            </div>
          </div>

          <div className="p-5 md:p-8">
            <NumberField
              id="cal-pounds-to-lose"
              label="How many pounds do you want to lose?"
              value={poundsToLose}
              onChange={setPoundsToLose}
              unit="lb"
            />

            {estimatedWeeks !== null && (
              <div className="mt-4 space-y-3">
                <p className="text-sm text-ink-700 font-mono">
                  At a moderate pace, this would take roughly {estimatedWeeks}{" "}
                  {estimatedWeeks === 1 ? "week" : "weeks"}.
                </p>
                <p className="text-xs text-ink-500 font-mono leading-relaxed">
                  This is a rough estimate based on a general 500-calorie deficit.
                  Actual results vary by individual — faster weight loss goals require
                  larger deficits, which carry more risk of muscle loss and are not
                  recommended without guidance from a healthcare provider.
                </p>
              </div>
            )}

            <div className="mt-6">
              <p className="eyebrow mb-2">Macro targets at moderate deficit</p>
              <div className="grid grid-cols-3 gap-px bg-ivory-300 border border-ivory-300 text-sm">
                <div className="bg-white p-3">
                  <p className="text-xs text-ink-500 font-mono uppercase mb-1">Protein</p>
                  <p className="font-mono font-semibold text-ink-900">
                    {macros.proteinG}g
                  </p>
                </div>
                <div className="bg-white p-3">
                  <p className="text-xs text-ink-500 font-mono uppercase mb-1">Fat</p>
                  <p className="font-mono font-semibold text-ink-900">
                    {macros.fatG}g
                  </p>
                </div>
                <div className="bg-white p-3">
                  <p className="text-xs text-ink-500 font-mono uppercase mb-1">Carbs</p>
                  <p className="font-mono font-semibold text-ink-900">
                    {macros.carbsG}g
                  </p>
                </div>
              </div>
              <p className="text-xs text-ink-500 font-mono mt-2">
                Based on {macros.calories.toLocaleString()} cal/day (TDEE − 500)
              </p>
            </div>
          </div>
        </>
      ) : (
        <div className="p-5 md:p-8">
          <p className="text-ink-500 text-sm font-mono">
            Enter your stats and activity level to see daily calorie needs.
          </p>
        </div>
      )}

      {hasInput && (
        <div className="border-t border-ivory-300 p-5 md:p-8">
          <ExampleMealsSection />
        </div>
      )}

      <div className="border-t border-ivory-300 p-5 text-xs text-ink-500 font-mono leading-relaxed">
        This is your Total Daily Energy Expenditure (TDEE) — BMR adjusted for
        activity level. The +/- 500 calorie estimates target roughly one
        pound of change per week; individual results vary.
      </div>
    </div>
  );
}
