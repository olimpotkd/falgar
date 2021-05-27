import React, { useEffect, useState } from 'react';
import './logoImgStrip.scss';

const LogoImgStrip = ({ data, customClass} ) => {

  const [ galleryItems, setGalleryItems ] = useState([]);
  const [ loading, setLoading ] = useState(false);

  const convertToJSXGallery = (arr) => {
    let gallery = [];

    for (let i = 0; i < arr.length; i++) {
      gallery.push(
        <a key={arr[i].id} href={arr[i].url} className="brand-card gallery-element">
              <div>
                <img src={arr[i].brandImage} alt=""/>
              </div>
        </a>
      )
    }
    setGalleryItems(gallery);
  }

    // useEffect(() => {
    //   setLoading(true);

    //   fetch('brandsdata.json', {
    //     headers: {
    //       'Content-Type': 'application/json',
    //       'Accept': 'application/json'
    //     }
    //   })
    //     .then(response => response.json())
    //     .then(convertToJSXGallery)
    //     .then(setLoading(false));
    // }, []);

    if(loading){
      return <h3>Loading...</h3>;
    }

  return ( 
    
    <section className="logo-image-section">
        <div className="brands-container link-img-gallery-wrapper">
          <h3>Nuestras marcas</h3>
          <span>

            {galleryItems}
            
          </span>
        </div>
      </section>
   );
}
 
export default LogoImgStrip;