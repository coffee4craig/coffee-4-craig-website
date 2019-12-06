import React from 'react';

import PreviewCompatibleImage from './PreviewCompatibleImage';

const FullWidthImage = ({ image, alt }) => {
	const backgroundImage = {};

	backgroundImage['image'] = image;
	backgroundImage['alt'] = alt;

	return (
		<PreviewCompatibleImage cName="full-width-image" imageInfo={backgroundImage}></PreviewCompatibleImage>
	)
};

export default FullWidthImage;