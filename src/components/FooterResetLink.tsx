"use client";

import { useUserMetrics } from "@/hooks/useUserMetrics";

export default function FooterResetLink() {
  const { reset } = useUserMetrics();

  return (
    <button
      type="button"
      onClick={reset}
      className="text-xs text-forest-400 font-body underline underline-offset-2 hover:text-gold-400 transition-colors duration-200"
    >
      Reset my info
    </button>
  );
}
