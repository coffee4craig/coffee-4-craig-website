import React, { useState, useEffect } from 'react';

import { StaticQuery, graphql } from 'gatsby';
import Tab from './Tab';
import CustomAmount from './CustomAmount';

const Donate = ({ list, buttonText, paypalLink }) => {
	const [isInverted, setIsInverted] = useState(true);
	const [customAmount, setCustomAmount] = useState(false);
	const tabButtons = [];
	const tabContent = [];

	if (list) {
		const donateData = list.values();

		for (const value of donateData) {
			const contentObj = {};

			contentObj['text'] = value.description;

			tabButtons.push(value.amount);
			tabContent.push(contentObj);
		}
	}

	const handleCustomAmount = () => {
		if (customAmount) {
			setCustomAmount(false);
		} else {
			setCustomAmount(true);
		}
	};

	useEffect(() => {
		setCustomAmount(false);
	}, []);

	return (
		<div className='donate'>
			{!customAmount ? (
				<Tab tabList={tabButtons} content={tabContent} isInverted />
			) : (
				<CustomAmount content={tabContent} />
			)}
			<div className={'donate__cta'}>
				<a href={paypalLink} className='btn btn--style-g donate__btn'>
					{buttonText}
				</a>
			</div>
			{isInverted && customAmount ? (
				<div class='tab__content-customAmount-inverted'>
					<a onClick={() => handleCustomAmount()}>
						Back to preset amounts
					</a>
				</div>
			) : (
				<div class='tab__content-customAmount-inverted'>
					<a onClick={() => handleCustomAmount()}>
						Enter a custom amount
					</a>
				</div>
			)}
		</div>
	);
};

export default () => (
	<StaticQuery
		query={graphql`
			query DonateWidget {
				markdownRemark(
					frontmatter: { templateKey: { eq: "donate-widget" } }
				) {
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
		`}
		render={data => {
			const { frontmatter } = data.markdownRemark;
			return <Donate {...frontmatter} />;
		}}
	/>
);
