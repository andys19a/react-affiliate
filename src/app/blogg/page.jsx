import Link from 'next/link'
import Image from 'next/image'
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
  twitter: {
    card: 'summary_large_image',
    title: 'Value betting guider – strategier, verktyg & resultat | ProfitPlay',
    description: 'Alla guider om value betting samlade på ett ställe.',
    images: ['https://www.profitplay.se/images/Thumbnail.png'],
  },
}

export default function BlogPage() {
  const posts = getAllPosts()

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Hem', item: 'https://www.profitplay.se/' },
      { '@type': 'ListItem', position: 2, name: 'Blogg', item: 'https://www.profitplay.se/blogg' },
    ],
  }

  const itemListLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Value betting guider',
    url: 'https://www.profitplay.se/blogg',
    itemListElement: posts.map((post, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      url: `https://www.profitplay.se/blogg/${post.slug}`,
      name: post.title,
    })),
  }

  return (
    <div className="blog-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([breadcrumbLd, itemListLd]) }}
      />
      <Breadcrumbs items={[{ to: '/', label: 'Hem' }, { label: 'Blogg' }]} />
      <h1>Value betting guider</h1>
      <p className="intro">
        Lär dig grunderna och strategin inom value betting – få en fördel mot
        spelbolagen genom att utnyttja deras felaktiga odds.
      </p>

      <div className="blog-list">
        {posts.map((post) => (
          <article key={post.id} className="blog-card">
            <Image src={post.image} className="blog-thumb" alt={post.title} width={600} height={340} />
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
