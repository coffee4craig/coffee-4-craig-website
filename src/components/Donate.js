import React from 'react';

import Tab from './Tab';

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

const Donate = ({ description, buttonText }) => (
  <div className="donate">
		<Tab {...tabData} isInverted />
    <div className="donate__cta">
      <button className="btn btn--style-g donate__btn">Donate £10 Now</button>
    </div>
  </div>
);

export default Donate;