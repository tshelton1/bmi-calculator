import { LegacyRetiredPage, legacyNoIndexMetadata } from "@/lib/legacy-pages";

export const metadata = legacyNoIndexMetadata;

export default function TmpLegacyPage() {
  return <LegacyRetiredPage title="Page retired" />;
}
