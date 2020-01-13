import React from 'react';
import PreviewCompatibleImage from './PreviewCompatibleImage';
import { IoMdClose } from 'react-icons/io';
import DonateItems from './DonateItems';

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
					<IoMdClose
						className='friendsModal-close'
						onClick={() => toggleModal(false)}
					/>
					<h2>{name}</h2>
					<p className='friendsModal-bio'>
						{
							' tem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,'
						}
					</p>
					<div className='friendsModal-needs'>
						<h3 className='friendsModal-needs_title'>
							People like {name} need...
						</h3>
						{/* <DonateItems inModal={true} /> */}
						<h3>Or</h3>
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
