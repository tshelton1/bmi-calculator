// src/components/ActivitySelect.tsx
import { ACTIVITY_LABELS, type ActivityLevel } from "@/lib/calculations";

type ActivitySelectProps = {
  value: ActivityLevel;
  onChange: (level: ActivityLevel) => void;
};

export default function ActivitySelect({ value, onChange }: ActivitySelectProps) {
  return (
    <div className="flex flex-col">
      <label
        htmlFor="activity-level"
        className="font-body text-xs font-medium tracking-wide uppercase text-ink-500 mb-2 block"
      >
        Activity level
      </label>
      <select
        id="activity-level"
        value={value}
        onChange={(e) => onChange(e.target.value as ActivityLevel)}
        className="border-0 border-b border-ink-100 rounded-none bg-transparent px-0 py-2.5 text-ink-900 font-body text-sm focus:outline-none focus:border-gold-500 transition-colors duration-200"
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
