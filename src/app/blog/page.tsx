import type { Metadata } from "next";
import Link from "next/link";
import BlogCard from "@/components/blog/BlogCard";
import { getAllBlogPosts } from "@/lib/blog-posts";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: { absolute: "Health & Fitness Guides by a Physician | LivingHealthier" },
  description:
    "Physician-written guides on BMI, body fat, metabolism, TDEE, and weight loss — clinically accurate, plain-English articles by Dr. Tiffani, DO.",
  alternates: { canonical: `${SITE_URL}/blog` },
  openGraph: {
    title: "Health & Fitness Guides by a Physician | LivingHealthier",
    description:
      "Clinically accurate, plain-English guides on BMI, body fat, metabolism, and weight management by Dr. Tiffani, DO.",
    type: "website",
    url: `${SITE_URL}/blog`,
  },
};

export default function BlogIndexPage() {
  const posts = getAllBlogPosts();

  return (
    <main className="max-w-3xl mx-auto px-6 py-12">
      <nav className="text-sm font-mono text-ink-500 mb-6" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-gold-600 transition-colors duration-200">
          Home
        </Link>
        <span className="mx-2">→</span>
        <span className="text-ink-900">Blog</span>
      </nav>

      <p className="eyebrow mb-3">Physician-Written Guides</p>
      <div className="w-12 h-px bg-gold-500 mb-6" />
      <h1 className="font-display text-4xl md:text-6xl font-light text-ink-900 tracking-display leading-tight">
        Health &amp; Fitness Guides by a Physician
      </h1>
      <p className="font-body text-lg text-ink-500 leading-relaxed mt-6 max-w-2xl">
        Clinically accurate, plain-English articles on BMI, body composition,
        metabolism, and weight management — written and reviewed by Dr.
        Tiffani, DO, SA-C, a board-certified physician with 15+ years of
        clinical and surgical experience.
      </p>

      <div className="mt-10 border-t border-ivory-300">
        {posts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </main>
  );
}
