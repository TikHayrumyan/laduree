import { cn } from "cn";
import type { ReactNode } from "react";
import { Link } from "@/i18n/navigation";

type CtaButtonProps = {
  href: string;
  children: ReactNode;
  className?: string;
};

const buttonClass =
  "inline-flex items-center justify-center border-none border-line bg-cream px-6 py-3 text-[20px] leading-6 tracking-[-0.2px] text-ink transition-colors duration-300 hover:bg-sage";

export function CtaButton({ href, children, className }: CtaButtonProps) {
  const classNames = cn(buttonClass, className);

  if (href.startsWith("#")) {
    return (
      <a href={href} className={classNames}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classNames}>
      {children}
    </Link>
  );
}
