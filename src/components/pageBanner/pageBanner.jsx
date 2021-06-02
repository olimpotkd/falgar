import React from 'react';
import './pageBanner.scss';

const PageBanner = ({ textPosition, bannerImage, bannerText, id }) => {

  const customStyle = {
    backgroundImage: `url(${bannerImage})`
  }
  
  const customClasses = textPosition;
  const spanClass = bannerText ? "text-container" : "";

  return (
    <>
      <div id={id || ""} className={"banner-image"} style={customStyle}>
        <span className={spanClass}>
          <h2 className={customClasses}>{bannerText}</h2>
        </span>
      </div>
    </>
  )

}

export default PageBanner;