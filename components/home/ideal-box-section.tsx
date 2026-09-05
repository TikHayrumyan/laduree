import Image from "next/image";
import { TextLink } from "@/components/ui/text-link";

export function IdealBoxSection() {
  return (
    <section
      id="coffret"
      className="flex w-full flex-col items-start justify-center gap-2 bg-cream-soft px-5 py-10 lg:gap-5 lg:px-[50px] lg:py-20"
    >
      <div className="flex w-full flex-col items-center gap-6 overflow-hidden text-ink lg:gap-8">
        <p className="w-full text-center text-[16px] tracking-[-0.16px] uppercase lg:text-[32px] lg:tracking-[-0.32px]">
          Personnalisation
        </p>
        <h2 className="w-full text-center text-[40px] italic tracking-[-0.4px] lg:text-[100px] lg:tracking-[-1px]">
          Votre Coffret Ideal
        </h2>
        <TextLink
          href="/#personnaliser"
          className="text-[20px] tracking-[-0.2px]"
        >
          Je compose mon coffret
        </TextLink>
      </div>
      <div className="relative h-[349px] w-full lg:h-[432px]">
        <Image
          src="/images/pink-macaron.png"
          alt="Macaron rose vu de dessus"
          fill
          className="object-contain"
          sizes="(max-width: 1023px) calc(100vw - 40px), calc(100vw - 100px)"
        />
      </div>
    </section>
  );
}
