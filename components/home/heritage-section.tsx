import { getTranslations } from "next-intl/server";

export async function HeritageSection() {
  const t = await getTranslations("Home.heritage");

  return (
    <section
      id="heritage"
      className="flex w-full flex-col items-center justify-center gap-8 px-5 py-10 text-center text-ink lg:gap-12 lg:px-12.5 lg:py-20"
    >
      <p className="w-full text-[16px] leading-4.75 tracking-[-0.16px] uppercase lg:w-230.25 lg:text-[32px] lg:leading-9.5 lg:tracking-[-0.32px]">
        {t("eyebrow")}
      </p>
      <p className="w-full text-[24px] leading-7.25 tracking-[-0.24px] lg:w-230.25 lg:text-[48px] lg:leading-14.5 lg:tracking-[-0.48px]">
        {t.rich("text", {
          br: () => <br className="lg:hidden" />,
        })}
      </p>
    </section>
  );
}
