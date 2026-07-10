// Dr. Tiffani credentials block, rendered at the foot of each article.
// Server component (no client JS).
export default function AuthorBio() {
  return (
    <section className="bg-forest-900 text-ivory-100 p-8 mt-16 border-l-2 border-gold-500">
      <p className="eyebrow text-gold-400 mb-3">About the author</p>
      <h2 className="font-display text-xl text-ivory-100 mb-2">
        Dr. Tiffani, DO, SA-C
      </h2>
      <p className="font-body text-sm text-forest-200 leading-relaxed">
        Dr. Tiffani is a board-certified osteopathic physician and Certified
        Surgical First Assistant with more than 15 years of clinical and
        surgical experience. She writes Living Healthier guides to translate
        complex metabolic and body-composition science into practical language
        patients can use alongside their own care team.
      </p>
    </section>
  );
}
