import type { Metadata } from "next";
import { EntreprisesContact } from "@/components/entreprises/contact-section";
import { EntreprisesHero } from "@/components/entreprises/hero-section";
import { OfferBanner } from "@/components/entreprises/offer-banner";
import { EntreprisesPerks } from "@/components/entreprises/perks-section";
import { EntreprisesSubNav } from "@/components/entreprises/sub-nav";
import { entreprisesOffers } from "@/lib/content";

export const metadata: Metadata = {
  title: "Service commercial | Ladurée Paris",
  description:
    "Cadeaux d’affaires, personnalisation, traiteur et évènements : l’équipe commerciale Ladurée vous accompagne.",
};

export default function ServiceCommercialPage() {
  return (
    <div className="flex min-h-full flex-col bg-cream pt-nav">
      <main className="flex flex-col items-center gap-10 lg:gap-20">
        <EntreprisesSubNav />
        <EntreprisesHero />
        <div className="flex w-full flex-col">
          {entreprisesOffers.map((offer) => (
            <OfferBanner key={offer.id} offer={offer} />
          ))}
        </div>
        <div className="flex w-full flex-col gap-10">
          <EntreprisesContact />
          <EntreprisesPerks />
        </div>
      </main>
    </div>
  );
}
