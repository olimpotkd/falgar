import React, { useState } from 'react';
import LogoImgStrip from '../components/logoImgStrip/logoImgStrip.jsx';

const Products = () => {
  const [ brands, setBrands ] = useState([
    {
      "id": 1,
      "brandName": "Fronius",
      "url": "https://fronius.com",
      "brandImage": "/assets/brands/fronius_logo.png"
    },
    {
      "id": 2,
      "brandName": "Cordova Safety",
      "url": "https://cordovasafety.com",
      "brandImage": "/assets/brands/cordova_safety.png"
    },
    {
      "id": 3,
      "brandName": "Postle Industries",
      "url": "https://postle.com",
      "brandImage": "/assets/brands/postle_industries.png"
    }
  ])

  return ( 
    <>
    <h1>Products</h1>
    <LogoImgStrip/>
    
    </>
   );
}
 
export default Products;