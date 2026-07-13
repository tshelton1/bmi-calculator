import { LegacyRetiredPage, legacyNoIndexMetadata } from "@/lib/legacy-pages";

export const metadata = legacyNoIndexMetadata;

export default function OdLegacyPage() {
  return <LegacyRetiredPage title="Page retired" />;
}
