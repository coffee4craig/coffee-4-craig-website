import React from 'react'

import PreviewCompatibleImage from './PreviewCompatibleImage';

const Credits = ({ title, creditList }) => {
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
                                {
                                    credit.link.url !== '#' ? (
                                        <a href={credit.link.url} target={credit.link.target}>
                                            <PreviewCompatibleImage cName="featured__logo" isContained imageInfo={credit.logo} />
                                        </a>
                                    ) : (
                                            <PreviewCompatibleImage cName="featured__logo" isContained imageInfo={credit.logo} />
                                        )
                                }
                                {
                                    credit.description && credit.description.length > 0 &&
                                    <p className="featured__description">
                                        {credit.description}
                                    </p>
                                }
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
};

export default Credits;
