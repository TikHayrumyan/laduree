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
import { shopModes, type ShopMode } from "@/lib/content";

type ShopMenuProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function ShopMenu({ open, onOpenChange }: ShopMenuProps) {
  const [modeId, setModeId] = useState<ShopMode["id"]>("delivery");
  const mode = shopModes.find((item) => item.id === modeId) ?? shopModes[0];

  const close = () => onOpenChange(false);

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent
        side="left"
        showCloseButton={false}
        id="shop-menu"
        overlayClassName="z-40 bg-black/20"
        className="z-40 w-155 gap-6.75 overflow-hidden border-0 bg-cream p-0 pt-29.25 shadow-none sm:max-w-155"
      >
        <SheetTitle className="sr-only">E- Shop</SheetTitle>
        <SheetDescription className="sr-only">
          Navigation de la boutique Ladurée
        </SheetDescription>
        <div className="mx-auto flex min-h-0 w-141 flex-1 flex-col gap-6.75">
          <div className="flex w-full shrink-0">
            {shopModes.map((item) => {
              const active = item.id === modeId;

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setModeId(item.id)}
                  className={`flex flex-1 items-center justify-center px-5 py-4 text-[18px] leading-5.5 tracking-[-0.18px] ${
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
          <div className="flex w-full flex-1 flex-col gap-4 overflow-y-auto pb-10 scrollbar-none">
            {mode.categories.map((category) => (
              <article
                key={category.id}
                className="flex w-full items-start justify-between"
              >
                <div className="flex min-w-0 flex-1 flex-col gap-3">
                  <h2 className="text-[20px] leading-6 tracking-[-0.2px] text-ink">
                    {category.title}
                  </h2>
                  <div className="flex flex-col gap-1 text-[18px] leading-5.5 tracking-[-0.18px] text-muted">
                    {category.links.map((link) => (
                      <Link
                        key={link}
                        href="/#iconiques"
                        onClick={close}
                        className="hover:text-ink"
                      >
                        {link}
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="relative h-40 w-63.5 shrink-0 overflow-hidden">
                  <Image
                    src={category.image}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="254px"
                  />
                </div>
              </article>
            ))}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
