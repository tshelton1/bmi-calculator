// src/app/bmi-calculator/page.tsx
import type { Metadata } from "next";
import BMICalculatorTool from "@/components/tools/BMICalculatorTool";
import AffiliateSlot from "@/components/AffiliateSlot";
import { Accordion } from "@/components/ui/Accordion";
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
      <p className="text-sage mb-8 max-w-xl tracking-wide">
        Body Mass Index estimates whether your weight falls in a healthy
        range for your height. It takes seconds and requires nothing but a
        scale and a tape measure.
      </p>

      <BMICalculatorTool />

      <AffiliateSlot placement="bmi-mid" />

      <section className="mt-16 flex flex-col gap-10 tracking-wide">
        <div>
          <h2 className="font-display text-2xl md:text-3xl font-medium text-ink-900 tracking-display mb-4">
            How to Use This Tool
          </h2>
          <p className="font-body text-base text-ink-700 leading-relaxed mb-4">
            I want you to treat this BMI calculator like a quick clinical
            screen, not a personality test. Start with an accurate height. Stand
            barefoot against a wall if you can, heels together, looking straight
            ahead. Use the height you would give a medical office, not the
            optimistic number from five years ago. Enter feet and inches
            carefully. A one-inch error meaningfully shifts the result.
          </p>
          <p className="font-body text-base text-ink-700 leading-relaxed mb-4">
            Weigh yourself on a flat, hard floor in the morning after using the
            bathroom and before eating. Wear light clothing or none. Enter your
            weight in pounds. Then read the category as context. Underweight,
            healthy range, overweight, and obesity bands are population tools
            drawn from large data sets. They help me triage risk. They do not
            finish the story about your muscle, your waist, or your labs.
          </p>
          <p className="font-body text-base text-ink-700 leading-relaxed">
            Recalculate after meaningful weight change, not every anxious day.
            Pair this number with waist circumference and, when useful, a body
            fat estimate. If you lift seriously or have a medical condition that
            changes body composition, bring that context to the reading before
            you change your diet.
          </p>
        </div>

        <div>
          <h2 className="font-display text-2xl md:text-3xl font-medium text-ink-900 tracking-display mb-4">
            The Science Behind the Numbers
          </h2>
          <p className="font-body text-base text-ink-700 leading-relaxed mb-4">
            BMI is weight relative to height. In metric form it is kilograms
            divided by height in meters squared. This tool uses the imperial
            equivalent: pounds divided by inches squared, then multiplied by
            703. The math is simple on purpose. Adolphe Quetelet originally
            described a height-weight relationship for populations. Later public
            health work adopted BMI cutoffs as a practical screen for excess
            weight associated with metabolic and cardiovascular risk.
          </p>
          <p className="font-body text-base text-ink-700 leading-relaxed mb-4">
            Clinically, I still calculate BMI because it is standardized,
            cheap, and comparable across visits and studies. Across large
            groups, higher BMI tracks with higher rates of type 2 diabetes,
            hypertension, and related disease. That correlation is why the
            formula remains a baseline in primary care and epidemiology.
          </p>
          <p className="font-body text-base text-ink-700 leading-relaxed">
            The limitation is equally important. BMI cannot see muscle versus
            fat, visceral versus subcutaneous storage, bone density, age, or
            ethnicity-related risk differences. A muscular patient and a
            sedentary patient can share a BMI and not share a risk profile. That
            is why I teach BMI as a starting flag, then ask about waist, strength,
            sleep, medications, and metabolic labs before I treat the chart as a
            plan.
          </p>
        </div>

        <div>
          <h2 className="font-display text-2xl md:text-3xl font-medium text-ink-900 tracking-display mb-4">
            Frequently Asked Questions
          </h2>
          <Accordion
            items={[
            {
              question: "Is a BMI in the overweight range always unhealthy?",
              answer: (
                <p className="tracking-wide">
                  No. Overweight on BMI can reflect muscle, frame, or modest fat gain.
                  Health risk rises more clearly when BMI climbs alongside a large waist,
                  rising blood pressure, abnormal glucose, or low fitness. Use the
                  category as a prompt to gather more data, not as an automatic diagnosis.
                </p>
              ),
            },
            {
              question: "Why does my BMI look high when I feel fit?",
              answer: (
                <p className="tracking-wide">
                  Dense muscle raises body weight without the same metabolic risk as
                  excess fat. Athletes and regular lifters are the classic example. If
                  that is you, compare BMI with waist size and body fat percentage before
                  cutting calories aggressively.
                </p>
              ),
            },
            {
              question: "How often should I check my BMI?",
              answer: (
                <p className="tracking-wide">
                  Monthly or after a deliberate weight change is usually enough for home
                  tracking. Daily BMI adds noise from water, salt, and glycogen. Trends
                  matter more than a single morning.
                </p>
              ),
            },
            {
              question: "Is this calculator medical advice?",
              answer: (
                <p className="tracking-wide">
                  No. This is general education from my clinical perspective as a
                  physician. It cannot replace an exam, labs, or personalized guidance for
                  pregnancy, eating disorders, or complex medical conditions. If your
                  weight or appetite concerns you, talk with a clinician who knows your
                  history.
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
              question: "How BMI is calculated",
              answer: (
                <p>
                  BMI divides your weight in kilograms by the square of your
                  height in meters (or, in the imperial version used here,
                  weight in pounds divided by height in inches squared,
                  multiplied by 703). The result is a single number that
                  correlates — loosely — with body fat across large
                  populations.
                </p>
              ),
            },
            {
              question: "What BMI doesn't measure",
              answer: (
                <p>
                  BMI can&apos;t distinguish muscle from fat, doesn&apos;t
                  account for bone density, and uses the same ranges
                  regardless of age, sex, or ethnicity, despite real
                  physiological differences across all three. An athlete with
                  significant muscle mass can land in &quot;overweight&quot;
                  while carrying very little body fat. If your number surprises
                  you, the{" "}
                  <a href="/body-fat-calculator">body fat calculator</a> gives
                  a more direct estimate of composition, and our{" "}
                  <a href="/healthy-weight-range">
                    healthy weight range calculator
                  </a>{" "}
                  shows a personalized pound range for your height and frame.
                </p>
              ),
            },
            {
              question: "What to do with your number",
              answer: (
                <p>
                  A single BMI reading is a snapshot, not a verdict. Trends
                  over time, alongside how your clothes fit and how you feel,
                  tell you more than any one number. If you want the fuller
                  picture, pair this with your{" "}
                  <a href="/bmr-calculator">BMR</a> and{" "}
                  <a href="/calorie-calculator">daily calorie needs</a>.
                </p>
              ),
            },
          ]}
        />
      </section>
    </main>
  );
}
