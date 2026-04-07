import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs";
import "../css/Categories.css";

function CategoryIndex() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("/data/blogPosts.json")
      .then((res) => res.json())
      .then((data) => {
        const grouped = data.reduce((acc, post) => {
          const existing = acc.find((item) => item.slug === post.categorySlug);
          if (existing) {
            if (!existing.subcategories.some((s) => s.slug === post.subcategorySlug)) {
              existing.subcategories.push({
                name: post.subcategory,
                slug: post.subcategorySlug,
              });
            }
            existing.count += 1;
          } else {
            acc.push({
              name: post.category,
              slug: post.categorySlug,
              count: 1,
              subcategories: [
                { name: post.subcategory, slug: post.subcategorySlug },
              ],
            });
          }
          return acc;
        }, []);
        setCategories(grouped);
      })
      .catch((err) => console.error("Fel vid hämtning:", err));
  }, []);

  return (
    <div className="categories-page">
      <Breadcrumbs items={[{ to: "/", label: "Hem" }, { label: "Kategorier" }]} />
      <h1>Kategorier</h1>
      <p className="intro">
        Utforska guider och artiklar via kategori och underkategori. Följ
        brödsmulorna för att navigera till rätt innehåll.
      </p>

      <div className="taxonomy-grid">
        {categories.map((category) => (
          <div className="taxonomy-card" key={category.slug}>
            <h3>
              <Link to={`/kategori/${category.slug}`}>{category.name}</Link>
            </h3>
            <p className="taxonomy-meta">{category.count} artiklar</p>
            <ul>
              {category.subcategories.map((sub) => (
                <li key={sub.slug}>
                  <Link to={`/kategori/${category.slug}/${sub.slug}`}>
                    {sub.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoryIndex;
