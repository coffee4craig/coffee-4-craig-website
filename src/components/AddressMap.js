import React, { useState, useEffect } from 'react';
import Map from '../img/map_location.png';
import { MdLocationOn } from 'react-icons/md';
import { AiOutlineClockCircle } from 'react-icons/ai';
import moment from 'moment';

const AddressMap = ({ title, address, telephone, openingHours }) => {
	const [openIn, setOpenIn] = useState(0);

	useEffect(() => {
		const format = 'hh:mm:ss';
		const currentTime = moment();
		const currentDay = moment().day();
		let openingTimesToUse;

		if (currentDay <= 5) {
			openingTimesToUse = openingHours.monFriTime;
		} else {
			openingTimesToUse = openingHours.satSunLabel;
		}
		const openAt = moment(openingTimesToUse.split(' ')[0], format);
		const closeAt = moment(openingTimesToUse.split(' ')[2], format);
		if (currentTime.isBetween(openAt, closeAt)) {
			setOpenIn(0);
		} else {
			setOpenIn(
				`${currentTime
					.diff(openAt, 'hours')
					.toString()
					.replace('-', '')}`,
			);
		}
	}, []);

	return (
		<div class='address-map'>
			<div className='address-map__wrapper'>
				<div class='address-map__column'>
					<img src={Map}></img>
				</div>
				<div class='address-map__column'>
					<h3 class='title'>
						<MdLocationOn className='location-pin' />
						{title}
					</h3>
					<div class='address-map__row'>
						{address && (
							<div class='address-map__column-address'>
								<p class='address-map__row-title'>
									{address.title}
								</p>
								<p>
									{address.addressLine1}
									<br />
									{address.addressLine2},<br />
									{address.postcode}
								</p>
							</div>
						)}
						{openingHours && (
							<div class='address-map__column-address'>
								<p class='address-map__row-title'>
									{openingHours.title}
								</p>
								<p>
									{openingHours.monFriLabel} <br />{' '}
									{openingHours.monFriTime}{' '}
								</p>
								<p>
									{openingHours.satSunLabel} <br />{' '}
									{openingHours.satSunTime}{' '}
								</p>
							</div>
						)}
					</div>
					<div class='address-map__row'>
						{telephone && (
							<div class='address-map__column-address'>
								<p class='address-map__row-title'>
									{telephone.title}
								</p>
								<p>
									{telephone.phoneNumberOne} <br />
									{telephone.phoneNumberTwo}
								</p>
							</div>
						)}

						{openingHours && (
							<div class='address-map__column-address column-center'>
								<h5 className='address-map__openin'>
									<AiOutlineClockCircle className='address-map__clockicon' />
									We are open in{' '}
									{openIn === 0 ? 'now!' : `${openIn}HRS`}
								</h5>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default AddressMap;
