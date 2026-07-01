type MacroBarProps = {
  proteinCalories: number;
  fatCalories: number;
  carbsCalories: number;
};

export default function MacroBar({
  proteinCalories,
  fatCalories,
  carbsCalories,
}: MacroBarProps) {
  const total = proteinCalories + fatCalories + carbsCalories;
  if (total <= 0) return null;

  const segments = [
    { label: "Protein", calories: proteinCalories, color: "bg-clay" },
    { label: "Fat", calories: fatCalories, color: "bg-sage/50" },
    { label: "Carbs", calories: carbsCalories, color: "bg-ink/20" },
  ];

  return (
    <div className="w-full">
      <div className="relative h-3 w-full rounded-none overflow-hidden flex border border-ink/20">
        {segments.map((seg, i) => {
          const widthPct = (seg.calories / total) * 100;
          if (widthPct <= 0) return null;
          return (
            <div
              key={seg.label}
              style={{ width: `${widthPct}%` }}
              className={`h-full ${seg.color} ${
                i !== 0 ? "border-l border-paper" : ""
              }`}
            />
          );
        })}
      </div>

      <div className="flex justify-between text-[11px] uppercase tracking-wide text-sage font-mono mt-3">
        {segments.map((seg) => {
          const pct = Math.round((seg.calories / total) * 100);
          return (
            <span key={seg.label}>
              {seg.label} {pct}%
            </span>
          );
        })}
      </div>
    </div>
  );
}
