import React from 'react';
import DividedSection from '../components/dividedSection/dividedSection';

import './services.scss';
// import './common.scss';

const Services = ({ customClass }) => {
  let leftSide = 
    <article className="description-text-container">
      <h2>Contamos con un taller ESPECIALIZADO</h2>
      <h2>y junto a un personal, con más de 15 años de experiencia</h2>
      <h2>brindamos soluciones de reparación y mantenimiento a equipos de corte y soldadura para diversas marcas y procesos</h2>
    </article>;

  let rightide = 
    <article>
      <img src="/assets/services_small.jpg" alt="" />
    </article>;

  return ( 
    <section className={`services page-container ${customClass}`}>
      <DividedSection leftSide={leftSide} rightSide={rightide}/>
    </section>
   );
}
 
export default Services;