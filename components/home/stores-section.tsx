import Image from "next/image";
import { CtaButton } from "@/components/ui/cta-button";

export function StoresSection() {
  return (
    <section className="relative flex h-[670px] w-full flex-col items-center justify-end overflow-hidden px-5 py-10 lg:h-[900px] lg:justify-center lg:px-[50px] lg:py-0">
      <Image
        src="/images/storefront.png"
        alt="Façade d'une boutique Ladurée"
        fill
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/20" aria-hidden />
      <div className="relative flex w-full flex-col items-center justify-end gap-[200px] lg:w-[508px] lg:gap-9">
        <h2 className="w-full text-center text-[36px] tracking-[-0.36px] text-white lg:text-[60px] lg:tracking-[-0.6px]">
          NOS ADRESSES
          <br /> ET RESTAURANTS
        </h2>
        <CtaButton href="/#footer">Nos Boutiques</CtaButton>
      </div>
    </section>
  );
}
