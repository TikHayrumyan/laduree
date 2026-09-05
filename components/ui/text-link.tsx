import Link from "next/link";
import type { ReactNode } from "react";

type TextLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
};

export function TextLink({ href, children, className = "" }: TextLinkProps) {
  return (
    <Link
      href={href}
      className={`underline decoration-solid underline-offset-[18%] decoration-[5.5%] transition-opacity hover:opacity-70 ${className}`}
    >
      {children}
    </Link>
  );
}
