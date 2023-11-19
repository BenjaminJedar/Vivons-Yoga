import logo_insta from '../../assets/logo_instagram.svg';
import logo_mail from '../../assets/logo_mail.svg';
import logo_copyright from '../../assets/logo_copyright.svg';

function Footer() {
  return (
    <div className="footer">
      <img src={logo_insta} alt="logo instagram" className="logo_instagram" />
      <img src={logo_mail} alt="logo mail" className="logo_mail" />
      <p>Yoga avec Ana | copyright 2023 </p>
      <img
        src={logo_copyright}
        alt="logo copyright"
        className="logo_copyright"
      />
    </div>
  );
}

export default Footer;
