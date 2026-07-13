import type { Metadata } from "next";
import Link from "next/link";

export { LEGACY_NOINDEX_PATHS } from "@/lib/legacy-paths";

export const legacyNoIndexMetadata: Metadata = {
  robots: { index: false, follow: false },
};

export function LegacyRetiredPage({ title }: { title: string }) {
  return (
    <main className="max-w-3xl mx-auto px-5 py-16">
      <h1 className="text-2xl font-semibold tracking-tight text-ink mb-3">
        {title}
      </h1>
      <p className="text-sage mb-6 leading-relaxed">
        This page is no longer active. It was part of an older marketing site
        and does not contain current Living Healthier calculator or health
        content.
      </p>
      <p>
        <Link href="/" className="text-clay underline">
          Go to the Living Healthier homepage
        </Link>
      </p>
    </main>
  );
}
