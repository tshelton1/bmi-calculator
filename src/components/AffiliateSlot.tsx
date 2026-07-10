// src/components/AffiliateSlot.tsx
// Placeholder affiliate unit. Swap the CONTENT object below with your actual
// affiliate links/copy per placement once programs are approved. Keeping
// this as a single source of truth makes it easy to update links sitewide
// without hunting through every page.
//
// FTC NOTE: Affiliate links must be disclosed. The "Affiliate" label below
// is required, not optional — don't remove it even if it feels unnecessary.

type Placement =
  | "bmi-mid"
  | "bmr-mid"
  | "calorie-mid"
  | "bodyfat-mid"
  | "macro-mid";

type AffiliateContent = {
  headline: string;
  body: string;
  ctaLabel: string;
  href: string; // replace with real affiliate link
};

const CONTENT: Record<Placement, AffiliateContent> = {
  "bmi-mid": {
    headline: "Track changes over time",
    body: "A single BMI reading is a snapshot. A smart scale logs trends automatically.",
    ctaLabel: "See recommended scales",
    href: "/recommended-scales",
  },
  "bmr-mid": {
    headline: "Support your metabolism",
    body: "Protein intake and resistance training both help preserve BMR during weight loss.",
    ctaLabel: "See recommended protein options",
    href: "/protein-recommendations",
  },
  "calorie-mid": {
    headline: "Hit your numbers without guesswork",
    body: "A kitchen scale makes portion tracking accurate instead of estimated.",
    ctaLabel: "See recommended kitchen scales",
    href: "https://amzn.to/4eEAoUS",
  },
  "bodyfat-mid": {
    headline: "Get a more precise reading",
    body: "Calipers offer a cheap second data point alongside the Navy method estimate above.",
    ctaLabel: "See recommended calipers",
    href: "/recommended-calipers",
  },
  "macro-mid": {
    headline: "Hit your protein target consistently",
    body: "A quality protein powder makes it easier to close the gap when whole-food meals fall short.",
    ctaLabel: "See recommended protein powders",
    href: "#", // TODO: replace with affiliate link
  },
};

export default function AffiliateSlot({ placement }: { placement: Placement }) {
  const content = CONTENT[placement];

  return (
    <aside className="mt-8 bg-ivory-200 border border-ivory-300 p-6 rounded-none">
      <p className="eyebrow text-gold-600 mb-3">Physician-Recommended</p>
      <h3 className="font-body font-semibold text-ink-900">{content.headline}</h3>
      <p className="font-body text-sm text-ink-500 leading-relaxed mt-1">
        {content.body}
      </p>
      <a
        href={content.href}
        target="_blank"
        rel="noopener noreferrer sponsored"
        className="border border-gold-500 text-gold-600 text-xs tracking-wide uppercase font-medium px-5 py-2.5 rounded-none hover:bg-gold-500 hover:text-forest-950 transition-all duration-200 mt-4 inline-block"
      >
        {content.ctaLabel} →
      </a>
      <p className="font-body text-xs text-ink-300 mt-3">
        Affiliate link — as an Amazon Associate we may earn from qualifying
        purchases, at no extra cost to you.
      </p>
    </aside>
  );
}
