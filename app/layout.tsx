import type { Metadata } from "next";
import { preconnect } from "react-dom";
import { SiteFooter } from "@/components/footer/site-footer";
import { SiteHeader } from "@/components/header/site-header";
import "./adobe-garamond.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ladurée Paris | L'art de la gourmandise depuis 1862",
  description:
    "Née rue Royale à Paris, Ladurée célèbre l’élégance du goût à travers ses macarons et pâtisseries d’exception.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  preconnect("https://use.typekit.net");
  preconnect("https://p.typekit.net", { crossOrigin: "anonymous" });

  return (
    <html lang="fr" className="h-full antialiased">
      <body className="relative min-h-full bg-cream font-serif text-ink">
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
