import ResultsClient from '@/components/ResultsClient'
import '@/css/Results.css'

export const metadata = {
  title: { absolute: 'Resultat – Min value betting-resa med RebelBetting | ProfitPlay' },
  description:
    'Se mina faktiska resultat från value betting. Stabil avkastning månad för månad med hjälp av RebelBetting, disciplin och bankroll management.',
  keywords:
    'value betting resultat, RebelBetting resultat, ROI betting, bankroll management, tjäna pengar på betting',
  openGraph: {
    title: 'Resultat från value betting – ProfitPlay',
    description:
      'Graf och sammanfattning av mina resultat med value betting och RebelBetting. Statistik, ROI och nyckeltal.',
    type: 'article',
    url: 'https://www.profitplay.se/results',
    images: [{ url: 'https://www.profitplay.se/images/resultat.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Resultat från value betting – ProfitPlay',
    description: 'Graf och sammanfattning av mina resultat med value betting och RebelBetting. Statistik, ROI och nyckeltal.',
    images: ['https://www.profitplay.se/images/resultat.png'],
  },
}

const breadcrumbLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Hem', item: 'https://www.profitplay.se/' },
    { '@type': 'ListItem', position: 2, name: 'Mina resultat', item: 'https://www.profitplay.se/results' },
  ],
}

export default function ResultsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <ResultsClient />
    </>
  )
}
