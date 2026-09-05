import Link from "next/link";

type ShopLinkProps = {
  href: string;
  children: string;
  onClick?: () => void;
  className?: string;
};

export function ShopLink({
  href,
  children,
  onClick,
  className = "",
}: ShopLinkProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`group relative inline-flex cursor-pointer items-center ${className}`}
    >
      <span
        aria-hidden
        className="absolute left-0 top-1/2 size-1 -translate-y-1/2 scale-0 rounded-full bg-ink transition-transform duration-1000 ease-expo-out group-hover:scale-100"
      />
      <span className="inline-block transition-transform duration-1000 ease-expo-out group-hover:translate-x-4">
        {children}
      </span>
    </Link>
  );
}
