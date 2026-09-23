import { getTranslations } from "next-intl/server";
import { EntreprisesPerks } from "@/components/entreprises/perks-section";
import { NotFoundHero } from "@/components/not-found/hero-section";

export default async function NotFound() {
  const t = await getTranslations("Metadata");

  return (
    <div className="flex min-h-full flex-col bg-cream pt-nav">
      <title>{t("notFound.title")}</title>
      <meta name="description" content={t("notFound.description")} />
      <main>
        <NotFoundHero />
        <EntreprisesPerks />
      </main>
    </div>
  );
}
