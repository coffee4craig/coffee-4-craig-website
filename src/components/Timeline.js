import React from 'react';

import PreviewCompatibleImage from './PreviewCompatibleImage';

const Timeline = ({ title, timeline}) => (
  <>
    <h2>{title}</h2>
    {
      timeline && timeline.length > 0 && timeline.map((item, i) =>
        <div key={i}>
          {item.year}
          {item.text}
          <PreviewCompatibleImage cName="" imageInfo={item.featuredImage} />
        </div>
      )
    }
  </>
);

export default Timeline;