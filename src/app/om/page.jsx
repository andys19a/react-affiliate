import Link from 'next/link'
import AffiliateButton from '@/components/AffiliateButton'
import Breadcrumbs from '@/components/Breadcrumbs'
import '@/css/About.css'

export const metadata = {
  title: { absolute: 'Om mig – André bakom ProfitPlay | Value betting' },
  description:
    'Jag heter André och tjänade ihop till min första lägenhet med value betting. Läs om resan från hobbyspelare till lönsam bettor – med RebelBetting och en hel del tålamod.',
  alternates: { canonical: '/om' },
  openGraph: {
    title: 'Om mig – André bakom ProfitPlay',
    description:
      'Resan från hobbyspelare till lönsam bettor. Hur value betting och RebelBetting förändrade min ekonomi på riktigt.',
    type: 'profile',
    url: 'https://www.profitplay.se/om',
    images: [{ url: 'https://www.profitplay.se/images/Hero-affiliate.png', width: 1280, height: 720 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Om mig – André bakom ProfitPlay',
    description: 'Resan från hobbyspelare till lönsam bettor med value betting och RebelBetting.',
    images: ['https://www.profitplay.se/images/Hero-affiliate.png'],
  },
}

const personLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'André',
  url: 'https://www.profitplay.se/om',
  knowsAbout: [
    'value betting',
    'expected value (EV)',
    'bankroll management',
    'RebelBetting',
    'sportsbetting',
    'odds analys',
  ],
  description:
    'Value bettor med över 2 års erfarenhet av RebelBetting. Redaktör bakom ProfitPlay.se – guider och strategier för lönsam sportsbetting.',
}

const breadcrumbLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Hem', item: 'https://www.profitplay.se/' },
    { '@type': 'ListItem', position: 2, name: 'Om mig', item: 'https://www.profitplay.se/om' },
  ],
}

export default function AboutPage() {
  return (
    <div className="about-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([personLd, breadcrumbLd]) }}
      />
      <Breadcrumbs items={[{ to: '/', label: 'Hem' }, { label: 'Om mig' }]} />

      <div className="about-intro">
        <div className="about-avatar" aria-hidden="true">A</div>
        <div className="about-intro-text">
          <h1>Hej, jag heter André</h1>
          <p className="about-tagline">Value bettor, redaktör bakom ProfitPlay – och ja, lägenhetsägare tack vare sports&shy;betting.</p>
        </div>
      </div>

      <p>
        Jag startade ProfitPlay för att dela den erfarenheten jag önskar att jag hade haft
        när jag precis börjat. Ingen bluffig "bli-rik-snabbt"-historia – utan en ärlig
        berättelse om vad som faktiskt funkar, vad som tar tid, och vad som inte alls
        gick som planerat.
      </p>

      <h2>Resan – från skoj till strategi</h2>

      <div className="timeline">
        <div className="timeline-item">
          <strong>Bettade på ren tur i ett par år</strong>
          <p>
            Precis som de flesta började jag betta på känsla. Lite Premier League, lite
            tennis. Ibland gick det bra, oftast gick pengarna sakta därifrån. Underhållande,
            men knappast lönsamt.
          </p>
        </div>
        <div className="timeline-item">
          <strong>Testade RebelBetting – men det tog tid</strong>
          <p>
            Jag snubblade över value betting och testade RebelBetting på allvar. De första
            2–3 månaderna var frustrerande – variansen är riktig, och det finns perioder
            där det ser ut som att det inte funkar alls. Jag höll i mig.
          </p>
        </div>
        <div className="timeline-item">
          <strong>Gick plus – och förstod varför</strong>
          <p>
            Sen vände det. Kurvan pekade uppåt och den matematiska fördelen börjad synas
            på riktigt. Jag förstod att det inte handlade om tur längre – det handlade om
            att ha statistiken på sin sida och placera tillräckligt många bets.
          </p>
        </div>
        <div className="timeline-item">
          <strong>2–3 månader senare: begränsad hos alla spelbolag</strong>
          <p>
            Det är det bästa och sämsta som kan hända – alla konton begränsades eller
            stängdes för att jag vann för mycket. För mig var det ett kvitto på att
            strategin verkligen fungerade.
          </p>
        </div>
        <div className="timeline-item">
          <strong>Köpte min första lägenhet</strong>
          <p>
            Vinsten bidrog direkt till handpenningen på min första lägenhet. Det är
            fortfarande den mest konkreta påminnelsen om att det här verkligen fungerar
            om man gör det rätt.
          </p>
        </div>
      </div>

      <div className="highlight-box">
        <p>
          "Det roligaste med value betting är att du faktiskt vet att du har försprånget.
          Du behöver inte gissa rätt – du behöver bara spela tillräckligt länge för att
          matematiken ska göra jobbet."
        </p>
      </div>

      <div className="about-stats">
        <div className="stat-card">
          <span className="stat-value">2+ år</span>
          <span className="stat-label">Aktiv value bettor</span>
        </div>
        <div className="stat-card">
          <span className="stat-value">10 000+</span>
          <span className="stat-label">Placerade bets</span>
        </div>
        <div className="stat-card">
          <span className="stat-value">190 000 kr</span>
          <span className="stat-label">Total vinst</span>
        </div>
      </div>

      <div className="about-mission">
        <h2>Varför den här sidan finns</h2>
        <p>
          Det finns massor av betting-sajter som lovar guld och gröna skogar. ProfitPlay
          är inte en av dem. Jag byggde den för att samla den information jag saknade
          när jag startade: ärliga siffror, praktiska guider och en realistisk bild av
          vad value betting faktiskt kräver.
        </p>
        <p>
          Allt innehåll bygger på mina egna erfarenheter. Jag skriver om det som
          fungerade, det som tog längre tid än förväntat, och de misstag jag gjort
          längs vägen – som att inte läsa på om varians ordentligt innan jag satte
          in en för stor kassa tidigt.
        </p>
        <p>
          Sidan innehåller affiliate-länkar till RebelBetting. Det är verktyget jag
          själv använt och rekommenderar – inte för att det är det enda alternativet,
          utan för att det är det jag har djupast erfarenhet av. Om du registrerar dig
          via en länk på sidan får jag en liten provision utan extra kostnad för dig.
        </p>
      </div>

      <h2>Vill du följa samma väg?</h2>
      <p>
        Jag rekommenderar att du börjar med att läsa på ordentligt innan du sätter
        in pengar. Förstå vad EV innebär, sätt upp en bankrulle du kan vara bekväm
        med och ge det tid. Det är inte ett snabbspår – men det är ett system som
        faktiskt fungerar.
      </p>
      <ul>
        <li><Link href="/start">Kom igång – steg för steg</Link></li>
        <li><Link href="/results">Se mina faktiska resultat</Link></li>
        <li><Link href="/recension">Min recension av RebelBetting</Link></li>
        <li><Link href="/blogg/vad-ar-value-betting">Vad är value betting?</Link></li>
        <li><Link href="/blogg/bankroll-management">Bankroll management för nybörjare</Link></li>
      </ul>

      <div className="about-cta">
        <h2>Testa verktyget som förändrade min ekonomi</h2>
        <p>
          RebelBetting erbjuder en gratis provperiod. Prova det, följ guiden och
          ge strategin den tid den behöver.
        </p>
        <AffiliateButton />
      </div>
    </div>
  )
}
