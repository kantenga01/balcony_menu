import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import logoAsset from "@/assets/balcony-logo.png";
import { categories } from "@/lib/menu-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Le Menu — The Balcony Lounge Bar" },
      {
        name: "description",
        content:
          "Découvrez la sélection de champagnes, vins et spiritueux du Balcony Lounge Bar.",
      },
      {
        property: "og:title",
        content: "Le Menu — The Balcony Lounge Bar",
      },
      {
        property: "og:description",
        content:
          "Champagnes, vins et spiritueux pour accompagner vos soirées au Balcony.",
      },
      {
        property: "og:type",
        content: "website",
      },
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
    ],
  }),

  component: Index,
});

function Index() {
  return (
    <main className="home-page">
      {/* =========================
          HERO
      ========================== */}
      <section className="home-intro">
        <div className="home-intro__texture" />

        <div className="home-intro__content">
          <img
            src={logoAsset}
            alt="The Balcony Lounge Bar"
            className="home-intro__logo"
          />

          <p className="eyebrow">
            Carte des boissons
          </p>

          <h1>
            Le goût
            <br />
            de la nuit.
          </h1>

          <p className="home-intro__lead">
            Une sélection pensée pour les belles tables, les longues
            conversations et les nuits inoubliables.
          </p>
        </div>

        <span className="home-intro__scroll">
          Découvrez la carte
        </span>
      </section>

      {/* =========================
          CATÉGORIES
      ========================== */}
      <section
        className="category-grid"
        aria-label="Catégories du menu"
      >
        {categories.map((category, index) => (
          <Link
            key={category.slug}
            to={category.path}
            className="category-card"
          >
            {/* Image de la catégorie */}
            <img
              src={category.image}
              alt={category.imageAlt}
              width={1200}
              height={1504}
              loading={index === 0 ? "eager" : "lazy"}
            />

            <div className="category-card__shade" />

            <div className="category-card__content">
              <span>
                {String(index + 1).padStart(2, "0")}
              </span>

              <div>
                <p>{category.kicker}</p>
                <h2>{category.title}</h2>
              </div>

              <ArrowUpRight aria-hidden="true" />
            </div>
          </Link>
        ))}
      </section>

      {/* =========================
          FOOTER
      ========================== */}
      <footer className="site-footer">
        <img
          src={logoAsset}
          alt="The Balcony Lounge Bar"
        />

        <p>
          L’élégance prend de la hauteur.
        </p>
      </footer>
    </main>
  );
}