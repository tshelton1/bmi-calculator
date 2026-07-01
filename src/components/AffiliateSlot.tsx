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
    <aside className="mt-8 border border-line bg-ink/[0.02] p-5">
      <span className="text-[10px] uppercase tracking-widest text-sage font-mono">
        Affiliate
      </span>
      <h3 className="text-ink font-semibold mt-1.5 mb-1">{content.headline}</h3>
      <p className="text-sm text-sage mb-3">{content.body}</p>
      <a
        href={content.href}
        target="_blank"
        rel="noopener noreferrer sponsored"
        className="inline-block text-sm font-mono text-clay border border-clay px-4 py-2 hover:bg-clay hover:text-paper transition-colors"
      >
        {content.ctaLabel} →
      </a>
    </aside>
  );
}
