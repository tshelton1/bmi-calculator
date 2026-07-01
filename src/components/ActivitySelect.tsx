// src/components/ActivitySelect.tsx
import { ACTIVITY_LABELS, type ActivityLevel } from "@/lib/calculations";

type ActivitySelectProps = {
  value: ActivityLevel;
  onChange: (level: ActivityLevel) => void;
};

export default function ActivitySelect({ value, onChange }: ActivitySelectProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor="activity-level"
        className="text-xs uppercase tracking-wide text-sage font-mono"
      >
        Activity level
      </label>
      <select
        id="activity-level"
        value={value}
        onChange={(e) => onChange(e.target.value as ActivityLevel)}
        className="border border-ink/30 focus-within:border-clay bg-paper px-3 py-2.5 text-ink font-mono text-sm outline-none"
      >
        {(Object.keys(ACTIVITY_LABELS) as ActivityLevel[]).map((level) => (
          <option key={level} value={level}>
            {ACTIVITY_LABELS[level]}
          </option>
        ))}
      </select>
    </div>
  );
}
