"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useTranslations } from "next-intl";
import { useCallback, useEffect, useState } from "react";
import { entreprisesPerkIds, type EntreprisesPerkId } from "@/lib/content";

function PerkCard({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div className="flex w-full flex-col items-center gap-6 text-lg leading-5.5 tracking-[-0.18px]">
      <p className="text-center text-ink uppercase">{title}</p>
      <p className="w-full text-center text-muted">{text}</p>
    </div>
  );
}

export function EntreprisesPerks() {
  const t = useTranslations("Entreprises");
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

  const perk = (id: EntreprisesPerkId) => ({
    id,
    title: t(`perks.${id}.title`),
    text: t(`perks.${id}.text`),
  });

  return (
    <section className="flex w-full flex-col items-center border-t-[0.5px] border-nav-line px-5 py-10 lg:px-12.5">
      <div
        className="w-full overflow-hidden lg:overflow-visible"
        ref={emblaRef}
        role="region"
        aria-roledescription="carousel"
        aria-label={t("perksAria")}
      >
        <div className="flex lg:gap-17.5">
          {entreprisesPerkIds.map((id) => {
            const item = perk(id);

            return (
              <div
                key={id}
                className="min-w-0 flex-[0_0_100%] lg:flex-1"
                role="group"
                aria-roledescription="slide"
                aria-label={item.title}
              >
                <PerkCard title={item.title} text={item.text} />
              </div>
            );
          })}
        </div>
      </div>
      <div className="mt-8 flex items-center gap-2 lg:hidden">
        {entreprisesPerkIds.map((id, index) => (
          <button
            key={id}
            type="button"
            aria-label={perk(id).title}
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
