import React from 'react';

const Volunteer = ({ title, buttonText}) => (
  <div className="volunteer">
    <div className="volunteer__wrapper">
      <h4 className="volunteer__title">{title}</h4>
      <button className="btn btn--style-f volunteer__button">{buttonText}</button>
    </div>
  </div>
); 

export default Volunteer;