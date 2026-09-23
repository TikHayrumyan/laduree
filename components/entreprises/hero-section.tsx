import Image from "next/image";
import { getTranslations } from "next-intl/server";

export async function EntreprisesHero() {
  const t = await getTranslations("Entreprises.hero");

  return (
    <section className="flex w-full flex-col items-center gap-8 px-5 lg:gap-9 lg:px-12.5  ">
      <div className="flex w-full flex-col gap-5 lg:flex-row lg:items-center lg:justify-between lg:gap-0">
        <div className="flex w-full items-center justify-between lg:contents">
          <p className="whitespace-nowrap text-[18px] leading-normal tracking-[-0.18px] text-muted uppercase">
            {t("delivery")}
          </p>
          <p className="whitespace-nowrap text-right text-[18px] leading-normal tracking-[-0.18px] text-muted uppercase lg:order-last lg:w-50.5">
            {t("options")}
          </p>
        </div>
        <h1 className="w-full text-center text-[36px] leading-normal tracking-[-0.36px] text-ink lg:flex-1 lg:text-[60px] lg:tracking-[-0.6px]">
          {t.rich("title", { br: () => <br /> })}
        </h1>
      </div>
      <div className="flex w-full flex-col items-center gap-6 lg:w-148.5">
        <div className="relative h-107.25 w-85 overflow-hidden rounded-t-full lg:h-187.5 lg:w-148.5">
          <Image
            src="/images/entreprises/hero.png"
            alt={t("alt")}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1023px) 340px, 594px"
          />
        </div>
        <div className="w-full text-center text-[16px] leading-normal tracking-[-0.16px] text-muted lg:w-132">
          <p>{t("p1")}</p>
          <p>{t("p2")}</p>
        </div>
      </div>
    </section>
  );
}
