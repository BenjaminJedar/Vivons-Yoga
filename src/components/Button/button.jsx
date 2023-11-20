import { Link } from 'react-router-dom';
import './button.css';

function Button({ value, link_to }) {
  return (
    <div>
      <Link to={link_to} className="button">
        {value}
      </Link>
    </div>
  );
}

export default Button;
