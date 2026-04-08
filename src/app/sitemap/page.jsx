import Link from 'next/link'
import { getAllPosts, getCategories } from '@/lib/blogPosts'
import Breadcrumbs from '@/components/Breadcrumbs'
import '@/css/Categories.css'

const staticPages = [
  { path: '/', label: 'Hem' },
  { path: '/results', label: 'Resultat' },
  { path: '/start', label: 'Kom igång' },
  { path: '/recension', label: 'Recension' },
  { path: '/faq', label: 'FAQ' },
  { path: '/contact', label: 'Kontakt' },
  { path: '/blogg', label: 'Blogg' },
  { path: '/kategori', label: 'Kategorier' },
]

export const metadata = {
  title: 'Sitemap – ProfitPlay',
  description: 'Översikt över alla sidor, kategorier och artiklar på ProfitPlay.',
}

export default function SitemapPage() {
  const posts = getAllPosts()
  const categories = getCategories()

  return (
    <div className="sitemap-page">
      <Breadcrumbs items={[{ to: '/', label: 'Hem' }, { label: 'Sitemap' }]} />
      <h1>HTML Sitemap</h1>
      <p className="intro">
        Här hittar du en användarvänlig översikt över alla indexerbara sidor,
        kategorier och artiklar.
      </p>

      <div className="sitemap-sections">
        <div className="sitemap-section">
          <h3>Huvudsidor</h3>
          <ul>
            {staticPages.map((page) => (
              <li key={page.path}>
                <Link href={page.path}>{page.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="sitemap-section">
          <h3>Kategorier &amp; underkategorier</h3>
          <ul>
            {categories.map((category) => (
              <li key={category.slug}>
                <Link href={`/kategori/${category.slug}`}>{category.name}</Link>
                <ul>
                  {category.subcategories.map((sub) => (
                    <li key={sub.slug}>
                      <Link href={`/kategori/${category.slug}/${sub.slug}`}>
                        {sub.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>

        <div className="sitemap-section">
          <h3>Artiklar</h3>
          <ul>
            {posts.map((post) => (
              <li key={post.slug}>
                <Link href={`/blogg/${post.slug}`}>{post.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
