import type { Metadata } from "next";
import { EntreprisesPerks } from "@/components/entreprises/perks-section";
import { NotFoundHero } from "@/components/not-found/hero-section";

export const metadata: Metadata = {
  title: "Page introuvable | Ladurée Paris",
  description:
    "La page que vous cherchez n’est plus ici. Retrouvez les macarons et pâtisseries Ladurée sur l’accueil.",
};

export default function NotFound() {
  return (
    <div className="flex min-h-full flex-col bg-cream pt-nav">
      <main>
        <NotFoundHero />
        <EntreprisesPerks />
      </main>
    </div>
  );
}
