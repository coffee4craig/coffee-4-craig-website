import React from 'react';
import TotalGiving from '../img/totalgiving.png'

const RichText = ({text}) => (
  <div className="richtext">
    <div className="richtext__wrapper">
    <p dangerouslySetInnerHTML={{__html: text}}></p>
    </div>
  </div>
);

export default RichText;