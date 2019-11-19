import React from 'react';
import makeDifference from '../img/make-a-dif.png'

const FeatureComponent = () => (
  <div className="feature-component">
    <div className="feature-component__wrapper">
      <div className="feature-component__col">
        <div className="feature-component__donate">
          <h2>Your donation can help make a real difference to those in need.</h2>
          <p>By donating just £10, you can provide two pairs of thermal gloves for those sleeping rough in the winter months.</p>
          <div className="feature-component__donate-cta">
            <button className="btn btn--style-a feature-component__donate-btn">Volunteer With Us</button>
            <button className="btn btn--style-b feature-component__donate-btn">Donate Today</button>
          </div>
        </div>
      </div>
      <div className="feature-component__col">
          <img class="feature-component__col-image" src={makeDifference} alt="Make a difference image"></img>
      </div>
    </div>
  </div>
)

export default FeatureComponent;