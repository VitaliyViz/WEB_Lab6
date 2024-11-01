import React from 'react';
import "../Navigation/Navigation.scss";
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="navigation">
      <Link to="/" className='navigationItem'>Home</Link>
      <Link to="/catalog" className='navigationItem'>Catalog</Link>
      <Link to="/cart" className='navigationItem'>Cart</Link>
    </nav>
  );
};

export default Navigation;
