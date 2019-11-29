import React from 'react';

const Friends = ({ title, friends }) => (
  <div className="friends">
    <div className="friends__wrapper">
      <div class="friends__section">
        {
          friends.map((friend, i) =>
            <div key={i} class="friends__section-col">
              <img src={friend.image.src} alt={friend.image.alt}></img>
              <div class="friends__section-col-text">
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