import Image from "next/image";
import { getTranslations } from "next-intl/server";

export async function ShopTeaSection() {
  const t = await getTranslations("Eshop");

  return (
    <section className="flex w-full flex-col items-center gap-12 px-5 lg:px-12.5">
      <div className="order-1 flex w-full flex-col items-center gap-6 text-center lg:contents">
        <p className="text-[20px] leading-[normal] tracking-[-0.2px] text-ink uppercase lg:order-2 lg:text-[32px] lg:tracking-[-0.32px]">
          {t("teaEyebrow")}
        </p>
        <h2 className="w-full text-[24px] leading-[normal] tracking-[-0.24px] text-ink uppercase lg:order-3 lg:max-w-263 lg:text-[48px] lg:tracking-[-0.48px]">
          {t("teaTitle")}
        </h2>
      </div>
      <div className="relative order-2 aspect-680/464 w-full lg:order-1 lg:aspect-auto lg:h-116 lg:w-170">
        <Image
          src="/images/gift-box.png"
          alt={t("teaAlt")}
          fill
          className="object-cover"
          sizes="(max-width: 1023px) calc(100vw - 40px), 680px"
        />
      </div>
      <p className="order-3 w-full max-w-149.5 text-center text-[18px] leading-[normal] tracking-[-0.18px] text-muted lg:order-4">
        {t("teaText")}
      </p>
    </section>
  );
}
