// src/components/SiteHeader.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import { usePathname } from "next/navigation";

type NavItem = {
  href: string;
  label: string;
};

const CALCULATOR_ITEMS: NavItem[] = [
  { href: "/bmi-calculator", label: "BMI Calculator" },
  { href: "/healthy-weight-range", label: "Weight Range" },
  { href: "/bmr-calculator", label: "BMR Calculator" },
  { href: "/calorie-calculator", label: "Calorie Needs" },
  { href: "/macro-calculator", label: "Macro Calculator" },
  { href: "/body-fat-calculator", label: "Navy Body Fat %" },
];

const RESOURCE_ITEMS: NavItem[] = [
  { href: "/protein-recommendations", label: "Protein Picks" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const NAV_TEXT =
  "font-body text-sm font-medium tracking-wide leading-none";

function isActivePath(pathname: string | null, href: string) {
  return (
    pathname === href ||
    (href !== "/" && Boolean(pathname?.startsWith(`${href}/`)))
  );
}

function groupIsActive(pathname: string | null, items: NavItem[]) {
  return items.some((item) => isActivePath(pathname, item.href));
}

function topLinkClass(active: boolean) {
  return active
    ? "text-gold-500 border-b border-gold-500 pb-0.5 transition-colors duration-200"
    : "text-forest-200 hover:text-gold-400 transition-colors duration-200";
}

function menuItemClass(active: boolean) {
  return active
    ? "text-gold-500 bg-ivory-200/80"
    : "text-ink-700 hover:text-gold-600 hover:bg-ivory-200";
}

type DesktopDropdownProps = {
  label: string;
  items: NavItem[];
  pathname: string | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

function DesktopDropdown({
  label,
  items,
  pathname,
  open,
  onOpenChange,
}: DesktopDropdownProps) {
  const panelId = useId();
  const rootRef = useRef<HTMLDivElement>(null);
  const active = groupIsActive(pathname, items);

  useEffect(() => {
    if (!open) return;

    function onPointerDown(e: MouseEvent) {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        onOpenChange(false);
      }
    }

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onOpenChange(false);
    }

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onOpenChange]);

  return (
    <div
      ref={rootRef}
      className="relative flex items-center"
      onMouseEnter={() => onOpenChange(true)}
      onMouseLeave={() => onOpenChange(false)}
    >
      <button
        type="button"
        className={`inline-flex items-center gap-1.5 h-8 ${NAV_TEXT} whitespace-nowrap focus:outline-none focus-visible:ring-1 focus-visible:ring-gold-500 ${topLinkClass(active || open)}`}
        aria-expanded={open}
        aria-haspopup="true"
        aria-controls={panelId}
        onClick={() => onOpenChange(!open)}
      >
        <span className="leading-none">{label}</span>
        <svg
          className={`w-3 h-3 shrink-0 translate-y-px transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          viewBox="0 0 20 20"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M5 7.5L10 12.5L15 7.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <div
        id={panelId}
        role="menu"
        className={`absolute left-0 top-full pt-3 min-w-[14rem] transition-all duration-200 ease-out ${
          open
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-1 pointer-events-none"
        }`}
      >
        <div className="bg-white border border-ivory-300 border-t-2 border-t-gold-500 shadow-luxury-md py-2">
          {items.map((item) => {
            const itemActive = isActivePath(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                role="menuitem"
                aria-current={itemActive ? "page" : undefined}
                className={`block px-4 py-2.5 ${NAV_TEXT} transition-colors duration-200 ${menuItemClass(itemActive)}`}
                onClick={() => onOpenChange(false)}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

type MobileAccordionProps = {
  label: string;
  items: NavItem[];
  pathname: string | null;
  open: boolean;
  onToggle: () => void;
  onNavigate: () => void;
};

function MobileAccordion({
  label,
  items,
  pathname,
  open,
  onToggle,
  onNavigate,
}: MobileAccordionProps) {
  const panelId = useId();
  const active = groupIsActive(pathname, items);

  return (
    <div className="border-b border-forest-800">
      <button
        type="button"
        className={`w-full flex items-center justify-between h-12 ${NAV_TEXT} focus:outline-none focus-visible:ring-1 focus-visible:ring-gold-500 ${topLinkClass(active)}`}
        aria-expanded={open}
        aria-controls={panelId}
        onClick={onToggle}
      >
        <span className="leading-none">{label}</span>
        <svg
          className={`w-3.5 h-3.5 shrink-0 text-gold-500 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          viewBox="0 0 20 20"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M5 7.5L10 12.5L15 7.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <div
        id={panelId}
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          open ? "max-h-96 pb-3" : "max-h-0"
        }`}
      >
        <div className="flex flex-col pl-3 border-l border-gold-500/40 ml-1">
          {items.map((item) => {
            const itemActive = isActivePath(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={itemActive ? "page" : undefined}
                className={`py-2.5 ${NAV_TEXT} transition-colors duration-200 ${
                  itemActive
                    ? "text-gold-500"
                    : "text-forest-200 hover:text-gold-400"
                }`}
                onClick={onNavigate}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [desktopOpen, setDesktopOpen] = useState<
    "calculators" | "resources" | null
  >(null);
  const [mobileOpen, setMobileOpen] = useState<
    "calculators" | "resources" | null
  >("calculators");
  const menuId = useId();
  const blogActive = isActivePath(pathname, "/blog");

  useEffect(() => {
    setMenuOpen(false);
    setDesktopOpen(null);
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
      <div className="max-w-5xl mx-auto px-6 md:px-8 h-16 flex items-center justify-between">
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
          className="hidden md:flex items-center gap-x-8"
          aria-label="Primary"
        >
          <DesktopDropdown
            label="Calculators"
            items={CALCULATOR_ITEMS}
            pathname={pathname}
            open={desktopOpen === "calculators"}
            onOpenChange={(open) =>
              setDesktopOpen(open ? "calculators" : null)
            }
          />
          <Link
            href="/blog"
            aria-current={blogActive ? "page" : undefined}
            className={`inline-flex items-center h-8 ${NAV_TEXT} whitespace-nowrap ${topLinkClass(blogActive)}`}
          >
            Blog
          </Link>
          <DesktopDropdown
            label="Resources"
            items={RESOURCE_ITEMS}
            pathname={pathname}
            open={desktopOpen === "resources"}
            onOpenChange={(open) => setDesktopOpen(open ? "resources" : null)}
          />
        </nav>

        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center w-10 h-10 text-forest-200 hover:text-gold-400 transition-colors duration-200 focus:outline-none focus-visible:ring-1 focus-visible:ring-gold-500"
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
            className="md:hidden fixed inset-0 top-16 bg-forest-950/50 z-40"
            aria-label="Close menu overlay"
            onClick={() => setMenuOpen(false)}
          />
          <div
            id={menuId}
            className="md:hidden absolute left-0 right-0 top-full z-50 border-b border-forest-700/60 bg-forest-900 shadow-luxury-md"
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
          >
            <div className="max-w-5xl mx-auto px-6 py-4">
              <MobileAccordion
                label="Calculators"
                items={CALCULATOR_ITEMS}
                pathname={pathname}
                open={mobileOpen === "calculators"}
                onToggle={() =>
                  setMobileOpen((current) =>
                    current === "calculators" ? null : "calculators"
                  )
                }
                onNavigate={() => setMenuOpen(false)}
              />
              <Link
                href="/blog"
                aria-current={blogActive ? "page" : undefined}
                className={`flex items-center h-12 border-b border-forest-800 ${NAV_TEXT} ${topLinkClass(blogActive)}`}
                onClick={() => setMenuOpen(false)}
              >
                Blog
              </Link>
              <MobileAccordion
                label="Resources"
                items={RESOURCE_ITEMS}
                pathname={pathname}
                open={mobileOpen === "resources"}
                onToggle={() =>
                  setMobileOpen((current) =>
                    current === "resources" ? null : "resources"
                  )
                }
                onNavigate={() => setMenuOpen(false)}
              />
            </div>
          </div>
        </>
      )}
    </header>
  );
}
