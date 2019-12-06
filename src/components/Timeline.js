import React from 'react';

import PreviewCompatibleImage from './PreviewCompatibleImage';
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
    <>
      <h2>{title}</h2>
      <Tab tabList={tabButtons} content={tabContent} />
    </>
  )
};

export default Timeline;