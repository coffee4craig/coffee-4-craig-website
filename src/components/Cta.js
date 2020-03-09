import React from 'react';

const Cta = ({label, url}) => (
<div className="cta">
  <div className="cta__wrapper">
    <a href={url} className="btn btn--style-b cta__button">{label}</a>
  </div>
</div>
);

export default Cta;