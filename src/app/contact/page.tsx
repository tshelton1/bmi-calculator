// src/app/contact/page.tsx
import type { Metadata } from "next";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with the Living Healthier team.",
  alternates: { canonical: `${SITE_URL}/contact` },
};

export default function ContactPage() {
  return (
    <main className="max-w-3xl mx-auto px-5 py-10">
      <h1 className="text-3xl font-semibold tracking-tight text-ink mb-6">
        Contact
      </h1>
      <div className="prose-sage space-y-4 text-sage leading-relaxed max-w-2xl">
        <p>
          Questions about a calculator, a bug report, or a suggestion for a
          new tool — all welcome.
        </p>
        <p>
          {/* TODO: replace with real contact email before launch */}
          Email: <a href="mailto:support@livinghealthier.net" className="text-clay underline">support@livinghealthier.net</a>
        </p>
        <p className="text-sm">
          This site does not provide individual medical advice via email or
          any other channel. For health concerns, please consult a licensed
          clinician.
        </p>
      </div>
    </main>
  );
}
