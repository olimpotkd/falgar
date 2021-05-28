import React, { useEffect, useState } from 'react';
import LogoImgStrip from '../components/logoImgStrip/logoImgStrip.jsx';
import { db } from '../firebase';

const Products = () => {
  const [ brands, setBrands ] = useState([]);

  useEffect(() => {
    const brandsRef = db.collection('brands');

    brandsRef.get()
      .then(result => {
        if (!result.empty) {
          let dataArray = [];
          result.forEach(doc =>  {
            let document = doc.data();
            document.id = doc.id;
            dataArray.push(document)
          });

          setBrands(dataArray);
        }
      })
  }, []);
  
  return ( 
    <>
      <h1>Products</h1>
      <LogoImgStrip data={brands} customClass={"brands"}/>
    </>
   );
}
 
export default Products;