import Link from "next/link";
import { entreprisesNav } from "@/lib/content";

export function EntreprisesSubNav() {
  return (
    <nav
      aria-label="Offres entreprises"
      className="flex w-full items-center justify-start gap-4 overflow-x-auto border-b-[0.5px] border-nav-line px-5 py-5 scrollbar-none lg:justify-center lg:px-0"
    >
      {entreprisesNav.map((item, index) => (
        <div key={item.href} className="flex shrink-0 items-center gap-4">
          {index > 0 ? (
            <span className="size-1 rounded-full bg-ink" aria-hidden />
          ) : null}
          <Link
            href={item.href}
            className="cursor-pointer whitespace-nowrap text-center text-[20px] leading-6 tracking-[-0.2px] text-ink hover:text-muted lg:text-[28px] lg:leading-8.5 lg:tracking-[-0.28px]"
          >
            {item.label}
          </Link>
        </div>
      ))}
    </nav>
  );
}
