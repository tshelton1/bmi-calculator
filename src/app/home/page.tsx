import { LegacyRetiredPage, legacyNoIndexMetadata } from "@/lib/legacy-pages";

export const metadata = legacyNoIndexMetadata;

export default function HomeLegacyPage() {
  return <LegacyRetiredPage title="Page retired" />;
}
