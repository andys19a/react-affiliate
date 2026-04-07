import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getCategories, getPostsByCategorySlug } from '@/lib/blogPosts'
import Breadcrumbs from '@/components/Breadcrumbs'
import '@/css/Categories.css'

export async function generateStaticParams() {
  return getCategories().map((cat) => ({ categorySlug: cat.slug }))
}

export async function generateMetadata({ params }) {
  const posts = getPostsByCategorySlug(params.categorySlug)
  if (posts.length === 0) return { title: 'Kategori hittades inte' }
  return {
    title: `${posts[0].category} – guider & artiklar | ProfitPlay`,
    description: `Utforska alla guider och artiklar inom ${posts[0].category} på ProfitPlay.`,
  }
}

export default function CategoryPage({ params }) {
  const posts = getPostsByCategorySlug(params.categorySlug)
  if (posts.length === 0) notFound()

  const category = {
    name: posts[0].category,
    slug: params.categorySlug,
    count: posts.length,
  }

  const subcategories = posts.reduce((acc, post) => {
    if (!acc.some((s) => s.slug === post.subcategorySlug)) {
      acc.push({ name: post.subcategory, slug: post.subcategorySlug })
    }
    return acc
  }, [])

  return (
    <div className="subcategory-page">
      <Breadcrumbs
        items={[
          { to: '/', label: 'Hem' },
          { to: '/kategori', label: 'Kategorier' },
          { label: category.name },
        ]}
      />
      <h1>{category.name}</h1>
      <p className="intro">
        Utforska underkategorierna nedan och gå vidare till artiklarna.
      </p>

      <div className="taxonomy-grid">
        {subcategories.map((sub) => (
          <div className="taxonomy-card" key={sub.slug}>
            <h4>
              <Link href={`/kategori/${category.slug}/${sub.slug}`}>
                {sub.name}
              </Link>
            </h4>
            <p className="taxonomy-meta">Artiklar inom {sub.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
