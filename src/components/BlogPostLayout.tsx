import Link from "next/link";
import type { BlogFaqItem, BlogPost } from "@/lib/blog/types";

function faqJsonLd(items: BlogFaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export default function BlogPostLayout({ post }: { post: BlogPost }) {
  return (
    <main className="max-w-3xl mx-auto px-5 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd(post.faq)).replace(/</g, "\\u003c"),
        }}
      />

      <Link
        href="/blog"
        className="inline-block text-sm font-mono text-ink-500 hover:text-gold-600 transition-colors duration-200 mb-6"
      >
        ← Blog & Guides
      </Link>

      <p className="eyebrow mb-3">{post.topicLabel}</p>
      <div className="w-12 h-px bg-gold-500 mb-6" />
      <h1 className="font-display text-4xl md:text-6xl font-light text-ink-900 tracking-display leading-tight max-w-3xl mb-8">
        {post.title}
      </h1>

      <article className="prose-sage space-y-8 mb-12">{post.body}</article>

      {post.faq.length > 0 && (
        <section className="mb-12">
          <p className="eyebrow mb-3">Common questions</p>
          <h2 className="text-2xl font-semibold text-ink-900 mb-4">FAQ</h2>
          <div className="space-y-4">
            {post.faq.map((item) => (
              <div
                key={item.question}
                className="bg-white border-l-2 border-gold-500 shadow-luxury-sm p-6"
              >
                <h3 className="text-ink-900 font-semibold mb-2">{item.question}</h3>
                <p className="text-sm text-ink-500 leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      <p className="border-l-2 border-gold-500 bg-gold-100 text-ink-700 px-6 py-4 text-sm font-body leading-relaxed">
        This is general information, not medical advice — consult a healthcare
        provider before making health decisions.
      </p>
    </main>
  );
}
