import Link from "next/link";
import { getToc, readingTimeMinutes, type BlogPost } from "@/lib/blog-posts";
import { SITE_URL } from "@/lib/constants";
import TableOfContents from "@/components/blog/TableOfContents";
import HealthDisclaimer from "@/components/blog/HealthDisclaimer";
import AuthorBio from "@/components/blog/AuthorBio";
import { Accordion } from "@/components/ui/Accordion";
import NavyBodyFatCalculatorTool from "@/components/tools/NavyBodyFatCalculatorTool";

const NAVY_CALC_MARKER = "{{NAVY_BODY_FAT_CALCULATOR}}";

// Emits a real HTML comment placeholder so ad placement is planned but inert.
function AdSlot({ label }: { label: string }) {
  return (
    <div
      aria-hidden="true"
      dangerouslySetInnerHTML={{ __html: `<!-- ADSENSE UNIT: ${label} -->` }}
    />
  );
}

function articleJsonLd(post: BlogPost) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.datePublished,
    dateModified: post.dateReviewed,
    author: { "@type": "Person", name: "Dr. Tiffani" },
    publisher: { "@type": "Organization", name: "LivingHealthier" },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/blog/${post.slug}`,
    },
    image: `${SITE_URL}${post.ogImage}`,
  };
}

function faqJsonLd(post: BlogPost) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: post.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}

function ArticleBody({ html }: { html: string }) {
  if (!html.includes(NAVY_CALC_MARKER)) {
    return (
      <article
        className="prose-sage"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    );
  }

  const [before, after] = html.split(NAVY_CALC_MARKER);
  return (
    <article className="prose-sage">
      <div dangerouslySetInnerHTML={{ __html: before }} />
      <div className="not-prose my-10">
        <NavyBodyFatCalculatorTool embedded />
      </div>
      <div dangerouslySetInnerHTML={{ __html: after }} />
    </article>
  );
}

export default function BlogPostLayout({ post }: { post: BlogPost }) {
  const toc = getToc(post);
  const readTime = readingTimeMinutes(post);
  const reviewed = new Date(post.dateReviewed).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <main className="max-w-5xl mx-auto px-6 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleJsonLd(post)).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd(post)).replace(/</g, "\\u003c"),
        }}
      />

      <nav className="text-sm font-mono text-ink-500 mb-6" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-gold-600 transition-colors duration-200">
          Home
        </Link>
        <span className="mx-2">→</span>
        <Link href="/blog" className="hover:text-gold-600 transition-colors duration-200">
          Blog
        </Link>
        <span className="mx-2">→</span>
        <span className="text-ink-900">{post.topicLabel}</span>
      </nav>

      <div className="lg:grid lg:grid-cols-[1fr_240px] lg:gap-10">
        <div>
          <p className="eyebrow mb-3">{post.topicLabel}</p>
          <div className="w-12 h-px bg-gold-500 mb-6" />
          <h1 className="font-display text-4xl md:text-6xl font-light text-ink-900 tracking-display leading-tight max-w-3xl">
            {post.title}
          </h1>
          <p className="eyebrow text-ink-300 mt-4">
            {readTime} min read · Last reviewed by Dr. Tiffani, DO on {reviewed}
          </p>

          <HealthDisclaimer />

          <AdSlot label="in-article" />

          <ArticleBody html={post.contentHtml} />

          <AdSlot label="in-article" />

          {post.faq && post.faq.length > 0 && (
            <section id="faq" className="mt-16 scroll-mt-8">
              <hr className="divider-gold mb-12" />
              <p className="eyebrow mb-2">Common Questions</p>
              <h2 className="font-display text-3xl font-medium text-ink-900 tracking-display mb-10">
                Frequently asked questions
              </h2>
              <Accordion
                defaultOpenIndex={0}
                items={post.faq.map((item) => ({
                  question: item.question,
                  answer: <p>{item.answer}</p>,
                }))}
              />
            </section>
          )}

          <section className="mt-12 bg-white border-l-2 border-gold-500 shadow-luxury-sm p-6">
            <p className="eyebrow mb-3">Related calculators</p>
            <div className="space-y-4">
              {post.relatedCalculators.map((calc) => (
                <div key={calc.href}>
                  <Link
                    href={calc.href}
                    className="text-ink-900 font-semibold hover:text-gold-600 transition-colors duration-200"
                  >
                    {calc.title} →
                  </Link>
                  <p className="text-sm text-ink-500 mt-1">{calc.description}</p>
                </div>
              ))}
            </div>
          </section>

          <AuthorBio />
        </div>

        <aside className="hidden lg:block">
          <TableOfContents items={toc} />
        </aside>
      </div>
    </main>
  );
}
