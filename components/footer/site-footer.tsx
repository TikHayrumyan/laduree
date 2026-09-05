import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/ui/icon";
import { footerColumns, socialLinks } from "@/lib/content";

function NewsletterField() {
  return (
    <form className="flex w-full flex-col gap-2 lg:gap-6" action="#footer">
      <label
        htmlFor="newsletter-email"
        className="text-[18px] leading-5.5 tracking-[-0.18px] uppercase text-ink lg:text-[20px] lg:leading-6 lg:tracking-[-0.2px]"
      >
        NEWSLETTER
      </label>
      <div className="flex items-start justify-between border-b-[0.5px] border-ink pb-2">
        <input
          id="newsletter-email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="Adresse email"
          className="w-full bg-transparent text-[14px] leading-4.25 tracking-[-0.14px] text-ink placeholder:text-muted focus:outline-none lg:text-[18px] lg:leading-6 lg:tracking-[-0.18px]"
        />
        <button type="submit" aria-label="S'inscrire à la newsletter">
          <Icon src="/icons/arrow-right.svg" alt="" size={18} />
        </button>
      </div>
    </form>
  );
}

function FooterAccordion({
  title,
  links,
  open = false,
}: {
  title: string;
  links: readonly string[];
  open?: boolean;
}) {
  return (
    <details className="w-full" open={open}>
      <summary className="flex cursor-pointer items-center justify-between text-[18px] leading-5.5 tracking-[-0.18px] uppercase text-ink">
        {title}
        <span className="icon-minus">
          <Icon src="/icons/minus.svg" alt="" size={16} />
        </span>
        <span className="icon-plus">
          <Icon src="/icons/plus.svg" alt="" size={16} />
        </span>
      </summary>
      <ul className="mt-5 flex flex-col gap-2 text-[14px] leading-4.25 tracking-[-0.14px] text-muted">
        {links.map((link) => (
          <li key={link}>
            <Link href="/#iconiques" className="hover:text-ink">
              {link}
            </Link>
          </li>
        ))}
      </ul>
    </details>
  );
}

function SocialRow() {
  return (
    <div className="flex w-full items-center justify-center gap-20 lg:w-63.75 lg:flex-col lg:items-start lg:gap-6">
      <p className="text-[18px] leading-5.5 tracking-[-0.18px] uppercase text-ink lg:text-[20px] lg:leading-6 lg:tracking-[-0.2px]">
        Suivez-nous
      </p>
      <div className="flex flex-1 items-center justify-between lg:flex-none lg:justify-start lg:gap-2">
        {socialLinks.map((social) => (
          <Link
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.name}
            className="transition-opacity hover:opacity-70"
          >
            <span className="lg:hidden">
              <Icon src={social.icon} alt="" size={18} />
            </span>
            <span className="hidden lg:inline-flex">
              <Icon src={social.icon} alt="" size={24} />
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export function SiteFooter() {
  return (
    <footer
      id="footer"
      className="flex w-full flex-col items-center gap-10 bg-sage py-10 lg:gap-20 lg:py-20"
    >
      <div className="flex w-full flex-col items-end justify-end gap-10 border-b-[0.5px] border-footer-line px-5 pb-8 lg:gap-6 lg:px-12.5 lg:pb-15">
        <div className="flex w-full flex-col gap-8 lg:hidden">
          <FooterAccordion
            title={footerColumns[0].title}
            links={footerColumns[0].links}
            open
          />
          <div className="flex w-full flex-col gap-5">
            {footerColumns.slice(1).map((column) => (
              <FooterAccordion
                key={column.id}
                title={column.title}
                links={column.links}
              />
            ))}
            <FooterAccordion title="LEGALS" links={["Mentions légales"]} />
            <NewsletterField />
          </div>
        </div>

        <div className="hidden w-full items-start justify-between lg:flex">
          {footerColumns.map((column) => (
            <div
              id={column.id === "entreprises" ? "entreprises" : undefined}
              key={column.id}
              className={`flex flex-col gap-7 ${column.id === "laduree" ? "w-45.5" : "w-55.75"}`}
            >
              <p className="text-[20px] leading-6 tracking-[-0.2px] uppercase text-ink">
                {column.title}
              </p>
              <ul className="flex flex-col gap-2 text-[18px] leading-5.5 tracking-[-0.18px] text-muted">
                {column.links.map((link) => (
                  <li key={link}>
                    <Link href="/#iconiques" className="hover:text-ink">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="w-63.75">
            <NewsletterField />
          </div>
        </div>

        <SocialRow />
      </div>
      <div className="relative h-51.5 w-38.5 lg:h-66.75 lg:w-50">
        <Image
          src="/images/crest.png"
          alt="Emblème Ladurée Paris, maison fondée en 1862"
          fill
          className="object-contain"
          sizes="(max-width: 1023px) 154px, 200px"
        />
      </div>
    </footer>
  );
}
