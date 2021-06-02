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
          <h3>Somos representantes de las mejores marcas para aplicaciones y procesos de soldadura, 
            como también equipos de protección y consumibles innovadores, de reconocimiento mundial</h3>
          
          <LogoImgStrip data={brands} customClass={"brands"}/>

    </section>
  );
}
 
export default Products;