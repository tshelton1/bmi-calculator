// src/components/tools/MacroCalculatorTool.tsx
"use client";

import { useState, useMemo } from "react";
import NumberField from "@/components/NumberField";
import SexToggle from "@/components/SexToggle";
import ActivitySelect from "@/components/ActivitySelect";
import GoalToggle from "@/components/GoalToggle";
import MacroBar from "@/components/MacroBar";
import ResetMetricsLink from "@/components/ResetMetricsLink";
import { useUserMetrics } from "@/hooks/useUserMetrics";
import {
  calculateBMR,
  calculateTDEE,
  calculateMacros,
  MACRO_GOALS,
  type ActivityLevel,
  type MacroGoal,
} from "@/lib/calculations";

export default function MacroCalculatorTool() {
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
  const [activity, setActivity] = useState<ActivityLevel>("moderate");
  const [goal, setGoal] = useState<MacroGoal>("maintenance");

  const heightInches = (parseFloat(feet) || 0) * 12 + (parseFloat(inches) || 0);
  const weightLbs = parseFloat(weight) || 0;
  const ageYears = parseFloat(age) || 0;
  const hasInput = heightInches > 0 && weightLbs > 0 && ageYears > 0;

  const bmr = useMemo(
    () => calculateBMR(weightLbs, heightInches, ageYears, sex),
    [weightLbs, heightInches, ageYears, sex]
  );
  const tdee = useMemo(() => calculateTDEE(bmr, activity), [bmr, activity]);
  const macros = useMemo(
    () => calculateMacros(weightLbs, tdee, goal),
    [weightLbs, tdee, goal]
  );

  return (
    <div className="border border-ink/20 bg-paper">
      <div className="grid sm:grid-cols-2 gap-4 p-5 border-b border-ink/15">
        <div className="grid grid-cols-2 gap-4">
          <NumberField id="macro-feet" label="Height — ft" value={feet} onChange={setFeet} unit="ft" />
          <NumberField id="macro-inches" label="Height — in" value={inches} onChange={setInches} unit="in" />
        </div>
        <NumberField id="macro-weight" label="Weight" value={weight} onChange={setWeight} unit="lb" />
        <NumberField id="macro-age" label="Age" value={age} onChange={setAge} unit="yrs" />
        <SexToggle value={sex} onChange={setSex} />
        <div className="sm:col-span-2">
          <ActivitySelect value={activity} onChange={setActivity} />
        </div>
        <div className="sm:col-span-2">
          <GoalToggle value={goal} onChange={setGoal} />
        </div>
        <div className="sm:col-span-2">
          <ResetMetricsLink />
        </div>
      </div>

      <div className="p-5">
        {hasInput ? (
          <>
            <div className="flex items-end gap-3 mb-4">
              <span className="text-5xl font-mono font-semibold text-ink leading-none">
                {macros.calories.toLocaleString()}
              </span>
              <span className="text-sage text-sm font-mono pb-1.5">
                calories / day — {MACRO_GOALS[goal].label.toLowerCase()}
              </span>
            </div>
            <div className="grid grid-cols-3 gap-px bg-line border border-line text-sm mb-5">
              <div className="bg-paper p-3">
                <p className="text-xs text-sage font-mono uppercase mb-1">Protein</p>
                <p className="font-mono font-semibold text-ink">
                  {macros.proteinG}g
                </p>
              </div>
              <div className="bg-paper p-3">
                <p className="text-xs text-sage font-mono uppercase mb-1">Fat</p>
                <p className="font-mono font-semibold text-ink">
                  {macros.fatG}g
                </p>
              </div>
              <div className="bg-paper p-3">
                <p className="text-xs text-sage font-mono uppercase mb-1">Carbs</p>
                <p className="font-mono font-semibold text-ink">
                  {macros.carbsG}g
                </p>
              </div>
            </div>
            <MacroBar
              proteinCalories={macros.proteinCalories}
              fatCalories={macros.fatCalories}
              carbsCalories={macros.carbsCalories}
            />
          </>
        ) : (
          <p className="text-sage text-sm font-mono">
            Enter your stats and activity level to see daily macro targets.
          </p>
        )}
      </div>

      <div className="border-t border-ink/15 p-5 text-xs text-sage font-mono leading-relaxed">
        Protein is set by body weight, fat by a percentage of total calories,
        and carbs fill whatever remains. These are starting points — adjust
        based on how your weight, energy, and performance respond over a few
        consistent weeks.
      </div>
    </div>
  );
}
