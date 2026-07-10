// src/app/body-fat-calculator/page.tsx
import type { Metadata } from "next";
import BodyFatCalculatorTool from "@/components/tools/BodyFatCalculatorTool";
import AffiliateSlot from "@/components/AffiliateSlot";
import { Accordion } from "@/components/ui/Accordion";
import { SITE_URL } from "@/lib/constants";
import {
  calculatorOpenGraph,
  calculatorTwitter,
} from "@/lib/og-images";

export const metadata: Metadata = {
  title: {
    absolute: "Body Fat Calculator — US Navy Method | Living Healthier",
  },
  description:
    "Estimate your body fat percentage using the US Navy circumference method. No calipers required. Free and instant.",
  alternates: { canonical: `${SITE_URL}/body-fat-calculator` },
  openGraph: calculatorOpenGraph(
    "body-fat-calculator",
    "Body Fat Calculator — US Navy Method | Living Healthier",
    "Estimate your body fat percentage using the US Navy circumference method. No calipers required. Free and instant.",
    `${SITE_URL}/body-fat-calculator`
  ),
  twitter: calculatorTwitter(
    "body-fat-calculator",
    "Body Fat Calculator — US Navy Method | Living Healthier",
    "Estimate your body fat percentage using the US Navy circumference method. No calipers required."
  ),
};

export default function BodyFatCalculatorPage() {
  return (
    <main className="max-w-3xl mx-auto px-5 py-10">
      <h1 className="text-3xl font-semibold tracking-tight text-ink mb-3">
        Body Fat Percentage Calculator
      </h1>
      <p className="text-sage mb-8 max-w-xl">
        A more direct read on body composition than BMI — estimated from
        circumference measurements you can take with a tape measure.
      </p>

      <BodyFatCalculatorTool />

      <AffiliateSlot placement="bodyfat-mid" />

      <section>
        <p className="eyebrow mt-16 mb-6">About this calculator</p>
        <Accordion
          defaultOpenIndex={0}
          items={[
            {
              question: "The US Navy method",
              answer: (
                <p>
                  Developed for military fitness assessments, this method
                  estimates body fat from neck and waist circumference (plus
                  hip circumference for women), without requiring calipers or
                  specialized equipment. It&apos;s not as precise as a DEXA
                  scan, but it&apos;s free, repeatable, and good enough to
                  track real trends over time.
                </p>
              ),
            },
            {
              question: "Getting an accurate measurement",
              answer: (
                <p>
                  Measure waist at the navel, not at the narrowest point of
                  the torso. Measure neck just below the larynx (Adam&apos;s
                  apple). Keep the tape snug but not compressing the skin.
                  Measuring at the same time of day — ideally morning, before
                  eating — improves consistency between readings.
                </p>
              ),
            },
            {
              question: "Why this differs from your BMI",
              answer: (
                <p>
                  BMI can&apos;t tell muscle from fat. This can, at least
                  roughly. If your <a href="/bmi-calculator">BMI</a> reads
                  higher than expected but your body fat percentage here comes
                  back in the &quot;athletic&quot; or &quot;fit&quot; range,
                  that&apos;s a strong sign the BMI number is being skewed by
                  muscle mass rather than excess fat. For a height-based weight
                  band adjusted by frame, see our{" "}
                  <a href="/healthy-weight-range">
                    healthy weight range calculator
                  </a>
                  .
                </p>
              ),
            },
          ]}
        />
      </section>
    </main>
  );
}
