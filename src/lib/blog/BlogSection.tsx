import type { ReactNode } from "react";

export function BlogSection({
  heading,
  children,
}: {
  heading: string;
  children: ReactNode;
}) {
  return (
    <section>
      <h2 className="text-xl font-semibold text-ink mb-3">{heading}</h2>
      <div className="space-y-4 text-sage leading-relaxed">{children}</div>
    </section>
  );
}
