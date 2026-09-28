import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

export async function ShopBreadcrumb() {
  const t = await getTranslations("Eshop");
  const shop = await getTranslations("Nav");

  return (
    <nav
      aria-label={t("breadcrumbAria")}
      className="flex items-center justify-center gap-4 py-5 text-[20px] leading-[normal] tracking-[-0.2px] text-ink"
    >
      <Link href="/" className="hover:text-muted">
        {t("home")}
      </Link>
      <span className="size-1 rounded-full bg-ink" aria-hidden />
      <span>{shop("shop")}</span>
    </nav>
  );
}
