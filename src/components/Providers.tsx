"use client";

import { UserMetricsProvider } from "@/hooks/useUserMetrics";

export default function Providers({ children }: { children: React.ReactNode }) {
  return <UserMetricsProvider>{children}</UserMetricsProvider>;
}
