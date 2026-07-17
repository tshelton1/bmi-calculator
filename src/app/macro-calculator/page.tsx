// src/app/macro-calculator/page.tsx
import type { Metadata } from "next";
import MacroCalculatorTool from "@/components/tools/MacroCalculatorTool";
import AffiliateSlot from "@/components/AffiliateSlot";
import { Accordion } from "@/components/ui/Accordion";
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
      <p className="text-sage mb-8 max-w-xl tracking-wide">
        Turn your daily calorie target into concrete protein, fat, and carb
        numbers — the part most people actually need to plan meals around.
      </p>

      <MacroCalculatorTool />

      <AffiliateSlot placement="macro-mid" />

      <section className="mt-16 flex flex-col gap-10 tracking-wide">
        <div>
          <h2 className="font-display text-2xl md:text-3xl font-medium text-ink-900 tracking-display mb-4">
            How to Use This Tool
          </h2>
          <p className="font-body text-base text-ink-700 leading-relaxed mb-4">
            Begin with honest body metrics and an activity level so the
            calculator can estimate daily calorie needs. Then choose your goal:
            cutting, maintenance, or bulking. That choice shifts total calories
            before macros are assigned. If you already know a calorie target
            from careful tracking, still enter accurate weight so protein can be
            anchored to body size.
          </p>
          <p className="font-body text-base text-ink-700 leading-relaxed mb-4">
            Read protein first. It is set in grams relative to body weight
            because that approach stays useful when calories move up or down.
            Fat is allocated as a share of calories to support hormones,
            absorption of fat-soluble vitamins, and satiety. Carbohydrates
            receive the remaining calories and become your most flexible fuel
            lever for training days versus quieter days.
          </p>
          <p className="font-body text-base text-ink-700 leading-relaxed">
            Use the gram targets to build plates, not to obsess over every gram
            forever. Hit protein most days, keep fat adequate, and let carbs
            flex around workouts and preference. Review scale trend, waist,
            strength, and hunger after two to three weeks, then adjust. Macros
            are a meal-planning language on top of calorie balance.
          </p>
        </div>

        <div>
          <h2 className="font-display text-2xl md:text-3xl font-medium text-ink-900 tracking-display mb-4">
            The Science Behind the Numbers
          </h2>
          <p className="font-body text-base text-ink-700 leading-relaxed mb-4">
            Macronutrients are the energy-yielding nutrients: protein and
            carbohydrate at roughly 4 calories per gram, fat at roughly 9.
            Protein supplies amino acids for tissue repair and helps preserve
            lean mass during a deficit. Dietary fat supports endocrine function
            and meal satisfaction. Carbohydrate replenishes glycogen and fuels
            higher-intensity work.
          </p>
          <p className="font-body text-base text-ink-700 leading-relaxed mb-4">
            This calculator first estimates energy needs from resting metabolism
            and activity, then applies a goal-based calorie adjustment. Protein
            is prioritized using grams-per-pound targets common in sports
            nutrition practice for fat loss and training recovery. Fat is set to
            a percentage of calories within a clinically reasonable band.
            Remaining calories become carbohydrate. That order is deliberate:
            protect muscle and hormonal basics first, then fill fuel needs.
          </p>
          <p className="font-body text-base text-ink-700 leading-relaxed">
            Research consistently shows that total energy intake drives most
            long-term weight change, while higher protein intakes improve
            satiety and lean-mass retention during intentional fat loss. Macro
            targets are therefore a structure for adherence and body
            composition, not a magic ratio that overrides calories. Individual
            medical needs, kidney disease, and disordered eating history can
            change what is appropriate, which is why these numbers remain
            educational starting points.
          </p>
        </div>

        <div>
          <h2 className="font-display text-2xl md:text-3xl font-medium text-ink-900 tracking-display mb-4">
            Frequently Asked Questions
          </h2>
          <h3 className="font-body text-lg font-semibold text-ink-900 tracking-wide mt-2 mb-2">
            Do I need perfect macros every day?
          </h3>
          <p className="font-body text-base text-ink-700 leading-relaxed mb-4">
            No. Weekly averages matter more than flawless daily hits. Aim for
            consistency with protein and calories. A social meal that shifts
            carbs or fat will not erase progress if the pattern stays intact.
          </p>
          <h3 className="font-body text-lg font-semibold text-ink-900 tracking-wide mt-2 mb-2">
            Can I eat low carb or low fat with these targets?
          </h3>
          <p className="font-body text-base text-ink-700 leading-relaxed mb-4">
            You can adjust the carb and fat split to preference as long as
            protein and total calories remain appropriate and fat does not fall
            so low that meals and hormones suffer. Extreme restriction of any
            one macro is rarely required for health in generally well adults.
          </p>
          <h3 className="font-body text-lg font-semibold text-ink-900 tracking-wide mt-2 mb-2">
            Why is protein higher during a cut?
          </h3>
          <p className="font-body text-base text-ink-700 leading-relaxed mb-4">
            In a calorie deficit, the body is more likely to break down lean
            tissue for energy. Higher protein plus resistance training reduces
            that risk and helps you keep more of the weight you lose as fat.
          </p>
          <h3 className="font-body text-lg font-semibold text-ink-900 tracking-wide mt-2 mb-2">
            Are these targets a prescription?
          </h3>
          <p className="font-body text-base text-ink-700 leading-relaxed">
            No. They are general educational estimates. If you have metabolic
            disease, food allergies, or a history of disordered eating, work
            with a clinician or registered dietitian before locking in aggressive
            targets.
          </p>
        </div>
      </section>

      <section>
        <p className="eyebrow mt-16 mb-6">About this calculator</p>
        <Accordion
          defaultOpenIndex={0}
          items={[
            {
              question: "How the calculation works",
              answer: (
                <p>
                  This calculator starts with your{" "}
                  <a href="/calorie-calculator">TDEE</a> — total daily energy
                  expenditure — then adjusts calories up or down based on your
                  goal. Protein is set first as a grams-per-pound target, fat
                  as a percentage of total calories, and whatever calories
                  remain after protein and fat are allocated go to
                  carbohydrates.
                </p>
              ),
            },
            {
              question: "Why protein is set first",
              answer: (
                <p>
                  Protein supports muscle retention during a cut and recovery
                  during training. Setting it by body weight — rather than as
                  a percentage of calories — keeps the target stable even when
                  total calories change. Fat gets a fixed share of calories to
                  support hormones and satiety; carbs absorb the rest and flex
                  with your energy needs.
                </p>
              ),
            },
            {
              question: "Treat these as starting points",
              answer: (
                <p>
                  No formula nails macros for every person on the first try.
                  Track your intake against these targets for two to three
                  weeks, then adjust based on scale trend, gym performance, and
                  how you feel. Pair with your{" "}
                  <a href="/body-fat-calculator">body fat percentage</a> to see
                  whether weight changes are coming from fat or lean mass —
                  that context matters more than hitting exact gram targets.
                </p>
              ),
            },
          ]}
        />
      </section>
    </main>
  );
}
