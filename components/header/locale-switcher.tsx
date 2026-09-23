"use client";

import { useLocale, useTranslations } from "next-intl";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { usePathname, useRouter } from "@/i18n/navigation";

type LocaleSwitcherProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: ReactNode;
};

export function LocaleSwitcher({
  className,
  children,
  ...props
}: LocaleSwitcherProps) {
  const locale = useLocale();
  const t = useTranslations("Nav");
  const pathname = usePathname();
  const router = useRouter();
  const nextLocale = locale === "fr" ? "en" : "fr";

  return (
    <button
      type="button"
      className={className}
      {...props}
      onClick={() => router.replace(pathname, { locale: nextLocale })}
    >
      {children}
      {locale === "fr" ? t("localeFr") : t("localeEn")}
    </button>
  );
}
