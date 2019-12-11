import React from 'react';

import Tab from './Tab';

const donate = [
      {
        amount: "£5",
        description: "By donating just £5, you can provide a hot drink",
      },
      {
        amount: "£10",
        description: "By donating just £10, you can provide a meal",
      },
      {
        amount: "£20",
        description: "By donating just £20, you can provide two pairs of thermal gloves for those sleeping rough in the winter months.",
      },
      {
        amount: "£50",
        description: "By donating just £50, you can provide two pairs of thermal gloves for those sleeping rough in the winter months.",
      },
      {
        amount: "£100",
        description: "By donating just £100, you can provide two pairs of thermal gloves for those sleeping rough in the winter months.",
      }
    ];

const Donate = ({ description, buttonText }) => {
  const donateDate = donate.values();

  const tabButtons = [];
  const tabContent = [];

  for (const value of donateDate) {
    const contentObj = {};

    contentObj['text'] = value.description;

    tabButtons.push(value.amount)
    tabContent.push(contentObj);
  }

  return(
    <div className="donate">
      <Tab tabList={tabButtons} content={tabContent} isInverted />
      <div className="donate__cta">
        <button className="btn btn--style-g donate__btn"><em>Donate £10 Now</em></button>
      </div>
    </div>
  )
};

export default Donate;