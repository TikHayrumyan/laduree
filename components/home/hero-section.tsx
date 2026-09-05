import Image from "next/image";
import { SiteHeader } from "@/components/header/site-header";
import { CtaButton } from "@/components/ui/cta-button";

export function HeroSection() {
  return (
    <section className="relative h-153.5 w-full overflow-hidden lg:h-215">
      <Image
        src="/images/hero.png"
        alt="Macarons roses Ladurée et framboises fraîches"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/15" aria-hidden />
      <SiteHeader />
      <div className="absolute left-1/2 top-1/2 flex w-full max-w-97.5 -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-9 px-5 lg:left-[calc(50%+50.5px)] lg:max-w-148.25 lg:px-0">
        <h1 className="flex w-full flex-col items-center text-center text-[48px] tracking-[-0.48px] text-white lg:text-[80px] lg:tracking-[-0.8px]">
          <span className="-mb-2 leading-13 lg:-mb-2.5 lg:leading-19">
            L&apos;ART DE LA GOURMANDISE
          </span>
          <span className="italic leading-normal">depuis 1862</span>
        </h1>
        <CtaButton href="/#iconiques" className="w-76.25">
          Découvrir nos produits
        </CtaButton>
      </div>
    </section>
  );
}
