// src/app/recommended-scales/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PRODUCT_LINKS, SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Recommended Smart Scales for Weight & BMI Tracking (2026)",
  description:
    "Smart scale picks to log weight and body composition trends over time — a practical complement to one-off BMI readings from our free calculator.",
  alternates: { canonical: `${SITE_URL}/recommended-scales` },
};

const SCALE = {
  name: "RENPHO Smart Body Composition Scale",
  description:
    "Syncs via Bluetooth to the RENPHO companion app and Apple Watch, tracking weight, BMI, body fat percentage, and other body composition estimates on the built-in display. Historical trend charts in the app make it easy to see progress over time instead of relying on one-off calculator readings.",
  price: "~$25–50",
  href: PRODUCT_LINKS.renphoSmartScale,
};

export default function RecommendedScalesPage() {
  return (
    <main className="max-w-3xl mx-auto px-5 py-10">
      <p className="font-mono text-xs uppercase tracking-widest text-clay mb-3">
        Recommended
      </p>
      <h1 className="text-3xl font-semibold tracking-tight text-ink mb-3">
        Smart Scales for Tracking Your Progress
      </h1>
      <p className="text-sage mb-8 max-w-xl leading-relaxed">
        A single{" "}
        <Link href="/bmi-calculator" className="text-clay underline">
          BMI
        </Link>{" "}
        reading is a snapshot — useful, but limited. A smart scale logs your
        weight (and often estimated body composition) automatically over time,
        so you can spot real trends instead of guessing from one-off numbers.
      </p>

      <p className="font-mono text-xs uppercase tracking-widest text-clay mb-4">
        Recommended pick
      </p>
      <article className="bg-paper border border-line p-5 mb-8 max-w-md">
        <div className="mb-4 border border-ink/15 bg-white">
          <Image
            src="/images/recommended-scales/renpho-smart-scale.jpg"
            alt="RENPHO smart body fat scale with Bluetooth app sync, displaying weight, BMI, and body composition metrics"
            width={800}
            height={800}
            className="w-full h-auto object-contain"
          />
        </div>
        <h2 className="text-ink font-semibold mb-2">{SCALE.name}</h2>
        <p className="text-sm text-sage leading-relaxed mb-3">{SCALE.description}</p>
        <p className="text-xs text-sage font-mono mb-4">{SCALE.price}</p>
        <a
          href={SCALE.href}
          target="_blank"
          rel="nofollow sponsored noopener"
          className="inline-block text-sm font-mono text-clay border border-clay px-4 py-2 hover:bg-clay hover:text-paper transition-colors"
        >
          View option →
        </a>
      </article>

      <p className="text-xs text-sage font-mono leading-relaxed mb-12 border border-ink/15 p-4">
        livinghealthier.net is a participant in the Amazon Services LLC
        Associates Program, an affiliate advertising program designed to
        provide a means for sites to earn advertising fees by advertising and
        linking to Amazon.com.
      </p>

      <section className="prose-sage mb-12">
        <h2 className="text-xl font-semibold text-ink mb-3">
          Why track trends, not just one reading
        </h2>
        <p className="text-sage mb-4 leading-relaxed">
          Weight and BMI naturally fluctuate day to day — water retention,
          meal timing, and sleep all nudge the number. A single measurement
          taken this morning tells you where you are right now, not whether
          you are actually moving in the direction you want over the past few
          weeks.
        </p>
        <p className="text-sage leading-relaxed">
          Logging consistently — even just a daily weigh-in on the same scale
          — makes patterns visible. That context matters more than any one
          calculator result. Pair trend data with how your clothes fit, how
          you feel, and periodic check-ins with a clinician when you are
          making meaningful changes.
        </p>
      </section>

      <p className="text-xs text-sage font-mono leading-relaxed border-t border-ink/15 pt-6">
        This page contains affiliate links. We may earn a commission from
        qualifying purchases at no extra cost to you. This is general
        information, not medical advice — consult a healthcare provider before
        making health decisions.
      </p>
    </main>
  );
}
