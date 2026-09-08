"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { entreprisesPerks, type EntreprisesPerk } from "@/lib/content";

function PerkCard({ title, text }: Pick<EntreprisesPerk, "title" | "text">) {
  return (
    <div className="flex w-full flex-col items-center gap-6 text-lg leading-5.5 tracking-[-0.18px]">
      <p className="text-center text-ink uppercase">{title}</p>
      <p className="w-full text-center text-muted">{text}</p>
    </div>
  );
}

export function EntreprisesPerks() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    breakpoints: {
      "(min-width: 1024px)": { active: false },
    },
  });
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
    <section className="flex w-full flex-col items-center border-t-[0.5px] border-nav-line px-5 py-10 lg:px-12.5">
      <div
        className="w-full overflow-hidden lg:overflow-visible"
        ref={emblaRef}
        role="region"
        aria-roledescription="carousel"
        aria-label="Informations"
      >
        <div className="flex lg:gap-17.5">
          {entreprisesPerks.map((perk) => (
            <div
              key={perk.id}
              className="min-w-0 flex-[0_0_100%] lg:flex-1"
              role="group"
              aria-roledescription="slide"
              aria-label={perk.title}
            >
              <PerkCard title={perk.title} text={perk.text} />
            </div>
          ))}
        </div>
      </div>
      <div className="mt-8 flex items-center gap-2 lg:hidden">
        {entreprisesPerks.map((perk, index) => (
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
    </section>
  );
}
