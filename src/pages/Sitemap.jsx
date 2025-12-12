import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs";
import "../css/Categories.css";

const staticPages = [
  { path: "/", label: "Hem" },
  { path: "/results", label: "Resultat" },
  { path: "/start", label: "Kom igång" },
  { path: "/recension", label: "Recension" },
  { path: "/faq", label: "FAQ" },
  { path: "/contact", label: "Kontakt" },
  { path: "/blog", label: "Blogg" },
  { path: "/kategori", label: "Kategorier" },
];

function Sitemap() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("/data/blogPosts.json")
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => console.error("Fel vid hämtning:", err));
  }, []);

  const categories = posts.reduce((acc, post) => {
    const category = acc.find((c) => c.slug === post.categorySlug);
    if (!category) {
      acc.push({
        name: post.category,
        slug: post.categorySlug,
        subcategories: [
          {
            name: post.subcategory,
            slug: post.subcategorySlug,
          },
        ],
      });
    } else if (!category.subcategories.some((s) => s.slug === post.subcategorySlug)) {
      category.subcategories.push({
        name: post.subcategory,
        slug: post.subcategorySlug,
      });
    }
    return acc;
  }, []);

  return (
    <div className="sitemap-page">
      <Breadcrumbs items={[{ to: "/", label: "Hem" }, { label: "Sitemap" }]} />
      <h1>HTML Sitemap</h1>
      <p className="intro">
        Här hittar du en användarvänlig översikt över alla indexerbara sidor,
        kategorier och artiklar.
      </p>

      <div className="sitemap-sections">
        <div className="sitemap-section">
          <h3>Huvudsidor</h3>
          <ul>
            {staticPages.map((page) => (
              <li key={page.path}>
                <Link to={page.path}>{page.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="sitemap-section">
          <h3>Kategorier &amp; underkategorier</h3>
          <ul>
            {categories.map((category) => (
              <li key={category.slug}>
                <Link to={`/kategori/${category.slug}`}>{category.name}</Link>
                <ul>
                  {category.subcategories.map((sub) => (
                    <li key={sub.slug}>
                      <Link to={`/kategori/${category.slug}/${sub.slug}`}>
                        {sub.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>

        <div className="sitemap-section">
          <h3>Artiklar</h3>
          <ul>
            {posts.map((post) => (
              <li key={post.id}>
                <Link to={`/blog/${post.id}`}>{post.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sitemap;
