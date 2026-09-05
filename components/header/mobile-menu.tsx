"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
} from "@/components/ui/sheet";
import { Icon } from "@/components/ui/icon";
import { shopModes, type ShopCategory, type ShopMode } from "@/lib/content";

type MobileMenuProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

type View = "root" | "shop" | "category";

const rootLinks = [
  { href: "/#entreprises", label: "Entreprises" },
  { href: "/#maison", label: "La Maison" },
  { href: "/#footer", label: "Le Club Ladurée" },
] as const;

const itemClass =
  "flex w-full cursor-pointer items-center justify-between text-[24px] leading-7 tracking-[-0.24px] text-ink";

function MenuHeader({
  onClose,
  bordered,
}: {
  onClose: () => void;
  bordered?: boolean;
}) {
  return (
    <div
      className={`flex w-full items-center justify-between px-5 py-4 ${
        bordered ? "border-b-[0.5px] border-nav-line" : ""
      }`}
    >
      <button
        type="button"
        onClick={onClose}
        className="cursor-pointer text-[20px] leading-6 tracking-[-0.2px]"
      >
        Fermer
      </button>
      <Link
        href="/"
        onClick={onClose}
        className="w-36.25 text-center text-[32px] leading-9.5"
        aria-label="Ladurée Paris, accueil"
      >
        LADUREE
      </Link>
      <Link
        href="/#footer"
        onClick={onClose}
        className="cursor-pointer text-[20px] leading-6 tracking-[-0.2px]"
      >
        Panier
      </Link>
    </div>
  );
}

function BackRow({ title, onBack }: { title: string; onBack: () => void }) {
  return (
    <div className="relative flex w-full items-center justify-center p-5">
      <button
        type="button"
        onClick={onBack}
        className="absolute left-5 cursor-pointer"
        aria-label="Retour"
      >
        <Icon src="/icons/arrow-left.svg" alt="" size={24} current />
      </button>
      <p className="text-[20px] leading-6 tracking-[-0.2px] uppercase">
        {title}
      </p>
    </div>
  );
}

function ModeSwitch({
  modeId,
  onChange,
}: {
  modeId: ShopMode["id"];
  onChange: (id: ShopMode["id"]) => void;
}) {
  return (
    <div className="flex w-full items-center px-5">
      {shopModes.map((item) => {
        const active = item.id === modeId;

        return (
          <button
            key={item.id}
            type="button"
            onClick={() => onChange(item.id)}
            className={`flex flex-1 cursor-pointer items-center justify-center px-5 py-4 text-[18px] leading-5.5 tracking-[-0.18px] ${
              active
                ? "border border-muted text-ink"
                : "border border-nav-line text-muted"
            }`}
          >
            {item.label}
          </button>
        );
      })}
    </div>
  );
}

export function MobileMenu({ open, onOpenChange }: MobileMenuProps) {
  const [view, setView] = useState<View>("root");
  const [modeId, setModeId] = useState<ShopMode["id"]>("delivery");
  const [category, setCategory] = useState<ShopCategory | null>(null);
  const mode = shopModes.find((item) => item.id === modeId) ?? shopModes[0];

  const handleOpenChange = (next: boolean) => {
    if (!next) {
      setView("root");
      setModeId("delivery");
      setCategory(null);
    }

    onOpenChange(next);
  };

  const close = () => handleOpenChange(false);

  return (
    <Sheet open={open} onOpenChange={handleOpenChange}>
      <SheetContent
        side="left"
        showCloseButton={false}
        overlayClassName="bg-cream"
        className="z-50 h-full w-full gap-0 overflow-hidden border-0 bg-cream p-0 shadow-none sm:max-w-none"
      >
        <SheetTitle className="sr-only">Menu</SheetTitle>
        <SheetDescription className="sr-only">
          Navigation mobile Ladurée
        </SheetDescription>

        {view === "root" ? (
          <div className="flex h-full flex-col justify-between">
            <div>
              <MenuHeader onClose={close} />
              <button
                type="button"
                className="flex w-full cursor-pointer items-center gap-2 border-y-[0.5px] border-nav-line bg-cream-search p-5"
              >
                <Icon src="/icons/search.svg" alt="" size={18} current />
                <span className="text-[20px] leading-6 tracking-[-0.2px]">
                  Que recherchez-vous?
                </span>
              </button>
            </div>

            <div className="flex w-full flex-col items-start gap-3 px-5">
              <button
                type="button"
                onClick={() => setView("shop")}
                className={itemClass}
              >
                E- Shop
                <Icon src="/icons/caret-right.svg" alt="" size={16} current />
              </button>
              {rootLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={close}
                  className={itemClass}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="flex w-full flex-col p-5">
              <Link
                href="/#footer"
                onClick={close}
                className="cursor-pointer border-y-[0.5px] border-nav-line py-4 text-[20px] leading-6 tracking-[-0.2px]"
              >
                Mon Compte
              </Link>
              <button
                type="button"
                className="flex cursor-pointer items-center gap-3 py-4 text-[20px] leading-6 tracking-[-0.2px]"
              >
                <Icon src="/icons/globe.svg" alt="" size={20} current />
                FR/English
              </button>
            </div>
          </div>
        ) : null}

        {view === "shop" ? (
          <div className="flex h-full flex-col">
            <div className="flex flex-col gap-5">
              <div>
                <MenuHeader onClose={close} bordered />
                <BackRow title="E- Shop" onBack={() => setView("root")} />
                <ModeSwitch
                  modeId={modeId}
                  onChange={(id) => {
                    setModeId(id);
                    setCategory(null);
                  }}
                />
              </div>
              <div className="flex w-full flex-col gap-3 px-5">
                {mode.categories.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => {
                      setCategory(item);
                      setView("category");
                    }}
                    className={itemClass}
                  >
                    {item.title}
                    <Icon
                      src="/icons/caret-right.svg"
                      alt=""
                      size={16}
                      current
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        ) : null}

        {view === "category" && category ? (
          <div className="flex h-full flex-col justify-between">
            <div className="flex flex-col gap-5">
              <div>
                <MenuHeader onClose={close} bordered />
                <BackRow
                  title={category.title}
                  onBack={() => {
                    setCategory(null);
                    setView("shop");
                  }}
                />
              </div>
              <div className="flex w-full flex-col gap-3 px-5">
                {category.links.map((link) => (
                  <Link
                    key={link}
                    href="/#iconiques"
                    onClick={close}
                    className={itemClass}
                  >
                    {link}
                  </Link>
                ))}
              </div>
            </div>
            <div className="p-5">
              <div className="relative h-62.25 w-full overflow-hidden">
                <Image
                  src={category.image}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
              </div>
            </div>
          </div>
        ) : null}
      </SheetContent>
    </Sheet>
  );
}
