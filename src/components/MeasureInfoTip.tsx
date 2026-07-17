"use client";

import { useEffect, useId, useRef, useState } from "react";

type MeasureInfoTipProps = {
  label: string;
  children: React.ReactNode;
};

/** Accessible measurement guidance popover (keyboard + Escape + outside click). */
export default function MeasureInfoTip({ label, children }: MeasureInfoTipProps) {
  const [open, setOpen] = useState(false);
  const tipId = useId();
  const rootRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    }

    function onPointerDown(e: MouseEvent | TouchEvent) {
      const target = e.target as Node;
      if (rootRef.current && !rootRef.current.contains(target)) {
        setOpen(false);
      }
    }

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("touchstart", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("touchstart", onPointerDown);
    };
  }, [open]);

  return (
    <div className="relative inline-flex" ref={rootRef}>
      <button
        ref={buttonRef}
        type="button"
        className="inline-flex items-center justify-center w-5 h-5 rounded-full border border-ink-100 text-[10px] font-body font-semibold text-ink-500 hover:border-gold-500 hover:text-gold-600 focus:outline-none focus-visible:ring-1 focus-visible:ring-gold-500 transition-colors duration-200"
        aria-label={`How to measure ${label}`}
        aria-expanded={open}
        aria-controls={tipId}
        onClick={() => setOpen((v) => !v)}
      >
        i
      </button>
      {open && (
        <div
          id={tipId}
          role="dialog"
          aria-label={`${label} measurement guidance`}
          className="absolute z-20 left-0 top-full mt-2 w-[min(18rem,calc(100vw-2.5rem))] bg-white border border-ivory-300 border-l-2 border-l-gold-500 shadow-luxury-md p-4"
        >
          <p className="eyebrow text-ink-300 mb-2">{label}</p>
          <div className="font-body text-sm text-ink-700 leading-relaxed">
            {children}
          </div>
          <button
            type="button"
            className="mt-3 font-body text-xs uppercase tracking-wide text-gold-600 hover:text-gold-500"
            onClick={() => {
              setOpen(false);
              buttonRef.current?.focus();
            }}
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
}
