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
        className="inline-block text-sm font-mono text-sage hover:text-clay transition-colors mb-6"
      >
        ← Blog & Guides
      </Link>

      <p className="font-mono text-xs uppercase tracking-widest text-clay mb-3">
        {post.topicLabel}
      </p>
      <h1 className="text-3xl font-semibold tracking-tight text-ink mb-8">
        {post.title}
      </h1>

      <article className="prose-sage space-y-8 mb-12">{post.body}</article>

      {post.faq.length > 0 && (
        <section className="mb-12">
          <p className="font-mono text-xs uppercase tracking-widest text-clay mb-3">
            Common questions
          </p>
          <h2 className="text-xl font-semibold text-ink mb-4">FAQ</h2>
          <div className="space-y-4">
            {post.faq.map((item) => (
              <div
                key={item.question}
                className="border border-ink/20 bg-paper p-5"
              >
                <h3 className="text-ink font-semibold mb-2">{item.question}</h3>
                <p className="text-sm text-sage leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      <p className="text-xs text-sage font-mono leading-relaxed border-t border-ink/15 pt-6">
        This is general information, not medical advice — consult a healthcare
        provider before making health decisions.
      </p>
    </main>
  );
}
