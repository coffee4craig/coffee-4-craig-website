import React from 'react';

const MenuCta = ({label, url}) => (
<div className="menu-cta">
  <div className="menu-cta__wrapper">
    <a href={url} className="btn btn--style-b menu-cta__button">{label}</a>
  </div>
</div>
);

export default MenuCta;