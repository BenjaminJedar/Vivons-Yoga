import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import React, { useState } from 'react';
import logo_AK from '../../assets/logo_AK_removebg1.png';
import './header.css';

function Header() {
  const location = useLocation();

  const [burger_class, setBurgerClass] = useState('burger_bar unclicked');
  const [menu_class, setMenuClass] = useState('menu hidden');
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  // toggle burger menu change
  function updateMenu() {
    if (!isMenuClicked) {
      setBurgerClass('burger_bar clicked');
      setMenuClass('menu visible');
    } else {
      setBurgerClass('burger_bar unclicked');
      setMenuClass('menu hidden');
    }
    setIsMenuClicked(!isMenuClicked);
  }

  return (
    <div className="headerSection">
      <Link to="/">
        <img src={logo_AK} className="logo_AK" alt="logo AK" />
      </Link>
      <nav className="headerNav">
        <Link
          to="/a_propos"
          className={location.pathname === '/a_propos' ? 'lien active' : 'lien'}
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

      <div className="mobile_menu">
        <div className={menu_class}>
          <nav className="headerNav mobileNav">
            <Link
              to="/a_propos"
              className={'lien lien_mobile'}
              onClick={updateMenu}
            >
              Qui suis-je ?
            </Link>
            <Link
              to="/prestations"
              className={'lien lien_mobile'}
              onClick={updateMenu}
            >
              Mes préstations
            </Link>
            <a
              href="../#contact"
              className="lien_contact lien_mobile"
              onClick={updateMenu}
            >
              Contact
            </a>
          </nav>
        </div>

        <div className="burger_menu" onClick={updateMenu}>
          <div className={burger_class}></div>
          <div className={burger_class}></div>
          <div className={burger_class}></div>
        </div>
      </div>
    </div>
  );
}

export default Header;
