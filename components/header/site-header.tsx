"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, type Ref } from "react";
import { MobileMenu } from "@/components/header/mobile-menu";
import { ShopMenu } from "@/components/header/shop-menu";
import { Icon } from "@/components/ui/icon";
import { useNavLine } from "@/hooks/use-nav-line";
import { useOffscreen } from "@/hooks/use-offscreen";

const desktopLeft = [
  { href: "/service-commercial", label: "Entreprises" },
  { href: "/#maison", label: "La Maison" },
] as const;

const navLinkClass =
  "flex h-full cursor-pointer items-center text-[20px] leading-6 tracking-[-0.2px]";

const mutedLinkClass =
  "flex h-full cursor-pointer items-center text-[20px] leading-6 tracking-[-0.2px] text-muted";

function Logo({ dark }: { dark: boolean }) {
  return (
    <Link
      href="/"
      className={`flex w-logo cursor-pointer flex-col items-center transition-colors duration-700 ${dark ? "text-ink" : "text-white"}`}
      aria-label="Ladurée Paris, accueil"
    >
      <span className="text-[32px] leading-9.5 lg:-mb-1">LADUREE</span>
      <span className="hidden text-center text-[20px] leading-6 italic lg:block">
        Paris
      </span>
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
  const leftBind = bind?.("left") ?? {};

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
        E- Shop
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
        Recherche
      </Link>
    </div>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const inner = pathname !== "/";
  const [shopOpen, setShopOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [sentinelRef, inverted] = useOffscreen();
  const { headerRef, leftBarRef, pinnedRef, bind } = useNavLine(shopOpen);
  const cream = inverted || shopOpen || inner;
  const dark = cream || mobileOpen;
  const leftLinkClass = shopOpen ? mutedLinkClass : navLinkClass;

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
          aria-label="Navigation principale"
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
            Menu
          </button>
          <Logo dark={dark} />
          <Link
            href="/#footer"
            className="cursor-pointer text-[20px] tracking-[-0.2px]"
          >
            Panier
          </Link>
        </nav>

        <nav
          aria-label="Navigation principale"
          className={`relative hidden h-full grid-cols-[1fr_auto_1fr] items-center transition-colors duration-700 lg:grid ${
            dark ? "text-ink" : "text-white"
          }`}
        >
          <div
            className="invisible flex h-full items-center gap-5 justify-self-start"
            aria-hidden
          >
            <span className={navLinkClass}>E- Shop</span>
            {desktopLeft.map((item) => (
              <span key={item.href} className={leftLinkClass}>
                {item.label}
              </span>
            ))}
            <span className={`gap-2 ${leftLinkClass}`}>
              <Icon src="/icons/search.svg" alt="" size={18} current />
              Recherche
            </span>
          </div>
          <Logo dark={dark} />
          <div className="flex h-full items-center justify-end gap-5 justify-self-end">
            <Link href="/#footer" className={navLinkClass} {...bind("right")}>
              Le Club Laduree
            </Link>
            <span className={navLinkClass} {...bind("right")}>
              FR/FR
            </span>
            <Link
              href="/#footer"
              className={navLinkClass}
              aria-label="Compte"
              {...bind("right")}
            >
              <Icon src="/icons/user.svg" alt="" size={20} current />
            </Link>
            <Link
              href="/#footer"
              className={navLinkClass}
              aria-label="Panier"
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
