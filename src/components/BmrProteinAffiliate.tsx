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
    <aside className="mt-8 border border-line bg-ink/[0.02] p-5">
      <span className="text-[10px] uppercase tracking-widest text-sage font-mono">
        Affiliate
      </span>
      <h3 className="text-ink font-semibold mt-1.5 mb-1">
        Support your metabolism
      </h3>
      <p className="text-sm text-sage mb-3">
        Protein intake and resistance training both help preserve BMR during
        weight loss.
      </p>
      <a
        href={href}
        className="inline-block text-sm font-mono text-clay border border-clay px-4 py-2 hover:bg-clay hover:text-paper transition-colors"
      >
        See recommended protein options →
      </a>
    </aside>
  );
}
