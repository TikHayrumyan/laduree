import { getTranslations } from "next-intl/server";
import { ProductCard } from "@/components/home/product-card";
import { TextLink } from "@/components/ui/text-link";
import { products } from "@/lib/content";

async function CategoryNav() {
  const t = await getTranslations("Home.iconiques");
  const categories = t.raw("categories") as string[];

  return (
    <div className="flex w-full items-center gap-4 overflow-x-auto scrollbar-none lg:w-auto lg:justify-center">
      {categories.map((category, index) => (
        <div key={category} className="flex shrink-0 items-center gap-4">
          {index > 0 ? (
            <span className="size-1 rounded-full bg-muted" aria-hidden />
          ) : null}
          <span className="cursor-pointer whitespace-nowrap text-center text-[20px] leading-6 tracking-[-0.2px] text-muted hover:text-ink lg:text-[28px] lg:leading-8.5 lg:tracking-[-0.28px]">
            {category}
          </span>
        </div>
      ))}
    </div>
  );
}

export async function IconiquesSection() {
  const t = await getTranslations("Home.iconiques");

  return (
    <section
      id="iconiques"
      className="flex w-full flex-col items-center gap-6 px-5 lg:gap-12 lg:px-12.5"
    >
      <div className="flex w-full flex-col items-center gap-5 lg:w-auto lg:gap-6">
        <h2 className="text-[36px] leading-10.75 tracking-[-0.36px] lg:text-[60px] lg:leading-18 lg:tracking-[-0.6px]">
          {t("title")}
        </h2>
        <CategoryNav />
      </div>

      <div className="grid w-full grid-cols-2 gap-x-5 gap-y-6 max-lg:grid-flow-dense lg:grid-cols-4 lg:gap-x-8 lg:gap-y-12">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <TextLink
        href="/#iconiques"
        className="text-[20px] leading-6 tracking-[-0.2px] text-ink"
      >
        {t("cta")}
      </TextLink>
    </section>
  );
}
