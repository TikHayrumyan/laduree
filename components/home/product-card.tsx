import Image from "next/image";
import { Icon } from "@/components/ui/icon";
import type { Product } from "@/lib/content";

type ProductCardProps = {
  product: Product;
  layout?: "standard" | "wide" | "full";
};

export function ProductCard({
  product,
  layout = "standard",
}: ProductCardProps) {
  const widthClass =
    layout === "wide"
      ? "col-span-2 min-w-0"
      : layout === "full"
        ? "w-full"
        : "min-w-0 flex-1";

  return (
    <article className={`group relative flex flex-col items-center gap-4 ${widthClass}`}>
      <div
        className={`relative w-full ${layout === "full" ? "h-[181px]" : "h-[181px] lg:h-[383px]"}`}
      >
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover"
          sizes={
            layout === "wide"
              ? "(min-width: 1024px) calc((100vw - 196px) / 2 + 32px), calc(100vw - 40px)"
              : layout === "full"
                ? "calc(100vw - 40px)"
                : "(max-width: 1023px) calc((100vw - 60px) / 2), calc((100vw - 196px) / 4)"
          }
        />
        <div className="absolute left-1/2 top-[141px] hidden w-[157px] -translate-x-1/2 items-center justify-between bg-white px-3 py-2 group-hover:flex lg:top-[323px] lg:w-[304px] lg:px-6 lg:py-3">
          <span className="whitespace-nowrap text-[12px] leading-[14px] tracking-[-0.12px] text-black lg:text-[20px] lg:leading-6 lg:tracking-[-0.2px]">
            Ajouter au panier
          </span>
          <span className="lg:hidden">
            <Icon src="/icons/bag-dark.svg" alt="" size={16} />
          </span>
          <span className="hidden lg:inline-flex">
            <Icon src="/icons/bag-dark.svg" alt="" size={24} />
          </span>
        </div>
      </div>
      <div className="flex w-full flex-col items-center gap-2 text-center text-[16px] leading-[1.2] tracking-[-0.16px]">
        <h3 className="text-ink">{product.name}</h3>
        <p className="text-muted">{product.price}</p>
      </div>
    </article>
  );
}
