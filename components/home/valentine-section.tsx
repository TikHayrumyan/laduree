import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { TextLink } from "@/components/ui/text-link";

export async function ValentineSection() {
  const t = await getTranslations("Home.valentine");

  return (
    <section className="flex w-full flex-col items-center gap-8 lg:gap-12">
      <div className="flex w-full flex-col items-center gap-6 text-center">
        <p className="w-full text-[16px] leading-4.75 tracking-[-0.16px] uppercase lg:text-[24px] lg:leading-7.25 lg:tracking-[-0.24px]">
          {t("eyebrow")}
        </p>
        <div className="flex w-full flex-col items-center gap-3 italic">
          <p className="w-full text-[24px] leading-7.25 tracking-[-0.24px] lg:text-[48px] lg:leading-14.5 lg:tracking-[-0.48px]">
            {t("title")}
          </p>
          <p className="w-full text-[40px] leading-12 tracking-[-0.4px] text-wine lg:text-[100px] lg:leading-30 lg:tracking-[-1px]">
            {t("highlight")}
          </p>
        </div>
      </div>
      <div className="flex w-full flex-col items-center gap-6">
        <div className="relative h-101 w-[320px] overflow-hidden rounded-t-full border-8 border-blush lg:h-126.25 lg:w-100">
          <Image
            src="/images/valentine.png"
            alt={t("alt")}
            fill
            className="rounded-t-full object-cover"
            sizes="(max-width: 1023px) 320px, 400px"
          />
        </div>
        <p className="w-[320px] text-center text-[16px] leading-4.75 tracking-[-0.16px] text-wine lg:w-120.5">
          {t("text")}
        </p>
        <TextLink
          href="/#iconiques"
          className="text-[20px] leading-6 tracking-[-0.2px] text-wine"
        >
          {t("cta")}
        </TextLink>
      </div>
    </section>
  );
}
