import type { Metadata } from "next";
import { EB_Garamond } from "next/font/google";
import "./globals.css";

const garamond = EB_Garamond({
  variable: "--font-garamond",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ladurée Paris | L'art de la gourmandise depuis 1862",
  description:
    "Née rue Royale à Paris, Ladurée célèbre l’élégance du goût à travers ses macarons et pâtisseries d’exception.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr" className={`${garamond.variable} h-full antialiased`}>
      <body className="min-h-full bg-cream font-serif text-ink">{children}</body>
    </html>
  );
}
