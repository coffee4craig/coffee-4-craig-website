import React from 'react'

import PreviewCompatibleImage from './PreviewCompatibleImage';

const Credits = ({ title, creditList }) => {
    console.log(creditList);
    return (
    <div className="featured">
        <div className="featured__wrapper">
            <div className="featured__row_1">
                <p className="featured__row_1_text">{title}</p>
            </div>
            <div className="featured__row_2">
                {
                    creditList && creditList.length > 0 && creditList.map((credit, i) => (
                        <div key={i} className="featured___column">
                            <a href={credit.link.url} target={credit.link.target}>
                                <PreviewCompatibleImage cName="featured__logo" imageInfo={credit.logo} />
                            </a>
                        </div>
                    ))
                }
            </div>
        </div>   
    </div>
    )
};

export default Credits;
