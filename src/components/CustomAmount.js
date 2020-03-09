import React, { useState, useEffect } from 'react';

const CustomAmount = ({ content }) => {
	const [amountToDonate, setAmountToDonate] = useState(5);

	return (
		<div className='customAmount__form'>
			<p className='customAmount__form-content'>{content[1].text} </p>
			<label className='customAmount__form-label'>
				Enter your donation amount
				<span className='customAmount__form-placeholder'>£</span>
				<input
					onChange={e => setAmountToDonate(e.target.value)}
					value={amountToDonate}
					class='customAmount__form-input'
					autoFocus
				/>
			</label>
		</div>
	);
};

export default CustomAmount;
