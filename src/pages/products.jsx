import React, { useEffect, useState } from 'react';
import LogoImgStrip from '../components/logoImgStrip/logoImgStrip.jsx';
import './products.scss';

import { db } from '../firebase';

const Products = () => {
  const [ brands, setBrands ] = useState([]);

  useEffect(() => {
    const brandsRef = db.collection('brands');

    brandsRef.get()
      .then(result => {
        if (!result.empty) {
          setBrands(parseBrands(result));
        }
      })
  }, []);

  const parseBrands = (result) => {
    let parsedBrandsArray = [];

    result.forEach(doc =>  {
      let data = doc.data();

      let parsedDoc = {
        id: doc.id,
        url: data.url,
        imageSrc: data.brandImage
      }

      parsedBrandsArray.push(parsedDoc)
    });

    return parsedBrandsArray;
  };


  
  return ( 
    <section className="products">
      <div className="wrapper">
          {/* <h2>Representamos las mejores marcas para aplicaciones y procesos de soldadura,  */}
            {/* como también equipos de protección y consumibles innovadores, de reconocimiento mundial</h2> */}
          
          <article>
            <div>
              <h2>Contamos con soluciones para:</h2>
            </div>
            <div>
              <ul>
                <li>Soldadura de revestimiento</li>
                <li>Corte y Pulido</li>
                <li>Tornillería</li>
                <li>Herramientas</li>
                <li>Seguridad Industrial</li>
                <li>Salud Ocupacional</li>
              </ul>
            </div>
          </article>

          <LogoImgStrip headerText={"Representamos las marcas"} data={brands} customClass={"brands"}/>
      </div>
    </section>
  );
}
 
export default Products;