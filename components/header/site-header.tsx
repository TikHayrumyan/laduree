import Link from "next/link";
import { Icon } from "@/components/ui/icon";

const desktopLeft = [
  { href: "/#iconiques", label: "E- Shop" },
  { href: "/#entreprises", label: "Entreprises" },
  { href: "/#maison", label: "La Maison" },
] as const;

const navLinkClass =
  "text-[20px] leading-[24px] tracking-[-0.2px] text-white transition-opacity hover:opacity-70";

function Logo() {
  return (
    <Link
      href="/"
      className="flex w-36.25 flex-col items-center text-white"
      aria-label="Ladurée Paris, accueil"
    >
      <span className="text-[32px] leading-9.5 lg:-mb-1">LADUREE</span>
      <span className="hidden text-center text-[20px] leading-6 italic lg:block">
        Paris
      </span>
    </Link>
  );
}

export function SiteHeader() {
  return (
    <header className="absolute inset-x-0 top-0 z-20 border-b-[0.5px] border-white px-5 py-4 lg:top-0 lg:px-12.5">
      <nav
        aria-label="Navigation principale"
        className="flex items-center justify-between lg:hidden "
      >
        <details className="relative">
          <summary className="cursor-pointer text-[20px] tracking-[-0.2px] text-white">
            Menu
          </summary>
          <div className="absolute left-0 top-full z-30 mt-3 flex w-52 flex-col bg-cream px-4 py-3 text-[16px] text-ink shadow-sm">
            {desktopLeft.map((item) => (
              <Link key={item.href} href={item.href} className="py-1.5">
                {item.label}
              </Link>
            ))}
            <Link href="/#iconiques" className="py-1.5">
              Recherche
            </Link>
            <Link href="/#footer" className="py-1.5">
              Le Club Laduree
            </Link>
          </div>
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
        <div className="flex items-center gap-5 justify-self-start">
          {desktopLeft.map((item) => (
            <Link key={item.href} href={item.href} className={navLinkClass}>
              {item.label}
            </Link>
          ))}
          <Link href="/#iconiques" className={`flex items-center gap-2 ${navLinkClass}`}>
            <Icon src="/icons/search.svg" alt="" size={18} />
            Recherche
          </Link>
        </div>
        <Logo />
        <div className="flex items-center justify-end gap-5 justify-self-end">
          <Link href="/#footer" className={navLinkClass}>
            Le Club Laduree
          </Link>
          <span className="text-[20px] leading-6 tracking-[-0.2px] text-white">
            FR/FR
          </span>
          <Link href="/#footer" className="flex items-center justify-center" aria-label="Compte">
            <Icon src="/icons/user.svg" alt="" size={20} />
          </Link>
          <Link href="/#footer" className="flex items-center justify-center" aria-label="Panier">
            <Icon src="/icons/bag.svg" alt="" size={28} />
          </Link>
        </div>
      </nav>
    </header>
  );
}
