type IconProps = {
  src: string;
  alt: string;
  size: number;
};

export function Icon({ src, alt, size }: IconProps) {
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
