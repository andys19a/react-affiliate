import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getCategories, getPostsBySubcategorySlug } from '@/lib/blogPosts'
import Breadcrumbs from '@/components/Breadcrumbs'
import '@/css/Categories.css'

export async function generateStaticParams() {
  const categories = getCategories()
  const params = []
  for (const cat of categories) {
    for (const sub of cat.subcategories) {
      params.push({ categorySlug: cat.slug, subcategorySlug: sub.slug })
    }
  }
  return params
}

export async function generateMetadata({ params }) {
  const posts = getPostsBySubcategorySlug(params.categorySlug, params.subcategorySlug)
  if (posts.length === 0) return { title: 'Underkategori hittades inte' }
  return {
    title: `${posts[0].subcategory} – ${posts[0].category} | ProfitPlay`,
    description: `Alla guider och artiklar inom ${posts[0].subcategory} på ProfitPlay.`,
  }
}

export default function SubcategoryPage({ params }) {
  const posts = getPostsBySubcategorySlug(params.categorySlug, params.subcategorySlug)
  if (posts.length === 0) notFound()

  const categoryName = posts[0].category
  const subcategoryName = posts[0].subcategory

  return (
    <div className="articles-page">
      <Breadcrumbs
        items={[
          { to: '/', label: 'Hem' },
          { to: '/kategori', label: 'Kategorier' },
          { to: `/kategori/${params.categorySlug}`, label: categoryName },
          { label: subcategoryName },
        ]}
      />
      <h1>{subcategoryName}</h1>
      <p className="intro">
        Alla guider och artiklar inom {subcategoryName}. Välj en rubrik för att
        läsa mer.
      </p>

      <div className="taxonomy-grid">
        {posts.map((post) => (
          <div className="taxonomy-card" key={post.slug}>
            <h4>
              <Link href={`/blog/${post.slug}`}>{post.title}</Link>
            </h4>
            <p className="taxonomy-meta">
              {new Date(post.date).toLocaleDateString('sv-SE')} – {post.excerpt}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
