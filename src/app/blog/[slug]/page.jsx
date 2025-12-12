import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getAllPosts, getPostBySlug, getAllSlugs } from '@/lib/blogPosts'
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

  const allPosts = getAllPosts()

  const relatedPosts = allPosts
    .filter(
      (p) =>
        p.slug !== post.slug &&
        (p.subcategory === post.subcategory || p.category === post.category)
    )
    .slice(0, 3)

  const popularPosts = allPosts
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3)

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
      '@id': `https://profitplay.se/blog/${post.slug}`,
    },
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify([articleLd, faqLd]) }}
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
                <Link href={`/blog/${related.slug}`}>
                  {related.keywords?.[0] || related.title}
                </Link>
              </li>
            ))}
            {relatedPosts.length === 0 && <li>Fler guider publiceras snart.</li>}
          </ul>
        </div>
        <div className="context-panel">
          <h3>Populärt just nu</h3>
          <ul>
            {popularPosts.map((popular) => (
              <li key={popular.slug}>
                <Link href={`/blog/${popular.slug}`}>
                  {popular.keywords?.[0] || popular.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <AffiliateButton />
      <Link href="/blog" className="back-link">
        ← Tillbaka till bloggen
      </Link>
    </div>
  )
}
