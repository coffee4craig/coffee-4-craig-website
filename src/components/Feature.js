import React from 'react';

import PreviewCompatibleImage from './PreviewCompatibleImage';

const FeatureComponent = ({ title, text, ctaOne, ctaTwo, featureImage }) => (
  <div className="feature-component">
    <div className="feature-component__wrapper">
      <div className="feature-component__col">
        <div className="feature-component__donate">
          <h2 className="feature-component__title">{title}</h2>
          <p className="feature-component__text">{text}</p>
          <div className="feature-component__donate-cta">
            <a className="btn btn--style-f feature-component__donate-btn" href={ctaOne.url}><em>{ctaOne.label}</em></a>
            <a className="btn btn--style-e feature-component__donate-btn" href={ctaTwo.url}><em>{ctaTwo.label}</em></a>
          </div>
        </div>
      </div>
      <div className="feature-component__col">
        <PreviewCompatibleImage cName="feature-component__col-image" imageInfo={featureImage} />
      </div>
    </div>
  </div>
)

export default FeatureComponent;