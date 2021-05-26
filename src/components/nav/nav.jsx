import React from 'react';
import './nav.scss';

const Nav = () => {
  return (
    <nav> 
      <span className="wrapper">
        <span className="logo-container">
          <a href="./index.html">
            <img src="/assets/falgar_borde.png" alt="FALGAR"/>
          </a>
        </span>
        <span className="links-container">
            <a href="/products.html">Productos</a>
            <a href="/services.html">Servicios</a>
            <a href="/about.html">Quienes somos</a>
            <a href="/contact.html">Contacto</a>
        </span>
      </span> 
      </nav>
  );
}

export default Nav;