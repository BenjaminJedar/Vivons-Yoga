import ana_tournesol from '../../assets/Ana_tournesol.jpeg';
import ana_img from '../../assets/Ana.jpeg';
import Button from '../../components/Button/button';
const prestation_array = require('../../datas/home_prestations.json');

function Home() {
  return (
    <div className="home">
      <div className="accueil">
        <img
          src={ana_tournesol}
          alt="Ana dans les tournesols"
          className="img_ana_tournesol"
        />
        <h1 className="title">Yoga avec Ana</h1>
        <p className="presentation">
          Petite phrase de présentation de Yoga avec Ana !
        </p>
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

      <div className="contact">
        <h3 className="title_contact">Contact</h3>
        <form action="/ma-page-de-traitement" method="post">
          <ul>
            <li>
              <label for="name">Nom&nbsp;:</label>
              <input type="text" id="name" name="user_name" />
            </li>
            <li>
              <label for="mail">E-mail&nbsp;:</label>
              <input type="email" id="mail" name="user_email" />
            </li>
            <li>
              <label for="msg">Message&nbsp;:</label>
              <textarea id="msg" name="user_message"></textarea>
            </li>
          </ul>
        </form>
      </div>
    </div>
  );
}

export default Home;
