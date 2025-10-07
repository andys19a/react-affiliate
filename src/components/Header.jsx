import { Link } from "react-router-dom";
import "../css/Header.css";  
import logo from "../images/logo.png"; // 👈 importera loggan

function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <Link to="/" className="logo-link">
          <img src={logo} alt="Logo" className="logo" />
        </Link>

        <ul className="nav-list">
          <li><Link to="/">Hem</Link></li>
          <li><Link to="/results">Resultat</Link></li>
          <li><Link to="/start">Kom igång</Link></li>
          <li><Link to="/recension">Recension</Link></li>
          <li><Link to="/blog">Blogg</Link></li>
          <li><Link to="/faq">FAQ</Link></li>
          <li><Link to="/contact">Kontakt</Link></li>

        </ul>

      </nav>
    </header>
  );
}

export default Header;






