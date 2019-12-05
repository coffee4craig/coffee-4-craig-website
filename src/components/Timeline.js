import React from 'react';

import PreviewCompatibleImage from './PreviewCompatibleImage';
import Tab from './Tab';

const Timeline = ({ title, timeline}) => {
  const tabData = {
    tabList: [
      {
        label: "£5",
        id: "one"
      },
      {
        label: "£10",
        id: "two"
      },
      {
        label: "£20",
        id: "three"
      },
      {
        label: "£50",
        id: "four"
      },
      {
        label: "£100",
        id: "five"
      }
    ],
    content: [
      {
        text: "By donating just £5, you can provide a hot drink",
        id: "one"
      },
      {
        text: "By donating just £10, you can provide a meal",
        id: "two"
      },
      {
        text: "By donating just £20, you can provide two pairs of thermal gloves for those sleeping rough in the winter months.",
        id: "three"
      },
      {
        text: "By donating just £50, you can provide two pairs of thermal gloves for those sleeping rough in the winter months.",
        id: "four"
      },
      {
        text: "By donating just £100, you can provide two pairs of thermal gloves for those sleeping rough in the winter months.",
        id: "five"
      }
    ]
  };

  return (
    <>
      <h2>{title}</h2>
      {/* <Tab {...tabData} /> */}
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
  )
};

export default Timeline;