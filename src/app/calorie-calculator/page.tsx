// src/app/calorie-calculator/page.tsx
import type { Metadata } from "next";
import CalorieCalculatorTool from "@/components/tools/CalorieCalculatorTool";
import AffiliateSlot from "@/components/AffiliateSlot";
import { Accordion } from "@/components/ui/Accordion";
import { SITE_URL } from "@/lib/constants";
import { exampleMealsRecipeJsonLd } from "@/lib/example-meals";
import {
  calculatorOpenGraph,
  calculatorTwitter,
} from "@/lib/og-images";

export const metadata: Metadata = {
  title: {
    absolute: "Calorie Calculator — Daily Calorie Needs (TDEE) | Living Healthier",
  },
  description:
    "Find your Total Daily Energy Expenditure (TDEE) — how many calories you burn per day based on activity level. Free TDEE calculator.",
  alternates: { canonical: `${SITE_URL}/calorie-calculator` },
  openGraph: calculatorOpenGraph(
    "calorie-calculator",
    "Calorie Calculator — Daily Calorie Needs (TDEE) | Living Healthier",
    "Find your Total Daily Energy Expenditure (TDEE) — how many calories you burn per day based on activity level. Free TDEE calculator.",
    `${SITE_URL}/calorie-calculator`
  ),
  twitter: calculatorTwitter(
    "calorie-calculator",
    "Calorie Calculator — Daily Calorie Needs (TDEE) | Living Healthier",
    "Find your Total Daily Energy Expenditure (TDEE) — how many calories you burn per day based on activity level."
  ),
};

export default function CalorieCalculatorPage() {
  return (
    <main className="max-w-3xl mx-auto px-5 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(exampleMealsRecipeJsonLd()).replace(
            /</g,
            "\\u003c"
          ),
        }}
      />
      <h1 className="text-3xl font-semibold tracking-tight text-ink mb-3">
        Calorie Needs Calculator
      </h1>
      <p className="text-sage mb-8 max-w-xl">
        Your Total Daily Energy Expenditure (TDEE) — the real number to
        anchor a weight loss, maintenance, or gain plan to.
      </p>

      <CalorieCalculatorTool />

      <AffiliateSlot placement="calorie-mid" />

      <section>
        <p className="eyebrow mt-16 mb-6">About this calculator</p>
        <Accordion
          defaultOpenIndex={0}
          items={[
            {
              question: "How this number is built",
              answer: (
                <p>
                  This calculator starts with your BMR (calories at complete
                  rest) and multiplies it by an activity factor — a rough
                  adjustment for how much you move in an average day, from
                  sedentary to very active. The result is TDEE: a realistic
                  estimate of your true daily calorie burn.
                </p>
              ),
            },
            {
              question: "Using it for a goal",
              answer: (
                <p>
                  A deficit of roughly 500 calories a day tends to produce
                  about a pound of weight loss per week; the same surplus
                  tends to produce about a pound of gain. These are estimates,
                  not guarantees — actual results vary by individual
                  metabolism, water retention, and how consistently the target
                  is hit.
                </p>
              ),
            },
            {
              question: "Activity level is the part most people get wrong",
              answer: (
                <>
                  <p>
                    People reliably overestimate how active they are. If your
                    weight isn&apos;t moving the way this number predicts after
                    two to three consistent weeks, try the activity level one
                    step down before assuming the formula is wrong.
                  </p>
                  <p>
                    Once you have a calorie target, the next step is turning it
                    into a real plan —{" "}
                    <a href="/macro-calculator">
                      protein, fat, and carb targets
                    </a>{" "}
                    you can actually build meals around.
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
