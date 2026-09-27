import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/category-page";
import { getCategory } from "@/lib/menu-data";

export const Route = createFileRoute("/cocktails")({
  component: CocktailsPage,
});

function CocktailsPage() {
  const category = getCategory("cocktails");

  if (!category) {
    return null;
  }

  return <CategoryPage category={category} />;
}