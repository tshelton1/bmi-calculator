// src/app/robots.ts
import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";
import { LEGACY_NOINDEX_PATHS } from "@/lib/legacy-paths";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // Legacy GoHighLevel / marketing paths — no original health content.
      // Pair with per-page robots: { index: false, follow: false }.
      disallow: [...LEGACY_NOINDEX_PATHS, "/*/feed/", "/feed/"],
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
