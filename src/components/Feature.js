import React from 'react';

import PreviewCompatibleImage from './PreviewCompatibleImage';

const FeatureComponent = ({ title, text, primaryButtonText, secondaryButtonText, featureImage }) => (
  <div className="feature-component">
    <div className="feature-component__wrapper">
      <div className="feature-component__col">
        <div className="feature-component__donate">
          <h2>{title}</h2>
          <p>{text}</p>
          <div className="feature-component__donate-cta">
            <button className="btn btn--style-f feature-component__donate-btn">{primaryButtonText}</button>
            <button className="btn btn--style-b feature-component__donate-btn">{secondaryButtonText}</button>
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