import Image from "next/image";
import { TextLink } from "@/components/ui/text-link";

export function PersonalizedGiftsSection() {
  return (
    <section
      id="personnaliser"
      className="flex w-full flex-col items-start justify-center gap-8 px-5 lg:h-[783px] lg:flex-row lg:items-center lg:gap-12 lg:px-[50px]"
    >
      <div className="flex w-full flex-col items-center gap-8 overflow-hidden lg:h-full lg:flex-1 lg:justify-between">
        <h2 className="w-full text-center text-[32px] tracking-[-0.32px] lg:text-[48px] lg:tracking-[-0.48px]">
          IDEES CADEAUX
          <br />
          A PERSONNALISER
        </h2>
        <div className="h-[180px] w-px bg-ink/35 lg:h-[279px]" aria-hidden />
        <div className="flex w-full max-w-[362px] flex-col items-center gap-8">
          <p className="text-center text-[18px] tracking-[-0.18px] text-muted">
            Anniversaire, remerciement, célébration… Composez un écrin raffiné
            avec les créations Ladurée, à personnaliser en exclusivité en ligne.
          </p>
          <TextLink
            href="/#coffret"
            className="text-[20px] tracking-[-0.2px] text-ink"
          >
            Je personnalise mon coffret
          </TextLink>
        </div>
      </div>
      <div className="relative h-[340px] w-full lg:order-first lg:h-full lg:flex-1">
        <Image
          src="/images/gift-box.png"
          alt="Coffret ovale Ladurée offert de main à main"
          fill
          className="object-cover"
          sizes="(max-width: 1023px) calc(100vw - 40px), 50vw"
        />
      </div>
    </section>
  );
}
