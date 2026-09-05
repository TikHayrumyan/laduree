import Image from "next/image";
import { TextLink } from "@/components/ui/text-link";

export function TraditionSection() {
  return (
    <section className="flex w-full flex-col items-start justify-center gap-8 px-5 lg:h-195.75 lg:flex-row lg:items-center lg:gap-16 lg:px-12.5">
      <div className="flex w-full flex-col items-start gap-10 overflow-hidden lg:h-full lg:flex-1 lg:justify-between lg:gap-0">
        <h2 className="w-full text-[32px] leading-9.5 tracking-[-0.32px] lg:text-[48px] lg:leading-14.5 lg:tracking-[-0.48px]">
          TRADITION,
          <br /> MÉMOIRE & AUDACE,
          <br /> DEPUIS 1862
        </h2>
        <div className="flex w-full flex-col items-start gap-8 lg:flex-row lg:gap-20">
          <p className="shrink-0 text-[18px] leading-5.5 tracking-[-0.18px] uppercase">
            savoir-faire
          </p>
          <div className="flex flex-col items-start gap-8 lg:flex-1">
            <p className="text-[18px] leading-5.5 tracking-[-0.18px] text-muted">
              Nos gammes reflètent notre ambition : offrir un plaisir sensoriel
              fondé sur des sensations gustatives, visuelles et olfactives
              plongeant dans la mémoire de l enfance et de la tradition. Nos
              créations recréent un monde de douceur, d affection et de
              gourmandise. Notre créativité ancrée dans le présent les pare d
              intemporalité.
            </p>
            <TextLink
              href="/#heritage"
              className="text-[20px] leading-6 tracking-[-0.2px] text-ink"
            >
              En savoir plus
            </TextLink>
          </div>
        </div>
      </div>
      <div className="relative h-85 w-full overflow-hidden lg:h-full lg:flex-1">
        <Image
          src="/images/tradition-box.png"
          alt="Coffret illustré de macarons Ladurée"
          fill
          className="object-cover"
          sizes="(max-width: 1023px) calc(100vw - 40px), 50vw"
        />
      </div>
    </section>
  );
}
