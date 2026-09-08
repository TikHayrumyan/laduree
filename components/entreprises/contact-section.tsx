import Image from "next/image";
import { TextLink } from "@/components/ui/text-link";

export function EntreprisesContact() {
  return (
    <section
      id="evenements"
      className="flex w-full flex-col gap-8 px-5 lg:h-195.75 lg:flex-row lg:items-center lg:gap-16 lg:px-12.5"
    >
      <div className="flex w-full flex-col gap-10 lg:h-full lg:flex-1 lg:justify-between lg:gap-0 lg:overflow-hidden">
        <h2 className="w-full text-[32px] leading-9.5 tracking-[-0.32px] text-ink uppercase lg:text-[48px] lg:leading-14.5 lg:tracking-[-0.48px]">
          Notre équipe commerciale saura vous conseiller afin de répondre à
          votre demande.
        </h2>
        <div className="flex w-full flex-col gap-8 lg:flex-row lg:items-start lg:gap-20">
          <p className="shrink-0 text-[18px] leading-5.5 tracking-[-0.18px] text-ink uppercase">
            contactez-nous
          </p>
          <div className="flex flex-1 flex-col gap-8 text-[18px] leading-5.5 tracking-[-0.18px] text-muted">
            <div>
              <p>Par mail:</p>
              <TextLink
                href="mailto:service-commercial@laduree.com"
                className="text-[18px] leading-5.5 tracking-[-0.18px] text-muted"
              >
                service-commercial@laduree.com
              </TextLink>
              <p>Par téléphone:</p>
              <TextLink
                href="tel:+33170224520"
                className="text-[18px] leading-5.5 tracking-[-0.18px] text-muted"
              >
                +33 1 70 22 45 20
              </TextLink>
            </div>
            <p>(du lundi au vendredi inclus)</p>
          </div>
        </div>
      </div>
      <div className="relative h-85 w-full lg:order-first lg:h-full lg:flex-1">
        <Image
          src="/images/entreprises/equipe.png"
          alt="Coffret Casablanca Ladurée ouvert, macarons et couvercle illustré"
          fill
          className="object-cover"
          sizes="(max-width: 1023px) calc(100vw - 40px), 50vw"
        />
      </div>
    </section>
  );
}
