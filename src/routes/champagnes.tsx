import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/category-page";
import { getCategory } from "@/lib/menu-data";

const category = getCategory("champagnes");
export const Route = createFileRoute("/champagnes")({
  head: () => ({ meta: [
    { title: "Champagnes — The Balcony" }, { name: "description", content: "La sélection de champagnes du Balcony Lounge Bar." },
    { property: "og:title", content: "Champagnes — The Balcony" }, { property: "og:description", content: "Des cuvées emblématiques pour célébrer la nuit." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: () => category ? <CategoryPage category={category} /> : null,
});