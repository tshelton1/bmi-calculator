// src/app/about/page.tsx
import type { Metadata } from "next";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Living Healthier's calculator tools — who built them and why.",
  alternates: { canonical: `${SITE_URL}/about` },
};

export default function AboutPage() {
  return (
    <main className="max-w-3xl mx-auto px-5 py-10">
      <h1 className="text-3xl font-semibold tracking-tight text-ink mb-6">
        About
      </h1>
      <div className="prose-sage space-y-4 text-sage leading-relaxed max-w-2xl">
        <p>
          Living Healthier&apos;s calculator tools were built to do one
          thing well: give people fast, accurate answers about body
          measurements without requiring a signup, an email address, or a
          sales pitch.
        </p>
        <p>
          These tools are created and maintained by{" "}
          <strong className="text-ink">Tiffani Shelton, D.O.</strong>, a
          physician with a background in surgery. The formulas used here —
          BMI, the Mifflin-St Jeor equation for BMR, and the US Navy
          circumference method for body fat — are established, widely-used
          calculations, not proprietary or experimental methods.
        </p>
        <p>
          Nothing on this site is a substitute for individualized medical
          advice. These tools provide estimates intended for general
          informational and educational purposes. If you have questions
          about your health, weight, or body composition, talk to a doctor
          or qualified clinician who knows your history.
        </p>
        <p>
          Have a question, a bug to report, or a suggestion for another
          calculator? Reach out via the{" "}
          <a href="/contact" className="text-clay underline">
            contact page
          </a>
          .
        </p>
      </div>
    </main>
  );
}
