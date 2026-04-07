import ResultsClient from '@/components/ResultsClient'
import '@/css/Results.css'

export const metadata = {
  title: 'Resultat – Min value betting-resa med RebelBetting | ProfitPlay',
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
    images: [{ url: '/images/resultat.png' }],
  },
}

export default function ResultsPage() {
  return <ResultsClient />
}
