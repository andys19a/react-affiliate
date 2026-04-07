

import { Link } from "react-router-dom";
import { useState } from "react";
import "../css/Header.css";
import logo from "../images/logo.png"; // 👈 importera loggan

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  const handleSearchSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <header className="header">
      <nav className="nav" aria-label="Huvudmeny">
        <Link to="/" className="logo-link" onClick={closeMenu}>
          <img src={logo} alt="ProfitPlay" className="logo" />
        </Link>

        <button
          type="button"
          className="menu-toggle"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
        >
          {isMenuOpen ? "Stäng" : "Meny"}
        </button>

        <div className={`nav-actions ${isMenuOpen ? "open" : ""}`} id="primary-navigation">
          <form className="nav-search" role="search" onSubmit={handleSearchSubmit}>
            <label htmlFor="header-search" className="sr-only">Sök</label>
            <input
              id="header-search"
              name="query"
              type="search"
              placeholder="Sök guider eller resultat"
              autoComplete="off"
            />
            <button type="submit">Sök</button>
          </form>

          <ul className="nav-list">
            <li><Link to="/" onClick={closeMenu}>Hem</Link></li>
            <li><Link to="/results" onClick={closeMenu}>Resultat</Link></li>
            <li><Link to="/start" onClick={closeMenu}>Kom igång</Link></li>
            <li><Link to="/recension" onClick={closeMenu}>Recension</Link></li>
            <li><Link to="/blog" onClick={closeMenu}>Blogg</Link></li>
            <li><Link to="/faq" onClick={closeMenu}>FAQ</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;






