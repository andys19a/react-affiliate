import FaqClient, { faqs } from '@/components/FaqClient'
import '@/css/Faq.css'

export const metadata = {
  title: { absolute: 'Vanliga frågor om value betting och RebelBetting | ProfitPlay' },
  description:
    'Svar på de vanligaste frågorna om value betting, RebelBetting, bankroll management och limiteringar. Allt du behöver veta innan du börjar.',
  keywords: 'value betting FAQ, vanliga frågor betting, RebelBetting frågor, bankroll frågor',
  openGraph: {
    title: 'Vanliga frågor om value betting – ProfitPlay',
    description: 'Vanliga frågor om value betting, bankroll management, limiteringar och hur ProfitPlay arbetar med strategier.',
    type: 'website',
    url: 'https://www.profitplay.se/faq',
    images: [{ url: 'https://www.profitplay.se/images/Thumbnail.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vanliga frågor om value betting – ProfitPlay',
    description: 'Vanliga frågor om value betting, bankroll management, limiteringar och hur ProfitPlay arbetar med strategier.',
    images: ['https://www.profitplay.se/images/Thumbnail.png'],
  },
}

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: { '@type': 'Answer', text: faq.answer },
  })),
}

const breadcrumbLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Hem', item: 'https://www.profitplay.se/' },
    { '@type': 'ListItem', position: 2, name: 'Vanliga frågor (FAQ)', item: 'https://www.profitplay.se/faq' },
  ],
}

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([faqLd, breadcrumbLd]) }}
      />
      <FaqClient />
    </>
  )
}
