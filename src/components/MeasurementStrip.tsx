// src/components/MeasurementStrip.tsx
// The site's signature visual: a horizontal annotated range bar showing where
// a result lands among labeled categories. Reused across all four calculators
// so the suite feels like one instrument, not four disconnected tools.

type Segment = {
  label: string;
  range: [number, number]; // lower inclusive, upper exclusive (last can be Infinity)
};

type MeasurementStripProps = {
  segments: Segment[];
  value: number;
  unit?: string;
  displayMin?: number; // visual floor of the strip, defaults to first segment's lower bound
  displayMax?: number; // visual ceiling of the strip, defaults to a sensible cap if last is Infinity
};

export default function MeasurementStrip({
  segments,
  value,
  unit = "",
  displayMin,
  displayMax,
}: MeasurementStripProps) {
  const min = displayMin ?? segments[0].range[0];
  const lastSegment = segments[segments.length - 1];
  const max =
    displayMax ??
    (lastSegment.range[1] === Infinity
      ? lastSegment.range[0] * 1.6
      : lastSegment.range[1]);

  const clampedValue = Math.min(Math.max(value, min), max);
  const positionPct = ((clampedValue - min) / (max - min)) * 100;

  const activeIndex = segments.findIndex(
    (s) => value >= s.range[0] && value < s.range[1]
  );

  return (
    <div className="w-full">
      {/* segment bar */}
      <div className="relative h-3 w-full rounded-none overflow-hidden flex border border-ink/20">
        {segments.map((seg, i) => {
          const segLower = Math.max(seg.range[0], min);
          const segUpper = Math.min(
            seg.range[1] === Infinity ? max : seg.range[1],
            max
          );
          const widthPct = ((segUpper - segLower) / (max - min)) * 100;
          const isActive = i === activeIndex;
          return (
            <div
              key={seg.label}
              style={{ width: `${Math.max(widthPct, 0)}%` }}
              className={`h-full ${
                isActive ? "bg-gold-500" : "bg-forest-200"
              } ${i !== 0 ? "border-l border-white" : ""}`}
            />
          );
        })}
      </div>

      {/* marker */}
      <div className="relative h-5">
        <div
          className="absolute -top-1 flex flex-col items-center"
          style={{
            left: `${positionPct}%`,
            transform: "translateX(-50%)",
          }}
        >
          <div className="w-px h-4 bg-forest-900" />
        </div>
      </div>

      {/* labels */}
      <div className="flex justify-between text-[11px] uppercase tracking-wide text-sage font-mono mt-1">
        {segments.map((seg) => (
          <span
            key={seg.label}
            className={
              seg.label === segments[activeIndex]?.label
                ? "text-gold-600 font-semibold"
                : ""
            }
          >
            {seg.label}
          </span>
        ))}
      </div>

      <p className="mt-3 text-xs text-sage font-mono">
        Reading: {value}
        {unit} — {segments[activeIndex]?.label ?? "out of range"}
      </p>
    </div>
  );
}
