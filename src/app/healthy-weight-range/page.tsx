import type { Metadata } from "next";
import Link from "next/link";
import ContentReviewAttribution from "@/components/ContentReviewAttribution";
import HealthyWeightRangeTool from "@/components/tools/HealthyWeightRangeTool";
import { Accordion } from "@/components/ui/Accordion";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: {
    absolute:
      "Healthy Weight Range Calculator — Personalized by Frame | Living Healthier",
  },
  description:
    "Estimate a personalized healthy weight range from your height and wrist circumference. See standard BMI bounds and a frame-adjusted range — free, instant, no signup.",
  alternates: { canonical: `${SITE_URL}/healthy-weight-range` },
};

export default function HealthyWeightRangePage() {
  return (
    <main className="max-w-3xl mx-auto px-5 py-10">
      <p className="font-mono text-xs uppercase tracking-widest text-clay mb-3">
        Calculator
      </p>
      <h1 className="text-3xl font-semibold tracking-tight text-ink mb-3">
        Healthy Weight Range Calculator
      </h1>
      <p className="text-sage mb-8 max-w-xl leading-relaxed">
        BMI charts give one number; this tool estimates a{" "}
        <strong className="font-semibold text-ink">weight range</strong> for
        your height, then narrows it using a wrist-based frame estimate — so
        you see where you might sit, not just which category you fall in. Pair
        it with our{" "}
        <Link href="/bmi-calculator" className="text-clay underline">
          BMI calculator
        </Link>{" "}
        for a single-point reading.
      </p>

      <HealthyWeightRangeTool />
      <ContentReviewAttribution />

      <section>
        <p className="eyebrow mt-16 mb-6">About this calculator</p>
        <Accordion
          defaultOpenIndex={0}
          items={[
            {
              question: "How this differs from BMI alone",
              answer: (
                <p>
                  Standard healthy BMI spans 18.5–24.9, which converts to a
                  wide band of pounds for any height. Two people of the same
                  height with different bone structure may feel best at
                  different points within that band. Wrist circumference is a
                  long-used, imperfect proxy for frame size — not as precise as
                  clinical measurement, but practical at home.
                </p>
              ),
            },
            {
              question: "What the frame adjustment does",
              answer: (
                <>
                  <p>
                    We always show the full clinical range for transparency.
                    The personalized range is a narrower slice within those
                    bounds: smaller frames lean toward the lower half, larger
                    frames toward the upper half, and medium frames toward the
                    center. It is guidance for reflection, not a prescription.
                  </p>
                  <p>
                    For composition context beyond weight, try the{" "}
                    <Link href="/body-fat-calculator">body fat calculator</Link>{" "}
                    or estimate daily needs with our{" "}
                    <Link href="/calorie-calculator">calorie calculator</Link>.
                  </p>
                </>
              ),
            },
          ]}
        />
      </section>
    </main>
  );
}
