import './a_propos.css';
import ana_img from '../../assets/Ana.jpeg';
import Button from '../../components/Button/button';

function A_propos() {
  return (
    <div className="a_propos">
      <div className="illustration">
        <img src={ana_img} alt="La belle Ana" className="ana_img_a_propos" />
      </div>
      <div className="a_propos_content_page">
        <p>
          {' '}
          J'ai découvert la spiritualité lors de mon premier voyage à l'étranger
          quand j'avais 18 ans. C’était en 2015. J’ai vécu pendant 1 mois en
          Thaïlande chez une famille bouddhiste. Là-bas, j'ai découvert une
          autre façon de vivre, de prier, de pratiquer la gratitude. Et j’ai eu
          la chance inouïe d’assister à une cérémonie bouddhiste chinoise juste
          inoubliable, afin d’honorer la déesse Guanyin (normalement interdite
          aux touristes). J’ai également passé mes journées à parcourir les
          temples avec ma famille d’accueil. Ils m’ont appris à prier avec eux,
          à me lever tôt le matin pour donner des offrandes aux moines qui
          passaient devant la maison, et à parler thaïlandais. La seule chose
          dont je me souviens c’est : “gin láew” pour dire “j’ai déjà mangé” à
          la grand-mère adorable qui voulait me nourrir sans arrêt 🙂 J’ai lâché
          une larme rien qu’en vous racontant tout ça (nostalgie hihi).
        </p>

        <p>
          {' '}
          Après ce voyage transformateur, j’ai cherché quelque chose qui me
          permettrait de me tourner vers ce que j’ai ressenti pendant cette
          expérience. Je voulais être tournée vers mon intérieur, ma pleine
          conscience. Vivre pleinement et être reconnaissante à chaque instant.
        </p>

        <p>
          {' '}
          Le yoga a fait petit à petit son apparition, je m’y intéresse de plus
          en plus. Mais il m'a fallu 8 ans pour découvrir la pratique qui me
          correspondait, lors de ma formation en Hatha Yoga avec l'école Arhanta
          Yoga School. Je me suis passionnée pour la philosophie et l'histoire
          du yoga, puis j'ai complété ma curiosité par la science du corps. Je
          voulais absolument comprendre tout ce qu’il se passait dans mon corps.
          J'ai alors poursuivi ma formation de 50h en yoga et mobilité
          fonctionnelle dans les Landes ❤️ <br />
          Depuis, je suis passionnée par l'anatomie et la santé mentale (j'en
          dévore d'ailleurs tous les livres possibles en ce moment même !).
        </p>

        <p>
          {' '}
          Je suis team introvertie ++ et j’adore pratiquer tranquillement chez
          moi, ou dans la nature calme. Ma séance préférée se résume à : ~ un
          exercice de respiration purifiant, une bougie, des vêtements
          confortables, un espace cosy qui sent bon (fleurs, arbres, encens), un
          fond sonore qui m’apaise (spécial handpan, bol tibétain ou flûte), un
          esprit conscient et léger avec une acceptation de toutes mes émotions,
          des postures qui favorisent le bien-être du corps, un rappel des
          principes essentiels du yoga, et de la bienveillance envers moi-même.
        </p>
      </div>
      <a href="mailto:yoga-avec-ana@outlook.com" className="lien_btn_a_propos">
        <button className="button button_papote">On papote ?</button>
      </a>
    </div>
  );
}

export default A_propos;
