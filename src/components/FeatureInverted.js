import React from 'react';

import PreviewCompatibleImage from './PreviewCompatibleImage';

const FeatureInverted = ({ title, text, primaryButtonText, backgroundImage }) => {
  return (
    <div className="feature-inverted">
      <PreviewCompatibleImage cName="feature-inverted__image" imageInfo={backgroundImage}></PreviewCompatibleImage>
      <div className="feature-inverted__overlay">
        <div className="feature-inverted__wrapper">
          <div className="feature-inverted__col">
            <h2 className="feature-inverted__title">{title}</h2>
            <p className="feature-inverted__text">{text}</p>
            <div className="donate__cta">
              <button className="btn btn--style-g donate__btn">{primaryButtonText}</button>
            </div>
          </div>
        </div>
      </div>    
    </div>
    );
  }


export default FeatureInverted;