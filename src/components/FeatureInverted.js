import React from 'react';

import PreviewCompatibleImage from './PreviewCompatibleImage';


const FeatureInverted = ({ title, text, primaryButtonText, image, alt }) => {
  const backgroundImage = {}
  backgroundImage['image'] = image;
  backgroundImage['alt'] = alt;

  return (
    <div className="feature-inverted">
      <div className="feature-inverted__image-wrapper">
        <PreviewCompatibleImage cName="feature-inverted__image-wrapper" imageInfo={backgroundImage}></PreviewCompatibleImage>
      </div>    
      <div className="feature-inverted__wrapper">
        <div className="feature-inverted__col">
          <h5 className="feature-inverted__title">{title}</h5>
          <p className="feature-inverted__text">{text}</p>
          <div className="donate__cta">
            <button className="btn btn--style-g donate__btn">{primaryButtonText}</button>
          </div>
        </div>
      </div>
    </div>
    );
  }


export default FeatureInverted;