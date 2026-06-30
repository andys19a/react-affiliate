import Image from 'next/image'
import Link from 'next/link'
import AffiliateBanner from '@/components/AffiliateBanner'
import RoiCounter from '@/components/RoiCounter'
import Breadcrumbs from '@/components/Breadcrumbs'
import '@/css/Results.css'

export const metadata = {
  title: { absolute: 'Value betting-resultat – +190 000 kr med RebelBetting | ProfitPlay' },
  description:
    'Faktiska siffror: +190 000 kr på 2 år, 25–35 % månadsROI och 10 000+ bets. Ingen marknadsföring – mina verkliga resultat från 2 år med RebelBetting.',
  keywords:
    'value betting resultat, RebelBetting resultat, ROI betting, bankroll management, tjäna pengar på betting',
  alternates: { canonical: '/results' },
  openGraph: {
    title: 'Resultat från value betting – ProfitPlay',
    description:
      'Graf och sammanfattning av mina resultat med value betting och RebelBetting. Statistik, ROI och nyckeltal.',
    type: 'website',
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
    <div className="results-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <Breadcrumbs items={[{ to: '/', label: 'Hem' }, { label: 'Mina resultat' }]} />

      <section className="intro">
        <h1>Mina resultat</h1>
        <p>
          Här kan du se mina faktiska resultat från <strong>value betting</strong> under
          de senaste åren. Jag har använt <strong>RebelBetting</strong> i över två år
          och har konsekvent genererat vinster varje månad tack vare en långsiktig strategi
          och tydlig bankrollhantering.
        </p>
      </section>

      <section className="results-image">
        <Image
          src="/images/resultat.png"
          alt="Graf som visar verkliga value betting-resultat med stabil och ökande avkastning via RebelBetting"
          width={1200}
          height={630}
          style={{ width: '100%', height: 'auto' }}
          priority
        />
        <p className="caption">
          Exempel på mina resultat – stabil och ökande avkastning med hjälp av RebelBetting.
        </p>
      </section>

      <section className="summary">
        <h2>Sammanfattning av resultaten</h2>
        <ul>
          <li>
            <strong>+<RoiCounter target={190000} /> kr</strong> sedan start
          </li>
          <li><strong>25–35 %</strong> genomsnittlig månadsavkastning</li>
          <li><strong>Över 10 000 spel</strong> placerade med hjälp av RebelBetting</li>
          <li><strong>95 %+</strong> av spelen värdepositiva (EV+)</li>
        </ul>
        <p>
          Det viktigaste inom value betting är att vara konsekvent och inte låta kortsiktiga
          resultat påverka strategin. Långsiktigt slår matematik alltid känsla.
        </p>
      </section>

      <section className="summary">
        <h2>Vill du förstå hur det fungerar?</h2>
        <ul>
          <li><Link href="/blogg/vad-ar-value-betting">Vad är value betting och varför fungerar det?</Link></li>
          <li><Link href="/blogg/hur-rebelbetting-fungerar">Hur RebelBetting fungerar – komplett guide</Link></li>
          <li><Link href="/blogg/bankroll-management">Bankroll management – nyckeln till stabil avkastning</Link></li>
          <li><Link href="/blogg/langsiktig-strategi-value-betting">Så bygger du en långsiktig strategi</Link></li>
          <li><Link href="/blogg/hur-mycket-tjana-value-betting">Hur mycket kan du tjäna realistiskt?</Link></li>
        </ul>
      </section>

      <section className="cta">
        <h2>Vill du uppnå liknande resultat?</h2>
        <p>
          Prova <strong>RebelBetting</strong> gratis och upptäck hur du också kan bygga
          en stabil inkomst med smart betting – utan tur, bara statistik.
        </p>
        <AffiliateBanner />
      </section>
    </div>
  )
}
