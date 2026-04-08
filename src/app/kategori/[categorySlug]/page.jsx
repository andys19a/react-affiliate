import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getCategories, getPostsByCategorySlug } from '@/lib/blogPosts'
import Breadcrumbs from '@/components/Breadcrumbs'
import '@/css/Categories.css'

export async function generateStaticParams() {
  return getCategories().map((cat) => ({ categorySlug: cat.slug }))
}

const categoryIntros = {
  'value-betting': {
    lead: 'Value betting är den mest beprövade metoden för att tjäna pengar på betting långsiktigt. Metoden bygger helt på matematik – du identifierar odds som är felprissatta och utnyttjar spelbolagets misstag. Här hittar du allt du behöver för att förstå, lära dig och tillämpa value betting från grunden.',
    body: 'Till skillnad från vanlig betting handlar value betting inte om att gissa rätt utfall. Det handlar om att hitta spel där den verkliga sannolikheten är högre än vad oddset antyder – vilket ger ett positivt förväntat värde (EV) på lång sikt. Kombinerat med rätt bankroll management och disciplin är det ett system som fungerar för tusentals spelare världen över.',
  },
  'verktyg': {
    lead: 'Att hitta value bets manuellt är möjligt men extremt tidskrävande. Med rätt verktyg kan du automatisera processen och fokusera på det som faktiskt spelar roll: att placera spelen och följa strategin.',
    body: 'De bästa verktygen för value betting skannar hundratals spelbolag i realtid, beräknar EV per spel och föreslår insatsstorlek baserat på din bankrulle. RebelBetting är marknadsledande och används av tiotusentals spelare. I den här kategorin hittar du allt om hur du väljer, ställer in och maximerar din avkastning med rätt verktyg.',
  },
  'risk-psykologi': {
    lead: 'Disciplin och riskhantering är minst lika viktigt som att hitta rätt spel. De flesta som misslyckas med value betting gör det inte för att strategin är fel – utan för att de inte håller sig till den när det svänger.',
    body: 'Varians, förlustsvackor och psykologiska fällor är oundvikliga delar av betting. Att förstå dem intellektuellt är inte tillräckligt – du behöver konkreta verktyg och rutiner för att hantera dem i praktiken. I den här kategorin utforskar vi det mentala spelet, riskhantering och hur du undviker de vanligaste fallgroparna.',
  },
}

export async function generateMetadata({ params }) {
  const posts = getPostsByCategorySlug(params.categorySlug)
  if (posts.length === 0) return { title: 'Kategori hittades inte' }
  const intro = categoryIntros[params.categorySlug]
  return {
    title: `${posts[0].category} – guider & artiklar | ProfitPlay`,
    description: intro
      ? intro.lead
      : `Utforska alla guider och artiklar inom ${posts[0].category} på ProfitPlay.`,
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

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Hem', item: 'https://profitplay.se/' },
      { '@type': 'ListItem', position: 2, name: 'Kategorier', item: 'https://profitplay.se/kategori' },
      { '@type': 'ListItem', position: 3, name: category.name, item: `https://profitplay.se/kategori/${category.slug}` },
    ],
  }

  return (
    <div className="subcategory-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <Breadcrumbs
        items={[
          { to: '/', label: 'Hem' },
          { to: '/kategori', label: 'Kategorier' },
          { label: category.name },
        ]}
      />
      <h1>{category.name}</h1>
      {categoryIntros[params.categorySlug] ? (
        <div className="category-intro">
          <p className="intro">{categoryIntros[params.categorySlug].lead}</p>
          <p>{categoryIntros[params.categorySlug].body}</p>
        </div>
      ) : (
        <p className="intro">Utforska underkategorierna nedan och gå vidare till artiklarna.</p>
      )}

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
