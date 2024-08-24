import './card.css';
import meditation_img from '../../assets/meditation.jpg';
import Button from '../Button/button';

function Card({ title, content /*picture*/ }) {
  return (
    <div className="card">
      <div className="img_card_container">
        <img
          src={meditation_img}
          className="img_card"
          alt="card_illustration"
        />
      </div>
      <div className="description">
        <h3 className="card_home_title">{title}</h3>
        {Array.isArray(content) ? (
          content.map((description) => (
            <p className="card_home_content">{description}</p>
          ))
        ) : (
          <p className="card_home_content">{content}</p>
        )}
        <div className="btn_container presta_btn_home_container">
          <Button
            value={'En savoir plus !'}
            link_to="/prestations"
            className="presta_btn"
          />
        </div>
      </div>
    </div>
  );
}

export default Card;
