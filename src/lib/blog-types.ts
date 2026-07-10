export type BlogFaqItem = {
  question: string;
  answer: string;
};

export type ContentPart = string | { text: string; href: string };

export type ContentBlock =
  | { type: "p"; text: string }
  | { type: "rich"; parts: ContentPart[] }
  | { type: "table"; caption?: string; headers: string[]; rows: string[][] }
  | { type: "ul"; items: string[] }
  | { type: "ad-placeholder" };

export type BlogSectionData = {
  heading: string;
  blocks: ContentBlock[];
};

export type RelatedCalculator = {
  href: string;
  title: string;
  description: string;
};

export type BlogPostData = {
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  topicLabel: string;
  datePublished: string;
  dateReviewed: string;
  intro: string;
  sections: BlogSectionData[];
  faq: BlogFaqItem[];
  closing: ContentBlock[];
  relatedCalculators: RelatedCalculator[];
  infographicSlug: string;
};

export const BLOG_CANONICAL_BASE = "https://bmi.livinghealthier.net";

export function slugToHeadingId(heading: string): string {
  return heading
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

export function estimateReadingTime(post: BlogPostData): number {
  const text = [
    post.intro,
    ...post.sections.flatMap((s) => [
      s.heading,
      ...s.blocks.flatMap((b) => {
        if (b.type === "p") return [b.text];
        if (b.type === "rich") return b.parts.map((p) => (typeof p === "string" ? p : p.text));
        if (b.type === "table") return [...b.headers, ...b.rows.flat()];
        if (b.type === "ul") return b.items;
        return [];
      }),
    ]),
    ...post.faq.flatMap((f) => [f.question, f.answer]),
    ...post.closing.flatMap((b) => (b.type === "p" ? [b.text] : [])),
  ].join(" ");
  const words = text.split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 200));
}
