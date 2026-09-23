import { notFound } from "next/navigation";

// Renders the localized `not-found.tsx` within `[locale]/layout.tsx`,
// so the locale context (and language switcher) works on unmatched routes.
export default function CatchAllNotFound() {
  notFound();
}
