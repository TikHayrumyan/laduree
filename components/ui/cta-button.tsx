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
      className={`inline-flex items-center justify-center border-2 border-line bg-cream px-6 py-3 text-[20px] tracking-[-0.2px] text-ink transition-opacity hover:opacity-80 ${className}`}
    >
      {children}
    </Link>
  );
}
