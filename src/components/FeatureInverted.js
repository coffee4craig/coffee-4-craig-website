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
              <a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=VBW25QGTWEMYC&source=url" 
              className="btn btn--style-g donate__btn">{primaryButtonText}</a>
            </div>
          </div>
        </div>
      </div>    
    </div>
    );
  }


export default FeatureInverted;