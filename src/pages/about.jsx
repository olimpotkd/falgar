import React, { useEffect, useState } from 'react';
import DividedSection from '../components/dividedSection/dividedSection';
import LogoImgStrip from '../components/logoImgStrip/logoImgStrip.jsx';
import './about.scss';

import { db } from '../firebase';

const About = () => {
  const [ customers, setCustomers ] = useState([]);

  useEffect(() => {
    const customersRef = db.collection('customers');

    customersRef.get()
      .then(res => {
        if(!res.empty) {
          setCustomers(parseCustomers(res));
        }
      })
  }, []);

  const parseCustomers = (customers) => {
    let parsedCustomers = [];

    customers.forEach((doc) => {
      let data = doc.data();

      let parsedCustomer = {
        id: doc.id,
        url: data.siteUrl,
        imageSrc: data.imageUrl
      };

      parsedCustomers.push(parsedCustomer);
    });
    console.log(parsedCustomers);
    return parsedCustomers;
  }

  let leftSide = 
  <article>
    <img src="/assets/about_small.jpg" alt="" />
  </article>;

let rightide = 
  <article className="description-text-container">
    <h2>
          Falgar Welding Tech  es una empresa que surge con el propósito de suplir soluciones para diversos sectores industriales. 
          Tenemos las mejores alternativas para diversas aplicaciones y procesos de soldadura, con equipos y consumibles innovadores 
          de reconocimiento mundial
    </h2>
  </article>;

return ( 
  <section className="about page-container">
    <div className="wrapper">
      <DividedSection leftSide={leftSide} rightSide={rightide}/>
      
      <LogoImgStrip headerText={"Nuestros clientes nos prefieren"} data={customers} customClass={"brands"}/>
    </div>
  </section>
 );
}
 
export default About;
