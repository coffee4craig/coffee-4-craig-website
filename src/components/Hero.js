import React from 'react';
import Group from '../img/placeholders/group-photo.png';

const Hero = ({ title, backgroundImage }) => (
  <div className="hero">
      <img src={backgroundImage}></img>
      <p>{title}</p>
  </div>
);

export default Hero;