import { notFound } from 'next/navigation'
import Link from 'next/link'
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
    title: `${post.title} | ProfitPlay`,
    description: post.meta_description,
    keywords: post.keywords?.join(', '),
    openGraph: {
      title: `${post.title} | ProfitPlay`,
      description: post.meta_description,
      type: 'article',
      publishedTime: post.date,
      url: `https://www.profitplay.se/blog/${post.slug}`,
      images: [{ url: post.image, width: 1200, height: 630 }],
    },
  }
}

const articleFaqs = [
  {
    question: 'Är value betting lagligt?',
    answer:
      'Ja. Du spelar hos licensierade spelbolag men väljer bara odds där sannolikheten är till din fördel.',
  },
  {
    question: 'Behöver jag avancerad statistik för att börja?',
    answer:
      'Nej. Verktyg som RebelBetting gör grovarbetet åt dig – du fokuserar på att följa strategin och bankrullen.',
  },
  {
    question: 'Hur hanterar jag risken?',
    answer:
      'Sätt en tydlig insatsprocent av din kassa (t.ex. 1–3%) och håll dig till den även när resultaten svänger.',
  },
]

export default function BlogPost({ params }) {
  const post = getPostBySlug(params.slug)
  if (!post) notFound()

  const relatedPosts = getRelatedPosts(post)

  const contentHtml = post.content.includes('<')
    ? post.content
    : '<p>' + post.content.replace(/\n\n/g, '</p><p>') + '</p>'

  const datePublished = new Date(post.date).toISOString()

  const articleLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.meta_description,
    image: post.image,
    author: { '@type': 'Person', name: 'ProfitPlay' },
    datePublished,
    dateModified: datePublished,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://profitplay.se/blogg/${post.slug}`,
    },
  }

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Hem', item: 'https://profitplay.se/' },
      { '@type': 'ListItem', position: 2, name: 'Kategorier', item: 'https://profitplay.se/kategori' },
      { '@type': 'ListItem', position: 3, name: post.category, item: `https://profitplay.se/kategori/${post.categorySlug}` },
      { '@type': 'ListItem', position: 4, name: post.subcategory, item: `https://profitplay.se/kategori/${post.categorySlug}/${post.subcategorySlug}` },
      { '@type': 'ListItem', position: 5, name: post.title, item: `https://profitplay.se/blogg/${post.slug}` },
    ],
  }

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: articleFaqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  }

  return (
    <div className="blog-page blog-post">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([articleLd, faqLd, breadcrumbLd]) }}
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
      <img src={post.image} alt={post.title} className="blog-post-thumb" />
      <h1>{post.title}</h1>
      <p className="date">{new Date(post.date).toLocaleDateString('sv-SE')}</p>

      <div
        className="content"
        dangerouslySetInnerHTML={{ __html: contentHtml }}
      />

      <section className="article-faq">
        <h2>Vanliga frågor om value betting</h2>
        {articleFaqs.map((faq) => (
          <details key={faq.question}>
            <summary>{faq.question}</summary>
            <p>{faq.answer}</p>
          </details>
        ))}
      </section>

      <section className="context-panels">
        <div className="context-panel">
          <h3>Relaterat</h3>
          <ul>
            {relatedPosts.map((related) => (
              <li key={related.slug}>
                <Link href={`/blogg/${related.slug}`}>
                  {related.keywords?.[0] || related.title}
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
