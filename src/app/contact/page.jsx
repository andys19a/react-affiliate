import ContactClient from '@/components/ContactClient'
import '@/css/Contact.css'

export const metadata = {
  title: { absolute: 'Kontakt – frågor om value betting & samarbeten | ProfitPlay' },
  description: 'Har du frågor om value betting, vill samarbeta eller ge feedback? Kontakta André på ProfitPlay – svar inom 24 timmar på vardagar.',
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Kontakt – frågor om value betting & samarbeten | ProfitPlay',
    description: 'Har du frågor om value betting, vill samarbeta eller ge feedback? Kontakta André på ProfitPlay.',
    url: 'https://www.profitplay.se/contact',
    type: 'website',
    images: [{ url: 'https://www.profitplay.se/images/Thumbnail.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kontakt – frågor om value betting & samarbeten | ProfitPlay',
    description: 'Har du frågor om value betting, vill samarbeta eller ge feedback? Kontakta André på ProfitPlay.',
    images: ['https://www.profitplay.se/images/Thumbnail.png'],
  },
}

export default function ContactPage() {
  return <ContactClient />
}
