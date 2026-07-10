import type { TocItem } from "@/lib/blog-posts";

// Sticky, desktop-only table of contents. Auto-generated from the article's
// H2 headings (passed in as items). Server component.
export default function TableOfContents({ items }: { items: TocItem[] }) {
  if (items.length === 0) return null;

  return (
    <nav
      aria-label="Table of contents"
      className="hidden lg:block sticky top-8 self-start bg-white border-l-2 border-gold-500 shadow-luxury-sm p-5"
    >
      <p className="eyebrow mb-3">On this page</p>
      <ol className="space-y-2 font-body text-xs tracking-wide">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className="text-ink-500 hover:text-gold-600 transition-colors duration-200"
            >
              {item.text}
            </a>
          </li>
        ))}
        <li>
          <a
            href="#faq"
            className="text-ink-500 hover:text-gold-600 transition-colors duration-200"
          >
            FAQ
          </a>
        </li>
      </ol>
    </nav>
  );
}
