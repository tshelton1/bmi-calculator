import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllInfographicSlugs, getInfographic } from "@/components/infographics/registry";
import { getBlogPost } from "@/lib/blog-posts";
import { SITE_URL } from "@/lib/constants";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllInfographicSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const entry = getInfographic(slug);
  if (!entry) return {};

  const post = getBlogPost(slug);
  const title = post ? `${post.title} — Infographic` : "Living Healthier Infographic";
  const description =
    post?.description ??
    "A shareable, physician-reviewed health infographic from Living Healthier.";
  const pageUrl = `${SITE_URL}/infographics/${slug}`;

  return {
    title: { absolute: `${title} | LivingHealthier` },
    description,
    alternates: { canonical: pageUrl },
    openGraph: {
      title,
      description,
      type: "article",
      url: pageUrl,
      // Per spec: og:image points to this infographic route for Pinterest.
      images: [{ url: pageUrl, width: 1000, height: 1500 }],
    },
  };
}

export default async function InfographicPage({ params }: PageProps) {
  const { slug } = await params;
  const entry = getInfographic(slug);
  if (!entry) notFound();

  const { Component } = entry;
  const pageUrl = `${SITE_URL}/infographics/${slug}`;
  const post = getBlogPost(slug);
  const pinDescription = post?.title ?? "Living Healthier — free health calculators";
  const pinterestUrl = `https://www.pinterest.com/pin/create/button/?url=${encodeURIComponent(
    pageUrl,
  )}&media=${encodeURIComponent(pageUrl)}&description=${encodeURIComponent(pinDescription)}`;

  // Fixed, full-viewport white canvas overlays the site header/footer without
  // modifying the shared layout — giving a clean, print-ready surface.
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        backgroundColor: "#FFFFFF",
        overflow: "auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "24px 16px 48px",
        fontFamily: "Helvetica, Arial, sans-serif",
      }}
    >
      <div style={{ width: "100%", maxWidth: 1000 }}>
        <Component />
      </div>

      <div style={{ marginTop: 24, textAlign: "center" }}>
        <a
          href={pinterestUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            backgroundColor: "#E8633C",
            color: "#FFFFFF",
            fontWeight: 700,
            fontSize: 16,
            textDecoration: "none",
            padding: "12px 28px",
            borderRadius: 6,
          }}
        >
          Save to Pinterest
        </a>
        <p style={{ marginTop: 12, fontSize: 14, color: "#4A5E54" }}>
          Right-click → Save image / screenshot to save this infographic.
        </p>
      </div>
    </div>
  );
}
