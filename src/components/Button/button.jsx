import { Link } from 'react-router-dom';
import React from 'react';
import './button.css';

function Button({ value, link_to }) {
  return (
    <React.StrictMode>
      <Link to={link_to} className="button">
        {value}
      </Link>
    </React.StrictMode>
  );
}

export default Button;
