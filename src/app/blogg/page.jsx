import Link from 'next/link'
import { getAllPosts } from '@/lib/blogPosts'
import Breadcrumbs from '@/components/Breadcrumbs'
import '@/css/Blog.css'

export const metadata = {
  title: 'Value betting guider – strategier, verktyg & resultat | ProfitPlay',
  description:
    'Alla guider om value betting samlade på ett ställe. Lär dig EV, bankroll management, hur RebelBetting fungerar och hur du bygger en stabil sidoinkomst.',
  keywords:
    'value betting, RebelBetting, bankroll management, betting strategi, sure betting, tjäna pengar på betting, slå spelbolagen',
  openGraph: {
    title: 'Value betting guider – strategier, verktyg & resultat | ProfitPlay',
    description:
      'Alla guider om value betting samlade på ett ställe. Lär dig EV, bankroll management och hur du bygger en stabil sidoinkomst.',
    url: 'https://www.profitplay.se/blogg',
    type: 'website',
    images: [{ url: 'https://www.profitplay.se/images/Thumbnail.png', width: 1200, height: 630 }],
  },
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <div className="blog-page">
      <Breadcrumbs items={[{ to: '/', label: 'Hem' }, { label: 'Blogg' }]} />
      <h1>Value betting guider</h1>
      <p className="intro">
        Lär dig grunderna och strategin inom value betting – få en fördel mot
        spelbolagen genom att utnyttja deras felaktiga odds.
      </p>

      <div className="blog-list">
        {posts.map((post) => (
          <article key={post.id} className="blog-card">
            <img src={post.image} className="blog-thumb" alt={post.title} loading="lazy" />
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
    </div>
  )
}
