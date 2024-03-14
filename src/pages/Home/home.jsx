import ana_tournesol from '../../assets/Ana_tournesol.jpeg';
import ana_img from '../../assets/Ana.jpeg';

import Button from '../../components/Button/button';
import Card from '../../components/Card/card';
import Slider from '../../components/Slider/slider';
import Contact from '../../components/Contact/contact';
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
              <button className="button button_papote">On papote ?</button>
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
      </div>

      <section className="prestations">
        <h2 className="prestations.title">Mes préstations</h2>
        <div className="prestations_card_container">
          {prestation_array.map((presta) => (
            <Card
              key={presta.id}
              title={presta.title}
              content={presta.content}
              classname="prestations_card"
            />
          ))}
        </div>

        <Button
          value={'En savoir plus !'}
          link_to="/prestations"
          className="presta_btn"
        />
      </section>

      <div className="mini_a_propos">
        <h2 className="title_mini_a_propos">Qui se cache derrière Ana ?</h2>
        <div className="mini_a_propos_content">
          <img
            src={ana_img}
            alt="Presentation d'Ana"
            className="ana_img portrait"
          />
          <p className="mini_a_propos_p">
            Lectus urna duis convallis convallis. Sagittis vitae et leo duis ut.
            At imperdiet dui accumsan sit amet. Pretium viverra suspendisse
            potenti nullam. In aliquam sem fringilla ut morbi tincidunt augue.
            Egestas quis ipsum suspendisse ultrices gravida dictum. Ridiculus
            mus mauris vitae ultricies leo integer. Enim sit amet venenatis
            urna. Diam maecenas sed enim ut sem viverra. Sit amet consectetur
            adipiscing elit duis...
          </p>
        </div>
        <Button
          value={'Découvrir Ana'}
          link_to="/a_propos"
          className="a_propos_btn"
        />
      </div>

      <section className="recommendations">
        <h2 className="recommendations_title">Témoignages</h2>
        <Slider />
      </section>

      <div id="contact">
        <h2 className="contact_title">N'hésite pas à me contacter ! </h2>
        <Contact />
      </div>
    </div>
  );
}

export default Home;
