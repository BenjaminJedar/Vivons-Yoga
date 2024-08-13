import './a_propos.css';
import ana_img from '../../assets/Ana.jpeg';
import Button from '../../components/Button/button';

function A_propos() {
  return (
    <div className="a_propos">
      <div className="illustration">
        <img src={ana_img} alt="La belle Ana" className="ana_img_a_propos" />
      </div>
      <h2 className="a_propos_title_page">Salut moi c'est Ana ...</h2>
      <p className="a_propos_content_page">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. In tellus integer
        feugiat scelerisque varius. Aenean vel elit scelerisque mauris
        pellentesque pulvinar. Leo urna molestie at elementum eu. Morbi quis
        commodo odio aenean sed adipiscing diam donec adipiscing. Tellus mauris
        a diam maecenas sed enim ut sem viverra. Nunc pulvinar sapien et ligula
        ullamcorper malesuada. Morbi leo urna molestie at elementum eu
        facilisis. Magna eget est lorem ipsum dolor sit amet consectetur.
        Suspendisse sed nisi lacus sed viverra tellus. Fringilla urna porttitor
        rhoncus dolor purus non enim praesent. Vitae suscipit tellus mauris a
        diam.
      </p>
      <a href="mailto:yoga-avec-ana@outlook.com" className="lien_btn_a_propos">
        <button className="button button_papote">On papote ?</button>
      </a>
    </div>
  );
}

export default A_propos;
