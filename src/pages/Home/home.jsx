import React /* useEffect, useRef, Suspense */ from 'react';
/* import { motion, useAnimation } from 'framer-motion';
 *//* import { useInView } from 'react-intersection-observer';
 */
import ana_tournesol from '../../assets/Ana_tournesol.jpeg';
import ana_img from '../../assets/Ana.jpeg';

import Button from '../../components/Button/button';
import Card from '../../components/Card/card';
import Slider from '../../components/Slider/slider';
import './home.css';
const prestation_array = require('../../datas/home_prestations.json');
const recommandations_array = require('../../datas/recommandations.json');

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
              <span>Ana,</span>{' '}
              <em className="italic_mode">professeure de yoga fonctionnel</em>
            </h1>
            <p className="presentation">
              Besoin de ralentir, d’un moment pour toi ? Envie d’un flow plus
              dynamique pour réveiller ton énergie et gagner en force ? Ou
              peut-être envie de débloquer des tensions pour gagner en souplesse
              ? Je suis là pour te guider et t’encourager avec bienveillance.
              Retrouve-moi entre Montpellier et Nîmes, en présentiel ou en
              ligne, et laisse-toi emporter par un yoga qui te fait du bien, à
              ton rythme, et en profondeur.
            </p>
            <div className="button_papote_container">
              <a href="mailto:vivons-yoga@hotmail.com">
                <button className="button_papote">On papote ?</button>
              </a>
            </div>
          </div>
        </div>

        <p className="home_paragraphe">
          Ici, pas de posture parfaite ni de performance, juste un espace pour
          te reconnecter à ton corps, à ton souffle et à tes sensations. Mon
          approche du yoga est douce et intuitive : elle t’accompagne là où tu
          en es, selon ton énergie du moment et tes objectifs. À travers la
          respiration, le mouvement, et parfois la méditation, elle t’apporte
          aussi les fondements profonds du yoga et de la spiritualité, pour
          t’offrir bien plus qu’une simple pratique physique, mais un véritable
          chemin vers l’équilibre intérieur.
        </p>
        <div className="home_citation">
          <p>
            Chaque corps est unique, et mon approche du yoga fonctionnel en
            tient compte : mes séances s’adaptent à tes besoins, à ton
            énergie/mood, et respectent tes limites.
          </p>
        </div>
      </div>

      <section className="prestations">
        <h2 className="prestations_title">Mes préstations</h2>
      </section>

      <div className="prestations_card_container">
        {prestation_array.map((presta) => (
          <Card
            key={presta.id}
            title={presta.title}
            content={presta.content}
            /*             picture={presta.picture}
             */
          />
        ))}
      </div>

      <div className="mini_a_propos">
        <h2 className="title_mini_a_propos">Qui se cache derrière Ana ?</h2>
        <div className="mini_a_propos_content">
          <p className="mini_a_propos_p">
            Depuis que j'ai découvert la spiritualité, ainsi qu’une autre
            manière de vivre en Thaïlande, je me suis tourné petit à petit vers
            le yoga. C’est ce qui me permet aujourd’hui de vivre en pleine
            conscience et en harmonie...
          </p>
          <img
            src={ana_img}
            alt="Presentation d'Ana"
            className="ana_img portrait"
          />
        </div>
        <div className="btn_container">
          <Button
            value={'Découvrir Ana'}
            link_to="/a_propos"
            className="a_propos_btn"
          />
        </div>
      </div>

      <section className="recommandations">
        <h2 className="recommandations_title">Recommandations</h2>
        <p className="recommandations_paragraphe">
          Je vous transmet le meilleur de mes conseil. La bienveillance est au
          centre de toutes mes séances et votre bien être est ma priorité !
        </p>
      </section>
      <div className="recommandation_PC">
        <div className="reco">
          {recommandations_array.map((reco) => (
            <div className="reco_card">
              <h3>{reco.title}</h3>
              <p>{reco.content}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="slider_container">
        <Slider />
      </div>
      <div className="call_to_action_contact">
        <h2 className="call_to_action_contact_title">
          Envoie moi un petit mot si quelque chose t'intéresse ! ☀️
        </h2>
        <p className="call_to_action_contact_content">
          Lectus urna duis convallis convallis. Sagittis vitae et leo duis ut.
          At imperdiet dui accumsan sit amet. Pretium viverra suspendisse
          potenti nullam. In aliquam sem fringilla ut morbi tincidunt augue.
          Egestas quis ipsum suspendisse ultrices gravida dictum. Ridiculus mus
          mauris vitae ultricies leo integer.
        </p>
        <div className="btn_contact_container">
          <Button
            value={'Contacter Ana'}
            link_to="/contact"
            className="contact_btn"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
