import Link from 'next/link'
import AffiliateBanner from '@/components/AffiliateBanner'
import AffiliateButton from '@/components/AffiliateButton'
import Table from '@/components/Tabel'
import '@/css/Home.css'

export const metadata = {
  title: 'Value Betting – så blir du lönsam på riktigt | ProfitPlay',
  description:
    'Lär dig value betting med matematik, sannolikhet och disciplin. Vi visar hur du använder RebelBetting och smart bankroll management för att växa hållbart.',
  openGraph: {
    title: 'Value Betting – så blir du lönsam på riktigt | ProfitPlay',
    description:
      'Lär dig value betting med matematik, sannolikhet och disciplin. Vi visar hur du använder RebelBetting för att växa hållbart.',
    url: 'https://www.profitplay.se',
    type: 'website',
  },
}

const websiteLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'ProfitPlay',
  url: 'https://www.profitplay.se',
  description: 'Guider och strategier för value betting – lär dig slå spelbolagen med matematik och disciplin.',
  inLanguage: 'sv-SE',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://www.profitplay.se/blogg?q={search_term_string}',
    'query-input': 'required name=search_term_string',
  },
}

const organizationLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'ProfitPlay',
  url: 'https://www.profitplay.se',
  logo: 'https://www.profitplay.se/images/logo.png',
  sameAs: [],
}

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Är value betting lagligt?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, value betting är en laglig metod. Du spelar på vanliga licensierade spelbolag men med en matematisk strategi som identifierar felprissatta odds. Följ alltid lokala regler och ansvarsfullt spelande.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hur stor bankrulle behöver jag för att börja med value betting?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Det beror på dina mål och risknivå. En bra tumregel är att bankrullen bör vara minst 50 gånger din typiska insatsstorlek. Med 1–3 % per spel och en bankrulle på 5 000–10 000 kr kan du komma igång på ett tryggt sätt.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kan jag börja med value betting som helt ny?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolut. Du behöver inte kunna avancerad statistik – verktyg som RebelBetting gör analysen åt dig. Börja med att lära dig grunderna om value betting och EV, sätt en bankrulle och följ rekommendationerna steg för steg.',
      },
    },
    {
      '@type': 'Question',
      name: 'Vad är skillnaden mellan value betting och vanlig betting?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Vanlig betting bygger på känsla och gissningar om vem som vinner. Value betting bygger på matematik – du spelar bara när oddset är högre än den verkliga sannolikheten antyder, vilket ger ett positivt förväntad avkastning (EV) på lång sikt.',
      },
    },
  ],
}

const productLd = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'RebelBetting',
  description:
    'Jämförelse av RebelBettings olika planer med fokus på value betting och felsatta odds.',
  image: 'https://profitplay.se/images/Hero-affiliate.png',
  brand: { '@type': 'Brand', name: 'RebelBetting' },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    reviewCount: '1',
  },
  review: {
    '@type': 'Review',
    author: { '@type': 'Person', name: 'ProfitPlay' },
    datePublished: '2024-01-15',
    reviewBody:
      'Praktisk genomgång av RebelBetting och hur verktyget hjälper till att hitta värdebettingmöjligheter.',
    reviewRating: {
      '@type': 'Rating',
      ratingValue: '4.8',
      bestRating: '5',
      worstRating: '1',
    },
  },
  offers: [
    { name: 'Trial', price: '0', currency: 'SEK' },
    { name: 'Starter', price: '1300', currency: 'SEK' },
    { name: 'Pro', price: '2300', currency: 'SEK' },
  ].map((offer) => ({
    '@type': 'Offer',
    name: `${offer.name} plan`,
    priceCurrency: offer.currency,
    price: offer.price,
    availability: 'https://schema.org/InStock',
    url: 'https://profitplay.se/',
  })),
}

export default function HomePage() {
  return (
    <div className="home-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />

      <section className="intro">
        <h1>Value Betting – så blir du lönsam på riktigt</h1>
        <p className="subhead">
          Lär dig en metod som bygger på <strong>matematik, sannolikhet och disciplin</strong> – inte tur.
          Vi visar hur du använder RebelBetting och smart <em>bankroll management</em> för att växa hållbart.
        </p>

        <img
          src="/images/Hero-affiliate.png"
          alt="Value betting – graf och mynt som symboliserar stabil avkastning"
          className="hero-image"
          loading="eager"
          decoding="async"
          fetchpriority="high"
          width="1280"
          height="720"
        />

        <nav className="quick-links" aria-label="Snabblänkar">
          <Link href="/recension" className="chip">Recension av RebelBetting</Link>
          <Link href="/results" className="chip">Mina resultat</Link>
          <Link href="/start" className="chip">Kom igång</Link>
          <Link href="/blogg" className="chip">Guider &amp; artiklar</Link>
        </nav>

        <ul className="usp-list">
          <li>Hitta <strong>felsatta odds</strong> med verktyg som RebelBetting</li>
          <li>Spela på <strong>positivt värde (EV+)</strong> – vinn på sikt</li>
          <li>Skydda kassan med <Link href="/blogg/bankroll-management">bankroll management</Link></li>
          <li>Undvik misstag – lär dig <Link href="/blogg/vanliga-misstag-value-betting">psykologin bakom betting</Link></li>
        </ul>
      </section>

      <section className="experience">
        <h2>Min erfarenhet inom value betting</h2>
        <p>
          Jag har använt <strong>RebelBetting</strong> i över två år med stabil, månatlig avkastning.
          Metoden bygger på att konsekvent spela värde och låta sannolikheten göra jobbet.
          Läs mer i min <Link href="/recension">recension</Link> och se <Link href="/results">resultaten</Link>.
        </p>
      </section>

      <section className="who">
        <h2>Vem passar value betting för?</h2>
        <p>
          För dig som vill ta betting seriöst. Du behöver inte kunna avancerad statistik –
          mjukvaran gör analysen. Du fokuserar på att <em>följa strategin</em> och lägga spelen.
        </p>
        <p>
          Är du ny? Börja här: <Link href="/start">Kom igång med value betting</Link>.
        </p>
      </section>

      <section className="methods">
        <h2>Metoder som fungerar</h2>
        <p>
          Det finns flera sätt att tjäna pengar på betting, men value betting är mest hållbart.
          Du utnyttjar felprissatta odds istället för att gissa resultat. Sure betting (arbitrage)
          kan också fungera som komplement.
        </p>
        <ul>
          <li>
            <strong>Value Betting:</strong> spela när <em>verklig sannolikhet</em> &gt; <em>implicit odds</em>.
          </li>
          <li>
            <strong>Sure Betting (Arbitrage):</strong> säkra små vinster genom att täcka alla utfall.
          </li>
        </ul>
        <p>
          Med <strong>RebelBetting Premium</strong> får du realtidsväringar, insatsrekommendationer och
          smidig statistik. Se vår <Link href="/recension">recension</Link> innan du väljer plan.
        </p>

        <AffiliateBanner />
      </section>

      <section className="comparison">
        <h2>Jämförelse mellan versioner</h2>
        <p>
          Här ser du skillnaden mellan standard, Premium och Surebetting. Premium passar oftast flest:
          fler spel, snabbare uppdateringar och bredare marknader.
        </p>
        <Table />
      </section>

      <section className="faq-home">
        <h2>Vanliga frågor om value betting</h2>
        <details>
          <summary>Är value betting lagligt?</summary>
          <p>Ja, value betting är en laglig metod. Du spelar på vanliga spelbolag men med en
            statistisk strategi. Följ alltid lokala regler och ansvarsfullt spelande.</p>
        </details>
        <details>
          <summary>Hur stor bankrulle behöver jag?</summary>
          <p>Det beror på mål och risknivå. Läs vår guide om <Link href="/blogg/bankroll-management">bankroll management</Link> för att hitta rätt nivå.</p>
        </details>
        <details>
          <summary>Kan jag börja som helt ny?</summary>
          <p>Absolut. Börja med <Link href="/start">kom igång-guiden</Link> och läs vår
            <Link href="/recension"> recension av RebelBetting</Link> för att förstå flödet.</p>
        </details>
      </section>

      <section className="cta">
        <h2>Börja med value betting idag</h2>
        <p>
          Testa <strong>RebelBetting</strong> gratis och upptäck hur du kan bygga en
          stabil avkastning – utan tur, bara sannolikhet.
        </p>
        <AffiliateButton />
      </section>
    </div>
  )
}
