import { MACRO_GOALS, type MacroGoal } from "@/lib/calculations";

type GoalToggleProps = {
  value: MacroGoal;
  onChange: (goal: MacroGoal) => void;
};

const GOALS: MacroGoal[] = ["cutting", "maintenance", "bulking"];

export default function GoalToggle({ value, onChange }: GoalToggleProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <span className="text-xs uppercase tracking-wide text-sage font-mono">
        Goal
      </span>
      <div className="flex border border-ink/30">
        {GOALS.map((g) => (
          <button
            key={g}
            type="button"
            onClick={() => onChange(g)}
            className={`flex-1 py-2.5 text-sm font-mono capitalize transition-colors ${
              value === g
                ? "bg-ink text-paper"
                : "bg-paper text-sage hover:bg-ink/5"
            }`}
          >
            {MACRO_GOALS[g].label}
          </button>
        ))}
      </div>
      <p className="text-xs text-sage font-mono leading-relaxed">
        {MACRO_GOALS[value].description}
      </p>
    </div>
  );
}
