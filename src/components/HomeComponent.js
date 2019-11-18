import React from 'react';
import makeDifference from '../img/make-a-dif.png'

const HomeComponent = () => (
  <div className="home-component">
    <div className="home-component__wrapper">
      <div className="home-component__col">
        <div className="home-component__donate">
          <h2>Your donation can help make a real difference to those in need.</h2>
          <p>By donating just £10, you can provide two pairs of thermal gloves for those sleeping rough in the winter months.</p>
          <div className="home-component__donate-cta">
            <button className="btn btn--style-a home-component__donate-btn">Volunteer With Us</button>
            <button className="btn btn--style-b home-component__donate-btn">Donate Today</button>
          </div>
        </div>
      </div>
      <div className="home-component__col">
          <img class="home-component__col-image" src={makeDifference} alt="Make a difference image"></img>
      </div>
    </div>
  </div>
)

export default HomeComponent;