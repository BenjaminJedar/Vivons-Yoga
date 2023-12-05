import './card.css';

function Card({ title, content }) {
  return (
    <div className="card">
      <h3 className="card_home_title">{title}</h3>
      {Array.isArray(content) ? (
        content.map((description) => (
          <p className="card_home_content">{description}</p>
        ))
      ) : (
        <p className="card_home_content">{content}</p>
      )}
    </div>
  );
}

export default Card;
