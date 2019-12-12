import React from 'react';
import Map from '../img/map_location.png';

const AddressMap = ({ title, address, telephone, openingHours }) => (
    <div class="address-map">
      <div className="address-map__wrapper">
        <div class="address-map__column">
          <img src={Map}></img>
        </div>
        <div class="address-map__column">
          <h3 class="title">{title}</h3>
          <div class="address-map__row">
          {
            address &&
            <div class="address-map__column-address">
              <p class="address-map__row-title">{address.title}</p>
              <p>{address.addressLine1}<br/>
              {address.addressLine2},<br/>
              {address.postcode}
              </p>
            </div>
          }
          {
            openingHours &&
            <div class="address-map__column-address">
              <p class="address-map__row-title">{openingHours.title}</p>
              <p>{openingHours.monFriLabel} <br/> {openingHours.monFriTime} </p>
              <p>{openingHours.satSunLabel} <br/> {openingHours.satSunTime} </p>
            </div>
          }
          </div>
          <div class="address-map__row">
          {
            telephone &&
            <div class="address-map__column-address">
              <p class="address-map__row-title">{telephone.title}</p>
              <p>{telephone.phoneNumberOne} <br/>{telephone.phoneNumberTwo}</p>
            </div>
          }
          </div>
        </div>
      </div>
    </div>
);

export default AddressMap;
