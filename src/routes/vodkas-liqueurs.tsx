import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/category-page";
import { getCategory } from "@/lib/menu-data";

const category = getCategory("vodkas-liqueurs");
export const Route = createFileRoute("/vodkas-liqueurs")({
  head: () => ({ meta: [
    { title: "Vodkas & Liqueurs — The Balcony" }, { name: "description", content: "Vodkas, liqueurs et essentiels de mixologie du Balcony Lounge Bar." },
    { property: "og:title", content: "Vodkas & Liqueurs — The Balcony" }, { property: "og:description", content: "Fraîcheur, douceur et essentiels du bar." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: () => category ? <CategoryPage category={category} /> : null,
});