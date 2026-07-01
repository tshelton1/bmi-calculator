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
    <div className="border border-ink/20 bg-paper">
      <div className="grid sm:grid-cols-3 gap-4 p-5 border-b border-ink/15">
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

      <div className="p-5">
        {showResult ? (
          <>
            <p className="font-mono text-xs uppercase tracking-widest text-clay mb-2">
              Your estimated range
            </p>
            <div className="flex items-end gap-3 mb-4">
              <span className="text-4xl sm:text-5xl font-mono font-semibold text-ink leading-none">
                {formatWeightRange(personalized.minLb, personalized.maxLb)}
              </span>
            </div>
            <p className="text-sm text-sage font-mono mb-4">
              Standard clinical range:{" "}
              {formatWeightRange(standard.minLb, standard.maxLb)}
            </p>
            <p className="text-sm text-sage leading-relaxed mb-4">
              Estimated frame: {FRAME_LABELS[frame]} — based on wrist
              circumference, a simple proxy, not a clinical measurement.
            </p>
            {positionNote && (
              <p className="text-sm text-sage leading-relaxed mb-4 border border-ink/15 bg-ink/[0.02] p-4">
                {positionNote}
              </p>
            )}
            {bmr !== null && (
              <p className="text-sm text-sage leading-relaxed mb-2">
                Your BMR of {bmr.toLocaleString()} calories suggests your
                resting energy needs at your current weight — one input among
                many when thinking about where you sit in a healthy range.
              </p>
            )}
          </>
        ) : (
          <p className="text-sage text-sm font-mono">
            Enter height and wrist circumference to see your personalized
            weight range.
          </p>
        )}
      </div>

      <div className="border-t border-ink/15 p-5 text-xs text-sage font-mono leading-relaxed">
        This is a screening estimate, not a diagnosis. Frame size estimation
        is a rough proxy. Talk to a clinician about what your healthy range
        looks like for you.
      </div>
    </div>
  );
}
