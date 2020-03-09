import React from "react";

const LeadText = ({ text }) => (
  <div className="lead-text">
    <div className="lead-text__wrapper">
      <div class="lead-text__col">
        <div class="lead-text__text" dangerouslySetInnerHTML={{ text }}></div>
      </div>
    </div>
  </div>
);

export default LeadText;
