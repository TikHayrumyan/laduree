import Link from "next/link";
import type { ReactNode } from "react";

type CtaButtonProps = {
  href: string;
  children: ReactNode;
  className?: string;
};

export function CtaButton({ href, children, className = "" }: CtaButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center border-none border-line bg-cream px-6 py-3 text-[20px] leading-6 tracking-[-0.2px] text-ink transition-colors duration-300 hover:bg-sage ${className}`}
    >
      {children}
    </Link>
  );
}
