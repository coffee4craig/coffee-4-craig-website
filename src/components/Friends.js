import React from 'react';

import PreviewCompatibleImage from './PreviewCompatibleImage';

const Friends = ({ title, friendsList }) => (
  <div className="friends">
    <div className="friends__wrapper">
        <h2 className="friends__title">{title}</h2>
        <div className="friends__grid">
          {
            friendsList && friendsList.length > 0 && friendsList.map((friend, i) =>
              <div key={i} class="friends__section-col">
                <PreviewCompatibleImage cName="" imageInfo={friend.profileImage} />
                <div className="friends__section-col-text">
                  <h2>{friend.name}</h2>
                  <p>{friend.bio}</p>
                </div>
              </div>
            )
          }
        </div>
      </div>
    </div>
);

export default Friends;