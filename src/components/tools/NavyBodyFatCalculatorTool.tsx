"use client";

import { useMemo, useState } from "react";
import NumberField from "@/components/NumberField";
import SexToggle from "@/components/SexToggle";
import MeasurementStrip from "@/components/MeasurementStrip";
import ResetMetricsLink from "@/components/ResetMetricsLink";
import MeasureInfoTip from "@/components/MeasureInfoTip";
import { useUserMetrics } from "@/hooks/useUserMetrics";
import {
  calculateBodyFatNavy,
  getBodyFatCategory,
  getBodyFatCategories,
} from "@/lib/calculations";

type FieldLabelProps = {
  htmlFor: string;
  text: string;
  tip?: React.ReactNode;
  tipLabel?: string;
};

function FieldLabel({ htmlFor, text, tip, tipLabel }: FieldLabelProps) {
  return (
    <div className="flex items-center gap-2 mb-2">
      <label
        htmlFor={htmlFor}
        className="font-body text-xs font-medium tracking-wide uppercase text-ink-500"
      >
        {text}
      </label>
      {tip && tipLabel ? (
        <MeasureInfoTip label={tipLabel}>{tip}</MeasureInfoTip>
      ) : null}
    </div>
  );
}

/** Shared Navy body fat calculator UI (standalone page + blog embed). */
export default function NavyBodyFatCalculatorTool({
  embedded = false,
}: {
  embedded?: boolean;
}) {
  const { feet, inches, sex, setFeet, setInches, setSex } = useUserMetrics();
  const [waist, setWaist] = useState("");
  const [neck, setNeck] = useState("");
  const [hip, setHip] = useState("");

  const heightInches = (parseFloat(feet) || 0) * 12 + (parseFloat(inches) || 0);
  const waistInches = parseFloat(waist);
  const neckInches = parseFloat(neck);
  const hipInches = parseFloat(hip);

  const validationError = useMemo(() => {
    const touched = Boolean(waist || neck || hip);
    if (!touched) return null;

    const missingHeight = !(heightInches > 0);
    const missingWaist = !(waistInches > 0);
    const missingNeck = !(neckInches > 0);
    const missingHip = sex === "female" && !(hipInches > 0);

    if (missingHeight || missingWaist || missingNeck || missingHip) {
      if (sex === "female" && missingHip && waistInches > 0 && neckInches > 0 && heightInches > 0) {
        return "Add your hip circumference to complete the female Navy formula.";
      }
      return "Enter height, neck, and waist as positive numbers. Women also need hip circumference.";
    }

    if (sex === "male" && waistInches <= neckInches) {
      return "Waist needs to be larger than neck for the male formula. Double-check both tape readings.";
    }
    if (sex === "female" && waistInches + hipInches <= neckInches) {
      return "Waist plus hip needs to be larger than neck. Re-measure with the tape level and snug, not tight.";
    }
    return null;
  }, [
    waist,
    neck,
    hip,
    heightInches,
    waistInches,
    neckInches,
    hipInches,
    sex,
  ]);

  const bodyFat = useMemo(() => {
    if (validationError) return null;
    if (!(heightInches > 0 && waistInches > 0 && neckInches > 0)) return null;
    if (sex === "female" && !(hipInches > 0)) return null;
    return calculateBodyFatNavy(
      sex,
      heightInches,
      waistInches,
      neckInches,
      hipInches
    );
  }, [
    validationError,
    sex,
    heightInches,
    waistInches,
    neckInches,
    hipInches,
  ]);

  const category =
    bodyFat != null && bodyFat > 0
      ? getBodyFatCategory(bodyFat, sex)
      : null;
  const categories = getBodyFatCategories(sex);

  const waistTip =
    sex === "male" ? (
      <p>
        Measure at the navel (belly button). Keep the tape horizontal and
        relaxed. Do not suck in.
      </p>
    ) : (
      <p>
        Measure at the narrowest part of the waist. Keep the tape horizontal
        and relaxed. Do not suck in.
      </p>
    );

  return (
    <div
      className={`bg-white shadow-luxury-md rounded-none border-t-2 border-gold-500 ${
        embedded ? "my-8" : ""
      }`}
    >
      <div className="grid sm:grid-cols-2 gap-4 p-5 md:p-8 border-b border-ivory-300">
        <div className="grid grid-cols-2 gap-4">
          <NumberField
            id="navy-bf-feet"
            label="Height (ft)"
            value={feet}
            onChange={setFeet}
            unit="ft"
          />
          <NumberField
            id="navy-bf-inches"
            label="Height (in)"
            value={inches}
            onChange={setInches}
            unit="in"
          />
        </div>
        <SexToggle value={sex} onChange={setSex} />

        <div className="flex flex-col">
          <FieldLabel
            htmlFor="navy-bf-neck"
            text="Neck"
            tipLabel="Neck"
            tip={
              <p>
                Measure around the neck just below the larynx (Adam&apos;s
                apple), keeping the tape slightly sloped downward toward the
                front. Do not flare the neck out.
              </p>
            }
          />
          <div className="flex items-baseline gap-2 border-b border-ink-100 focus-within:border-gold-500 transition-colors duration-200">
            <input
              id="navy-bf-neck"
              type="number"
              inputMode="decimal"
              value={neck}
              onChange={(e) => setNeck(e.target.value)}
              className="w-full min-w-0 border-0 bg-transparent font-mono text-xl text-ink-900 pb-2 pt-1 focus:outline-none focus:ring-0 placeholder:text-ink-300"
            />
            <span className="font-mono text-sm text-ink-300 pb-2 shrink-0">
              in
            </span>
          </div>
        </div>

        <div className="flex flex-col">
          <FieldLabel
            htmlFor="navy-bf-waist"
            text="Waist"
            tipLabel="Waist"
            tip={waistTip}
          />
          <div className="flex items-baseline gap-2 border-b border-ink-100 focus-within:border-gold-500 transition-colors duration-200">
            <input
              id="navy-bf-waist"
              type="number"
              inputMode="decimal"
              value={waist}
              onChange={(e) => setWaist(e.target.value)}
              className="w-full min-w-0 border-0 bg-transparent font-mono text-xl text-ink-900 pb-2 pt-1 focus:outline-none focus:ring-0 placeholder:text-ink-300"
            />
            <span className="font-mono text-sm text-ink-300 pb-2 shrink-0">
              in
            </span>
          </div>
        </div>

        {sex === "female" && (
          <div className="flex flex-col sm:col-span-2 sm:max-w-md">
            <FieldLabel
              htmlFor="navy-bf-hip"
              text="Hip"
              tipLabel="Hip"
              tip={
                <p>
                  Measure around the widest part of the hips and buttocks with
                  the tape horizontal. Keep feet together and stand relaxed.
                </p>
              }
            />
            <div className="flex items-baseline gap-2 border-b border-ink-100 focus-within:border-gold-500 transition-colors duration-200">
              <input
                id="navy-bf-hip"
                type="number"
                inputMode="decimal"
                value={hip}
                onChange={(e) => setHip(e.target.value)}
                className="w-full min-w-0 border-0 bg-transparent font-mono text-xl text-ink-900 pb-2 pt-1 focus:outline-none focus:ring-0 placeholder:text-ink-300"
              />
              <span className="font-mono text-sm text-ink-300 pb-2 shrink-0">
                in
              </span>
            </div>
          </div>
        )}

        <div className="sm:col-span-2">
          <ResetMetricsLink />
        </div>
      </div>

      {validationError ? (
        <div className="p-5 md:p-8" role="status">
          <p className="text-sm font-body text-ink-700 bg-ivory-200 border-l-2 border-gold-500 px-4 py-3">
            {validationError}
          </p>
        </div>
      ) : bodyFat != null && bodyFat > 0 && category ? (
        <>
          <div className="bg-forest-900 border-l-2 border-gold-500 p-8 md:p-10">
            <p className="eyebrow text-forest-200 mb-2">
              Navy body fat estimate
            </p>
            <span className="block font-mono text-6xl md:text-7xl font-light text-gold-400 tracking-display leading-none">
              {bodyFat}%
            </span>
            <p className="font-display text-2xl text-ivory-100 mt-3">
              {category.label}
            </p>
            <p className="font-body text-sm text-forest-200 mt-3 max-w-md">
              This band is a general population guide by sex, not a judgment
              about your health or worth. Use it as context beside waist trends,
              strength, and how you feel.
            </p>
          </div>
          <div className="p-5 md:p-8">
            <MeasurementStrip
              segments={categories}
              value={bodyFat}
              unit="%"
              displayMax={sex === "male" ? 35 : 42}
            />
          </div>
        </>
      ) : (
        <div className="p-5 md:p-8">
          <p className="text-ink-500 text-sm font-mono">
            Enter your measurements to estimate body fat with the US Navy
            circumference method.
          </p>
        </div>
      )}

      <div className="border-t border-ivory-300 p-5 text-xs text-ink-500 font-mono leading-relaxed">
        General estimate only, not a medical diagnosis. The Navy method is a
        convenient tape-measure approximation. DEXA and hydrostatic weighing
        are more precise when you need clinical accuracy.
      </div>
    </div>
  );
}
