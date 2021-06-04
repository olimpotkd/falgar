import React from 'react';
import './home.scss';

import PageBanner from '../components/pageBanner/pageBanner.jsx';
import SingleSection from '../components/singleSection/singleSection.jsx';

import Products from './products';
import Services from './services';
import Contact from './contact';
import About from './about';

const Home = () => {

  return ( 
    <>
      <PageBanner id={"home"} bannerImage={'/assets/main-cover.jpg'} bannerText={""} />
      
      <SingleSection>
        <h3>Construcción. Soldadura. Maquinaria. Protección.</h3> ,
        <h3>¡Tenemos la solución!</h3>
      </SingleSection>

      <PageBanner id={"products"} bannerImage={'/assets/products.jpg'} bannerText={"Productos"} textPosition={'center'} />
      <Products />
      
      <PageBanner id={"services"} bannerImage={'/assets/services.jpg'} bannerText={"Servicios"} textPosition={'center'} />
      <Services />

      
      <PageBanner id={"about"} bannerImage={'/assets/about.jpg'} bannerText={"Nosotros"} textPosition={'center'} />
      <About />

      <PageBanner id={"contact"} bannerImage={'/assets/contact.jpg'} bannerText={"Contacto"} textPosition={'center'} />
      <Contact />
    </>
  );
}
 
export default Home;