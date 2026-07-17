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

const TITLE = "Navy Body Fat % Calculator | Living Healthier";
const DESCRIPTION =
  "Estimate your Navy body fat % using the US Navy circumference method. No calipers required. Free and instant.";

export const metadata: Metadata = {
  title: {
    absolute: TITLE,
  },
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/body-fat-calculator` },
  openGraph: calculatorOpenGraph(
    "body-fat-calculator",
    TITLE,
    DESCRIPTION,
    `${SITE_URL}/body-fat-calculator`
  ),
  twitter: calculatorTwitter(
    "body-fat-calculator",
    TITLE,
    "Estimate your Navy body fat % using the US Navy circumference method."
  ),
};

export default function BodyFatCalculatorPage() {
  return (
    <main className="max-w-3xl mx-auto px-5 py-10">
      <h1 className="text-3xl font-semibold tracking-tight text-ink mb-3">
        Navy Body Fat % Calculator
      </h1>
      <p className="text-sage mb-8 max-w-xl tracking-wide">
        A more direct read on body composition than BMI — estimated from
        circumference measurements you can take with a tape measure.
      </p>

      <BodyFatCalculatorTool />

      <AffiliateSlot placement="bodyfat-mid" />

      <section className="mt-16 flex flex-col gap-10 tracking-wide">
        <div>
          <h2 className="font-display text-2xl md:text-3xl font-medium text-ink-900 tracking-display mb-4">
            How to Use This Tool
          </h2>
          <p className="font-body text-base text-ink-700 leading-relaxed mb-4">
            Select sex first, because the equation sites differ. Enter height,
            then measure neck and waist with a flexible tape. Women also enter
            hip circumference. Take measurements in the morning when you can,
            before a large meal, standing relaxed. Keep the tape snug against
            skin without compressing soft tissue.
          </p>
          <p className="font-body text-base text-ink-700 leading-relaxed mb-4">
            For neck, measure just below the larynx. For waist on this tool,
            use the navel landmark consistently. For hips, measure the widest
            part of the buttocks with the tape level. Enter inches. If a
            reading seems off, measure twice and average. Small tape errors
            create noticeable percentage swings because the formulas use
            logarithms of circumference differences.
          </p>
          <p className="font-body text-base text-ink-700 leading-relaxed">
            Compare the estimate with how clothes fit and how your waist
            changes over months. Navy body fat % is most useful as a trend
            tool. Recheck every few weeks under the same conditions rather than
            chasing daily perfection.
          </p>
        </div>

        <div>
          <h2 className="font-display text-2xl md:text-3xl font-medium text-ink-900 tracking-display mb-4">
            The Science Behind the Numbers
          </h2>
          <p className="font-body text-base text-ink-700 leading-relaxed mb-4">
            This calculator estimates Navy body fat % with the US Navy
            circumference method. The approach grew from military needs for a
            field-ready composition screen that did not require calipers,
            underwater weighing, or imaging. Circumferences at sites where fat
            and lean distribution differ are combined with height in
            sex-specific equations using base-10 logarithms.
          </p>
          <p className="font-body text-base text-ink-700 leading-relaxed mb-4">
            Men typically need height, neck, and waist. Women add hip
            circumference because average female fat distribution includes more
            gluteal and hip storage. The resulting percentage is an inference,
            not a direct fat mass measurement. Against reference methods such as
            DEXA, Navy estimates are often useful within a few percentage
            points for many adults in typical ranges, with more error at the
            extremes of leanness or obesity.
          </p>
          <p className="font-body text-base text-ink-700 leading-relaxed mb-4">
            Clinically I value the method for accessibility and repeatability.
            Patients can track composition at home between visits. I still
            counsel that waist trends, strength, and metabolic labs may matter
            more for health decisions than any single Navy body fat % reading.
            Use this tool to add composition context beside BMI, not to replace
            a medical evaluation.
          </p>
          <p className="font-body text-base text-ink-700 leading-relaxed">
            If your result and your lived experience disagree, check landmarks
            first, then consider a second method. Composition tools should
            reduce confusion, not create a new source of shame or false
            certainty.
          </p>
        </div>

        <div>
          <h2 className="font-display text-2xl md:text-3xl font-medium text-ink-900 tracking-display mb-4">
            Frequently Asked Questions
          </h2>
          <Accordion
            items={[
              {
                question:
                  "Why is my body fat estimate different from a smart scale?",
                answer: (
                  <p className="tracking-wide">
                    Bioelectrical impedance scales are sensitive to hydration,
                    recent food, and exercise. Circumference methods have
                    different error sources. Neither is DEXA. Pick one home
                    method and repeat it the same way so the trend is
                    trustworthy.
                  </p>
                ),
              },
              {
                question: "What is a healthy body fat percentage?",
                answer: (
                  <p className="tracking-wide">
                    Healthy bands differ by sex and shift with age and sport.
                    Women generally carry more essential fat than men.
                    Essential fat is a biological minimum, not a goal. Higher
                    categories are descriptive population labels, not judgments
                    about worth.
                  </p>
                ),
              },
              {
                question: "Can athletes trust this more than BMI?",
                answer: (
                  <p className="tracking-wide">
                    Often yes for composition questions, because BMI cannot
                    separate muscle from fat. Circumference estimates still
                    misread unusual proportions, so elite athletes may still
                    need more precise testing when decisions are high stakes.
                  </p>
                ),
              },
              {
                question: "Is this a diagnosis of obesity or fitness?",
                answer: (
                  <p className="tracking-wide">
                    No. It is a general estimate for education and trend
                    tracking. Body composition concerns, rapid changes, or
                    disordered eating patterns deserve care from a clinician who
                    knows your history.
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
                  higher than expected but your Navy body fat % here comes
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
