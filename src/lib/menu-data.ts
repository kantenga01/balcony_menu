import champagneImage from "@/assets/champagne-menu.jpg";
import wineImage from "@/assets/wine-menu.jpg";
import spiritsImage from "@/assets/spirits-menu.jpg";
import beerImage from "@/assets/beer-menu.png";
import softImage from "@/assets/soft-menu.png";
import cocktailsImage from "@/assets/cocktails-menu.png";
import shishaImage from "@/assets/shisha-menu.png";

export type MenuProduct = {
  name: string;
  price: number;
  currency?: string;
  size?: string;
};

export type MenuCategory = {
  slug:
    | "champagnes"
    | "vins"
    | "whiskies-cognacs"
    | "vodkas-liqueurs"
    | "bieres"
    | "softs"
    | "cocktails"
    | "shisha";

  path:
    | "/champagnes"
    | "/vins"
    | "/whiskies-cognacs"
    | "/vodkas-liqueurs"
    | "/bieres"
    | "/softs"
    | "/cocktails"
    | "/shisha";

  navLabel: string;
  title: string;
  kicker: string;
  description: string;
  image: string;
  imageAlt: string;
  products: MenuProduct[];
};

export const categories: MenuCategory[] = [
  // =====================================================
  // CHAMPAGNES
  // =====================================================
  {
    slug: "champagnes",
    path: "/champagnes",
    navLabel: "Champagnes",
    title: "Champagnes",
    kicker: "Bulles & célébrations",
    description:
      "Des cuvées emblématiques à partager dans l’éclat de la nuit.",
    image: champagneImage,
    imageAlt:
      "Bouteille de champagne dans un seau à glace et deux flûtes",

    products: [
      { name: "MOET ICE IMPERIAL", price: 150 },
      { name: "MOET BRUT", price: 150 },
      { name: "MOET NECTAR 75CL", price: 150, size: "75 CL" },
      { name: "VEUVE CLIQUOT RICH", price: 190 },
      { name: "VEUVE CLIQUOT BRUT", price: 150 },
      { name: "DON PERIGNON", price: 400 },
      { name: "RUINART BLANC", price: 300 },
      { name: "RUINART BRUT", price: 150 },
      { name: "DON OSACAR Brut", price: 80 },
      { name: "Don Oscar Blanc", price: 100 },
      { name: "Belaire luxe rose", price: 100 },
      { name: "L. PERRIER ROSE 75 CL", price: 150, size: "75 CL" },
      { name: "ARMAND DE BRIGNAC", price: 800 },
      { name: "Belaire luxe", price: 100 },
    ],
  },

  // =====================================================
  // VINS
  // =====================================================
  {
    slug: "vins",
    path: "/vins",
    navLabel: "Vins",
    title: "Vins",
    kicker: "Rouges, blancs & cuvées",
    description:
      "Une sélection à savourer lentement, verre après verre.",
    image: wineImage,
    imageAlt:
      "Vin rouge versé dans un verre sur un comptoir élégant",

    products: [
      { name: "VIN ROUGE", price: 40 },
      { name: "VIN BLANC", price: 40 },
      { name: "Nederburg pinotage", price: 40 },
      { name: "Rendez-vous", price: 30 },
      { name: "MOUTON CADET", price: 40 },
      { name: "Chamdor", price: 15 },
    ],
  },

  // =====================================================
  // WHISKIES & COGNACS
  // =====================================================
  {
    slug: "whiskies-cognacs",
    path: "/whiskies-cognacs",
    navLabel: "Whiskies, Cognacs & Tequila",
    title: "Whiskies, Cognacs & Tequila",
    kicker: "Caractère & grands âges",
    description:
      "Des spiritueux profonds, servis pour prolonger la soirée.",
    image: spiritsImage,
    imageAlt:
      "Whisky ambré dans un verre accompagné d’une carafe",

    products: [
      { name: "Martel VSOP", price: 150 },
      { name: "Martel Blue swift", price: 120 },
      { name: "Martel Blue swift", price: 100 },
      { name: "HENNESSY VERY XO", price: 400 },
      { name: "HENNESSY VERY VSOP", price: 150 },
      { name: "HENNESSY VERY SP", price: 100 },
      { name: "REMY MARTIN XO", price: 400 },
      { name: "REMY MARTIN VSOP", price: 150 },
      { name: "DON JULIO Reposado", price: 190 },
      { name: "Tequila Azul", price: 600 },
      { name: "Don julio 1942", price: 650 },
      { name: "Tequila Patron", price: 100 },
      { name: "Tequila Blanco", price: 80 },
      { name: "Tequila Gold", price: 80 },
      { name: "GLENFIDDICH 21", price: 400 },
      { name: "GLENFIDDICH 18", price: 180 },
      { name: "GLENFIDDICH 15 75CL", price: 140 },
      { name: "GLENFIDDICH 12", price: 100 },
      { name: "CHIVAS 18", price: 150 },
      { name: "CHIVAS 12", price: 70 },
      { name: "JACK DANIEL", price: 70 },
      { name: "JACK GENTELMAN", price: 80 },
      { name: "RED LABEL", price: 50 },
      { name: "DOUBLE BLACK", price: 100 },
      { name: "BLUE LABEL", price: 400 },
      { name: "GOLD LABEL", price: 150 },
      { name: "JAMESON", price: 50 },
      { name: "JAMESON BLACK BARREL", price: 80 },
      { name: "GLEN MORANGIE", price: 0 },
      { name: "JACK DANIEL SINGLE MAN", price: 0 },
    ],
  },

  // =====================================================
  // VODKAS & LIQUEURS
  // =====================================================
  {
    slug: "vodkas-liqueurs",
    path: "/vodkas-liqueurs",
    navLabel: "Vodkas & Liqueurs",
    title: "Vodkas & Liqueurs",
    kicker: "Fraîcheur & mixologie",
    description:
      "Les essentiels du bar, à déguster purs ou dans vos mélanges préférés.",
    image: spiritsImage,
    imageAlt:
      "Vodka et liqueurs dans un bar élégant",

    products: [
      { name: "AMARULA", price: 50 },
      { name: "MARTINI BLANC", price: 40 },
      { name: "MARTINI ROUGE", price: 40 },
      { name: "BAILEYS", price: 40 },
      { name: "MALIBU", price: 40 },
      { name: "COINTRO", price: 50 },
      { name: "GREY GOOSE", price: 80 },
      { name: "CIROC SUMMER", price: 100 },
      { name: "ABSOLUT", price: 50 },
      { name: "CIROC VODKA", price: 100 },
      { name: "BELVEDERE", price: 80 },
      { name: "JAGERMEIFTER", price: 70 },
    ],
  },

  // =====================================================
  // BIÈRES
  // =====================================================
  {
    slug: "bieres",
    path: "/bieres",
    navLabel: "Bières",
    title: "Bières",
    kicker: "Fraîches & conviviales",
    description:
      "Une sélection de bières servies fraîches pour accompagner vos soirées.",
    image: beerImage,
    imageAlt:
      "Bières fraîches servies dans un bar élégant",

    products: [
      { name: "SIMBA", price: 5.6 },
      { name: "TEMBO", price: 5.6 },
      { name: "CASTEL", price: 5.6 },
      { name: "33 EXPORT", price: 5.6 },
      { name: "CHUI", price: 5.6 },
      { name: "CHUI BLACK", price: 5.6 },
      { name: "DOPPEL", price: 5.6 },
      { name: "BEAUFORT", price: 6.5 },
      { name: "CASTEL LITE", price: 6.5 },
      { name: "SAVANA", price: 5.6 },
      { name: "HUNTERS", price: 6.5 },
      { name: "HEINEKEN", price: 6.5 },
      { name: "LEFFE BLONDE, BRUNE", price: 7.8 },
      { name: "GUINESS", price: 6.5 },
      { name: "BLACK LABEL", price: 6.5 },
    ],
  },

  // =====================================================
  // SOFTS
  // =====================================================
  {
    slug: "softs",
    path: "/softs",
    navLabel: "Softs",
    title: "Softs",
    kicker: "Fraîcheur & douceur",
    description:
      "Une sélection de boissons fraîches et rafraîchissantes.",
    image: softImage,
    imageAlt:
      "Boissons fraîches et softs servis dans un bar",

    products: [
      { name: "COCA-COLA", price: 2 },
      { name: "FANTA", price: 2 },
      { name: "SPRITE", price: 2 },
      { name: "TONIC", price: 2 },
      { name: "EAU MINÉRALE", price: 2 },
      { name: "EAU GAZEUSE", price: 2 },
      { name: "JUS CERES", price: 10 },
      { name: "REDBULL", price: 5 },
    ],
  },

  // =====================================================
  // COCKTAILS
  // =====================================================
  {
    slug: "cocktails",
    path: "/cocktails",
    navLabel: "Cocktails",
    title: "Cocktails",
    kicker: "Créations & mixologie",
    description:
      "Des créations fraîches et élégantes imaginées par nos bartenders.",
    image: cocktailsImage,
    imageAlt:
      "Cocktail élégant préparé par un bartender",

    products: [
      { name: "MOJITO", price: 0 },
      { name: "MARGARITA", price: 0 },
      { name: "PINA COLADA", price: 0 },
      { name: "SEX ON THE BEACH", price: 0 },
      { name: "LONG ISLAND", price: 0 },
      { name: "TEQUILA SUNRISE", price: 0 },
      { name: "COSMOPOLITAN", price: 0 },
      { name: "APEROL SPRITZ", price: 0 },
    ],
  },

  // =====================================================
  // SHISHA
  // =====================================================
  {
    slug: "shisha",
    path: "/shisha",
    navLabel: "Shisha",
    title: "Shisha",
    kicker: "Smoke & expérience",
    description:
      "Une expérience shisha pensée pour accompagner les nuits du Balcony.",
    image: shishaImage,
    imageAlt:
      "Shisha élégante dans une ambiance lounge",

    products: [
      { name: "SHISHA SPECIAL BALCONY", price: 50 },
      { name: "SHISHA CLASSIC", price: 15 },
      { name: "SHISHA FRUIT", price: 30 },
    ],
  },
];

export function getCategory(slug: MenuCategory["slug"]) {
  return categories.find((category) => category.slug === slug);
}
