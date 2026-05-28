import Link from 'next/link'
import { getCategories } from '@/lib/blogPosts'
import Breadcrumbs from '@/components/Breadcrumbs'
import '@/css/Categories.css'

export const metadata = {
  title: { absolute: 'Kategorier – Value Betting guider | ProfitPlay' },
  description:
    'Utforska alla guider om value betting, verktyg och psykologi. Hitta rätt innehåll oavsett om du är nybörjare eller erfaren spelare.',
  alternates: { canonical: '/kategori' },
  openGraph: {
    title: 'Kategorier – Value Betting guider | ProfitPlay',
    description: 'Utforska alla guider om value betting, verktyg och psykologi på ProfitPlay.',
    url: 'https://www.profitplay.se/kategori',
    type: 'website',
    images: [{ url: 'https://www.profitplay.se/images/Thumbnail.png', width: 1200, height: 630 }],
  },
}

const categoryDescriptions = {
  'value-betting':
    'Value betting är kärnan i en lönsam bettingstrategi. Istället för att spela på känsla bygger metoden på matematik och sannolikhetslära – du spelar bara när oddset är för högt i förhållande till den verkliga sannolikheten. Här hittar du guider om grunderna, strategier och hur du bygger en stabil avkastning.',
  'verktyg':
    'Rätt verktyg gör value betting enklare och mer lönsamt. Programvara som RebelBetting identifierar automatiskt felprissatta odds i realtid – utan att du behöver analysera hundratals matcher manuellt. Här hittar du djupgående guider om de mest populära verktygen.',
  'risk-psykologi':
    'Den psykologiska sidan av betting underskattas av de flesta. Att förstå varians, hantera förlustsvackor och undvika impulsiva beslut är lika viktigt som att hitta rätt spel. Här utforskar vi riskhantering, mentalt spel och praktiska tips för att hålla disciplinen.',
}

export default function KategoriPage() {
  const categories = getCategories()

  return (
    <div className="categories-page">
      <Breadcrumbs items={[{ to: '/', label: 'Hem' }, { label: 'Kategorier' }]} />
      <h1>Kategorier</h1>
      <p className="intro">
        Välj en kategori nedan för att hitta rätt guider. Innehållet täcker allt från
        grunderna i value betting och verktygsguider till psykologi och riskhantering –
        oavsett om du precis börjat eller vill fördjupa din strategi.
      </p>

      <div className="taxonomy-grid">
        {categories.map((category) => (
          <div className="taxonomy-card" key={category.slug}>
            <h3>
              <Link href={`/kategori/${category.slug}`}>{category.name}</Link>
            </h3>
            <p className="taxonomy-meta">{category.count} artiklar</p>
            {categoryDescriptions[category.slug] && (
              <p className="category-description">{categoryDescriptions[category.slug]}</p>
            )}
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
