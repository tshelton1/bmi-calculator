// src/app/recommended-calipers/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PRODUCT_LINKS, SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Recommended Body Fat Calipers for Home Tracking (2026)",
  description:
    "Skinfold caliper picks to track body fat trends at home — a practical complement to the free Navy circumference calculator on this site.",
  alternates: { canonical: `${SITE_URL}/recommended-calipers` },
};

const CALIPER = {
  name: "Sequoia Fitness TrimCal 4000 Body Fat Caliper",
  imageSrc: "/images/recommended-calipers/sequoia-trimcal-4000.jpg",
  imageAlt:
    "Sequoia Fitness TrimCal 4000 body fat caliper with skinfold thickness millimeter scale",
  description:
    "A skinfold caliper measures the thickness of a skin fold (and the fat layer beneath) at specific body sites — typically the chest, abdomen, and thigh for men, or triceps, suprailiac, and thigh for women. Those millimeter readings feed into a formula such as Jackson-Pollock to estimate body fat percentage. The TrimCal 4000 uses dual-spring tension for consistent jaw pressure and includes male and female body-fat reference charts.",
  price: "~$10–25",
  href: PRODUCT_LINKS.sequoiaTrimCal,
};

export default function RecommendedCalipersPage() {
  return (
    <main className="max-w-3xl mx-auto px-5 py-10">
      <p className="font-mono text-xs uppercase tracking-widest text-clay mb-3">
        Recommended
      </p>
      <h1 className="text-3xl font-semibold tracking-tight text-ink mb-3">
        Calipers for Tracking Body Fat at Home
      </h1>
      <p className="text-sage mb-8 max-w-xl leading-relaxed">
        The{" "}
        <Link href="/body-fat-calculator" className="text-clay underline">
          body fat calculator
        </Link>{" "}
        on this site uses the US Navy circumference method — a solid estimate
        from a tape measure alone, with no special tools required. Skinfold
        calipers are the standard at-home alternative when you want a second
        data point and a repeatable way to track composition trends over time.
      </p>

      <p className="font-mono text-xs uppercase tracking-widest text-clay mb-4">
        Recommended pick
      </p>
      <article className="bg-paper border border-line p-5 mb-8 max-w-md">
        <div className="mb-4 border border-ink/15 bg-white w-[100px] h-[100px] flex items-center justify-center">
          <Image
            src={CALIPER.imageSrc}
            alt={CALIPER.imageAlt}
            width={100}
            height={100}
            className="w-[100px] h-[100px] object-contain"
          />
        </div>
        <h2 className="text-ink font-semibold mb-2">{CALIPER.name}</h2>
        <p className="text-sm text-sage leading-relaxed mb-3">
          {CALIPER.description}
        </p>
        <p className="text-xs text-sage font-mono mb-4">{CALIPER.price}</p>
        <a
          href={CALIPER.href}
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
          Calipers vs. the circumference method
        </h2>
        <p className="text-sage mb-4 leading-relaxed">
          The Navy method estimates body fat from neck, waist, and hip
          circumferences — quick, free, and easy to repeat with a soft tape
          measure. Calipers take a different approach: you pinch a skinfold at
          defined anatomical sites and read the thickness in millimeters. That
          direct tissue measurement can feel more intuitive for tracking fat
          loss, but it requires learning proper pinch technique and staying
          consistent about which sites you measure.
        </p>
        <p className="text-sage leading-relaxed">
          Neither method matches a DEXA scan for clinical accuracy. For most
          people, the practical value is trend data — logging readings every few
          weeks under similar conditions and watching the direction move, not
          obsessing over any single number. Many people use the circumference
          calculator here as a baseline and add caliper readings when they want
          a hands-on second check.
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
