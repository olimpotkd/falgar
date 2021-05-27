import React from 'react';
import './nav.scss';

import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav> 
      <span className="wrapper">
        <span className="logo-container">
          <Link to="/">
            <img src="/assets/falgar_borde.png" alt="FALGAR"/>
          </Link>
        </span>
        <span className="links-container">
            <Link to="/products">Productos</Link>
            <Link to="/services">Servicios</Link>
            <Link to="/about">Quienes somos</Link>
            <Link to="/contact">Contacto</Link>
        </span>
      </span> 
      </nav>
  );
}

export default Nav;