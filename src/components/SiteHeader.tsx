// src/components/SiteHeader.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useId, useState } from "react";
import { usePathname } from "next/navigation";

const CALCULATOR_ITEMS = [
  { href: "/bmi-calculator", label: "BMI" },
  { href: "/healthy-weight-range", label: "Weight Range" },
  { href: "/bmr-calculator", label: "BMR" },
  { href: "/calorie-calculator", label: "Calories" },
  { href: "/macro-calculator", label: "Macros" },
  { href: "/body-fat-calculator", label: "Body Fat" },
  { href: "/navy-body-fat-calculator", label: "Navy Body Fat" },
] as const;

const DESKTOP_NAV_ITEMS = [
  ...CALCULATOR_ITEMS,
  { href: "/blog", label: "Blog" },
] as const;

function linkClass(active: boolean) {
  return active
    ? "text-gold-500 border-b border-gold-500 pb-0.5 transition-colors duration-200"
    : "text-forest-200 hover:text-gold-400 transition-colors duration-200";
}

function isActivePath(pathname: string | null, href: string) {
  return (
    pathname === href ||
    (href !== "/" && Boolean(pathname?.startsWith(`${href}/`)))
  );
}

export default function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return;

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setMenuOpen(false);
    }

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className="border-b border-forest-700/60 bg-forest-900 relative z-40">
      <div className="max-w-5xl mx-auto px-4 sm:px-5 h-16 flex items-center justify-between gap-3">
        <Link href="/" className="flex items-center gap-2.5 shrink-0">
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

        <nav
          className="hidden lg:flex items-center gap-2.5 xl:gap-3.5 font-body text-[11px] xl:text-xs font-medium tracking-wide"
          aria-label="Primary"
        >
          {DESKTOP_NAV_ITEMS.map((item) => {
            const active = isActivePath(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`whitespace-nowrap ${linkClass(active)}`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          className="lg:hidden inline-flex items-center justify-center w-10 h-10 text-forest-200 hover:text-gold-400 transition-colors duration-200 focus:outline-none focus-visible:ring-1 focus-visible:ring-gold-500"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls={menuId}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? (
            <svg
              className="w-5 h-5"
              viewBox="0 0 20 20"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M5 5L15 15M15 5L5 15"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          ) : (
            <svg
              className="w-5 h-5"
              viewBox="0 0 20 20"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M4 6H16M4 10H16M4 14H16"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          )}
        </button>
      </div>

      {menuOpen && (
        <>
          <button
            type="button"
            className="lg:hidden fixed inset-0 top-16 bg-forest-950/50 z-40"
            aria-label="Close menu overlay"
            onClick={() => setMenuOpen(false)}
          />
          <div
            id={menuId}
            className="lg:hidden absolute left-0 right-0 top-full z-50 border-b border-forest-700/60 bg-forest-900 shadow-luxury-md"
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
          >
            <div className="max-w-5xl mx-auto px-5 py-6">
              <p className="eyebrow text-gold-400 mb-3">Calculators</p>
              <nav
                className="flex flex-col gap-1 font-body text-sm font-medium tracking-wide"
                aria-label="Calculators"
              >
                {CALCULATOR_ITEMS.map((item) => {
                  const active = isActivePath(pathname, item.href);
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={`py-2.5 border-b border-forest-800 ${linkClass(active)}`}
                      onClick={() => setMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </nav>

              <p className="eyebrow text-gold-400 mt-8 mb-3">Resources</p>
              <nav
                className="flex flex-col gap-1 font-body text-sm font-medium tracking-wide"
                aria-label="Resources"
              >
                <Link
                  href="/blog"
                  aria-current={
                    isActivePath(pathname, "/blog") ? "page" : undefined
                  }
                  className={`py-2.5 border-b border-forest-800 ${linkClass(
                    isActivePath(pathname, "/blog")
                  )}`}
                  onClick={() => setMenuOpen(false)}
                >
                  Blog
                </Link>
              </nav>
            </div>
          </div>
        </>
      )}
    </header>
  );
}
