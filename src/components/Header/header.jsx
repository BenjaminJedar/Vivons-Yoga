import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import logo_AK from '../../assets/logo_AK_removebg.png';
import './header.css';

function Header() {
  const location = useLocation();
  return (
    <div>
      <div className="headerSection">
        <Link
          to="/"
          className={location.pathname === '/' ? 'lien active' : 'lien'}
        >
          <img src={logo_AK} className="logo_AK" alt="logo AK" />
        </Link>
        <nav className="headerNav">
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
