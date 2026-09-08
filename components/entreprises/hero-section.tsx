import Image from "next/image";

export function EntreprisesHero() {
  return (
    <section className="flex w-full flex-col items-center gap-8 px-5 lg:gap-9 lg:px-12.5  ">
      <div className="flex w-full flex-col gap-5 lg:flex-row lg:items-center lg:justify-between lg:gap-0">
        <div className="flex w-full items-center justify-between lg:contents">
          <p className="whitespace-nowrap text-[18px] leading-normal tracking-[-0.18px] text-muted uppercase">
            livraison à domicile
          </p>
          <p className="whitespace-nowrap text-right text-[18px] leading-normal tracking-[-0.18px] text-muted uppercase lg:order-last lg:w-50.5">
            5 options
          </p>
        </div>
        <h1 className="w-full text-center text-[36px] leading-normal tracking-[-0.36px] text-ink lg:flex-1 lg:text-[60px] lg:tracking-[-0.6px]">
          L’art du cadeau
          <br /> et de l&apos;évènement
        </h1>
      </div>
      <div className="flex w-full flex-col items-center gap-6 lg:w-148.5">
        <div className="relative h-107.25 w-85 overflow-hidden rounded-t-full lg:h-187.5 lg:w-148.5">
          <Image
            src="/images/entreprises/hero.png"
            alt="Coffret ovale Ladurée offert de main à main"
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1023px) 340px, 594px"
          />
        </div>
        <div className="w-full text-center text-[16px] leading-normal tracking-[-0.16px] text-muted lg:w-132">
          <p>
            Notre équipe commerciale vous accompagne dans le choix de vos
            cadeaux d&apos;affaires, dans l&apos;organisation de vos évènements
            (commandes de macarons, entremets, pièces de cocktails salées et
            sucrées) et dans la privatisation de nos espaces de réception.
          </p>
          <p>
            Nous vous invitons à découvrir nos offres pour vos clients et
            collaborateurs.
          </p>
        </div>
      </div>
    </section>
  );
}
