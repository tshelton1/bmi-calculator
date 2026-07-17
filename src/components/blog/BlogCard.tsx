import Link from "next/link";
import { readingTimeMinutes, type BlogPost } from "@/lib/blog-posts";

// Editorial index card for a single post. Server component.
export default function BlogCard({ post }: { post: BlogPost }) {
  const readTime = readingTimeMinutes(post);
  const published = new Date(post.datePublished + "T12:00:00").toLocaleDateString(
    "en-US",
    { month: "long", day: "numeric", year: "numeric" }
  );

  return (
    <article className="group bg-ivory-200 border border-ivory-300 rounded-lg shadow-luxury-sm border-l-2 border-l-gold-500 px-5 py-6 sm:px-6 sm:py-8 transition-shadow duration-200 hover:shadow-luxury-md">
      <p className="eyebrow text-ink-300">
        {post.topicLabel} · {readTime} min read
      </p>
      <h2 className="font-display text-2xl font-medium text-ink-900 tracking-display leading-tight mt-2 group-hover:text-forest-800 transition-colors duration-200">
        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
      </h2>
      <time
        dateTime={post.datePublished}
        className="block font-mono text-xs text-ink-500 mt-2 tracking-wide"
      >
        {published}
      </time>
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
