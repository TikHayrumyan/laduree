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
import { CtaButton } from "@/components/ui/cta-button";
import type { EntreprisesOffer } from "@/lib/content";

export function OfferBanner({ offer }: { offer: EntreprisesOffer }) {
  const frameRef = useRef<HTMLElement>(null);
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
    <section
      id={offer.id}
      ref={frameRef}
      className="relative flex h-167.5 w-full flex-col items-center justify-end overflow-hidden px-5 py-10 lg:h-225 lg:justify-center lg:px-12.5 lg:py-0"
    >
      <motion.div
        style={{ y: shouldReduceMotion ? 0 : smoothY }}
        className="absolute inset-x-0 top-[-5%] h-[110%] w-full"
      >
        <Image
          src={offer.image}
          alt={offer.alt}
          fill
          className="object-cover"
          sizes="100vw"
        />
      </motion.div>
      <div className="absolute inset-0 bg-black/20" aria-hidden />
      <div className="relative flex w-full flex-col items-center gap-50 lg:gap-9">
        <h2 className="w-full text-center text-[36px] leading-none tracking-[-0.36px] text-balance text-white uppercase lg:max-w-[11.5em] lg:text-[60px] lg:tracking-[-0.6px]">
          {offer.title}
        </h2>
        <CtaButton href={offer.href} className="border-2 border-line">
          {offer.ctaLabel}
        </CtaButton>
      </div>
    </section>
  );
}
