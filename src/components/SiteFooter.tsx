// src/components/SiteFooter.tsx
import Link from "next/link";
import FooterResetLink from "@/components/FooterResetLink";

const CALCULATOR_LINKS = [
  { href: "/bmi-calculator", label: "BMI Calculator" },
  { href: "/healthy-weight-range", label: "Weight Range" },
  { href: "/bmr-calculator", label: "BMR Calculator" },
  { href: "/calorie-calculator", label: "Calorie Needs" },
  { href: "/macro-calculator", label: "Macro Calculator" },
  { href: "/body-fat-calculator", label: "Body Fat %" },
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
      <p className="font-mono text-[10px] uppercase tracking-widest text-paper font-bold mb-3">
        {title}
      </p>
      <ul className="space-y-2">
        {links.map((link) => (
          <li key={`${link.href}-${link.label}`}>
            <Link
              href={link.href}
              className="text-sm text-ink font-bold hover:underline hover:decoration-paper transition-colors"
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
    // bg-clay (#E8633C): white/near-white and ink text pass contrast on orange;
    // default sage/gray body text would fail WCAG on this background — overridden below.
    <footer className="bg-clay mt-16">
      <div className="max-w-3xl mx-auto px-5 py-10">
        <div className="mb-8 max-w-xl">
          <p className="text-paper font-bold mb-2">Living Healthier</p>
          <p className="text-sm text-paper leading-relaxed">
            Free health calculators and plain-English guides.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-8 mb-10 pb-10 border-b border-paper/30">
          <FooterColumn title="Calculators" links={CALCULATOR_LINKS} />
          <FooterColumn title="Resources" links={RESOURCE_LINKS} openInNewTab />
          <FooterColumn title="Legal" links={LEGAL_LINKS} openInNewTab />
        </div>

        <div className="space-y-3 text-xs text-paper font-mono leading-relaxed">
          <p>
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
              className="text-ink font-bold underline hover:decoration-paper transition-colors"
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
