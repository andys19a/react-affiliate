import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../css/Blog.css";

function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("/data/blogPosts.json")
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => console.error("Fel vid hämtning:", err));
  }, []);

  return (
    <div className="blog-page">
      <h1>Om Value Betting</h1>
      <p className="intro">
        Lär dig grunderna, strategin och psykologin bakom value betting – skrivet
        av en erfaren RebelBetting-användare.
      </p>

      <div className="blog-list">
        {posts.map((post) => (
          <article key={post.id} className="blog-card">
            <img src={post.image}   className="blog-thumb" />
            <div className="blog-content">
              <div className="blog-header">
                <h2>{post.title}</h2>
                <p className="date">{new Date(post.date).toLocaleDateString()}</p>
              </div>
              <p className="excerpt">{post.excerpt}</p>
              <Link to={`/blog/${post.id}`} className="read-more">
                Läs mer →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export default Blog;


