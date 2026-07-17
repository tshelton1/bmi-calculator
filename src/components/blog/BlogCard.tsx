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
    <article className="group">
      <time
        dateTime={post.datePublished}
        className="block font-mono text-xs text-ink-500 mb-3 tracking-wide"
      >
        {published}
      </time>

      {/* Orange outer frame with a thick green inner border */}
      <div className="bg-clay p-2 sm:p-2.5">
        <div className="border-[3px] sm:border-4 border-forest-700 bg-white px-5 py-6 sm:px-6 sm:py-8 transition-colors duration-200 group-hover:bg-ivory-200">
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
        </div>
      </div>
    </article>
  );
}
