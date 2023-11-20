import ana_tournesol from '../../assets/Ana_tournesol.jpeg';
import ana_img from '../../assets/Ana.jpeg';
import silhouette_yoga from '../../assets/Yoga-Silhouette.svg';
import Button from '../../components/Button/button';
import './home.css';
const prestation_array = require('../../datas/home_prestations.json');

function Home() {
  return (
    <div className="home">
      <div className="accueil">
        <div className="intro">
          <div className="img_container">
            <img
              src={ana_tournesol}
              alt="Ana dans les tournesols"
              className="img_ana_tournesol"
            />
          </div>
          <div className="intro_txt">
            <h1 className="title">
              <span>Ana Kuzelj</span> <br /> Professeure de yoga fonctionnel
            </h1>
            <p className="presentation">
              Petite phrase de présentation de Yoga avec Ana ! Lorem ipsum dolor
              sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat.
            </p>
            <a href="mailto:yoga-avec-ana@outlook.com">
              <button className="button_papote">On papote ?</button>
            </a>
          </div>
        </div>

        <p className="home_paragraphe">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <img
          src={silhouette_yoga}
          alt="silhouette yoga"
          className="silhouette_yoga"
        />
      </div>

      <section className="prestations">
        {prestation_array.map((presta) => (
          <div className="card" key={presta.id}>
            <h3 className="card_home_title">{presta.title}</h3>
            {presta.content.map((description) => (
              <p className="card_home_content">{description}</p>
            ))}
          </div>
        ))}

        <Button value={'En savoir plus !'} link_to="/prestations" />
      </section>

      <div className="mini_a_propos">
        <h3 className="title_mini_a_propos">Qui se cache derrière Ana ?</h3>
        <img src={ana_img} alt="Presentation d'Ana" className="ana_img" />
        <p className="mini_a_propos_content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <Button value={'Découvrir Ana'} link_to="/a_propos" />
      </div>

      <div className="contact"></div>
    </div>
  );
}

export default Home;
