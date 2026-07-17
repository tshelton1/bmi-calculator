// src/app/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import BMICalculatorTool from "@/components/tools/BMICalculatorTool";
import HomeFaqAccordion from "@/components/HomeFaqAccordion";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  alternates: { canonical: SITE_URL },
};

const FAQ_ITEMS = [
  {
    question: "What is a healthy BMI range?",
    answer:
      "For most adults, a BMI between 18.5 and 24.9 is generally considered the normal weight range on standard clinical charts. Below 18.5 is often classified as underweight; 25–29.9 as overweight; 30 and above as obese. These cutoffs describe population-level patterns — they are not a personal health diagnosis, and they do not account for muscle mass, age, or individual medical context.",
  },
  {
    question: "How accurate is BMI?",
    answer:
      "BMI is a useful screening tool across large groups, but it can misclassify individuals. Someone with significant muscle mass may read overweight while carrying little excess fat; someone with low muscle mass may read normal while carrying more body fat than the number suggests. Treat BMI as one data point, not the full picture of your health.",
  },
  {
    question: "What's the difference between BMI and body fat percentage?",
    answer:
      "BMI estimates whether your weight is high or low relative to your height. Body fat percentage estimates what share of your weight comes from fat tissue versus lean mass. Two people with the same BMI can have very different body compositions — which is why body fat estimates (like the US Navy circumference method on this site) can add useful context when BMI alone feels misleading.",
  },
  {
    question: "How often should I recalculate my BMR?",
    answer:
      "Recalculate when something meaningful changes — a shift in weight of more than a few pounds, a change in age bracket, or a sustained change in daily activity level. BMR itself does not swing day to day, but the inputs that feed it do change over time. For most people, revisiting the number every few months during an active weight goal, or after a plateau, is enough.",
  },
  {
    question: "What is BMR vs. daily calorie needs (TDEE)?",
    answer:
      "BMR (basal metabolic rate) is the calories your body burns at complete rest — the energy needed for breathing, circulation, and basic cell function. TDEE (total daily energy expenditure) starts with BMR and adjusts upward for how much you move in a typical day. If you are planning meals or a deficit, TDEE is usually the more practical number to anchor to.",
  },
  {
    question: "Do I need to create an account to use these calculators?",
    answer:
      "No. All calculators on Living Healthier run in your browser with no signup required. If you choose to, your height, weight, age, and sex can be saved locally on your device so they pre-fill when you move between tools — this data stays on your device and is not sent to our servers.",
  },
  {
    question: "What is a healthy weight range for my height?",
    answer:
      "For most adults, BMI between 18.5 and 24.9 converts to a span of weights in pounds for any given height — often a wider band than feels useful day to day. Our healthy weight range calculator shows that clinical span plus a narrower, frame-adjusted estimate using wrist circumference as a rough proxy for bone structure.",
  },
  {
    question: "How does frame size affect healthy weight?",
    answer:
      "Frame size does not change the official BMI categories, but it can help you think about where within the normal range you might feel and function best. Smaller frames often sit toward the lower half of the healthy BMI band; larger frames toward the upper half. Wrist measurement is an imperfect stand-in — use it as context, not a diagnosis.",
  },
] as const;

function faqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd()).replace(/</g, "\\u003c"),
        }}
      />

      {/* Full-bleed hero — sits outside the max-w container */}
      <section className="relative w-full overflow-hidden bg-forest-900">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(184,150,106,0.12) 0%, transparent 60%)",
          }}
        />
        <span
          aria-hidden="true"
          style={{
            position: "absolute",
            top: "-0.1em",
            left: "50%",
            transform: "translateX(-50%)",
            fontFamily: "var(--font-cormorant)",
            fontSize: "clamp(120px, 22vw, 300px)",
            fontWeight: "300",
            color: "rgba(255,255,255,0.03)",
            letterSpacing: "-0.05em",
            lineHeight: 1,
            userSelect: "none",
            whiteSpace: "nowrap",
            pointerEvents: "none",
          }}
        >
          BMI
        </span>

        <div className="relative max-w-3xl mx-auto px-6 py-20">
          <p className="eyebrow">Living Healthier · Measurements</p>
          <div className="w-12 h-px bg-gold-500 mt-4 mb-6" />
          <h1 className="font-display text-5xl md:text-7xl font-light text-ivory-100 tracking-display">
            Take your measurement.
          </h1>
          <p className="font-body text-lg text-forest-200 font-light max-w-xl leading-relaxed mt-6">
            Enter your height and weight for an instant reading, plotted against
            the standard clinical ranges. No account, no email, no waiting.
          </p>
          <div className="mt-8">
            <a
              href="#calculator"
              className="inline-block bg-gold-500 text-forest-950 font-body font-medium text-sm tracking-wide px-8 py-3.5 rounded-none hover:bg-gold-400 transition-colors duration-200"
            >
              Calculate Your BMI
            </a>
          </div>
        </div>
      </section>

      <main className="max-w-3xl mx-auto px-6 py-12" id="calculator">
        <div className="scroll-mt-8">
          <BMICalculatorTool />
        </div>

      <section className="mt-16 mb-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {[
          {
            href: "/healthy-weight-range",
            eyebrow: "Weight Range",
            title: "Healthy Weight Range",
            desc: "Personalized lb range from height and frame estimate.",
          },
          {
            href: "/bmr-calculator",
            eyebrow: "Metabolism",
            title: "BMR Calculator",
            desc: "How many calories your body burns at rest.",
          },
          {
            href: "/calorie-calculator",
            eyebrow: "Energy",
            title: "Calorie Needs",
            desc: "Your full daily energy expenditure, by activity level.",
          },
          {
            href: "/body-fat-calculator",
            eyebrow: "Composition",
            title: "Navy Body Fat %",
            desc: "Navy circumference method, no calipers required.",
          },
          {
            href: "/macro-calculator",
            eyebrow: "Nutrition",
            title: "Macro Calculator",
            desc: "Daily protein, fat, and carb targets by goal.",
          },
        ].map((tool) => (
          <Link
            key={tool.href}
            href={tool.href}
            className="group bg-white border-l-2 border-gold-500 shadow-luxury-sm hover:shadow-luxury-md hover:border-gold-400 transition-all duration-300 p-8 rounded-none"
          >
            <p className="eyebrow">{tool.eyebrow}</p>
            <h3 className="font-display text-2xl font-medium text-ink-900 tracking-display mt-2">
              {tool.title}
            </h3>
            <p className="font-body text-sm text-ink-500 leading-relaxed mt-3">
              {tool.desc}
            </p>
            <span className="font-body text-xs font-medium tracking-wide uppercase text-gold-600 group-hover:text-gold-500 flex items-center gap-2 mt-6">
              Open
              <span className="transition-transform duration-200 group-hover:translate-x-0.5">
                →
              </span>
            </span>
          </Link>
        ))}
      </section>

      <section className="mb-12">
        <p className="eyebrow mb-3">
          About these calculators
        </p>
        <h2 className="text-xl font-semibold text-ink mb-4">
          How to use these tools
        </h2>
        <div className="border border-ink/20 bg-paper p-5 text-sm text-sage leading-relaxed space-y-4 mb-4">
          <p>
            Living Healthier offers a set of free, browser-based health
            calculators — BMI, basal metabolic rate (BMR), daily calorie needs
            (TDEE), macro targets, and body fat percentage estimates. Each tool
            uses established formulas (standard BMI, Mifflin-St Jeor for BMR,
            US Navy circumference method for body fat) and returns an instant
            result from the numbers you enter.
          </p>
          <p className="text-xs font-mono">
            Your height, weight, and other inputs are processed in your browser
            and never sent to our servers.
          </p>
          <p>
            These calculators are designed for adults who want a quick,
            private starting point — whether you are tracking weight over time,
            estimating how many calories you burn, or trying to understand
            whether BMI is telling the whole story about your body composition.
            They work best as one input among several: how your clothes fit, how
            you feel, lab results from your clinician, and trends over weeks
            rather than a single reading.
          </p>
        </div>
        <p className="text-sage leading-relaxed mb-4">
          BMI is the fastest screening measure, but it cannot distinguish muscle
          from fat. A lifter and a sedentary person of the same height and
          weight can share a BMI while having very different health profiles.
          That is why this site also offers BMR and calorie calculators (for
          energy planning) and a body fat estimator (for composition context).
          None of these replace a medical evaluation — they help you ask better
          questions and notice patterns before your next appointment.
        </p>
        <p className="text-sage leading-relaxed">
          All calculator inputs are processed in your browser. We do not
          require an account, and your entries are not stored on our servers.
          Optional local storage on your device can remember height, weight,
          age, and sex so you do not have to re-enter them when switching
          between tools — you can clear that any time with &quot;Reset my
          info&quot; on any calculator or in the footer.
        </p>
      </section>

      <section className="mb-16">
        <p className="eyebrow mb-3">
          Common questions
        </p>
        <h2 className="text-xl font-semibold text-ink mb-4">FAQ</h2>
        <HomeFaqAccordion items={FAQ_ITEMS} />
      </section>
      </main>
    </>
  );
}
