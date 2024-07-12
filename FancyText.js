//U99350821
import React from 'react';
import './FancyText.css';

function FancyText({ title, text }) {
  return (
    <div className={title ? 'fancy-title' : 'fancy-text'}>
      {text}
    </div>
  );
}

export default FancyText;
