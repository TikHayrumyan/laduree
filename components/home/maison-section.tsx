import Image from "next/image";
import { TextLink } from "@/components/ui/text-link";

export function MaisonSection() {
  return (
    <section id="maison" className="flex w-full flex-col">
      <div className="flex flex-col items-center gap-8 overflow-hidden bg-cream-warm px-5 py-10 text-center lg:px-0 lg:py-20">
        <div className="flex w-full flex-col items-center text-ink">
          <h2 className="text-[32px] tracking-[-0.32px] lg:text-[48px] lg:tracking-[-0.48px]">
            MAISON DE
            <br />
            PATTISSERIE DE LUXE
          </h2>
          <p className="text-[28px] tracking-[-0.28px] lg:text-[32px] lg:tracking-[-0.32px]">
            a la francaise
          </p>
        </div>
        <p className="max-w-[482px] text-[18px] tracking-[-0.18px] text-muted">
          Née rue Royale à Paris, Ladurée célèbre l’élégance du goût à travers
          ses macarons et pâtisseries d’exception, symboles de son savoir-faire
          et de son art de vivre
        </p>
        <TextLink
          href="/#heritage"
          className="text-[20px] tracking-[-0.2px] text-ink"
        >
          Découvrir La Maison
        </TextLink>
      </div>
      <div className="relative h-[230px] w-full lg:h-[560px]">
        <Image
          src="/images/macarons.png"
          alt="Rangées de macarons dorés et roses"
          fill
          className="object-cover"
          sizes="100vw"
        />
      </div>
    </section>
  );
}
