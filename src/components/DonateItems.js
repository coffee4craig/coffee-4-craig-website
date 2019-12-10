import React from 'react';

import PreviewCompatibleImage from './PreviewCompatibleImage';

const DonateItems = ({ title, text, list, cta }) => (
  <div className="donate-items">
    <h2>{title}</h2>
    <p>{text}</p>
    {
      list && list.length > 0 && list.map((item, i) => 
        <div>
          <PreviewCompatibleImage cName="donate-item__image" imageInfo={item.image} />
          <p>{item.label}</p>
          <a href={item.cta.url}>{item.cta.label}</a>
        </div>
      )
    }
  </div>
);

export default DonateItems;