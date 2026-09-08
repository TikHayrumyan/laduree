import Link from "next/link";
import { Fragment } from "react";
import { entreprisesNav } from "@/lib/content";

export function EntreprisesSubNav() {
  return (
    <nav
      aria-label="Offres entreprises"
      className="w-full overflow-x-auto border-b-[0.5px] border-nav-line scrollbar-none"
    >
      <div className="flex w-max min-w-full items-center justify-center gap-4 px-5 py-5 lg:px-0">
        {entreprisesNav.map((item, index) => (
          <Fragment key={item.href}>
            {index > 0 ? (
              <span className="size-1 shrink-0 rounded-full bg-ink" aria-hidden />
            ) : null}
            <Link
              href={item.href}
              className="shrink-0 cursor-pointer whitespace-nowrap text-center text-[20px] leading-normal tracking-[-0.2px] text-ink hover:text-muted lg:text-[28px] lg:tracking-[-0.28px]"
            >
              {item.label}
            </Link>
          </Fragment>
        ))}
      </div>
    </nav>
  );
}
