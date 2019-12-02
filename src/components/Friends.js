import React from 'react';

import PreviewCompatibleImage from './PreviewCompatibleImage';

const Friends = ({ title, friendsList }) => (
  <> 
    <h2>{title}</h2>
    {
      friendsList.map((friend, i) => 
        <div key={i}>
          <p>{friend.name}</p>
          <p>{friend.bio}</p>
          <PreviewCompatibleImage cName="" imageInfo={friend.profileImage} />
        </div>
      )
    }
  </>
);

export default Friends;