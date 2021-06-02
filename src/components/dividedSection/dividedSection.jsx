import React from 'react';
import './dividedSection.scss';

const DividedSection = ({ image, invert, fullImage, children}) => {
  if (invert) {
    if (!fullImage) {
    return ( 
      <section className="divided-section">
        <div className="media-container">
          <img src={image} alt="" />
        </div>
        <div className="message-container">
          {children}
        </div>
      </section>
    )}
  }
  return ( 
    <section className="divided-section">
      <div className="message-container">
        {children}
      </div>
      <div className="media-container">
        <img src={image} alt="" />
      </div>
    </section>
  );
}

export default DividedSection;