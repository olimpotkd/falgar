import React from 'react';
import LogoImgStrip from '../components/logoImgStrip/logoImgStrip';

// import DividedSection from '../components/dividedSection/dividedSection';

import './contact';
import './contact.scss';

const Contact = ({ customClass }) => {

  return ( 
    <section className={`contact page-container ${customClass}`}>
      <h1>Falgar Welding Tech</h1>
      <h2>Calle Aruba #83, Ensanche Ozama</h2>
      <h2>Santo Domingo Este, República Dominicana</h2>
      <h2>809.770.1519 / 809.660.6743</h2>
      <hr />
      <span>
        <a href="https://instagram.com/falgardr">
          <img src="assets/siguenos-en-instagram.png" alt="" />
        </a>
      </span>
    </section>
   );
}
 
export default Contact;