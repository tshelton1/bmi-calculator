// src/components/SexToggle.tsx
import type { Sex } from "@/lib/calculations";

type SexToggleProps = {
  value: Sex;
  onChange: (sex: Sex) => void;
};

export default function SexToggle({ value, onChange }: SexToggleProps) {
  return (
    <div className="flex flex-col">
      <span className="font-body text-xs font-medium tracking-wide uppercase text-ink-500 mb-2 block">
        Sex
      </span>
      <div className="flex border border-ink-100">
        {(["female", "male"] as Sex[]).map((s) => (
          <button
            key={s}
            type="button"
            onClick={() => onChange(s)}
            className={`flex-1 py-2.5 text-sm font-body capitalize transition-colors duration-200 ${
              value === s
                ? "bg-forest-900 text-ivory-100"
                : "bg-white text-ink-500 hover:bg-ivory-200"
            }`}
          >
            {s}
          </button>
        ))}
      </div>
    </div>
  );
}
