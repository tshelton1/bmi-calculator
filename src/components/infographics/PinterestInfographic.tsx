// Shared Pinterest infographic shell. Renders a self-contained 1000x1500 SVG
// (2:3 Pinterest ratio) using inline styles only — no Tailwind classes inside
// the SVG, so it renders identically when saved/screenshotted. Server
// component (pure markup, no client JS).

// Brand palette (hardcoded hex pulled from tailwind.config custom tokens).
const COLOR = {
  bg: "#F8FAFB",
  primary: "#0F1F18", // forest (dark green) — headings & panels
  primaryPanel: "#1A3329",
  accent: "#E8633C", // clay (warm coral) — accent
  gold: "#B8966A",
  text: "#1A2027",
  muted: "#4A5E54",
  line: "#E2E8F0",
  white: "#FFFFFF",
} as const;

const SERIF = "Georgia, 'Times New Roman', serif";
const SANS = "Helvetica, Arial, sans-serif";

export type InfographicBar = { label: string; value: number; display: string };

export type InfographicChart =
  | { type: "bars"; caption: string; bars: InfographicBar[] }
  | {
      type: "table";
      caption: string;
      headers: string[];
      rows: string[][];
    };

export type InfographicData = {
  /** Article slug this infographic maps to (for the CTA URL/testing). */
  slug: string;
  /** Headline broken into 2–3 short lines for large display. */
  headlineLines: string[];
  /** Highlighted callout stat. */
  keyStat: { value: string; label: string };
  /** 4–6 short takeaways (max ~12 words each). */
  points: string[];
  chart: InfographicChart;
  /** Bottom CTA, e.g. "Try the free BMI calculator". */
  ctaText: string;
  /** Calculator path, e.g. "/bmi-calculator". */
  ctaPath: string;
};

const WIDTH = 1000;
const HEIGHT = 1500;

function BarsChart({ chart }: { chart: Extract<InfographicChart, { type: "bars" }> }) {
  const trackX = 300;
  const trackWidth = 600;
  const startY = 1108;
  const rowH = 44;
  const barH = 20;

  return (
    <g>
      {chart.bars.map((bar, i) => {
        const y = startY + i * rowH;
        const w = Math.max(4, Math.min(1, bar.value) * trackWidth);
        return (
          <g key={bar.label}>
            <text
              x={70}
              y={y + barH - 4}
              fontFamily={SANS}
              fontSize={22}
              fill={COLOR.text}
            >
              {bar.label}
            </text>
            <rect
              x={trackX}
              y={y}
              width={trackWidth}
              height={barH}
              rx={4}
              fill={COLOR.line}
            />
            <rect x={trackX} y={y} width={w} height={barH} rx={4} fill={COLOR.accent} />
            <text
              x={trackX + trackWidth + 12}
              y={y + barH - 4}
              fontFamily={SANS}
              fontSize={20}
              fontWeight={700}
              fill={COLOR.primary}
            >
              {bar.display}
            </text>
          </g>
        );
      })}
    </g>
  );
}

function TableChart({ chart }: { chart: Extract<InfographicChart, { type: "table" }> }) {
  const x = 70;
  const tableWidth = 860;
  const startY = 1095;
  const rowH = 46;
  const cols = chart.headers.length;
  const colW = tableWidth / cols;

  return (
    <g>
      {/* header row */}
      <rect x={x} y={startY} width={tableWidth} height={rowH} fill={COLOR.primary} />
      {chart.headers.map((h, ci) => (
        <text
          key={`h-${ci}`}
          x={x + ci * colW + 14}
          y={startY + rowH - 16}
          fontFamily={SANS}
          fontSize={19}
          fontWeight={700}
          fill={COLOR.white}
        >
          {h}
        </text>
      ))}
      {chart.rows.map((row, ri) => {
        const ry = startY + rowH * (ri + 1);
        return (
          <g key={`r-${ri}`}>
            <rect
              x={x}
              y={ry}
              width={tableWidth}
              height={rowH}
              fill={ri % 2 === 0 ? COLOR.white : "#F1F5F4"}
              stroke={COLOR.line}
              strokeWidth={1}
            />
            {row.map((cell, ci) => (
              <text
                key={`c-${ri}-${ci}`}
                x={x + ci * colW + 14}
                y={ry + rowH - 16}
                fontFamily={SANS}
                fontSize={19}
                fontWeight={ci === 0 ? 600 : 400}
                fill={ci === 0 ? COLOR.primary : COLOR.text}
              >
                {cell}
              </text>
            ))}
          </g>
        );
      })}
    </g>
  );
}

export default function PinterestInfographic({ data }: { data: InfographicData }) {
  const headlineStartY = 150;
  const headlineLineH = 66;
  const pointsStartY = 640;
  const pointsRowH = 62;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={WIDTH}
      height={HEIGHT}
      viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
      role="img"
      aria-label={data.headlineLines.join(" ")}
      style={{ display: "block", maxWidth: "100%", height: "auto" }}
    >
      {/* Canvas */}
      <rect x={0} y={0} width={WIDTH} height={HEIGHT} fill={COLOR.bg} />
      <rect x={0} y={0} width={WIDTH} height={10} fill={COLOR.accent} />

      {/* Brand / logo line */}
      <text x={70} y={70} fontFamily={SANS} fontSize={24} fontWeight={700} fill={COLOR.primary}>
        LivingHealthier
        <tspan fill={COLOR.accent}>.net</tspan>
      </text>
      <line x1={70} y1={92} x2={930} y2={92} stroke={COLOR.line} strokeWidth={2} />

      {/* Headline */}
      {data.headlineLines.map((line, i) => (
        <text
          key={i}
          x={70}
          y={headlineStartY + i * headlineLineH}
          fontFamily={SERIF}
          fontSize={54}
          fontWeight={700}
          fill={COLOR.primary}
        >
          {line}
        </text>
      ))}

      {/* Credential subheadline */}
      <text
        x={70}
        y={headlineStartY + data.headlineLines.length * headlineLineH + 12}
        fontFamily={SANS}
        fontSize={22}
        fontStyle="italic"
        fill={COLOR.muted}
      >
        Reviewed by Dr. Tiffani, DO
      </text>

      {/* Key stat box */}
      <rect x={70} y={430} width={860} height={150} rx={10} fill={COLOR.primaryPanel} />
      <rect x={70} y={430} width={10} height={150} rx={4} fill={COLOR.accent} />
      <text x={110} y={508} fontFamily={SERIF} fontSize={64} fontWeight={700} fill={COLOR.gold}>
        {data.keyStat.value}
      </text>
      <text x={110} y={548} fontFamily={SANS} fontSize={22} fill={COLOR.white}>
        {data.keyStat.label}
      </text>

      {/* Key takeaways */}
      {data.points.map((point, i) => {
        const y = pointsStartY + i * pointsRowH;
        return (
          <g key={i}>
            <circle cx={82} cy={y - 7} r={9} fill={COLOR.accent} />
            <text x={110} y={y} fontFamily={SANS} fontSize={25} fill={COLOR.text}>
              {point}
            </text>
          </g>
        );
      })}

      {/* Data visualization */}
      <text x={70} y={1058} fontFamily={SANS} fontSize={16} fontWeight={700} fill={COLOR.muted} letterSpacing={2}>
        {data.chart.caption.toUpperCase()}
      </text>
      {data.chart.type === "bars" ? (
        <BarsChart chart={data.chart} />
      ) : (
        <TableChart chart={data.chart} />
      )}

      {/* CTA banner */}
      <rect x={0} y={1380} width={WIDTH} height={120} fill={COLOR.primary} />
      <rect x={0} y={1380} width={WIDTH} height={6} fill={COLOR.accent} />
      <text
        x={WIDTH / 2}
        y={1430}
        textAnchor="middle"
        fontFamily={SANS}
        fontSize={28}
        fontWeight={700}
        fill={COLOR.white}
      >
        {data.ctaText}
      </text>
      <text
        x={WIDTH / 2}
        y={1468}
        textAnchor="middle"
        fontFamily={SANS}
        fontSize={22}
        fill={COLOR.gold}
      >
        bmi.livinghealthier.net{data.ctaPath}
      </text>
    </svg>
  );
}
