import React from 'react';
import './singleSection.scss';

const MessageSection = ({ text }) => {

  return ( 
    <section className="single-section">
      <div className="message-container">
        {text}
      </div>
    </section>
  );
}

export default MessageSection;