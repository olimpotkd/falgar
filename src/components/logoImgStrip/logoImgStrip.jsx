import React, { useEffect, useState } from 'react';
import './logoImgStrip.scss';

const LogoImgStrip = ({ data, customClass } ) => {

  const [ galleryItems, setGalleryItems ] = useState([]);

  useEffect(() => {
    if(data.length > 0) {   

      let gallery = [];

      for (let i = 0; i < data.length; i++) { 
        gallery.push(
          <a key={data[i].id} href={data[i].url} className="gallery-element">
                <div>
                  <img src={data[i].imageSrc} alt=""/>
                </div>
          </a>
        )
      }
      setGalleryItems(gallery);
    }
  }, [data]);

  const classes = `${customClass}-container link-img-gallery-wrapper`;
    
  return ( 
    <div className="logo-image-container">
        <div className={classes}>
          <span>
            {galleryItems}
          </span>
        </div>
      </div>
   );
}
 
export default LogoImgStrip;