"use client";

import { useState } from "react";
import { entreprisesPerks } from "@/lib/content";

function PerkCard({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div className="flex w-full flex-col items-center gap-6 text-[18px] leading-5.5 tracking-[-0.18px]">
      <p className="text-ink uppercase">{title}</p>
      <p className="w-full whitespace-pre-line text-center text-muted">{text}</p>
    </div>
  );
}

export function EntreprisesPerks() {
  const [index, setIndex] = useState(0);
  const current = entreprisesPerks[index];

  return (
    <section className="flex w-full flex-col items-center border-t-[0.5px] border-nav-line px-5 py-10 lg:flex-row lg:items-start lg:gap-17.5 lg:px-12.5">
      <div className="hidden w-full lg:flex lg:gap-17.5">
        {entreprisesPerks.map((perk) => (
          <PerkCard key={perk.id} title={perk.title} text={perk.text} />
        ))}
      </div>
      <div className="flex w-full flex-col items-center gap-8 lg:hidden">
        <PerkCard title={current.title} text={current.text} />
        <div className="flex items-center gap-2" role="tablist" aria-label="Informations">
          {entreprisesPerks.map((perk, perkIndex) => (
            <button
              key={perk.id}
              type="button"
              role="tab"
              aria-selected={perkIndex === index}
              aria-label={perk.title}
              onClick={() => setIndex(perkIndex)}
              className={`h-1 cursor-pointer rounded-full ${
                perkIndex === index ? "w-4 bg-ink" : "w-1 bg-nav-line"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
