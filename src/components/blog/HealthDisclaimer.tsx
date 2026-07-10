// Reusable medical disclaimer banner. Server component (no client JS).
export default function HealthDisclaimer() {
  return (
    <div
      role="note"
      className="border-l-2 border-gold-500 bg-gold-100 text-ink-700 px-6 py-4 text-sm font-body leading-relaxed my-8"
    >
      <p className="eyebrow text-gold-600 mb-1">Medical disclaimer</p>
      <p>
        This article is for general education only and does not replace
        personalized medical advice, diagnosis, or treatment. Always consult a
        qualified healthcare provider before making health or nutrition
        decisions — especially if you have chronic conditions, take
        medications, or are pregnant or breastfeeding.
      </p>
    </div>
  );
}
