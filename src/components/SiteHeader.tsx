// src/components/SiteHeader.tsx
import Image from "next/image";
import Link from "next/link";

const NAV_ITEMS = [
  { href: "/bmi-calculator", label: "BMI" },
  { href: "/healthy-weight-range", label: "Weight Range" },
  { href: "/bmr-calculator", label: "BMR" },
  { href: "/calorie-calculator", label: "Calories" },
  { href: "/macro-calculator", label: "Macros" },
  { href: "/body-fat-calculator", label: "Body Fat" },
  { href: "/blog", label: "Blog" },
];

export default function SiteHeader() {
  return (
    <header className="border-b border-clay/80 bg-clay">
      <div className="max-w-3xl mx-auto px-5 py-5 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5">
          <Image
            src="/branding/livinghealthier-logo.png"
            alt="Living Healthier"
            width={36}
            height={36}
            priority
          />
          <span className="text-[10px] uppercase tracking-widest text-paper font-mono">
            measurements
          </span>
        </Link>
        <nav className="flex gap-4 text-xs uppercase tracking-wide font-mono">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-paper hover:text-paper/70 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
