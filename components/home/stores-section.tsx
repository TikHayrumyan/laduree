import Image from "next/image";
import { CtaButton } from "@/components/ui/cta-button";

export function StoresSection() {
  return (
    <section className="relative flex h-167.5 w-full flex-col items-center justify-end overflow-hidden px-5 py-10 lg:h-225 lg:justify-center lg:px-12.5 lg:py-0">
      <Image
        src="/images/storefront.png"
        alt="Façade d'une boutique Ladurée"
        fill
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/20" aria-hidden />
      <div className="relative flex w-full flex-col items-center justify-end gap-50 lg:w-127 lg:gap-9">
        <h2 className="w-full text-center text-[36px] leading-10.75 tracking-[-0.36px] text-white lg:text-[60px] lg:leading-18 lg:tracking-[-0.6px]">
          NOS ADRESSES
          <br /> ET RESTAURANTS
        </h2>
        <CtaButton href="/#footer">Nos Boutiques</CtaButton>
      </div>
    </section>
  );
}
