// src/app/navy-body-fat-calculator/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import NavyBodyFatCalculatorTool from "@/components/tools/NavyBodyFatCalculatorTool";
import AffiliateSlot from "@/components/AffiliateSlot";
import { Accordion } from "@/components/ui/Accordion";
import { SITE_URL } from "@/lib/constants";
import {
  calculatorOpenGraph,
  calculatorTwitter,
} from "@/lib/og-images";

const TITLE = "Navy Body Fat Calculator | Living Healthier";
const DESCRIPTION =
  "Free Navy body fat calculator using the US Navy tape method. Enter neck, waist, and hip to estimate body fat percentage.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/navy-body-fat-calculator` },
  openGraph: calculatorOpenGraph(
    "navy-body-fat-calculator",
    TITLE,
    DESCRIPTION,
    `${SITE_URL}/navy-body-fat-calculator`
  ),
  twitter: calculatorTwitter(
    "navy-body-fat-calculator",
    TITLE,
    "Free Navy body fat calculator using the US Navy tape method."
  ),
};

const FAQ = [
  {
    question: "Where exactly do I measure my neck?",
    plain:
      "Measure just below the larynx (Adam's apple). Keep the tape slightly sloping downward toward the front, snug against the skin without compressing it. Stand tall and avoid flaring or tensing the neck. Measuring the same way each time matters more than chasing a perfect single reading.",
    answer: (
      <p>
        Measure just below the larynx (Adam&apos;s apple). Keep the tape
        slightly sloping downward toward the front, snug against the skin
        without compressing it. Stand tall and avoid flaring or tensing the
        neck. Measuring the same way each time matters more than chasing a
        perfect single reading.
      </p>
    ),
  },
  {
    question: "Where do I measure my waist?",
    plain:
      "For men, measure at the navel (belly button). For women, measure at the narrowest part of the waist. Keep the tape horizontal, breathe out normally, and do not suck in. That sex difference is built into how the Navy formulas were developed, so matching the landmark keeps your estimate closer to the method's intent.",
    answer: (
      <p>
        For men, measure at the navel (belly button). For women, measure at
        the narrowest part of the waist. Keep the tape horizontal, breathe
        out normally, and do not suck in. That sex difference is built into
        how the Navy formulas were developed, so matching the landmark keeps
        your estimate closer to the method&apos;s intent.
      </p>
    ),
  },
  {
    question: "Where do I measure my hips?",
    plain:
      "Hip circumference is used in the female formula only. Measure around the widest part of the hips and buttocks with the tape level and parallel to the floor. Stand with feet together and stay relaxed. Men can leave this field blank.",
    answer: (
      <p>
        Hip circumference is used in the female formula only. Measure around
        the widest part of the hips and buttocks with the tape level and
        parallel to the floor. Stand with feet together and stay relaxed.
        Men can leave this field blank.
      </p>
    ),
  },
  {
    question: "How accurate is the Navy body fat method?",
    plain:
      "It is a useful estimate, often landing roughly within about 3 to 4 percentage points of more precise lab methods for many adults in the typical range. It is not as accurate as DEXA or hydrostatic weighing. Its strength is convenience: you only need a tape measure, and consistent monthly readings are excellent for spotting trends.",
    answer: (
      <p>
        It is a useful estimate, often landing roughly within about 3 to 4
        percentage points of more precise lab methods for many adults in the
        typical range. It is not as accurate as DEXA or hydrostatic weighing.
        Its strength is convenience: you only need a tape measure, and
        consistent monthly readings are excellent for spotting trends. Read
        more in my guide to{" "}
        <Link href="/blog/navy-body-fat-method-explained">
          the Navy body fat method
        </Link>
        .
      </p>
    ),
  },
  {
    question: "What's a healthy body fat percentage?",
    plain:
      "Healthy ranges differ by sex and shift with age and training. Broad guides often place many men somewhere near the fitness-to-average bands (roughly mid-teens through mid-20s) and many women somewhat higher because essential fat needs differ. Essential fat is a biological minimum, not a goal. Higher readings are information about composition, not a moral grade. Pair the number with waist trends, strength, energy, and labs when you care about health rather than a single label.",
    answer: (
      <p>
        Healthy ranges differ by sex and shift with age and training. Broad
        guides often place many men somewhere near the fitness-to-average
        bands (roughly mid-teens through mid-20s) and many women somewhat
        higher because essential fat needs differ. Essential fat is a
        biological minimum, not a goal. Higher readings are information about
        composition, not a moral grade. Pair the number with waist trends,
        strength, energy, and labs when you care about health rather than a
        single label.
      </p>
    ),
  },
  {
    question: "Is body fat percentage better than BMI?",
    plain:
      "Both have jobs. BMI is a fast weight-for-height screen. Body fat percentage tries to separate fat from lean mass, which BMI cannot do. Muscular people often look high on BMI while body fat looks quieter; the reverse can happen too. Use them together with BMI and composition context.",
    answer: (
      <p>
        Both have jobs. BMI is a fast weight-for-height screen. Body fat
        percentage tries to separate fat from lean mass, which BMI cannot do.
        Muscular people often look &quot;high&quot; on BMI while body fat
        looks quieter; the reverse can happen too. I use them together. Start
        with the{" "}
        <Link href="/bmi-calculator">BMI calculator</Link>, then estimate
        composition here or compare approaches in{" "}
        <Link href="/blog/bmi-vs-body-fat-percentage">
          BMI vs body fat percentage
        </Link>
        .
      </p>
    ),
  },
] as const;

function faqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.plain,
      },
    })),
  };
}

export default function NavyBodyFatCalculatorPage() {
  return (
    <main className="max-w-3xl mx-auto px-5 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd()).replace(/</g, "\\u003c"),
        }}
      />

      <h1 className="text-3xl font-semibold tracking-tight text-ink mb-3">
        Navy Body Fat Calculator
      </h1>
      <p className="text-sage mb-8 max-w-xl tracking-wide">
        Estimate body fat percentage with the US Navy circumference method.
        You only need a tape measure, height, and a few minutes. I walk through
        the method in plain English in{" "}
        <Link
          href="/blog/navy-body-fat-method-explained"
          className="text-gold-600 underline underline-offset-2 hover:text-gold-500"
        >
          the Navy body fat method guide
        </Link>
        , and you can pair this with the{" "}
        <Link
          href="/bmi-calculator"
          className="text-gold-600 underline underline-offset-2 hover:text-gold-500"
        >
          BMI calculator
        </Link>{" "}
        for a fuller picture.
      </p>

      <NavyBodyFatCalculatorTool />

      <AffiliateSlot placement="bodyfat-mid" />

      <section className="mt-16 flex flex-col gap-10 tracking-wide">
        <div>
          <h2 className="font-display text-2xl md:text-3xl font-medium text-ink-900 tracking-display mb-4">
            How to Use This Tool
          </h2>
          <p className="font-body text-base text-ink-700 leading-relaxed mb-4">
            Choose male or female first so the correct fields appear. Enter
            height in feet and inches, then use the info icons beside neck,
            waist, and hip to confirm landmarks. Men need neck and waist. Women
            also need hip. Measure with a flexible, non-stretch tape, standing
            tall, breathing normally. Do not flex the neck or suck in the belly.
          </p>
          <p className="font-body text-base text-ink-700 leading-relaxed mb-4">
            Morning measurements are usually steadiest. Take each circumference
            twice and average if the first two disagree. Enter positive numbers
            only. If the tool shows a validation message, it is protecting the
            math: the Navy formulas require waist to exceed neck for men, and
            waist plus hip to exceed neck for women. Fix the tape reading before
            you assume the calculator is wrong.
          </p>
          <p className="font-body text-base text-ink-700 leading-relaxed">
            Read the percentage and category as an estimate with non-shaming
            labels. Log the date, your circumferences, and the result. Repeat
            monthly under the same conditions. Consistency is how this method
            earns its keep between clinic visits.
          </p>
        </div>

        <div>
          <h2 className="font-display text-2xl md:text-3xl font-medium text-ink-900 tracking-display mb-4">
            The Science Behind the Numbers
          </h2>
          <p className="font-body text-base text-ink-700 leading-relaxed mb-4">
            This page runs the classic US Navy circumference body fat equations
            in inches with base-10 logarithms. For men, the formula uses the
            difference between waist and neck, scaled by height. For women, it
            uses waist plus hip minus neck, again scaled by height. Those
            structures reflect average sex differences in where fat is stored
            and how girth relates to estimated fat percentage.
          </p>
          <p className="font-body text-base text-ink-700 leading-relaxed mb-4">
            The Navy method became a clinical and operational baseline because
            it is fast, inexpensive, and hard to game compared with
            weight-only screens. It does not measure fat cells directly. It
            infers composition from geometry. That is why landmark discipline
            matters, and why DEXA or hydrostatic weighing remain more precise
            when research-grade accuracy is required.
          </p>
          <p className="font-body text-base text-ink-700 leading-relaxed">
            In my practice I use circumference estimates to help patients see
            fat loss when the scale is noisy, and to challenge BMI readings that
            ignore muscle. I also explain limits honestly: unusual body
            proportions, extreme leanness, and higher degrees of obesity can
            widen error. Health decisions should still weigh waist trends,
            fitness, symptoms, and labs beside any percentage this tool returns.
          </p>
        </div>

        <div>
          <h2 className="font-display text-2xl md:text-3xl font-medium text-ink-900 tracking-display mb-4">
            Frequently Asked Questions
          </h2>
          <Accordion
            items={[
            {
              question: "Why do the male and female Navy formulas differ?",
              answer: (
                <p className="tracking-wide">
                  Average fat distribution differs by sex. The female equation includes
                  hip circumference to account for more gluteal and hip storage. Using the
                  wrong sex equation or skipping hips for women produces a less meaningful
                  estimate.
                </p>
              ),
            },
            {
              question: "Can I use centimeters instead of inches?",
              answer: (
                <p className="tracking-wide">
                  This tool is built for inches to match the equation constants shown on
                  the page. If you measure in centimeters, convert to inches before
                  entering values, or your result will not match the intended formula.
                </p>
              ),
            },
            {
              question: "How should I interpret the category label?",
              answer: (
                <p className="tracking-wide">
                  Categories are population-style guides by sex. They help you locate a
                  result on a familiar map. They are not diagnoses and they are not
                  comments on character. Pair the label with how you feel, train, and
                  trend over time.
                </p>
              ),
            },
            {
              question: "Does a Navy body fat result replace medical care?",
              answer: (
                <p className="tracking-wide">
                  No. It is a general educational estimate. Rapid weight change, suspected
                  hormone issues, or disordered eating need personalized clinical care
                  beyond any tape-measure formula.
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
          items={FAQ.map((item) => ({
            question: item.question,
            answer: item.answer,
          }))}
        />
      </section>
    </main>
  );
}
