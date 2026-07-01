"use client";

import { useState } from "react";

type FaqItem = {
  question: string;
  answer: string;
};

function ChevronIcon({ expanded }: { expanded: boolean }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={`h-4 w-4 shrink-0 text-sage transition-transform duration-300 ${
        expanded ? "rotate-180" : ""
      }`}
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export default function HomeFaqAccordion({
  items,
}: {
  items: readonly FaqItem[];
}) {
  const [open, setOpen] = useState(() => items.map(() => false));

  const toggle = (index: number) => {
    setOpen((prev) =>
      prev.map((isOpen, i) => (i === index ? !isOpen : isOpen))
    );
  };

  return (
    <div className="space-y-4">
      {items.map((item, index) => {
        const answerId = `faq-answer-${index}`;
        const isOpen = open[index];

        return (
          <div
            key={item.question}
            className="border border-ink/20 bg-paper p-5"
          >
            <button
              type="button"
              className="flex w-full items-start justify-between gap-4 text-left"
              onClick={() => toggle(index)}
              aria-expanded={isOpen}
              aria-controls={answerId}
            >
              <h3 className="text-ink font-semibold">{item.question}</h3>
              <ChevronIcon expanded={isOpen} />
            </button>
            <div
              id={answerId}
              className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <p className="text-sm text-sage leading-relaxed pt-2">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
