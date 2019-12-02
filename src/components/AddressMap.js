import React from 'react';

const AddressMap = ({ title, address, telephone, openingHours }) => (
  <>
    <p>{title}</p>
    <p>{address.title}</p>
    <p>{address.addressLine1}</p>
    <p>{address.addressLine2}</p>
    <p>{address.postcode}</p>
    <p>{telephone.title}</p>
    <p>{telephone.phoneNumberOne}</p>
    <p>{telephone.phoneNumberTwo}</p>
    <p>{openingHours.title}</p>
    <p>{openingHours.monFriLabel}</p>
    <p>{openingHours.monFriTime}</p>
    <p>{openingHours.satSunLabel}</p>
    <p>{openingHours.satSunTime}</p>
  </>
);

export default AddressMap;