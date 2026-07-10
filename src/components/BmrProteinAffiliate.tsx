"use client";

type BmrProteinAffiliateProps = {
  bmr: number;
  weightLbs: number;
  hasInput: boolean;
};

export default function BmrProteinAffiliate({
  bmr,
  weightLbs,
  hasInput,
}: BmrProteinAffiliateProps) {
  const href = hasInput
    ? `/protein-recommendations?bmr=${bmr}&weight=${Math.round(weightLbs)}`
    : "/protein-recommendations";

  return (
    <aside className="mt-8 bg-ivory-200 border border-ivory-300 p-6 rounded-none">
      <p className="eyebrow text-gold-600 mb-3">Physician-Recommended</p>
      <h3 className="font-body font-semibold text-ink-900">
        Support your metabolism
      </h3>
      <p className="font-body text-sm text-ink-500 leading-relaxed mt-1">
        Protein intake and resistance training both help preserve BMR during
        weight loss.
      </p>
      <a
        href={href}
        className="border border-gold-500 text-gold-600 text-xs tracking-wide uppercase font-medium px-5 py-2.5 rounded-none hover:bg-gold-500 hover:text-forest-950 transition-all duration-200 mt-4 inline-block"
      >
        See recommended protein options →
      </a>
    </aside>
  );
}
