"use client";

import Image from "next/image";
import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import { useTranslations } from "next-intl";
import { TextLink } from "@/components/ui/text-link";

function GiftImage() {
  const t = useTranslations("Home.gifts");
  const frameRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: frameRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);
  const smoothY = useSpring(y, {
    stiffness: 300,
    damping: 28,
    restDelta: 0.001,
    skipInitialAnimation: true,
  });

  return (
    <div
      ref={frameRef}
      className="relative h-85 w-full overflow-hidden lg:order-first lg:h-full lg:flex-1"
    >
      <motion.div
        style={{ y: shouldReduceMotion ? 0 : smoothY }}
        className="absolute inset-x-0 top-[-5%] h-[124%] w-full"
      >
        <Image
          src="/images/gift-box.png"
          alt={t("alt")}
          fill
          className="object-cover"
          sizes="(max-width: 1023px) calc(100vw - 40px), 50vw"
        />
      </motion.div>
    </div>
  );
}

export function PersonalizedGiftsSection() {
  const t = useTranslations("Home.gifts");

  return (
    <section
      id="personnaliser"
      className="flex w-full flex-col items-center gap-8 px-5 lg:h-195.75 lg:flex-row lg:items-center lg:gap-12 lg:px-12.5"
    >
      <div className="flex w-full flex-col items-center gap-8 lg:h-full lg:flex-1 lg:justify-between lg:gap-0 lg:overflow-hidden">
        <h2 className="w-full text-center text-[32px] leading-9.5 tracking-[-0.32px] text-ink lg:text-[48px] lg:leading-14.5 lg:tracking-[-0.48px]">
          {t.rich("title", { br: () => <br /> })}
        </h2>
        <div
          className="h-45 w-0 border-l border-dashed border-ink/35 lg:h-69.75"
          aria-hidden
        />
        <div className="flex w-90.5 flex-col items-center gap-8">
          <p className="text-center text-[18px] leading-5.5 tracking-[-0.18px] text-muted">
            {t("text")}
          </p>
          <TextLink
            href="/#coffret"
            className="text-[20px] leading-6 tracking-[-0.2px] text-ink"
          >
            {t("cta")}
          </TextLink>
        </div>
      </div>
      <GiftImage />
    </section>
  );
}
