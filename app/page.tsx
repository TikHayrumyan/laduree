import Link from "next/link";
import { HeritageSection } from "@/components/home/heritage-section";
import { HeroSection } from "@/components/home/hero-section";
import { IconiquesSection } from "@/components/home/iconiques-section";
import { IdealBoxSection } from "@/components/home/ideal-box-section";
import { MaisonSection } from "@/components/home/maison-section";
import { PersonalizedGiftsSection } from "@/components/home/personalized-gifts-section";
import { StoresSection } from "@/components/home/stores-section";
import { TraditionSection } from "@/components/home/tradition-section";
import { ValentineSection } from "@/components/home/valentine-section";

export default function Home() {
  return (
    <div className="flex min-h-full flex-col bg-cream">
      <Link
        href="/#iconiques"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-cream focus:px-4 focus:py-2"
      >
        Aller au contenu
      </Link>
      <main className="flex flex-col items-center gap-10 lg:gap-20">
        <HeroSection />
        <IconiquesSection />
        <PersonalizedGiftsSection />
        <ValentineSection />
        <MaisonSection />
        <HeritageSection />
        <IdealBoxSection />
        <TraditionSection />
        <StoresSection />
      </main>
    </div>
  );
}
