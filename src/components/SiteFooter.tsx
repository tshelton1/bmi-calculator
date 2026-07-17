// src/components/SiteFooter.tsx
import Link from "next/link";
import FooterResetLink from "@/components/FooterResetLink";

const CALCULATOR_LINKS = [
  { href: "/bmi-calculator", label: "BMI Calculator" },
  { href: "/healthy-weight-range", label: "Weight Range" },
  { href: "/bmr-calculator", label: "BMR Calculator" },
  { href: "/calorie-calculator", label: "Calorie Needs" },
  { href: "/macro-calculator", label: "Macro Calculator" },
  { href: "/body-fat-calculator", label: "Navy Body Fat %" },
] as const;

const RESOURCE_LINKS = [
  { href: "/blog", label: "Blog" },
  { href: "/protein-recommendations", label: "Protein Picks" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

const LEGAL_LINKS = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-of-service", label: "Terms of Service" },
  { href: "/about", label: "Disclaimer" },
] as const;

function FooterColumn({
  title,
  links,
  openInNewTab = false,
}: {
  title: string;
  links: readonly { href: string; label: string }[];
  openInNewTab?: boolean;
}) {
  return (
    <div>
      <p className="eyebrow text-gold-400 mb-3">
        {title}
      </p>
      <ul className="space-y-2">
        {links.map((link) => (
          <li key={`${link.href}-${link.label}`}>
            <Link
              href={link.href}
              className="font-body text-xs text-forest-400 tracking-wide hover:text-gold-400 transition-colors duration-200"
              {...(openInNewTab
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function SiteFooter() {
  return (
    <footer className="bg-forest-950 mt-16 border-t border-[rgba(184,150,106,0.2)]">
      <div className="max-w-3xl mx-auto px-5 py-12">
        <div className="mb-8 max-w-xl">
          <p className="font-display text-2xl font-light text-ivory-100 tracking-display">
            Living Healthier
          </p>
          <p className="font-body text-xs text-forest-400 tracking-wide mt-2">
            Free health calculators and plain-English guides.
          </p>
        </div>

        <hr className="divider-gold mb-10" />

        <div className="grid sm:grid-cols-3 gap-8 mb-10 pb-10">
          <FooterColumn title="Calculators" links={CALCULATOR_LINKS} />
          <FooterColumn title="Resources" links={RESOURCE_LINKS} openInNewTab />
          <FooterColumn title="Legal" links={LEGAL_LINKS} openInNewTab />
        </div>

        <hr className="divider-gold mb-8" />

        <div className="space-y-3 font-body text-xs text-forest-400 tracking-wide leading-relaxed">
          <p className="text-forest-600">
            &copy; {new Date().getFullYear()} Living Healthier. For informational
            purposes only. Not medical advice.
          </p>
          <p>
            Living Healthier calculators are for educational purposes. Always
            consult a healthcare provider before making health decisions.{" "}
            <Link
              href="/about"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold-400 underline underline-offset-2 hover:text-gold-500 transition-colors duration-200"
            >
              Read our disclaimer
            </Link>
            .
          </p>
          <FooterResetLink />
        </div>
      </div>
    </footer>
  );
}
