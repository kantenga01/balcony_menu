import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/category-page";
import { getCategory } from "@/lib/menu-data";

export const Route = createFileRoute("/shisha")({
  component: ShishaPage,
});

function ShishaPage() {
  const category = getCategory("shisha");

  if (!category) {
    return null;
  }

  return <CategoryPage category={category} />;
}