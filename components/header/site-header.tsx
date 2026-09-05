"use client";

import Link from "next/link";
import { useState } from "react";
import { ShopMenu } from "@/components/header/shop-menu";
import { Icon } from "@/components/ui/icon";
import { useNavLine } from "@/hooks/use-nav-line";
import { useOffscreen } from "@/hooks/use-offscreen";

const desktopLeft = [
  { href: "/#entreprises", label: "Entreprises" },
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
      className={`flex w-36.25 cursor-pointer flex-col items-center ${dark ? "text-ink" : "text-white"}`}
      aria-label="Ladurée Paris, accueil"
    >
      <span className="text-[32px] leading-9.5 lg:-mb-1">LADUREE</span>
      <span className="hidden text-center text-[20px] leading-6 italic lg:block">
        Paris
      </span>
    </Link>
  );
}

export function SiteHeader() {
  const [shopOpen, setShopOpen] = useState(false);
  const [sentinelRef, inverted] = useOffscreen();
  const { headerRef, pinnedRef, bind } = useNavLine(shopOpen);
  const dark = inverted || shopOpen;
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
        className={`pointer-events-auto fixed inset-x-0 top-0 z-50 h-nav border-b-[0.5px] px-5 lg:px-12.5 ${
          inverted && !shopOpen
            ? "border-nav-line bg-cream"
            : shopOpen
              ? "border-nav-line bg-transparent"
              : "border-white/20 bg-transparent"
        }`}
      >
        <div
          aria-hidden
          className={`nav-line-left max-lg:hidden ${dark ? "bg-ink" : "bg-white"} ${
            shopOpen ? "nav-line-open" : ""
          }`}
        />
        <div
          aria-hidden
          className={`nav-line-right max-lg:hidden ${dark ? "bg-ink" : "bg-white"} ${
            shopOpen ? "nav-line-open" : ""
          }`}
        />
        <nav
          aria-label="Navigation principale"
          className={`relative z-10 flex h-full items-center justify-between transition-colors duration-700 lg:hidden ${
            dark ? "text-ink" : "text-white"
          }`}
        >
          <details className="relative">
            <summary className="cursor-pointer text-[20px] tracking-[-0.2px]">
              Menu
            </summary>
            <div className="absolute left-0 top-full z-30 mt-3 flex w-52 flex-col bg-cream px-4 py-3 text-[16px] text-ink shadow-sm">
              <Link href="/#iconiques" className="cursor-pointer py-1.5">
                E- Shop
              </Link>
              {desktopLeft.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="cursor-pointer py-1.5"
                >
                  {item.label}
                </Link>
              ))}
              <Link href="/#iconiques" className="cursor-pointer py-1.5">
                Recherche
              </Link>
              <Link href="/#footer" className="cursor-pointer py-1.5">
                Le Club Laduree
              </Link>
            </div>
          </details>
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
          className={`relative z-10 hidden h-full grid-cols-[1fr_auto_1fr] items-center transition-colors duration-700 lg:grid ${
            dark ? "text-ink" : "text-white"
          }`}
        >
          <div className="flex h-full items-center gap-5 justify-self-start">
            <button
              ref={pinnedRef}
              type="button"
              aria-expanded={shopOpen}
              aria-controls="shop-menu"
              onClick={() => setShopOpen((open) => !open)}
              className={navLinkClass}
              {...bind("left")}
            >
              E- Shop
            </button>
            {desktopLeft.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setShopOpen(false)}
                className={leftLinkClass}
                {...bind("left")}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/#iconiques"
              onClick={() => setShopOpen(false)}
              className={`gap-2 ${leftLinkClass}`}
              {...bind("left")}
            >
              <Icon src="/icons/search.svg" alt="" size={18} current />
              Recherche
            </Link>
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
      <ShopMenu open={shopOpen} onOpenChange={setShopOpen} />
    </>
  );
}
