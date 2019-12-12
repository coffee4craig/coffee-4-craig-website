import React, { Component, Fragment } from 'react';
import Chat from '../img/icons/icon-chat.svg';
import Clothing from '../img/icons/icon-clothing.svg';
import Coldweather from '../img/icons/icon-coldweather.svg';
import Laptop from '../img/icons/icon-laptop.svg';
import Medical from '../img/icons/icon-medical.svg';
import Parcels from '../img/icons/icon-parcels.svg';
import Persons from '../img/icons/icon-persons.svg';
import Provisions from '../img/icons/icon-provisions.svg';
import Sandwich from '../img/icons/icon-sandwich.svg';
import Shower from '../img/icons/icon-shower.svg';
import Signpost from '../img/icons/icon-signpost.svg';

const renderGraphic = ({ icon }) => {
  const icons = {
    'chat': <Chat />,
    'clothing': <Clothing />,
    'coldweather': <Coldweather />,
    'laptop': <Laptop />,
    'medical': <Medical />,
    'parcels': <Parcels />,
    'persons': <Persons />,
    'provisions': <Provisions />,
    'sandwich': <Sandwich />,
    'shower': <Shower />,
    'signpost': <Signpost />,
  };
  return icons[icon];
};
export const Icon = props => <Fragment>{renderGraphic(props)}</Fragment>;
