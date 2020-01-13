import React from 'react';

import PreviewCompatibleImage from './PreviewCompatibleImage';

const DonateItems = ({ title, text, list, cta }, inModal) => {
	return (
		<div className={inModal ? `donate-items__inModal` : `donate-items`}>
			<div className={inModal ? `donate-items__wrapper__inModal` : ''}>
				<div className='donate-items__row_1'>
					<h2 className='donate-items-title'>{title}</h2>
					<p className='donate-items-subtitle'>{text}</p>
				</div>
				<div className='donate-items__row_2'>
					{list &&
						list.length > 0 &&
						list.map((item, i) => (
							<div key={i} className='donate-items__column'>
								<PreviewCompatibleImage
									cName='donate-item__image'
									imageInfo={item.image}
								/>
								<p className='donate-items-label'>
									{item.label}
								</p>
								<a
									className='btn btn--amazon donate-items-button'
									href={item.cta.url}
								>
									<em>{item.cta.label}</em>
								</a>
							</div>
						))}
				</div>
				<div className='donate-items__row_3'>
					<a className='btn btn--amazon donate-items-wishlist-button'>
						<em>View our full Amazon wish list</em>
					</a>
				</div>
			</div>
		</div>
	);
};

export default DonateItems;
