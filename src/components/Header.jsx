import Link from 'next/link'
import '@/css/Header.css'

export default function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <Link href="/" className="logo-link">
          <img src="/images/logo.png" alt="ProfitPlay – value betting guide och resultat" className="logo" />
        </Link>

        <ul className="nav-list">
          <li><Link href="/">Hem</Link></li>
          <li><Link href="/kategori">Kategorier</Link></li>
          <li><Link href="/results">Resultat</Link></li>
          <li><Link href="/start">Kom igång</Link></li>
          <li><Link href="/recension">Recension</Link></li>
          <li><Link href="/blogg">Blogg</Link></li>
          <li><Link href="/faq">FAQ</Link></li>
        </ul>
      </nav>
    </header>
  )
}
