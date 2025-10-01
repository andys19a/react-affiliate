import { Link } from 'react-router-dom';
import '../css/Header.css';  


function Header(){

    return (
    <header className="header">
        <nav>
            <ul className='nav-list'>
                <li> <Link to="/">Meny1</Link></li>
                <li> <Link to="/about">Meny2</Link></li>
                <li> <Link to="/contact">Meny3</Link></li>
            </ul>       
        </nav>
        </header>



    )
}

export default Header;