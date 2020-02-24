import React from 'react';
import TotalGiving from '../img/totalgiving.png'

const RichText = () => (
  <div className="richtext">
    <div className="richtext__wrapper">
    <p className="richtext__source richtext-bold">    We have running costs and the six paid staff (three of which are part-time) are all on the same hourly living wage. 
    We do, however, need funding to pay volunteer expenses, buy guests bus passes so they can attend appointments, 
    support people who are living in fuel poverty (pay gas/electricity bills), and keep the food bank well stocked. </p>
    <p className="richtext__source">If you specify on your donation we will use it directly to support people who experience homelessness or are at risk 
    of homelessness.</p>
    <p className="richtext__source">​Please donate through our giving fundraising page set up, consider setting up a monthly contribution.</p>
    <p className="richtext__source"> We will also support groups who are wanting to arrange fundraisers for us. We have had great events in the past from 
     sleep-outs to comedy nights….do you have a good fundraising idea?</p>

     <div className="donate__cta">
        <a href="" className="btn btn--style-d donate__btn"><em>Donate 10£ now </em></a>
      </div>
      <div class="richtext__image__wrapper">
     <img src={TotalGiving} class="richtext__image"></img>
     </div>
  </div>
  </div>
);

export default RichText;