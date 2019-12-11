import React from 'react';

const LeadText = ({ text }) => (
  <div className="lead-text"> 
    <div className="lead-text__col">
        <div className="lead-text__text">
          {text}
        </div>
    </div>
  </div>
)

export default LeadText;