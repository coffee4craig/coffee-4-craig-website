import React from 'react';

const Volunteer = ({ title, text, ctaOne, ctaTwo}) => (
  <div className="volunteer">
    <h2>{title}</h2>
    <p>{text}</p>
    <a href={ctaOne.url}>{ctaOne.label}</a>
    <a href={ctaOne.url}>{ctaOne.label}</a>
  </div>
);

export default Volunteer;