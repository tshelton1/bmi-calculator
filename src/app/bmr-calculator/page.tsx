// src/app/bmr-calculator/page.tsx
import type { Metadata } from "next";
import BMRCalculatorTool from "@/components/tools/BMRCalculatorTool";
import { Accordion } from "@/components/ui/Accordion";
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
      <p className="text-sage mb-8 max-w-xl tracking-wide">
        Your Basal Metabolic Rate is the energy your body burns just staying
        alive — before you take a single step.
      </p>

      <BMRCalculatorTool />

      <section className="mt-16 flex flex-col gap-10 tracking-wide">
        <div>
          <h2 className="font-display text-2xl md:text-3xl font-medium text-ink-900 tracking-display mb-4">
            How to Use This Tool
          </h2>
          <p className="font-body text-base text-ink-700 leading-relaxed mb-4">
            Enter your current weight, height, age, and sex. Use a recent
            morning weight when possible, because BMR estimates scale with body
            size. Measure height carefully. Age matters in the equation because
            resting energy expenditure tends to decline as lean mass and
            hormonal milieu change across adulthood.
          </p>
          <p className="font-body text-base text-ink-700 leading-relaxed mb-4">
            Select the sex that matches the equation inputs this tool was built
            for. Sex-specific constants exist because average body composition
            differs between adult men and women, and muscle tissue burns more
            energy at rest than fat tissue. If you are unsure which input fits
            your situation, ask your clinician how to interpret resting
            metabolism in your care plan.
          </p>
          <p className="font-body text-base text-ink-700 leading-relaxed">
            Read the result as your approximate resting burn, not your daily
            food target. Living humans walk, fidget, digest, and train. Those
            extras live in TDEE. After you have BMR, move to the calorie needs
            calculator to apply an activity factor before you set a deficit or
            surplus.
          </p>
        </div>

        <div>
          <h2 className="font-display text-2xl md:text-3xl font-medium text-ink-900 tracking-display mb-4">
            The Science Behind the Numbers
          </h2>
          <p className="font-body text-base text-ink-700 leading-relaxed mb-4">
            Basal metabolic rate is the energy cost of keeping you alive at
            complete rest: breathing, circulation, brain activity, temperature
            control, and cellular maintenance. True BMR is measured under
            strict lab conditions. At home we estimate it with validated
            prediction equations built from measured resting metabolism in
            research cohorts.
          </p>
          <p className="font-body text-base text-ink-700 leading-relaxed mb-4">
            This calculator uses the Mifflin-St Jeor equation, which takes
            weight, height, age, and sex, then applies different constants for
            men and women. In comparative work, Mifflin-St Jeor has generally
            performed better than older Harris-Benedict formulas for many
            contemporary adults. That is why I prefer it as a clinical teaching
            baseline when we do not have indirect calorimetry available.
          </p>
          <p className="font-body text-base text-ink-700 leading-relaxed mb-4">
            No resting equation captures every individual. Thyroid disease,
            fever, trauma, large changes in lean mass, and some medications
            shift true needs. Extremely muscular or very low body fat athletes
            may also sit outside average predictions. Treat BMR as a
            well-supported estimate, then confirm with real-world weight trends
            over two to three honest weeks.
          </p>
          <p className="font-body text-base text-ink-700 leading-relaxed">
            When patients ask me what to do with the number, I point them next
            to activity-adjusted needs and protein-aware meal planning. Resting
            metabolism is the foundation. Daily life and training are the walls
            and roof of an actual nutrition plan.
          </p>
        </div>

        <div>
          <h2 className="font-display text-2xl md:text-3xl font-medium text-ink-900 tracking-display mb-4">
            Frequently Asked Questions
          </h2>
          <Accordion
            items={[
            {
              question: "Should I eat only my BMR calories to lose weight?",
              answer: (
                <p className="tracking-wide">
                  Usually no. Eating at or under BMR for long stretches often means
                  underfueling daily life, which can increase fatigue, muscle loss, and
                  rebound hunger. Better practice is to estimate TDEE, then create a
                  modest deficit from that higher number.
                </p>
              ),
            },
            {
              question: "Why did my BMR drop after I lost weight?",
              answer: (
                <p className="tracking-wide">
                  A smaller body generally costs less energy to maintain. Some lean mass
                  loss and adaptive changes can lower expenditure further. Recalculate
                  after meaningful weight change instead of clinging to an old target.
                </p>
              ),
            },
            {
              question: "Does building muscle raise BMR?",
              answer: (
                <p className="tracking-wide">
                  Yes, lean tissue is metabolically active. Resistance training and
                  adequate protein help preserve or build muscle, which supports resting
                  burn over time. The day-to-day effect is meaningful but not magical.
                  Consistency beats extreme promises.
                </p>
              ),
            },
            {
              question: "Is this result a medical diagnosis of my metabolism?",
              answer: (
                <p className="tracking-wide">
                  No. It is an educational estimate. Persistent fatigue, unexplained
                  weight change, or suspected endocrine issues deserve clinical evaluation
                  rather than calculator troubleshooting alone.
                </p>
              ),
            },
            ]}
          />
        </div>
      </section>

      <section>
        <p className="eyebrow mt-16 mb-6">About this calculator</p>
        <Accordion
          defaultOpenIndex={0}
          items={[
            {
              question: "What BMR actually measures",
              answer: (
                <p>
                  BMR represents the calories needed for involuntary
                  processes: breathing, circulation, cell production, and
                  maintaining body temperature. It assumes you&apos;re lying
                  down, awake, and fully at rest — it does not include
                  digestion, walking around, or exercise of any kind.
                </p>
              ),
            },
            {
              question: "The Mifflin-St Jeor equation",
              answer: (
                <p>
                  This calculator uses the Mifflin-St Jeor equation, which
                  research has generally found more accurate than the older
                  Harris-Benedict formula for most adults. It factors in
                  weight, height, age, and sex — sex matters here because of
                  average differences in muscle mass, which burns more energy
                  at rest than fat tissue.
                </p>
              ),
            },
            {
              question: "From BMR to daily needs",
              answer: (
                <p>
                  BMR is the floor, not the full picture. To find out how many
                  calories you actually burn in a normal day — including
                  movement and exercise — use the{" "}
                  <a href="/calorie-calculator">calorie needs calculator</a>,
                  which adjusts your BMR for activity level.
                </p>
              ),
            },
          ]}
        />
      </section>
    </main>
  );
}
