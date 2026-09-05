import Image from "next/image";
import { TextLink } from "@/components/ui/text-link";

export function PersonalizedGiftsSection() {
  return (
    <section
      id="personnaliser"
      className="flex w-full flex-col items-center gap-8 px-5 lg:h-195.75 lg:flex-row lg:items-center lg:gap-12 lg:px-12.5"
    >
      <div className="flex w-full flex-col items-center gap-8 lg:h-full lg:flex-1 lg:justify-between lg:gap-0 lg:overflow-hidden">
        <h2 className="w-full text-center text-[32px] leading-9.5 tracking-[-0.32px] text-ink lg:text-[48px] lg:leading-14.5 lg:tracking-[-0.48px]">
          IDEES CADEAUX
          <br />
          A PERSONNALISER
        </h2>
        <div
          className="h-45 w-0 border-l border-dashed border-ink/35 lg:h-69.75"
          aria-hidden
        />
        <div className="flex w-90.5 flex-col items-center gap-8">
          <p className="text-center text-[18px] leading-5.5 tracking-[-0.18px] text-muted">
            Anniversaire, remerciement, célébration… Composez un écrin raffiné
            avec les créations Ladurée, à personnaliser en exclusivité en ligne.
          </p>
          <TextLink
            href="/#coffret"
            className="text-[20px] leading-6 tracking-[-0.2px] text-ink"
          >
            Je personnalise mon coffret
          </TextLink>
        </div>
      </div>
      <div className="relative h-85 w-full lg:order-first lg:h-full lg:flex-1">
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
