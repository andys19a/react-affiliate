import FaqClient from '@/components/FaqClient'
import '@/css/Faq.css'

export const metadata = {
  title: 'ProfitPlay – Vanliga frågor (FAQ)',
  description:
    'Vanliga frågor om value betting, bankroll management, limiteringar och hur ProfitPlay arbetar med strategier.',
  keywords: 'value betting FAQ, vanliga frågor betting, RebelBetting frågor, bankroll frågor',
}

const breadcrumbLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Hem', item: 'https://profitplay.se/' },
    { '@type': 'ListItem', position: 2, name: 'Vanliga frågor (FAQ)', item: 'https://profitplay.se/faq' },
  ],
}

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <FaqClient />
    </>
  )
}
