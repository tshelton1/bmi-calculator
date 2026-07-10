"use client";

import { useMemo, useState } from "react";
import NumberField from "@/components/NumberField";
import SexToggle from "@/components/SexToggle";
import ResetMetricsLink from "@/components/ResetMetricsLink";
import { useUserMetrics } from "@/hooks/useUserMetrics";
import {
  calculateBMR,
  describeWeightPosition,
  estimateFrameSize,
  formatWeightRange,
  personalizedHealthyWeightRange,
  standardHealthyWeightRange,
  type FrameSize,
} from "@/lib/calculations";

const FRAME_LABELS: Record<FrameSize, string> = {
  small: "Small",
  medium: "Medium",
  large: "Large",
};

export default function HealthyWeightRangeTool() {
  const {
    feet,
    inches,
    weight,
    age,
    sex,
    setFeet,
    setInches,
    setWeight,
    setSex,
  } = useUserMetrics();
  const [wrist, setWrist] = useState("6.5");

  const heightInches =
    (parseFloat(feet) || 0) * 12 + (parseFloat(inches) || 0);
  const weightLbs = parseFloat(weight) || 0;
  const wristInches = parseFloat(wrist) || 0;
  const ageYears = parseFloat(age) || 0;

  const hasHeight = heightInches > 0;
  const hasWrist = wristInches > 0;

  const standard = useMemo(
    () => standardHealthyWeightRange(heightInches),
    [heightInches]
  );

  const frame = useMemo(
    () =>
      hasHeight && hasWrist
        ? estimateFrameSize(heightInches, wristInches, sex)
        : null,
    [hasHeight, hasWrist, heightInches, wristInches, sex]
  );

  const personalized = useMemo(
    () =>
      frame && hasHeight
        ? personalizedHealthyWeightRange(heightInches, frame)
        : null,
    [frame, hasHeight, heightInches]
  );

  const bmr = useMemo(() => {
    if (heightInches > 0 && weightLbs > 0 && ageYears > 0) {
      return calculateBMR(weightLbs, heightInches, ageYears, sex);
    }
    return null;
  }, [heightInches, weightLbs, ageYears, sex]);

  const positionNote = useMemo(() => {
    if (!personalized || weightLbs <= 0) return null;
    return describeWeightPosition(weightLbs, standard, personalized);
  }, [weightLbs, standard, personalized]);

  const showResult = hasHeight && hasWrist && frame && personalized;

  return (
    <div className="bg-white shadow-luxury-md rounded-none border-t-2 border-gold-500">
      <div className="grid sm:grid-cols-3 gap-4 p-5 md:p-8 border-b border-ivory-300">
        <NumberField
          id="hwr-feet"
          label="Height — feet"
          value={feet}
          onChange={setFeet}
          unit="ft"
        />
        <NumberField
          id="hwr-inches"
          label="Height — inches"
          value={inches}
          onChange={setInches}
          unit="in"
        />
        <NumberField
          id="hwr-weight"
          label="Weight (optional)"
          value={weight}
          onChange={setWeight}
          unit="lb"
        />
        <NumberField
          id="hwr-wrist"
          label="Wrist circumference"
          value={wrist}
          onChange={setWrist}
          unit="in"
        />
        <SexToggle value={sex} onChange={setSex} />
        <div className="sm:col-span-3">
          <ResetMetricsLink />
        </div>
      </div>

      {showResult ? (
        <>
          <div className="bg-forest-900 border-l-2 border-gold-500 p-8 md:p-10">
            <p className="eyebrow text-forest-200 mb-2">Your estimated range</p>
            <span className="block font-mono text-4xl md:text-6xl font-light text-gold-400 tracking-display leading-none">
              {formatWeightRange(personalized.minLb, personalized.maxLb)}
            </span>
            <hr className="divider-gold my-6" />
            <div className="grid grid-cols-2 gap-6">
              <div>
                <p className="eyebrow text-forest-400">Standard clinical</p>
                <p className="font-mono text-xl text-gold-400 mt-1">
                  {formatWeightRange(standard.minLb, standard.maxLb)}
                </p>
              </div>
              <div>
                <p className="eyebrow text-forest-400">Estimated frame</p>
                <p className="font-mono text-xl text-gold-400 mt-1">
                  {FRAME_LABELS[frame]}
                </p>
              </div>
            </div>
          </div>
          <div className="p-5 md:p-8 space-y-4">
            <p className="text-sm text-ink-500 leading-relaxed">
              Estimated frame: {FRAME_LABELS[frame]} — based on wrist
              circumference, a simple proxy, not a clinical measurement.
            </p>
            {positionNote && (
              <p className="text-sm text-ink-700 leading-relaxed border-l-2 border-gold-500 bg-gold-100 p-4">
                {positionNote}
              </p>
            )}
            {bmr !== null && (
              <p className="text-sm text-ink-500 leading-relaxed">
                Your BMR of {bmr.toLocaleString()} calories suggests your
                resting energy needs at your current weight — one input among
                many when thinking about where you sit in a healthy range.
              </p>
            )}
          </div>
        </>
      ) : (
        <div className="p-5 md:p-8">
          <p className="text-ink-500 text-sm font-mono">
            Enter height and wrist circumference to see your personalized
            weight range.
          </p>
        </div>
      )}

      <div className="border-t border-ivory-300 p-5 text-xs text-ink-500 font-mono leading-relaxed">
        This is a screening estimate, not a diagnosis. Frame size estimation
        is a rough proxy. Talk to a clinician about what your healthy range
        looks like for you.
      </div>
    </div>
  );
}
