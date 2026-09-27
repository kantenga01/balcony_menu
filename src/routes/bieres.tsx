import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/category-page";
import { getCategory } from "@/lib/menu-data";

export const Route = createFileRoute("/bieres")({
  component: BieresPage,
});

function BieresPage() {
  const category = getCategory("bieres");

  if (!category) {
    return null;
  }

  return <CategoryPage category={category} />;
}