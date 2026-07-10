import Link from "next/link";
import type { ContentBlock } from "@/lib/blog-types";

function RichParagraph({ parts }: { parts: Extract<ContentBlock, { type: "rich" }>["parts"] }) {
  return (
    <p className="text-sage leading-relaxed">
      {parts.map((part, index) =>
        typeof part === "string" ? (
          <span key={index}>{part}</span>
        ) : (
          <Link key={index} href={part.href} className="text-clay underline">
            {part.text}
          </Link>
        )
      )}
    </p>
  );
}

export function BlogContentBlock({ block }: { block: ContentBlock }) {
  switch (block.type) {
    case "p":
      return <p className="text-sage leading-relaxed">{block.text}</p>;
    case "rich":
      return <RichParagraph parts={block.parts} />;
    case "table":
      return (
        <div className="overflow-x-auto border border-ink/20">
          <table className="w-full text-sm text-left">
            {block.caption && (
              <caption className="text-left text-xs font-mono uppercase tracking-wide text-sage p-3 border-b border-ink/15">
                {block.caption}
              </caption>
            )}
            <thead>
              <tr className="bg-ink/[0.04]">
                {block.headers.map((header) => (
                  <th
                    key={header}
                    className="px-3 py-2 font-semibold text-ink border-b border-ink/15"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, rowIndex) => (
                <tr key={rowIndex} className="border-b border-ink/10 last:border-0">
                  {row.map((cell, cellIndex) => (
                    <td key={cellIndex} className="px-3 py-2 text-sage">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    case "ul":
      return (
        <ul className="list-disc pl-5 space-y-2 text-sage leading-relaxed">
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      );
    case "ad-placeholder":
      return <>{/* ADSENSE UNIT: in-article */}</>;
    default:
      return null;
  }
}
