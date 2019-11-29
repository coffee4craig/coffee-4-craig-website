import React from 'react';

const Friends = ({ title, friends}) => (
  <> 
    <h2>{title}</h2>
    {
      friends.map((friend, i) => 
        <div key={i}>
          <p>{friend.name}</p>
          <p>{friend.bio}</p>
          <img src={friend.image.src} alt={friend.image.alt} />
        </div>
      )
    }
  </>
);

export default Friends;