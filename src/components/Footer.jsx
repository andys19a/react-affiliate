import Link from 'next/link'
import '@/css/Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-about">
          <h3>Om sidan</h3>
          <p>
            ProfitPlay drivs av André – value bettor sedan 2022 och redaktör bakom
            sajten. Här delar jag erfarenheter och resultat från över 2 års användning av
            <a
              href="https://www.rebelbetting.com/valuebetting?x=datatrixet&amp;a_bid=df3338f4"
              target="_blank"
              rel="noopener noreferrer nofollow sponsored"
            >
              {' '}RebelBetting
            </a>.
          </p>
        </div>

        <div className="footer-links">
          <h3>Länkar</h3>
          <ul>
            <li><Link href="/">Hem</Link></li>
            <li><Link href="/kategori">Kategorier</Link></li>
            <li><Link href="/results">Resultat</Link></li>
            <li><Link href="/blogg">Blogg</Link></li>
            <li><Link href="/start">Kom igång</Link></li>
            <li><Link href="/recension">Recension</Link></li>
            <li><Link href="/faq">FAQ</Link></li>
            <li><Link href="/om">Om mig</Link></li>
            <li><Link href="/contact">Kontakt</Link></li>
            <li><Link href="/sitemap">Sitemap</Link></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h3>Kontakt</h3>
          <p>
            Har du frågor eller samarbeten?<br />
            <a href="mailto:andypenguin2@gmail.com">andypenguin2@gmail.com</a>
          </p>
          <p className="disclaimer">
            <small>
              Innehåller affiliate-länkar. Jag kan få provision om du registrerar dig
              via mina länkar, utan extra kostnad för dig.
            </small>
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} ProfitPlay. Alla rättigheter förbehållna.</p>
      </div>
    </footer>
  )
}
