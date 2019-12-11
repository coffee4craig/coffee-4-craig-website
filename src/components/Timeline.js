import React from 'react';

import Tab from './Tab';

const Timeline = ({ title, timeline}) => {
  const timelineData = timeline.values();

  const tabButtons = [];
  const tabContent = [];

  for (const value of timelineData) {
    const contentObj = {};

    contentObj['text'] = value.text;
    contentObj['featuredImage'] = value.featuredImage;

    tabButtons.push(value.year)
    tabContent.push(contentObj);
  }

  return (
    <div class="timeline">
      <h2 class="timeline__title">{title}</h2>
      <Tab tabList={tabButtons} content={tabContent} />
    </div>
  )
};

export default Timeline;
