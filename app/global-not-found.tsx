import { NextIntlClientProvider } from "next-intl";
import { getTranslations } from "next-intl/server";
import { preconnect } from "react-dom";
import { EntreprisesPerks } from "@/components/entreprises/perks-section";
import { SiteFooter } from "@/components/footer/site-footer";
import { SiteHeader } from "@/components/header/site-header";
import { NotFoundHero } from "@/components/not-found/hero-section";
import { routing } from "@/i18n/routing";
import "./adobe-garamond.css";
import "./globals.css";

export async function generateMetadata() {
  const t = await getTranslations("Metadata");

  return {
    title: t("notFound.title"),
    description: t("notFound.description"),
  };
}

export default async function GlobalNotFound() {
  preconnect("https://use.typekit.net");
  preconnect("https://p.typekit.net", { crossOrigin: "anonymous" });

  return (
    <html
      lang={routing.defaultLocale}
      className="h-full antialiased"
      data-scroll-behavior="smooth"
    >
      <body className="relative min-h-full bg-cream font-serif text-ink">
        <NextIntlClientProvider>
          <SiteHeader />
          <main className="flex min-h-full flex-col bg-cream pt-nav">
            <NotFoundHero />
            <EntreprisesPerks />
          </main>
          <SiteFooter />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
