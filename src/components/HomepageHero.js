import React from 'react';

import Donate from './Donate';

const HomepageHero = ({ title, subtitle, donationTitle, donationDescription, donateButtonText }) => (
  <div className="homepage-hero">
    <div className="homepage-hero__wrapper">
      <div className="homepage-hero__col">
        <h1 className="homepage-hero__title">{title}</h1>
        <p className="homepage-hero__subtitle">{subtitle}</p>
      </div>
      <div className="homepage-hero__col">
        <Donate />
      </div>
    </div>
  </div>
)

export default HomepageHero;
