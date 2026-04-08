import { getAllPosts, getCategories } from '@/lib/blogPosts'

const BASE = 'https://www.profitplay.se'

export default function sitemap() {
  const posts = getAllPosts()
  const categories = getCategories()

  const staticPages = [
    { url: BASE, lastModified: new Date(), changeFrequency: 'weekly', priority: 1.0 },
    { url: `${BASE}/recension`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/start`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/results`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE}/blogg`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE}/kategori`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/faq`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE}/contact`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.4 },
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
    lastModified: new Date(post.date),
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  return [...staticPages, ...categoryPages, ...subcategoryPages, ...blogPages]
}
