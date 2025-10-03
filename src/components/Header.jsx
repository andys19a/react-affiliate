import { Link } from 'react-router-dom';
import '../css/Header.css';  


function Header(){

    return (
    <header className="header">
        <nav>
            <ul className='nav-list'>
                <li> <Link to="/">Valuebetting</Link></li>
                <li> <Link to="/contact">Mina resultat</Link></li>
                <li> <Link to="/about">Kontakt</Link></li>
            </ul>       
        </nav>
        </header>



    )
}

export default Header;