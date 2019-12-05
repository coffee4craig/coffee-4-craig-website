import React from 'react';
import SuperHero1 from '../img/hero1.jpg';
import SuperHero2 from '../img/hero2.jpg';
import SuperHero3 from '../img/hero3.jpg';

const Superheroes = ({ title, list }) => (
  <div className="superheroes">
    {title}
    <div className="superheroes__wrapper">
        <h2>Our Super Heroes</h2>
        <div class="superheroes__section">
            <div class="superheroes__section-col">
            <img src={SuperHero1}></img>
            <h2>Peter</h2>
            <p>‘I enjoy the support we give the homeless, it is such a good feeling when I pass a homeless person and they
                 say “I know you” and it’s because I have helped them at street kitchens with Coffee4Craig.’</p>

            </div>
            <div class="superheroes__section-col">
            <img src={SuperHero2}></img>
            <h2>Michelle</h2>
            <p>Watching how passionate they are about helping people in need is heartwarming. The whole team do more than 
                just provide food to the vulnerable they give hope and try to build a future.’</p>

            </div>
            <div class="superheroes__section-col">
            <img src={SuperHero3}></img>
            <h2>Thomas</h2>
            <p>‘Starting Coffee4Craig with Hendrix was the only way I could deal with the loss of my younger brother Craig. I couldn’t watch other people in this situation without help.
                 I couldn’t walk past blindly anymore, neither of us could.’</p>

            </div>
        </div>
    </div>
  </div>
)

export default Superheroes;