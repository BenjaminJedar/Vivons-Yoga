import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import logo_AK from '../../assets/logo_AK_removebg1.png';
import './header.css';

function Header() {
  const location = useLocation();
  return (
    <div>
      <div className="headerSection">
        <Link to="/">
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
            to="/prestations"
            className={
              location.pathname === '/prestations' ? 'lien active' : 'lien'
            }
          >
            Mes préstations
          </Link>
          <a href="../#contact" className="lien_contact">
            Contact
          </a>
        </nav>
      </div>
    </div>
  );
}

export default Header;
