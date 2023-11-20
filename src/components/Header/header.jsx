import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Logo from '../Logo/logo';
import './header.css';

function Header() {
  const location = useLocation();
  return (
    <div>
      <div className="headerSection">
        <Logo className="headerLogo" />
        <nav className="headerNav">
          <Link
            to="/home"
            className={location.pathname === '/home' ? 'lien active' : 'lien'}
          >
            Accueil
          </Link>
          <Link
            to="/a_propos"
            className={
              location.pathname === '/a_propos' ? 'lien active' : 'lien'
            }
          >
            Qui suis-je ?
          </Link>
          <Link
            to="/prestation"
            className={
              location.pathname === '/prestation' ? 'lien active' : 'lien'
            }
          >
            Mes préstations
          </Link>
          <Link
            to="/contact"
            className={
              location.pathname === '/contact' ? 'lien active' : 'lien'
            }
          >
            Contact
          </Link>
        </nav>
      </div>
    </div>
  );
}

export default Header;
