// src/app/bmr-calculator/page.tsx
import type { Metadata } from "next";
import BMRCalculatorTool from "@/components/tools/BMRCalculatorTool";
import { SITE_URL } from "@/lib/constants";
import {
  calculatorOpenGraph,
  calculatorTwitter,
} from "@/lib/og-images";

export const metadata: Metadata = {
  title: {
    absolute: "BMR Calculator — Basal Metabolic Rate Tool | Living Healthier",
  },
  description:
    "Find your Basal Metabolic Rate (BMR) — the calories your body burns at rest. Free Mifflin-St Jeor calculator, no signup required.",
  alternates: { canonical: `${SITE_URL}/bmr-calculator` },
  openGraph: calculatorOpenGraph(
    "bmr-calculator",
    "BMR Calculator — Basal Metabolic Rate Tool | Living Healthier",
    "Find your Basal Metabolic Rate (BMR) — the calories your body burns at rest. Free Mifflin-St Jeor calculator, no signup required.",
    `${SITE_URL}/bmr-calculator`
  ),
  twitter: calculatorTwitter(
    "bmr-calculator",
    "BMR Calculator — Basal Metabolic Rate Tool | Living Healthier",
    "Find your Basal Metabolic Rate (BMR) — the calories your body burns at rest."
  ),
};

export default function BMRCalculatorPage() {
  return (
    <main className="max-w-3xl mx-auto px-5 py-10">
      <h1 className="text-3xl font-semibold tracking-tight text-ink mb-3">
        BMR Calculator
      </h1>
      <p className="text-sage mb-8 max-w-xl">
        Your Basal Metabolic Rate is the energy your body burns just staying
        alive — before you take a single step.
      </p>

      <BMRCalculatorTool />

      <section className="mt-12 prose-sage">
        <h2 className="text-xl font-semibold text-ink mb-3">
          What BMR actually measures
        </h2>
        <p className="text-sage mb-4 leading-relaxed">
          BMR represents the calories needed for involuntary processes:
          breathing, circulation, cell production, and maintaining body
          temperature. It assumes you&apos;re lying down, awake, and fully
          at rest — it does not include digestion, walking around, or
          exercise of any kind.
        </p>
        <h2 className="text-xl font-semibold text-ink mb-3 mt-8">
          The Mifflin-St Jeor equation
        </h2>
        <p className="text-sage mb-4 leading-relaxed">
          This calculator uses the Mifflin-St Jeor equation, which research
          has generally found more accurate than the older Harris-Benedict
          formula for most adults. It factors in weight, height, age, and
          sex — sex matters here because of average differences in muscle
          mass, which burns more energy at rest than fat tissue.
        </p>
        <h2 className="text-xl font-semibold text-ink mb-3 mt-8">
          From BMR to daily needs
        </h2>
        <p className="text-sage leading-relaxed">
          BMR is the floor, not the full picture. To find out how many
          calories you actually burn in a normal day — including movement
          and exercise — use the{" "}
          <a href="/calorie-calculator" className="text-clay underline">
            calorie needs calculator
          </a>
          , which adjusts your BMR for activity level.
        </p>
      </section>
    </main>
  );
}
