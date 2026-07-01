"use client";

import { useUserMetrics } from "@/hooks/useUserMetrics";

export default function FooterResetLink() {
  const { reset } = useUserMetrics();

  return (
    <button
      type="button"
      onClick={reset}
      className="text-xs text-paper font-mono underline hover:decoration-ink transition-colors"
    >
      Reset my info
    </button>
  );
}
