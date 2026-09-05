export const categories = [
  "Macarons",
  "Eugenie",
  "Chocolats & Confiserie",
  "Thes",
  "Biscuits",
  "Confitures & Miel",
] as const;

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

export const footerColumns = [
  {
    id: "laduree",
    title: "Ladurée",
    links: [
      "Coffrets de macarons",
      "Coffrets d'Eugénie",
      "Assortiments gourmands",
      "Chocolats",
      "Expériences en boutiques",
      "Le Club Ladurée",
    ],
  },
  {
    id: "informations",
    title: "Plus d'informations",
    links: [
      "Nos collections",
      "L'histoire Ladurée",
      "Allergènes & Emballages",
      "Ladurée Café",
    ],
  },
  {
    id: "entreprises",
    title: "Entreprises",
    links: [
      "Cadeaux d'affaires",
      "Offre fournisseur",
      "Cadeaux personnalisés",
      "Offre sucrée et salée",
      "Evènements & réceptions",
    ],
  },
  {
    id: "aide",
    title: "Aide",
    links: ["Demande de contact", "FAQ", "Conditions Le Club ladurée"],
  },
] as const;

export type ShopCategory = {
  id: string;
  title: string;
  links: readonly string[];
  image: string;
};

export type ShopMode = {
  id: "delivery" | "boutique";
  label: string;
  categories: readonly ShopCategory[];
};

export const shopModes: readonly ShopMode[] = [
  {
    id: "delivery",
    label: "Livraison à domicile",
    categories: [
      {
        id: "macarons",
        title: "Macarons",
        links: [
          "Coffrets de Macarons",
          "Composeur",
          "Parfums de Macarons",
        ],
        image: "/images/nav/macarons.png",
      },
      {
        id: "eugenie",
        title: "Eugénie",
        links: [
          "Coffrets d’Eugénie",
          "Composeur Eugénie",
          "Parfums d’Eugénie",
        ],
        image: "/images/nav/eugenie.png",
      },
      {
        id: "chocolat",
        title: "Chocolat",
        links: ["Perles", "Coffrets de Chocolat", "Confiserie"],
        image: "/images/nav/chocolat.png",
      },
      {
        id: "tea-time",
        title: "Tea Time",
        links: ["Thé", "Confitures", "Biscuits"],
        image: "/images/nav/tea-time.png",
      },
      {
        id: "patisseries",
        title: "Pâtisseries",
        links: ["Fondants", "Pâtisseries par coursier", "Bûche Noël"],
        image: "/images/nav/patisseries.png",
      },
      {
        id: "cadeaux",
        title: "Cadeaux",
        links: [
          "Assortiment prêts à offrir",
          "Composeur Coffret cadeau",
          "L’abonnement Gourmand",
          "Carte Cadeau",
        ],
        image: "/images/nav/cadeaux.png",
      },
    ],
  },
  {
    id: "boutique",
    label: "Pâtisseries en boutique",
    categories: [
      {
        id: "patisseries-boutique",
        title: "Pâtisseries",
        links: ["Fondants", "Pâtisseries par coursier", "Bûche Noël"],
        image: "/images/nav/patisseries-boutique.png",
      },
    ],
  },
];

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
