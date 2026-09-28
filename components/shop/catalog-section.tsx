import { getTranslations } from "next-intl/server";
import { ProductCard } from "@/components/home/product-card";
import { CategoryBar } from "@/components/shop/category-bar";
import { TextLink } from "@/components/ui/text-link";
import { shopCategorySlugs, shopProducts } from "@/lib/content";

export async function ShopCatalog({
  activeCategory,
}: {
  activeCategory?: string;
}) {
  const t = await getTranslations("Eshop");
  const categoryLabels = await getTranslations("Eshop.categories");
  const categories = shopCategorySlugs.map((slug) => ({
    slug,
    label: categoryLabels(slug),
  }));

  return (
    <section
      id="products"
      className="flex w-full flex-col gap-8 lg:gap-20"
      aria-labelledby="shop-title"
    >
      <div className="flex w-full flex-col items-center gap-6 lg:gap-12">
        <h1
          id="shop-title"
          className="text-center text-[36px] leading-[normal] tracking-[-0.36px] uppercase lg:text-[60px] lg:tracking-[-0.6px]"
        >
          {t.rich("title", { br: () => <br className="lg:hidden" /> })}
        </h1>
        <CategoryBar
          categories={categories}
          activeCategory={activeCategory}
          filtersLabel={t("filters")}
        />
      </div>
      <div className="flex w-full flex-col items-center gap-6 px-5 lg:gap-12 lg:px-12.5">
        <div className="grid w-full grid-cols-2 gap-x-5 gap-y-6 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-12">
          {shopProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <TextLink
          href="#products"
          className="text-[20px] leading-6 tracking-[-0.2px] text-ink"
        >
          {t("cta")}
        </TextLink>
      </div>
    </section>
  );
}
