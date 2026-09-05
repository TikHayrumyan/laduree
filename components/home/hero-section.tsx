import Image from "next/image";
import { CtaButton } from "@/components/ui/cta-button";

export function HeroSection() {
  return (
    <section className="relative flex h-153.5 w-full items-center justify-center overflow-hidden lg:h-215">
      <Image
        src="/images/hero.png"
        alt="Macarons roses Ladurée et framboises fraîches"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/15" aria-hidden />
      <div className="relative z-10 flex w-full max-w-97.5 flex-col items-center gap-9 px-5 lg:w-148.25 lg:max-w-148.25 lg:px-0">
        <h1 className="flex w-full flex-col items-center text-center text-[48px] tracking-[-0.48px] text-white lg:text-[80px] lg:tracking-[-0.8px]">
          <span className="-mb-2 leading-13 not-italic lg:-mb-2.5 lg:leading-19">
            LART DE LA
            <br />
            GOURMANDISE
          </span>
          <span className="italic leading-normal">depuis 1862</span>
        </h1>
        <CtaButton href="/#iconiques" className="w-76.25 shrink-0">
          Découvrir nos produits
        </CtaButton>
      </div>
    </section>
  );
}
