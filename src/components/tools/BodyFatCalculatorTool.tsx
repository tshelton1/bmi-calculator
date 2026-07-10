// src/components/tools/BodyFatCalculatorTool.tsx
"use client";

import { useState, useMemo } from "react";
import NumberField from "@/components/NumberField";
import SexToggle from "@/components/SexToggle";
import MeasurementStrip from "@/components/MeasurementStrip";
import ResetMetricsLink from "@/components/ResetMetricsLink";
import { useUserMetrics } from "@/hooks/useUserMetrics";
import {
  calculateBodyFatNavy,
  getBodyFatCategory,
  getBodyFatCategories,
} from "@/lib/calculations";

export default function BodyFatCalculatorTool() {
  const { feet, inches, sex, setFeet, setInches, setSex } = useUserMetrics();
  const [waist, setWaist] = useState("30");
  const [neck, setNeck] = useState("13");
  const [hip, setHip] = useState("38");

  const heightInches = (parseFloat(feet) || 0) * 12 + (parseFloat(inches) || 0);
  const waistInches = parseFloat(waist) || 0;
  const neckInches = parseFloat(neck) || 0;
  const hipInches = parseFloat(hip) || 0;

  const hasInput =
    heightInches > 0 &&
    waistInches > 0 &&
    neckInches > 0 &&
    (sex === "male" || hipInches > 0);

  const bodyFat = useMemo(
    () =>
      calculateBodyFatNavy(sex, heightInches, waistInches, neckInches, hipInches),
    [sex, heightInches, waistInches, neckInches, hipInches]
  );
  const category = getBodyFatCategory(bodyFat, sex);
  const categories = getBodyFatCategories(sex);

  return (
    <div className="bg-white shadow-luxury-md rounded-none border-t-2 border-gold-500">
      <div className="grid sm:grid-cols-2 gap-4 p-5 md:p-8 border-b border-ivory-300">
        <div className="grid grid-cols-2 gap-4">
          <NumberField id="bf-feet" label="Height — ft" value={feet} onChange={setFeet} unit="ft" />
          <NumberField id="bf-inches" label="Height — in" value={inches} onChange={setInches} unit="in" />
        </div>
        <SexToggle value={sex} onChange={setSex} />
        <NumberField id="bf-waist" label="Waist" value={waist} onChange={setWaist} unit="in" />
        <NumberField id="bf-neck" label="Neck" value={neck} onChange={setNeck} unit="in" />
        {sex === "female" && (
          <NumberField id="bf-hip" label="Hip" value={hip} onChange={setHip} unit="in" />
        )}
        <div className="sm:col-span-2">
          <ResetMetricsLink />
        </div>
      </div>

      {hasInput && bodyFat > 0 ? (
        <>
          <div className="bg-forest-900 border-l-2 border-gold-500 p-8 md:p-10">
            <p className="eyebrow text-forest-200 mb-2">Body fat estimate</p>
            <span className="block font-mono text-6xl md:text-7xl font-light text-gold-400 tracking-display leading-none">
              {bodyFat}%
            </span>
            <p className="font-display text-2xl text-ivory-100 mt-3">
              {category.label}
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
            Enter your measurements to estimate body fat percentage.
          </p>
        </div>
      )}

      <div className="border-t border-ivory-300 p-5 text-xs text-ink-500 font-mono leading-relaxed">
        Estimated using the US Navy circumference method. Measure waist at
        the navel, neck just below the larynx, and (for the female formula)
        hips at the widest point. This is an estimate — DEXA scans and
        hydrostatic weighing are more precise.
      </div>
    </div>
  );
}
