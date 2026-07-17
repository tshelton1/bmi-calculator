// src/app/healthy-weight-range/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import ContentReviewAttribution from "@/components/ContentReviewAttribution";
import HealthyWeightRangeTool from "@/components/tools/HealthyWeightRangeTool";
import { Accordion } from "@/components/ui/Accordion";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: {
    absolute:
      "Healthy Weight Range Calculator — Personalized by Frame | Living Healthier",
  },
  description:
    "Estimate a personalized healthy weight range from your height and wrist circumference. See standard BMI bounds and a frame-adjusted range — free, instant, no signup.",
  alternates: { canonical: `${SITE_URL}/healthy-weight-range` },
};

export default function HealthyWeightRangePage() {
  return (
    <main className="max-w-3xl mx-auto px-5 py-10">
      <p className="font-mono text-xs uppercase tracking-widest text-clay mb-3">
        Calculator
      </p>
      <h1 className="text-3xl font-semibold tracking-tight text-ink mb-3">
        Healthy Weight Range Calculator
      </h1>
      <p className="text-sage mb-8 max-w-xl leading-relaxed tracking-wide">
        BMI charts give one number; this tool estimates a{" "}
        <strong className="font-semibold text-ink">weight range</strong> for
        your height, then narrows it using a wrist-based frame estimate — so
        you see where you might sit, not just which category you fall in. Pair
        it with our{" "}
        <Link href="/bmi-calculator" className="text-clay underline">
          BMI calculator
        </Link>{" "}
        for a single-point reading.
      </p>

      <HealthyWeightRangeTool />
      <ContentReviewAttribution />

      <section className="mt-16 flex flex-col gap-10 tracking-wide">
        <div>
          <h2 className="font-display text-2xl md:text-3xl font-medium text-ink-900 tracking-display mb-4">
            How to Use This Tool
          </h2>
          <p className="font-body text-base text-ink-700 leading-relaxed mb-4">
            Enter your height first. Accurate stature matters because the
            healthy pound window is built from BMI bands translated into
            weight for that height. Measure height barefoot when you can, and
            use the same method each time you revisit the calculator.
          </p>
          <p className="font-body text-base text-ink-700 leading-relaxed mb-4">
            Next, measure your wrist circumference to estimate frame size. Wrap
            a flexible tape around the wrist just distal to the bony bump on
            the little-finger side, snug but not tight. Frame estimates are
            imperfect home proxies, yet they help explain why two people of the
            same height often feel best at different points inside the same BMI
            band. Smaller frames often sit more comfortably toward the lower
            half of the clinical range. Larger frames often feel better toward
            the upper half.
          </p>
          <p className="font-body text-base text-ink-700 leading-relaxed">
            Read both outputs together: the full clinical healthy range for
            transparency, and the narrower personalized slice as a reflection
            tool. Then check your current weight against that window and ask
            whether waist size, strength, and energy support the target you
            choose. A range you can live in beats a brittle single number.
          </p>
        </div>

        <div>
          <h2 className="font-display text-2xl md:text-3xl font-medium text-ink-900 tracking-display mb-4">
            The Science Behind the Numbers
          </h2>
          <p className="font-body text-base text-ink-700 leading-relaxed mb-4">
            The broad healthy weight band on this page comes from adult BMI
            values of roughly 18.5 to 24.9 converted into pounds for your
            height. Those cutoffs are clinical conventions used across
            guidelines because, at the population level, they mark a zone where
            average cardiometabolic risk is lower than at higher BMIs. They are
            not personalized prescriptions, and they are not moral grades.
          </p>
          <p className="font-body text-base text-ink-700 leading-relaxed mb-4">
            Frame adjustment uses wrist circumference as a practical stand-in
            for skeletal size. Bone structure and lean mass change how a given
            scale weight looks and functions. A taller, broader-framed adult may
            be metabolically quiet at a higher absolute weight than a
            smaller-framed adult of the same height. Narrowing the BMI-derived
            window with frame context is a way to respect that biology without
            inventing a false sense of precision.
          </p>
          <p className="font-body text-base text-ink-700 leading-relaxed">
            In clinic I still prefer waist circumference, strength, and labs
            when deciding whether a weight is truly healthy for someone. This
            calculator gives you a clearer starting map than a single BMI point.
            It does not replace composition testing or medical evaluation when
            symptoms, rapid weight change, or chronic disease are in play.
          </p>
        </div>

        <div>
          <h2 className="font-display text-2xl md:text-3xl font-medium text-ink-900 tracking-display mb-4">
            Frequently Asked Questions
          </h2>
          <Accordion
            items={[
            {
              question: "Why show a range instead of one ideal weight?",
              answer: (
                <p className="tracking-wide">
                  Bodies fluctuate with water, hormones, training, and food. A
                  several-pound window is more honest than a single target that collapses
                  under normal life. Health also depends on where fat sits and how strong
                  you are, not only on one scale reading.
                </p>
              ),
            },
            {
              question: "Is wrist size enough to define my frame?",
              answer: (
                <p className="tracking-wide">
                  It is a useful home estimate, not a perfect anthropometric panel. Elbow
                  breadth and clinical exam are more formal methods. Wrist circumference
                  is included here because it is accessible and still helps many people
                  interpret where they sit inside a height-based band.
                </p>
              ),
            },
            {
              question: "What if my best weight sits above the healthy BMI band?",
              answer: (
                <p className="tracking-wide">
                  Muscular adults and some older adults may function well a bit above
                  youthful BMI ideals. If waist is calm, strength is solid, and labs are
                  quiet, chasing a lower chart number can cost muscle you need. Discuss
                  your individual target with a clinician when health conditions are
                  present.
                </p>
              ),
            },
            {
              question: "Can this replace a visit for weight concerns?",
              answer: (
                <p className="tracking-wide">
                  No. This is educational guidance reviewed in a physician context, not a
                  diagnosis or treatment plan. Pregnancy, eating disorders, medication
                  effects, and unexplained weight change need personalized care.
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
              question: "How this differs from BMI alone",
              answer: (
                <p>
                  Standard healthy BMI spans 18.5–24.9, which converts to a
                  wide band of pounds for any height. Two people of the same
                  height with different bone structure may feel best at
                  different points within that band. Wrist circumference is a
                  long-used, imperfect proxy for frame size — not as precise as
                  clinical measurement, but practical at home.
                </p>
              ),
            },
            {
              question: "What the frame adjustment does",
              answer: (
                <>
                  <p>
                    We always show the full clinical range for transparency.
                    The personalized range is a narrower slice within those
                    bounds: smaller frames lean toward the lower half, larger
                    frames toward the upper half, and medium frames toward the
                    center. It is guidance for reflection, not a prescription.
                  </p>
                  <p>
                    For composition context beyond weight, try the{" "}
                    <Link href="/body-fat-calculator">body fat calculator</Link>{" "}
                    or estimate daily needs with our{" "}
                    <Link href="/calorie-calculator">calorie calculator</Link>.
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
