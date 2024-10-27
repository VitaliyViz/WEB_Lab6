import React from 'react';
import "../Navigation/Navigation.scss";

const Navigation = () => {
  return (
    <nav className="navigation">
        <ul className="navigationMenu">
            <li className="navigationItem">Shop</li>
            <li className="navigationItem">Home</li>
            <li className="navigationItem">About Us</li>
            <li className="navigationItem">Contact</li>
        </ul>
    </nav>
  );
};

export default Navigation;
