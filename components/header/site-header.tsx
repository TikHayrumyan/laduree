"use client";

import Link from "next/link";
import { useState } from "react";
import { ShopMenu } from "@/components/header/shop-menu";
import { Icon } from "@/components/ui/icon";
import { useOffscreen } from "@/hooks/use-offscreen";

const desktopLeft = [
  { href: "/#entreprises", label: "Entreprises" },
  { href: "/#maison", label: "La Maison" },
] as const;

const navLinkClass =
  "text-[20px] leading-6 tracking-[-0.2px] transition-opacity hover:opacity-70";

const mutedLinkClass =
  "text-[20px] leading-6 tracking-[-0.2px] text-muted transition-opacity hover:opacity-70";

function Logo() {
  return (
    <Link
      href="/"
      className="flex w-36.25 flex-col items-center"
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
  const solid = inverted || shopOpen;
  const leftLinkClass = shopOpen ? mutedLinkClass : navLinkClass;

  return (
    <>
      <div
        ref={sentinelRef}
        aria-hidden
        className="pointer-events-none absolute top-0 h-px w-px"
      />
      <header className="pointer-events-auto fixed inset-x-0 top-0 z-50 h-nav px-5 lg:px-12.5">
        <div
          aria-hidden
          className={`absolute inset-0 bg-cream transition-opacity duration-300 ease-expo-out ${
            inverted ? "opacity-100" : "opacity-0"
          }`}
        />
        <div
          aria-hidden
          className={`absolute inset-0 bg-black/20 backdrop-blur-xs transition-opacity duration-500 ease-expo-out ${
            shopOpen ? "opacity-100" : "opacity-0"
          }`}
        />
        <div
          aria-hidden
          className={`absolute inset-x-0 bottom-0 h-px transition-colors duration-700 ${
            solid ? "bg-nav-line" : "bg-white"
          }`}
        />

        <nav
          aria-label="Navigation principale"
          className={`relative z-10 flex h-full items-center justify-between transition-colors duration-700 lg:hidden ${
            solid ? "text-ink" : "text-white"
          }`}
        >
          <details className="relative">
            <summary className="cursor-pointer text-[20px] tracking-[-0.2px]">
              Menu
            </summary>
            <div className="absolute left-0 top-full z-30 mt-3 flex w-52 flex-col bg-cream px-4 py-3 text-[16px] text-ink shadow-sm">
              <Link href="/#iconiques" className="py-1.5">
                E- Shop
              </Link>
              {desktopLeft.map((item) => (
                <Link key={item.href} href={item.href} className="py-1.5">
                  {item.label}
                </Link>
              ))}
              <Link href="/#iconiques" className="py-1.5">
                Recherche
              </Link>
              <Link href="/#footer" className="py-1.5">
                Le Club Laduree
              </Link>
            </div>
          </details>
          <Logo />
          <Link href="/#footer" className="text-[20px] tracking-[-0.2px]">
            Panier
          </Link>
        </nav>

        <nav
          aria-label="Navigation principale"
          className={`relative z-10 hidden h-full grid-cols-[1fr_auto_1fr] items-center transition-colors duration-700 lg:grid ${
            solid ? "text-ink" : "text-white"
          }`}
        >
          <div className="flex h-full items-center gap-5 justify-self-start">
            <button
              type="button"
              aria-expanded={shopOpen}
              aria-controls="shop-menu"
              onClick={() => setShopOpen((open) => !open)}
              className={
                shopOpen
                  ? "flex h-full items-center border-b-2 border-muted text-[20px] leading-6 tracking-[-0.2px]"
                  : navLinkClass
              }
            >
              E- Shop
            </button>
            {desktopLeft.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setShopOpen(false)}
                className={
                  shopOpen ? `flex h-full items-center ${leftLinkClass}` : navLinkClass
                }
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/#iconiques"
              onClick={() => setShopOpen(false)}
              className={`flex items-center gap-2 ${
                shopOpen ? `h-full ${leftLinkClass}` : navLinkClass
              }`}
            >
              <Icon src="/icons/search.svg" alt="" size={18} current />
              Recherche
            </Link>
          </div>
          <Logo />
          <div className="flex items-center justify-end gap-5 justify-self-end">
            <Link href="/#footer" className={navLinkClass}>
              Le Club Laduree
            </Link>
            <span className="text-[20px] leading-6 tracking-[-0.2px]">FR/FR</span>
            <Link
              href="/#footer"
              className="flex items-center justify-center"
              aria-label="Compte"
            >
              <Icon src="/icons/user.svg" alt="" size={20} current />
            </Link>
            <Link
              href="/#footer"
              className="flex items-center justify-center"
              aria-label="Panier"
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
