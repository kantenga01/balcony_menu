import { Link } from "@tanstack/react-router";
import logoAsset from "@/assets/balcony-logo.png";
import { categories } from "@/lib/menu-data";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link
          to="/"
          className="brand-link"
          aria-label="The Balcony — Accueil"
        >
          <img
            src={logoAsset}
            alt="The Balcony Lounge Bar"
            className="brand-logo"
          />
        </Link>

        <nav
          className="category-nav"
          aria-label="Catégories du menu"
        >
          {categories.map((category) => (
            <Link
              key={category.slug}
              to={category.path}
              className="category-nav__link"
              activeProps={{
                className:
                  "category-nav__link category-nav__link--active",
              }}
            >
              {category.navLabel}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}