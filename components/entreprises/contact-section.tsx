import Image from "next/image";
import { TextLink } from "@/components/ui/text-link";
import { entreprisesContact } from "@/lib/content";

export function EntreprisesContact() {
  const { id, title, image, alt, label, channels, hours } = entreprisesContact;

  return (
    <section
      id={id}
      className="flex w-full flex-col gap-8 px-5 lg:h-195.75 lg:flex-row lg:gap-16 lg:px-12.5"
    >
      <div className="flex w-full flex-col gap-10 lg:h-full lg:flex-1 lg:justify-between lg:gap-0">
        <h2 className="w-full text-[32px] leading-9.5 tracking-[-0.32px] text-ink uppercase lg:text-[48px] lg:leading-14.5 lg:tracking-[-0.48px]">
          {title}
        </h2>
        <div className="flex w-full flex-col gap-8 lg:flex-row lg:items-start lg:gap-20">
          <p className="shrink-0 text-[18px] leading-5.5 tracking-[-0.18px] text-ink uppercase">
            {label}
          </p>
          <div className="flex w-full flex-col gap-8 text-[18px] leading-5.5 tracking-[-0.18px] text-muted lg:flex-1">
            <div>
              {channels.map((channel) => (
                <div key={channel.id}>
                  <p>{channel.label}</p>
                  <TextLink
                    href={channel.href}
                    className="block w-fit text-[18px] leading-5.5 tracking-[-0.18px] text-muted"
                  >
                    {channel.value}
                  </TextLink>
                </div>
              ))}
            </div>
            <p>{hours}</p>
          </div>
        </div>
      </div>
      <div className="relative h-85 w-full overflow-hidden lg:order-first lg:h-full lg:flex-1">
        <Image
          src={image}
          alt={alt}
          width={750}
          height={851}
          className="absolute top-[-8.95%] left-[-18.13%] h-[128.62%] w-[145.89%] max-w-none"
          sizes="(max-width: 1023px) calc(100vw - 40px), 44vw"
        />
      </div>
    </section>
  );
}
