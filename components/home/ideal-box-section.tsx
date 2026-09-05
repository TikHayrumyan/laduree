import Image from "next/image";
import { TextLink } from "@/components/ui/text-link";

export function IdealBoxSection() {
  return (
    <section
      id="coffret"
      className="flex w-full flex-col items-start justify-center gap-2 bg-cream-soft px-5 py-10 lg:gap-5 lg:px-12.5 lg:py-20"
    >
      <div className="flex w-full flex-col items-center gap-6 overflow-hidden text-ink lg:gap-8">
        <p className="w-full text-center text-[16px] leading-4.75 tracking-[-0.16px] uppercase lg:text-[32px] lg:leading-9.5 lg:tracking-[-0.32px]">
          Personnalisation
        </p>
        <h2 className="w-full text-center text-[40px] leading-12 italic tracking-[-0.4px] lg:text-[100px] lg:leading-30 lg:tracking-[-1px]">
          Votre Coffret Ideal
        </h2>
        <TextLink
          href="/#personnaliser"
          className="text-[20px] leading-6 tracking-[-0.2px]"
        >
          Je compose mon coffret
        </TextLink>
      </div>
      <div className="relative h-87.25 w-full lg:h-108">
        <Image
          src="/images/pink-macaron.png"
          alt="Macaron rose vu de dessus"
          fill
          className="object-cover"
          sizes="(max-width: 1023px) calc(100vw - 40px), calc(100vw - 100px)"
        />
      </div>
    </section>
  );
}
