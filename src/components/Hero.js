import React from 'react';

import PreviewCompatibleImage from './PreviewCompatibleImage';

const Hero = ({ title, backgroundImage }) => {
  return (
    <div className="hero">
      <div className="hero__image-wrapper">
        <PreviewCompatibleImage cName="hero__image-wrapper" imageInfo={backgroundImage}></PreviewCompatibleImage>
      </div>
      <div className="hero__overlay">
        <h1 className="hero__title">{title}</h1>
      </div>
    </div>
  );
}

export default Hero;