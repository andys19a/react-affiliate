'use client'

import { useState } from 'react'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'

export default function BlogListClient({ posts }) {
  const [currentPage, setCurrentPage] = useState(1)
  const postsPerPage = 5

  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)

  const nextPage = () => {
    if (currentPage < Math.ceil(posts.length / postsPerPage)) {
      setCurrentPage(currentPage + 1)
    }
  }

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  return (
    <div className="blog-page">
      <Breadcrumbs items={[{ to: '/', label: 'Hem' }, { label: 'Blogg' }]} />
      <h1>Value betting guider</h1>
      <p className="intro">
        Lär dig grunderna och strategin inom value betting – få en fördel mot
        spelbolagen genom att utnyttja deras felaktiga odds.
      </p>

      <div className="blog-list">
        {currentPosts.map((post) => (
          <article key={post.id} className="blog-card">
            <img src={post.image} className="blog-thumb" alt={post.title} />
            <div className="blog-content">
              <div className="blog-header">
                <h2>{post.title}</h2>
                <p className="date">
                  {new Date(post.date).toLocaleDateString('sv-SE')}
                </p>
              </div>
              <p className="excerpt">{post.excerpt}</p>
              <Link href={`/blogg/${post.slug}`} className="read-more">
                Läs mer →
              </Link>
            </div>
          </article>
        ))}
      </div>

      <div className="pagination">
        <button onClick={prevPage} disabled={currentPage === 1}>
          ← Föregående
        </button>
        <span>
          Sida {currentPage} av {Math.ceil(posts.length / postsPerPage)}
        </span>
        <button
          onClick={nextPage}
          disabled={currentPage === Math.ceil(posts.length / postsPerPage)}
        >
          Nästa →
        </button>
      </div>
    </div>
  )
}
