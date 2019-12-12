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
          <h2>{superhero.name}</h2>
          <p>{superhero.description}</p>
        </div>       
      ))
    }
    </div>
  </div>
)

export default Superheroes;