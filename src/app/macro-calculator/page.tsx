// src/app/macro-calculator/page.tsx
import type { Metadata } from "next";
import MacroCalculatorTool from "@/components/tools/MacroCalculatorTool";
import AffiliateSlot from "@/components/AffiliateSlot";
import { SITE_URL } from "@/lib/constants";
import {
  calculatorOpenGraph,
  calculatorTwitter,
} from "@/lib/og-images";

export const metadata: Metadata = {
  title: {
    absolute: "Macro Calculator — Protein, Fat & Carb Targets | Living Healthier",
  },
  description:
    "Calculate your daily protein, fat, and carb targets based on your goals. Free macro calculator, no signup required.",
  alternates: { canonical: `${SITE_URL}/macro-calculator` },
  openGraph: calculatorOpenGraph(
    "macro-calculator",
    "Macro Calculator — Protein, Fat & Carb Targets | Living Healthier",
    "Calculate your daily protein, fat, and carb targets based on your goals. Free macro calculator, no signup required.",
    `${SITE_URL}/macro-calculator`
  ),
  twitter: calculatorTwitter(
    "macro-calculator",
    "Macro Calculator — Protein, Fat & Carb Targets | Living Healthier",
    "Calculate your daily protein, fat, and carb targets based on your goals."
  ),
};

export default function MacroCalculatorPage() {
  return (
    <main className="max-w-3xl mx-auto px-5 py-10">
      <h1 className="text-3xl font-semibold tracking-tight text-ink mb-3">
        Macro Calculator
      </h1>
      <p className="text-sage mb-8 max-w-xl">
        Turn your daily calorie target into concrete protein, fat, and carb
        numbers — the part most people actually need to plan meals around.
      </p>

      <MacroCalculatorTool />

      <AffiliateSlot placement="macro-mid" />

      <section className="mt-12 prose-sage">
        <h2 className="text-xl font-semibold text-ink mb-3">
          How the calculation works
        </h2>
        <p className="text-sage mb-4 leading-relaxed">
          This calculator starts with your{" "}
          <a href="/calorie-calculator" className="text-clay underline">
            TDEE
          </a>{" "}
          — total daily energy expenditure — then adjusts calories up or down
          based on your goal. Protein is set first as a grams-per-pound
          target, fat as a percentage of total calories, and whatever
          calories remain after protein and fat are allocated go to
          carbohydrates.
        </p>
        <h2 className="text-xl font-semibold text-ink mb-3 mt-8">
          Why protein is set first
        </h2>
        <p className="text-sage mb-4 leading-relaxed">
          Protein supports muscle retention during a cut and recovery during
          training. Setting it by body weight — rather than as a percentage
          of calories — keeps the target stable even when total calories
          change. Fat gets a fixed share of calories to support hormones
          and satiety; carbs absorb the rest and flex with your energy needs.
        </p>
        <h2 className="text-xl font-semibold text-ink mb-3 mt-8">
          Treat these as starting points
        </h2>
        <p className="text-sage leading-relaxed">
          No formula nails macros for every person on the first try. Track
          your intake against these targets for two to three weeks, then
          adjust based on scale trend, gym performance, and how you feel.
          Pair with your{" "}
          <a href="/body-fat-calculator" className="text-clay underline">
            body fat percentage
          </a>{" "}
          to see whether weight changes are coming from fat or lean mass —
          that context matters more than hitting exact gram targets.
        </p>
      </section>
    </main>
  );
}
