import type { Metadata } from "next";
import Link from "next/link";
import { getAllBlogPosts } from "@/lib/blog-posts";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: { absolute: "Pinterest Infographics | LivingHealthier" },
  description:
    "Download physician-written Pinterest infographics (1000×1500) for Living Healthier blog posts.",
  alternates: { canonical: `${SITE_URL}/pinterest` },
  robots: { index: false, follow: false },
};

export default function PinterestInfographicsPage() {
  const posts = getAllBlogPosts();

  return (
    <main className="max-w-5xl mx-auto px-6 py-12">
      <nav className="text-sm font-mono text-ink-500 mb-6" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-gold-600 transition-colors duration-200">
          Home
        </Link>
        <span className="mx-2">→</span>
        <Link href="/blog" className="hover:text-gold-600 transition-colors duration-200">
          Blog
        </Link>
        <span className="mx-2">→</span>
        <span className="text-ink-900">Pinterest</span>
      </nav>

      <p className="eyebrow mb-3">Internal Download Utility</p>
      <div className="w-12 h-px bg-gold-500 mb-6" />
      <h1 className="font-display text-4xl md:text-5xl font-light text-ink-900 tracking-display leading-tight">
        Pinterest Infographics
      </h1>
      <p className="font-body text-lg text-ink-500 leading-relaxed mt-6 max-w-2xl">
        1000×1500 PNGs generated with Next.js ImageResponse for each blog post.
        Use Download, or right-click a preview and choose Save Image As.
      </p>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {posts.map((post) => {
          const src = `/api/pinterest/${post.slug}`;
          return (
            <article key={post.slug} className="flex flex-col gap-4">
              <div className="overflow-hidden border border-ivory-300 bg-ivory-100">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={src}
                  alt={`Pinterest infographic: ${post.title}`}
                  width={1000}
                  height={1500}
                  className="w-full h-auto block"
                  loading="lazy"
                />
              </div>
              <div>
                <p className="text-xs font-mono uppercase tracking-wide text-gold-600 mb-1">
                  {post.topicLabel}
                </p>
                <h2 className="font-display text-xl text-ink-900 leading-snug">
                  {post.title}
                </h2>
              </div>
              <a
                href={src}
                download={`${post.slug}-pinterest.png`}
                className="inline-flex items-center justify-center px-4 py-2.5 bg-forest-900 text-ivory-100 text-sm font-medium tracking-wide hover:bg-forest-800 transition-colors"
              >
                Download PNG
              </a>
            </article>
          );
        })}
      </div>
    </main>
  );
}
