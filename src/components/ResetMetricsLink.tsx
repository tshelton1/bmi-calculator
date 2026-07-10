"use client";

import { useUserMetrics } from "@/hooks/useUserMetrics";

export default function ResetMetricsLink({
  className = "",
}: {
  className?: string;
}) {
  const { reset } = useUserMetrics();

  return (
    <button
      type="button"
      onClick={reset}
      className={`text-xs text-ink-300 font-mono hover:text-gold-600 underline ${className}`}
    >
      Reset my info
    </button>
  );
}
