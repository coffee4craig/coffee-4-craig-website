import React from 'react';

const HomepageHero = ({ title, subtitle, donationTitle, donationDescription, donateButtonText }) => (
  <div className="hero">
    <div className="hero__wrapper">
      <div className="hero__col">
        <h1 className="hero__title">{title}</h1>
        <p className="hero__subtitle">{subtitle}</p>
      </div>
      <div className="hero__col">
        <div className="hero__donate">
          <h2>{donationTitle}</h2>
          <p>{donationDescription}</p>
          <div className="hero__donate-cta">
            <button className="btn btn--style-a hero__donate-btn">{donateButtonText}</button>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default HomepageHero;