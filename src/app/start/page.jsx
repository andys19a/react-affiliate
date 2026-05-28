import Image from 'next/image'
import Link from 'next/link'
import AffiliateButton from '@/components/AffiliateButton'
import '@/css/Start.css'

export const metadata = {
  title: { absolute: 'Value betting: kom igång – steg-för-steg-guide 2025 | ProfitPlay' },
  alternates: { canonical: '/start' },
  description:
    'Lär dig value betting steg för steg med uppdaterad guide 2025. Följ checklistan, jämför verktyg och börja spela smartare redan idag.',
  keywords:
    'kom igång med value betting, börja value betting, RebelBetting guide, value betting strategi, tjäna pengar på betting, slå spelbolagen',
  openGraph: {
    title: 'Value betting: kom igång – ProfitPlay',
    description:
      'Steg-för-steg-guide till value betting. Lär dig hur RebelBetting fungerar och börja slå spelbolagen med matematik och strategi.',
    type: 'article',
    url: 'https://www.profitplay.se/start',
    images: [{ url: 'https://www.profitplay.se/images/Hero-affiliate.png', width: 1280, height: 720 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Value betting: kom igång – steg-för-steg-guide 2025 | ProfitPlay',
    description: 'Steg-för-steg-guide till value betting. Börja slå spelbolagen med matematik och strategi.',
    images: ['https://www.profitplay.se/images/Hero-affiliate.png'],
  },
}

const howToLd = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Kom igång med value betting – steg för steg',
  description: 'Lär dig value betting steg för steg med uppdaterad guide 2025. Följ checklistan och börja spela smartare redan idag.',
  totalTime: 'PT30M',
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Välj plattform och konto',
      text: 'RebelBetting är nybörjarvänligt och visar var värdet finns i realtid. Skapa ett konto och starta din gratis provperiod.',
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Ställ in bankrullen',
      text: 'Avsätt en separat kassa och riskera högst 1–2 % per spel för stabil tillväxt utan att ta onödig risk.',
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Analysera oddsen',
      text: 'Följ rekommendationerna i verktyget och sortera på sporter där du har bäst ROI. Fokusera på spel med positiv EV.',
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: 'Placera och logga spelen',
      text: 'Sikta på volym – 500+ spel ger en pålitlig ROI och jämnare kurva. Logga varje spel för att spåra din utveckling.',
    },
    {
      '@type': 'HowToStep',
      position: 5,
      name: 'Utvärdera varje vecka',
      text: 'Tweaka insatsnivå och marknader, men håll dig till planen för att undvika tilt. Disciplin är nyckeln till långsiktigt resultat.',
    },
  ],
}

const startFaqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Hur mycket kapital behöver jag för value betting?',
      acceptedAnswer: { '@type': 'Answer', text: 'Börja med en separat kassa på minst 3 000–5 000 kr så att 1–2 % per spel ger rimliga insatser. Lägg aldrig in pengar du inte kan vara utan.' },
    },
    {
      '@type': 'Question',
      name: 'Hur snabbt kan jag se resultat med value betting?',
      acceptedAnswer: { '@type': 'Answer', text: 'Förvänta dig inte snabba vinster. Sikta på 500–1 000 spel för att jämna ut variansen och se den sanna ROI:n. Det tar oftast 4–8 veckor.' },
    },
    {
      '@type': 'Question',
      name: 'Vilka sporter fungerar bäst för value betting?',
      acceptedAnswer: { '@type': 'Answer', text: 'Fotboll och tennis har hög volym och ofta felprissatta odds. Börja där och filtrera bort sporter där din ROI ligger under målet.' },
    },
    {
      '@type': 'Question',
      name: 'Hur undviker jag att bli limiterad av spelbolag?',
      acceptedAnswer: { '@type': 'Answer', text: 'Variera insatsstorlek något, spela på flera marknader och fördela dina spel över flera spelbolag. Bygg en rutin så att du inte sticker ut med identiska belopp varje gång.' },
    },
  ],
}

const breadcrumbLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Hem', item: 'https://www.profitplay.se/' },
    { '@type': 'ListItem', position: 2, name: 'Kom igång med value betting', item: 'https://www.profitplay.se/start' },
  ],
}

export default function StartPage() {
  return (
    <div className="Start">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([startFaqLd, breadcrumbLd]) }}
      />
      <div className="page-meta">
        <span className="badge">Uppdaterad: februari 2025</span>
        <p className="lede">
          Hoppa rakt in i value betting med en tydlig plan. Den här guiden är
          uppdaterad med de senaste tipsen för 2025 så att du kan starta
          snabbt och minimera misstag.
        </p>
      </div>

      <div className="hero">
        <div>
          <h1>Value betting: kom igång</h1>
          <p>
            Få en strukturerad väg in i value betting – från första insättning
            till dina första hundra spel. Vi kombinerar strategi, verktyg och
            disciplin så du slipper gissa.
          </p>
          <div className="hero-cta">
            <AffiliateButton />
            <p className="cta-note">Testa verktyget riskfritt och följ guiden steg för steg.</p>
          </div>
        </div>
        <Image
          src="/images/Hero-affiliate.png"
          alt="Illustration av value betting-guide med statistik och odds"
          className="hero-image"
          width={1280}
          height={720}
          style={{ width: '100%', height: 'auto' }}
        />
      </div>

      <section>
        <h2>Steg-för-steg: börja value betta idag</h2>
        <ol className="step-list">
          <li>
            <strong>Välj plattform och konto:</strong> RebelBetting är
            nybörjarvänligt och visar var värdet finns i realtid.
          </li>
          <li>
            <strong>Ställ in bankrullen:</strong> Avsätt en separat kassa och
            riskera högst 1–2 % per spel för stabil tillväxt.
          </li>
          <li>
            <strong>Analysera oddsen:</strong> Följ rekommendationerna i
            verktyget och sortera på sporter där du har bäst ROI.
          </li>
          <li>
            <strong>Placera och logga spelen:</strong> Sikta på volym – 500+
            spel ger en pålitlig ROI och jämnare kurva.
          </li>
          <li>
            <strong>Utvärdera varje vecka:</strong> Tweaka insatsnivå och
            marknader, men håll dig till planen för att undvika tilt.
          </li>
        </ol>
      </section>

      <section>
        <h2>Jämförelse: manuell vs. automatiserad value betting</h2>
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Metod</th>
                <th>Tidsåtgång</th>
                <th>Träffsäkerhet</th>
                <th>Passar bäst för</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Manuell analys</td>
                <td>2–3 timmar/dag</td>
                <td>Varierande – kräver erfarenhet</td>
                <td>Erfarna spelare med egen modell</td>
              </tr>
              <tr>
                <td>Automatiserad via RebelBetting</td>
                <td>20–30 minuter/dag</td>
                <td>Stabil – filtrerar ut felsatta odds</td>
                <td>Nybörjare och proffs som vill skala</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="pros-cons">
        <div>
          <h3>Fördelar</h3>
          <ul>
            <li>Matematisk edge som inte bygger på tur.</li>
            <li>Automatiska larm för nya värdespel.</li>
            <li>Statistik som gör det enkelt att optimera.</li>
          </ul>
        </div>
        <div>
          <h3>Nackdelar</h3>
          <ul>
            <li>Kräver disciplin och volym innan ROI syns.</li>
            <li>Vissa spelbolag kan begränsa konton vid vinst.</li>
            <li>Abonnemangskostnad – räkna hem den med volym.</li>
          </ul>
        </div>
      </section>

      <section>
        <h2>Checklista för långsiktigt resultat</h2>
        <ul className="bullet-grid">
          <li>Minst 1 000 spel per kvartal för tillförlitlig statistik.</li>
          <li>Dokumentera ROI per sport och bookmaker varje månad.</li>
          <li>Justera insatsstorlek först efter 200–300 spel.</li>
          <li>Följ spelplanen även efter korta perioder med minus.</li>
          <li>Rotera mellan 3–5 spelbolag för bättre odds och mindre risk för limitering.</li>
        </ul>
      </section>

      <section className="faq">
        <h2>FAQ: vanliga frågor om value betting</h2>
        <div className="faq-item">
          <h3>Hur mycket kapital behöver jag för value betting?</h3>
          <p>
            Börja med en separat kassa på minst 3 000–5 000 kr så att 1–2 % per
            spel ger rimliga insatser. Lägg aldrig in pengar du inte kan vara
            utan.
          </p>
        </div>
        <div className="faq-item">
          <h3>Hur snabbt kan jag se resultat?</h3>
          <p>
            Förvänta dig inte snabba vinster. Sikta på 500–1 000 spel för att
            jämna ut variansen och se den sanna ROI:n. Det tar oftast 4–8
            veckor.
          </p>
        </div>
        <div className="faq-item">
          <h3>Vilka sporter fungerar bäst för value betting?</h3>
          <p>
            Fotboll och tennis har hög volym och ofta felprissatta odds. Börja
            där och filtrera bort sporter där din ROI ligger under målet.
          </p>
        </div>
        <div className="faq-item">
          <h3>Hur undviker jag att bli limiterad av spelbolag?</h3>
          <p>
            Variera insatsstorlek något, spela på flera marknader och fördela
            dina spel över flera spelbolag. Bygg en rutin så att du inte sticker
            ut med identiska belopp varje gång.
          </p>
        </div>
      </section>

      <section>
        <h2>Fördjupa dig vidare</h2>
        <ul className="bullet-grid">
          <li><Link href="/blogg/vad-ar-value-betting">Vad är value betting? – strategin förklarad</Link></li>
          <li><Link href="/blogg/ev-expected-value-betting">EV (Expected Value) – den viktigaste faktorn</Link></li>
          <li><Link href="/blogg/bankroll-management">Bankroll management för nybörjare</Link></li>
          <li><Link href="/blogg/undvika-limitering-spelbolag">Så undviker du limitering hos spelbolag</Link></li>
          <li><Link href="/blogg/varians-bettingresultat">Hur varians påverkar dina resultat</Link></li>
          <li><Link href="/blogg/vanliga-misstag-value-betting">Vanliga misstag inom value betting</Link></li>
        </ul>
      </section>

      <section className="cta-section">
        <h2>Redo att börja? Följ guiden och testa verktyget</h2>
        <p>
          Du har planen – nu är det dags att sätta den i spel. Öppna ett konto,
          följ checklistan och låt verktyget hitta värdespelen åt dig.
        </p>
        <AffiliateButton />
      </section>
    </div>
  )
}
