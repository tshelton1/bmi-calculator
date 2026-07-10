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
    <div className="bg-white shadow-luxury-md rounded-none border-t-2 border-gold-500">
      <div className="grid sm:grid-cols-2 gap-4 p-5 md:p-8 border-b border-ivory-300">
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

      {hasInput ? (
        <>
          <div className="bg-forest-900 border-l-2 border-gold-500 p-8 md:p-10">
            <p className="eyebrow text-forest-200 mb-2">
              Calories / day — {MACRO_GOALS[goal].label.toLowerCase()}
            </p>
            <span className="block font-mono text-6xl md:text-7xl font-light text-gold-400 tracking-display leading-none">
              {macros.calories.toLocaleString()}
            </span>
            <hr className="divider-gold my-6" />
            <div className="grid grid-cols-3 gap-6">
              <div>
                <p className="eyebrow text-forest-400">Protein</p>
                <p className="font-mono text-2xl text-gold-400 mt-1">
                  {macros.proteinG}g
                </p>
              </div>
              <div>
                <p className="eyebrow text-forest-400">Fat</p>
                <p className="font-mono text-2xl text-gold-400 mt-1">
                  {macros.fatG}g
                </p>
              </div>
              <div>
                <p className="eyebrow text-forest-400">Carbs</p>
                <p className="font-mono text-2xl text-gold-400 mt-1">
                  {macros.carbsG}g
                </p>
              </div>
            </div>
          </div>
          <div className="p-5 md:p-8">
            <MacroBar
              proteinCalories={macros.proteinCalories}
              fatCalories={macros.fatCalories}
              carbsCalories={macros.carbsCalories}
            />
          </div>
        </>
      ) : (
        <div className="p-5 md:p-8">
          <p className="text-ink-500 text-sm font-mono">
            Enter your stats and activity level to see daily macro targets.
          </p>
        </div>
      )}

      <div className="border-t border-ivory-300 p-5 text-xs text-ink-500 font-mono leading-relaxed">
        Protein is set by body weight, fat by a percentage of total calories,
        and carbs fill whatever remains. These are starting points — adjust
        based on how your weight, energy, and performance respond over a few
        consistent weeks.
      </div>
    </div>
  );
}
