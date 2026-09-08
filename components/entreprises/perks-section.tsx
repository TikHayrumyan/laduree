"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { entreprisesPerks, type EntreprisesPerk } from "@/lib/content";

function PerkCard({ title, text }: EntreprisesPerk) {
  return (
    <div className="flex w-full flex-col items-center gap-6 text-lg leading-5.5 tracking-[-0.18px]">
      <p className="text-center text-ink uppercase">{title}</p>
      <p className="w-full text-center text-muted">{text}</p>
    </div>
  );
}

function PerksSlider({ perks }: { perks: readonly EntreprisesPerk[] }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });
  const [selected, setSelected] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelected(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect).on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect).off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div className="flex w-full flex-col items-center gap-8 lg:hidden">
      <div
        className="w-full overflow-hidden"
        ref={emblaRef}
        role="region"
        aria-roledescription="carousel"
        aria-label="Informations"
      >
        <div className="flex">
          {perks.map((perk) => (
            <div
              key={perk.id}
              className="min-w-0 flex-[0_0_100%]"
              role="group"
              aria-roledescription="slide"
              aria-label={perk.title}
            >
              <PerkCard {...perk} />
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center gap-2">
        {perks.map((perk, index) => (
          <button
            key={perk.id}
            type="button"
            aria-label={perk.title}
            aria-current={index === selected ? "true" : undefined}
            onClick={() => emblaApi?.scrollTo(index)}
            className={`h-1 w-1 cursor-pointer rounded-full ${
              index === selected ? "bg-ink" : "bg-nav-line"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export function EntreprisesPerks() {
  return (
    <section className="flex w-full flex-col items-center border-t-[0.5px] border-nav-line px-5 py-10 lg:flex-row lg:items-start lg:gap-17.5 lg:px-12.5">
      <div className="hidden w-full lg:flex lg:gap-17.5">
        {entreprisesPerks.map((perk) => (
          <div key={perk.id} className="min-w-0 flex-1">
            <PerkCard {...perk} />
          </div>
        ))}
      </div>
      <PerksSlider perks={entreprisesPerks} />
    </section>
  );
}
