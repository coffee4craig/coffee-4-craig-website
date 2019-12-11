import React from 'react';

const CtaBlock = ({ title, link }) => (
<div className="cta-block">
  <div className="cta-block__wrapper">
    <h2 className="cta-block__title">{title}</h2>
    <a href={link.url} className="btn btn--style-f cta-block__button"><em>{link.label}</em></a>
  </div>
</div>
);

export default CtaBlock;