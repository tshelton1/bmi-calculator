import Link from "next/link";
import { readingTimeMinutes, type BlogPost } from "@/lib/blog-posts";

// Editorial index card for a single post. Server component.
export default function BlogCard({ post }: { post: BlogPost }) {
  const readTime = readingTimeMinutes(post);

  return (
    <article className="group bg-white border-b border-ivory-300 py-8 px-6 hover:bg-ivory-200 transition-colors duration-200">
      <p className="eyebrow text-ink-300">
        {post.topicLabel} · {readTime} min read
      </p>
      <h2 className="font-display text-2xl font-medium text-ink-900 tracking-display leading-tight mt-2 group-hover:text-forest-800 transition-colors duration-200">
        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
      </h2>
      <p className="font-body text-sm text-ink-500 leading-relaxed mt-3 line-clamp-2">
        {post.excerpt}
      </p>
      <Link
        href={`/blog/${post.slug}`}
        className="font-body text-xs font-medium tracking-wide uppercase text-gold-600 hover:text-gold-500 flex items-center gap-2 mt-6"
      >
        Read guide
        <span className="transition-transform duration-200 group-hover:translate-x-0.5">
          →
        </span>
      </Link>
    </article>
  );
}
