import logo_insta from '../../assets/logo_instagram.svg';
import logo_mail from '../../assets/logo_mail.svg';
import logo_copyright from '../../assets/logo_copyright.svg';
import './footer.css';

function Footer() {
  return (
    <div className="footer">
      <div className="logos">
        <img
          src={logo_insta}
          alt="logo instagram"
          className="logo logo_instagram"
        />
        <a href="mailto:yoga-avec-ana@outlook.com">
          <img src={logo_mail} alt="logo mail" className="logo logo_mail" />
        </a>
      </div>

      <p className="copyright">
        Yoga avec Ana | copyright 2024
        <img
          src={logo_copyright}
          alt="logo copyright"
          className="logo_copyright"
        />
      </p>
    </div>
  );
}

export default Footer;
