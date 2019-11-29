import React from 'react';

const Quote = ({ quoteText, quoteSource}) => (
  <div className="quote">
    <div className="quote__wrapper">
    <h2 className="quote__text">{quoteText}</h2>
    <p className="quote__source">{quoteSource}</p>
    </div>
  </div>
);

export default Quote;