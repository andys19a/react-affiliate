import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs";
import "../css/Categories.css";

function Category() {
  const { categorySlug } = useParams();
  const [category, setCategory] = useState(null);
  const [subcategories, setSubcategories] = useState([]);

  useEffect(() => {
    fetch("/data/blogPosts.json")
      .then((res) => res.json())
      .then((data) => {
        const filtered = data.filter((post) => post.categorySlug === categorySlug);
        if (filtered.length > 0) {
          setCategory({
            name: filtered[0].category,
            slug: categorySlug,
            count: filtered.length,
          });
          const subs = filtered.reduce((acc, post) => {
            if (!acc.some((s) => s.slug === post.subcategorySlug)) {
              acc.push({ name: post.subcategory, slug: post.subcategorySlug });
            }
            return acc;
          }, []);
          setSubcategories(subs);
        }
      })
      .catch((err) => console.error("Fel vid hämtning:", err));
  }, [categorySlug]);

  if (!category) {
    return (
      <div className="subcategory-page">
        <h1>Kategori hittades inte</h1>
        <Link to="/kategori" className="back-link">
          ← Tillbaka till kategorierna
        </Link>
      </div>
    );
  }

  return (
    <div className="subcategory-page">
      <Breadcrumbs
        items={[
          { to: "/", label: "Hem" },
          { to: "/kategori", label: "Kategorier" },
          { label: category.name },
        ]}
      />
      <h1>{category.name}</h1>
      <p className="intro">
        Utforska underkategorierna nedan och gå vidare till artiklarna.
      </p>

      <div className="taxonomy-grid">
        {subcategories.map((sub) => (
          <div className="taxonomy-card" key={sub.slug}>
            <h4>
              <Link to={`/kategori/${category.slug}/${sub.slug}`}>
                {sub.name}
              </Link>
            </h4>
            <p className="taxonomy-meta">Artiklar inom {sub.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Category;
