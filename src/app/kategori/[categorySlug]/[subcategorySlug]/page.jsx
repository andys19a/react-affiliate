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

const subcategoryIntros = {
  'grunder': 'Förstå grunderna i value betting – vad EV (Expected Value) är, hur oddsvärde fungerar och varför den här strategin slår spelbolagen på lång sikt. Det här är startpunkten för alla som vill lära sig value betting på riktigt.',
  'strategier': 'Från bankroll management och insatsstrategi till långsiktiga planer och dagliga rutiner. Det är strategin och disciplinen – inte enskilda spel – som avgör om du lyckas med value betting.',
  'resultat': 'Hur mycket kan du faktiskt tjäna på value betting? Här går vi igenom realistiska siffror, ROI-förväntningar och vad som krävs för att bygga en stabil sidoinkomst med rätt strategi.',
  'rebelbetting': 'RebelBetting är ett av marknadens mest populära verktyg för value betting. Här hittar du allt om hur verktyget fungerar, hur du ställer in det och hur du maximerar din avkastning – oavsett om du är nybörjare eller erfaren.',
  'mentalt-spel': 'Psykologi, varians och förmågan att hålla sig till strategin när det svänger – det mentala spelet är det som oftast avgör om en value bettor lyckas eller misslyckas. Här utforskar vi hur du bygger rätt mindset.',
  'kontohantering': 'Praktiska råd om hur du hanterar dina spelbolagskonton smart. Hur du undviker limitering, fördelar din volym och håller fler konton aktiva längre – allt för att maximera din totala kapacitet.',
}

export async function generateMetadata({ params }) {
  const posts = getPostsBySubcategorySlug(params.categorySlug, params.subcategorySlug)
  if (posts.length === 0) return { title: 'Underkategori hittades inte' }
  const intro = subcategoryIntros[params.subcategorySlug]
  const description = intro || `Alla guider och artiklar inom ${posts[0].subcategory} på ProfitPlay.`
  return {
    title: `${posts[0].subcategory} – ${posts[0].category} | ProfitPlay`,
    description,
    openGraph: {
      title: `${posts[0].subcategory} – ${posts[0].category} | ProfitPlay`,
      description,
      url: `https://www.profitplay.se/kategori/${params.categorySlug}/${params.subcategorySlug}`,
      type: 'website',
      images: [{ url: 'https://www.profitplay.se/images/Thumbnail.png', width: 1200, height: 630 }],
    },
  }
}

export default function SubcategoryPage({ params }) {
  const posts = getPostsBySubcategorySlug(params.categorySlug, params.subcategorySlug)
  if (posts.length === 0) notFound()

  const categoryName = posts[0].category
  const subcategoryName = posts[0].subcategory

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Hem', item: 'https://profitplay.se/' },
      { '@type': 'ListItem', position: 2, name: 'Kategorier', item: 'https://profitplay.se/kategori' },
      { '@type': 'ListItem', position: 3, name: categoryName, item: `https://profitplay.se/kategori/${params.categorySlug}` },
      { '@type': 'ListItem', position: 4, name: subcategoryName, item: `https://profitplay.se/kategori/${params.categorySlug}/${params.subcategorySlug}` },
    ],
  }

  return (
    <div className="articles-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <Breadcrumbs
        items={[
          { to: '/', label: 'Hem' },
          { to: '/kategori', label: 'Kategorier' },
          { to: `/kategori/${params.categorySlug}`, label: categoryName },
          { label: subcategoryName },
        ]}
      />
      <h1>{subcategoryName}</h1>
      {subcategoryIntros[params.subcategorySlug] ? (
        <p className="intro">{subcategoryIntros[params.subcategorySlug]}</p>
      ) : (
        <p className="intro">
          Alla guider och artiklar inom {subcategoryName}. Välj en rubrik för att läsa mer.
        </p>
      )}

      <div className="taxonomy-grid">
        {posts.map((post) => (
          <div className="taxonomy-card" key={post.slug}>
            <h4>
              <Link href={`/blogg/${post.slug}`}>{post.title}</Link>
            </h4>
            <p className="taxonomy-excerpt">{post.excerpt}</p>
            <p className="taxonomy-meta">
              {new Date(post.date).toLocaleDateString('sv-SE')}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
