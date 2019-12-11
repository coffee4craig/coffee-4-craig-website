import React from 'react';

const Volunteer = ({ title, text, ctaOne, ctaTwo}) => (
  <div className="volunteer">
    <div className="volunteer__wrapper">
      <div className="volunteer__col">
        <h2 className="volunteer-title">{title}</h2>
        <p className="volunteer-text">{text}</p>
        <div className="volunteer__button-row" >
          <a className="btn btn--style-f volunteer-button" href={ctaOne.url}><em>{ctaOne.label}</em></a>
          <a className="btn btn--style-b volunteer-button" href={ctaOne.url}><em>{ctaTwo.label}</em></a>
        </div>
      </div>
      <div className="volunteer__col">
      <h2>TO BE REPLACED WITH DONATE CTA</h2>
      </div>
    </div>
  </div>
); 

export default Volunteer;