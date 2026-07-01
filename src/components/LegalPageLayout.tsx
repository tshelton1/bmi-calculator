import Link from "next/link";
import type { ReactNode } from "react";

export type LegalTocItem = {
  id: string;
  title: string;
};

type LegalPageLayoutProps = {
  title: string;
  effectiveDate: string;
  toc: LegalTocItem[];
  children: ReactNode;
};

export function LegalPageLayout({
  title,
  effectiveDate,
  toc,
  children,
}: LegalPageLayoutProps) {
  return (
    <main className="max-w-3xl mx-auto px-5 py-10">
      <Link
        href="/"
        className="inline-block text-sm font-mono text-sage hover:text-clay transition-colors mb-6"
      >
        ← Living Healthier Home
      </Link>

      <p className="font-mono text-xs uppercase tracking-widest text-clay mb-3">
        Legal
      </p>
      <h1 className="text-3xl font-semibold tracking-tight text-ink mb-3">
        {title}
      </h1>
      <p className="text-xs text-sage font-mono mb-8">
        Effective date: {effectiveDate}
      </p>

      <nav
        className="border border-ink/20 bg-paper p-5 mb-8"
        aria-label="Table of contents"
      >
        <p className="font-mono text-[10px] uppercase tracking-widest text-clay mb-3">
          Contents
        </p>
        <ol className="space-y-2 text-sm text-sage">
          {toc.map((item, index) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className="hover:text-clay transition-colors"
              >
                {index + 1}. {item.title}
              </a>
            </li>
          ))}
        </ol>
      </nav>

      <div className="space-y-6">{children}</div>
    </main>
  );
}

type LegalSectionProps = {
  id: string;
  title: string;
  children: ReactNode;
};

export function LegalSection({ id, title, children }: LegalSectionProps) {
  return (
    <section id={id} className="border border-ink/20 bg-paper p-5 scroll-mt-6">
      <h2 className="text-xl font-semibold text-ink mb-3">{title}</h2>
      <div className="text-sm text-sage leading-relaxed space-y-4">{children}</div>
    </section>
  );
}
