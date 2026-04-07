import { getAllPosts, getCategories } from '@/lib/blogPosts'

const BASE = 'https://www.profitplay.se'

export default function sitemap() {
  const posts = getAllPosts()
  const categories = getCategories()

  const staticPages = [
    { url: BASE, lastModified: new Date() },
    { url: `${BASE}/blogg`, lastModified: new Date() },
    { url: `${BASE}/kategori`, lastModified: new Date() },
    { url: `${BASE}/results`, lastModified: new Date() },
    { url: `${BASE}/start`, lastModified: new Date() },
    { url: `${BASE}/recension`, lastModified: new Date() },
    { url: `${BASE}/faq`, lastModified: new Date() },
    { url: `${BASE}/contact`, lastModified: new Date() },
  ]

  const categoryPages = categories.map((cat) => ({
    url: `${BASE}/kategori/${cat.slug}`,
    lastModified: new Date(),
  }))

  const subcategoryPages = categories.flatMap((cat) =>
    cat.subcategories.map((sub) => ({
      url: `${BASE}/kategori/${cat.slug}/${sub.slug}`,
      lastModified: new Date(),
    }))
  )

  const blogPages = posts.map((post) => ({
    url: `${BASE}/blogg/${post.slug}`,
    lastModified: new Date(post.date),
  }))

  return [...staticPages, ...categoryPages, ...subcategoryPages, ...blogPages]
}
