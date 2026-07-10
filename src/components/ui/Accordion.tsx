"use client";

import { useState } from "react";
import type { ReactNode } from "react";

interface AccordionItem {
  question: string;
  answer: ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
  defaultOpenIndex?: number;
}

export function Accordion({ items, defaultOpenIndex }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(
    defaultOpenIndex ?? null
  );

  return (
    <div className="w-full">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={i}>
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="w-full flex items-center justify-between py-5 px-0 border-b border-ivory-300 text-left cursor-pointer group focus:outline-none focus-visible:ring-1 focus-visible:ring-gold-500"
              aria-expanded={isOpen}
            >
              <span
                className={`font-display text-xl md:text-2xl font-medium tracking-display transition-colors duration-200 ${
                  isOpen
                    ? "text-forest-800"
                    : "text-ink-900 group-hover:text-forest-700"
                }`}
              >
                {item.question}
              </span>
              {/* Inline chevron SVG — no icon library needed */}
              <svg
                className={`w-5 h-5 text-gold-500 flex-shrink-0 ml-4 transition-transform duration-300 ${
                  isOpen ? "rotate-180" : "rotate-0"
                }`}
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
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
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                isOpen ? "max-h-[2000px]" : "max-h-0"
              }`}
            >
              <div className={`pt-2 pb-6 ${isOpen ? "border-l-2 border-gold-500 pl-5 ml-0" : ""}`}>
                <div className="text-ink-700 text-base leading-[1.85] [&_p]:mb-4 [&_p:last-child]:mb-0 [&_a]:text-gold-600 [&_a]:underline [&_a]:underline-offset-2 [&_a:hover]:text-gold-500 [&_strong]:font-semibold [&_strong]:text-ink-900">
                  {item.answer}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
