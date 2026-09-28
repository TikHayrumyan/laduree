import { Link } from "@/i18n/navigation";

export type ShopCategory = {
  slug: string;
  label: string;
};

type CategoryBarProps = {
  categories: ShopCategory[];
  activeCategory?: string;
  filtersLabel: string;
};

function Categories({
  categories,
  activeCategory,
}: {
  categories: ShopCategory[];
  activeCategory?: string;
}) {
  return categories.map((category, index) => {
    const selected = category.slug === activeCategory;

    return (
      <div key={category.slug} className="flex shrink-0 items-center gap-4">
        {index > 0 ? (
          <span className="size-1 rounded-full bg-ink" aria-hidden />
        ) : null}
        <Link
          href={{ pathname: "/e-shop", query: { category: category.slug } }}
          scroll={false}
          aria-current={selected ? "true" : undefined}
          className={`cursor-pointer whitespace-nowrap text-[20px] leading-6 tracking-[-0.2px] lg:text-[28px] lg:leading-8.5 lg:tracking-[-0.28px] ${
            selected ? "text-ink" : "text-muted lg:text-ink"
          }`}
        >
          {category.label}
        </Link>
      </div>
    );
  });
}

export function CategoryBar({
  categories,
  activeCategory,
  filtersLabel,
}: CategoryBarProps) {
  return (
    <>
      <div className="flex w-full items-stretch lg:hidden">
        <button
          type="button"
          className="flex h-10 shrink-0 cursor-pointer items-center border-[0.5px] border-l-0 border-nav-line px-5 text-[20px] leading-6 tracking-[-0.2px] text-ink"
        >
          {filtersLabel}
        </button>
        <div className="flex h-10 min-w-0 flex-1 items-center gap-4 overflow-x-auto border-y-[0.5px] border-r-0 border-l-0  border-nav-line  px-5 scrollbar-none">
          <Categories categories={categories} activeCategory={activeCategory} />
        </div>
      </div>
      <div className="hidden h-16.5 w-full items-center justify-between border-[0.5px] border-nav-line border-r-0 pl-12.5  lg:flex">
        <div className="flex min-w-0 items-center gap-4 overflow-x-auto scrollbar-none">
          <Categories categories={categories} activeCategory={activeCategory} />
        </div>
        <button
          type="button"
          className="flex h-full shrink-0 cursor-pointer items-center border-l-[0.5px]  border-nav-line border-r-0 px-12.5 text-[28px] leading-8.5 tracking-[-0.28px] text-ink"
        >
          {filtersLabel}
        </button>
      </div>
    </>
  );
}
