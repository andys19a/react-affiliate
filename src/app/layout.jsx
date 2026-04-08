import Script from 'next/script'
import { Poppins } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import '@/css/Layout.css'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600'],
  display: 'swap',
  variable: '--font-poppins',
})

export const metadata = {
  metadataBase: new URL('https://www.profitplay.se'),
  title: {
    default: 'Value betting – slå spelbolagen med matematik | ProfitPlay',
    template: '%s | ProfitPlay',
  },
  description:
    'Lär dig value betting, bankroll management och hur du slår spelbolagen med matematik. Läs guider, recensioner och strategier från ProfitPlay.',
  openGraph: {
    siteName: 'ProfitPlay',
    locale: 'sv_SE',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Value betting – slå spelbolagen med matematik | ProfitPlay',
    description: 'Lär dig value betting, bankroll management och hur du slår spelbolagen med matematik.',
    images: ['https://www.profitplay.se/images/Thumbnail.png'],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="sv" className={poppins.variable}>
      <body>
        <Script id="gtm" strategy="afterInteractive">{`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-WC9SJVZN');
        `}</Script>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WC9SJVZN"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
