import Image from "next/image";
import { Icon } from "@/components/ui/icon";
import type { Product } from "@/lib/content";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article
      className={`group relative flex min-w-0 flex-col items-center gap-4 ${
        product.wide ? "col-span-2" : ""
      }`}
    >
      <div className="relative h-45.25 w-full lg:h-95.75">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover"
          sizes={
            product.wide
              ? "(max-width: 1023px) calc(100vw - 40px), calc((100vw - 196px) / 2 + 32px)"
              : "(max-width: 1023px) calc((100vw - 60px) / 2), calc((100vw - 196px) / 4)"
          }
        />
        <div className="absolute inset-x-1 bottom-2.5 hidden cursor-pointer items-center justify-between bg-white px-3 py-2 group-hover:flex lg:inset-x-[3.5px] lg:bottom-3 lg:px-6 lg:py-3">
          <span className="whitespace-nowrap text-[12px] leading-3.5 tracking-[-0.12px] text-black lg:text-[20px] lg:leading-6 lg:tracking-[-0.2px]">
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
