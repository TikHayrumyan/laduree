import { NextIntlClientProvider } from "next-intl";
import { getTranslations } from "next-intl/server";
import { locale as getLocale } from "next/root-params";
import { preconnect } from "react-dom";
import { SiteFooter } from "@/components/footer/site-footer";
import { SiteHeader } from "@/components/header/site-header";
import { routing } from "@/i18n/routing";
import "../adobe-garamond.css";
import "../globals.css";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata() {
  const t = await getTranslations("Metadata");

  return {
    title: t("home.title"),
    description: t("home.description"),
    alternates: {
      languages: {
        fr: "/fr",
        en: "/en",
      },
    },
  };
}

export default async function LocaleLayout({
  children,
}: LayoutProps<"/[locale]">) {
  const locale = await getLocale();

  preconnect("https://use.typekit.net");
  preconnect("https://p.typekit.net", { crossOrigin: "anonymous" });

  return (
    <html
      lang={locale}
      className="h-full antialiased"
      data-scroll-behavior="smooth"
    >
      <body className="relative min-h-full bg-cream font-serif text-ink">
        <NextIntlClientProvider>
          <SiteHeader />
          {children}
          <SiteFooter />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
