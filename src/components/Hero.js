import React from 'react';

const Hero = () => (
  <div className="hero">
    <div className="hero__wrapper">
      <div className="hero__col">
        <h1 className="hero__title">Make a massive difference today</h1>
        <p className="hero__subtitle">Here in Manchester, we have had a dramatic increase in numbers, the likes that have never been seen before and it is increasing every day.</p>
      </div>
      <div className="hero__col">
        <div className="hero__donate">
          <h2>Your donation can help make a real difference to those in need.</h2>
          <p>By donating just £10, you can provide two pairs of thermal gloves for those sleeping rough in the winter months.</p>
          <div className="hero__donate-cta">
            <button className="btn btn--style-a hero__donate-btn">Donate £10 Now</button>
            <button className="btn btn--style-c">Or enter your own amount</button>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Hero;