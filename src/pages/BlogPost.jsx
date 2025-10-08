import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "../css/Blog.css";

function BlogPost() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch("/data/blogPosts.json")
      .then((res) => res.json())
      .then((data) => {
        const foundPost = data.find((p) => p.id === Number(id));
        setPost(foundPost);
      })
      .catch((err) => console.error("Fel vid hämtning:", err));
  }, [id]);

  if (!post) {
    return (
      <div className="blog-page">
        <h2>Artikeln kunde inte hittas</h2>
        <Link to="/blog" className="back-link">← Tillbaka till bloggen</Link>
      </div>
    );
  }

  return (
    <div className="blog-page blog-post">
      <img src={post.image} alt={post.title} className="blog-post-thumb" />
      <h1>{post.title}</h1>
      <p className="date">{new Date(post.date).toLocaleDateString()}</p>

      <p className="content">{post.content}</p>

      <Link to="/blog" className="back-link">← Tillbaka till bloggen</Link>
    </div>
  );
}

export default BlogPost;


