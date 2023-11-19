import { Link } from 'react-router-dom';

function Button({ value, link_to }) {
  return (
    <div>
      <Link to={link_to}>{value}</Link>
    </div>
  );
}

export default Button;
