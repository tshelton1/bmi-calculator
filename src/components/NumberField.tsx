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
    <div className="flex flex-col">
      <label
        htmlFor={id}
        className="font-body text-xs font-medium tracking-wide uppercase text-ink-500 mb-2 block"
      >
        {label}
      </label>
      <div className="flex items-baseline gap-2 border-b border-ink-100 focus-within:border-gold-500 transition-colors duration-200">
        <input
          id={id}
          type="number"
          inputMode="decimal"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full min-w-0 border-0 bg-transparent font-mono text-xl text-ink-900 pb-2 pt-1 focus:outline-none focus:ring-0 placeholder:text-ink-300"
        />
        {unit && (
          <span className="font-mono text-sm text-ink-300 pb-2 shrink-0">
            {unit}
          </span>
        )}
      </div>
    </div>
  );
}
