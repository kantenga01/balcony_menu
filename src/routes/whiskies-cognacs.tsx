import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/category-page";
import { getCategory } from "@/lib/menu-data";

const category = getCategory("whiskies-cognacs");
export const Route = createFileRoute("/whiskies-cognacs")({
  head: () => ({ meta: [
    { title: "Whiskies & Cognacs — The Balcony" }, { name: "description", content: "Whiskies, cognacs et spiritueux de caractère au Balcony Lounge Bar." },
    { property: "og:title", content: "Whiskies & Cognacs — The Balcony" }, { property: "og:description", content: "Une sélection profonde pour prolonger la soirée." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: () => category ? <CategoryPage category={category} /> : null,
});