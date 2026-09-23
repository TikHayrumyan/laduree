export type Product = {
  id: string;
  name: string;
  price: string;
  image: string;
  wide?: boolean;
};

export const products: Product[] = [
  {
    id: "mimosa-18",
    name: 'Coffret de 18 macarons "Mimosa"',
    price: "102 EUR",
    image: "/images/product-1.png",
  },
  {
    id: "tiroirs",
    name: "Boîte à tiroirs de 32 macarons et 18 Eugénie",
    price: "60 EUR",
    image: "/images/product-2.png",
    wide: true,
  },
  {
    id: "napoleon-42",
    name: 'Coffret de 42 macarons "Napoléon" - or',
    price: "123 EUR",
    image: "/images/product-3.png",
  },
  {
    id: "intemporel-bleu",
    name: 'Coffret de 28 macarons "Intemporel" – Bleu',
    price: "60 EUR",
    image: "/images/product-1.png",
  },
  {
    id: "intemporel-peche-35",
    name: 'Coffret de 35 macarons "Intemporel" – Pêche',
    price: "102 EUR",
    image: "/images/product-1.png",
  },
  {
    id: "intemporel-rose",
    name: 'Coffret de 15 macarons "Intemporel" – Rose',
    price: "102 EUR",
    image: "/images/product-3.png",
  },
  {
    id: "intemporel-peche-35b",
    name: 'Coffret de 35 macarons "Intemporel" – Pêche',
    price: "102 EUR",
    image: "/images/product-3.png",
  },
];

export const footerColumnIds = [
  "laduree",
  "informations",
  "entreprises",
  "aide",
] as const;

export type FooterColumnId = (typeof footerColumnIds)[number];

export type ShopCategoryId =
  | "macarons"
  | "eugenie"
  | "chocolat"
  | "tea-time"
  | "patisseries"
  | "cadeaux"
  | "patisseries-boutique";

export type ShopModeId = "delivery" | "boutique";

export type ShopCategory = {
  id: ShopCategoryId;
  image: string;
};

export type ShopMode = {
  id: ShopModeId;
  categories: readonly ShopCategory[];
};

export const shopModes: readonly ShopMode[] = [
  {
    id: "delivery",
    categories: [
      { id: "macarons", image: "/images/nav/macarons.png" },
      { id: "eugenie", image: "/images/nav/eugenie.png" },
      { id: "chocolat", image: "/images/nav/chocolat.png" },
      { id: "tea-time", image: "/images/nav/tea-time.png" },
      { id: "patisseries", image: "/images/nav/patisseries.png" },
      { id: "cadeaux", image: "/images/nav/cadeaux.png" },
    ],
  },
  {
    id: "boutique",
    categories: [
      {
        id: "patisseries-boutique",
        image: "/images/nav/patisseries-boutique.png",
      },
    ],
  },
];

export const entreprisesNav = [
  { id: "cadeaux", href: "#cadeaux" },
  { id: "personnalisation", href: "#personnalisation" },
  { id: "traiteur", href: "#traiteur" },
  { id: "fournisseur", href: "#fournisseur" },
  { id: "evenements", href: "#evenements" },
] as const;

export type EntreprisesOfferId =
  | "cadeaux"
  | "fournisseur"
  | "personnalisation"
  | "traiteur";

export type EntreprisesOffer = {
  id: EntreprisesOfferId;
  image: string;
  href: string;
};

export const entreprisesOffers: readonly EntreprisesOffer[] = [
  {
    id: "cadeaux",
    image: "/images/entreprises/cadeaux.webp",
    href: "#evenements",
  },
  {
    id: "fournisseur",
    image: "/images/entreprises/fournisseur.png",
    href: "#evenements",
  },
  {
    id: "personnalisation",
    image: "/images/entreprises/hero.png",
    href: "#evenements",
  },
  {
    id: "traiteur",
    image: "/images/entreprises/sucrees.png",
    href: "#evenements",
  },
];

export type EntreprisesContactChannel = {
  id: "email" | "phone";
  value: string;
  href: string;
};

export const entreprisesContact = {
  id: "evenements",
  image: "/images/entreprises/equipe.png",
  channels: [
    {
      id: "email",
      value: "service-commercial@laduree.com",
      href: "mailto:service-commercial@laduree.com",
    },
    {
      id: "phone",
      value: "+33 1 70 22 45 20",
      href: "tel:+33170224520",
    },
  ] as const satisfies readonly EntreprisesContactChannel[],
} as const;

export const entreprisesPerkIds = [
  "livraison",
  "froid",
  "proteges",
  "service",
] as const;

export type EntreprisesPerkId = (typeof entreprisesPerkIds)[number];

export const notFound = {
  href: "/",
  image: "/images/not-found-org.png",
} as const;

export const socialLinks = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/laduree/",
    icon: "/icons/instagram.svg",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/laduree",
    icon: "/icons/linkedin.svg",
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@laduree",
    icon: "/icons/tiktok.svg",
  },
] as const;
