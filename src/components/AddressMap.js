import React from 'react';
import Map from '../img/map_location.png';
const AddressMap = () => (
  <div className="address-map">
    <div class="address-map__wrapper">
      <div class="address-map__column">
        <img src={Map}></img>
      </div>
      <div class="address-map__column">
        <h3>Manchester Drop-in</h3>
        <div class="address-map__row">
          <div class="address-map__column-address">
            <p class="address-map__row-title">Address</p>
            <p>Centre Point North,<br/>
            52 oldham Street,<br/> 
            M4 1LE​
            </p>
          </div>
          <div class="address-map__column-address">
            <p class="address-map__row-title">Oppening Hours</p>
            <p>Monday to Friday  <br/> 19:00 - 21:00 </p>
            <p>Saturday and Sunday <br/> 17:00 - 19:00 </p>
          </div>
        </div>
        <div class="address-map__row">
          <div class="address-map__column-address">
            <p class="address-map__row-title">Phone</p>
            <p>[phone number 1] <br/>[phone number 2]</p>
          </div>
          <div class="address-map__column-address">
            <p class="address-map__row-open-title">We are open 24h</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default AddressMap;