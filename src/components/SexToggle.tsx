// src/components/SexToggle.tsx
import type { Sex } from "@/lib/calculations";

type SexToggleProps = {
  value: Sex;
  onChange: (sex: Sex) => void;
};

export default function SexToggle({ value, onChange }: SexToggleProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <span className="text-xs uppercase tracking-wide text-sage font-mono">
        Sex
      </span>
      <div className="flex border border-ink/30">
        {(["female", "male"] as Sex[]).map((s) => (
          <button
            key={s}
            type="button"
            onClick={() => onChange(s)}
            className={`flex-1 py-2.5 text-sm font-mono capitalize transition-colors ${
              value === s
                ? "bg-ink text-paper"
                : "bg-paper text-sage hover:bg-ink/5"
            }`}
          >
            {s}
          </button>
        ))}
      </div>
    </div>
  );
}
