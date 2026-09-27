import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/category-page";
import { getCategory } from "@/lib/menu-data";

export const Route = createFileRoute("/softs")({
  component: SoftsPage,
});

function SoftsPage() {
  const category = getCategory("softs");

  if (!category) {
    return null;
  }

  return <CategoryPage category={category} />;
}