type IconProps = {
  src: string;
  alt: string;
  size: number;
  current?: boolean;
};

export function Icon({ src, alt, size, current = false }: IconProps) {
  if (current) {
    return (
      <span
        aria-hidden={alt ? undefined : true}
        className="inline-block shrink-0 bg-current"
        style={{
          width: size,
          height: size,
          mask: `url(${src}) center / contain no-repeat`,
          WebkitMask: `url(${src}) center / contain no-repeat`,
        }}
      />
    );
  }

  return (
    <span
      className="relative inline-block shrink-0 overflow-hidden"
      style={{ width: size, height: size }}
    >
      <img
        src={src}
        alt={alt}
        width={size}
        height={size}
        className="size-full"
      />
    </span>
  );
}
