import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogPostLayout from "@/components/blog/BlogPostLayout";
import { getAllBlogSlugs, getBlogPost } from "@/lib/blog-posts";
import { SITE_URL } from "@/lib/constants";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};

  const url = `${SITE_URL}/blog/${post.slug}`;
  return {
    title: { absolute: `${post.title} | LivingHealthier` },
    description: post.description,
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      url,
      images: [{ url: `${SITE_URL}${post.ogImage}` }],
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  return <BlogPostLayout post={post} />;
}
