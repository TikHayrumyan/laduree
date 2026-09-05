import Link from "next/link";
import { Icon } from "@/components/ui/icon";

const desktopLeft = [
  { href: "/#iconiques", label: "E- Shop" },
  { href: "/#entreprises", label: "Entreprises" },
  { href: "/#maison", label: "La Maison" },
] as const;

function Logo() {
  return (
    <Link
      href="/"
      className="flex w-36.25 flex-col items-center text-white"
      aria-label="Ladurée Paris, accueil"
    >
      <span className="text-[32px] leading-none">LADUREE</span>
      <span className="hidden text-center text-[20px] italic lg:block">
        Paris
      </span>
    </Link>
  );
}

export function SiteHeader() {
  return (
    <header className="absolute inset-x-0 top-0 z-20 border-b-[0.5px] border-white px-5 py-4 lg:top-10 lg:px-12.5">
      <nav
        aria-label="Navigation principale"
        className="flex items-center justify-between lg:hidden"
      >
        <details className="relative">
          <summary className="cursor-pointer text-[20px] tracking-[-0.2px] text-white">
            Menu
          </summary>
          <ul className="absolute left-0 top-full z-30 mt-3 w-52 bg-cream px-4 py-3 text-[16px] text-ink shadow-sm">
            {desktopLeft.map((item) => (
              <li key={item.href} className="py-1.5">
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
            <li className="py-1.5">
              <Link href="/#iconiques">Recherche</Link>
            </li>
            <li className="py-1.5">
              <Link href="/#footer">Le Club Laduree</Link>
            </li>
          </ul>
        </details>
        <Logo />
        <Link href="/#footer" className="text-[20px] tracking-[-0.2px] text-white">
          Panier
        </Link>
      </nav>

      <nav
        aria-label="Navigation principale"
        className="hidden grid-cols-[1fr_auto_1fr] items-center lg:grid"
      >
        <ul className="flex items-center gap-5 justify-self-start">
          {desktopLeft.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="text-[20px] tracking-[-0.2px] text-white transition-opacity hover:opacity-70"
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/#iconiques"
              className="flex items-center gap-2 text-[20px] tracking-[-0.2px] text-white transition-opacity hover:opacity-70"
            >
              <Icon src="/icons/search.svg" alt="" size={18} />
              Recherche
            </Link>
          </li>
        </ul>
        <Logo />
        <ul className="flex items-center justify-end gap-5 justify-self-end">
          <li>
            <Link
              href="/#footer"
              className="text-[20px] tracking-[-0.2px] text-white transition-opacity hover:opacity-70"
            >
              Le Club Laduree
            </Link>
          </li>
          <li>
            <span className="text-[20px] tracking-[-0.2px] text-white">
              FR/FR
            </span>
          </li>
          <li>
            <Link href="/#footer" aria-label="Compte">
              <Icon src="/icons/user.svg" alt="" size={20} />
            </Link>
          </li>
          <li>
            <Link href="/#footer" aria-label="Panier">
              <Icon src="/icons/bag.svg" alt="" size={28} />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
