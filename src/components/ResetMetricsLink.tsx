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
      className={`text-xs text-sage font-mono hover:text-clay underline ${className}`}
    >
      Reset my info
    </button>
  );
}
