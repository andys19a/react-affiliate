import Link from 'next/link'
import { getCategories } from '@/lib/blogPosts'
import Breadcrumbs from '@/components/Breadcrumbs'
import '@/css/Categories.css'

export const metadata = {
  title: 'Kategorier – Value Betting guider | ProfitPlay',
  description:
    'Utforska guider och artiklar via kategori och underkategori. Hitta rätt innehåll om value betting, verktyg och psykologi.',
}

export default function KategoriPage() {
  const categories = getCategories()

  return (
    <div className="categories-page">
      <Breadcrumbs items={[{ to: '/', label: 'Hem' }, { label: 'Kategorier' }]} />
      <h1>Kategorier</h1>
      <p className="intro">
        Utforska guider och artiklar via kategori och underkategori. Följ
        brödsmulorna för att navigera till rätt innehåll.
      </p>

      <div className="taxonomy-grid">
        {categories.map((category) => (
          <div className="taxonomy-card" key={category.slug}>
            <h3>
              <Link href={`/kategori/${category.slug}`}>{category.name}</Link>
            </h3>
            <p className="taxonomy-meta">{category.count} artiklar</p>
            <ul>
              {category.subcategories.map((sub) => (
                <li key={sub.slug}>
                  <Link href={`/kategori/${category.slug}/${sub.slug}`}>
                    {sub.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
