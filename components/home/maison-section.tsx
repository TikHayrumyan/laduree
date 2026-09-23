import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { TextLink } from "@/components/ui/text-link";

export async function MaisonSection() {
  const t = await getTranslations("Home.maison");

  return (
    <section id="maison" className="flex w-full flex-col">
      <div className="flex flex-col items-center gap-8 bg-cream-warm py-10 text-center lg:py-20">
        <div className="flex w-full flex-col items-center text-ink">
          <h2 className="w-full text-[32px] leading-9.5 tracking-[-0.32px] lg:text-[48px] lg:leading-14.5 lg:tracking-[-0.48px]">
            {t.rich("title", { br: () => <br /> })}
          </h2>
          <p className="w-full text-[28px] leading-8.5 tracking-[-0.28px] lg:text-[32px] lg:leading-9.5 lg:tracking-[-0.32px]">
            {t("subtitle")}
          </p>
        </div>
        <p className="w-full text-[18px] leading-5.5 tracking-[-0.18px] text-muted lg:w-120.5">
          {t("text")}
        </p>
        <TextLink
          href="/#heritage"
          className="text-[20px] leading-6 tracking-[-0.2px] text-ink"
        >
          {t("cta")}
        </TextLink>
      </div>
      <div className="relative h-57.5 w-full lg:h-140">
        <Image
          src="/images/macarons.png"
          alt={t("alt")}
          fill
          className="object-cover"
          sizes="100vw"
          quality={90}
        />
      </div>
    </section>
  );
}
