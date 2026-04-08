import ContactClient from '@/components/ContactClient'
import '@/css/Contact.css'

export const metadata = {
  title: 'Kontakt | ProfitPlay',
  description: 'Kontakta ProfitPlay med frågor, samarbeten eller feedback om value betting.',
  openGraph: {
    title: 'Kontakt | ProfitPlay',
    description: 'Kontakta ProfitPlay med frågor, samarbeten eller feedback om value betting.',
    url: 'https://www.profitplay.se/contact',
    type: 'website',
    images: [{ url: 'https://www.profitplay.se/images/Thumbnail.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kontakt | ProfitPlay',
    description: 'Kontakta ProfitPlay med frågor, samarbeten eller feedback om value betting.',
    images: ['https://www.profitplay.se/images/Thumbnail.png'],
  },
}

export default function ContactPage() {
  return <ContactClient />
}
