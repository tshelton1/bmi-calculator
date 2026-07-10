import { MACRO_GOALS, type MacroGoal } from "@/lib/calculations";

type GoalToggleProps = {
  value: MacroGoal;
  onChange: (goal: MacroGoal) => void;
};

const GOALS: MacroGoal[] = ["cutting", "maintenance", "bulking"];

export default function GoalToggle({ value, onChange }: GoalToggleProps) {
  return (
    <div className="flex flex-col">
      <span className="font-body text-xs font-medium tracking-wide uppercase text-ink-500 mb-2 block">
        Goal
      </span>
      <div className="flex border border-ink-100">
        {GOALS.map((g) => (
          <button
            key={g}
            type="button"
            onClick={() => onChange(g)}
            className={`flex-1 py-2.5 text-sm font-body capitalize transition-colors duration-200 ${
              value === g
                ? "bg-forest-900 text-ivory-100"
                : "bg-white text-ink-500 hover:bg-ivory-200"
            }`}
          >
            {MACRO_GOALS[g].label}
          </button>
        ))}
      </div>
      <p className="text-xs text-ink-500 font-body leading-relaxed mt-2">
        {MACRO_GOALS[value].description}
      </p>
    </div>
  );
}
