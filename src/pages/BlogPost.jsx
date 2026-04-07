import { useParams, Link } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import "../css/Blog.css";
import AffiliateButton from "../components/AffiliateButton";
import Breadcrumbs from "../components/Breadcrumbs";

function BlogPost() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [allPosts, setAllPosts] = useState([]);

  useEffect(() => {
    fetch("/data/blogPosts.json")
      .then((res) => res.json())
      .then((data) => {
        const sortedPosts = data.sort((a, b) => new Date(b.date) - new Date(a.date));
        const foundPost = sortedPosts.find((p) => p.id === Number(id));
        setPost(foundPost);
        setAllPosts(sortedPosts);
      })
      .catch((err) => console.error("Fel vid hämtning:", err));
  }, [id]);

  const relatedPosts = useMemo(() => {
    if (!post) return [];
    return allPosts
      .filter(
        (p) =>
          p.id !== post.id &&
          (p.subcategory === post.subcategory || p.category === post.category)
      )
      .slice(0, 3);
  }, [allPosts, post]);

  const popularPosts = useMemo(() => {
    if (!post) return [];
    return allPosts
      .filter((p) => p.id !== post.id)
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .slice(0, 3);
  }, [allPosts, post]);

  if (!post) {
    return (
      <div className="blog-page">
        <h2>Artikeln kunde inte hittas</h2>
        <Link to="/blog" className="back-link">
          ← Tillbaka till bloggen
        </Link>
      </div>
    );
  }

  return (
    <>
      {/* === SEO-meta dynamiskt baserat på inlägget === */}
      <title>{post.title} | ProfitPlay</title>
      <meta name="description" content={post.meta_description} />
      {post.keywords && (
        <meta name="keywords" content={post.keywords.join(", ")} />
      )}

      {/* 🔹 Open Graph (för delning på sociala medier) */}
      <meta property="og:title" content={`${post.title} | ProfitPlay`} />
      <meta property="og:description" content={post.meta_description} />
      <meta property="og:type" content="article" />
      <meta property="og:image" content={post.image} />
      <meta
        property="og:url"
        content={`https://profitplay.se/blog/${post.id}`}
      />

      {/* === Innehåll === */}
      <div className="blog-page blog-post">
        <img
          src={post.image}
          alt={post.title}
          className="blog-post-thumb"
          loading="lazy"
          decoding="async"
        />
        <h1>{post.title}</h1>
        <p className="date">{new Date(post.date).toLocaleDateString()}</p>

        <div
          className="content"
          dangerouslySetInnerHTML={{
            __html: "<p>" + post.content.replace(/\n\n/g, "</p><p>") + "</p>",
          }}
        ></div>

        <section className="context-panels">
          <div className="context-panel">
            <h3>Relaterat</h3>
            <ul>
              {relatedPosts.map((related) => (
                <li key={related.id}>
                  <Link to={`/blog/${related.id}`}>
                    {related.keywords?.[0] || related.title}
                  </Link>
                </li>
              ))}
              {relatedPosts.length === 0 && (
                <li>Fler guider publiceras snart.</li>
              )}
            </ul>
          </div>
          <div className="context-panel">
            <h3>Populärt just nu</h3>
            <ul>
              {popularPosts.map((popular) => (
                <li key={popular.id}>
                  <Link to={`/blog/${popular.id}`}>
                    {popular.keywords?.[0] || popular.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <AffiliateButton />
        <Link to="/blog" className="back-link">
          ← Tillbaka till bloggen
        </Link>
      </div>
    </>
  );
}

export default BlogPost;





