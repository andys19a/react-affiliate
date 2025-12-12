import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs";
import "../css/Categories.css";

function CategoryArticles() {
  const { categorySlug, subcategorySlug } = useParams();
  const [posts, setPosts] = useState([]);
  const [categoryName, setCategoryName] = useState("");
  const [subcategoryName, setSubcategoryName] = useState("");

  useEffect(() => {
    fetch("/data/blogPosts.json")
      .then((res) => res.json())
      .then((data) => {
        const filtered = data.filter(
          (post) =>
            post.categorySlug === categorySlug &&
            post.subcategorySlug === subcategorySlug
        );
        setPosts(filtered);
        if (filtered.length > 0) {
          setCategoryName(filtered[0].category);
          setSubcategoryName(filtered[0].subcategory);
        }
      })
      .catch((err) => console.error("Fel vid hämtning:", err));
  }, [categorySlug, subcategorySlug]);

  if (posts.length === 0) {
    return (
      <div className="articles-page">
        <h1>Inga artiklar hittades</h1>
        <Link to="/kategori" className="back-link">
          ← Tillbaka till kategorierna
        </Link>
      </div>
    );
  }

  return (
    <div className="articles-page">
      <Breadcrumbs
        items={[
          { to: "/", label: "Hem" },
          { to: "/kategori", label: "Kategorier" },
          { to: `/kategori/${categorySlug}`, label: categoryName },
          { label: subcategoryName },
        ]}
      />
      <h1>{subcategoryName}</h1>
      <p className="intro">
        Alla guider och artiklar inom {subcategoryName}. Välj en rubrik för att
        läsa mer.
      </p>

      <div className="taxonomy-grid">
        {posts.map((post) => (
          <div className="taxonomy-card" key={post.id}>
            <h4>
              <Link to={`/blog/${post.id}`}>{post.title}</Link>
            </h4>
            <p className="taxonomy-meta">
              {new Date(post.date).toLocaleDateString()} – {post.excerpt}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoryArticles;
