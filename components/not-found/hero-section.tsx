import Image from "next/image";
import { TextLink } from "@/components/ui/text-link";
import { notFound } from "@/lib/content";

export function NotFoundHero() {
  return (
    <section className="relative flex min-h-110 w-full items-center justify-center overflow-hidden px-5 py-10 lg:h-219 lg:px-0 lg:py-0">
      <Image
        src={notFound.image}
        alt={notFound.alt}
        fill
        loading="eager"
        fetchPriority="high"
        className="object-cover"
        sizes="100vw"
        quality={90}
      />
      <div className="relative flex w-full flex-col items-center gap-8 bg-cream px-8 py-10 lg:w-120 lg:p-16">
        <h1 className="w-full text-center text-[32px] leading-9.5 tracking-[-0.32px] text-ink lg:text-[48px] lg:leading-14.5 lg:tracking-[-0.48px]">
          {notFound.title}
        </h1>
        <div
          className="h-45 w-0 border-l border-dashed border-ink/35 lg:h-69.75"
          aria-hidden
        />
        <div className="flex w-full flex-col items-center gap-8">
          <p className="text-center text-[18px] leading-5.5 max-w-62 tracking-[-0.18px] text-muted">
            {notFound.text}
          </p>
          <TextLink
            href={notFound.href}
            className="text-[20px] leading-6 tracking-[-0.2px] text-ink"
          >
            {notFound.ctaLabel}
          </TextLink>
        </div>
      </div>
    </section>
  );
}
