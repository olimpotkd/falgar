import React from 'react';
import './dividedSection.scss';

const DividedSection = ({ leftSide, rightSide }) => {
  return ( 
    <section className="divided-section">
      <div className="divided-section-wrapper">
        <div className="left-container">
          {leftSide}
        </div>
        <div className="right-container">
          {rightSide}
        </div>
      </div>
    </section>
  )
}

export default DividedSection;