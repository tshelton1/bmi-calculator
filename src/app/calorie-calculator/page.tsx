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
      <p className="text-sage mb-8 max-w-xl tracking-wide">
        Your Total Daily Energy Expenditure (TDEE) — the real number to
        anchor a weight loss, maintenance, or gain plan to.
      </p>

      <CalorieCalculatorTool />

      <AffiliateSlot placement="calorie-mid" />

      <section className="mt-16 flex flex-col gap-10 tracking-wide">
        <div>
          <h2 className="font-display text-2xl md:text-3xl font-medium text-ink-900 tracking-display mb-4">
            How to Use This Tool
          </h2>
          <p className="font-body text-base text-ink-700 leading-relaxed mb-4">
            Enter weight, height, age, and sex the same way you would for a BMR
            estimate. Then choose the activity level that matches your average
            week, not your most heroic day. Most desk-based adults with a few
            workouts belong in light or moderate activity, even if a fitness
            tracker flatters them. Overestimating activity invents calories you
            do not burn.
          </p>
          <p className="font-body text-base text-ink-700 leading-relaxed mb-4">
            Use the resulting TDEE as a maintenance estimate. To lose fat, many
            adults do well with a modest daily gap below that number rather than
            a crash cut. To gain, add a smaller surplus and prioritize protein
            plus resistance training. Hold any plan for two to three consistent
            weeks before judging it, because water and glycogen can hide true
            fat change for days.
          </p>
          <p className="font-body text-base text-ink-700 leading-relaxed">
            Recalculate after you lose or gain a meaningful amount of weight, or
            when your job and training load change. A smaller body needs fewer
            calories. A new lifting block or a more sedentary season shifts
            expenditure too. Update the inputs instead of forcing an outdated
            target.
          </p>
        </div>

        <div>
          <h2 className="font-display text-2xl md:text-3xl font-medium text-ink-900 tracking-display mb-4">
            The Science Behind the Numbers
          </h2>
          <p className="font-body text-base text-ink-700 leading-relaxed mb-4">
            Total Daily Energy Expenditure combines resting metabolism with the
            energy cost of movement, exercise, and daily living. This calculator
            starts with a Mifflin-St Jeor BMR estimate, then multiplies by an
            activity factor. Those multipliers are long-used clinical and sports
            nutrition approximations for sedentary through very active
            lifestyles.
          </p>
          <p className="font-body text-base text-ink-700 leading-relaxed mb-4">
            Why start from BMR? Resting burn is usually the largest slice of
            daily expenditure for adults who are not elite athletes. Activity
            factors then layer on the variable part: walking, standing, training,
            and fidgeting. The method is not as precise as doubly labeled water
            research or continuous metabolic monitoring, but it is a practical,
            evidence-informed baseline that clinicians and dietitians use when a
            lab is not available.
          </p>
          <p className="font-body text-base text-ink-700 leading-relaxed">
            Energy balance still drives long-term weight change. A sustained
            deficit tends to reduce stored energy. A sustained surplus tends to
            increase it. Individual response varies with adherence, protein
            intake, sleep, medications, and changes in spontaneous movement when
            calories drop. That is why I ask patients to treat TDEE as a
            calibrated starting point and then let weekly averages teach the
            next adjustment.
          </p>
        </div>

        <div>
          <h2 className="font-display text-2xl md:text-3xl font-medium text-ink-900 tracking-display mb-4">
            Frequently Asked Questions
          </h2>
          <h3 className="font-body text-lg font-semibold text-ink-900 tracking-wide mt-2 mb-2">
            What if the scale does not move on my TDEE-based plan?
          </h3>
          <p className="font-body text-base text-ink-700 leading-relaxed mb-4">
            First verify portions and weekends. Then consider lowering the
            activity setting one notch. Many people are less active than they
            believe. Only after honest tracking for a couple of weeks should you
            shrink calories further.
          </p>
          <h3 className="font-body text-lg font-semibold text-ink-900 tracking-wide mt-2 mb-2">
            Should I eat back every calorie my watch says I burned?
          </h3>
          <p className="font-body text-base text-ink-700 leading-relaxed mb-4">
            Usually not fully. If your activity multiplier already includes
            typical exercise, eating back tracked burn often double-counts.
            Wearables also tend to overestimate expenditure. Use workouts to
            guide training quality more than exact calorie refunds.
          </p>
          <h3 className="font-body text-lg font-semibold text-ink-900 tracking-wide mt-2 mb-2">
            How big should a deficit be?
          </h3>
          <p className="font-body text-base text-ink-700 leading-relaxed mb-4">
            A moderate gap is easier to sustain and kinder to muscle than an
            extreme cut. Exact targets depend on starting size, health status,
            and how you feel in daily life. If energy, mood, or menstrual cycles
            deteriorate, the plan is too aggressive.
          </p>
          <h3 className="font-body text-lg font-semibold text-ink-900 tracking-wide mt-2 mb-2">
            Is TDEE personalized medical advice?
          </h3>
          <p className="font-body text-base text-ink-700 leading-relaxed">
            No. This tool provides general estimates for education. People with
            diabetes, history of disordered eating, pregnancy, or complex
            medication regimens need clinician-guided targets.
          </p>
        </div>
      </section>

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
