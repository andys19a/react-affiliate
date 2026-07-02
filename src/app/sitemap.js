import { getAllPosts, getCategories } from '@/lib/blogPosts'

const BASE = 'https://www.profitplay.se'
const NOW = new Date('2026-07-02')

export default function sitemap() {
  const posts = getAllPosts()
  const categories = getCategories()

  const staticPages = [
    { url: BASE,                    lastModified: NOW, changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${BASE}/recension`,     lastModified: NOW, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/start`,         lastModified: NOW, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/results`,       lastModified: NOW, changeFrequency: 'weekly',  priority: 0.8 },
    { url: `${BASE}/blogg`,         lastModified: NOW, changeFrequency: 'weekly',  priority: 0.8 },
    { url: `${BASE}/om`,            lastModified: NOW, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/kategori`,      lastModified: NOW, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/faq`,           lastModified: NOW, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE}/contact`,       lastModified: NOW, changeFrequency: 'yearly',  priority: 0.4 },
    { url: `${BASE}/sitemap`,       lastModified: NOW, changeFrequency: 'weekly',  priority: 0.3 },
  ]

  const categoryPages = categories.map((cat) => ({
    url: `${BASE}/kategori/${cat.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  const subcategoryPages = categories.flatMap((cat) =>
    cat.subcategories.map((sub) => ({
      url: `${BASE}/kategori/${cat.slug}/${sub.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.65,
    }))
  )

  const blogPages = posts.map((post) => ({
    url: `${BASE}/blogg/${post.slug}`,
    lastModified: NOW,
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  return [...staticPages, ...categoryPages, ...subcategoryPages, ...blogPages]
}
