import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { getPostBySlug, getAllSlugs, getRelatedPosts } from '@/lib/blogPosts'
import Breadcrumbs from '@/components/Breadcrumbs'
import AffiliateButton from '@/components/AffiliateButton'
import '@/css/Blog.css'

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }) {
  const post = getPostBySlug(params.slug)
  if (!post) return { title: 'Sidan hittades inte' }
  return {
    title: { absolute: `${post.title} | ProfitPlay` },
    description: post.meta_description,
    keywords: post.keywords?.join(', '),
    alternates: { canonical: post.canonical || `/blogg/${post.slug}` },
    openGraph: {
      title: `${post.title} | ProfitPlay`,
      description: post.meta_description,
      type: 'article',
      publishedTime: post.date,
      url: `https://www.profitplay.se/blogg/${post.slug}`,
      images: [{ url: `https://www.profitplay.se${post.image}`, width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${post.title} | ProfitPlay`,
      description: post.meta_description,
      images: [`https://www.profitplay.se${post.image}`],
    },
  }
}

export default function BlogPost({ params }) {
  const post = getPostBySlug(params.slug)
  if (!post) notFound()

  const relatedPosts = getRelatedPosts(post)

  const contentHtml = post.content.includes('<')
    ? post.content
    : '<p>' + post.content.replace(/\n\n/g, '</p><p>') + '</p>'

  const datePublished = new Date(post.date).toISOString()
  const dateModified = post.dateModified
    ? new Date(post.dateModified).toISOString()
    : datePublished

  const articleLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.meta_description,
    image: {
      '@type': 'ImageObject',
      url: `https://www.profitplay.se${post.image}`,
      width: 1200,
      height: 630,
    },
    inLanguage: 'sv-SE',
    url: `https://www.profitplay.se/blogg/${post.slug}`,
    author: { '@type': 'Organization', name: 'ProfitPlay', url: 'https://www.profitplay.se' },
    publisher: {
      '@type': 'Organization',
      name: 'ProfitPlay',
      url: 'https://www.profitplay.se',
      logo: { '@type': 'ImageObject', url: 'https://www.profitplay.se/images/logo.png' },
    },
    datePublished,
    dateModified,
    ...(post.keywords?.length && { keywords: post.keywords.join(', ') }),
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://www.profitplay.se/blogg/${post.slug}`,
    },
  }

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Hem', item: 'https://www.profitplay.se/' },
      { '@type': 'ListItem', position: 2, name: 'Kategorier', item: 'https://www.profitplay.se/kategori' },
      { '@type': 'ListItem', position: 3, name: post.category, item: `https://www.profitplay.se/kategori/${post.categorySlug}` },
      { '@type': 'ListItem', position: 4, name: post.subcategory, item: `https://www.profitplay.se/kategori/${post.categorySlug}/${post.subcategorySlug}` },
      { '@type': 'ListItem', position: 5, name: post.title, item: `https://www.profitplay.se/blogg/${post.slug}` },
    ],
  }

  return (
    <div className="blog-page blog-post">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([articleLd, breadcrumbLd]) }}
      />

      <Breadcrumbs
        items={[
          { to: '/', label: 'Hem' },
          { to: '/kategori', label: 'Kategorier' },
          { to: `/kategori/${post.categorySlug}`, label: post.category },
          { to: `/kategori/${post.categorySlug}/${post.subcategorySlug}`, label: post.subcategory },
          { label: post.title },
        ]}
      />
      <Image src={post.image} alt={post.title} className="blog-post-thumb" width={1200} height={630} priority style={{ width: '100%', height: 'auto' }} />
      <h1>{post.title}</h1>
      <p className="date">{new Date(post.date).toLocaleDateString('sv-SE')}</p>

      <div
        className="content"
        dangerouslySetInnerHTML={{ __html: contentHtml }}
      />

      <section className="context-panels">
        <div className="context-panel">
          <h3>Relaterat</h3>
          <ul>
            {relatedPosts.map((related) => (
              <li key={related.slug}>
                <Link href={`/blogg/${related.slug}`}>
                  {related.title}
                </Link>
              </li>
            ))}
            {relatedPosts.length === 0 && <li>Fler guider publiceras snart.</li>}
          </ul>
        </div>
      </section>

      <AffiliateButton />
      <Link href="/blogg" className="back-link">
        ← Tillbaka till bloggen
      </Link>
    </div>
  )
}
