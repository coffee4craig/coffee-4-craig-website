import React from 'react';
import SuperHero1 from '../img/placeholders/hero1.jpg';
import SuperHero2 from '../img/placeholders/hero2.jpg';
import SuperHero3 from '../img/placeholders/hero3.jpg';
import PreviewCompatibleImage from './PreviewCompatibleImage';

const Superheroes = ({ title, superheroesList }) => (  
  <div className="superheroes">
    <h2 className="superheroes__title">{title}</h2>
    <div class="superheroes__section">
    {
      superheroesList && superheroesList.length > 0 && superheroesList.map((superhero, i) => (
        <div key={i} className="superheroes__section-col">
          <PreviewCompatibleImage cName="" isContained imageInfo={superhero.image} />
          <div className="superheroes__section-col__title">{superhero.name}</div>
          <div className="superheroes__section-col__body">{superhero.description}</div>
        </div>       
      ))
    }
    </div>
  </div>
)

export default Superheroes;