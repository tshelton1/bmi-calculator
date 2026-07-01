// src/app/bmi-calculator/page.tsx
import type { Metadata } from "next";
import BMICalculatorTool from "@/components/tools/BMICalculatorTool";
import AffiliateSlot from "@/components/AffiliateSlot";
import { SITE_URL } from "@/lib/constants";
import {
  calculatorOpenGraph,
  calculatorTwitter,
} from "@/lib/og-images";

export const metadata: Metadata = {
  title: {
    absolute: "BMI Calculator — Free Body Mass Index Tool | Living Healthier",
  },
  description:
    "Calculate your Body Mass Index (BMI) instantly. Free, accurate, no signup required. See where your number falls on standard clinical ranges.",
  alternates: { canonical: `${SITE_URL}/bmi-calculator` },
  openGraph: calculatorOpenGraph(
    "bmi-calculator",
    "BMI Calculator — Free Body Mass Index Tool | Living Healthier",
    "Calculate your Body Mass Index (BMI) instantly. Free, accurate, no signup required. See where your number falls on standard clinical ranges.",
    `${SITE_URL}/bmi-calculator`
  ),
  twitter: calculatorTwitter(
    "bmi-calculator",
    "BMI Calculator — Free Body Mass Index Tool | Living Healthier",
    "Calculate your Body Mass Index (BMI) instantly. Free, accurate, no signup required."
  ),
};

export default function BMICalculatorPage() {
  return (
    <main className="max-w-3xl mx-auto px-5 py-10">
      <h1 className="text-3xl font-semibold tracking-tight text-ink mb-3">
        BMI Calculator
      </h1>
      <p className="text-sage mb-8 max-w-xl">
        Body Mass Index estimates whether your weight falls in a healthy
        range for your height. It takes seconds and requires nothing but a
        scale and a tape measure.
      </p>

      <BMICalculatorTool />

      <AffiliateSlot placement="bmi-mid" />

      <section className="mt-12 prose-sage">
        <h2 className="text-xl font-semibold text-ink mb-3">
          How BMI is calculated
        </h2>
        <p className="text-sage mb-4 leading-relaxed">
          BMI divides your weight in kilograms by the square of your height
          in meters (or, in the imperial version used here, weight in pounds
          divided by height in inches squared, multiplied by 703). The
          result is a single number that correlates — loosely — with body
          fat across large populations.
        </p>
        <h2 className="text-xl font-semibold text-ink mb-3 mt-8">
          What BMI doesn&apos;t measure
        </h2>
        <p className="text-sage mb-4 leading-relaxed">
          BMI can&apos;t distinguish muscle from fat, doesn&apos;t account
          for bone density, and uses the same ranges regardless of age, sex,
          or ethnicity, despite real physiological differences across all
          three. An athlete with significant muscle mass can land in
          &quot;overweight&quot; while carrying very little body fat. If
          your number surprises you, the{" "}
          <a href="/body-fat-calculator" className="text-clay underline">
            body fat calculator
          </a>{" "}
          gives a more direct estimate of composition, and our{" "}
          <a href="/healthy-weight-range" className="text-clay underline">
            healthy weight range calculator
          </a>{" "}
          shows a personalized pound range for your height and frame.
        </p>
        <h2 className="text-xl font-semibold text-ink mb-3 mt-8">
          What to do with your number
        </h2>
        <p className="text-sage leading-relaxed">
          A single BMI reading is a snapshot, not a verdict. Trends over
          time, alongside how your clothes fit and how you feel, tell you
          more than any one number. If you want the fuller picture, pair
          this with your{" "}
          <a href="/bmr-calculator" className="text-clay underline">
            BMR
          </a>{" "}
          and{" "}
          <a href="/calorie-calculator" className="text-clay underline">
            daily calorie needs
          </a>
          .
        </p>
      </section>
    </main>
  );
}
