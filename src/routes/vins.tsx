import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/category-page";
import { getCategory } from "@/lib/menu-data";

const category = getCategory("vins");
export const Route = createFileRoute("/vins")({
  head: () => ({ meta: [
    { title: "Vins — The Balcony" }, { name: "description", content: "Les vins rouges, blancs et cuvées du Balcony Lounge Bar." },
    { property: "og:title", content: "Vins — The Balcony" }, { property: "og:description", content: "Notre sélection de vins à savourer verre après verre." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: () => category ? <CategoryPage category={category} /> : null,
});