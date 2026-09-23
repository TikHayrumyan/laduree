import type { ReactNode } from "react";
import { Link } from "@/i18n/navigation";

type TextLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
};

const linkClass =
  "underline decoration-solid underline-offset-[18%] decoration-[5.5%] transition-opacity hover:opacity-70";

function isExternal(href: string) {
  return /^(mailto:|tel:|https?:|#)/.test(href);
}

export function TextLink({ href, children, className = "" }: TextLinkProps) {
  if (isExternal(href)) {
    return (
      <a href={href} className={`${linkClass} ${className}`}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={`${linkClass} ${className}`}>
      {children}
    </Link>
  );
}
