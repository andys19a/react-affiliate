import rawData from '../../public/data/blogPosts.json'

const data = rawData.filter((post) => post.slug && post.categorySlug && post.subcategorySlug)

export function getAllPosts() {
  return [...data].sort((a, b) => new Date(b.date) - new Date(a.date))
}

export function getPostBySlug(slug) {
  return data.find((post) => post.slug === slug) || null
}

export function getAllSlugs() {
  return data.map((post) => post.slug)
}

export function getCategories() {
  const grouped = data.reduce((acc, post) => {
    const existing = acc.find((item) => item.slug === post.categorySlug)
    if (existing) {
      if (!existing.subcategories.some((s) => s.slug === post.subcategorySlug)) {
        existing.subcategories.push({ name: post.subcategory, slug: post.subcategorySlug })
      }
      existing.count += 1
    } else {
      acc.push({
        name: post.category,
        slug: post.categorySlug,
        count: 1,
        subcategories: [{ name: post.subcategory, slug: post.subcategorySlug }],
      })
    }
    return acc
  }, [])
  return grouped
}

export function getPostsByCategorySlug(categorySlug) {
  return data.filter((post) => post.categorySlug === categorySlug)
}

export function getPostsBySubcategorySlug(categorySlug, subcategorySlug) {
  return data.filter(
    (post) => post.categorySlug === categorySlug && post.subcategorySlug === subcategorySlug
  )
}
