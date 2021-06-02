import React from 'react';
import './nav.scss';

// import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav> 
      <span className="wrapper">
        <span className="logo-container">
          {/* <Link to="/">
            <img src="/assets/falgar_borde.png" alt="FALGAR"/>
          </Link> */}
          <a href="#home">
            <img src="/assets/falgar_borde.png" alt="FALGAR"/>
          </a>
        </span>
        <span className="links-container">
            {/* <Link to={{hash:"#products"}}>Productos</Link>
            <Link to={{hash:"#services"}}>Servicios</Link>
            <Link to={{hash:"#about"}}>Quienes somos</Link>
            <Link to={{hash:"#contact"}}>Contacto</Link> */}
            <a href="#products">Productos</a>
            <a href="#services">Servicios</a>
            <a href="#about">Nosotros</a>
            <a href="#contact">Contacto</a>
        </span>
      </span> 
      </nav>
  );
}

export default Nav;