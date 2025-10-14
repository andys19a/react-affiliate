import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../css/Blog.css";

function Blog() {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 5;

  useEffect(() => {
    fetch("/data/blogPosts.json")
      .then((res) => res.json())
      .then((data) => {
        // Sortera nyaste först
        const sorted = data.sort((a, b) => new Date(b.date) - new Date(a.date));
        setPosts(sorted);
      })
      .catch((err) => console.error("Fel vid hämtning:", err));
  }, []);

  // Beräkna vilka inlägg som ska visas på aktuell sida
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Byt sida
  const nextPage = () => {
    if (currentPage < Math.ceil(posts.length / postsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="blog-page">
      <h1>Om Value Betting</h1>
      <p className="intro">
        Lär dig grunderna, strategin och psykologin bakom value betting – skrivet
        av en erfaren RebelBetting-användare.
      </p>

      <div className="blog-list">
        {currentPosts.map((post) => (
          <article key={post.id} className="blog-card">
            <img src={post.image} className="blog-thumb" alt={post.title} />
            <div className="blog-content">
              <div className="blog-header">
                <h2>{post.title}</h2>
                <p className="date">
                  {new Date(post.date).toLocaleDateString()}
                </p>
              </div>
              <p className="excerpt">{post.excerpt}</p>
              <Link to={`/blog/${post.id}`} className="read-more">
                Läs mer →
              </Link>
            </div>
          </article>
        ))}
      </div>

      {/* Navigeringspilar */}
      <div className="pagination">
        <button onClick={prevPage} disabled={currentPage === 1}>
          ← Föregående
        </button>
        <span>Sida {currentPage} av {Math.ceil(posts.length / postsPerPage)}</span>
        <button
          onClick={nextPage}
          disabled={currentPage === Math.ceil(posts.length / postsPerPage)}
        >
          Nästa →
        </button>
      </div>
    </div>
  );
}

export default Blog;
