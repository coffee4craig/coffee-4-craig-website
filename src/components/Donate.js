import React from 'react';

import { StaticQuery, graphql } from 'gatsby';
import Tab from './Tab';

const Donate = ({ list, buttonText, paypalLink }) => {
  const tabButtons = [];
  const tabContent = [];

  if (list) {
    const donateData = list.values();

    for (const value of donateData) {
      const contentObj = {};

      contentObj['text'] = value.description;

      tabButtons.push(value.amount)
      tabContent.push(contentObj);
    }
  }

  return(
    <div className="donate">
      <Tab tabList={tabButtons} content={tabContent} isInverted />
      <div className="donate__cta">
        <a href={paypalLink} className="btn btn--style-g donate__btn">{buttonText}</a>
      </div>
    </div>
  )
};

export default () => (
  <StaticQuery
    query={
      graphql`
  query DonateWidget {
    markdownRemark(frontmatter: { templateKey: { eq: "donate-widget" } }) {
      frontmatter {
        list {
          amount
          description
        }
        buttonText
        paypalLink
      }
    }
  }
`
    }
    render={data => {
      const { frontmatter } = data.markdownRemark
      return (
      <Donate {...frontmatter}/>
    )}}
  />
);
