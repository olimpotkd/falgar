import React from 'react';
import './singleSection.scss';

const MessageSection = ({ children }) => {

  return ( 
    <section className="single-section">
      <div className="message-container">
        {children}
      </div>
    </section>
  );
}

export default MessageSection;