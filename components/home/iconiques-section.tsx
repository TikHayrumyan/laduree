import { ProductCard } from "@/components/home/product-card";
import { TextLink } from "@/components/ui/text-link";
import { categories, desktopProducts, mobileProducts } from "@/lib/content";

function CategoryNav() {
  return (
    <div className="flex w-full items-center gap-4 overflow-x-auto scrollbar-none lg:w-auto lg:justify-center">
      {categories.map((category, index) => (
        <div key={category} className="flex shrink-0 items-center gap-4">
          {index > 0 ? (
            <span
              className="size-1 rounded-full bg-muted"
              aria-hidden
            />
          ) : null}
          <span
            className={`whitespace-nowrap text-center text-[20px] tracking-[-0.2px] lg:text-[28px] lg:tracking-[-0.28px] ${
              index === 0 ? "text-ink" : "text-muted"
            }`}
          >
            {category}
          </span>
        </div>
      ))}
    </div>
  );
}

export function IconiquesSection() {
  const [first, featured, wide, fourth, fifth] = mobileProducts;

  return (
    <section
      id="iconiques"
      className="flex w-full flex-col items-center gap-6 px-5 lg:gap-12 lg:px-[50px]"
    >
      <div className="flex w-full flex-col items-center gap-5 lg:w-auto lg:gap-6">
        <h2 className="text-[36px] tracking-[-0.36px] lg:text-[60px] lg:tracking-[-0.6px]">
          LES ICONIQUES
        </h2>
        <CategoryNav />
      </div>

      <div className="flex w-full flex-col items-center gap-6 lg:hidden">
        <div className="flex w-full gap-5">
          <ProductCard product={first} />
          <ProductCard product={featured} />
        </div>
        <ProductCard product={wide} layout="full" />
        <div className="flex w-full gap-5">
          <ProductCard product={fourth} />
          <ProductCard product={fifth} />
        </div>
        <TextLink
          href="/#iconiques"
          className="text-[20px] tracking-[-0.2px] text-ink"
        >
          Tout découvrir
        </TextLink>
      </div>

      <div className="hidden w-full flex-col items-center gap-12 lg:flex">
        <div className="flex w-full items-center gap-8">
          <ProductCard product={desktopProducts[0]} />
          <ProductCard product={desktopProducts[1]} layout="wide" />
          <ProductCard product={desktopProducts[2]} />
        </div>
        <div className="flex w-full items-center gap-8">
          {desktopProducts.slice(3).map((product) => (
            <ProductCard key={product.id} product={product} layout="wide" />
          ))}
        </div>
        <TextLink
          href="/#iconiques"
          className="text-[20px] tracking-[-0.2px] text-ink"
        >
          Tout découvrir
        </TextLink>
      </div>
    </section>
  );
}
