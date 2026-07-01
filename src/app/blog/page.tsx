import type { Metadata } from "next";
import Link from "next/link";
import { BLOG_POSTS } from "@/lib/blog";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: {
    absolute: "Blog & Guides | Living Healthier",
  },
  description:
    "Plain-English guides on metabolism, body composition, and weight management — written to complement our free health calculators.",
  alternates: { canonical: `${SITE_URL}/blog` },
};

export default function BlogIndexPage() {
  return (
    <main className="max-w-3xl mx-auto px-5 py-10">
      <p className="font-mono text-xs uppercase tracking-widest text-clay mb-3">
        Resources
      </p>
      <h1 className="text-3xl font-semibold tracking-tight text-ink mb-3">
        Blog & Guides
      </h1>
      <p className="text-sage mb-10 max-w-xl leading-relaxed">
        Plain-English articles on metabolism, body composition, and weight
        management — designed to help you use our calculators with more context.
      </p>

      <div className="grid sm:grid-cols-2 gap-px bg-line border border-line">
        {BLOG_POSTS.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="bg-paper p-5 hover:bg-ink/[0.03] transition-colors group flex flex-col"
          >
            <p className="font-mono text-[10px] uppercase tracking-widest text-clay mb-2">
              {post.topicLabel}
            </p>
            <h2 className="text-ink font-semibold mb-2 group-hover:text-clay transition-colors">
              {post.title}
            </h2>
            <p className="text-sm text-sage leading-relaxed mb-4 flex-1">
              {post.excerpt}
            </p>
            <span className="text-sm font-mono text-clay group-hover:underline">
              Read more →
            </span>
          </Link>
        ))}
      </div>
    </main>
  );
}
