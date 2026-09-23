"use client";

import { useTranslations } from "next-intl";
import { useState, type Ref } from "react";
import { LocaleSwitcher } from "@/components/header/locale-switcher";
import { MobileMenu } from "@/components/header/mobile-menu";
import { ShopMenu } from "@/components/header/shop-menu";
import { Icon } from "@/components/ui/icon";
import { useNavLine } from "@/hooks/use-nav-line";
import { useOffscreen } from "@/hooks/use-offscreen";
import { Link, usePathname } from "@/i18n/navigation";

const navLinkClass =
  "flex h-full cursor-pointer items-center text-[20px] leading-6 tracking-[-0.2px]";

const mutedLinkClass =
  "flex h-full cursor-pointer items-center text-[20px] leading-6 tracking-[-0.2px] text-muted";

function Logo() {
  const t = useTranslations("Common");

  return (
    <Link
      href="/"
      className="flex h-full cursor-pointer items-center"
      aria-label={t("logoAria")}
    >
      <span
        aria-hidden
        className="block aspect-282/102 w-28 bg-current lg:w-44"
        style={{
          mask: "url(/logos/2.svg) center / contain no-repeat",
          WebkitMask: "url(/logos/2.svg) center / contain no-repeat",
        }}
      />
    </Link>
  );
}

function DesktopLeftNav({
  shopOpen,
  onShopToggle,
  onNavigate,
  leftLinkClass,
  pinnedRef,
  bind,
}: {
  shopOpen: boolean;
  onShopToggle: () => void;
  onNavigate: () => void;
  leftLinkClass: string;
  pinnedRef?: Ref<HTMLButtonElement>;
  bind?: (side: "left" | "right") => Record<string, unknown>;
}) {
  const t = useTranslations("Nav");
  const leftBind = bind?.("left") ?? {};
  const desktopLeft = [
    { href: "/service-commercial", label: t("entreprises") },
    { href: "/#maison", label: t("maison") },
  ] as const;

  return (
    <div className="flex h-full items-center gap-5">
      <button
        ref={pinnedRef}
        type="button"
        aria-expanded={shopOpen}
        aria-controls="shop-menu"
        onClick={onShopToggle}
        className={navLinkClass}
        {...leftBind}
      >
        {t("shop")}
      </button>
      {desktopLeft.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          onClick={onNavigate}
          className={leftLinkClass}
          {...leftBind}
        >
          {item.label}
        </Link>
      ))}
      <Link
        href="/#iconiques"
        onClick={onNavigate}
        className={`gap-2 ${leftLinkClass}`}
        {...leftBind}
      >
        <Icon src="/icons/search.svg" alt="" size={18} current />
        {t("search")}
      </Link>
    </div>
  );
}

export function SiteHeader() {
  const t = useTranslations("Nav");
  const pathname = usePathname();
  const inner = pathname !== "/";
  const [shopOpen, setShopOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [sentinelRef, inverted] = useOffscreen();
  const { headerRef, leftBarRef, pinnedRef, bind } = useNavLine(shopOpen);
  const cream = inverted || shopOpen || inner;
  const dark = cream || mobileOpen;
  const leftLinkClass = shopOpen ? mutedLinkClass : navLinkClass;
  const desktopLeft = [
    { href: "/service-commercial", label: t("entreprises") },
    { href: "/#maison", label: t("maison") },
  ] as const;

  return (
    <>
      <div
        ref={sentinelRef}
        aria-hidden
        className="pointer-events-none absolute top-0 h-px w-px"
      />
      <header
        ref={headerRef}
        className={`pointer-events-auto fixed inset-x-0 top-0 h-nav border-b-[0.5px] px-5 transition-[border-color] duration-700 lg:px-12.5 ${
          shopOpen ? "z-20" : "z-50"
        } ${cream ? "border-nav-line" : "border-white/20"}`}
      >
        <div
          aria-hidden
          className={`pointer-events-none absolute inset-0 bg-cream transition-opacity duration-700 ${
            cream ? "opacity-100" : "opacity-0"
          }`}
        />
        <div
          aria-hidden
          className={`nav-line-right max-lg:hidden ${dark ? "bg-ink" : "bg-white"}`}
        />
        <nav
          aria-label={t("mainAria")}
          className={`relative z-10 flex h-full items-center justify-between transition-colors duration-700 lg:hidden ${
            dark ? "text-ink" : "text-white"
          }`}
        >
          <button
            type="button"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(true)}
            className="cursor-pointer text-[20px] tracking-[-0.2px]"
          >
            {t("menu")}
          </button>
          <Logo />
          <Link
            href="/#footer"
            className="cursor-pointer text-[20px] tracking-[-0.2px]"
          >
            {t("cart")}
          </Link>
        </nav>

        <nav
          aria-label={t("mainAria")}
          className={`relative hidden h-full grid-cols-[1fr_auto_1fr] items-center transition-colors duration-700 lg:grid ${
            dark ? "text-ink" : "text-white"
          }`}
        >
          <div
            className="invisible flex h-full items-center gap-5 justify-self-start"
            aria-hidden
          >
            <span className={navLinkClass}>{t("shop")}</span>
            {desktopLeft.map((item) => (
              <span key={item.href} className={leftLinkClass}>
                {item.label}
              </span>
            ))}
            <span className={`gap-2 ${leftLinkClass}`}>
              <Icon src="/icons/search.svg" alt="" size={18} current />
              {t("search")}
            </span>
          </div>
          <Logo />
          <div className="flex h-full items-center justify-end gap-5 justify-self-end">
            <Link href="/#footer" className={navLinkClass} {...bind("right")}>
              {t("club")}
            </Link>
            <LocaleSwitcher className={navLinkClass} {...bind("right")} />
            <Link
              href="/#footer"
              className={navLinkClass}
              aria-label={t("account")}
              {...bind("right")}
            >
              <Icon src="/icons/user.svg" alt="" size={20} current />
            </Link>
            <Link
              href="/#footer"
              className={navLinkClass}
              aria-label={t("cart")}
              {...bind("right")}
            >
              <Icon src="/icons/bag.svg" alt="" size={28} current />
            </Link>
          </div>
        </nav>
      </header>

      <div
        ref={leftBarRef}
        className={`pointer-events-none fixed inset-x-0 top-0 z-50 hidden h-nav border-b-[0.5px] border-transparent px-5 lg:flex lg:px-12.5 ${
          dark ? "text-ink" : "text-white"
        }`}
      >
        <div
          aria-hidden
          className={`nav-line-left ${dark ? "bg-ink" : "bg-white"}`}
        />
        <div className="pointer-events-auto">
          <DesktopLeftNav
            shopOpen={shopOpen}
            onShopToggle={() => setShopOpen((open) => !open)}
            onNavigate={() => setShopOpen(false)}
            leftLinkClass={leftLinkClass}
            pinnedRef={pinnedRef}
            bind={bind}
          />
        </div>
      </div>

      <ShopMenu open={shopOpen} onOpenChange={setShopOpen} />
      <MobileMenu open={mobileOpen} onOpenChange={setMobileOpen} />
    </>
  );
}
