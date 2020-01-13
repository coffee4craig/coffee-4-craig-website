import React, { useState } from 'react';

import PreviewCompatibleImage from './PreviewCompatibleImage';
import FriendsModal from './FriendsModal';

const Friends = ({ title, friendsList }) => {
	const [modalActive, setModalActive] = useState(false);
	const [activeFriend, setActiveFriend] = useState({});
	const [friendIndex, setFriendIndex] = useState(0);

	const getActiveModal = index => {
		const activeFriend = friendsList[index];
	};

	return (
		<div className='friends'>
			<div className='friends__wrapper'>
				<h2 className='friends__title'>{title}</h2>
				<div className='friends__grid'>
					{friendsList &&
						friendsList.length > 0 &&
						friendsList.map((friend, i) => (
							<>
								<div key={i} class='friends__section-col'>
									<PreviewCompatibleImage
										cName=''
										imageInfo={friend.profileImage}
									/>
									<div className='friends__section-col-text'>
										<h2>{friend.name}</h2>
										<p>{friend.bio}</p>
										<button
											className='btn btn--style-g'
											onClick={() => {
												setModalActive(true);
												setFriendIndex(i);
											}}
										>{`View ${friend.name}'s Story`}</button>
									</div>
								</div>
								{modalActive && friendIndex === i ? (
									<FriendsModal
										{...friend}
										toggleModal={setModalActive}
									/>
								) : null}
							</>
						))}
				</div>
			</div>
		</div>
	);
};

export default Friends;
