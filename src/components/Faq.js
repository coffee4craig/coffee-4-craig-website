import React from 'react';
import FaqCard from './FaqCard';

const Faq = ({faqTitle, faqList}) => {
	return (
		<div className="faq-container">
			<h2 className="faq-title">{faqTitle}</h2>
			{
        faqList && faqList.length > 0 && faqList.map(item => {
				return <FaqCard {...item} />;
			})}
		</div>
	);
};

export default Faq;
