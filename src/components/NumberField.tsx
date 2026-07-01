// src/components/NumberField.tsx
type NumberFieldProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  unit?: string;
  placeholder?: string;
  id: string;
};

export default function NumberField({
  label,
  value,
  onChange,
  unit,
  placeholder,
  id,
}: NumberFieldProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={id}
        className="text-xs uppercase tracking-wide text-sage font-mono"
      >
        {label}
      </label>
      <div className="flex items-stretch border border-ink/30 focus-within:border-clay transition-colors bg-paper">
        <input
          id={id}
          type="number"
          inputMode="decimal"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full bg-transparent px-3 py-2.5 text-ink font-mono text-lg outline-none placeholder:text-sage/40"
        />
        {unit && (
          <span className="flex items-center px-3 text-sm text-sage font-mono border-l border-ink/15 bg-ink/[0.03]">
            {unit}
          </span>
        )}
      </div>
    </div>
  );
}
