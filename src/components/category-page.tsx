import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { categories, type MenuCategory } from "@/lib/menu-data";

export function CategoryPage({ category }: { category: MenuCategory }) {
  const index = categories.findIndex((item) => item.slug === category.slug);

  const previous =
    categories[(index - 1 + categories.length) % categories.length] ?? category;

  const next =
    categories[(index + 1) % categories.length] ?? category;

  return (
    <main>
      <section className="category-hero">
        <img
          src={category.image}
          alt={category.imageAlt}
          width={1200}
          height={1504}
          className="category-hero__image"
        />

        <div className="category-hero__shade" />

        <div className="category-hero__content">
          <Link to="/" className="back-link">
            <ArrowLeft aria-hidden="true" size={17} />
            Toutes les catégories
          </Link>

          <p className="eyebrow">{category.kicker}</p>

          <h1>{category.title}</h1>

          <p className="category-hero__description">
            {category.description}
          </p>
        </div>
      </section>

      <section className="menu-list" aria-labelledby="selection-title">
        <div className="menu-list__heading">
          <p className="eyebrow">The Balcony</p>

          <h2 id="selection-title">Notre sélection</h2>

          <span>
            {String(category.products.length).padStart(2, "0")} références
          </span>
        </div>

        <ol className="product-list">
          {category.products.map((product, productIndex) => (
            <li
              key={`${product.name}-${productIndex}`}
              className="product-list__item"
            >
              <span className="product-list__number">
                {String(productIndex + 1).padStart(2, "0")}
              </span>

              <div className="product-list__info">
                <span className="product-list__name">
                  {product.name}
                </span>

                {product.size && (
                  <span className="product-list__size">
                    {product.size}
                  </span>
                )}
              </div>

              <span className="product-list__price">
                ${product.price.toLocaleString("en-US")}
              </span>
            </li>
          ))}
        </ol>
      </section>

      <nav
        className="category-pager"
        aria-label="Naviguer entre les catégories"
      >
        <Link to={previous.path} className="category-pager__item">
          <ArrowLeft aria-hidden="true" />

          <span>
            <small>Précédent</small>
            {previous.navLabel}
          </span>
        </Link>

        <Link
          to={next.path}
          className="category-pager__item category-pager__item--next"
        >
          <span>
            <small>Suivant</small>
            {next.navLabel}
          </span>

          <ArrowRight aria-hidden="true" />
        </Link>
      </nav>
    </main>
  );
}