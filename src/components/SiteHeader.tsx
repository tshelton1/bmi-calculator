// src/components/SiteHeader.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
  const pathname = usePathname();

  return (
    <header className="border-b border-forest-700/60 bg-forest-900">
      <div className="max-w-3xl mx-auto px-5 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5">
          <Image
            src="/branding/livinghealthier-logo.png"
            alt="Living Healthier"
            width={34}
            height={34}
            priority
            className="[filter:drop-shadow(0_1px_3px_rgba(184,150,106,0.5))]"
          />
          <span className="font-display text-lg sm:text-2xl font-light text-ivory-100 tracking-display leading-none">
            Living Healthier
          </span>
        </Link>
        <nav className="flex gap-3 sm:gap-5 font-body text-xs sm:text-sm font-medium tracking-wide">
          {NAV_ITEMS.map((item) => {
            const active =
              pathname === item.href ||
              (item.href !== "/" && pathname?.startsWith(`${item.href}/`));
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={
                  active
                    ? "text-gold-500 border-b border-gold-500 pb-0.5 transition-colors duration-200"
                    : "text-forest-200 hover:text-gold-400 transition-colors duration-200"
                }
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
