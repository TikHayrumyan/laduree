import { getTranslations } from "next-intl/server";
import { EntreprisesPerks } from "@/components/entreprises/perks-section";
import { ShopBreadcrumb } from "@/components/shop/breadcrumb";
import { ShopCatalog } from "@/components/shop/catalog-section";
import { ShopTeaSection } from "@/components/shop/tea-section";

export async function generateMetadata() {
  const t = await getTranslations("Metadata");

  return {
    title: t("shop.title"),
    description: t("shop.description"),
    alternates: {
      languages: {
        fr: "/fr/e-shop",
        en: "/en/e-shop",
      },
    },
  };
}

export default async function ShopPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string | string[] }>;
}) {
  const { category } = await searchParams;
  const activeCategory = Array.isArray(category) ? category[0] : category;

  return (
    <div className="flex min-h-full flex-col bg-cream pt-nav">
      <main className="flex flex-col gap-10 lg:gap-20">
        <ShopBreadcrumb />
        <ShopCatalog activeCategory={activeCategory} />
        <div className="flex w-full flex-col gap-10">
          <ShopTeaSection />
          <EntreprisesPerks />
        </div>
      </main>
    </div>
  );
}
