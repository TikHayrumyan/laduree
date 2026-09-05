import Image from "next/image";
import { TextLink } from "@/components/ui/text-link";

export function ValentineSection() {
  return (
    <section className="flex w-full flex-col items-center gap-8 overflow-hidden lg:gap-12">
      <div className="flex w-full flex-col items-center gap-6 text-center">
        <p className="text-[16px] tracking-[-0.16px] uppercase lg:text-[24px] lg:tracking-[-0.24px]">
          Trouvez le cadeau parfait
        </p>
        <div className="flex flex-col items-center gap-3 italic">
          <p className="text-[24px] tracking-[-0.24px] lg:text-[48px] lg:tracking-[-0.48px]">
            Cadeaux
          </p>
          <p className="text-[40px] tracking-[-0.4px] text-wine lg:text-[100px] lg:tracking-[-1px]">
            Saint- Valentin
          </p>
        </div>
      </div>
      <div className="flex w-full flex-col items-center gap-6">
        <div className="relative h-[404px] w-[320px] overflow-hidden rounded-t-full border-8 border-blush lg:h-[505px] lg:w-[400px]">
          <Image
            src="/images/valentine.png"
            alt="Table de fête avec pâtisseries et thé"
            fill
            className="rounded-t-full object-cover"
            sizes="(max-width: 1023px) 320px, 400px"
          />
        </div>
        <p className="w-[320px] text-center text-[16px] tracking-[-0.16px] text-wine lg:w-[482px]">
          Commandez dès maintenant et laissez la magie de l’amour opérer…
          Peut-être serezvous l’heureux élu de l’un de ces trésors romantiques !
        </p>
        <TextLink
          href="/#iconiques"
          className="text-[20px] tracking-[-0.2px] text-wine"
        >
          En savoir plus
        </TextLink>
      </div>
    </section>
  );
}
