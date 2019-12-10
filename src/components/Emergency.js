import React from 'react';
import PreviewCompatibleImage from './PreviewCompatibleImage';

const Emergency = ({title, emergencyContactList}) => (
  <div className="emergency">
    <div className="emergency__wrapper">
        <h2 className="emergency__title">{title}</h2>
        <div className="emergency__cotacts ">
            {
                emergencyContactList && emergencyContactList.length > 0 && emergencyContactList.map((emergencyConctact, i) =>
                    <div key={i} class="emergency__contacts-col">
                        <PreviewCompatibleImage cName="" imageInfo={emergencyConctact.emergencyContactImage} />
                        <div class="emergency__contact-text">
                            <p>{emergencyConctact.contact}</p>
                        </div>
                    </div>
                )
            }
        </div>
    </div>
  </div>
);

export default Emergency;
