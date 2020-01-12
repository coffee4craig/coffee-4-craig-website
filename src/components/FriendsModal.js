import React from 'react';
import PreviewCompatibleImage from './PreviewCompatibleImage';

const FriendsModal = ({ name, bio, profileImage, toggleModal }) => {
	return (
		<>
			<div
				className='friendsModal-overlay'
				onClick={() => toggleModal(false)}
			></div>
			<div className='friendsModal-container'>
				<PreviewCompatibleImage
					cName='friendsModal-image'
					imageInfo={profileImage}
				/>

				<div className='friendsModal-content-container'>
					<button onClick={() => toggleModal(false)}>
						Test Close
					</button>
					<h2>{name}</h2>
					<p>{bio}</p>
					<div className='friendsModal-needs'>
						<h4>People like {name} need...</h4>
						<p>Or</p>
						<button className='btn btn--style-g'>
							Donate another amount
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default FriendsModal;
