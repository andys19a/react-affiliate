import FaqClient from '@/components/FaqClient'
import '@/css/Faq.css'

export const metadata = {
  title: 'ProfitPlay – Vanliga frågor (FAQ)',
  description:
    'Vanliga frågor om value betting, bankroll management, limiteringar och hur ProfitPlay arbetar med strategier.',
  keywords: 'value betting FAQ, vanliga frågor betting, RebelBetting frågor, bankroll frågor',
}

export default function FaqPage() {
  return <FaqClient />
}
