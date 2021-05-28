import React, { useEffect, useState } from 'react';
import './logoImgStrip.scss';

const LogoImgStrip = ({ data, customClass } ) => {

  const [ galleryItems, setGalleryItems ] = useState([]);

  useEffect(() => {
    if(data.length > 0) {   

      let gallery = [];

      for (let i = 0; i < data.length; i++) { 
        gallery.push(
          <a key={data[i].id} href={data[i].url} className="brand-card gallery-element">
                <div>
                  <img src={data[i].brandImage} alt=""/>
                </div>
          </a>
        )
      }
      setGalleryItems(gallery);
    }
  }, [data]);

  const classes = `${customClass}-container link-img-gallery-wrapper`;
    
  return ( 
    
    <section className="logo-image-section">
        <div className={classes}>
          <h3>Nuestras marcas</h3>
          <span>

            {galleryItems}
            
          </span>
        </div>
      </section>
   );
}
 
export default LogoImgStrip;