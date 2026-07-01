// src/app/protein-recommendations/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PRODUCT_LINKS, SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Best Protein Supplements for Weight Loss & Metabolism (2026)",
  description:
    "Protein picks to help preserve lean mass during weight loss. General guidance on how much protein you need, plus supplement options to consider.",
  alternates: { canonical: `${SITE_URL}/protein-recommendations` },
};

const PRODUCTS = [
  {
    name: "Thorne Whey Protein Isolate",
    certification: "NSF Certified for Sport",
    imageSrc: "/images/protein-recommendations/thorne-whey-protein.jpg",
    imageAlt: "Thorne Whey Protein Isolate, Chocolate flavor, 1.99 lb tub",
    description:
      "Whey isolate with minimal carbs and fat — a good fit if you're tracking macros closely during a deficit and want a straightforward daily shake.",
    price: "~$1.50–2.00 / serving",
    href: PRODUCT_LINKS.thorneWheyIsolate,
  },
  {
    name: "Momentous Whey Protein",
    certification: "NSF Certified for Sport",
    imageSrc: "/images/protein-recommendations/momentous-whey-protein.jpg",
    imageAlt: "Momentous Whey Protein Isolate, Chocolate flavor, 1.44 lb tub",
    description:
      "A widely used whey option with a clean ingredient profile — works well as a baseline post-workout or between-meal protein source.",
    price: "~$1.50–2.00 / serving",
    href: PRODUCT_LINKS.momentousWhey,
  },
  {
    name: "Garden of Life Sport Organic Plant-Based Protein",
    certification: "NSF Certified for Sport",
    imageSrc: "/images/protein-recommendations/garden-of-life-sport-protein.jpg",
    imageAlt:
      "Garden of Life Sport Organic Plant-Based Protein, Chocolate flavor, 12 packets",
    description:
      "Organic plant-based blend for those who don't tolerate whey or prefer a dairy-free option — useful for spreading protein across the day.",
    price: "~$1.00–1.40 / serving",
    href: PRODUCT_LINKS.gardenOfLifeSport,
  },
  {
    name: "Transparent Labs 100% Grass-Fed Whey Protein Isolate",
    certification: "Third-party Certificate of Analysis (CoA) published",
    imageSrc: "/images/protein-recommendations/transparent-labs-whey-protein.jpg",
    imageAlt:
      "Transparent Labs Grass-Fed 100% Whey Protein Isolate, Milk Chocolate flavor, 30 servings",
    description:
      "Grass-fed whey isolate with publicly available third-party test results — a solid pick if you want batch-level transparency without NSF Certified for Sport.",
    price: "~$1.00–1.50 / serving",
    href: PRODUCT_LINKS.transparentLabsWhey,
  },
] as const;

const FAQ_ITEMS = [
  {
    question: "How much protein do I need daily?",
    answer:
      "For many adults, a general range during weight loss is roughly 0.7–1.0 grams of protein per pound of body weight per day, though needs vary by age, activity level, and overall health. Whole-food sources should make up most of your intake; supplements are optional.",
  },
  {
    question: "Does protein affect BMR?",
    answer:
      "Protein has a higher thermic effect than carbs or fat — your body uses more energy to digest it. More importantly during weight loss, adequate protein helps preserve lean muscle mass, which is metabolically active tissue that supports your resting calorie burn.",
  },
  {
    question: "Whey vs plant protein — which is better?",
    answer:
      "Whey is a complete protein and is generally well absorbed, which makes it popular. Plant blends (pea plus rice, for example) can also provide a complete profile. The best choice is the one you tolerate well and will use consistently alongside mostly whole-food protein sources.",
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

type PageProps = {
  searchParams: Promise<{ bmr?: string; weight?: string }>;
};

export default async function ProteinRecommendationsPage({
  searchParams,
}: PageProps) {
  const params = await searchParams;
  const weight = parseFloat(params.weight ?? "");
  const bmr = parseFloat(params.bmr ?? "");
  const hasWeight = Number.isFinite(weight) && weight > 0;
  const hasBmr = Number.isFinite(bmr) && bmr > 0;

  const proteinLow = hasWeight ? Math.round(weight * 0.7) : null;
  const proteinHigh = hasWeight ? Math.round(weight * 1.0) : null;

  return (
    <main className="max-w-3xl mx-auto px-5 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd()).replace(/</g, "\\u003c"),
        }}
      />

      <p className="font-mono text-xs uppercase tracking-widest text-clay mb-3">
        Recommended
      </p>
      <h1 className="text-3xl font-semibold tracking-tight text-ink mb-3">
        Protein Picks to Protect Your Metabolism
      </h1>
      <p className="text-sage mb-8 max-w-xl leading-relaxed">
        When your{" "}
        <Link href="/bmr-calculator" className="text-clay underline">
          BMR
        </Link>{" "}
        runs lower — whether from age, a smaller frame, or past dieting —
        preserving lean mass becomes more important during any calorie
        deficit. Adequate protein is one of the most practical levers for
        that, alongside resistance training.
      </p>

      {hasWeight && proteinLow !== null && proteinHigh !== null && (
        <div className="border border-ink/20 bg-paper p-5 mb-8 text-sm text-sage font-mono leading-relaxed">
          <p className="text-xs uppercase tracking-wide text-sage mb-2">
            Based on your calculator inputs
          </p>
          <p>
            At {Math.round(weight)} lb, a general protein target during weight
            loss is roughly 0.7–1g per lb of bodyweight (~{proteinLow}–
            {proteinHigh}g/day) to help preserve lean mass.
            {hasBmr && (
              <>
                {" "}
                Your calculated BMR is {Math.round(bmr).toLocaleString()}{" "}
                calories/day at rest.
              </>
            )}
          </p>
          <p className="mt-3 text-xs text-sage/80">
            General nutrition information only — not individualized medical
            advice.
          </p>
        </div>
      )}

      <p className="font-mono text-xs uppercase tracking-widest text-clay mb-4">
        Recommended picks
      </p>
      <div className="grid sm:grid-cols-2 gap-px bg-line border border-line mb-8">
        {PRODUCTS.map((product) => (
          <article
            key={product.name}
            className="bg-paper p-5 flex flex-col"
          >
            <div className="mb-4 border border-ink/15 bg-white w-[100px] h-[100px] flex items-center justify-center">
              <Image
                src={product.imageSrc}
                alt={product.imageAlt}
                width={100}
                height={100}
                className="w-[100px] h-[100px] object-contain"
              />
            </div>
            <h2 className="text-ink font-semibold mb-1">{product.name}</h2>
            <p className="text-[10px] uppercase tracking-widest text-clay font-mono mb-2">
              {product.certification}
            </p>
            <p className="text-sm text-sage leading-relaxed mb-3 flex-1">
              {product.description}
            </p>
            <p className="text-xs text-sage font-mono mb-4">{product.price}</p>
            <a
              href={product.href}
              target="_blank"
              rel="nofollow sponsored noopener"
              className="inline-block self-start text-sm font-mono text-clay border border-clay px-4 py-2 hover:bg-clay hover:text-paper transition-colors"
            >
              View option →
            </a>
          </article>
        ))}
      </div>

      <p className="text-[10px] text-sage font-mono leading-relaxed mb-12 border border-ink/15 p-4">
        livinghealthier.net is a participant in the Amazon Services LLC
        Associates Program, an affiliate advertising program designed to
        provide a means for sites to earn advertising fees by advertising and
        linking to Amazon.com.
      </p>

      <section className="prose-sage">
        <p className="font-mono text-xs uppercase tracking-widest text-clay mb-3">
          Why protein matters
        </p>
        <h2 className="text-xl font-semibold text-ink mb-3">
          How much protein do you actually need?
        </h2>
        <div className="border border-ink/20 bg-paper p-5 text-xs text-sage font-mono leading-relaxed mb-4">
          Protein supports muscle repair and maintenance — the lean tissue
          that helps keep your resting metabolism from dropping faster than
          necessary during weight loss. Most people do best spreading intake
          across meals rather than loading it all at once.
        </div>
        <p className="text-sage mb-4 leading-relaxed">
          A common starting range during a deficit is roughly 0.7–1.0 grams
          per pound of body weight per day, though individual needs vary.
          Whole foods — eggs, poultry, fish, legumes, dairy — should carry most
          of that load. Powders are a convenience tool for closing the gap
          when meals fall short, not a replacement for a balanced diet.
        </p>
        <p className="text-sage leading-relaxed">
          Timing matters less than total daily intake for most people, but
          distributing protein across breakfast, lunch, and dinner (roughly
          20–40g per meal for many adults) tends to be easier to sustain
          than one large serving. Pair adequate protein with some form of
          resistance training if preserving muscle is the goal.
        </p>
      </section>

      <p className="mt-12 text-xs text-sage font-mono leading-relaxed border-t border-ink/15 pt-6">
        This page contains affiliate links. We may earn a commission from
        qualifying purchases at no extra cost to you. This is general
        nutrition information, not medical advice — consult a healthcare
        provider before starting any supplement.
      </p>
    </main>
  );
}
