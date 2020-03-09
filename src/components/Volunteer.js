import React from "react";

import Donate from "./Donate";

const Volunteer = ({ title, text, ctaOne, ctaTwo }) => (
  <div className="volunteer">
    <div className="volunteer__wrapper">
      <div className="volunteer__col">
        <h2 className="volunteer-title">{title}</h2>
        <p
          className="volunteer-text"
          dangerouslySetInnerHTML={{ __html: text }}
        ></p>
        <div className="volunteer__button-row">
          <a className="btn btn--style-f volunteer-button" href={ctaOne.url}>
            <em>{ctaOne.label}</em>
          </a>
          <a className="btn btn--style-b volunteer-button" href={ctaTwo.url}>
            <em>{ctaTwo.label}</em>
          </a>
        </div>
      </div>
      <div className="volunteer__col">
        <Donate />
      </div>
    </div>
  </div>
);

export default Volunteer;
